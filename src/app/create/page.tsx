"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import React, { useState } from "react";
import CreateButton from "./CreateButton";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function Page() {
  const session = await auth();
  if (!session) {
    redirect("/");
  }
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageURL, setImageURL] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen  bg-gray-100 text-white p-8">
      <Card className="max-w-md mx-auto bg-black border-gray-700">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center text-white">
            Create Auction
          </CardTitle>
          <CardDescription className="text-center text-gray-400">
            Fill in the details to create a new auction
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="">
            <div className="">
              <Label htmlFor="title" className="text-white">
                Title
              </Label>
              <Input
                type="text"
                id="title"
                placeholder="Enter auction title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
              />
            </div>
            <div className="">
              <Label htmlFor="imageURL" className="text-white">
                Image URL
              </Label>
              <Input
                type="text"
                id="imageURL"
                placeholder="Enter image URL"
                value={imageURL}
                onChange={(e) => setImageURL(e.target.value)}
                className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
              />
            </div>
            <div className="">
              <Label htmlFor="description" className="text-white">
                Description
              </Label>
              <Textarea
                id="description"
                placeholder="Enter auction description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 min-h-[100px]"
              />
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-center">
          <CreateButton
            title={title}
            description={description}
            imageURL={imageURL}
          />
        </CardFooter>
      </Card>
    </div>
  );
}
