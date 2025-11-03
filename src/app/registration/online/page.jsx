"use client";
import { Form } from "antd";
import { useState } from "react";
import toast from "react-hot-toast";
import { endpoints } from "@/constants/urls";
import { apiCall } from "@/utils/api";
import OnlineRegisterForm from "@/components/Forms/OnlineRegForm";

export default function OnlineRegister() {
  const [form] = Form.useForm();
  const [classes, setClasses] = useState([]);
  const [sections, setSections] = useState([]);
  const [schools, setSchools] = useState([]);
  const [schoolsLoading, setSchoolsLoading] = useState(false);
  const [emailVerified, setEmailVerified] = useState(false);
  const [isOtpModalVisible, setIsOtpModalVisible] = useState(false);
  const [otp, setOtp] = useState("");
  const [otpLoading, setOtpLoading] = useState(false);
  const [uuid, setUuid] = useState("");

  const fetchClasses = async () => {
    try {
      const response = await apiCall("get", endpoints.GET_CLASS_SECTION, {
        headers: { loader: false },
        params: { type: "name", name: "class" },
      });
      if (response.success) {
        setClasses(response.data || []);
      } else {
        toast.error("Error loading classes");
      }
    } catch (error) {
      toast.error("Error loading classes");
    }
  };

  const fetchSections = async () => {
    try {
      const response = await apiCall("get", endpoints.GET_CLASS_SECTION, {
        headers: { loader: false },
        params: { type: "name", name: "section" },
      });
      if (response.success) {
        setSections(response.data || []);
      } else {
        toast.error("Failed to load sections");
      }
    } catch (error) {
      toast.error("Error loading sections");
    }
  };

  const fetchSchools = async (state, district) => {
    if (!state || !district) return;
    setSchoolsLoading(true);
    try {
      const response = await apiCall("get", endpoints.GET_SCHOOLS, {
        params: { state, district },
      });
      if (response.success) {
        setSchools(response.data || []);
      } else {
        toast.error(response.data.msg);
      }
    } catch (error) {
      toast.error("Error loading schools");
    } finally {
      setSchoolsLoading(false);
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
      const response = await apiCall("post", endpoints.VERIFY_EMAIL_OTP, {
        headers: { loader: false },
        data: { email },
      });
      if (response.success) {
        setUuid(response.data.user);
        toast.success(response.data.msg);
        setIsOtpModalVisible(true);
      } else {
        toast.error("Email is already registered!");
        form.setFieldValue("email", "");
      }
    } catch (error) {
      toast.error("Error sending OTP");
    }
  };

  const handleOtpVerification = async () => {
    if (!otp || otp.length !== 6) {
      toast.error("Please enter a valid 6-digit OTP");
      return;
    }
    setOtpLoading(true);
    try {
      const response = await apiCall("put", endpoints.VERIFY_EMAIL_OTP, {
        headers: { loader: false },
        data: { uuid, otp: parseInt(otp) },
      });
      if (response.success) {
        setEmailVerified(true);
        setIsOtpModalVisible(false);
        setOtp("");
        toast.success(response.data.msg);
        await fetchClasses();
        await fetchSections();
      } else {
        toast.error(response.data.msg);
      }
    } catch (error) {
      toast.error("Error verifying OTP");
    } finally {
      setOtpLoading(false);
    }
  };

  const handleOtpModalCancel = () => {
    setIsOtpModalVisible(false);
    setOtp("");
  };

  const handleOtpChange = (e) => {
    setOtp(e.target.value.replace(/\D/g, ""));
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
      const response = await apiCall("get", endpoints.VERIFY_PINCODE, {
        params: { pincode },
      });

      if (response.success) {
        form.setFieldsValue({
          state: response.data.state,
          district: response.data.district,
        });
        await fetchSchools(response.data.state, response.data.district);
      } else {
        form.setFieldValue("pincode", "");
      }
    } catch (error) {
      toast.error("Error verifying pincode");
    }
  };

  const handleStateDistrictChange = () => {
    form.setFieldValue("school", undefined);
    setSchools([]);
    fetchSchools();
  };

  const onFinish = async (values) => {
    if (!emailVerified) {
      toast.error("Please verify your email first");
      return;
    }
    const formData = new FormData();
    formData.append("registration_mode", 1);
    formData.append("participant_type", 2);
    formData.append("aadhaar_no", values.aadhar_number);
    formData.append("district", values.district);
    formData.append("state", values.state);
    formData.append("email", values.email);
    formData.append("school", values.school);
    formData.append("cuid", values.class);
    formData.append("suid", values.section);
    formData.append("first_name", values.first_name);
    formData.append("last_name", values.last_name);
    formData.append("phone_no", values.phone_no);
    formData.append("pincode", values.pincode);
    if (values.schoolId?.[0]?.originFileObj) {
      formData.append("id_card", values.schoolId[0].originFileObj);
    }
    if (values.highSchoolCertificate?.[0]?.originFileObj) {
      formData.append(
        "marksheet",
        values.highSchoolCertificate[0].originFileObj
      );
    }
    const response = await apiCall("post", endpoints.REGISTER, {
      data: formData,
      contentType: "multipart/form-data",
    });
    if (response.success) {
      toast.success(response.data.msg);
      form.resetFields();
      setEmailVerified(false);
      setClasses([]);
      setSections([]);
      setSchools([]);
      setUuid("");
    } else {
      toast.error(response.data.error);
    }
  };

  const onFinishFailed = () => {
    toast.error("Please fill all required fields correctly");
  };

  return (
    <OnlineRegisterForm
      form={form}
      classes={classes}
      sections={sections}
      schools={schools}
      schoolsLoading={schoolsLoading}
      emailVerified={emailVerified}
      isOtpModalVisible={isOtpModalVisible}
      otp={otp}
      otpLoading={otpLoading}
      onEmailVerification={handleEmailVerification}
      onOtpVerification={handleOtpVerification}
      onOtpModalCancel={handleOtpModalCancel}
      onOtpChange={handleOtpChange}
      onPincodeVerification={handlePincodeVerification}
      onStateDistrictChange={handleStateDistrictChange}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    />
  );
}
