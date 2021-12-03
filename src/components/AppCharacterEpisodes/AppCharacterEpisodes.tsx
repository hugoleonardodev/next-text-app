import React from 'react'

import { Container, Grid, Skeleton } from '@mui/material'

// import AppCharacterCard from '@components/AppCharacterCard'
import AppEpisodesCard from '@components/AppEpisodesCard'
import { useBreakingBad } from '@contexts/BreakingBadContext'

const randomLengthArrayA = [...Array.from({ length: Math.floor(Math.random() * 12) + 4 }).keys()]
const randomLengthArrayB = [...Array.from({ length: Math.floor(Math.random() * 12) + 4 }).keys()]
const randomLengthArrayC = [...Array.from({ length: Math.floor(Math.random() * 12) + 4 }).keys()]
const randomLengthArrayD = [...Array.from({ length: Math.floor(Math.random() * 12) + 4 }).keys()]
const randomLengthArrayE = [...Array.from({ length: Math.floor(Math.random() * 12) + 4 }).keys()]

const AppCharacterEpisodes: React.FC = () => {
    const { isLoading, characterEpisodes } = useBreakingBad()
    return (
        <Container maxWidth="lg">
            <Grid
                item
                xs={'auto'}
                sm
                container
                spacing={4}
                direction="row"
                style={{ justifyContent: 'center', marginTop: '48px', alignItems: 'flex-start' }}
            >
                <Grid xs={'auto'} container item spacing={3}>
                    {isLoading ? (
                        randomLengthArrayA.map(el => (
                            <Grid xs={'auto'} direction="column" item key={`episode-skeleton-${el}`}>
                                <Skeleton animation="wave" variant="rectangular" width={100} height={28} />
                            </Grid>
                        ))
                    ) : (
                        <AppEpisodesCard seasonEpisodes={characterEpisodes[0]} />
                    )}
                </Grid>
                <Grid xs={'auto'} container item spacing={3}>
                    {isLoading ? (
                        randomLengthArrayB.map(el => (
                            <Grid xs={'auto'} direction="column" item key={`episode-skeleton-${el}`}>
                                <Skeleton animation="wave" variant="rectangular" width={100} height={28} />
                            </Grid>
                        ))
                    ) : (
                        <AppEpisodesCard seasonEpisodes={characterEpisodes[1]} />
                    )}
                </Grid>
                <Grid xs={'auto'} container item spacing={3}>
                    {isLoading ? (
                        randomLengthArrayC.map(el => (
                            <Grid xs={'auto'} direction="column" item key={`episode-skeleton-${el}`}>
                                <Skeleton animation="wave" variant="rectangular" width={100} height={28} />
                            </Grid>
                        ))
                    ) : (
                        <AppEpisodesCard seasonEpisodes={characterEpisodes[2]} />
                    )}
                </Grid>
                <Grid xs={'auto'} container item spacing={3}>
                    {isLoading ? (
                        randomLengthArrayD.map(el => (
                            <Grid xs={'auto'} direction="column" item key={`episode-skeleton-${el}`}>
                                <Skeleton animation="wave" variant="rectangular" width={100} height={28} />
                            </Grid>
                        ))
                    ) : (
                        <AppEpisodesCard seasonEpisodes={characterEpisodes[3]} />
                    )}
                </Grid>
                <Grid xs={'auto'} container item spacing={3}>
                    {isLoading ? (
                        randomLengthArrayE.map(el => (
                            <Grid xs={'auto'} direction="column" item key={`episode-skeleton-${el}`}>
                                <Skeleton animation="wave" variant="rectangular" width={100} height={28} />
                            </Grid>
                        ))
                    ) : (
                        <AppEpisodesCard seasonEpisodes={characterEpisodes[4]} />
                    )}
                </Grid>
            </Grid>
        </Container>
    )
}

export default AppCharacterEpisodes
