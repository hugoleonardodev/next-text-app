import React from 'react'

import getFirstTenCharacters from '@services/getFirstTenCharacters'
import getSelectedPage from '@services/getSelectdPage'
import getSelectedCharacter from '@services/getSelectedCharacter'
import postCharacterNameToGetEpisodes from '@services/postCharacterNameToGetEpisodes'

export interface BreakingBadContextData {
    isLoading: boolean
    // setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
    pageCounter: string
    // setPageCounter: React.Dispatch<React.SetStateAction<number>>handlePageChange
    handlePageChange: (page: string) => Promise<void>
    selectedCharacter: ApiRespnse.Character[]
    // setSelectedCharacter: React.Dispatch<React.SetStateAction<ApiRespnse.Character[]>>
    handleSelectCharacter: (characterId: string | number, characterName: string | undefined) => Promise<void>
    characters: ApiRespnse.Character[]
    // setCharacters: React.Dispatch<React.SetStateAction<ApiRespnse.Character[]>>
    characterEpisodes: ApiRespnse.Episode[][]
    // setCharactersEpisodes: React.Dispatch<React.SetStateAction<ApiRespnse.Episode[]>>
}

export const BreakingBadContext = React.createContext<BreakingBadContextData>({} as BreakingBadContextData)

export const BreakingBadProvider: React.FC = ({ children }) => {
    const [isLoading, setIsLoading] = React.useState(true)
    const [pageCounter, setPageCounter] = React.useState('1')
    const [selectedCharacter, setSelectedCharacter] = React.useState<ApiRespnse.Character[]>([])
    const [characters, setCharacters] = React.useState<ApiRespnse.Character[]>([])
    const [characterEpisodes, setCharactersEpisodes] = React.useState<ApiRespnse.Episode[][]>([])

    const handlePageChange = React.useCallback(async (page: string) => {
        setIsLoading(true)

        setPageCounter(page)
        const selectedPage = await getSelectedPage(Number.parseInt(page))
        setCharacters(selectedPage)

        setIsLoading(false)
    }, [])

    const handleSelectCharacter = React.useCallback(async (characterId: string, characterName: string) => {
        setIsLoading(true)

        const selectedCharacter = await getSelectedCharacter(characterId)
        setSelectedCharacter(selectedCharacter)

        const selectedCharEpisodes = await postCharacterNameToGetEpisodes(characterName)
        setCharactersEpisodes(selectedCharEpisodes)

        setIsLoading(false)
    }, [])

    const handleFirstTenCharacters = React.useCallback(async () => {
        setIsLoading(true)

        const firstTenCharacters = await getFirstTenCharacters()
        setCharacters(firstTenCharacters)

        setIsLoading(false)
    }, [])

    React.useEffect(() => {
        // eslint-disable-next-line prettier/prettier
        (async () => await handleFirstTenCharacters())()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const context = React.useMemo(
        () => ({
            isLoading,
            // setIsLoading,
            pageCounter,
            // setPageCounter,
            handlePageChange,
            selectedCharacter,
            // setSelectedCharacter,
            handleSelectCharacter,
            characters,
            // setCharacters,
            characterEpisodes,
            // setCharactersEpisodes,
        }),
        [
            isLoading,
            pageCounter,
            handlePageChange,
            selectedCharacter,
            handleSelectCharacter,
            characters,
            characterEpisodes,
        ]
    )

    return <BreakingBadContext.Provider value={context}>{children}</BreakingBadContext.Provider>
}

export const useBreakingBad = (): BreakingBadContextData => {
    const context = React.useContext(BreakingBadContext)

    if (!context) {
        throw new Error('useBreakingBad must be used within an BreakingBadContextProvider')
    }

    return context
}
