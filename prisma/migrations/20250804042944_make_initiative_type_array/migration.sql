/*
  Warnings:

  - Changed the column `initiative_type` on the `Initiative` table from a scalar field to a list field. If there are non-null values in that column, this step will fail.

*/
-- Drop the old column
ALTER TABLE "Initiative" DROP COLUMN "initiative_type";

-- Re-add it as an array
ALTER TABLE "Initiative"
ADD COLUMN "initiative_type" "InitiativeType"[] DEFAULT '{}';
