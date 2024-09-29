"use client";

import React, { useEffect, useState } from "react";
import { Avatar, AvatarIcon, Button, Textarea } from "@nextui-org/react";
import { Check, Info, Pencil, Trash2, X } from "lucide-react";
import { useRouter } from "next/navigation";

import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/redux/store";
import { setCampaign } from "@/redux/slices/campaignsSlice";
import userApi from "@/app/api/user";

export default function ManageDesigns() {
  const campaign = useSelector((state: RootState) => state.campaigns.campaign);
  const router = useRouter();
  const [isLoadingDeleteIcon, setIsloadingDeleteIcon] = useState(false);
  const [isBodyVisible, setIsBodyVisible] = useState(false);

  const dispatch = useDispatch<AppDispatch>();

  const _handleDesigning = () => {
    if (campaign?.editorType === "") {
      router.push(
        "/Dashboard/Campaigns/EditEmailCampaign/" + campaign._id + "/Design"
      );
    } else {
      setIsBodyVisible(true);
    }
  };

  const _handleContentDelete = async () => {
    setIsloadingDeleteIcon(true);
    const payload = {
      content: "",
      editorType: "",
    };

    try {
      const res = await userApi.updateCampaignData(campaign._id, payload);
      console.log("res: ", res);
      dispatch(setCampaign(res));
    } catch (e) {
      console.error("Error while fetching sender data", e);
    } finally {
      setIsloadingDeleteIcon(false);
      setIsBodyVisible(false);
    }
  };

  const _handleContentEdit = () => {
    if (campaign?.editorType === "RichTextEditor") {
      router.push(
        "/Dashboard/Campaigns/EditEmailCampaign/" +
          campaign._id +
          "/Design/RichTextEditor"
      );
    }
  };

  return (
    <div className="px-4 py-3">
      {/* header */}
      <div className="flex flex-row justify-between  items-center">
        <div className="flex flex-row items-center">
          {campaign?.editorType === "" ? (
            <div className="bg-yellow-500  rounded-full">
              <Info size={20} className="m-1" fontWeight={"bold"} />
            </div>
          ) : (
            <div className="bg-green-700  rounded-full">
              <Check size={20} className="m-1" fontWeight={"bold"} />
            </div>
          )}
          <div className="ml-3">
            <p className="text-xl font-semibold">Design</p>
            <p className="text-sm text-neutral-400 font-light">
              Create your email content
            </p>
          </div>
        </div>
        {!isBodyVisible ? (
          <Button size="sm" onClick={_handleDesigning}>
            Start designing
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
        <>
          {campaign?.editorType !== "" && campaign?.content !== "" && (
            <>
              <div className="mt-5">
                <div className="ralative flex flex-col bg-[#18181b] p-2 w-60 h-60 rounded-lg">
                  <div
                    className="w-full flex-1"
                    dangerouslySetInnerHTML={{ __html: campaign?.content }}
                  />
                  <div className="flex pt-2 justify-end flex-row">
                    <Button
                      variant="bordered"
                      className="mr-2"
                      isIconOnly
                      size="sm"
                      onClick={_handleContentEdit}
                    >
                      <Pencil size="17" />
                    </Button>
                    <Button
                      variant="bordered"
                      isIconOnly
                      size="sm"
                      isLoading={isLoadingDeleteIcon}
                      onClick={_handleContentDelete}
                    >
                      <Trash2 size="17" />
                    </Button>
                  </div>
                </div>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
}
