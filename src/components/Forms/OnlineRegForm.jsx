"use client";
import { Form, Input, Select, Upload, Button, Modal } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { ArrowLeft } from "lucide-react";
import toast from "react-hot-toast";

const { Option } = Select;

export default function OnlineRegisterForm({
  form,
  classes,
  sections,
  schools,
  emailVerified,
  isOtpModalVisible,
  otp,
  otpLoading,
  onEmailVerification,
  onOtpVerification,
  onOtpModalCancel,
  onOtpChange,
  onPincodeVerification,
  onFinish,
  onFinishFailed,
}) {
  const beforeUpload = (file) => {
    const isLt5M = file.size / 1024 / 1024 < 5;
    if (!isLt5M) {
      toast.error("File size must be less than 5MB!");
      return Upload.LIST_IGNORE;
    }
    return false;
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-4">
        <div className="w-full max-w-3xl">
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10">
            <div className="flex items-center justify-between mb-6">
              <a
                href="/"
                className="p-2 hover:bg-gray-100 bg-blue-600 rounded-lg transition-colors"
              >
                <ArrowLeft className="w-6 h-6 text-white" />
              </a>
              <div className="flex-1 text-center">
                <h1 className="text-3xl md:text-4xl font-bold mb-2 text-blue-600">
                  MANTHAN 3.0
                </h1>
                <p className="text-sm md:text-base text-gray-600">
                  Register for the online quiz
                </p>
              </div>
              <div className="w-8"></div>
            </div>

            <Form
              form={form}
              name="register"
              layout="vertical"
              size="large"
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4">
                <Form.Item
                  label={<span className="text-gray-700">First Name</span>}
                  name="first_name"
                  className="enabled-field"
                  rules={[
                    { required: true, message: "Enter your first name" },
                    {
                      pattern: /^[A-Za-z]+$/,
                      message: "Enter a valid first name",
                    },
                  ]}
                >
                  <Input
                    placeholder="Enter your first name"
                    className="rounded-lg"
                  />
                </Form.Item>

                <Form.Item
                  label={<span className="text-gray-700">Last Name</span>}
                  name="last_name"
                  className="enabled-field"
                  rules={[
                    {
                      pattern: /^[A-Za-z]+$/,
                      message: "Enter a valid last name",
                    },
                  ]}
                >
                  <Input
                    placeholder="Enter your last name"
                    className="rounded-lg"
                  />
                </Form.Item>

                <Form.Item
                  label={<span className="text-gray-700">Email</span>}
                  name="email"
                  className={!emailVerified ? "enabled-field" : ""}
                  rules={[
                    { required: true, message: "Enter your email" },
                    { type: "email", message: "Enter a valid email" },
                  ]}
                >
                  <Input
                    placeholder="Enter your email"
                    className="rounded-lg"
                    disabled={emailVerified}
                    suffix={
                      emailVerified && (
                        <span className="text-green-600 font-bold">✓</span>
                      )
                    }
                  />
                </Form.Item>

                <Form.Item label=" ">
                  <Button
                    onClick={onEmailVerification}
                    disabled={emailVerified}
                    className="w-full rounded-lg"
                    type="primary"
                  >
                    {emailVerified ? "Verified" : "Verify Email"}
                  </Button>
                </Form.Item>

                <Form.Item
                  label={<span className="text-gray-700">Phone Number</span>}
                  name="phone_no"
                  className={emailVerified ? "enabled-field" : ""}
                  rules={[
                    { required: true, message: "Enter your phone number" },
                    {
                      pattern: /^[6-9][0-9]{9}$/,
                      message: "Enter a valid 10-digit number",
                    },
                  ]}
                >
                  <Input
                    placeholder="Enter your phone number"
                    className="rounded-lg"
                    maxLength={10}
                    disabled={!emailVerified}
                  />
                </Form.Item>

                <Form.Item
                  label={<span className="text-gray-700">Aadhar Number</span>}
                  name="aadhar_number"
                  className={emailVerified ? "enabled-field" : ""}
                  rules={[
                    { required: true, message: "Enter your aadhar number" },
                    {
                      pattern: /^[0-9]{12}$/,
                      message: "Enter a valid 12-digit aadhar number",
                    },
                  ]}
                >
                  <Input
                    placeholder="Enter your aadhar number"
                    className="rounded-lg"
                    maxLength={12}
                    disabled={!emailVerified}
                  />
                </Form.Item>

                <Form.Item
                  label={<span className="text-gray-700">Pincode</span>}
                  name="pincode"
                  className={emailVerified ? "enabled-field" : ""}
                  rules={[
                    { required: true, message: "Enter your pincode" },
                    {
                      pattern: /^[0-9]{6}$/,
                      message: "Enter a valid 6-digit pincode",
                    },
                  ]}
                >
                  <Input
                    placeholder="Enter your pincode"
                    className="rounded-lg"
                    maxLength={6}
                    disabled={!emailVerified}
                    onChange={(e) => {
                      const value = e.target.value.replace(/\D/g, "");
                      if (value.length === 6) {
                        onPincodeVerification(value);
                      }
                    }}
                  />
                </Form.Item>

                <Form.Item
                  label={<span className="text-gray-700">State</span>}
                  name="state"
                  rules={[{ required: true, message: "Enter your state" }]}
                >
                  <Input
                    placeholder="Auto-filled from pincode"
                    className="rounded-lg"
                    disabled
                  />
                </Form.Item>

                <Form.Item
                  label={<span className="text-gray-700">District</span>}
                  name="district"
                  rules={[{ required: true, message: "Enter your district" }]}
                >
                  <Input
                    placeholder="Auto-filled from pincode"
                    className="rounded-lg"
                    disabled
                  />
                </Form.Item>

                <Form.Item
                  label={<span className="text-gray-700">School Name</span>}
                  name="school"
                  className={
                    emailVerified && schools.length > 0 ? "enabled-field" : ""
                  }
                  rules={[
                    { required: true, message: "Select your school name" },
                  ]}
                >
                  <Select
                    showSearch
                    placeholder="Select your school"
                    className="rounded-lg"
                    disabled={!emailVerified || schools.length === 0}
                    optionFilterProp="label"
                    filterOption={(input, option) =>
                      option?.label?.toLowerCase().includes(input.toLowerCase())
                    }
                    options={schools.map((school) => ({
                      label: `${school.name} (${school.address})`,
                      value: school.uuid,
                    }))}
                  />
                </Form.Item>

                <Form.Item
                  label={<span className="text-gray-700">Class</span>}
                  name="class"
                  className={emailVerified ? "enabled-field" : ""}
                  rules={[{ required: true, message: "Select your class" }]}
                >
                  <Select
                    placeholder="Select your class"
                    className="rounded-lg"
                    disabled={!emailVerified}
                  >
                    {classes.map((cls) => (
                      <Option key={cls.uuid} value={cls.uuid}>
                        {cls.label}
                      </Option>
                    ))}
                  </Select>
                </Form.Item>

                <Form.Item
                  label={<span className="text-gray-700">Section</span>}
                  name="section"
                  className={emailVerified ? "enabled-field" : ""}
                  rules={[{ required: true, message: "Select your section" }]}
                >
                  <Select
                    placeholder="Select your section"
                    className="rounded-lg"
                    disabled={!emailVerified}
                  >
                    {sections.map((section) => (
                      <Option key={section.uuid} value={section.uuid}>
                        {section.label}
                      </Option>
                    ))}
                  </Select>
                </Form.Item>

                <Form.Item
                  label={
                    <span className="text-gray-700">School ID (Max 5MB)</span>
                  }
                  name="schoolId"
                  valuePropName="fileList"
                  getValueFromEvent={(e) =>
                    Array.isArray(e) ? e : e?.fileList
                  }
                  rules={[
                    { required: true, message: "Please upload your school ID" },
                  ]}
                >
                  <Upload
                    beforeUpload={beforeUpload}
                    maxCount={1}
                    disabled={!emailVerified}
                  >
                    <Button
                      icon={<UploadOutlined />}
                      className="rounded-lg"
                      disabled={!emailVerified}
                    >
                      Upload your School ID
                    </Button>
                  </Upload>
                </Form.Item>

                <Form.Item
                  label={
                    <span className="text-gray-700">
                      High School Certificate (Max 5MB)
                    </span>
                  }
                  name="highSchoolCertificate"
                  valuePropName="fileList"
                  getValueFromEvent={(e) =>
                    Array.isArray(e) ? e : e?.fileList
                  }
                  rules={[
                    {
                      required: true,
                      message: "Please upload your high school certificate",
                    },
                  ]}
                >
                  <Upload
                    beforeUpload={beforeUpload}
                    maxCount={1}
                    disabled={!emailVerified}
                  >
                    <Button
                      icon={<UploadOutlined />}
                      className="rounded-lg"
                      disabled={!emailVerified}
                    >
                      Upload High School Certificate
                    </Button>
                  </Upload>
                </Form.Item>
              </div>

              <Form.Item className="mb-0">
                <button
                  type="submit"
                  className="w-full h-12 rounded-lg text-base font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-colors mt-2 disabled:bg-gray-400 disabled:cursor-not-allowed"
                  disabled={!emailVerified}
                >
                  Register
                </button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>

      <Modal
        title="Verify Email"
        open={isOtpModalVisible}
        onCancel={onOtpModalCancel}
        footer={null}
        centered
      >
        <div className="py-4">
          <p className="text-gray-600 mb-4 text-center">
            Enter the 6-digit OTP sent to your email
          </p>

          <Input.OTP
            length={6}
            value={otp}
            onChange={onOtpChange}
            size="large"
            className="rounded-lg enabled-field"
            style={{ width: "100%", justifyContent: "center" }}
          />

          <Button
            type="primary"
            onClick={onOtpVerification}
            loading={otpLoading}
            className="w-full rounded-lg mt-6"
            size="large"
          >
            Verify OTP
          </Button>
        </div>
      </Modal>
      <style jsx global>{`
        .enabled-field .ant-input:not(:disabled),
        .enabled-field
          .ant-select:not(.ant-select-disabled)
          .ant-select-selector,
        .enabled-field .ant-input-otp:not(:disabled) {
          border-color: #60a5fa;
        }
        .enabled-field .ant-input:not(:disabled):hover,
        .enabled-field
          .ant-select:not(.ant-select-disabled):hover
          .ant-select-selector,
        .enabled-field .ant-input-otp:not(:disabled):hover {
          border-color: #3b82f6;
        }
        .enabled-field .ant-input:not(:disabled):focus,
        .enabled-field
          .ant-select:not(.ant-select-disabled).ant-select-focused
          .ant-select-selector,
        .enabled-field .ant-input-otp:not(:disabled):focus {
          border-color: #2563eb;
          box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.1);
        }
      `}</style>
    </>
  );
}
