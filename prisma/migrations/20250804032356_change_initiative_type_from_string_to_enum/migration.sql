/*
  Warnings:

  - Changed the type of `initiative_type` on the `Initiative` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "InitiativeType" AS ENUM ('ClimateAgricultureEnergy', 'UrbanismAndTechnology', 'SolidarityAndCommunities', 'CultureAndTransmission', 'EducationAndAwareness', 'SocialAndSolidarityEconomy');

-- AlterTable
ALTER TABLE "Initiative" DROP COLUMN "initiative_type",
ADD COLUMN     "initiative_type" "InitiativeType" NOT NULL;
