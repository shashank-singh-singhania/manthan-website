"use client";
import { Form, Input, Select, Upload, Button, Spin } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { endpoints } from "@/constants/urls";
import { apiCall } from "@/utils/api";

const { Option } = Select;

export default function Register() {
  const [form] = Form.useForm();
  const [schools, setSchools] = useState([]);
  const [states, setStates] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [emailVerified, setEmailVerified] = useState(false);
  const [aadharVerified, setAadharVerified] = useState(false);

  useEffect(() => {
    fetchSchools();
    fetchStates();
  }, []);

  const fetchSchools = async () => {
    // setLoading((prev) => ({ ...prev, schools: true }));
    try {
      const response = await apiCall("get", endpoints.GET_SCHOOLS, {
        headers: { loader: false },
      });
      if (response.success) {
        setSchools(response.data.schools || []);
      } else {
        toast.error("Failed to load schools");
      }
    } catch (error) {
      toast.error("Error loading schools");
    }
  };

  const fetchStates = async () => {
    // setLoading((prev) => ({ ...prev, states: true }));
    try {
      const response = await apiCall("get", endpoints.GET_STATES, {
        headers: { loader: false },
      });
      if (response.success) {
        setStates(response.data.states || []);
      } else {
        toast.error("Failed to load states");
      }
    } catch (error) {
      toast.error("Error loading states");
    }
  };

  const fetchDistricts = async (stateId) => {
    // setLoading((prev) => ({ ...prev, districts: true }));
    setDistricts([]);
    form.setFieldValue("district", undefined);

    try {
      const response = await apiCall(
        "get",
        `${endpoints.GET_DISTRICTS}/${stateId}`
      );
      if (response.success) {
        setDistricts(response.data.districts || []);
      } else {
        toast.error("Failed to load districts");
      }
    } catch (error) {
      toast.error("Error loading districts");
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

  const handleAadharVerification = async () => {
    const aadhar = form.getFieldValue("aadhar");
    try {
      await form.validateFields(["aadhar"]);
    } catch {
      return;
    }

    if (!aadhar || aadharVerified) return;

    try {
      const response = await apiCall("post", endpoints.VERIFY_AADHAR, {
        data: { aadhar },
      });

      if (response.success) {
        setAadharVerified(true);
        toast.success("Aadhar verified successfully");
      } else {
        toast.error(response.data.message || "Aadhar verification failed");
        form.setFieldValue("aadhar", "");
      }
    } catch (error) {
      toast.error("Error verifying Aadhar");
    }
  };

  const handleStateChange = (stateId) => {
    fetchDistricts(stateId);
  };

  const handleEmailChange = () => {
    setEmailVerified(false);
  };

  const handleAadharChange = () => {
    setAadharVerified(false);
  };

  const onFinish = async (values) => {
    if (!emailVerified) {
      toast.error("Please verify your email first");
      return;
    }

    if (!aadharVerified) {
      toast.error("Please verify your Aadhar number first");
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
      setAadharVerified(false);
    } else {
      toast.error(response.data.error);
    }
  };

  const onFinishFailed = () => {
    toast.error("Please fill all required fields correctly");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="w-full max-w-2xl">
        <div className="bg-white rounded-2xl shadow-xl p-2 md:p-10">
          <div className="text-center mb-6">
            <h1 className="text-3xl md:text-4xl font-bold mb-2 text-primary">
              MANTHAN 3.0
            </h1>
            <p className="text-sm md:text-base text-textLight">
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
                label={<span className="text-textDark">First Name</span>}
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
                label={<span className="text-textDark">Last Name</span>}
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
                label={<span className="text-textDark">Email</span>}
                name="email"
                rules={[
                  { required: true, message: "Enter your email" },
                  { type: "email", message: "Enter a valid email" },
                ]}
              >
                <Input
                  placeholder="Enter your email"
                  className="rounded-lg"
                  onBlur={handleEmailVerification}
                  onChange={handleEmailChange}
                />
              </Form.Item>

              <Form.Item
                label={<span className="text-textDark">Phone Number</span>}
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
                label={<span className="text-textDark">Aadhar Number</span>}
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
                  onBlur={handleAadharVerification}
                  onChange={handleAadharChange}
                  // suffix={
                  //   loading.aadharVerification ? (
                  //     <Spin size="small" />
                  //   ) : aadharVerified ? (
                  //     <span className="text-green-600">✓</span>
                  //   ) : null
                  // }
                />
              </Form.Item>

              <Form.Item
                label={<span className="text-textDark">State</span>}
                name="state"
                rules={[{ required: true, message: "Select your state" }]}
              >
                <Select
                  placeholder="Select your state"
                  className="rounded-lg"
                  // loading={loading.states}
                  // disabled={loading.states}
                  onChange={handleStateChange}
                >
                  {states.map((state) => (
                    <Option key={state.id} value={state.id}>
                      {state.name}
                    </Option>
                  ))}
                </Select>
              </Form.Item>

              <Form.Item
                label={<span className="text-textDark">District</span>}
                name="district"
                rules={[{ required: true, message: "Select your district" }]}
              >
                <Select
                  placeholder="Select your district"
                  className="rounded-lg"
                  // loading={loading.districts}
                  // disabled={loading.districts || districts.length === 0}
                >
                  {districts.map((district) => (
                    <Option key={district.id} value={district.id}>
                      {district.name}
                    </Option>
                  ))}
                </Select>
              </Form.Item>

              <Form.Item
                label={<span className="text-textDark">School Name</span>}
                name="school"
                rules={[{ required: true, message: "Select your school name" }]}
              >
                <Select
                  placeholder="Select your school"
                  className="rounded-lg"
                  // loading={loading.schools}
                  // disabled={loading.schools}
                >
                  {schools.map((school) => (
                    <Option key={school.id} value={school.id}>
                      {school.name}
                    </Option>
                  ))}
                </Select>
              </Form.Item>

              <Form.Item
                label={<span className="text-textDark">Class</span>}
                name="class"
                rules={[{ required: true, message: "Select your class" }]}
              >
                <Select placeholder="Select your class" className="rounded-lg">
                  <Option value="9">Class 9</Option>
                  <Option value="10">Class 10</Option>
                  <Option value="11">Class 11</Option>
                  <Option value="12">Class 12</Option>
                </Select>
              </Form.Item>

              <Form.Item
                label={<span className="text-textDark">Section</span>}
                name="section"
                rules={[{ required: true, message: "Select your section" }]}
              >
                <Select
                  placeholder="Select your section"
                  className="rounded-lg"
                >
                  <Option value="A">A</Option>
                  <Option value="B">B</Option>
                  <Option value="C">C</Option>
                  <Option value="D">D</Option>
                </Select>
              </Form.Item>

              <Form.Item
                label={<span className="text-textDark">School ID</span>}
                name="schoolId"
                valuePropName="fileList"
                getValueFromEvent={(e) => (Array.isArray(e) ? e : e?.fileList)}
                rules={[
                  { required: true, message: "Please upload your school ID" },
                ]}
              >
                <Upload beforeUpload={() => false} maxCount={1}>
                  <Button
                    icon={<UploadOutlined />}
                    className="rounded-lg border-border text-textDark"
                  >
                    Upload your School ID
                  </Button>
                </Upload>
              </Form.Item>

              <Form.Item
                label={
                  <span className="text-textDark">High School Certificate</span>
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
                  <Button
                    icon={<UploadOutlined />}
                    className="rounded-lg border-border text-textDark"
                  >
                    Upload High School Certificate
                  </Button>
                </Upload>
              </Form.Item>
            </div>

            <Form.Item className="mb-0">
              <button
                type="submit"
                className="w-full h-12 rounded-lg text-base font-semibold bg-primary text-white hover:bg-primary/90 transition-colors mt-2"
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
