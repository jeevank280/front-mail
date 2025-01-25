"use client";

import React, { useState } from "react";
import { Input, Link, Button } from "@heroui/react";
import { Eye, EyeOff } from "lucide-react";
import LoginWithGoogle from "@/components/Buttons/LoginWithGoogle";
// import validateEmail from "@/utility/util";
import authApi from "@/app/api/auth";
import { useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/redux/store";
import { setUser, setUserPartial } from "@/redux/slices/userSlice";

export default function SignIn() {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();

  const [isVisible, setIsVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    email: "kk1@gmail.com",
    password: "123",
  });

  const [emailError, setEmailError] = useState(false);
  const [passError, setPassError] = useState(false);

  const _handleLogin = async () => {
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
      const res = await authApi.userLogin(data.email, data.password);

      if (res?.status === 400) {
        setEmailError(false);
        setPassError(false);
        alert("Invalid Credentials");
        return;
      }

      // If user exists but email is not verified
      if (res?.status === 401) {
        setEmailError(false);
        setPassError(false);
        let user = {
          token: res?.token,
          data: res?.user,
        };
        console.log(res);
        dispatch(setUserPartial(user));
        router.push("SignUp/Verification", { scroll: false });
        return;
      }

      if (res?.status === 200) {
        // # save user to redux and localstorage
        console.clear();
        localStorage.setItem("token", res?.token);
        let user = {
          token: res?.token,
          data: res?.user,
        };
        console.log(res);
        dispatch(setUser(user));
        router.push("Dashboard", { scroll: false });
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
          Log in to your MailTrail account
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
            value={data.email}
            label="Email"
            onChange={(e) => setData({ ...data, email: e.target.value })}
            labelPlacement="outside"
            placeholder="Enter your email"
            errorMessage="sdf"
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
            label="Password"
            type={isVisible ? "text" : "password"}
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

        <div className="mt-2">
          <Link
            href="/SignIn/ForgetPassword"
            className="text-sm"
            color="primary"
          >
            I forgot my password
          </Link>
        </div>

        <div className="mt-5">
          <Button
            className="w-full"
            radius="md"
            color="primary"
            isLoading={loading}
            onClick={_handleLogin}
          >
            <b>Sign in</b>
          </Button>
        </div>

        <div className="mt-4 flex flex-row">
          <p className="text-[#969696]">New to Mailtrail? </p>
          <Link href="/SignUp" className="text-md ml-2" color="primary">
            Sign up
          </Link>
        </div>
      </section>
    </>
  );
}
