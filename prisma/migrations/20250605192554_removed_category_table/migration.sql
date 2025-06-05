/*
  Warnings:

  - You are about to drop the column `categoryId` on the `Initiative` table. All the data in the column will be lost.
  - You are about to drop the `Category` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Category" DROP CONSTRAINT "Category_parentId_fkey";

-- DropForeignKey
ALTER TABLE "Initiative" DROP CONSTRAINT "Initiative_categoryId_fkey";

-- AlterTable
ALTER TABLE "Initiative" DROP COLUMN "categoryId";

-- DropTable
DROP TABLE "Category";
