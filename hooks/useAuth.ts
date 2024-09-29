"use client";

import { useEffect } from "react";
import { RootState } from "@/redux/store";
import { useSelector, useDispatch } from "react-redux";
import authApi from "@/app/api/auth";
import { setUser } from "@/redux/slices/userSlice";
import { useRouter } from "next/navigation";

const useAuth = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const user = useSelector((state: RootState) => state.user.user);

  useEffect(() => {
    const validateUserToken = async () => {
      const token = localStorage.getItem("token");
      if (!user) {
        if (token) {
          const res = await authApi.validateToken(token);
          console.log("useAuth res:", res);
          if (res?.status === 200) {
            let user = {
              token: token,
              data: res?.user,
            };
            dispatch(setUser(user));
            // router.push("/Dashboard");
          }

          if (res?.status === 401) {
            localStorage.removeItem("token");
            router.push("/SignIn");
          }
        }
      }
    };

    validateUserToken();
  }, [dispatch]);
};

export default useAuth;
