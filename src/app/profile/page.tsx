"use server";
import { auth } from "@/auth";
import React from "react";
import { redirect } from "next/navigation";
import UserDetails from "./userDetails";
import DeleteButton from "./DeleteButton";
import UserBids from "./UserBids";
import UserAuctions from "./UserAuctions";

export default async function Page() {
  const session = await auth();
  if (!session) {
    redirect("/");
  }
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          <div className="p-6 sm:p-8">
            <UserDetails session={session} />
            <div className="mt-8 grid gap-8 grid-cols-1">
              <div className="">
                <UserAuctions />
                <UserBids />
              </div>
              <div className="flex items-end justify-end">
                <DeleteButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

