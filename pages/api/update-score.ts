// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next'
import fs from "fs";
import axios from "axios";
import {course} from "../../lib/config";

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    try {
        axios.get("https://main.d22uf180o8wjsx.amplifyapp.com/round-1.json").then((courseData) => {
            console.log(courseData)
            let data: { [key: string]: { stroke: number, par: number, strokes: number } } = JSON.parse(JSON.stringify(courseData.data))
            const request: { hole: number, score: number } = req.body

            data[request.hole.toString()].strokes = request.score

            fs.writeFileSync("public/round-1.json", JSON.stringify(data))

            res.status(200).json("request")

        }).catch((e) => {
            console.log(e)
            res.status(500).json({e: JSON.stringify(e)})
        })

    } catch (e) {
        res.status(500).json(e)
    }

}
