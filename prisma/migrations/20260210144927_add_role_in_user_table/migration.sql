/*
  Warnings:

  - You are about to drop the column `created_at` on the `Initiative` table. All the data in the column will be lost.
  - You are about to drop the column `initiative_type` on the `Initiative` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `Initiative` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `userRule` on the `User` table. All the data in the column will be lost.
  - Added the required column `updatedAt` to the `Initiative` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('CONTRIBUTOR');

-- AlterTable
ALTER TABLE "Initiative" DROP COLUMN "created_at",
DROP COLUMN "initiative_type",
DROP COLUMN "updated_at",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "initiativeType" "InitiativeType"[],
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "created_at",
DROP COLUMN "updated_at",
DROP COLUMN "userRule",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "role" "UserRole",
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- DropEnum
DROP TYPE "Role";
