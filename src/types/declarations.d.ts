declare namespace ApiRespnse {
    export interface Episode {
        episode_id: number
        title: string
        season: string
        air_date: string
        characters: string[]
        episode: string
        series: string
    }
    export interface Character {
        char_id: number
        name: string
        birthday: string
        occupation: string[]
        img: string
        status: string
        nickname: string
        appearance: number[]
        portrayed: string
        category: string
        better_call_saul_appearance: any[]
    }
}
