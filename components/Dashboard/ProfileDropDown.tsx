import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Avatar,
} from "@heroui/react";

import { RootState, AppDispatch } from "@/redux/store";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "@/redux/slices/userSlice";
import { useRouter } from "next/navigation";
import useAuth from "@/hooks/useAuth";
import { LogOut } from "lucide-react";

export default function App() {
  const user = useSelector((state: RootState) => state.user.user);
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  const _handleLogout = () => {
    dispatch(logoutUser());
    router.push("/SignIn");
  };

  useAuth();

  return (
    <div className="flex items-center gap-4">
      <Dropdown placement="bottom-end" backdrop="blur">
        <DropdownTrigger>
          <Avatar
            isBordered
            as="button"
            className="transition-transform"
            src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
          />
        </DropdownTrigger>
        <DropdownMenu aria-label="Profile Actions" variant="flat">
          <DropdownItem key="profile" className="h-14 gap-2">
            <p className="font-semibold">Signed in as</p>
            <p className="font-semibold">{user?.data?.email}</p>
          </DropdownItem>
          <DropdownItem
            key="settings"
            onClick={() => router.push("/Dashboard/SendersAndDomains")}
          >
            Senders & Domains
          </DropdownItem>
          <DropdownItem key="logout" color="danger" onClick={_handleLogout}>
            Log Out
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}
