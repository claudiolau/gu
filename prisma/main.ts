import { prisma } from "./prisma-client";
import { ProductSeed } from "./seed";

export async function main() {
  await ProductSeed(prisma);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
