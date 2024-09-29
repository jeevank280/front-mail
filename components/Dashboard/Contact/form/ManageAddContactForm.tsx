"use client";

import React, { useEffect, useState } from "react";
import { Button, ModalBody, ModalFooter, Input } from "@nextui-org/react";

import userApi from "@/app/api/user";

import { CheckboxGroup } from "@nextui-org/react";
import { CustomCheckbox } from "./CustomCheckbox";

import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/redux/store";
import { setContacts } from "@/redux/slices/contactsSlice";
import { setNoOfContacts } from "@/redux/slices/userSlice";

export default function ManageAddContactForm({ onClose }: any) {
  const dispatch = useDispatch<AppDispatch>();

  const [loading, setLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const user = useSelector((state: RootState) => state.user.user);
  const [contact, setContact] = useState({
    name: "",
    email: "",
  });

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [tagError, setTagError] = useState("");

  useEffect(() => {
    if (contact.name !== "" && contact.email !== "") {
      setIsVisible(false);
    }
  }, [contact]);

  const [tags, setTags] = React.useState<string[]>([]);

  const validateName = (name: string): boolean => {
    if (name.trim() === "") {
      setNameError("Please enter a name.");
      return false;
    }
    setNameError("");
    return true;
  };

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email address.");
      return false;
    }
    setEmailError("");
    return true;
  };

  const validateTags = (tags: string[]): boolean => {
    if (tags.length === 0) {
      setTagError("Please select at least one tag.");
      return false;
    }
    setTagError("");
    return true;
  };

  const _handleContactSubmission = async () => {
    setLoading(true);
    try {
      const isNameValid = validateName(contact.name);
      const isEmailValid = validateEmail(contact.email);
      const areTagsValid = validateTags(tags);

      if (!isNameValid || !isEmailValid || !areTagsValid) {
        setLoading(false);
        return;
      }

      // api call
      const res = await userApi.createContacts(
        contact.name,
        contact.email,
        tags
      );

      if (res?.data?.status === 400) {
        setEmailError("Email already exists");
      } else {
        dispatch(setNoOfContacts(res?.data?.total));
        dispatch(setContacts(res?.data?.data));
        onClose();
      }
    } catch (e) {
      console.error("Error: ", e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <ModalBody>
        <div>
          <Input
            type="text"
            label="Name"
            labelPlacement="outside"
            value={contact.name}
            placeholder="Enter contact name"
            onChange={(e) => {
              setContact({ ...contact, name: e.target.value });
              validateName(e.target.value);
            }}
          />
          {nameError && (
            <p className="text-sm text-red-600">{nameError}</p>
          )}
        </div>
        <div className="mt-2">
          <Input
            type="email"
            label="Email"
            labelPlacement="outside"
            value={contact.email}
            placeholder="Enter contact email"
            onChange={(e) => {
              setContact({ ...contact, email: e.target.value });
              validateEmail(e.target.value);
            }}
          />
          {emailError && (
            <p className="text-sm text-red-600">{emailError}</p>
          )}
        </div>
        <div className="flex flex-col mt-1 gap-1 w-full">
          {user.data.tags.length !== 0 && (
            <>
              <CheckboxGroup
                className="gap-2"
                label="Select Tags"
                orientation="horizontal"
                value={tags}
                onChange={(value) => {
                  setTags(value as string[]);
                  validateTags(value as string[]);
                }}
              >
                {user.data.tags.map((item: string, key: number) => (
                  <CustomCheckbox value={item} key={key}>
                    {item}
                  </CustomCheckbox>
                ))}
              </CheckboxGroup>
            </>
          )}
          {tagError && (
            <p className="text-sm text-red-600">{tagError}</p>
          )}
        </div>
      </ModalBody>
      <ModalFooter>
        <Button
          className="w-fit"
          radius="md"
          color="default"
          variant="bordered"
          onPress={onClose}
        >
          Close
        </Button>
        <Button
          color="primary"
          onClick={_handleContactSubmission}
          isLoading={loading}
          isDisabled={isVisible || !!nameError || !!emailError || !!tagError}
        >
          Add Contact
        </Button>
      </ModalFooter>
    </>
  );
}
