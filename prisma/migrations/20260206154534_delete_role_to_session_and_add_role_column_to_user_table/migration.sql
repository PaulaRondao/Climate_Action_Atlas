/*
  Warnings:

  - You are about to drop the column `userRule` on the `Session` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Session" DROP COLUMN "userRule";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "userRule" "Role";
