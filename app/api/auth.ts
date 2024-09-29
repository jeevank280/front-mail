import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 10000,
});

const userLogin = async (email: string, password: string) => {
  const res = await axiosInstance.post("auth/login", {
    email: email,
    password: password,
  });

  return res.data;
};

const userRegister = async (email: string, password: string) => {
  const res = await axiosInstance.post("auth/register", {
    email: email,
    password: password,
  });
  return res.data;
};

const validateToken = async (token: string) => {
  try {
    const res = await axiosInstance.post("auth/validateToken", {
      token: token,
    });
    return res.data;
  } catch (error) {
    console.error("API request failed:", error);
    throw error;
  }
};

const verifyRegisterOtp = async (token: string, otp: string) => {
  try {
    const res = await axiosInstance.post("auth/verifyRegisterOtp", {
      token: token,
      otp: otp,
    });
    return res.data;
  } catch (error) {
    console.error("API request failed:", error);
    throw error;
  }
};

const setPersonalInfo = async (
  fName: string,
  lName: string,
  companyName: string,
  webName: string,
  token: string
) => {
  try {
    const res = await axiosInstance.post(
      "auth/savePersonalInfo",
      {
        firstName: fName,
        lastName: lName,
        companyName: companyName,
        websiteUrl: webName,
      },
      {
        headers: {
          "x-auth-token": token,
        },
      }
    );
    return res.data;
  } catch (error) {
    console.error("API request failed:", error);
    throw error;
  }
};

const requestResetPassword = async (email: string) => {
  try {
    const res = await axiosInstance.post("auth/requestResetPassword", {
      email,
    });
    return res.data;
  } catch (error) {
    console.error("API request failed:", error);
    throw error;
  }
};

const verifyResetOtp = async (token: string, otp: string) => {
  try {
    const res = await axiosInstance.post("auth/verifyResetPasswordOtp", {
      token: token,
      otp: otp,
    });
    return res.data;
  } catch (error) {
    console.error("API request failed:", error);
    throw error;
  }
};

const resetPassword = async (token: string, password: string) => {
  try {
    const res = await axiosInstance.post(
      "auth/resetPassword",
      {
        password,
      },
      {
        headers: {
          "x-auth-token": token,
        },
      }
    );
    return res.data;
  } catch (error) {
    console.error("API request failed:", error);
    throw error;
  }
};

const authApi = {
  userLogin,
  userRegister,
  validateToken,
  verifyRegisterOtp,
  setPersonalInfo,
  requestResetPassword,
  verifyResetOtp,
  resetPassword,
};

export default authApi;
