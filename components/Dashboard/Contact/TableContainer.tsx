"use client";

import userApi from "@/app/api/user";
import { useEffect, useState } from "react";
import TableRows from "./TableRows";
import Loader from "@/components/Loader";
import { Button } from "@nextui-org/button";

import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/redux/store";
import { setContacts } from "@/redux/slices/contactsSlice";

import { setNoOfContacts } from "@/redux/slices/userSlice";

export default function TableContainer() {
  const contacts = useSelector((state: RootState) => state.contacts.contacts);

  const dispatch = useDispatch<AppDispatch>();
  const [isLoading, setIsloading] = useState(false);
  const [page, setpage] = useState(1);
  const [limit, setLimit] = useState(10);

  const [total, setTotal] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsloading(true);
        const res = await userApi.getAllContacts(page, limit);
        dispatch(setContacts(res?.data));
        dispatch(setNoOfContacts(res?.total));
        setTotal(res?.total);
        setIsloading(false);
      } catch (e) {
        console.error("Error while fetching contacts", e);
      }
    };
    fetchData();
  }, [page, limit]);

  const handlePageChange = (newPage: any) => {
    setpage(newPage);
  };

  return (
    <>
      {/* Table Section */}
      <div className="max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto">
        {/* Card */}
        <div className="flex flex-col">
          <div className="-m-1.5 overflow-x-auto">
            <div className="p-1.5 min-w-full inline-block align-middle">
              <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden dark:bg-neutral-800 dark:border-neutral-700">
                {!isLoading ? (
                  <>
                    {contacts.length !== 0 ? (
                      <>
                        {/* Header */}
                        <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-b border-gray-200 dark:border-neutral-700">
                          <div>
                            <h2 className="text-xl font-semibold text-gray-800 dark:text-neutral-200">
                              Filters
                            </h2>
                          </div>
                        </div>
                        {/* End Header */}
                        {/* Table */}
                        <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
                          <thead className="bg-gray-50 dark:bg-neutral-800">
                            <tr>
                              <th
                                scope="col"
                                className="ps-6 lg:ps-3 xl:ps-0 pe-6 py-3 text-start"
                              >
                                <div className="flex items-center gap-x-2">
                                  <span className="pl-5 text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                                    Name
                                  </span>
                                </div>
                              </th>

                              <th scope="col" className="px-6 py-3 text-start">
                                <div className="flex items-center gap-x-2">
                                  <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                                    Email
                                  </span>
                                </div>
                              </th>

                              <th scope="col" className="px-6 py-3 text-start">
                                <div className="flex items-center gap-x-2">
                                  <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                                    Tags
                                  </span>
                                </div>
                              </th>

                              <th scope="col" className="px-6 py-3 text-start">
                                <div className="flex items-center gap-x-2">
                                  <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                                    Status
                                  </span>
                                </div>
                              </th>

                              <th scope="col" className="px-6 py-3 text-start">
                                <div className="flex items-center gap-x-2">
                                  <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                                    Created
                                  </span>
                                </div>
                              </th>

                              <th
                                scope="col"
                                className="px-6 py-3 text-end"
                              ></th>
                            </tr>
                          </thead>

                          <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                            {contacts.map((item: any, index: number) => {
                              return (
                                <>
                                  <TableRows key={index} data={item} />
                                </>
                              );
                            })}
                          </tbody>
                        </table>
                        {/* End Table */}

                        {/* Footer */}
                        <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-t border-gray-200 dark:border-neutral-700">
                          <div>
                            <p className="text-sm text-gray-600 dark:text-neutral-400">
                              <span className="font-semibold text-gray-800 dark:text-neutral-200">
                                {!isLoading ? (
                                  <>{contacts.length}</>
                                ) : (
                                  <>
                                    <p>loading</p>
                                  </>
                                )}
                              </span>{" "}
                              results
                            </p>
                          </div>

                          <div>
                            <div className="inline-flex gap-x-2">
                              <Button
                                onClick={() => handlePageChange(page - 1)}
                                disabled={page === 1}
                                className="py-1.5 px-2 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
                              >
                                <svg
                                  className="flex-shrink-0 size-4"
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
                                  <path d="m15 18-6-6 6-6" />
                                </svg>
                                Prev
                              </Button>

                              <Button
                                onClick={() => handlePageChange(page + 1)}
                                disabled={page * limit >= total}
                                className="py-1.5 px-2 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
                              >
                                Next
                                <svg
                                  className="flex-shrink-0 size-4"
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
                                  <path d="m9 18 6-6-6-6" />
                                </svg>
                              </Button>
                            </div>
                          </div>
                        </div>
                        {/* End Footer */}
                      </>
                    ) : (
                      <div>No data found</div>
                    )}
                  </>
                ) : (
                  <div>
                    <Loader />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        {/* End Card */}
      </div>
      {/* End Table Section */}
    </>
  );
}
