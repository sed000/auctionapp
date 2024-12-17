"use server";
import { Button } from "@/components/ui/button";
import {
  findBidByUserId,
  findBidsByAuctionId,
  getAuctionById,
} from "@/db/actions";
import Image from "next/image";
import React from "react";
import BidForm from "./BidForm";
import { auth } from "@/auth";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { redirect } from "next/navigation";

interface AuctionPageProps {
  params: {
    auctionId: string;
  };
}

export default async function AuctionPage({ params }: AuctionPageProps) {
  const session = await auth();
  if (!session) {
    redirect("/");
  }
  const auctionId = params.auctionId;
  const auctionDetails = await getAuctionById(auctionId);
  const userBidDetails = await findBidByUserId(auctionId);
  const bids = await findBidsByAuctionId(auctionId);
  const isOwner = auctionDetails?.createdById == session?.user?.id;

  return (
    <div className="min-h-screen bg-gray-100 p-5">
      <div className="max-w-3xl mx-auto">
        <Card className="">
          <CardHeader className="bg-white shadow">
            <CardTitle className="text-2xl font-bold text-gray-900">
              {auctionDetails?.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-2/3">
                <Image
                  src={auctionDetails?.imageURL as string}
                  height={400}
                  width={400}
                  alt={auctionDetails?.title || "Auction item"}
                  className="rounded-lg object-cover w-full h-64 md:h-auto"
                />
                <p className="mt-4 text-gray-600">
                  {auctionDetails?.description}
                </p>
              </div>
              <div className="md:w-1/3">
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <h2 className="text-lg font-semibold text-gray-900 mb-2">
                    Auction Details
                  </h2>
                  <p className="text-sm text-gray-600">
                    Created by: {auctionDetails?.createdBy.name}
                  </p>
                  <p className="text-sm text-gray-600">
                    Date: {auctionDetails?.createdAt.toLocaleDateString()}
                  </p>
                </div>
                {!isOwner && !userBidDetails && (
                  <BidForm auctionId={auctionId} />
                )}
                {!isOwner && userBidDetails && (
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h2 className="text-lg font-semibold text-blue-900 mb-2">
                      Your Bid
                    </h2>
                    <p className="text-blue-700">
                      You have bid ${userBidDetails.amount}
                    </p>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h2 className="text-lg font-semibold text-green-900 mb-2">
                        Bids Received
                      </h2>
                      <p className="text-green-700">
                        List of people who have bid:
                      </p>
                      {bids?.map((bid) => (
                        <div
                          key={bid.id}
                          className="flex gap-3 p-3 items-center border rounded-md shadow-md m-3"
                        >
                          <a
                            target="_blank"
                            href={`https://github.com/${bid.user.name}`}
                          >
                            <Button>{bid.user.name}</Button>
                          </a>

                          <h2>{bid.amount}</h2>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {isOwner && (
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h2 className="text-lg font-semibold text-green-900 mb-2">
                      Bids Received
                    </h2>
                    <p className="text-green-700">
                      List of people who have bid:
                    </p>
                    {bids?.map((bid) => (
                      <div
                        key={bid.id}
                        className="flex gap-3 p-3 items-center border rounded-md shadow-md m-3"
                      >
                        <a
                          target="_blank"
                          href={`https://github.com/${bid.user.name}`}
                        >
                          <Button>{bid.user.name}</Button>
                        </a>

                        <h2>{bid.amount}</h2>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
