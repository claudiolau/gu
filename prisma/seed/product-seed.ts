import { PrismaClient } from "@prisma/client";
import { ProductData } from "../data";

export const ProductSeed = async (prisma: PrismaClient) => {
  await prisma.$transaction([
    prisma.product.createMany({
      data: ProductData,
      skipDuplicates: true,
    }),
  ]);
};
