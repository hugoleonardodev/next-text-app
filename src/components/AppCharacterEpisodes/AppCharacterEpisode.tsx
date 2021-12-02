import React from 'react'

import { Container, Grid } from '@mui/material'

// import AppCharacterCard from '@components/AppCharacterCard'
import AppEpisodesCard from '@components/AppEpisodesCard'

const AppCharacterEpisodes: React.FC = () => {
    return (
        <Container maxWidth="lg">
            <Grid
                item
                xs={'auto'}
                sm
                container
                spacing={4}
                direction="row"
                style={{ justifyContent: 'center', marginTop: '48px' }}
            >
                <Grid xs={'auto'} container item spacing={3}>
                    <AppEpisodesCard />
                </Grid>
                <Grid xs={'auto'} container item spacing={3}>
                    <AppEpisodesCard />
                </Grid>
                <Grid xs={'auto'} container item spacing={3}>
                    <AppEpisodesCard />
                </Grid>
                <Grid xs={'auto'} container item spacing={3}>
                    <AppEpisodesCard />
                </Grid>
                <Grid xs={'auto'} container item spacing={3}>
                    <AppEpisodesCard />
                </Grid>
            </Grid>
        </Container>
    )
}

export default AppCharacterEpisodes
