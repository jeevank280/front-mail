"use client";

import userApi from "@/app/api/user";
import { Input, Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AddSenderEmail() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [OTPloading, setOTPLoading] = useState(false);

  const [senderName, setSenderName] = useState("");
  const [senderEmail, setEmailName] = useState("");
  const [otp, setOtp] = useState("");
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [otpError, setOtpError] = useState(false);

  const [otpScreenTab, setOtpScreenTab] = useState(false);

  const _handleEmailSubmit = async () => {
    setLoading(true);
    try {
      // input validation
      setNameError(false);

      if (senderName === "") {
        setNameError(true);
        return;
      }
      if (senderEmail === "") {
        setEmailError(true);
        return;
      }

      const payload = {
        name: senderName,
        email: senderEmail,
      };
      // api call
      const res = await userApi.addNewSenderEmailAddress(payload);

      console.log(res);

      if (res?.status === 400) {
        alert(res?.msg);
        return;
      }

      if (res?.status === 200) {
        setOtpScreenTab(true);
      }
    } catch (e) {
      console.error("Error: ", e);
    } finally {
      setLoading(false);
    }
  };

  const _handleOTPVerifySubmit = async () => {
    setOTPLoading(true);
    try {
      // input validation
      setOtpError(false);

      if (otp === "") {
        setOtpError(true);
        return;
      }

      const payload = {
        otp: otp,
        email: senderEmail,
      };
      // api call
      const res = await userApi.verifyOtpSenderEmail(payload);

      console.log(res);

      if (res?.status === 404) {
        alert(res?.msg);
        return;
      }

      if (res?.status === 402) {
        alert(res?.msg);
        return;
      }

      if (res?.status === 200) {
        alert("Successfully added!");
        router.push("/Dashboard/SendersAndDomains?tabName=sender_emails");
      }
    } catch (e) {
      console.error("Error: ", e);
    } finally {
      setOTPLoading(false);
    }
  };

  return (
    <>
      <div className="max-w-[85rem] flex justify-center mx-4 mt-8 mb-9 sm:mx-6 lg:mx-8">
        <div className="sm:w-[500px] w-full w-max-md mt-16 sm:mx-0 mx-1 h-fit">
          {!otpScreenTab ? (
            <>
              <p className="text-2xl font-semibold text-[#E5E5E5]">
                Add Your Email
              </p>
              <p className="mt-1 font-medium text-sm text-[#737373]">
                This email is your sender email by which you can also recieve
                the reply.
              </p>
              <div className="mt-16">
                <Input
                  type="text"
                  label="Sender Name*"
                  labelPlacement="outside"
                  placeholder="Enter Sender Name"
                  value={senderName}
                  required
                  onChange={(e) => setSenderName(e.target.value)}
                />
                {nameError && (
                  <p className="text-sm text-red-600">
                    Please, Enter the name.
                  </p>
                )}
              </div>

              <div className="mt-10">
                <Input
                  type="email"
                  label="Sender Email*"
                  labelPlacement="outside"
                  placeholder="Enter Sender Email"
                  value={senderEmail}
                  required
                  onChange={(e) => setEmailName(e.target.value)}
                />
                {emailError && (
                  <p className="text-sm text-red-600">
                    Please, Enter the email.
                  </p>
                )}
              </div>

              <div className="mt-6 flex flex-row justify-end">
                <Button
                  className="w-fit"
                  radius="md"
                  size="sm"
                  color="default"
                  variant="bordered"
                  onClick={() => router.push("/Dashboard/SendersAndDomains")}
                >
                  Cancel
                </Button>
                <Button
                  className="w-fit ml-3"
                  radius="md"
                  size="sm"
                  color="primary"
                  isLoading={loading}
                  onClick={_handleEmailSubmit}
                >
                  <b>Add Email</b>
                </Button>
              </div>
            </>
          ) : (
            <>
              <p className="text-2xl font-semibold text-[#E5E5E5]">
                Verify your Email
              </p>
              <p className="mt-1 font-medium text-sm text-[#737373]">
                This email is your sender email by which you can also recieve
                the reply.
              </p>
              <div className="mt-16">
                <Input
                  type="number"
                  label="Verification OTP"
                  labelPlacement="outside"
                  placeholder="123456"
                  value={otp}
                  required
                  onChange={(e) => setOtp(e.target.value)}
                  // description="outside"
                />
                {nameError && (
                  <p className="text-sm text-red-600">Please, Enter the OTP.</p>
                )}
              </div>

              <div className="mt-6 flex flex-row justify-end">
                <Button
                  className="w-fit ml-3"
                  radius="md"
                  size="sm"
                  color="primary"
                  isLoading={OTPloading}
                  onClick={_handleOTPVerifySubmit}
                >
                  <b>Verify Email</b>
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
