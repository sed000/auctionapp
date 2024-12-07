"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function page() {
  const [bid, setBid] = useState<number | undefined>();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.valueAsNumber;
    if (!isNaN(value) && value >= 0) {
      setBid(value);
    } else {
      setBid(undefined);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    {
      // TODO
    }
  };

  return (
    <div className="flex flex-row gap-5 items-center justify-center p-4">
      <div className="text-white">
        <h1>Title</h1>
        <p>Date</p>
        <Image
          src={"https://placehold.jp/300x300.png"}
          height={300}
          width={300}
          alt={""}
        />

        <p>Description</p>
        <Button>Save</Button>
      </div>
      <div className="text-white flex flex-col gap-2 max-w-30">
        {bid ? (
          <>
          <h1>Your bid of {bid} has been sent</h1>
          <Link href="/profile" className="font-light">Go to your profile</Link>
          </>
        ) : (
          <>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <Input
                onChange={handleChange}
                className="text-black"
                type="number"
                placeholder="Place bid"
                name="bid"
              />
              <Button type="submit">Send bid</Button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
