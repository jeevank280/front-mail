"use client";

import AllCampaignTable from "@/components/Dashboard/Campaign/tables/AllCampaignTable";
import React from "react";
import { Button } from "@nextui-org/react";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Campaigns() {
  const router = useRouter();
  return (
    <>
      <div>
        <div className="max-w-[85rem] flex flex-row justify-between items-center mx-4 mt-8 mb-9 sm:mx-6 lg:mx-8">
          <div>
            <p className="text-2xl font-semibold text-[#E5E5E5]">Campaigns</p>
            <p className="mt-1 font-medium text-sm text-[#737373]">
              Manage your campaigns
            </p>
          </div>
          <div>
            <Button
              color="primary"
              onClick={() => router.push("Campaigns/CreateEmailCampaign")}
              size="md"
              endContent={<Plus size={20} strokeWidth={3} />}
            >
              <b>Create a Campaign</b>
            </Button>
          </div>
        </div>
        <AllCampaignTable />
      </div>
    </>
  );
}
