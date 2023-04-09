/*
  Warnings:

  - You are about to drop the column `creationAt` on the `product` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `product` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `product` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[id,title,image]` on the table `product` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `category` to the `product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rating` to the `product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `product` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "product_id_name_image_key";

-- AlterTable
ALTER TABLE "product" DROP COLUMN "creationAt",
DROP COLUMN "name",
DROP COLUMN "updatedAt",
ADD COLUMN     "category" TEXT NOT NULL,
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "price" DECIMAL(65,30) NOT NULL,
ADD COLUMN     "rating" JSONB NOT NULL,
ADD COLUMN     "title" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "product_id_title_image_key" ON "product"("id", "title", "image");
