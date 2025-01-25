"use client";

import CodeYourOwnComponent from "@/components/Dashboard/Campaign/templateSelections/CodeYourOwnComponent";
import MyCampaignsComponent from "@/components/Dashboard/Campaign/templateSelections/MyCampaignsComponent";
import MyTemplatesComponent from "@/components/Dashboard/Campaign/templateSelections/MyTemplatesComponent";
import TemplateGalleryComponent from "@/components/Dashboard/Campaign/templateSelections/TemplateGalleryComponent";
import { Button, Tabs, Tab } from "@heroui/react";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

export default function Design({ params }: any) {
  const router = useRouter();
  return (
    <div className="max-w-[85rem] flex justify-center items-center mx-4 mb-9 sm:mx-6 lg:mx-8">
      <div className="lg:w-[700px] sm:w-[500px] w-full w-max-md mt-14 sm:mx-0 mx-1 h-fit">
        {/* nav */}
        <div className="flex flex-row justify-between">
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
            <span className="text-md ml-3">Select a template</span>
          </div>
        </div>
        {/* body */}
        <Tabs variant="solid" className="mt-8" size="sm">
          <Tab key="template" title="Template Gallery">
            <TemplateGalleryComponent />
          </Tab>
          <Tab key="myTemplate" title="My Templates">
            <MyTemplatesComponent />
          </Tab>
          <Tab key="Campaigns" title="Campaigns">
            <MyCampaignsComponent />
          </Tab>
          <Tab key="codeOwn" title="Create your own">
            <CodeYourOwnComponent />
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}
