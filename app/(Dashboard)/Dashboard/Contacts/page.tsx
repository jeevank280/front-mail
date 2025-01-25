"use client";

import React, { useEffect, useState } from "react";
import {
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Input,
  Tooltip,
  Select,
  SelectItem,
  Chip,
} from "@heroui/react";
import {
  Plus,
  Download,
  ArrowDownFromLine,
  Tags,
  HardDriveDownload,
  CloudDownload,
} from "lucide-react";
import { useRouter } from "next/navigation";
import TableContainer from "@/components/Dashboard/Contact/TableContainer";

import ManageTags from "@/components/Dashboard/Contact/ManageTags";
import ManageAddContactForm from "@/components/Dashboard/Contact/form/ManageAddContactForm";
import Papa from "papaparse";

import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/redux/store";

export default function Contacts() {
  const contacts = useSelector((state: RootState) => state.contacts.contacts);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const router = useRouter();

  return (
    <>
      <div>
        <div className="max-w-[85rem] flex lg:flex-row flex-col justify-between items-center mx-4 mt-8 mb-9 sm:mx-6 lg:mx-8">
          <div className="w-full">
            <p className="text-2xl font-semibold text-[#E5E5E5]">Contacts</p>
            <p className="mt-1 font-medium text-sm text-[#737373]">
              Manage your contacts
            </p>
          </div>
          <div className="w-full mt-5 flex gap-3 lg:justify-end justify-start">
            <ManageTags />

            <Tooltip content="Import Contacts in bulk">
              <Button
                color="default"
                variant="flat"
                size="md"
                isIconOnly
                endContent={<HardDriveDownload size={18} strokeWidth={2} />}
                onClick={() => router.push("Contacts/import")}
              />
            </Tooltip>

            <Tooltip content="Export your Contacts">
              <Button
                color="default"
                variant="flat"
                size="md"
                isIconOnly
                endContent={<CloudDownload size={18} strokeWidth={2} />}
                onClick={() => {
                  const csvData = contacts.map((contact: any) => ({
                    name: contact.name,
                    email: contact.email
                  }));
                  const csv = Papa.unparse(csvData);
                  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
                  const link = document.createElement('a');
                  if (link.download !== undefined) {
                    const url = URL.createObjectURL(blob);
                    link.setAttribute('href', url);
                    const today = new Date().toISOString().split('T')[0];
                    link.setAttribute('download', `contacts_${today}.csv`);
                    link.style.visibility = 'hidden';
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }
                }}
              />
            </Tooltip>

            <Button
              color="primary"
              size="md"
              endContent={<Plus size={20} strokeWidth={3} />}
              onPress={onOpen}
            >
              <b>Add new Contact</b>
            </Button>
          </div>
        </div>
        <TableContainer />
      </div>

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
                Add New Contact
              </ModalHeader>
              <ManageAddContactForm onClose={onClose} />
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
