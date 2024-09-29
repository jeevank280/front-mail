"use client";

import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Sheet, CircleX } from "lucide-react";
import React, { useState, ChangeEvent, useEffect } from "react";
import Papa from "papaparse";
import { Chip } from "@nextui-org/react";
import userApi from "@/app/api/user";

/* *********************************************************

Remaining tasks:

When user can imported the contacts 
we need to style the inserted document and 
duplicate contacts and other flow.s

********************************************************* */

interface CsvRow {
  name: string;
  email: string;
  subscribed?: boolean;
}

interface Warning {
  row: number;
  message: string;
}

export default function ImportContact() {
  const router = useRouter();

  const [loading, setLoading] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const [files, setFiles] = useState<File | null | undefined>(null);
  const [csvData, setCsvData] = useState<CsvRow[]>([]);
  const [errors, setErrors] = useState<Papa.ParseError[]>([]);
  const [warnings, setWarnings] = useState<Warning[]>([]);

  const [isResult, setIsResult] = useState<boolean>(false);
  const [result, setResult] = useState({
    noOfInsertedDocuments: 0,
    duplicateContacts: [],
  });

  const _handleImportedContacts = async () => {
    setLoading(true);

    try {
      const res = await userApi.importContacts(csvData);

      console.log("import res: ", res);

      if (res.success === true) {
        setFiles(null);
        setCsvData([]);
        setErrors([]);
        setWarnings([]);
        setIsResult(true);
        setResult({
          noOfInsertedDocuments: res?.inserted.length,
          duplicateContacts: res?.duplicates,
        });
      }

      console.log("resp", res);
    } catch (e) {
      console.error("Error: ", e);
    } finally {
      setLoading(false);
    }
  };

  const handleFileUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setFiles(file);
    if (file) {
      Papa.parse<Record<string, string>>(file, {
        download: true,
        header: true,
        skipEmptyLines: true,
        complete: (results) => {
          const { data, errors: parseErrors } = results;
          const validatedData: CsvRow[] = [];
          const newWarnings: Warning[] = [];

          data.forEach((row, index) => {
            if (!row.hasOwnProperty("name") || !row.hasOwnProperty("email")) {
              newWarnings.push({
                row: index + 1,
                message:
                  "Line " +
                  (index + 1) +
                  ' : Missing "name" or "email" column.',
              });
              return;
            }

            if (row.name.trim() === "" || row.email.trim() === "") {
              newWarnings.push({
                row: index + 1,
                message:
                  "Line " + (index + 1) + ' : Empty "name" or "email" value.',
              });
              return;
            }

            const newRow: CsvRow = {
              name: row.name.trim(),
              email: row.email.trim(),
            };

            if (row.hasOwnProperty("issubscribe")) {
              if (row.issubscribe !== "TRUE" && row.issubscribe !== "FALSE") {
                newWarnings.push({
                  row: index + 1,
                  message:
                    "Line " +
                    (index + 1) +
                    ' : Invalid value for "issubscribe" column. Should be "true" or "false". Else value should be "true',
                });
              } else {
                newRow.subscribed = row.issubscribe === "TRUE";
              }
            }

            validatedData.push(newRow);
          });

          setCsvData(validatedData);
          setErrors(parseErrors);
          setWarnings(newWarnings);
        },
      });
    }
  };

  useEffect(() => {
    console.log("csvData: ", csvData);
    console.log("errors: ", errors);
    console.log("warnings: ", warnings);
    if (csvData.length > 0 && errors.length === 0) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [csvData, errors, warnings]);

  const _handleRemoveFile = () => {
    setFiles(null);
    setCsvData([]);
    setErrors([]);
    setWarnings([]);
  };

  return (
    <>
      <div className="max-w-[85rem] flex justify-center mx-4 mt-8 mb-9 sm:mx-6 lg:mx-8">
        <div className="sm:w-[500px] w-full w-max-md mt-3 sm:mx-0 mx-1 h-fit">
          <p className="text-2xl flex flex-row font-semibold text-[#E5E5E5]">
            <Button
              startContent={<ArrowLeft size={"16px"} />}
              color="default"
              size="sm"
              variant="bordered"
              onClick={() => router.push("/Dashboard/Contacts")}
            >
              Back
            </Button>
            <div className="ml-3 flex-1 text-lg pt-0.5">
              Import New Contacts
            </div>
            {isVisible && (
              <Button
                size="sm"
                isLoading={loading}
                variant="solid"
                color="primary"
                onClick={_handleImportedContacts}
              >
                Add {csvData.length} Contacts
              </Button>
            )}
          </p>
          {/* body */}
          <div>
            {isResult && (
              <>
                Inserted: {result.noOfInsertedDocuments} and duplicateContacts:{" "}
                {result.duplicateContacts.length}
              </>
            )}

            {!isResult && (
              <>
                {csvData.length === 0 && (
                  <div className="space-y-2 mt-10">
                    <label
                      htmlFor="af-submit-app-upload-images"
                      className="group p-4 sm:p-7 block cursor-pointer text-center border-2 border-dashed border-gray-200 rounded-lg focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 dark:border-neutral-700"
                    >
                      <input
                        id="af-submit-app-upload-images"
                        name="af-submit-app-upload-images"
                        type="file"
                        className="sr-only"
                        required
                        accept=".csv"
                        onChange={handleFileUpload}
                      />
                      <svg
                        className="size-10 mx-auto text-gray-400 dark:text-neutral-600"
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M7.646 5.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 6.707V10.5a.5.5 0 0 1-1 0V6.707L6.354 7.854a.5.5 0 1 1-.708-.708l2-2z"
                        />
                        <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z" />
                      </svg>
                      <span className="mt-2 block text-sm text-gray-800 dark:text-neutral-200">
                        Browse your device or{" "}
                        <span className="group-hover:text-blue-700 text-blue-600">
                          drag 'n drop'
                        </span>
                      </span>
                      <span className="mt-1 block text-xs text-gray-500 dark:text-neutral-500">
                        Maximum file size is 5 MB
                      </span>
                    </label>
                  </div>
                )}
              </>
            )}

            {files && (
              <>
                {/* file name and remove action */}
                <div className="mt-10 flex flex-row justify-between dark:bg-neutral-800 items-center px-2 rounded-md">
                  <Sheet />
                  <p className="flex-1 pl-3">{files?.name}</p>
                  <Button
                    isIconOnly
                    variant="light"
                    onClick={_handleRemoveFile}
                  >
                    <CircleX />
                  </Button>
                </div>
              </>
            )}

            {/* warning */}
            {warnings.length > 0 && (
              <>
                {warnings.map((warning, index) => {
                  return (
                    <div
                      className="bg-yellow-50 mt-3 border border-yellow-200 text-sm text-yellow-800 rounded-lg p-4 dark:bg-yellow-800/10 dark:border-yellow-900 dark:text-yellow-500"
                      role="alert"
                      key={index}
                      aria-labelledby="hs-with-description-label"
                    >
                      <div className="flex">
                        <div className="shrink-0">
                          <svg
                            className="shrink-0 size-4 mt-0.5"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path>
                            <path d="M12 9v4"></path>
                            <path d="M12 17h.01"></path>
                          </svg>
                        </div>
                        <div className="ms-4">
                          <h3
                            id="hs-with-description-label"
                            className="text-sm font-semibold"
                          >
                            {warning.message}
                          </h3>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </>
            )}
            {/* errors */}
            {errors.length > 0 && (
              <>
                {errors.map((error, index) => {
                  return (
                    <div
                      className="bg-red-50 border mt-3 border-red-200 text-sm text-red-800 rounded-lg p-4 dark:bg-red-800/10 dark:border-red-900 dark:text-red-500"
                      role="alert"
                      key={index}
                      aria-labelledby="hs-with-list-label"
                    >
                      <div className="flex">
                        <div className="shrink-0">
                          <svg
                            className="shrink-0 size-4 mt-0.5"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <circle cx="12" cy="12" r="10"></circle>
                            <path d="m15 9-6 6"></path>
                            <path d="m9 9 6 6"></path>
                          </svg>
                        </div>
                        <div className="ms-4">
                          <h3
                            id="hs-with-list-label"
                            className="text-sm font-semibold"
                          >
                            {error.message}
                          </h3>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </>
            )}
            {/* Imported data */}
            {csvData.length > 0 && (
              <>
                {/* table rows */}
                <table className="min-w-full mt-5 divide-y divide-gray-200 border border-neutral-900 rounded-lg dark:divide-neutral-700">
                  <thead className="bg-gray-50 dark:bg-neutral-800">
                    <tr>
                      <th className="text-left pl-5">S. No.</th>
                      <th className="text-left pl-5">Name</th>
                      <th className="text-left pl-5">Email</th>
                      <th className="text-left pl-5">IsSubscribed</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-neutral-900">
                    {csvData.map((row, rowIndex) => (
                      <tr key={rowIndex}>
                        <td className="pl-3 size-px whitespace-nowrap">
                          <div className="ps-6 lg:ps-3 xl:ps-0 pe-6 py-3">
                            <div className="flex items-center gap-x-3">
                              <div className="grow">
                                <span className="block text-sm text-gray-800 dark:text-neutral-400">
                                  {rowIndex + 1}
                                </span>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="pl-2 size-px whitespace-nowrap">
                          <div className="ps-6 lg:ps-3 xl:ps-0 pe-6 py-3">
                            <div className="flex items-center gap-x-3">
                              <div className="grow">
                                <span className="block text-sm text-gray-800 dark:text-neutral-400">
                                  {row.name}
                                </span>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="pl-2 size-px whitespace-nowrap">
                          <div className="ps-6 lg:ps-3 xl:ps-0 pe-6 py-3">
                            <div className="flex items-center gap-x-3">
                              <div className="grow">
                                <span className="block text-sm text-gray-800 dark:text-neutral-400">
                                  {row.email}
                                </span>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="pl-2 size-px whitespace-nowrap">
                          <div className="ps-6 lg:ps-3 xl:ps-0 pe-6 py-3">
                            <div className="flex items-center gap-x-3">
                              <div className="grow">
                                <span className="block text-sm text-gray-800 dark:text-neutral-400">
                                  {row.subscribed !== undefined ? (
                                    <>
                                      {row.subscribed === true ? (
                                        <Chip
                                          color="success"
                                          size="sm"
                                          variant="faded"
                                        >
                                          Subscribed
                                        </Chip>
                                      ) : (
                                        <Chip
                                          color="warning"
                                          size="sm"
                                          variant="faded"
                                        >
                                          Not Subscribed
                                        </Chip>
                                      )}
                                    </>
                                  ) : (
                                    <Chip
                                      color="success"
                                      size="sm"
                                      variant="faded"
                                    >
                                      Subscribed
                                    </Chip>
                                  )}
                                </span>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
