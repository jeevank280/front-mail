"use client";

import { Button } from "@nextui-org/react";
import { FilePen, GripVertical } from "lucide-react";
import { useRouter } from "next/navigation";

import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/redux/store";

export default function CodeYourOwnComponent() {
  const campaign = useSelector((state: RootState) => state.campaigns.campaign);
  const router = useRouter();
  return (
    <div className="mt-3 flex flex-row gap-x-6">
      <div className="flex flex-row bg-[#18181b] w-80 p-5 rounded-lg">
        <FilePen className="mt-0" size="65" />
        <div className="ml-3">
          <p className="text-xl font-semibold">Rich Text Editor</p>
          <p className="text-sm text-neutral-400 font-light mt-2">
            Use the rich text editor to create simple emails
          </p>
          <Button
            size="sm"
            variant="bordered"
            className="mt-3"
            onClick={() => {
              router.push(
                "/Dashboard/Campaigns/EditEmailCampaign/" +
                  campaign._id +
                  "/Design/RichTextEditor"
              );
            }}
          >
            Use Rich Text Editor
          </Button>
        </div>
      </div>
      <div className="flex flex-row bg-[#18181b] w-80 p-5 rounded-lg">
        <GripVertical className="mt-0" size="65" />
        <div className="ml-3">
          <p className="text-xl font-semibold">Drag & Drop Editor</p>
          <p className="text-sm text-neutral-400 font-light mt-2">
            Use the drag and drop editor to create complex emails
          </p>
          <Button
            size="sm"
            variant="bordered"
            className="mt-3"
            onClick={() => {
              router.push(
                "/Dashboard/Campaigns/EditEmailCampaign/" +
                  campaign._id +
                  "/Design/DragAndDropEditor"
              );
            }}
          >
            Use Drag & Drop Editor
          </Button>
        </div>
      </div>
    </div>
  );
}
