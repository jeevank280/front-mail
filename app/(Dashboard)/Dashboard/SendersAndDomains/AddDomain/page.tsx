"use client";

import userApi from "@/app/api/user";
import { Input, Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AddDomain() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const [domainName, setDomainName] = useState("");
  const [domainNameError, setDomainNameError] = useState(false);

  const _handleEmailSubmit = async () => {
    setLoading(true);
    try {
      // input validation
      setDomainNameError(false);

      if (domainName === "") {
        setDomainNameError(true);
        return;
      }

      const payload = {
        domainName,
      };

      // api call
      const res = await userApi.addNewDomainName(payload);

      if (res?.status === 200) {
        router.push("/Dashboard/SendersAndDomains?tabName=domains");
      }
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
          <>
            <p className="text-2xl font-semibold text-[#E5E5E5]">
              Add Your Domain
            </p>
            <p className="mt-1 font-medium text-sm text-[#737373]">
              This email is your sender email by which you can also recieve the
              reply.
            </p>
            <div className="mt-16">
              <Input
                type="text"
                label="Domain Name*"
                labelPlacement="outside"
                placeholder="Enter Domain Name"
                value={domainName}
                required
                onChange={(e) => setDomainName(e.target.value)}
              />
              {domainNameError && (
                <p className="text-sm text-red-600">
                  Please, Enter the domain name.
                </p>
              )}
            </div>

            <div className="mt-6 flex flex-row justify-end">
              <Button
                className="w-fit"
                radius="md"
                size="sm"
                color="default"
                variant="bordered"
                onClick={() => router.push("/Dashboard/SendersAndDomains")}
              >
                Cancel
              </Button>
              <Button
                className="w-fit ml-3"
                radius="md"
                size="sm"
                color="primary"
                isLoading={loading}
                onClick={_handleEmailSubmit}
              >
                <b>Add Email</b>
              </Button>
            </div>
          </>
        </div>
      </div>
    </>
  );
}
