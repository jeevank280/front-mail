"use client";

import React from "react";

import {
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  useDisclosure,
  Tooltip,
} from "@nextui-org/react";
import { Tags } from "lucide-react";

import ManageTagsForm from "./form/ManageTagsForm";

export default function ManageTags() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Tooltip content="Manage your tags">
        <Button
          color="default"
          variant="flat"
          size="md"
          onPress={onOpen}
          endContent={<Tags size={20} strokeWidth={2} />}
        >
          <b>Tags</b>
        </Button>
      </Tooltip>

      {/* Models */}
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
                Manage Tags
              </ModalHeader>
              <ManageTagsForm onClose={onClose} />
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
