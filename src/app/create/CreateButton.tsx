"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { createAuction } from "../../db/actions";
import { Loader2 } from "lucide-react";
import { redirect } from "next/navigation";

interface CreateButtonProps {
  title: string;
  description: string;
  imageURL: string;
}

export default function CreateButton({
  title,
  description,
  imageURL,
}: CreateButtonProps) {
  const [isLoading, setIsLoading] = React.useState(false);

  async function handleCreate() {
    setIsLoading(true);
    
    try {
      if (title || description || imageURL == "") {
        alert("You have to fill the blanks")
        return
      }
      await createAuction(title, description, imageURL);
      redirect("/");
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Button
      type="submit"
      className="w-full bg-blue-600 hover:bg-blue-700 text-white"
      onClick={handleCreate}
      disabled={isLoading}
    >
      {isLoading ? (
        <>
          <Loader2 className="h-4 w-4 animate-spin" />
          Creating...
        </>
      ) : (
        "Create Auction"
      )}
    </Button>
  );
}
