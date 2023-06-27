import { mockPostList, Post } from "../../app/data/mockPost";
import type { NextApiRequest, NextApiResponse } from 'next'


export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Post[]>
) {
    res.status(200).json(mockPostList)
}

