import { auth } from "@/auth";
import React from "react";
import Image from "next/image";
import { redirect } from "next/navigation";
export default async function page() {
  const session = await auth();
  if (!session) {
    redirect("/");
  }

  return (
    <div className="text-white p-4">
      <div>
        <h1>{session?.user?.name}</h1>
        <Image
          src={session?.user?.image as string}
          height={150}
          width={150}
          alt={""}
        />
      </div>
      <div>
        <h1>Created Auctions</h1>
      </div>
      <div>
        <h1>Bids</h1>
      </div>
      <div>
        <h1>Saved</h1>
      </div>
    </div>
  );
}
