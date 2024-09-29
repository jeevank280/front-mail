"use client";

import userApi from "@/app/api/user";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Button, Chip } from "@nextui-org/react";
import { ArrowLeft, RefreshCcw, Trash2Icon } from "lucide-react";
import { Code } from "@nextui-org/react";

export default function ViewDomain({ params }: any) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await userApi.getDomainById(params.id);
        console.log("domain res,", res);
        if (res?.status === 401) {
          router.push("/Dashboard/SendersAndDomains");
        }
        if (res?.status === 200) {
          setData(res?.domain);
        }
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const _handleDelete = async () => {
    try {
      await userApi.deleteDomainById(data?._id);
      router.push("/Dashboard/SendersAndDomains");
    } catch (e) {
      console.log("error while deleting contacts: ", e);
    }
  };

  const _handleRefresh = async () => {};

  if (loading) {
    return <div>Loading ...</div>;
  }

  return (
    <>
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
                  router.push("/Dashboard/SendersAndDomains?tabName=domains")
                }
              >
                Back
              </Button>
              <p className="ml-4 font-semibold text-lg">{data?.name}</p>
            </div>
            <div>
              <Button
                className="w-fit ml-3"
                radius="sm"
                size="sm"
                color="default"
                isIconOnly
                onClick={_handleRefresh}
              >
                <RefreshCcw size={16} />
              </Button>
              <Button
                className="w-fit ml-3"
                radius="sm"
                size="sm"
                color="danger"
                onClick={_handleDelete}
                isIconOnly
              >
                <Trash2Icon size={16} />
              </Button>
            </div>
          </div>
          <div className="mt-5">
            <div className="flex">
              <Chip size="sm">{data?.verificationStatus}</Chip>
            </div>

            {data?.dnsRecords.map((item: any, key: any) => {
              return (
                <div key={key}>
                  <div className="flex flex-row mt-10">
                    <div className="mr-5 flex flex-row">
                      <p className="mr-2">Type</p>
                      <Code color="default">{item.type}</Code>
                    </div>
                    <div>
                      <div className="mb-2 flex flex-row">
                        <p className="mr-2">Name</p>
                        <Code color="default">{item.name}</Code>
                      </div>
                      <div className="flex flex-row">
                        <p className="mr-2">Value</p>
                        <Code color="default">{item.value}</Code>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
