"use client";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { RootState } from "@/redux/store";
import authApi from "@/app/api/auth";
import { setUser } from "@/redux/slices/userSlice";

const useAuth = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const user = useSelector((state: RootState) => state.user.user);

  useEffect(() => {
    const validateUserToken = async () => {
      if (user) return;

      const token = localStorage.getItem("token");
      if (!token) return;

      try {
        const res = await authApi.validateToken(token);
        if (res.status === 200) {
          dispatch(setUser({ token, data: res.user }));
        } else if (res.status === 401) {
          localStorage.removeItem("token");
          router.push("/SignIn");
        }
      } catch (error) {
        console.error("Token validation error:", error);
        localStorage.removeItem("token");
        router.push("/SignIn");
      }
    };

    validateUserToken();
  }, [dispatch, router, user]);
};

export default useAuth;
