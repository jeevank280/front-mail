"use client";

import userApi from "@/app/api/user";
import timeAgo from "@/utility/util";

import { Button, Chip, Tooltip } from "@heroui/react";
import { Trash2Icon } from "lucide-react";
import { useState } from "react";

export default function TableRow({ data, setData, setTotal }: any) {
  const [isLoading, setIsloading] = useState(false);

  const _handleDelete = async () => {
    setIsloading(true);
    try {
      const res = await userApi.deleteSenderEmailById(data?._id);
      console.log(res);
      setData(res?.data);
      setTotal(res?.total);
    } catch (e) {
      console.log("error while deleting contacts: ", e);
    } finally {
      setIsloading(false);
    }
  };

  const dateAgo = new Date(data?.createdAt).getTime();
  return (
    <>
      <tr>
        <td className="pl-5 size-px whitespace-nowrap">
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
        <td className="h-px w-72 whitespace-nowrap">
          <div className="px-6 py-3">
            <span className="block text-sm text-gray-800 dark:text-neutral-400">
              {data?.email}
            </span>
          </div>
        </td>

        <td className="size-px whitespace-nowrap">
          <div className="px-6 py-3">
            {data?.isVerified ? (
              <Chip color="success" size="sm" variant="faded">
                Verified
              </Chip>
            ) : (
              <Chip color="warning" size="sm" variant="faded">
                Un-Verified
              </Chip>
            )}
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
            {!data?.isAdmin && (
              <Tooltip content="Delete">
                <Button
                  isIconOnly
                  size="sm"
                  variant="bordered"
                  className="mr-3"
                  isLoading={isLoading}
                  onClick={_handleDelete}
                >
                  <Trash2Icon size={16} />
                </Button>
              </Tooltip>
            )}
          </div>
        </td>
      </tr>
    </>
  );
}
