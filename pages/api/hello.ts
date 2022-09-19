// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import {readdirSync} from "fs";

type Data = {
  name: string
  root: string[]
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  const root = readdirSync(process.cwd())

  res.status(200).json({ name: 'John Doe', root: root })
}
