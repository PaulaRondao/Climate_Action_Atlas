/*
  Warnings:

  - You are about to drop the column `impact_type` on the `Initiative` table. All the data in the column will be lost.
  - Added the required column `initiative_type` to the `Initiative` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Initiative" DROP COLUMN "impact_type",
ADD COLUMN     "initiative_type" TEXT NOT NULL;
