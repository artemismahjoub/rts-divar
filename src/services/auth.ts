import api from "configs/api";

const sendOTP = async (mobile: string) => {
  try {
    const response = await api.post("auth/send-otp", { mobile });
    return { response };
  } catch (error: any) {
    return { error };
  }
};

const checkOTP = async (mobile: string, code: string) => {
  try {
    const response = await api.post("auth/check-otp", { mobile, code });
    return { response };
  } catch (error: any) {
    return { error };
  }
};

export { sendOTP, checkOTP };
