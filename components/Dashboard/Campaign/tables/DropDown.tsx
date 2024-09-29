"use client";

import React, { useState } from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import { EllipsisVertical } from "lucide-react";

import userApi from "@/app/api/user";

import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/redux/store";
import { setCampaigns } from "@/redux/slices/campaignsSlice";

export default function DropDown({ data }: any) {
  const dispatch = useDispatch<AppDispatch>();

  const _handleAction = async (key: any) => {
    if (key === "delete") {
      try {
        const res = await userApi.deleteCampaignById(data?._id);
        console.log("contact dropdown: ", res);
        dispatch(setCampaigns(res?.data));
      } catch (e) {
        console.log("error while deleting contacts: ", e);
      }
    }
  };

  return (
    <>
      <Dropdown>
        <DropdownTrigger>
          <Button size="sm" isIconOnly variant="bordered">
            <EllipsisVertical size={18} />
          </Button>
        </DropdownTrigger>
        <DropdownMenu
          aria-label="Static Actions"
          onAction={(key) => _handleAction(key)}
        >
          <DropdownItem key="delete" className="text-danger" color="danger">
            Delete Campaign
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </>
  );
}
