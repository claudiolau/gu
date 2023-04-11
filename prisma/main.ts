import { prisma } from "./config";
import { ProductSeed } from "./seed";

async function main() {
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
