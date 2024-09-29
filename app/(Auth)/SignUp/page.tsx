"use client";

import React, { useState } from "react";
import { Input, Link, Button, Checkbox } from "@nextui-org/react";
import { Eye, EyeOff } from "lucide-react";
import LoginWithGoogle from "@/components/Buttons/LoginWithGoogle";
import { useRouter } from "next/navigation";
import authAPi from "@/app/api/auth";

import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/redux/store";
import { setUserPartial } from "@/redux/slices/userSlice";

export default function SignUp() {
  const dispatch = useDispatch<AppDispatch>();
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [isAcceptTheTermsAndConditions, setIsAcceptTheTermsAndConditions] =
    useState(false);

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [emailError, setEmailError] = useState(false);
  const [passError, setPassError] = useState(false);

  const _handleSignUp = async () => {
    setLoading(true);

    try {
      // input validation
      setEmailError(false);
      setPassError(false);

      if (data.email === "") {
        setEmailError(true);
        return;
      }
      if (data.password === "") {
        setPassError(true);
        return;
      }

      // api call
      const res = await authAPi.userRegister(data.email, data.password);

      if (res?.status === 400) {
        alert(res?.msg);
        return;
      }

      if (res?.status === 200) {
        let user = {
          token: res?.token,
          data: res?.user,
        };
        console.log(res);
        dispatch(setUserPartial(user));
        router.push("SignUp/Verification", { scroll: false });
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
          Set up your MailTrail account
        </p>
        <p className="mt-1 font-medium text-sm text-[#737373]">
          Send Email's with MailTrail.
        </p>

        <LoginWithGoogle />

        <div className="mt-2 py-3 flex items-center text-xs text-gray-400 uppercase before:flex-1 before:border-t before:border-gray-200 before:me-6 after:flex-1 after:border-t after:border-gray-200 after:ms-6 dark:text-neutral-500 dark:before:border-neutral-600 dark:after:border-neutral-600">
          Or
        </div>

        <div className="mt-2">
          <Input
            type="email"
            label="Email"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
            labelPlacement="outside"
            placeholder="Enter your email"
            // description="outside"
          />
          {emailError && (
            <p className="text-sm text-red-600">
              Please, Enter the correct Email.
            </p>
          )}
        </div>
        <div className="mt-5">
          <Input
            value={data.password}
            type={isVisible ? "text" : "password"}
            label="Password"
            labelPlacement="outside"
            placeholder="Enter your password"
            onChange={(e) => setData({ ...data, password: e.target.value })}
            // description="outside"
            endContent={
              <button onClick={() => setIsVisible(!isVisible)}>
                {isVisible ? (
                  <EyeOff color="#828282" />
                ) : (
                  <Eye color="#828282" />
                )}
              </button>
            }
          />
          {passError && (
            <p className="mt-2 text-sm text-red-600">
              Please, Enter the correct Password.
            </p>
          )}
        </div>
        <div className="mt-4 flex flex-row">
          <Checkbox
            radius="sm"
            checked={isAcceptTheTermsAndConditions}
            onChange={(e) => setIsAcceptTheTermsAndConditions(e.target.checked)}
          >
            I accept the
          </Checkbox>
          <Link href="#" className="text-md ml-1" color="primary">
            Terms and Conditions
          </Link>
        </div>
        <div className="mt-5">
          <Button
            onClick={_handleSignUp}
            className="w-full"
            radius="md"
            color="primary"
            isDisabled={!isAcceptTheTermsAndConditions}
            isLoading={loading}
          >
            <b>Sign up</b>
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
