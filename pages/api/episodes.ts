// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios'
import { NextApiRequest, NextApiResponse } from 'next'
import { mapEpisodesBySeason } from 'src/common/functions'

const STATUS_OK = 200

// POST: 'http://localhost:3000/api/episodes'
const getEpisodesByCharacterName = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
    const { characterName } = req.body
    console.log(req.body)

    const response = await axios({
        url: 'https://www.breakingbadapi.com/api/episodes',
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
        },
    })

    if (response.status === STATUS_OK) {
        const allEpisodes = response.data as ApiRespnse.Episode[]
        const characterEpisodes = allEpisodes.filter(episode => episode.characters.includes(characterName))

        return res.status(STATUS_OK).json(mapEpisodesBySeason(characterEpisodes))
    }

    return res.status(response.status).json({ error: response.status, message: response.statusText })
}

export default getEpisodesByCharacterName
