// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios'

const STATUS_OK = 200

// POST: 'http://localhost:3000/api/episodes'
const getSelectedCharacter = async (characterId: number | string): Promise<ApiRespnse.Character[]> => {
    const url = `https://www.breakingbadapi.com/api/characters/${characterId}`

    const response = await axios({
        url,
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
        },
    })

    if (response.status === STATUS_OK) {
        const firstTenCharacters = response.data as ApiRespnse.Character[]
        return firstTenCharacters
    }

    return []
}

export default getSelectedCharacter
