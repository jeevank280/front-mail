"use client";

import React, { useEffect, useRef, useState } from "react";

import { Link, Button } from "@heroui/react";
import { useRouter } from "next/navigation";

import { RootState, AppDispatch } from "@/redux/store";
import { useSelector, useDispatch } from "react-redux";
import authApi from "@/app/api/auth";

export default function Verification() {
  const router = useRouter();
  const userPartial = useSelector((state: RootState) => state.user.userPartial);
  const [isDisabled, setIsDisabled] = useState(true);
  const [loading, setLoading] = useState(false);

  if (!userPartial) {
    return router.push("/SignUp");
  }

  const [otp, setOtp] = useState<string[]>(new Array(6).fill(""));
  const otpBoxRef = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    if (parseInt(otp.join("")) >= 99999) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, otp);

  function handleChange(value: any, index: number) {
    let newArr = [...otp];
    newArr[index] = value;
    setOtp(newArr);

    if (value && index < 5) {
      otpBoxRef.current[index + 1]?.focus();
    }
  }

  function handleBackspaceAndEnter(e: any, index: number) {
    if (e.key === "Backspace" && !e.target.value && index > 0) {
      otpBoxRef.current[index - 1]?.focus();
    }
    if (e.key === "Enter" && e.target.value && index < 5) {
      otpBoxRef.current[index + 1]?.focus();
    }
  }

  const handleSubmit = async () => {
    setLoading(true);

    try {
      const res = await authApi.verifyResetOtp(
        userPartial?.token,
        otp.join("")
      );

      if (res?.status === 401) {
        alert(res?.message);
        return;
      }

      if (res?.status === 402) {
        alert(res?.message);
        return;
      }

      if (res?.status === 403) {
        alert(res?.message);
        return;
      }

      if (res?.status === 404) {
        alert(res?.message);
        return;
      }

      if (res?.status === 200) {
        alert(res?.message);
        return router.push("ResetPassword");
      }
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
          Verify your email
        </p>
        <p className="mt-1 font-medium text-sm text-[#737373]">
          We sent a verification code to your email. Enter the code from the
          email in the field below.
        </p>

        <div className="mt-5 flex flex-row">
          {otp.map((digit, index) => (
            <input
              key={index}
              value={digit}
              type="text"
              className="py-4 mr-6 outline-none rounded-lg px-5 w-[50px] bg-[#2f2f2f]"
              maxLength={1}
              onChange={(e) => handleChange(e.target.value, index)}
              onKeyUp={(e) => handleBackspaceAndEnter(e, index)}
              ref={(el: HTMLInputElement | null) => {
                otpBoxRef.current[index] = el;
              }}
            />
          ))}
        </div>

        <div className="mt-5">
          <Button
            radius="md"
            color="primary"
            onClick={handleSubmit}
            isDisabled={isDisabled}
            isLoading={loading}
          >
            <b>Verify my account</b>
          </Button>
        </div>
        <div className="mt-4 flex flex-row">
          <p className="text-[#969696]">Didn't receive and email? </p>
          <Link href="/#" className="text-md ml-2" color="primary">
            Resend
          </Link>
        </div>
      </section>
    </>
  );
}
