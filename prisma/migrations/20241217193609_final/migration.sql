/*
  Warnings:

  - You are about to drop the column `favoritedById` on the `Auction` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Auction" DROP CONSTRAINT "Auction_favoritedById_fkey";

-- AlterTable
ALTER TABLE "Auction" DROP COLUMN "favoritedById";
