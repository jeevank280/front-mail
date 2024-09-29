"use client";

import React, { useEffect, useState } from "react";
import {
  Avatar,
  AvatarIcon,
  Button,
  Input,
  Select,
  SelectItem,
} from "@nextui-org/react";
import { Check, Info, X } from "lucide-react";
import userApi from "@/app/api/user";

import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/redux/store";
import { setCampaign } from "@/redux/slices/campaignsSlice";

export default function ManageSender() {
  const campaign = useSelector((state: RootState) => state.campaigns.campaign);
  const sendersList = useSelector(
    (state: RootState) => state.campaigns.sendersList
  );
  console.log(sendersList);
  const [isBodyVisible, setIsBodyVisible] = useState(false);
  const [isLoading, setIsloading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const dispatch = useDispatch<AppDispatch>();

  const [senderData, setSenderData] = useState({
    senderName: campaign?.senderName || "",
    senderEmail: campaign?.senderEmail || "",
  });

  const [validationError, setValidationError] = useState({
    senderEmail: false,
  });

  const _handleSubmit = async () => {
    setIsloading(true);

    try {
      if (!senderData.senderEmail) {
        setValidationError({ ...validationError, senderEmail: true });
        setIsloading(false);
        return;
      }

      const filteredSenderName =
        sendersList.find(
          (sender: { email: any }) => sender.email === senderData.senderEmail
        )?.name || "";
      setSenderData((prevState) => ({
        ...prevState,
        senderName: filteredSenderName,
      }));

      const res = await userApi.updateCampaignData(campaign._id, senderData);
      console.log("res: ", res);
      dispatch(setCampaign(res));
      setIsBodyVisible(false);
    } catch (e) {
      console.error("Error while fetching sender data", e);
    } finally {
      setIsloading(false);
    }
  };

  return (
    <div className="px-4 py-3">
      {/* header */}
      <div className="flex flex-row justify-between  items-center">
        <div className="flex flex-row items-center">
          {campaign?.senderEmail === undefined ? (
            <div className="bg-yellow-500  rounded-full">
              <Info size={20} className="m-1" fontWeight={"bold"} />
            </div>
          ) : (
            <div className="bg-green-700  rounded-full">
              <Check size={20} className="m-1" fontWeight={"bold"} />
            </div>
          )}
          <div className="ml-3">
            <p className="text-xl font-semibold">Senders</p>
            <p className="text-sm text-neutral-400 font-light">Sender name</p>
          </div>
        </div>
        {!isBodyVisible ? (
          <Button size="sm" onClick={() => setIsBodyVisible(true)}>
            Manage Sender
          </Button>
        ) : (
          <Button
            radius="full"
            size="sm"
            isIconOnly
            onClick={() => setIsBodyVisible(false)}
          >
            <X size={17} />
          </Button>
        )}
      </div>
      {/* body */}
      {isBodyVisible && (
        <div className="mt-2">
          <div className="flex flex-row gap-3 mt-5">
            <Select
              label="Sender"
              placeholder="Select sender email"
              className="border rounded-md border-neutral-600 max-w-xs"
              labelPlacement="outside"
              disableSelectorIconRotation
              onChange={(e) =>
                setSenderData({
                  ...senderData,
                  senderEmail: e.target.value,
                })
              }
            >
              {sendersList
                .filter(
                  (item: { isVerified: boolean }) => item.isVerified !== false
                )
                .map((item: any) => {
                  return (
                    <SelectItem key={item.email} value={item.email}>
                      <div className="flex flex-col">
                        <span className="text-small">{item.name}</span>
                        <span className="text-tiny text-default-400">
                          {item.email}
                        </span>
                      </div>
                    </SelectItem>
                  );
                })}
            </Select>
            {validationError.senderEmail && (
              <p className="text-sm text-red-600 mt-2">
                Please, Enter the sender email.
              </p>
            )}
          </div>
          {/* footer */}
          <div className="mt-6 flex flex-row justify-end">
            <Button
              className="w-fit"
              color="default"
              size="sm"
              onClick={() => setIsBodyVisible(false)}
            >
              Cancel
            </Button>
            <Button
              className="w-fit ml-3"
              size="sm"
              color="primary"
              isLoading={isLoading}
              isDisabled={isDisabled}
              onClick={_handleSubmit}
            >
              <b>Save</b>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
