"use client";

import React, { useState } from "react";
import { Input, Link, Button } from "@heroui/react";
import { Eye, EyeOff } from "lucide-react";

import { useRouter } from "next/navigation";
import { RootState, AppDispatch } from "@/redux/store";
import { useSelector, useDispatch } from "react-redux";
import authApi from "@/app/api/auth";
import { setUser } from "@/redux/slices/userSlice";

export default function ResetPassword() {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const userPartial = useSelector((state: RootState) => state.user.userPartial);
  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!userPartial) {
    return router.push("/SignUp");
  }

  const [data, setData] = useState({
    newPass: "",
    confirmPass: "",
  });

  const [newPassError, setNewPassError] = useState(false);
  const [confirmPassError, setConfirmPassError] = useState(false);

  const _handleResetPassword = async () => {
    setLoading(true);
    try {
      setNewPassError(false);
      setConfirmPassError(false);

      if (data.newPass === "") {
        setNewPassError(true);
        return;
      }
      if (data.confirmPass === "") {
        setConfirmPassError(true);
        return;
      }

      if (data.newPass !== data.confirmPass) {
        setConfirmPassError(true);
        alert("Please, Enter the correct confirm password.");
        return;
      }

      // api call
      const res = await authApi.resetPassword(userPartial?.token, data.newPass);

      if (res?.status === 200) {
        localStorage.setItem("token", userPartial?.token);
        let user = {
          token: userPartial?.token,
          data: res?.user,
        };
        console.log(user);
        dispatch(setUser(user));

        router.push("/Dashboard", { scroll: false });
      }

      console.log("res,", res);
    } catch (e) {
      console.error("Error: ", e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="flex flex-col">
        <p className="text-2xl font-semibold text-[#E5E5E5]">
          Change your password
        </p>
        <p className="mt-1 font-medium text-sm text-[#737373]">
          You can change your password now.
        </p>

        <div className="mt-5">
          <Input
            type={isVisible1 ? "text" : "password"}
            label="New password"
            labelPlacement="outside"
            placeholder="Enter your password"
            // description="outside"
            value={data.newPass}
            onChange={(e) => setData({ ...data, newPass: e.target.value })}
            endContent={
              <button onClick={() => setIsVisible1(!isVisible1)}>
                {isVisible1 ? (
                  <EyeOff color="#828282" />
                ) : (
                  <Eye color="#828282" />
                )}
              </button>
            }
          />
          {newPassError && (
            <p className="text-sm text-red-600">
              Please, Enter the new password.
            </p>
          )}
        </div>

        <div className="mt-5">
          <Input
            type={isVisible2 ? "text" : "password"}
            label="Confirm password"
            labelPlacement="outside"
            placeholder="Enter your password"
            // description="outside"
            value={data.confirmPass}
            onChange={(e) => setData({ ...data, confirmPass: e.target.value })}
            endContent={
              <button onClick={() => setIsVisible2(!isVisible2)}>
                {isVisible2 ? (
                  <EyeOff color="#828282" />
                ) : (
                  <Eye color="#828282" />
                )}
              </button>
            }
          />
          {confirmPassError && (
            <p className="text-sm text-red-600">
              Please, Enter the confirm password.
            </p>
          )}
        </div>

        <div className="mt-5">
          <Button
            radius="md"
            color="primary"
            isLoading={loading}
            onClick={_handleResetPassword}
          >
            <b>Change your password</b>
          </Button>
        </div>
        <div className="mt-4 flex flex-row">
          <p className="text-[#969696]">Have an account? </p>
          <Link href="/SignIn" className="text-md ml-2" color="primary">
            Sign in
          </Link>
        </div>
      </section>
    </>
  );
}
