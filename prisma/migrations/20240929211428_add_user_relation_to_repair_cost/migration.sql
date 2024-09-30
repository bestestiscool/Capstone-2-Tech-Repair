/*
  Warnings:

  - You are about to drop the column `userId` on the `Project` table. All the data in the column will be lost.
  - Made the column `description` on table `Project` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `userId` to the `RepairCost` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Project" DROP CONSTRAINT "Project_userId_fkey";

-- AlterTable
ALTER TABLE "Project" DROP COLUMN "userId",
ALTER COLUMN "description" SET NOT NULL;

-- AlterTable
ALTER TABLE "RepairCost" ADD COLUMN     "userId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "RepairCost" ADD CONSTRAINT "RepairCost_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
