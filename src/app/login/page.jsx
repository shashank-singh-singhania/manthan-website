"use client";
import { Form, Input } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import toast from "react-hot-toast";
import { endpoints } from "@/constants/urls";
import { useRouter } from "next/navigation";
import { apiCall } from "@/utils/api";
import { useState } from "react";
export default function Login() {
  const [form] = Form.useForm();
  const [authenticated, setAuthenticated] = useState(true);
  const router = useRouter();
  const onFinish = async (values) => {
    const response = await apiCall("post", endpoints.LOGIN, { data: values });
    if (response.success) {
      toast.success(response.data.msg);
      router.push("/user");
    } else {
      toast.error(response.data.error);
    }
  };

  const onFinishFailed = (errorInfo) => {
    toast.error("Please fill in all required fields correctly");
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-background">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-xl p-10">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold mb-3 text-primary">MANTHAN'25</h1>
            <p className="text-base text-textLight">Login to your account</p>
          </div>

          <Form
            form={form}
            name="login"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            layout="vertical"
            size="large"
          >
            <Form.Item
              label={<span className="text-textDark">Email</span>}
              name="email"
              rules={[
                { required: true, message: "Please enter your email!" },
                { type: "email", message: "Please enter a valid email" },
              ]}
            >
              <Input
                prefix={<MailOutlined className="text-textLight" />}
                placeholder="Enter your email"
                className="rounded-lg"
              />
            </Form.Item>

            <Form.Item
              label={<span className="text-textDark">Password</span>}
              name="password"
              rules={[
                { required: true, message: "Please enter your password" },
                { min: 4, message: "Password must be at least 6 characters" },
              ]}
            >
              <Input.Password
                prefix={<LockOutlined className="text-textLight" />}
                placeholder="Enter your password"
                className="rounded-lg"
              />
            </Form.Item>

            <Form.Item>
              <button
                type="submit"
                className="w-full h-12 rounded-lg text-base font-semibold bg-primary text-white hover:bg-primary/90 transition-colors mt-2"
              >
                Login
              </button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}
