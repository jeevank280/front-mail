import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 10000,
});

// tasks

const createTask = async () => {
  const res = await axiosInstance.post(
    "tasks/",
    {
      email: ["krishnakantvish.24@gmail.com"],
      subject: "test subject",
      body: "test body",
    },
    {
      headers: {
        "x-auth-token": localStorage.getItem("token"),
      },
    }
  );
  return res;
};

// contacts

const createContacts = async (name: string, email: string, tags: any) => {
  const res = await axiosInstance.post(
    "contact/",
    {
      name: name,
      email: email,
      tags: tags,
    },
    {
      headers: {
        "x-auth-token": localStorage.getItem("token"),
      },
    }
  );
  return res;
};

const getAllContacts = async (page: number, limit: number) => {
  const res = await axiosInstance.get("contact/", {
    params: { page, limit },
    headers: {
      "x-auth-token": localStorage.getItem("token"),
    },
  });
  return res.data;
};

const deleteContactById = async (contactId: number) => {
  const res = await axiosInstance.post(
    "contact/deleteContactById",
    {
      contactId: contactId,
    },
    {
      headers: {
        "x-auth-token": localStorage.getItem("token"),
      },
    }
  );
  return res.data;
};

const updateIsSubscribeContact = async (
  contactId: number,
  subscribedValue: boolean
) => {
  const res = await axiosInstance.post(
    "contact/updateIsSubscribeContact",
    {
      contactId: contactId,
      subscribedValue: subscribedValue,
    },
    {
      headers: {
        "x-auth-token": localStorage.getItem("token"),
      },
    }
  );
  return res.data;
};

const importContacts = async (csvData: any) => {
  const res = await axiosInstance.post(
    "contact/importContactsFromCsv",
    {
      csvData: csvData,
    },
    {
      headers: {
        "x-auth-token": localStorage.getItem("token"),
      },
    }
  );
  return res.data;
};

const editContacts = async (
  contactId: string,
  name: string,
  email: string,
  tags: any
) => {
  const res = await axiosInstance.post(
    "contact/editById",
    {
      contactId: contactId,
      name: name,
      email: email,
      tags: tags,
    },
    {
      headers: {
        "x-auth-token": localStorage.getItem("token"),
      },
    }
  );
  return res;
};

const recipientsInfo = async (payload: any) => {
  const res = await axiosInstance.post(
    "contact/getContactsFilteredList/",
    {
      payload,
    },
    {
      headers: {
        "x-auth-token": localStorage.getItem("token"),
      },
    }
  );
  return res.data;
};

// Campaigns

const createCampaign = async (campaignName: String) => {
  const res = await axiosInstance.post(
    "emailCampaign/",
    {
      campaignName,
    },
    {
      headers: {
        "x-auth-token": localStorage.getItem("token"),
      },
    }
  );
  return res.data;
};

const getCampaignDetailsById = async (campaignId: String) => {
  const res = await axiosInstance.get("emailCampaign/" + campaignId, {
    headers: {
      "x-auth-token": localStorage.getItem("token"),
    },
  });
  return res.data;
};

const getAllCampaigns = async (page: number, limit: number) => {
  const res = await axiosInstance.get("emailCampaign/", {
    params: { page, limit },
    headers: {
      "x-auth-token": localStorage.getItem("token"),
    },
  });
  return res.data;
};

const deleteCampaignById = async (campaignId: number) => {
  const res = await axiosInstance.post(
    "emailCampaign/deleteCampaignById",
    {
      campaignId: campaignId,
    },
    {
      headers: {
        "x-auth-token": localStorage.getItem("token"),
      },
    }
  );
  return res.data;
};

const updateCampaignData = async (campaignId: number, payload: any) => {
  const res = await axiosInstance.put(
    "emailCampaign/updateCampaignById/" + campaignId,
    {
      payload,
    },
    {
      headers: {
        "x-auth-token": localStorage.getItem("token"),
      },
    }
  );
  return res.data;
};

const scheduleCampaign = async (campaignId: number) => {
  const res = await axiosInstance.post(
    "emailCampaign/scheduleCampaign/",
    {
      campaignId,
    },
    {
      headers: {
        "x-auth-token": localStorage.getItem("token"),
      },
    }
  );
  return res.data;
};

// user data
const updateUserData = async (payload: any) => {
  const res = await axiosInstance.put(
    "user/updateUserDataById/",
    {
      payload,
    },
    {
      headers: {
        "x-auth-token": localStorage.getItem("token"),
      },
    }
  );
  return res.data;
};

// sender email
const addNewSenderEmailAddress = async (payload: any) => {
  const res = await axiosInstance.put(
    "user/addSenderEmailAddress",
    {
      payload,
    },
    {
      headers: {
        "x-auth-token": localStorage.getItem("token"),
      },
    }
  );
  return res.data;
};

const verifyOtpSenderEmail = async (payload: any) => {
  const res = await axiosInstance.put(
    "user/verifyOtpSenderEmail",
    {
      payload,
    },
    {
      headers: {
        "x-auth-token": localStorage.getItem("token"),
      },
    }
  );
  return res.data;
};

const getAllSenderEmailById = async (page: number, limit: number) => {
  const res = await axiosInstance.get("user/getAllSenderEmailById", {
    params: { page, limit },
    headers: {
      "x-auth-token": localStorage.getItem("token"),
    },
  });
  return res.data;
};

const deleteSenderEmailById = async (senderId: number) => {
  const res = await axiosInstance.post(
    "user/deleteSenderEmailById",
    {
      senderEmailId: senderId,
    },
    {
      headers: {
        "x-auth-token": localStorage.getItem("token"),
      },
    }
  );
  return res.data;
};

// Domain

const addNewDomainName = async (payload: any) => {
  const res = await axiosInstance.post(
    "domain/addNewDomainName",
    {
      payload,
    },
    {
      headers: {
        "x-auth-token": localStorage.getItem("token"),
      },
    }
  );
  return res.data;
};

const getAllDomains = async (page: number, limit: number) => {
  const res = await axiosInstance.get("domain/", {
    params: { page, limit },
    headers: {
      "x-auth-token": localStorage.getItem("token"),
    },
  });
  return res.data;
};

const getDomainById = async (domainId: number) => {
  const res = await axiosInstance.get("domain/getDomainById", {
    params: { domainId },
    headers: {
      "x-auth-token": localStorage.getItem("token"),
    },
  });
  return res.data;
};

const deleteDomainById = async (domainId: number) => {
  const res = await axiosInstance.post(
    "domain/deleteDomainById",
    {
      domainId,
    },
    {
      headers: {
        "x-auth-token": localStorage.getItem("token"),
      },
    }
  );
  return res.data;
};

const userApi = {
  createTask,
  createContacts,
  getAllContacts,
  deleteContactById,
  importContacts,
  editContacts,
  updateIsSubscribeContact,
  createCampaign,
  getCampaignDetailsById,
  getAllCampaigns,
  deleteCampaignById,
  updateCampaignData,
  scheduleCampaign,
  recipientsInfo,
  updateUserData,
  addNewSenderEmailAddress,
  verifyOtpSenderEmail,
  getAllSenderEmailById,
  deleteSenderEmailById,
  addNewDomainName,
  getAllDomains,
  deleteDomainById,
  getDomainById,
};

export default userApi;
