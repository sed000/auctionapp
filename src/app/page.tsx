import AuctionCard from "./Card";
import { prisma } from "@/prisma";

export default async function Home() {
  const auctions = await prisma.auction.findMany();
  return (
    <div className="container mx-auto py-8 ">
      <h1 className="text-3xl font-bold mb-6 text-center text-primary">
        Latest Auctions
      </h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {auctions.map((auction) => (
          <AuctionCard
            key={auction.id}
            createdAt={auction.createdAt.toString()}
            id={auction.id}
            title={auction.title}
            description={auction.description}
            imageURL={auction.imageURL}
          />
        ))}
      </div>
    </div>
  );
}
