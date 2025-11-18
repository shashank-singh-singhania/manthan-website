"use client";
import {
  Form,
  Input,
  Select,
  Upload,
  Button,
  Divider,
  Modal,
  ConfigProvider,
} from "antd";
import {
  UploadOutlined,
  PlusOutlined,
  MinusCircleOutlined,
} from "@ant-design/icons";
import { ArrowLeft } from "lucide-react";
import toast from "react-hot-toast";

const { Option } = Select;

export default function OfflineRegisterForm({
  form,
  classes,
  sections,
  schools,
  teamMembers,
  emailVerified,
  isOtpModalVisible,
  otp,
  otpLoading,
  onEmailVerification,
  onOtpVerification,
  onOtpModalCancel,
  onOtpChange,
  onPincodeVerification,
  onAddTeamMember,
  onRemoveTeamMember,
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
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#5843b5",
          colorInfo: "#5843b5",
          colorLink: "#5843b5",
          colorSuccess: "#15b7c6",
          borderRadius: 8,
        },
        components: {
          Button: {
            colorPrimary: "#5843b5",
            algorithm: true,
          },
          Input: {
            colorPrimary: "#5843b5",
            colorPrimaryHover: "#6b52d4",
          },
          Select: {
            colorPrimary: "#5843b5",
            colorPrimaryHover: "#6b52d4",
          },
        },
      }}
    >
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-6">
        <div className="w-full max-w-4xl">
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10">
            <div className="mb-6">
              <a
                href="/"
                className="hidden md:flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-primary hover:bg-primary/10 rounded-lg transition-colors border border-gray-200 hover:border-primary mb-4 w-fit"
              >
                <ArrowLeft className="w-5 h-5" />
              </a>
              <div className="text-center">
                <h1 className="text-3xl md:text-4xl font-bold mb-2 text-primary">
                  MANTHAN 3.0
                </h1>
                <p className="text-sm md:text-base text-gray-600">
                  Team Registration Form - Offline Quiz Competition
                </p>
              </div>
            </div>

            <Form
              form={form}
              name="teamRegister"
              layout="vertical"
              size="large"
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              <Form.Item
                label={
                  <span className="text-gray-700 font-semibold">Team Name</span>
                }
                name="teamName"
                className="enabled-field"
                rules={[
                  { required: true, message: "Enter your team name" },
                  {
                    min: 2,
                    message: "Team name must be at least 2 characters",
                  },
                ]}
              >
                <Input
                  placeholder="Enter your team name"
                  className="rounded-lg"
                />
              </Form.Item>

              <Divider
                orientation="left"
                className="text-lg font-semibold text-blue-600"
              >
                Team Leader Details
              </Divider>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4">
                <Form.Item
                  label={<span className="text-gray-700">First Name</span>}
                  name="leaderFirstName"
                  className="enabled-field"
                  rules={[
                    { required: true, message: "Enter first name" },
                    {
                      pattern: /^[A-Za-z]+$/,
                      message: "Enter a valid first name",
                    },
                  ]}
                >
                  <Input
                    placeholder="Enter first name"
                    className="rounded-lg"
                  />
                </Form.Item>

                <Form.Item
                  label={<span className="text-gray-700">Last Name</span>}
                  name="leaderLastName"
                  className="enabled-field"
                  rules={[
                    {
                      pattern: /^[A-Za-z]+$/,
                      message: "Enter a valid last name",
                    },
                  ]}
                >
                  <Input placeholder="Enter last name" className="rounded-lg" />
                </Form.Item>

                <Form.Item
                  label={<span className="text-gray-700">Email</span>}
                  name="leaderEmail"
                  className={!emailVerified ? "enabled-field" : ""}
                  rules={[
                    { required: true, message: "Enter email" },
                    { type: "email", message: "Enter a valid email" },
                  ]}
                >
                  <Input
                    placeholder="Enter email"
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
                  name="leaderPhone"
                  className={emailVerified ? "enabled-field" : ""}
                  rules={[
                    { required: true, message: "Enter phone number" },
                    {
                      pattern: /^[6-9][0-9]{9}$/,
                      message: "Enter a valid 10-digit number",
                    },
                  ]}
                >
                  <Input
                    placeholder="Enter phone number"
                    className="rounded-lg"
                    maxLength={10}
                    disabled={!emailVerified}
                  />
                </Form.Item>

                <Form.Item
                  label={<span className="text-gray-700">Aadhar Number</span>}
                  name="leaderAadhar"
                  className={emailVerified ? "enabled-field" : ""}
                  rules={[
                    { required: true, message: "Enter aadhar number" },
                    {
                      pattern: /^[0-9]{12}$/,
                      message: "Enter a valid 12-digit aadhar number",
                    },
                  ]}
                >
                  <Input
                    placeholder="Enter aadhar number"
                    className="rounded-lg"
                    maxLength={12}
                    disabled={!emailVerified}
                  />
                </Form.Item>

                <Form.Item
                  label={<span className="text-gray-700">Pincode</span>}
                  name="leaderPincode"
                  className={emailVerified ? "enabled-field" : ""}
                  rules={[
                    { required: true, message: "Enter pincode" },
                    {
                      pattern: /^[0-9]{6}$/,
                      message: "Enter a valid 6-digit pincode",
                    },
                  ]}
                >
                  <Input
                    placeholder="Enter pincode"
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
                  name="leaderState"
                  rules={[{ required: true, message: "Enter state" }]}
                >
                  <Input
                    placeholder="Auto-filled from pincode"
                    className="rounded-lg"
                    disabled
                  />
                </Form.Item>

                <Form.Item
                  label={<span className="text-gray-700">District</span>}
                  name="leaderDistrict"
                  rules={[{ required: true, message: "Enter district" }]}
                >
                  <Input
                    placeholder="Auto-filled from pincode"
                    className="rounded-lg"
                    disabled
                  />
                </Form.Item>

                <Form.Item
                  label={<span className="text-gray-700">School Name</span>}
                  name="leaderSchool"
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
                  name="leaderClass"
                  className={emailVerified ? "enabled-field" : ""}
                  rules={[{ required: true, message: "Select class" }]}
                >
                  <Select
                    placeholder="Select class"
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
                  name="leaderSection"
                  className={emailVerified ? "enabled-field" : ""}
                  rules={[{ required: true, message: "Select section" }]}
                >
                  <Select
                    placeholder="Select section"
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
                  name="leaderSchoolId"
                  valuePropName="fileList"
                  getValueFromEvent={(e) =>
                    Array.isArray(e) ? e : e?.fileList
                  }
                  rules={[{ required: true, message: "Upload school ID" }]}
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
                  name="leaderHighSchoolCertificate"
                  valuePropName="fileList"
                  getValueFromEvent={(e) =>
                    Array.isArray(e) ? e : e?.fileList
                  }
                  rules={[
                    {
                      required: true,
                      message: "Upload high school certificate",
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

              <Form.List name="members">
                {(fields) => (
                  <>
                    {teamMembers.map((_, index) => (
                      <div key={index}>
                        <Divider
                          orientation="left"
                          className="text-lg font-semibold text-blue-600"
                        >
                          Team Member {index + 2} Details
                          <MinusCircleOutlined
                            className="ml-4 text-red-500 cursor-pointer hover:text-red-700"
                            onClick={() => onRemoveTeamMember(index)}
                          />
                        </Divider>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4">
                          <Form.Item
                            label={
                              <span className="text-gray-700">First Name</span>
                            }
                            name={[index, "firstName"]}
                            className="enabled-field"
                            rules={[
                              { required: true, message: "Enter first name" },
                              {
                                pattern: /^[A-Za-z]+$/,
                                message: "Enter a valid first name",
                              },
                            ]}
                          >
                            <Input
                              placeholder="Enter first name"
                              className="rounded-lg"
                            />
                          </Form.Item>

                          <Form.Item
                            label={
                              <span className="text-gray-700">Last Name</span>
                            }
                            name={[index, "lastName"]}
                            className="enabled-field"
                            rules={[
                              {
                                pattern: /^[A-Za-z]+$/,
                                message: "Enter a valid last name",
                              },
                            ]}
                          >
                            <Input
                              placeholder="Enter last name"
                              className="rounded-lg"
                            />
                          </Form.Item>

                          <Form.Item
                            label={<span className="text-gray-700">Email</span>}
                            name={[index, "email"]}
                            className="enabled-field"
                            rules={[
                              { required: true, message: "Enter email" },
                              { type: "email", message: "Enter a valid email" },
                            ]}
                          >
                            <Input
                              placeholder="Enter email"
                              className="rounded-lg"
                            />
                          </Form.Item>

                          <Form.Item
                            label={
                              <span className="text-gray-700">
                                Phone Number
                              </span>
                            }
                            name={[index, "phone"]}
                            className="enabled-field"
                            rules={[
                              { required: true, message: "Enter phone number" },
                              {
                                pattern: /^[6-9][0-9]{9}$/,
                                message: "Enter a valid 10-digit number",
                              },
                            ]}
                          >
                            <Input
                              placeholder="Enter phone number"
                              className="rounded-lg"
                              maxLength={10}
                            />
                          </Form.Item>

                          <Form.Item
                            label={
                              <span className="text-gray-700">
                                Aadhar Number
                              </span>
                            }
                            name={[index, "aadhar"]}
                            className="enabled-field"
                            rules={[
                              {
                                required: true,
                                message: "Enter aadhar number",
                              },
                              {
                                pattern: /^[0-9]{12}$/,
                                message: "Enter a valid 12-digit aadhar number",
                              },
                            ]}
                          >
                            <Input
                              placeholder="Enter aadhar number"
                              className="rounded-lg"
                              maxLength={12}
                            />
                          </Form.Item>

                          <Form.Item
                            label={
                              <span className="text-gray-700">Pincode</span>
                            }
                            name={[index, "pincode"]}
                            className="enabled-field"
                            rules={[
                              { required: true, message: "Enter pincode" },
                              {
                                pattern: /^[0-9]{6}$/,
                                message: "Enter a valid 6-digit pincode",
                              },
                            ]}
                          >
                            <Input
                              placeholder="Enter pincode"
                              className="rounded-lg"
                              maxLength={6}
                              onChange={(e) => {
                                const value = e.target.value.replace(/\D/g, "");
                                if (value.length === 6) {
                                  onPincodeVerification(value, index);
                                }
                              }}
                            />
                          </Form.Item>

                          <Form.Item
                            label={<span className="text-gray-700">State</span>}
                            name={[index, "state"]}
                            rules={[{ required: true, message: "Enter state" }]}
                          >
                            <Input
                              placeholder="Auto-filled from pincode"
                              className="rounded-lg"
                              disabled
                            />
                          </Form.Item>

                          <Form.Item
                            label={
                              <span className="text-gray-700">District</span>
                            }
                            name={[index, "district"]}
                            rules={[
                              { required: true, message: "Enter district" },
                            ]}
                          >
                            <Input
                              placeholder="Auto-filled from pincode"
                              className="rounded-lg"
                              disabled
                            />
                          </Form.Item>

                          <Form.Item
                            label={
                              <span className="text-gray-700">School Name</span>
                            }
                            name={[index, "school"]}
                            className={
                              schools.length > 0 ? "enabled-field" : ""
                            }
                            rules={[
                              {
                                required: true,
                                message: "Select your school name",
                              },
                            ]}
                          >
                            <Select
                              showSearch
                              placeholder="Select your school"
                              className="rounded-lg"
                              disabled={schools.length === 0}
                              optionFilterProp="label"
                              filterOption={(input, option) =>
                                option?.label
                                  ?.toLowerCase()
                                  .includes(input.toLowerCase())
                              }
                              options={schools.map((school) => ({
                                label: `${school.name} (${school.address})`,
                                value: school.uuid,
                              }))}
                            />
                          </Form.Item>

                          <Form.Item
                            label={<span className="text-gray-700">Class</span>}
                            name={[index, "class"]}
                            className="enabled-field"
                            rules={[
                              { required: true, message: "Select class" },
                            ]}
                          >
                            <Select
                              placeholder="Select class"
                              className="rounded-lg"
                            >
                              {classes.map((cls) => (
                                <Option key={cls.uuid} value={cls.uuid}>
                                  {cls.label}
                                </Option>
                              ))}
                            </Select>
                          </Form.Item>

                          <Form.Item
                            label={
                              <span className="text-gray-700">Section</span>
                            }
                            name={[index, "section"]}
                            className="enabled-field"
                            rules={[
                              { required: true, message: "Select section" },
                            ]}
                          >
                            <Select
                              placeholder="Select section"
                              className="rounded-lg"
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
                              <span className="text-gray-700">
                                School ID (Max 5MB)
                              </span>
                            }
                            name={[index, "schoolId"]}
                            valuePropName="fileList"
                            getValueFromEvent={(e) =>
                              Array.isArray(e) ? e : e?.fileList
                            }
                            rules={[
                              { required: true, message: "Upload school ID" },
                            ]}
                          >
                            <Upload beforeUpload={beforeUpload} maxCount={1}>
                              <Button
                                icon={<UploadOutlined />}
                                className="rounded-lg"
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
                            name={[index, "highSchoolCertificate"]}
                            valuePropName="fileList"
                            getValueFromEvent={(e) =>
                              Array.isArray(e) ? e : e?.fileList
                            }
                            rules={[
                              {
                                required: true,
                                message: "Upload high school certificate",
                              },
                            ]}
                          >
                            <Upload beforeUpload={beforeUpload} maxCount={1}>
                              <Button
                                icon={<UploadOutlined />}
                                className="rounded-lg"
                              >
                                Upload High School Certificate
                              </Button>
                            </Upload>
                          </Form.Item>
                        </div>
                      </div>
                    ))}
                  </>
                )}
              </Form.List>

              {teamMembers.length < 2 && (
                <div className="text-center my-6">
                  <Button
                    type="dashed"
                    onClick={onAddTeamMember}
                    icon={<PlusOutlined />}
                    size="large"
                    className="rounded-lg"
                    disabled={!emailVerified}
                  >
                    Add Team Member {teamMembers.length + 2}
                  </Button>
                </div>
              )}

              <Form.Item className="mb-0 mt-8">
                <button
                  type="submit"
                  disabled={!emailVerified || teamMembers.length !== 2}
                  className="w-full h-12 rounded-lg text-base font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  Register Team
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
          border-color: #2563eb;
        }
        .enabled-field .ant-input:not(:disabled):hover,
        .enabled-field
          .ant-select:not(.ant-select-disabled):hover
          .ant-select-selector,
        .enabled-field .ant-input-otp:not(:disabled):hover {
          border-color: #2563eb;
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
    </ConfigProvider>
  );
}
