import { Button } from "@/components/ui/button";
import { sendBid } from "@/db/actions";
import { redirect } from "next/navigation";
import React from "react";

export default function BidButton({
  auctionId,
  amount,
}: {
  auctionId: string;
  amount: string;
}) {
  async function handleBid() {
    await sendBid(auctionId, Number(amount));
    redirect(`/auction/${auctionId}`);
  }
  return (
    <Button
      type="submit"
      onClick={handleBid}
      className="w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold p-3 rounded"
    >
      Place Bid
    </Button>
  );
}
