import axios from 'axios'

const STATUS_OK = 200

// GET: 'https://www.breakingbadapi.com/api/characters?limit=10&offset=page*10'
const getSelectedPage = async (page = 0): Promise<ApiRespnse.Character[]> => {
    const url = `https://www.breakingbadapi.com/api/characters?limit=10&offset=${page * 10}`

    const response = await axios({
        url,
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
        },
    })

    if (response.status === STATUS_OK) {
        const characterPage = response.data as ApiRespnse.Character[]
        return characterPage
    }

    return []
}

export default getSelectedPage
