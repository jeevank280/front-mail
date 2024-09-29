"use client";

import React from "react";
import {
Dropdown,
DropdownTrigger,
DropdownMenu,
DropdownItem,
Button,
} from "@nextui-org/react";

import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../redux/store';
import { increment, decrement } from '@/redux/slices/counterSlice';

export default function Home() {
const count = useSelector((state: RootState) => state.counter.value);
const dispatch = useDispatch<AppDispatch>();

return (
<>
<Dropdown>
<DropdownTrigger>
<Button variant="bordered">Open Menu</Button>
</DropdownTrigger>
<DropdownMenu aria-label="Static Actions">
<DropdownItem key="new">New file</DropdownItem>
<DropdownItem key="copy">Copy link</DropdownItem>
<DropdownItem key="edit">Edit file</DropdownItem>
<DropdownItem key="delete" className="text-danger" color="danger">
Delete file
</DropdownItem>
</DropdownMenu>
</Dropdown>

<div>
<h1>{count}</h1>
<button onClick={() => dispatch(increment())}>Increment</button>
<button onClick={() => dispatch(decrement())}>Decrement</button>

  </div></>
  );
}

{
name: "Dashboard",
url: "/Dashboard",
icon: <House />,
},
{
name: "Campaigns",
url: "/Dashboard/Campaigns",
icon: <Newspaper />,
},
{
name: "Contacts",
url: "/Dashboard/Contacts",
icon: <SquareUser />,
},
{
name: "Domains",
url: "/Dashboard/Domains",
icon: <Cable />,
},
{
name: "Survey",
url: "/Dashboard/Survey",
icon: <Cctv />,
},
{
name: "Subscription",
url: "/Dashboard/Subscription",
icon: <Podcast />,
},
{
name: "Setting",
url: "/Dashboard/Setting",
icon: <Cog />,
},
];
