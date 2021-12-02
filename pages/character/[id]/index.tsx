import { useRouter } from 'next/dist/client/router'
import React from 'react'

import { Container } from '@mui/material'

import AppCharacterCard from '@components/AppCharacterCard'
import AppCharacterEpisodes from '@components/AppCharacterEpisodes'
import AppHeader from '@components/AppHeader'

const Index: React.FC = () => {
    const router = useRouter()
    return (
        <Container maxWidth="lg">
            <AppHeader />
            {JSON.stringify(router.query)}
            <AppCharacterCard />
            <AppCharacterEpisodes />
        </Container>
    )
}

export default Index
