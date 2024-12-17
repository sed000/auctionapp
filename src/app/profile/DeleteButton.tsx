"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { deleteAccount } from "../../db/actions";
import { useRouter } from "next/navigation";

export default function DeleteButton() {
  const router = useRouter();
  async function handleDelete() {
    if (confirm("Are you sure you want to delete your account? This action cannot be undone.")) {
      try {
        await deleteAccount();
        router.push("/");
      } catch (error) {
        console.error(error);
      }
    }
  }

  return (
    <Button
      className="bg-red-600 hover:bg-red-700 text-white font-bold p-3 rounded-full"
      onClick={handleDelete}
      variant="destructive"
    >
      Delete Account
    </Button>
  );
}

