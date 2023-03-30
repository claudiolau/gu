import { PrismaClient } from "@prisma/client";
import { ProductData } from "../data";

export const ProductSeed = async (prisma: PrismaClient) => {
  const loadProductData = ProductData;

  await prisma.$transaction([
    prisma.product.createMany({
      data: loadProductData,
      skipDuplicates: true,
    }),
  ]);
};
