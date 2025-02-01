import React from "react";
import { Button } from "./ui/button";
import { GET_TABS } from "@/graphql/tabs/Query";
import { client } from "@/lib/apolloClient";
import Link from "next/link";

const NavData = async () => {
  const { data } = await client.query({ query: GET_TABS });

  return (
    <nav className="flex flex-wrap items-start justify-start">
      {data.tabs.map((tab: { id: string; name: string }) => (
        <Link key={tab.id} href={`/chat/${tab.name}`} passHref>
          <Button variant="link" size={"sm"}>
            {tab.name}
          </Button>
        </Link>
      ))}
    </nav>
  );
};

export default NavData;
