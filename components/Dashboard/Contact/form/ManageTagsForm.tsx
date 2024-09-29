"use client";

import { useState } from "react";

import {
  Button,
  ModalBody,
  ModalFooter,
  Input,
  Chip,
  Kbd,
} from "@nextui-org/react";

import userApi from "@/app/api/user";

import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/redux/store";
import { setTags } from "@/redux/slices/userSlice";

export default function ManageTagsForm({ onClose }: any) {
  const user = useSelector((state: RootState) => state.user.user);

  const dispatch = useDispatch<AppDispatch>();

  const [isLoading, setIsloading] = useState(false);

  const [value, setValue] = useState("");
  const [tags, setInnerTags] = useState(user?.data?.tags || []);
  const [initialTags, setInitialTags] = useState(user?.data?.tags || []);

  const _handleAddTag = () => {
    if (value === "") return;
    const duplicateTag = tags.includes(value);

    if (duplicateTag) return;

    console.log(duplicateTag);

    setInnerTags([...tags, value]);
    setValue("");
  };

  const handleClose = (tagRemove: String) => {
    setInnerTags(tags.filter((tag: any) => tag !== tagRemove));
    if (tags.length === 1) {
      setInnerTags([]);
    }
  };

  const _handleUpdateTagsSubmit = async () => {
    // if (tags.length === 0) return;
    setIsloading(true);
    const payload = {
      tags,
    };
    try {
      const res = await userApi.updateUserData(payload);
      console.log("res: ", res?.tags);
      dispatch(setTags(res?.tags));
      onClose();
    } catch (e) {
      console.error("Error while fetching sender data", e);
    } finally {
      setIsloading(false);
    }
  };

  const hasChanges = JSON.stringify(tags) !== JSON.stringify(initialTags);

  return (
    <>
      <ModalBody>
        <div>
          <Input
            type="text"
            label="Name"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            labelPlacement="outside"
            placeholder="Enter tags name"
            endContent={<Kbd keys={["enter"]}>Enter</Kbd>}
            onKeyDown={(e) => {
              if (e.key === "Enter") _handleAddTag();
            }}
          />
        </div>
        {tags.length === 0 && (
          <p className="text-sm font-thin italic">Need to add tags</p>
        )}
        <div className="mt-2">
          {tags.map((tag: any, index: number) => (
            <Chip
              key={index}
              onClose={() => handleClose(tag)}
              variant="flat"
              className="mr-2 mb-2"
            >
              {tag}
            </Chip>
          ))}
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
          isLoading={isLoading}
          onClick={() => _handleUpdateTagsSubmit()}
          isDisabled={!hasChanges}
        >
          Update Tags
        </Button>
      </ModalFooter>
    </>
  );
}
