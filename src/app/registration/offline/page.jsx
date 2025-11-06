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
  const [teamMembers, setTeamMembers] = useState([]);
  const [emailVerified, setEmailVerified] = useState(false);
  const [isOtpModalVisible, setIsOtpModalVisible] = useState(false);
  const [uuid, setUuid] = useState("");
  const [otp, setOtp] = useState("");
  const [otpLoading, setOtpLoading] = useState(false);

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
        toast.error("Error loading sections");
      }
    } catch (error) {
      toast.error("Error loading sections");
    }
  };

  const fetchSchools = async (state, district) => {
    if (!state || !district) return;
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
        data: { email },
      });
      if (response.success) {
        if (response.data.status === true) {
          setEmailVerified(true);
          toast.success(response.data.msg);
          await fetchClasses();
          await fetchSections();
        } else {
          setUuid(response.data.user);
          toast.success(response.data.msg);
          setIsOtpModalVisible(true);
        }
      } else {
        toast.error("Error verifying email");
        form.setFieldValue("leaderEmail", "");
      }
    } catch (error) {
      toast.error("Error verifying email");
    }
  };

  const handleOtpVerification = async (otpValue) => {
    const otpToVerify = otpValue || otp;
    if (!otpToVerify || otpToVerify.length !== 6) {
      toast.error("Please enter a valid 6-digit OTP");
      return;
    }
    setOtpLoading(true);
    try {
      const response = await apiCall("put", endpoints.VERIFY_EMAIL_OTP, {
        headers: { loader: false },
        data: { uuid, otp: parseInt(otpToVerify) },
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

  const handleOtpChange = (value) => {
    const cleanValue = value.replace(/\D/g, "");
    setOtp(cleanValue);
    if (cleanValue.length === 6) {
      handleOtpVerification(cleanValue);
    }
  };

  const handlePincodeVerification = async (
    pincodeValue,
    memberIndex = null
  ) => {
    const pincode = pincodeValue;
    if (!pincode || pincode.length !== 6) return;

    setSchools([]);

    try {
      const response = await apiCall("get", endpoints.VERIFY_PINCODE, {
        params: { pincode },
      });

      if (response.success) {
        if (memberIndex === null) {
          form.setFieldsValue({
            leaderState: response.data.state,
            leaderDistrict: response.data.district,
            leaderSchool: undefined,
          });
          await fetchSchools(response.data.state, response.data.district);
        } else {
          const members = form.getFieldValue("members") || [];
          members[memberIndex] = {
            ...members[memberIndex],
            state: response.data.state,
            district: response.data.district,
            school: undefined,
          };
          form.setFieldsValue({ members });
          await fetchSchools(response.data.state, response.data.district);
        }
      } else {
        if (memberIndex === null) {
          form.setFieldValue("leaderPincode", "");
        } else {
          const members = form.getFieldValue("members") || [];
          members[memberIndex].pincode = "";
          form.setFieldsValue({ members });
        }
        toast.error(response.data.msg);
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
      toast.error("Please verify your email first");
      return;
    }
    if (teamMembers.length !== 2) {
      toast.error("Please add exactly 2 team members");
      return;
    }

    const formData = new FormData();
    formData.append("registration_mode", 0);
    formData.append("team_name", values.teamName);
    formData.append("captain[first_name]", values.leaderFirstName);
    formData.append("captain[last_name]", values.leaderLastName);
    formData.append("captain[email]", values.leaderEmail);
    formData.append("captain[phone_no]", values.leaderPhone);
    formData.append("captain[aadhaar_no]", values.leaderAadhar);
    formData.append("captain[pincode]", values.leaderPincode);
    formData.append("captain[state]", values.leaderState);
    formData.append("captain[district]", values.leaderDistrict);
    formData.append("captain[school]", values.leaderSchool);
    formData.append("captain[cuid]", values.leaderClass);
    formData.append("captain[suid]", values.leaderSection);

    if (values.leaderSchoolId?.[0]?.originFileObj) {
      formData.append(
        "captain[id_card]",
        values.leaderSchoolId[0].originFileObj
      );
    }
    if (values.leaderHighSchoolCertificate?.[0]?.originFileObj) {
      formData.append(
        "captain[marksheet]",
        values.leaderHighSchoolCertificate[0].originFileObj
      );
    }

    values.members?.forEach((member, index) => {
      formData.append(`members[${index}][first_name]`, member.firstName);
      formData.append(`members[${index}][last_name]`, member.lastName);
      formData.append(`members[${index}][email]`, member.email);
      formData.append(`members[${index}][phone_no]`, member.phone);
      formData.append(`members[${index}][aadhaar_no]`, member.aadhar);
      formData.append(`members[${index}][pincode]`, member.pincode);
      formData.append(`members[${index}][state]`, member.state);
      formData.append(`members[${index}][district]`, member.district);
      formData.append(`members[${index}][school]`, member.school);
      formData.append(`members[${index}][cuid]`, member.class);
      formData.append(`members[${index}][suid]`, member.section);

      if (member.schoolId?.[0]?.originFileObj) {
        formData.append(
          `members[${index}][id_card]`,
          member.schoolId[0].originFileObj
        );
      }
      if (member.highSchoolCertificate?.[0]?.originFileObj) {
        formData.append(
          `members[${index}][marksheet]`,
          member.highSchoolCertificate[0].originFileObj
        );
      }
    });

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
      setTeamMembers([]);
      setUuid("");
    } else {
      toast.error(response?.data?.error);
    }
  };

  const onFinishFailed = () => {
    toast.error("Please fill all required fields correctly");
  };

  return (
    <OfflineRegisterForm
      form={form}
      classes={classes}
      sections={sections}
      schools={schools}
      teamMembers={teamMembers}
      emailVerified={emailVerified}
      isOtpModalVisible={isOtpModalVisible}
      otp={otp}
      otpLoading={otpLoading}
      onEmailVerification={handleEmailVerification}
      onOtpVerification={handleOtpVerification}
      onOtpModalCancel={handleOtpModalCancel}
      onOtpChange={handleOtpChange}
      onPincodeVerification={handlePincodeVerification}
      onAddTeamMember={addTeamMember}
      onRemoveTeamMember={removeTeamMember}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    />
  );
}
