import type { NextApiRequest, NextApiResponse } from "next";

type PipeData = {
  x: number;
};
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<PipeData>
) {
  res.status(200).json({ x: 1 });
}
