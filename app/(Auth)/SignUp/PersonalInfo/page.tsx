"use client";

import React, { useState } from "react";
import { Input, Button, Checkbox } from "@nextui-org/react";
import { useRouter } from "next/navigation";

import { RootState, AppDispatch } from "@/redux/store";
import { useSelector, useDispatch } from "react-redux";
import authApi from "@/app/api/auth";
import { setUser } from "@/redux/slices/userSlice";

export default function PersonalInfo() {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const userPartial = useSelector((state: RootState) => state.user.userPartial);
  const [loading, setLoading] = useState(false);

  if (!userPartial) {
    return router.push("/SignUp");
  }

  const [isWebsiteUrl, setIsWebsiteUrl] = useState(false);

  const [personalInfo, setPersonalInfo] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    websiteUrl: "",
  });

  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [companyNameError, setCompanyNameError] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);

    try {
      // input validation
      setFirstNameError(false);
      setLastNameError(false);
      setCompanyNameError(false);

      if (personalInfo.firstName === "") {
        setFirstNameError(true);
        return;
      }
      if (personalInfo.lastName === "") {
        setLastNameError(true);
        return;
      }
      if (personalInfo.companyName === "") {
        setCompanyNameError(true);
        return;
      }

      // api call
      const res = await authApi.setPersonalInfo(
        personalInfo.firstName,
        personalInfo.lastName,
        personalInfo.companyName,
        personalInfo.websiteUrl,
        userPartial?.token
      );

      console.log(res);

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
          Let's start with the basics.
        </p>
        <p className="mt-1 font-medium text-sm text-[#737373]">
          First, we need to know a few things about you.
        </p>

        <div className="mt-5">
          <Input
            type="text"
            label="First name"
            value={personalInfo.firstName}
            onChange={(e) =>
              setPersonalInfo({ ...personalInfo, firstName: e.target.value })
            }
            labelPlacement="outside"
            placeholder="Enter your first name"
            // description="outside"
          />
          {firstNameError && (
            <p className="text-sm text-red-600">
              Please, Enter your first Email.
            </p>
          )}
        </div>
        <div className="mt-5">
          <Input
            type="text"
            label="Last name"
            value={personalInfo.lastName}
            onChange={(e) =>
              setPersonalInfo({ ...personalInfo, lastName: e.target.value })
            }
            labelPlacement="outside"
            placeholder="Enter your last name"
            // description="outside"
          />
          {lastNameError && (
            <p className="text-sm text-red-600">
              Please, Enter your last name.
            </p>
          )}
        </div>
        <div className="mt-5">
          <Input
            type="text"
            value={personalInfo.companyName}
            onChange={(e) =>
              setPersonalInfo({ ...personalInfo, companyName: e.target.value })
            }
            label="Company name"
            labelPlacement="outside"
            placeholder="Enter your company name"
            // description="outside"
          />
          {companyNameError && (
            <p className="text-sm text-red-600">
              Please, Enter your company name.
            </p>
          )}
        </div>
        <div className="mt-5">
          <Input
            type="text"
            value={personalInfo.websiteUrl}
            onChange={(e) =>
              setPersonalInfo({ ...personalInfo, websiteUrl: e.target.value })
            }
            label="Website url"
            labelPlacement="outside"
            placeholder="Enter your website url"
            isDisabled={isWebsiteUrl}
            // description="outside"
          />
        </div>
        <div className="mt-4 flex flex-row">
          <Checkbox
            radius="sm"
            checked={isWebsiteUrl}
            onChange={(e) => setIsWebsiteUrl(e.target.checked)}
          >
            I don't have a website
          </Checkbox>
        </div>
        <div className="mt-6">
          <Button
            onClick={handleSubmit}
            className="w-full"
            radius="md"
            color="primary"
            isLoading={loading}
          >
            <b>Continue</b>
          </Button>
        </div>
      </section>
    </>
  );
}
