/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Initiative" DROP CONSTRAINT "Initiative_contributorId_fkey";

-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "UserProfile" (
    "id" SERIAL NOT NULL,
    "authUserId" TEXT NOT NULL,
    "user_name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "loginAttempts" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "UserProfile_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserProfile_authUserId_key" ON "UserProfile"("authUserId");

-- AddForeignKey
ALTER TABLE "Initiative" ADD CONSTRAINT "Initiative_contributorId_fkey" FOREIGN KEY ("contributorId") REFERENCES "UserProfile"("id") ON DELETE CASCADE ON UPDATE CASCADE;
