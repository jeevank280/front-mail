"use client";

import React, { useEffect, useState } from "react";
import {
  Avatar,
  Button,
  Progress,
  Select,
  SelectItem,
  RadioGroup,
  Radio,
  Chip,
  Spinner,
} from "@nextui-org/react";
import { Check, Info, X } from "lucide-react";

import { CheckboxGroup } from "@nextui-org/react";
import { CustomCheckbox } from "../../Contact/form/CustomCheckbox";

import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/redux/store";

import { setCampaign } from "@/redux/slices/campaignsSlice";
import userApi from "@/app/api/user";

export default function ManageRecipients() {
  const [isBodyVisible, setIsBodyVisible] = useState(false);
  const [isLoading, setIsloading] = useState(false);
  const user = useSelector((state: RootState) => state.user.user);
  console.log("user ", user);

  const [selectOption, setSelectOption] = React.useState("");

  const handleSelectionChange = (e: any) => {
    setSelectOption(e.target.value);
  };

  const [isTagShow, setIsTagShow] = useState(false);
  const [tags, setTags] = React.useState<any>([]);

  const [loadingRecip, setLoadingRecip] = useState(false);

  const [totalRecipients, setTotalRecipients] = useState(0);

  useEffect(() => {
    const recipientsInfo = async () => {
      const payload = {
        option: selectOption,
        tags: tags,
      };
      try {
        setLoadingRecip(true);
        const res = await userApi.recipientsInfo(payload);
        console.log("res", res.total);
        setTotalRecipients(res.total);
      } catch (e) {
        console.error("Error while fetching contacts", e);
      } finally {
        setLoadingRecip(false);
      }
    };

    if (selectOption === "") {
      setIsTagShow(false);
    }

    if (selectOption === "sentAll") {
      setIsTagShow(false);
      recipientsInfo();
    }

    if (selectOption === "sentTo") {
      setIsTagShow(true);
      recipientsInfo();
    }

    if (selectOption === "dontSentTo") {
      setIsTagShow(true);
      recipientsInfo();
    }
  }, [selectOption, tags]);

  const campaign = useSelector((state: RootState) => state.campaigns.campaign);
  const dispatch = useDispatch<AppDispatch>();

  const _handleSubmit = async () => {
    if (selectOption === "") {
      alert("Must select one option!");
      return;
    }

    const payload = {
      sendToContactType: selectOption,
      tags: tags,
    };

    try {
      setIsloading(true);
      const res = await userApi.updateCampaignData(campaign._id, payload);
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
          {campaign?.sendToContactType === undefined ? (
            <div className="bg-yellow-500  rounded-full">
              <Info size={20} className="m-1" fontWeight={"bold"} />
            </div>
          ) : (
            <div className="bg-green-700  rounded-full">
              <Check size={20} className="m-1" fontWeight={"bold"} />
            </div>
          )}
          <div className="ml-3">
            <p className="text-xl font-semibold">Recipients</p>
            <p className="text-sm text-neutral-400 font-light">
              The people who receive your campaign
            </p>
          </div>
        </div>
        {!isBodyVisible ? (
          <Button size="sm" onClick={() => setIsBodyVisible(true)}>
            Add Recipients
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
          <div className="flex flex-col mt-5">
            {/* select options */}
            <div className="flex flex-row">
              <Select
                placeholder="Select Select Options"
                label="Select Options"
                className="border rounded-md w-full border-neutral-600 max-w-xs"
                disableSelectorIconRotation
                labelPlacement="outside"
                selectedKeys={[selectOption]}
                onChange={handleSelectionChange}
              >
                <SelectItem key={"sentAll"}>Sent to all contacts</SelectItem>
                <SelectItem key={"sentTo"}>
                  Sent to (Selected below tags)
                </SelectItem>
                <SelectItem key={"dontSentTo"}>
                  Don't sent to (Selected below tags)
                </SelectItem>
              </Select>
              {loadingRecip && <Spinner size="md" className="ml-5 mt-4 " />}
            </div>

            {/* tags */}
            {isTagShow && (
              <>
                {user.data.tags.length !== 0 && (
                  <>
                    <CheckboxGroup
                      className="gap-2 mt-4"
                      orientation="horizontal"
                      value={tags}
                      onChange={setTags}
                    >
                      {/* <CustomCheckbox value="wifi">Wifi</CustomCheckbox> */}
                      {user.data.tags.map((item: any, key: any) => (
                        <CustomCheckbox value={item} key={key}>
                          {item}
                        </CustomCheckbox>
                      ))}
                    </CheckboxGroup>
                  </>
                )}
              </>
            )}

            {/* Recipients Info */}
            <div className="flex flex-col gap-2 mt-4">
              <div className="flex flex-row justify-between">
                <div>{totalRecipients} Recipients</div>
                <div>300 Remaining emails</div>
              </div>
              <div>
                <Progress
                  size="sm"
                  maxValue={300}
                  value={totalRecipients}
                  aria-label="Loading..."
                />
              </div>
              <p className="text-sm">
                Send to as many recipients you wish, within your plan limits.
              </p>
            </div>
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
