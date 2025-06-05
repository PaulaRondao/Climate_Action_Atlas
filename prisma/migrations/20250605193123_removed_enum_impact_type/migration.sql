/*
  Warnings:

  - Changed the type of `impact_type` on the `Initiative` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Initiative" DROP COLUMN "impact_type",
ADD COLUMN     "impact_type" TEXT NOT NULL;

-- DropEnum
DROP TYPE "InitiativeType";
