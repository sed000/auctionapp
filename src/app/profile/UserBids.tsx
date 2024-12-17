import { findBidsByUserId, getAuctionById } from "@/db/actions";
import Link from "next/link";
import React from "react";

export default async function UserBids() {
  const userBids = await findBidsByUserId();
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">My Bids</h2>
      <div className="p-3">
        {userBids?.map(async (bid) => {
          const auction = await getAuctionById(bid.auctionId);
          return (
            <Link href={`/auction/${auction?.id}`} key={bid.id} className="">
              <div className="bg-gray-50 p-4 rounded-lg flex flex-col gap-3 shadow-md">
                <h3 className="font-medium group-hover:text-primary transition-colors duration-300">
                  {auction?.title}
                </h3>
                <p className="">Your bid: ${bid.amount}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
