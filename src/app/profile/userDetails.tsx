"use client";
import React from "react";
import Image from "next/image";
import { Session } from "next-auth";

interface SessionProp {
  session: Session;
}

export default function UserDetails({ session }: SessionProp) {
  return (
    <div className="flex items-center">
      {session?.user?.image && (
        <Image
          src={session.user.image}
          height={100}
          width={100}
          alt={session.user.name || "User profile"}
          className="rounded-md border-4 border-primary shadow-lg"
        />
      )}
      <div>
        <h1 className="text-3xl font-bold">{session?.user?.name}</h1>
      </div>
    </div>
  );
}

