"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { Button } from "@nextui-org/react";
import { ArrowLeft } from "lucide-react";
import "react-quill/dist/quill.snow.css";

import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/redux/store";
import { setCampaign } from "@/redux/slices/campaignsSlice";
import userApi from "@/app/api/user";
import { useRouter } from "next/navigation";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function RichTextEditor({ params }: any) {
  const campaign = useSelector((state: RootState) => state.campaigns.campaign);
  const [editorValue, setEditorValue] = useState(campaign?.content || "");
  const [isLoading, setIsloading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  const handleChange = (content: string) => {
    setEditorValue(content);
    // onChange(content);
  };

  const _handleSubmitEditorValue = async () => {
    const payload = {
      content: editorValue,
      editorType: "RichTextEditor",
    };

    setIsloading(true);
    setIsDisabled(true);
    try {
      const res = await userApi.updateCampaignData(params.id, payload);
      console.log("res: ", res);
      dispatch(setCampaign(res));
      router.push("/Dashboard/Campaigns/EditEmailCampaign/" + params.id);
    } catch (e) {
      console.error("Error while fetching sender data", e);
    } finally {
      setIsloading(false);
      setIsDisabled(false);
    }
  };

  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ list: "ordered" }, { list: "bullet" }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ color: [] }, { background: [] }],
      ["link"],
      ["clean"], // Remove formatting button
    ],
  };

  const formats = [
    "header",
    "font",
    "list",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "color",
    "link",
  ];
  return (
    <div className="max-w-[85rem] flex justify-center items-center mx-4 mb-9 sm:mx-6 lg:mx-8">
      <div className="lg:w-[700px] sm:w-[500px] w-full w-max-md mt-14 sm:mx-0 mx-1 h-fit">
        {/* nav */}
        <div className="flex flex-row justify-between mb-8">
          <div className="flex items-center">
            <Button
              startContent={<ArrowLeft size={"16px"} />}
              color="default"
              size="sm"
              variant="flat"
              onClick={() =>
                router.push(
                  "/Dashboard/Campaigns/EditEmailCampaign/" + params.id
                )
              }
            >
              Back
            </Button>
            <span className="text-md ml-3">Rich-Text Editor</span>
          </div>
          <div>
            <Button
              className="w-fit ml-3"
              radius="sm"
              size="sm"
              color="primary"
              isLoading={isLoading}
              isDisabled={isDisabled}
              onClick={_handleSubmitEditorValue}
            >
              <b>Save Content</b>
            </Button>
          </div>
        </div>
        {/* body */}
        <div className={"quill-dark"}>
          <ReactQuill
            value={editorValue}
            onChange={handleChange}
            modules={modules}
            className="h-80"
            formats={formats}
            theme="snow" // You can customize this or create a custom theme
          />
        </div>
      </div>
    </div>
  );
}
