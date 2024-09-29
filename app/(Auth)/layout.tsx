"use client";

import useAuth from "@/hooks/useAuth";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useAuth();
  return (
    <>
      <div className="w-full flex sm:h-screen max-h-max">
        <div className="hidden lg:block w-[400px]">
          <div className="flex flex-col p-8 h-full justify-between">
            <div className="w-full h-10 bg-[#262626da] rounded-lg"></div>
            <div className="w-full h-40 bg-[#262626da] rounded-lg"></div>
            <div className="w-full h-10 bg-[#262626da] rounded-lg"></div>
          </div>
        </div>
        <div className="flex flex-1 justify-center items-center bg-[#171717]">
          <div className="sm:w-[500px] w-full w-max-md sm:mx-0 mx-10 h-fit rounded-lg">
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
