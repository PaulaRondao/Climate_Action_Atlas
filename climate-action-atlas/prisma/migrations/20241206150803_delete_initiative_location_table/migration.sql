/*
  Warnings:

  - You are about to drop the `InitiativeLocation` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Initiative" DROP CONSTRAINT "Initiative_initiativeId_fkey";

-- DropTable
DROP TABLE "InitiativeLocation";
