// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { Product } from "@prisma/client";
import { prisma } from "@prisma/index";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const data = (await prisma.product.findMany({})) satisfies Product[];
    res.status(200).send(data);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: error });
  }
}
