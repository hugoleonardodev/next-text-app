// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios'

const STATUS_OK = 200

// POST: 'http://localhost:3000/api/episodes'
const getSelectedCharacter = async (characterId: number | string): Promise<ApiRespnse.Character[]> => {
    console.log(characterId)
    const url = `https://www.breakingbadapi.com/api/characters/${characterId}`

    const response = await axios({
        url,
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
        },
    })

    console.log(response)
    if (response.status === STATUS_OK) {
        const firstTenCharacters = response.data as ApiRespnse.Character[]
        return firstTenCharacters
    }

    return []
    // const mockedResult = await axios({
    //     url: './mocks/characters',
    //     method: 'GET',
    // })

    // if (mockedResult.status === STATUS_OK) {
    //     const data = mockedResult.data as ApiRespnse.Character[]

    //     const result = data.find(character => character.char_id === characterId)
    //     return result || []
    // }

    // return []
}

export default getSelectedCharacter
