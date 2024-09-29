"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function EditEmailCampaigns() {
  const router = useRouter();

  useEffect(() => {
    router.push("/Dashboard/Campaigns/CreateEmailCampaign");
  }, []);

  return (
    <>
      <div>.</div>
    </>
  );
}
