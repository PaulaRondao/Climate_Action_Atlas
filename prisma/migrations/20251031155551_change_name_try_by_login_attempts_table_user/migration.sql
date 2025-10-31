/*
  Warnings:

  - You are about to drop the column `try` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "try",
ADD COLUMN     "loginAttempts" INTEGER NOT NULL DEFAULT 0;
