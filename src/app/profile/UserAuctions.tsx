import { getAuctionsByUserId } from "@/db/actions";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function UserAuctions() {
  const userAuctions = await getAuctionsByUserId();
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">My Auctions</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {userAuctions?.map((auction) => (
          <Link href={`/auction/${auction?.id}`} key={auction.id} className="">
            <div className="bg-gray-50 rounded-lg overflow-hidden group-hover:shadow-lg">
              <Image
                src={auction.imageURL as string}
                height={200}
                width={300}
                alt={auction.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="font-medium text-gray-900">{auction.title}</h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
