/*
  Warnings:

  - You are about to drop the column `scope` on the `Account` table. All the data in the column will be lost.
  - You are about to drop the column `ipAddress` on the `Session` table. All the data in the column will be lost.
  - You are about to drop the column `userAgent` on the `Session` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('CONTRIBUTOR');

-- AlterTable
ALTER TABLE "Account" DROP COLUMN "scope";

-- AlterTable
ALTER TABLE "Session" DROP COLUMN "ipAddress",
DROP COLUMN "userAgent",
ADD COLUMN     "userRule" "Role";
