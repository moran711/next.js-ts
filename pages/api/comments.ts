// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from "next"
import Comment from '../../models/comment.model'
import connectDB from "../../utils/db"
connectDB();
export default async (req: NextApiRequest, res:NextApiResponse) => {
  if(req.method === 'GET') {
    const comments = await Comment.find();
    res.statusCode = 200;
    res.json(comments);
  } else if (req.method === 'POST') {
    console.log(req.body);
  }
}
