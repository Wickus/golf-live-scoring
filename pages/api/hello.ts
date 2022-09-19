// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import {readdirSync} from "fs";
import path from "path";

type Data = {
  name: string
  root: string[]
  page: string[]
  chunks:string[]
  out:string[]
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  const root = readdirSync(path.join(process.cwd()))
  const pages = readdirSync(path.join(process.cwd(),"pages"))
  const chunks =  readdirSync(path.join(process.cwd(), "chunks"))
  const out = readdirSync(path.join(process.cwd(),"../"))

  res.status(200).json({ name: 'John Doe', root: root, page:pages,chunks:chunks, out:out })
}
