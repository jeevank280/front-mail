"use client";

import React, { useEffect, useState } from "react";
import { Avatar, AvatarIcon, Button, Textarea } from "@nextui-org/react";
import { Check, Info, X } from "lucide-react";

import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/redux/store";
import { setCampaign } from "@/redux/slices/campaignsSlice";
import userApi from "@/app/api/user";

export default function ManageCampaignSubject() {
  const campaign = useSelector((state: RootState) => state.campaigns.campaign);
  const [isBodyVisible, setIsBodyVisible] = useState(false);
  const [isLoading, setIsloading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);

  console.log("campaign", campaign);

  const dispatch = useDispatch<AppDispatch>();

  const [ManageSubject, setManageSubject] = useState({
    subject: campaign?.subject || "",
  });

  useEffect(() => {
    if (ManageSubject.subject !== "") {
      setIsDisabled(false);
    }
  }, [ManageSubject]);

  const _handleSubmit = async () => {
    if (ManageSubject.subject === "") {
      alert("subject required!");
      return;
    }

    setIsloading(true);

    try {
      const res = await userApi.updateCampaignData(campaign._id, ManageSubject);
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
          {campaign?.subject === undefined ? (
            <div className="bg-yellow-500 rounded-full">
              <Info size={20} className="m-1" fontWeight={"bold"} />
            </div>
          ) : (
            <div className="bg-green-700 rounded-full">
              <Check size={20} className="m-1" fontWeight={"bold"} />
            </div>
          )}
          <div className="ml-3">
            <p className="text-xl font-semibold">Subject</p>
            <p className="text-sm text-neutral-400 font-light">
              Add a Subject line for this campaign
            </p>
          </div>
        </div>
        {!isBodyVisible ? (
          <Button size="sm" onClick={() => setIsBodyVisible(true)}>
            Add Subjects
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
        <div className="mt-5">
          <Textarea
            label="Enter your subject line"
            variant="bordered"
            labelPlacement="outside"
            placeholder="Enter your subject ..."
            className="w-full"
            value={ManageSubject.subject}
            onChange={(e) =>
              setManageSubject({ ...ManageSubject, subject: e.target.value })
            }
          />
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
