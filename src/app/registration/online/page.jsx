"use client";
import { Form, Input, Select, Upload, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { useState } from "react";
import toast from "react-hot-toast";
import { endpoints } from "@/constants/urls";
import { apiCall } from "@/utils/api";

const { Option } = Select;

export default function OnlineRegister() {
  const [form] = Form.useForm();
  const [schools, setSchools] = useState([]);
  const [classes, setClasses] = useState([]);
  const [sections, setSections] = useState([]);
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
    const email = form.getFieldValue("email");
    try {
      await form.validateFields(["email"]);
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
        form.setFieldValue("email", "");
      }
    } catch (error) {
      toast.error("Error verifying email");
    }
  };

  const handlePincodeVerification = async () => {
    const pincode = form.getFieldValue("pincode");
    try {
      await form.validateFields(["pincode"]);
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
          state: response.data.state,
          district: response.data.district,
        });
        toast.success("Pincode verified successfully");
      } else {
        toast.error(response.data.message || "Pincode verification failed");
        form.setFieldValue("pincode", "");
      }
    } catch (error) {
      toast.error("Error verifying pincode");
    }
  };

  const handleEmailChange = () => {
    setEmailVerified(false);
  };

  const onFinish = async (values) => {
    if (!emailVerified) {
      toast.error("Please verify your email first");
      return;
    }

    console.log("Register:", values);
    const response = await apiCall("post", endpoints.REGISTER, {
      data: values,
    });

    if (response.success) {
      toast.success(response.data.message);
      form.resetFields();
      setEmailVerified(false);
    } else {
      toast.error(response.data.error);
    }
  };

  const onFinishFailed = () => {
    toast.error("Please fill all required fields correctly");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-8">
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
                name="firstName"
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
                name="lastName"
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
                  onChange={handleEmailChange}
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
                name="phone"
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
                />
              </Form.Item>

              <Form.Item
                label={<span className="text-gray-700">Aadhar Number</span>}
                name="aadhar"
                rules={[
                  { required: true, message: "Enter your Aadhar number" },
                  {
                    pattern: /^[0-9]{12}$/,
                    message: "Enter a valid 12-digit Aadhar",
                  },
                ]}
              >
                <Input
                  placeholder="Enter your Aadhar number"
                  className="rounded-lg"
                  maxLength={12}
                />
              </Form.Item>

              <Form.Item
                label={<span className="text-gray-700">Pincode</span>}
                name="pincode"
                rules={[
                  { required: true, message: "Enter your Pincode" },
                  {
                    pattern: /^[0-9]{6}$/,
                    message: "Enter a valid 6-digit Pincode",
                  },
                ]}
              >
                <Input
                  placeholder="Enter your Pincode"
                  className="rounded-lg"
                  maxLength={6}
                  onBlur={handlePincodeVerification}
                />
              </Form.Item>

              <Form.Item
                label={<span className="text-gray-700">State</span>}
                name="state"
                rules={[{ required: true, message: "Enter State" }]}
              >
                <Input
                  placeholder="Auto-filled from pincode"
                  className="rounded-lg"
                />
              </Form.Item>

              <Form.Item
                label={<span className="text-gray-700">District</span>}
                name="district"
                rules={[{ required: true, message: "Enter District" }]}
              >
                <Input
                  placeholder="Auto-filled from pincode"
                  className="rounded-lg"
                />
              </Form.Item>

              <Form.Item
                label={<span className="text-gray-700">School Name</span>}
                name="school"
                rules={[{ required: true, message: "Select your school name" }]}
              >
                <Select placeholder="Select your school" className="rounded-lg">
                  {schools.map((school) => (
                    <Option key={school.id} value={school.id}>
                      {school.name}
                    </Option>
                  ))}
                </Select>
              </Form.Item>

              <Form.Item
                label={<span className="text-gray-700">Class</span>}
                name="class"
                rules={[{ required: true, message: "Select your class" }]}
              >
                <Select placeholder="Select your class" className="rounded-lg">
                  {classes.map((cls) => (
                    <Option key={cls.id} value={cls.id}>
                      {cls.name}
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
                name="schoolId"
                valuePropName="fileList"
                getValueFromEvent={(e) => (Array.isArray(e) ? e : e?.fileList)}
                rules={[
                  { required: true, message: "Please upload your school ID" },
                ]}
              >
                <Upload beforeUpload={() => false} maxCount={1}>
                  <Button icon={<UploadOutlined />} className="rounded-lg">
                    Upload your School ID
                  </Button>
                </Upload>
              </Form.Item>

              <Form.Item
                label={
                  <span className="text-gray-700">High School Certificate</span>
                }
                name="highSchoolCertificate"
                valuePropName="fileList"
                getValueFromEvent={(e) => (Array.isArray(e) ? e : e?.fileList)}
                rules={[
                  {
                    required: true,
                    message: "Please upload your high school certificate",
                  },
                ]}
              >
                <Upload beforeUpload={() => false} maxCount={1}>
                  <Button icon={<UploadOutlined />} className="rounded-lg">
                    Upload High School Certificate
                  </Button>
                </Upload>
              </Form.Item>
            </div>

            <Form.Item className="mb-0">
              <button
                type="submit"
                className="w-full h-12 rounded-lg text-base font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-colors mt-2"
              >
                Register
              </button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}
