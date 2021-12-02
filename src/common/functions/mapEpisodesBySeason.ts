const mapEpisodesBySeason = (characterEpisodes: ApiRespnse.Episode[]): ApiRespnse.Episode[][] => {
    const seasonOne = [] as ApiRespnse.Episode[]
    const seasonTwo = [] as ApiRespnse.Episode[]
    const seasonThree = [] as ApiRespnse.Episode[]
    const seasonFour = [] as ApiRespnse.Episode[]
    const seasonFive = [] as ApiRespnse.Episode[]

    for (let index = 0; index < characterEpisodes.length; index++) {
        if (characterEpisodes[index].season === '1') {
            seasonOne.push(characterEpisodes[index])
            continue
        }
        if (characterEpisodes[index].season === '2') {
            seasonTwo.push(characterEpisodes[index])
            continue
        }
        if (characterEpisodes[index].season === '3') {
            seasonThree.push(characterEpisodes[index])
            continue
        }
        if (characterEpisodes[index].season === '4') {
            seasonFour.push(characterEpisodes[index])
            continue
        }
        if (characterEpisodes[index].season === '5') {
            seasonFive.push(characterEpisodes[index])
            continue
        }
    }

    return [seasonOne, seasonTwo, seasonThree, seasonFour, seasonFive]
}

export default mapEpisodesBySeason
