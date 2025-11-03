"use client";
import { Form, Input, Select, Upload, Button, Divider, Modal } from "antd";
import {
  UploadOutlined,
  PlusOutlined,
  MinusCircleOutlined,
} from "@ant-design/icons";

const { Option } = Select;

export default function OfflineRegisterForm({
  form,
  classes,
  sections,
  teamMembers,
  emailVerified,
  isOtpModalVisible,
  otp,
  otpLoading,
  onEmailVerification,
  onOtpVerification,
  onOtpModalCancel,
  onOtpChange,
  onLeaderPincodeVerification,
  onMemberPincodeVerification,
  onAddTeamMember,
  onRemoveTeamMember,
  onFinish,
  onFinishFailed,
}) {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-4">
        <div className="w-full max-w-3xl">
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10">
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-4xl font-bold mb-2 text-blue-600">
                MANTHAN 3.0
              </h1>
              <p className="text-sm md:text-base text-gray-600">
                Team Registration for the offline quiz
              </p>
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
                  disabled={emailVerified}
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
                    disabled={emailVerified}
                  />
                </Form.Item>

                <Form.Item
                  label={<span className="text-gray-700">Last Name</span>}
                  name="leaderLastName"
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
                    disabled={emailVerified}
                  />
                </Form.Item>

                <Form.Item
                  label={<span className="text-gray-700">Email</span>}
                  name="leaderEmail"
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
                    onBlur={onLeaderPincodeVerification}
                    disabled={!emailVerified}
                  />
                </Form.Item>

                <Form.Item
                  label={<span className="text-gray-700">State</span>}
                  name="leaderState"
                  rules={[{ required: true, message: "Enter state" }]}
                >
                  <Input
                    placeholder="Enter state"
                    className="rounded-lg"
                    disabled={!emailVerified}
                  />
                </Form.Item>

                <Form.Item
                  label={<span className="text-gray-700">District</span>}
                  name="leaderDistrict"
                  rules={[{ required: true, message: "Enter district" }]}
                >
                  <Input
                    placeholder="Enter district"
                    className="rounded-lg"
                    disabled={!emailVerified}
                  />
                </Form.Item>

                <Form.Item
                  label={<span className="text-gray-700">School Name</span>}
                  name="leaderSchool"
                  rules={[{ required: true, message: "Enter school name" }]}
                >
                  <Input
                    placeholder="Enter school name"
                    className="rounded-lg"
                    disabled={!emailVerified}
                  />
                </Form.Item>

                <Form.Item
                  label={<span className="text-gray-700">Class</span>}
                  name="leaderClass"
                  rules={[{ required: true, message: "Select class" }]}
                >
                  <Select
                    placeholder="Select class"
                    className="rounded-lg"
                    disabled={!emailVerified}
                  >
                    {classes.map((cls) => (
                      <Option key={cls.id} value={cls.id}>
                        {cls.name}
                      </Option>
                    ))}
                  </Select>
                </Form.Item>

                <Form.Item
                  label={<span className="text-gray-700">Section</span>}
                  name="leaderSection"
                  rules={[{ required: true, message: "Select section" }]}
                >
                  <Select
                    placeholder="Select section"
                    className="rounded-lg"
                    disabled={!emailVerified}
                  >
                    {sections.map((section) => (
                      <Option key={section.id} value={section.id}>
                        {section.name}
                      </Option>
                    ))}
                  </Select>
                </Form.Item>

                <Form.Item
                  label={<span className="text-gray-700">School ID</span>}
                  name="leaderSchoolId"
                  valuePropName="fileList"
                  getValueFromEvent={(e) =>
                    Array.isArray(e) ? e : e?.fileList
                  }
                  rules={[{ required: true, message: "Upload school ID" }]}
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
                      Upload School ID
                    </Button>
                  </Upload>
                </Form.Item>

                <Form.Item
                  label={
                    <span className="text-gray-700">
                      High School Certificate
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
                    beforeUpload={() => false}
                    maxCount={1}
                    disabled={!emailVerified}
                  >
                    <Button
                      icon={<UploadOutlined />}
                      className="rounded-lg"
                      disabled={!emailVerified}
                    >
                      Upload Certificate
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
                              onBlur={() => onMemberPincodeVerification(index)}
                            />
                          </Form.Item>

                          <Form.Item
                            label={<span className="text-gray-700">State</span>}
                            name={[index, "state"]}
                            rules={[{ required: true, message: "Enter state" }]}
                          >
                            <Input
                              placeholder="Enter state"
                              className="rounded-lg"
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
                              placeholder="Enter district"
                              className="rounded-lg"
                            />
                          </Form.Item>

                          <Form.Item
                            label={
                              <span className="text-gray-700">School Name</span>
                            }
                            name={[index, "school"]}
                            rules={[
                              { required: true, message: "Enter school name" },
                            ]}
                          >
                            <Input
                              placeholder="Enter school name"
                              className="rounded-lg"
                            />
                          </Form.Item>

                          <Form.Item
                            label={<span className="text-gray-700">Class</span>}
                            name={[index, "class"]}
                            rules={[
                              { required: true, message: "Select class" },
                            ]}
                          >
                            <Select
                              placeholder="Select class"
                              className="rounded-lg"
                            >
                              {classes.map((cls) => (
                                <Option key={cls.id} value={cls.id}>
                                  {cls.name}
                                </Option>
                              ))}
                            </Select>
                          </Form.Item>

                          <Form.Item
                            label={
                              <span className="text-gray-700">Section</span>
                            }
                            name={[index, "section"]}
                            rules={[
                              { required: true, message: "Select section" },
                            ]}
                          >
                            <Select
                              placeholder="Select section"
                              className="rounded-lg"
                            >
                              {sections.map((section) => (
                                <Option key={section.id} value={section.id}>
                                  {section.name}
                                </Option>
                              ))}
                            </Select>
                          </Form.Item>

                          <Form.Item
                            label={
                              <span className="text-gray-700">School ID</span>
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
                            <Upload beforeUpload={() => false} maxCount={1}>
                              <Button
                                icon={<UploadOutlined />}
                                className="rounded-lg"
                              >
                                Upload School ID
                              </Button>
                            </Upload>
                          </Form.Item>

                          <Form.Item
                            label={
                              <span className="text-gray-700">
                                High School Certificate
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
                            <Upload beforeUpload={() => false} maxCount={1}>
                              <Button
                                icon={<UploadOutlined />}
                                className="rounded-lg"
                              >
                                Upload Certificate
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
          <p className="text-gray-600 mb-4">
            Enter the 6-digit OTP sent to your email
          </p>
          <Input
            placeholder="Enter OTP"
            value={otp}
            onChange={onOtpChange}
            maxLength={6}
            size="large"
            className="rounded-lg mb-4"
          />
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
