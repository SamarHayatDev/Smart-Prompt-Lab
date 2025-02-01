"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { Clipboard, Check } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const CopyPrompt = ({ text }: { text: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      toast({ title: "Copied to clipboard!" });

      setTimeout(() => setCopied(false), 3000);
    } catch (error) {
      toast({ title: "Failed to copy", description: "Please try again" });
    }
  };

  return (
    <Button
      variant="link"
      size="icon"
      className="bg-secondary dark:bg-secondary z-50"
      onClick={handleCopy}
    >
      {copied ? <Check /> : <Clipboard />}
    </Button>
  );
};

export default CopyPrompt;
