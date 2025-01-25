"use client";

import { Button, Chip, Tooltip } from "@heroui/react";
import { Pencil, Trash2Icon } from "lucide-react";
import timeAgo from "@/utility/util";

import userApi from "@/app/api/user";
import { useRouter } from "next/navigation";

export default function TableRows({ data, setTotal, setData }: any) {
  const dateAgo = new Date(data?.createdAt).getTime();

  const _handleDeleteDomain = async () => {
    try {
      const res = await userApi.deleteDomainById(data?._id);
      console.log("contact delete: ", res?.total);
      setTotal(res?.total);
      setData(res?.data);
    } catch (e) {
      console.log("error while deleting contacts: ", e);
    }
  };

  const router = useRouter();
  const _handleViewDomain = async () => {
    router.push("/Dashboard/SendersAndDomains/" + data?._id);
  };

  return (
    <>
      <tr>
        <td className="pl-5 size-px whitespace-nowrap">
          <div className="ps-6 lg:ps-3 xl:ps-0 pe-6 py-3">
            <div className="flex items-center gap-x-3">
              <div className="grow">
                <span
                  className="block text-sm text-gray-800 dark:text-neutral-400 cursor-pointer hover:text-blue-700"
                  onClick={_handleViewDomain}
                >
                  {data?.name}
                </span>
              </div>
            </div>
          </div>
        </td>
        <td className="size-px whitespace-nowrap">
          <div className="px-6 py-3">
            {(() => {
              switch (data?.verificationStatus) {
                case "Success":
                  return (
                    <Chip color="success" size="sm" variant="faded">
                      Verified
                    </Chip>
                  );
                case "Pending":
                  return (
                    <Chip color="warning" size="sm" variant="faded">
                      Pending
                    </Chip>
                  );
                case "Failed":
                  return (
                    <Chip color="danger" size="sm" variant="faded">
                      Failed
                    </Chip>
                  );
                default:
                  return (
                    <Chip color="default" size="sm" variant="faded">
                      Not Verified
                    </Chip>
                  );
              }
            })()}
          </div>
        </td>
        <td className="size-px whitespace-nowrap">
          <div className="px-6 py-3">
            <span className="text-sm text-gray-500 dark:text-neutral-500">
              {timeAgo(dateAgo)}
            </span>
          </div>
        </td>
        <td className="size-px whitespace-nowrap">
          <div className="flex flex-row justify-center">
            <Tooltip content="Delete Domain">
              <Button
                isIconOnly
                size="sm"
                variant="bordered"
                onClick={_handleDeleteDomain}
              >
                <Trash2Icon size={16} />
              </Button>
            </Tooltip>
          </div>
        </td>
      </tr>
    </>
  );
}
