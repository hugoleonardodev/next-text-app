import React from 'react'

import getFirstTenCharacters from '@services/getFirstTenCharacters'

export interface BreakingBadContextData {
    isLoading: boolean
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
    pageCounter: number
    setPageCounter: React.Dispatch<React.SetStateAction<number>>
    characters: ApiRespnse.Character[]
    setCharacters: React.Dispatch<React.SetStateAction<ApiRespnse.Character[]>>
    characterEpisodes: ApiRespnse.Episode[]
    setCharactersEpisodes: React.Dispatch<React.SetStateAction<ApiRespnse.Episode[]>>
}

export const BreakingBadContext = React.createContext<BreakingBadContextData>({} as BreakingBadContextData)

export const BreakingBadProvider: React.FC = ({ children }) => {
    const [isLoading, setIsLoading] = React.useState(true)
    const [pageCounter, setPageCounter] = React.useState(0)
    const [characters, setCharacters] = React.useState<ApiRespnse.Character[]>([])
    const [characterEpisodes, setCharactersEpisodes] = React.useState<ApiRespnse.Episode[]>([])

    const handleFirstTenCharacters = React.useCallback(async () => {
        setIsLoading(true)

        const firstTenCharacters = await getFirstTenCharacters()
        setCharacters(firstTenCharacters)

        setPageCounter(1)

        setIsLoading(false)
    }, [])

    React.useEffect(() => {
        // eslint-disable-next-line prettier/prettier
        (async () => await handleFirstTenCharacters())()
    }, [handleFirstTenCharacters])

    const context = React.useMemo(
        () => ({
            isLoading,
            setIsLoading,
            pageCounter,
            setPageCounter,
            characters,
            setCharacters,
            characterEpisodes,
            setCharactersEpisodes,
        }),
        [characterEpisodes, characters, isLoading, pageCounter],
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
