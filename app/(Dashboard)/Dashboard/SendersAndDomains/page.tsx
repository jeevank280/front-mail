"use client";

import DomainContainer from "@/components/Dashboard/SenderAndDomain/DomainContainer";
import SenderEmailsContainer from "@/components/Dashboard/SenderAndDomain/SenderEmailsContainer";

import { Button } from "@nextui-org/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

export default function SendersAndDomains() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [activeTab, setActiveTab] = useState("sender_emails");

  useEffect(() => {
    const tabName = searchParams.get("tabName");
    if (tabName === "domains") {
      setActiveTab("domains");
    } else {
      setActiveTab("sender_emails");
    }
  }, [searchParams]);

  return (
    <div>
      <div className="max-w-[85rem] flex flex-row justify-between items-center mx-4 mt-8 mb-5 sm:mx-6 lg:mx-8">
        <div>
          <p className="text-2xl font-semibold text-[#E5E5E5]">
            Sender and Domain Management
          </p>
          <p className="mt-1 font-medium text-sm text-[#737373]">
            Manage your Sender emails and Domains Specify email id's
          </p>
        </div>
        <div>
          {activeTab === "sender_emails" ? (
            <Button
              color="primary"
              onClick={() =>
                router.push("/Dashboard/SendersAndDomains/AddSenderEmail")
              }
              size="md"
            >
              <b>Add Sender Email</b>
            </Button>
          ) : (
            <Button
              color="primary"
              onClick={() =>
                router.push("/Dashboard/SendersAndDomains/AddDomain")
              }
              size="md"
            >
              <b>Add Domain</b>
            </Button>
          )}
        </div>
      </div>
      <div className="max-w-[85rem] mx-4 mb-9 sm:mx-6 lg:mx-8">
        <div className="mb-4">
          <div className="flex">
            <button
              className={`py-2 px-4 ${
                activeTab === "sender_emails"
                  ? "border-b-2 border-blue-500 text-blue-500"
                  : "text-gray-300 hover:text-gray-200"
              }`}
              onClick={() => setActiveTab("sender_emails")}
            >
              Sender Emails
            </button>
            <button
              className={`ml-5 py-2 px-4 ${
                activeTab === "domains"
                  ? "border-b-2 border-blue-500 text-blue-500"
                  : "text-gray-300 hover:text-gray-200"
              }`}
              onClick={() => setActiveTab("domains")}
            >
              Domains
            </button>
          </div>
          <div className="mt-7">
            {activeTab === "sender_emails" && <SenderEmailsContainer />}
            {activeTab === "domains" && <DomainContainer />}
          </div>
        </div>
      </div>
    </div>
  );
}
