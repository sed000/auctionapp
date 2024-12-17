import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { CalendarIcon, EyeIcon } from "lucide-react";

interface AuctionCardProps {
  id: string;
  title: string;
  description: string;
  imageURL: string;
  createdAt: string;
}

export default function AuctionCard({
  title,
  description,
  imageURL,
  id,
  createdAt,
}: AuctionCardProps) {
  const date = new Date(createdAt);
  const formattedDate = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
      <CardHeader>
        <CardTitle className="text-xl font-semibold border-b border-primary pb-2">
          {title}
        </CardTitle>
        <CardDescription className="flex items-center text-sm mt-2">
          <CalendarIcon className="w-4 h-4 mr-2" />
          {formattedDate}
        </CardDescription>
      </CardHeader>
      <CardContent className="p-4">
        <div className="relative h-48 w-full mb-4">
          <Image
            src={imageURL}
            layout="fill"
            objectFit="cover"
            alt={title}
            className="rounded-md"
          />
        </div>
        <p className="text-sm">{description}</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Link href={`/auction/${id}`}>
          <Button variant="default">
            <EyeIcon className="w-4 h-4 mr-2" />
            View
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
