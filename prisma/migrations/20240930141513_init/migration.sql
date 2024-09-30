/*
  Warnings:

  - You are about to drop the `Project` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `RepairCost` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "RepairCost" DROP CONSTRAINT "RepairCost_userId_fkey";

-- DropTable
DROP TABLE "Project";

-- DropTable
DROP TABLE "RepairCost";

-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "projects" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "codeLink" TEXT,
    "liveDemoLink" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "projects_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "repair_costs" (
    "id" SERIAL NOT NULL,
    "deviceType" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "repairType" TEXT NOT NULL,
    "cost" DOUBLE PRECISION NOT NULL,
    "estimatedTime" TEXT NOT NULL,

    CONSTRAINT "repair_costs_pkey" PRIMARY KEY ("id")
);
