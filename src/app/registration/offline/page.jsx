"use client";
import { Form, Input, Select, Upload, Button, Divider } from "antd";
import {
  UploadOutlined,
  PlusOutlined,
  MinusCircleOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import toast from "react-hot-toast";
import { endpoints } from "@/constants/urls";
import { apiCall } from "@/utils/api";

const { Option } = Select;

export default function TeamRegister() {
  const [form] = Form.useForm();
  const [schools, setSchools] = useState([]);
  const [classes, setClasses] = useState([]);
  const [sections, setSections] = useState([]);
  const [teamMembers, setTeamMembers] = useState([]);
  const [emailVerified, setEmailVerified] = useState(false);

  const fetchSchools = async () => {
    try {
      const response = await apiCall("get", endpoints.GET_SCHOOLS, {
        headers: { loader: false },
      });
      if (response.success) {
        setSchools(response.data.schools || []);
        setClasses(response.data.classes || []);
        setSections(response.data.sections || []);
      } else {
        toast.error("Failed to load schools, classes and sections");
      }
    } catch (error) {
      toast.error("Error loading data");
    }
  };

  const handleEmailVerification = async () => {
    const email = form.getFieldValue("leaderEmail");
    try {
      await form.validateFields(["leaderEmail"]);
    } catch {
      return;
    }

    if (!email || emailVerified) return;

    try {
      const response = await apiCall("post", endpoints.VERIFY_EMAIL, {
        data: { email },
      });

      if (response.success) {
        setEmailVerified(true);
        toast.success("Email verified successfully");
      } else {
        toast.error(response.data.message || "Email verification failed");
        form.setFieldValue("leaderEmail", "");
      }
    } catch (error) {
      toast.error("Error verifying email");
    }
  };

  const handleLeaderPincodeVerification = async () => {
    const pincode = form.getFieldValue("leaderPincode");
    try {
      await form.validateFields(["leaderPincode"]);
    } catch {
      return;
    }

    if (!pincode) return;

    try {
      const response = await apiCall("post", endpoints.VERIFY_PINCODE, {
        data: { pincode },
      });

      if (response.success) {
        form.setFieldsValue({
          leaderState: response.data.state,
          leaderDistrict: response.data.district,
        });
        toast.success("Pincode verified successfully");
      } else {
        toast.error(response.data.message || "Pincode verification failed");
        form.setFieldValue("leaderPincode", "");
      }
    } catch (error) {
      toast.error("Error verifying pincode");
    }
  };

  const handleMemberPincodeVerification = async (index) => {
    const pincode = form.getFieldValue(["members", index, "pincode"]);
    try {
      await form.validateFields([["members", index, "pincode"]]);
    } catch {
      return;
    }

    if (!pincode) return;

    try {
      const response = await apiCall("post", endpoints.VERIFY_PINCODE, {
        data: { pincode },
      });

      if (response.success) {
        const members = form.getFieldValue("members");
        members[index] = {
          ...members[index],
          state: response.data.state,
          district: response.data.district,
        };
        form.setFieldsValue({ members });
        toast.success("Pincode verified successfully");
      } else {
        toast.error(response.data.message || "Pincode verification failed");
        const members = form.getFieldValue("members");
        members[index].pincode = "";
        form.setFieldsValue({ members });
      }
    } catch (error) {
      toast.error("Error verifying pincode");
    }
  };

  const handleLeaderEmailChange = () => {
    setEmailVerified(false);
  };

  const addTeamMember = () => {
    if (teamMembers.length < 2) {
      setTeamMembers([...teamMembers, {}]);
    }
  };

  const removeTeamMember = (index) => {
    const newMembers = teamMembers.filter((_, i) => i !== index);
    setTeamMembers(newMembers);
    const members = form.getFieldValue("members") || [];
    members.splice(index, 1);
    form.setFieldsValue({ members });
  };

  const onFinish = async (values) => {
    if (!emailVerified) {
      toast.error("Please verify team leader's email first");
      return;
    }

    if (teamMembers.length !== 2) {
      toast.error("Please add exactly 2 team members");
      return;
    }

    console.log("Team Register:", values);
    const response = await apiCall("post", endpoints.REGISTER_TEAM, {
      data: values,
    });

    if (response.success) {
      toast.success(response.data.message);
      form.resetFields();
      setEmailVerified(false);
      setTeamMembers([]);
    } else {
      toast.error(response.data.error);
    }
  };

  const onFinishFailed = () => {
    toast.error("Please fill all required fields correctly for all 3 members");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-8">
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
                { min: 2, message: "Team name must be at least 2 characters" },
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
                rules={[
                  { required: true, message: "Enter first name" },
                  {
                    pattern: /^[A-Za-z]+$/,
                    message: "Enter a valid first name",
                  },
                ]}
              >
                <Input placeholder="Enter first name" className="rounded-lg" />
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
                <Input placeholder="Enter last name" className="rounded-lg" />
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
                  onChange={handleLeaderEmailChange}
                  suffix={
                    emailVerified && (
                      <span className="text-green-600 font-bold">✓</span>
                    )
                  }
                />
              </Form.Item>

              <Form.Item label=" ">
                <Button
                  onClick={handleEmailVerification}
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
                />
              </Form.Item>

              <Form.Item
                label={<span className="text-gray-700">Aadhar Number</span>}
                name="leaderAadhar"
                rules={[
                  { required: true, message: "Enter Aadhar number" },
                  {
                    pattern: /^[0-9]{12}$/,
                    message: "Enter a valid 12-digit Aadhar",
                  },
                ]}
              >
                <Input
                  placeholder="Enter Aadhar number"
                  className="rounded-lg"
                  maxLength={12}
                />
              </Form.Item>

              <Form.Item
                label={<span className="text-gray-700">Pincode</span>}
                name="leaderPincode"
                rules={[
                  { required: true, message: "Enter Pincode" },
                  {
                    pattern: /^[0-9]{6}$/,
                    message: "Enter a valid 6-digit Pincode",
                  },
                ]}
              >
                <Input
                  placeholder="Enter Pincode"
                  className="rounded-lg"
                  maxLength={6}
                  onBlur={handleLeaderPincodeVerification}
                />
              </Form.Item>

              <Form.Item
                label={<span className="text-gray-700">State</span>}
                name="leaderState"
                rules={[{ required: true, message: "Enter State" }]}
              >
                <Input placeholder="Enter State" className="rounded-lg" />
              </Form.Item>

              <Form.Item
                label={<span className="text-gray-700">District</span>}
                name="leaderDistrict"
                rules={[{ required: true, message: "Enter District" }]}
              >
                <Input placeholder="Enter District" className="rounded-lg" />
              </Form.Item>

              <Form.Item
                label={<span className="text-gray-700">School Name</span>}
                name="leaderSchool"
                rules={[{ required: true, message: "Select school name" }]}
              >
                <Select placeholder="Select school" className="rounded-lg">
                  {schools.map((school) => (
                    <Option key={school.id} value={school.id}>
                      {school.name}
                    </Option>
                  ))}
                </Select>
              </Form.Item>

              <Form.Item
                label={<span className="text-gray-700">Class</span>}
                name="leaderClass"
                rules={[{ required: true, message: "Select class" }]}
              >
                <Select placeholder="Select class" className="rounded-lg">
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
                <Select placeholder="Select section" className="rounded-lg">
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
                getValueFromEvent={(e) => (Array.isArray(e) ? e : e?.fileList)}
                rules={[{ required: true, message: "Upload school ID" }]}
              >
                <Upload beforeUpload={() => false} maxCount={1}>
                  <Button icon={<UploadOutlined />} className="rounded-lg">
                    Upload School ID
                  </Button>
                </Upload>
              </Form.Item>

              <Form.Item
                label={
                  <span className="text-gray-700">High School Certificate</span>
                }
                name="leaderHighSchoolCertificate"
                valuePropName="fileList"
                getValueFromEvent={(e) => (Array.isArray(e) ? e : e?.fileList)}
                rules={[
                  {
                    required: true,
                    message: "Upload high school certificate",
                  },
                ]}
              >
                <Upload beforeUpload={() => false} maxCount={1}>
                  <Button icon={<UploadOutlined />} className="rounded-lg">
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
                          onClick={() => removeTeamMember(index)}
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
                            <span className="text-gray-700">Phone Number</span>
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
                            <span className="text-gray-700">Aadhar Number</span>
                          }
                          name={[index, "aadhar"]}
                          rules={[
                            { required: true, message: "Enter Aadhar number" },
                            {
                              pattern: /^[0-9]{12}$/,
                              message: "Enter a valid 12-digit Aadhar",
                            },
                          ]}
                        >
                          <Input
                            placeholder="Enter Aadhar number"
                            className="rounded-lg"
                            maxLength={12}
                          />
                        </Form.Item>

                        <Form.Item
                          label={<span className="text-gray-700">Pincode</span>}
                          name={[index, "pincode"]}
                          rules={[
                            { required: true, message: "Enter Pincode" },
                            {
                              pattern: /^[0-9]{6}$/,
                              message: "Enter a valid 6-digit Pincode",
                            },
                          ]}
                        >
                          <Input
                            placeholder="Enter Pincode"
                            className="rounded-lg"
                            maxLength={6}
                            onBlur={() =>
                              handleMemberPincodeVerification(index)
                            }
                          />
                        </Form.Item>

                        <Form.Item
                          label={<span className="text-gray-700">State</span>}
                          name={[index, "state"]}
                          rules={[{ required: true, message: "Enter State" }]}
                        >
                          <Input
                            placeholder="Enter State"
                            className="rounded-lg"
                          />
                        </Form.Item>

                        <Form.Item
                          label={
                            <span className="text-gray-700">District</span>
                          }
                          name={[index, "district"]}
                          rules={[
                            { required: true, message: "Enter District" },
                          ]}
                        >
                          <Input
                            placeholder="Enter District"
                            className="rounded-lg"
                          />
                        </Form.Item>

                        <Form.Item
                          label={
                            <span className="text-gray-700">School Name</span>
                          }
                          name={[index, "school"]}
                          rules={[
                            { required: true, message: "Select school name" },
                          ]}
                        >
                          <Select
                            placeholder="Select school"
                            className="rounded-lg"
                          >
                            {schools.map((school) => (
                              <Option key={school.id} value={school.id}>
                                {school.name}
                              </Option>
                            ))}
                          </Select>
                        </Form.Item>

                        <Form.Item
                          label={<span className="text-gray-700">Class</span>}
                          name={[index, "class"]}
                          rules={[{ required: true, message: "Select class" }]}
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
                          label={<span className="text-gray-700">Section</span>}
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
                  onClick={addTeamMember}
                  icon={<PlusOutlined />}
                  size="large"
                  className="rounded-lg"
                >
                  Add Team Member {teamMembers.length + 2}
                </Button>
              </div>
            )}

            <Form.Item className="mb-0 mt-8">
              <button
                type="submit"
                disabled={teamMembers.length !== 2}
                className="w-full h-12 rounded-lg text-base font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                Register Team
              </button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}
