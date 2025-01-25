"use client";

import {
  Button,
  Chip,
  Tooltip,
  Modal,
  ModalContent,
  ModalHeader,
  useDisclosure,
} from "@heroui/react";
import DropDown from "./DropDown";
import { Pencil } from "lucide-react";
import timeAgo from "@/utility/util";
import ManageEditContactForm from "./form/ManageEditContactForm";

export default function TableRows({ data }: any) {
  const dateAgo = new Date(data?.createdAt).getTime();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

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
          {data?.tags.length !== 0 && (
            <div className="px-6 py-3 flex items-center">
              {data?.tags.slice(0, 3).map((tag: any, ind: number) => (
                <Chip key={ind} size="sm" className="mr-2">
                  {tag}
                </Chip>
              ))}
              {data?.tags.length > 3 && (
                <Chip size="sm">
                  +{data?.tags.length - 3}
                </Chip>
              )}
            </div>
          )}
        </td>
        <td className="size-px whitespace-nowrap">
          <div className="px-6 py-3">
            {data?.subscribed ? (
              <Chip color="success" size="sm" variant="faded">
                Subscribed
              </Chip>
            ) : (
              <Chip color="warning" size="sm" variant="faded">
                Not Subscribed
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
            <Tooltip content="Edit Contacts">
              <Button
                isIconOnly
                size="sm"
                variant="bordered"
                className="mr-3"
                onPress={onOpen}
              >
                <Pencil size={16} />
              </Button>
            </Tooltip>

            <DropDown data={data} />
          </div>
        </td>
      </tr>

      <Modal
        backdrop="opaque"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="top-center"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Edit Contact
              </ModalHeader>
              <ManageEditContactForm data={data} onClose={onClose} />
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
