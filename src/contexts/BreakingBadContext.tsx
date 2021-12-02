import React from 'react'

export interface BreakingBadContextData {
    isLoading: boolean
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
    characters: ApiRespnse.Character[]
    setCharacters: React.Dispatch<React.SetStateAction<ApiRespnse.Character[]>>
    characterEpisodes: ApiRespnse.Episode[]
    setCharactersEpisodes: React.Dispatch<React.SetStateAction<ApiRespnse.Episode[]>>
}

export const BreakingBadContext = React.createContext<BreakingBadContextData>({} as BreakingBadContextData)

export const BreakingBadProvider: React.FC = ({ children }) => {
    const [isLoading, setIsLoading] = React.useState(false)
    const [characters, setCharacters] = React.useState([])
    const [characterEpisodes, setCharactersEpisodes] = React.useState([])

    return (
        <BreakingBadContext.Provider
            // eslint-disable-next-line react-perf/jsx-no-new-object-as-prop
            value={{
                isLoading,
                setIsLoading,
                characters,
                setCharacters,
                characterEpisodes,
                setCharactersEpisodes,
            }}
        >
            {children}
        </BreakingBadContext.Provider>
    )
}

export const useBreakingBad = (): BreakingBadContextData => {
    const context = React.useContext(BreakingBadContext)

    if (!context) {
        throw new Error('useBreakingBad must be used within an BreakingBadContextProvider')
    }

    return context
}
