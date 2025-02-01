"use client";

import * as React from "react";
import { Weight, Search } from "lucide-react";

import { NavMain } from "@/components/nav-main";

import {
  Sidebar,
  // SidebarContent,
  SidebarHeader,
  // SidebarMenuButton,
  SidebarRail,
} from "@/components/ui/sidebar";
import Link from "next/link";

const data = {
  navMain: [
    {
      title: "Search",
      url: "#",
      icon: Search,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar className="border-r-0" {...props}>
      <SidebarHeader className="pt-4">
        <Link href="/" className="w-fit flex items-center gap-1.5 px-1.5">
          <div className="flex aspect-square size-5 items-center justify-center rounded-md bg-sidebar-primary text-sidebar-primary-foreground">
            <Weight className="size-3" />
          </div>
          <span className="truncate font-semibold">
            {/* {activeTeam.name} */}
            Smart Prompt Lab
          </span>
        </Link>
        <NavMain items={data.navMain} />
      </SidebarHeader>
      {/* <SidebarContent></SidebarContent> */}
      <SidebarRail />
    </Sidebar>
  );
}
