import React from "react";
import { Button } from "./ui/button";
import SignIn from "./SigInButton";
import { auth } from "@/auth";
import { SignOut } from "./SignOutButton";
import Link from "next/link";

export const Header = async () => {
  const session = await auth();
  return (
    <div className="bg-black min-w-max text-white">
      <ul className="text-3xl md:text-3xl p-3 gap-3 flex flex-col md:flex-row md:justify-between items-center">
        <Link href={"/"}>
          <h1 className="">AuctionApp</h1>
        </Link>
        <ul className="flex items-center gap-4">
          {session ? (
            <>
              <Link href="/profile">
                <Button className="bg-gray-700" size={"sm"}>
                  View Profile
                </Button>
              </Link>
              <Link href={"/create"}>
                <Button className="bg-gray-700" size={"sm"}>
                  Create Auction
                </Button>
              </Link>
              <SignOut />
            </>
          ) : (
            <SignIn />
          )}
        </ul>
      </ul>
    </div>
  );
};
