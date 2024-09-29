"use client";

import React, { useState } from "react";
import { Input, Link, Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import authApi from "@/app/api/auth";

import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/redux/store";
import { setUserPartial } from "@/redux/slices/userSlice";

export default function ForgetPassword() {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);

  const _handleSubmit = async () => {
    setLoading(true);

    try {
      // input validation
      setEmailError(false);

      if (email === "") {
        setEmailError(true);
        return;
      }

      // api call

      const res = await authApi.requestResetPassword(email);

      console.log(res);

      if (res?.status === 404) {
        setEmailError(false);
        alert(res?.message);
        return;
      }

      if (res?.status === 200) {
        let user = {
          token: res?.token,
          data: res?.user,
        };
        console.log(res);
        dispatch(setUserPartial(user));
        router.push("ForgetPassword/Verification", { scroll: false });
      }
    } catch (e) {
      console.error("Error: ", e);
    } finally {
      setLoading(false);
    }
    // router.push("/SignIn/ForgetPassword/Verification");
  };

  return (
    <>
      <section className="flex flex-col">
        <p className="text-2xl font-semibold text-[#E5E5E5]">
          Reset your password
        </p>
        <p className="mt-1 font-medium text-sm text-[#737373]">
          Enter the email address associated with your account. We’ll send you a
          link to reset your password.
        </p>

        <div className="mt-5">
          <Input
            type="email"
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            labelPlacement="outside"
            placeholder="Enter your email"
            // description="outside"
          />
        </div>
        <div className="mt-6">
          <Button
            onClick={_handleSubmit}
            className="w-full"
            radius="md"
            color="primary"
            isLoading={loading}
          >
            <b>Send email</b>
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
