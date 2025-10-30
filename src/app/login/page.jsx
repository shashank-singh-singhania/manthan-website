// "use client";
// import { Form, Input } from "antd";
// import { MailOutlined, LockOutlined } from "@ant-design/icons";
// import Link from "next/link";
// import toast from "react-hot-toast";
// import { endpoints } from "@/constants/urls";
// import { useRouter } from "next/navigation";
// import { apiCall } from "@/utils/api";
// import { useState, useEffect } from "react";
// export default function Login() {
//   const [form] = Form.useForm();
//   const [authenticated, setAuthenticated] = useState(true);
//   const router = useRouter();
//   const onFinish = async (values) => {
//     console.log("Login:", values);
//     const response = await apiCall("post", endpoints.LOGIN, { data: values });
//     console.log(response);
//     if (response.success) {
//       router.push("/user");
//       toast.success(response.data.message);
//     } else {
//       toast.error(response.data.error);
//     }
//   };

//   const onFinishFailed = (errorInfo) => {
//     toast.error("Please fill in all required fields correctly");
//   };

//   useEffect(() => {
//     const checkAuthentication = async () => {
//       const response = await apiCall("get", endpoints.LOGIN);
//       if (response.success) {
//         router.push("/user");
//       }
//   }, [])

//   return (
//     <div className="min-h-screen flex items-center justify-center p-4 bg-background">
//       <div className="w-full max-w-md">
//         <div className="bg-white rounded-2xl shadow-xl p-10">
//           <div className="text-center mb-10">
//             <h1 className="text-4xl font-bold mb-3 text-primary">MANTHAN'25</h1>
//             <p className="text-base text-textLight">Login to your account</p>
//           </div>

//           <Form
//             form={form}
//             name="login"
//             onFinish={onFinish}
//             onFinishFailed={onFinishFailed}
//             layout="vertical"
//             size="large"
//           >
//             <Form.Item
//               label={<span className="text-textDark">Email</span>}
//               name="email"
//               rules={[
//                 { required: true, message: "Please enter your email!" },
//                 { type: "email", message: "Please enter a valid email" },
//               ]}
//             >
//               <Input
//                 prefix={<MailOutlined className="text-textLight" />}
//                 placeholder="Enter your email"
//                 className="rounded-lg"
//               />
//             </Form.Item>

//             <Form.Item
//               label={<span className="text-textDark">Password</span>}
//               name="password"
//               rules={[
//                 { required: true, message: "Please enter your password" },
//                 { min: 4, message: "Password must be at least 6 characters" },
//               ]}
//             >
//               <Input.Password
//                 prefix={<LockOutlined className="text-textLight" />}
//                 placeholder="Enter your password"
//                 className="rounded-lg"
//               />
//             </Form.Item>

//             <div className="text-right mb-6">
//               <a href="#" className="text-sm hover:underline text-primary">
//                 Forgot password?
//               </a>
//             </div>

//             <Form.Item>
//               <button
//                 type="submit"
//                 className="w-full h-12 rounded-lg text-base font-semibold bg-primary text-white hover:bg-primary/90 transition-colors mt-2"
//               >
//                 Login
//               </button>
//             </Form.Item>
//           </Form>

//           <div className="text-center mt-6">
//             <span className="text-textLight">Don't have an account? </span>
//             <Link
//               href="/register"
//               className="font-semibold hover:underline text-primary"
//             >
//               Register
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
