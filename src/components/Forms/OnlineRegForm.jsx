"use client";
import { Form, Input, Select, Upload, Button, Modal } from "antd";
import { UploadOutlined } from "@ant-design/icons";

const { Option } = Select;

export default function OnlineRegisterForm({
  form,
  classes,
  sections,
  schools,
  schoolsLoading,
  emailVerified,
  isOtpModalVisible,
  otp,
  otpLoading,
  onEmailVerification,
  onOtpVerification,
  onOtpModalCancel,
  onOtpChange,
  onPincodeVerification,
  onStateDistrictChange,
  onFinish,
  onFinishFailed,
}) {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-4">
        <div className="w-full max-w-3xl">
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10">
            <div className="text-center mb-6">
              <h1 className="text-3xl md:text-4xl font-bold mb-2 text-blue-600">
                MANTHAN 3.0
              </h1>
              <p className="text-sm md:text-base text-gray-600">
                Register for the online quiz
              </p>
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
                    onBlur={onPincodeVerification}
                    disabled={!emailVerified}
                  />
                </Form.Item>

                <Form.Item
                  label={<span className="text-gray-700">State</span>}
                  name="state"
                  rules={[{ required: true, message: "Enter your state" }]}
                >
                  <Input
                    placeholder="Enter your state"
                    className="rounded-lg"
                    disabled={!emailVerified}
                    onChange={onStateDistrictChange}
                  />
                </Form.Item>

                <Form.Item
                  label={<span className="text-gray-700">District</span>}
                  name="district"
                  rules={[{ required: true, message: "Enter your district" }]}
                >
                  <Input
                    placeholder="Enter your district"
                    className="rounded-lg"
                    disabled={!emailVerified}
                    onChange={onStateDistrictChange}
                  />
                </Form.Item>

                <Form.Item
                  label={<span className="text-gray-700">School Name</span>}
                  name="school"
                  rules={[
                    { required: true, message: "Select your school name" },
                  ]}
                >
                  <Select
                    showSearch
                    placeholder="Select your school"
                    className="rounded-lg"
                    disabled={!emailVerified || schools.length === 0}
                    loading={schoolsLoading}
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
                  label={<span className="text-gray-700">School ID</span>}
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
                    beforeUpload={() => false}
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
                      High School Certificate
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
                    beforeUpload={() => false}
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
          <p className="text-gray-600 mb-4">
            Enter the 6-digit OTP sent to your email
          </p>
          <Input
            placeholder="Enter OTP"
            value={otp}
            onChange={onOtpChange}
            maxLength={6}
            size="large"
            className="rounded-lg"
          />
          <div className="mt-4"></div>
          <Button
            type="primary"
            onClick={onOtpVerification}
            loading={otpLoading}
            className="w-full rounded-lg"
            size="large"
          >
            Verify OTP
          </Button>
        </div>
      </Modal>
    </>
  );
}
