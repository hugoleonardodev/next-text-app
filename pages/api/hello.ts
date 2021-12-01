// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from 'next'
const STATUS_OK = 200
const handler = (req: NextApiRequest, res: NextApiResponse) => {
    res.status(STATUS_OK).json({ name: 'John Doe' })
}

export default handler
