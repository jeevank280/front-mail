"use client";

import userApi from "@/app/api/user";
import { Input, Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CreateEmailCampaign() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const [campaignName, setCampaignName] = useState("");

  const [nameError, setNameError] = useState(false);

  //() => router.push("EditEmailCampaign")
  const _handleCampaignNameSubmit = async () => {
    setLoading(true);

    try {
      // input validation
      setNameError(false);

      if (campaignName === "") {
        setNameError(true);
        return;
      }

      // api call
      const res = await userApi.createCampaign(campaignName);

      if (res?.status === 400) {
        alert(res?.msg);
      }

      if (res?.status === 200) {
        router.push("EditEmailCampaign/" + res?.campaignId);
      }

      console.log(res);
    } catch (e) {
      console.error("Error: ", e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="max-w-[85rem] flex justify-center mx-4 mt-8 mb-9 sm:mx-6 lg:mx-8">
        <div className="sm:w-[500px] w-full w-max-md mt-16 sm:mx-0 mx-1 h-fit">
          <p className="text-2xl font-semibold text-[#E5E5E5]">
            Create an email campaign
          </p>
          <p className="mt-1 font-medium text-sm text-[#737373]">
            Maintain subscriber interest by sharing your latest updates,
            highlighting your top-selling products, or announcing upcoming
            events.
          </p>

          <div className="mt-16">
            <Input
              type="text"
              label="Campaign name"
              labelPlacement="outside"
              placeholder="Enter campaign name"
              value={campaignName}
              onChange={(e) => setCampaignName(e.target.value)}
              // description="outside"
            />
            {nameError && (
              <p className="text-sm text-red-600">Please, Enter the name.</p>
            )}
          </div>

          <div className="mt-6 flex flex-row justify-end">
            <Button
              className="w-fit"
              radius="md"
              color="default"
              variant="bordered"
              onClick={() => router.push("/Dashboard/Campaigns")}
            >
              Cancel
            </Button>
            <Button
              className="w-fit ml-3"
              radius="md"
              color="primary"
              isLoading={loading}
              onClick={_handleCampaignNameSubmit}
            >
              <b>Create campaign</b>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
