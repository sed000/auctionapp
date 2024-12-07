import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="text-black p-4  grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card className="w-[400]">
          <CardHeader>
            <CardTitle className="border-black border-b-2">Baseball card</CardTitle>
            <CardDescription>Date:</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center">
            <Image
              src={"https://placehold.jp/150x150.png"}
              height={150}
              width={150}
              alt={""}
            />
            <p>Extremely rare baseball card signed with ultimate love</p>
          </CardContent>
          <CardFooter className="flex gap-3">
            <Button>View</Button>
            <Button>Save</Button>
          </CardFooter>
        </Card>
        <Card className="min-w-25 w-fit max-w-25">
          <CardHeader>
            <CardTitle className="border-black border-b-2">Baseball card</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center">
            <Image
              src={"https://placehold.jp/150x150.png"}
              height={150}
              width={150}
              alt={""}
            />
            <p>Extremely rare baseball card signed with ultimate love</p>
          </CardContent>
          <CardFooter className="flex gap-3">
            <Button>View</Button>
            <Button>Save</Button>
          </CardFooter>
        </Card>
        <Card className="min-w-25 w-fit max-w-25">
          <CardHeader>
            <CardTitle className="border-black border-b-2">Baseball card</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center">
            <Image
              src={"https://placehold.jp/150x150.png"}
              height={150}
              width={150}
              alt={""}
            />
            <p>Extremely rare baseball card signed with ultimate love</p>
          </CardContent>
          <CardFooter className="flex gap-3">
            <Button>View</Button>
            <Button>Save</Button>
          </CardFooter>
        </Card>
        <Card className="min-w-25 w-fit max-w-25">
          <CardHeader>
            <CardTitle className="border-black border-b-2">Baseball card</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center">
            <Image
              src={"https://placehold.jp/150x150.png"}
              height={150}
              width={150}
              alt={""}
            />
            <p>Extremely rare baseball card signed with ultimate love</p>
          </CardContent>
          <CardFooter className="flex gap-3">
            <Button>View</Button>
            <Button>Save</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
