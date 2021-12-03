import React from 'react'

import { Container } from '@mui/material'

import AppCharacterCard from '@components/AppCharacterCard'
import AppCharacterEpisodes from '@components/AppCharacterEpisodes'
import AppHeader from '@components/AppHeader'

const Index: React.FC = () => {
    return (
        <Container maxWidth="lg">
            <AppHeader />
            <section>
                <AppCharacterCard />
            </section>
            <section>
                <AppCharacterEpisodes />
            </section>
        </Container>
    )
}

export default Index
