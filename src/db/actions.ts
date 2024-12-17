"use server";

import { auth } from "@/auth";
import { prisma } from "@/prisma";
import { redirect } from "next/navigation";

export async function deleteAccount() {
  try {
    const session = await auth();

    if (!session?.user?.id) {
      throw new Error("Not authenticated");
    }
    await prisma.user.delete({
      where: {
        id: session.user.id,
      },
    });

    redirect("/");
  } catch (error) {
    console.error("Account deletion error:", error);
  }
}

export async function createAuction(
  title: string,
  description: string,
  imageURL: string
) {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      throw new Error("Not authenticated");
    }
    await prisma.auction.create({
      data: {
        title: title,
        description: description,
        imageURL: imageURL,
        createdById: session.user.id,
      },
    });
  } catch (error) {
    console.error("Error creating auction:", error);
  }
}

export async function deleteAuction() {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      throw new Error("Not authenticated");
    }
  } catch (error) {
    console.error("Error creating auction:", error);
  }
}

export async function getAuctionById(id: string) {
  try {
    const auctionDetails = await prisma.auction.findUnique({
      where: {
        id: id,
      },
      include: {
        createdBy: true,
      },
    });
    return auctionDetails;
  } catch (error) {
    console.log("Error fetching", error);
  }
}

export async function getAuctionsByUserId() {
  try {
    const session = await auth();
    const userAuctions = await prisma.auction.findMany({
      where: {
        createdById: session?.user?.id,
      },
    });
    return userAuctions;
  } catch (error) {
    console.log(error);
  }
}

export async function sendBid(auctionId: string, amount: number) {
  try {
    const session = await auth();
    await prisma.bid.create({
      data: {
        userId: session?.user?.id as string,
        auctionId: auctionId,
        amount: amount,
      },
    });
  } catch (error) {
    console.log(error);
  }
}

export async function findBidByUserId(auctionId: string) {
  try {
    const session = await auth();
    const userBidDetail = await prisma.bid.findFirst({
      where: {
        auctionId: auctionId,
        userId: session?.user?.id,
      },
    });
    return userBidDetail;
  } catch (error) {
    console.log(error);
  }
}

export async function findBidsByUserId() {
  try {
    const session = await auth();
    const userBidDetail = await prisma.bid.findMany({
      where: {
        userId: session?.user?.id,
      },
    });
    return userBidDetail;
  } catch (error) {
    console.log(error);
  }
}

export async function findBidsByAuctionId(auctionId: string) {
  try {
    const bids = await prisma.bid.findMany({
      where: {
        auctionId: auctionId,
      },
      include: {
        user: true,
      },
    });
    return bids;
  } catch (error) {
    console.log(error);
  }
}
