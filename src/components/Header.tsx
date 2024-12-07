import React from "react";
import { Button } from "./ui/button";
import SignIn from "./SigInButton";
import { auth } from "@/auth";
import { SignOut } from "./SignOutButton";
import Link from "next/link";

export const Header = async () => {
  const session = await auth();
  return (
    <div className="bg-gray-300 min-w-max ">
      <ul className="text-3xl md:text-3xl p-3 gap-3 flex flex-col md:flex-row md:justify-between items-center">
        <Link href={"/"}>
          <h1 className="">AuctionApp</h1>
        </Link>
        <ul className="flex items-center gap-4">
          {session ? (
            <>
              <SignOut />
              <Link href="/profile">
                <Button size={"sm"}>View Profile</Button>
              </Link>
              <Button size={"sm"}>Create Auction</Button>
            </>
          ) : (
            <SignIn />
          )}
        </ul>
      </ul>
    </div>
  );
};
