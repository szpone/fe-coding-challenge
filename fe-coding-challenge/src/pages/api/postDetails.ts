import type { NextApiRequest, NextApiResponse } from 'next'
import { Post, mockPostList } from '../../app/data/mockPost';


export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Post | undefined>
) {
    const postId = Number(req.query.id);
    const postDetails = mockPostList.find(el => el.id === postId);

    res.status(200).json(postDetails)
}
