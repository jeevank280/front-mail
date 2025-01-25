"use client";

import { Button, Chip } from "@heroui/react";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";
import userApi from "@/app/api/user";

import ManageSender from "@/components/Dashboard/Campaign/editCampaignComponents/ManageSender";
import ManageRecipients from "@/components/Dashboard/Campaign/editCampaignComponents/ManageRecipients";
import ManageCampaignSubject from "@/components/Dashboard/Campaign/editCampaignComponents/ManageCampaignSubject";
import ManageDesigns from "@/components/Dashboard/Campaign/editCampaignComponents/ManageDesigns";

import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/redux/store";
import { setCampaign, setSendersList } from "@/redux/slices/campaignsSlice";

export default function EditEmailCampaign({ params }: any) {
  const campaign = useSelector((state: RootState) => state.campaigns.campaign);
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const [isLoading, setIsloading] = useState(false);

  const [page, setpage] = useState(1);
  const [limit, setLimit] = useState(100);

  useEffect(() => {
    const fetchData = async () => {
      setIsloading(true);
      try {
        setIsloading(true);
        const res = await userApi.getCampaignDetailsById(params.id);
        const resSendersList = await userApi.getAllSenderEmailById(page, limit);
        console.log("res edit campaign: ", res);
        dispatch(setCampaign(res?.data));
        dispatch(setSendersList(resSendersList?.data));
      } catch (e) {
        console.error("Error while fetching campaign details", e);
      } finally {
        setIsloading(false);
      }
    };
    fetchData();
  }, []);

  const [isSubmitLoading, setIsSubmitLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    if (campaign?.senderEmail === undefined) return;
    if (campaign?.subject === undefined) return;
    if (campaign?.sendToContactType === undefined) return;
    if (campaign?.editorType === "") return;
    setIsDisabled(false);
  }, [campaign]);

  const _handleSchedule = async () => {
    try {
      setIsSubmitLoading(true);
      const res = await userApi.scheduleCampaign(campaign._id);
      console.log("res", res);
      router.push("/Dashboard/Campaigns");
    } catch (e) {
      console.error("Error while fetching sender data", e);
    } finally {
      setIsSubmitLoading(false);
    }
  };

  if (isLoading) {
    return <div>loading ...</div>;
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
                onClick={() => router.push("/Dashboard/Campaigns")}
              >
                Back
              </Button>
              <Chip size="sm" className="ml-3">
                Draft
              </Chip>
            </div>
            <div>
              <Button
                className="w-fit"
                radius="sm"
                color="default"
                size="sm"
                variant="bordered"
              >
                Preview & Evaluate
              </Button>
              <Button
                className="w-fit ml-3"
                radius="sm"
                size="sm"
                color="primary"
                isLoading={isSubmitLoading}
                isDisabled={isDisabled}
                onClick={_handleSchedule}
              >
                <b>Schedule</b>
              </Button>
            </div>
          </div>

          {/* body */}
          {!isLoading ? (
            <>
              <p className="text-xl font-bold my-5 ">{campaign?.name}</p>
              <div className="rounded-lg bg-[#18181b] p-5 flex flex-col">
                <div className="bg-[#27272a] rounded-lg pb-2">
                  <ManageSender />
                </div>
                <div className="bg-[#27272a] rounded-lg pb-2 mt-2">
                  <ManageRecipients />
                </div>
                <div className="bg-[#27272a] rounded-lg pb-2 mt-2">
                  <ManageCampaignSubject />
                </div>
                <div className="bg-[#27272a] rounded-lg pb-2 mt-2">
                  <ManageDesigns />
                </div>
              </div>
            </>
          ) : (
            <>
              <p>loading</p>
            </>
          )}
        </div>
      </div>
    </>
  );
}
