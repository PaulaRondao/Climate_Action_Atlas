/*
  Warnings:

  - The primary key for the `Initiative` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `initiativeId` on the `Initiative` table. All the data in the column will be lost.
  - You are about to drop the `Address` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[initiativeLocationId]` on the table `Initiative` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `initiativeLocationId` to the `Initiative` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Address" DROP CONSTRAINT "Address_initiativeId_fkey";

-- AlterTable
ALTER TABLE "Initiative" DROP CONSTRAINT "Initiative_pkey",
DROP COLUMN "initiativeId",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD COLUMN     "initiativeLocationId" INTEGER NOT NULL,
ADD CONSTRAINT "Initiative_pkey" PRIMARY KEY ("id");

-- DropTable
DROP TABLE "Address";

-- CreateTable
CREATE TABLE "InitiativeLocation" (
    "id" SERIAL NOT NULL,
    "street" TEXT NOT NULL,
    "postcode" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "latitude" DOUBLE PRECISION NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "InitiativeLocation_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Initiative_initiativeLocationId_key" ON "Initiative"("initiativeLocationId");

-- AddForeignKey
ALTER TABLE "Initiative" ADD CONSTRAINT "Initiative_initiativeLocationId_fkey" FOREIGN KEY ("initiativeLocationId") REFERENCES "InitiativeLocation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
