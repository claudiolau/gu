// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { prisma } from "@/lib/prisma";
import { Capitalize } from "@/utils/capitalize";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    // generate-dynamic-query-on-demand
    const queryParam = req.query.pid as string;

    const data = await prisma.product.findMany({
      where: {
        OR: [
          { category: queryParam },
          {
            category: {
              endsWith: queryParam,
            },
          },
        ],
      },
    });

    res.status(200).send(data);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: error });
  }
}
