// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios'

const STATUS_OK = 200

// POST: 'http://localhost:3000/api/episodes'
const postCharacterNameToGetEpisodes = async (characterName: string): Promise<ApiRespnse.Episode[][]> => {
    const url = `http://localhost:3000/api/episodes`

    const response = await axios({
        url,
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        data: {
            characterName,
        },
    })

    if (response.status === STATUS_OK) {
        const characterEpisodes = response.data as ApiRespnse.Episode[][]
        return characterEpisodes
    }

    return []
}

export default postCharacterNameToGetEpisodes
