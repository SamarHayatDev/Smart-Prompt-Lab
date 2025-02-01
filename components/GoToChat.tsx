"use client";
import React from "react";
import { Button } from "./ui/button";
import { MessageSquare } from "lucide-react";

const GoToChat = ({ text }: { text: string }) => {
  const openInChat = (text: string) => {
    const url = `https://chatgpt.com/?prompt=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };
  return (
    <Button
      variant="link"
      size={"icon"}
      className="bg-secondary dark:bg-secondary z-50"
      onClick={() => openInChat(text)}
    >
      <MessageSquare />
    </Button>
  );
};

export default GoToChat;
