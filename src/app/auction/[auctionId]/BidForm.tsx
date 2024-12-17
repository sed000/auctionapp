"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useState } from "react";
import BidButton from "./BidButton";

export default function BidForm({ auctionId }: { auctionId: string }) {
  const [amount, setAmount] = useState("");
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Place Your Bid</h2>
      <form className="space-y-4">
        <div>
          <Label htmlFor="value" className="text-md text-gray-700">
            Bid Amount:
          </Label>
          <Input
            onChange={(e) => setAmount(e.target.value)}
            className="w-full rounded-md border-gray-300 shadow-sm"
            name="value"
            type="number"
            placeholder="Enter your bid"
          />
        </div>
        <BidButton auctionId={auctionId} amount={amount} />
      </form>
    </div>
  );
}

