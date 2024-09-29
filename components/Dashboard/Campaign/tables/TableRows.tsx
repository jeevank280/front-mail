"use client";

import { Button, Chip, Tooltip } from "@nextui-org/react";
import DropDown from "./DropDown";
import { Pencil } from "lucide-react";

import timeAgo from "@/utility/util";
import { useRouter } from "next/navigation";

export default function TableRows({ data }: any) {
  const router = useRouter();
  const dateAgo = new Date(data?.createdAt).getTime();
  return (
    <>
      <tr>
        <td className="pl-5 size-px w-40 whitespace-nowrap">
          <div className="ps-6 lg:ps-3 xl:ps-0 pe-6 py-3">
            <div className="flex items-center gap-x-3">
              <div className="grow">
                <span className="block text-sm text-gray-800 dark:text-neutral-400">
                  {data?.name}
                </span>
              </div>
            </div>
          </div>
        </td>
        <td className="size-px whitespace-nowrap">
          <div className="px-6 py-3">
            <span className="block text-sm text-gray-800 dark:text-neutral-400">
              {data?.status === "draft" && (
                <Chip color="default" size="sm" variant="faded">
                  Draft
                </Chip>
              )}
              {data?.status === "scheduled" && (
                <Chip color="warning" size="sm" variant="faded">
                  Scheduled
                </Chip>
              )}
              {data?.status === "sent" && (
                <Chip color="success" size="sm" variant="faded">
                  Sent
                </Chip>
              )}
              {data?.status === "failed" && (
                <Chip color="danger" size="sm" variant="faded">
                  Failed
                </Chip>
              )}
            </span>
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
            <Tooltip content="Edit Campaigns">
              <Button
                isIconOnly
                size="sm"
                variant="bordered"
                className="mr-3"
                onClick={() =>
                  router.push(
                    "/Dashboard/Campaigns/EditEmailCampaign/" + data?._id
                  )
                }
              >
                <Pencil size={16} />
              </Button>
            </Tooltip>

            <DropDown data={data} />
          </div>
        </td>
      </tr>
    </>
  );
}
