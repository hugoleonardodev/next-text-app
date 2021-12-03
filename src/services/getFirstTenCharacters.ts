import axios from 'axios'

const STATUS_OK = 200

// GET: 'https://www.breakingbadapi.com/api/characters?limit=10&offset=0'
const getFirstTenCharacters = async (): Promise<ApiRespnse.Character[]> => {
    const url = `https://www.breakingbadapi.com/api/characters?limit=10&offset=0`

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

export default getFirstTenCharacters
