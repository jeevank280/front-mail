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
import { setContacts } from "@/redux/slices/contactsSlice";

import { setNoOfContacts } from "@/redux/slices/userSlice";

export default function DropDown({ data }: any) {
  const dispatch = useDispatch<AppDispatch>();

  const _handleAction = async (key: any) => {
    if (key === "subscribe") {
      const res = await userApi.updateIsSubscribeContact(
        data?._id,
        !data?.subscribed
      );
      dispatch(setContacts(res?.data));
    }
    if (key === "delete") {
      try {
        const res = await userApi.deleteContactById(data?._id);
        console.log("contact delete: ", res?.total);

        dispatch(setNoOfContacts(res?.total));
        dispatch(setContacts(res?.data));
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
          <DropdownItem key="subscribe">
            {data?.subscribed ? "Unsubscribe" : "Subscribe"}
          </DropdownItem>
          <DropdownItem key="delete" className="text-danger" color="danger">
            Delete contact
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </>
  );
}
