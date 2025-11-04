"use client";
import { Form } from "antd";
import { useState } from "react";
import toast from "react-hot-toast";
import { endpoints } from "@/constants/urls";
import { apiCall } from "@/utils/api";
import OfflineRegisterForm from "@/components/Forms/OfflineRegForm";

export default function OfflineRegister() {
  const [form] = Form.useForm();
  const [classes, setClasses] = useState([]);
  const [sections, setSections] = useState([]);
  const [schools, setSchools] = useState([]);
  const [schoolsLoading, setSchoolsLoading] = useState(false);
  const [teamMembers, setTeamMembers] = useState([]);
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
    const email = form.getFieldValue("leaderEmail");
    try {
      await form.validateFields(["leaderEmail"]);
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
        toast.error("Error verifying email!");
        form.setFieldValue("leaderEmail", "");
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
        headers: { loader: false },
        params: { pincode },
      });

      if (response.success) {
        form.setFieldsValue({
          leaderState: response.data.state,
          leaderDistrict: response.data.district,
        });
      } else {
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
    const response = await apiCall("post", endpoints.REGISTER, {
      data: values,
    });

    if (response.success) {
      toast.success(response.data.msg);
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
    <OfflineRegisterForm
      form={form}
      classes={classes}
      sections={sections}
      teamMembers={teamMembers}
      emailVerified={emailVerified}
      isOtpModalVisible={isOtpModalVisible}
      otp={otp}
      otpLoading={otpLoading}
      onEmailVerification={handleEmailVerification}
      onOtpVerification={handleOtpVerification}
      onOtpModalCancel={handleOtpModalCancel}
      onOtpChange={handleOtpChange}
      onLeaderPincodeVerification={handleLeaderPincodeVerification}
      onMemberPincodeVerification={handleMemberPincodeVerification}
      onAddTeamMember={addTeamMember}
      onRemoveTeamMember={removeTeamMember}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    />
  );
}
