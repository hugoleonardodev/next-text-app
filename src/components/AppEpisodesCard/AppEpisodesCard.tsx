import * as React from 'react'

import ButtonBase from '@mui/material/ButtonBase'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'

import { useBreakingBad } from '@contexts/BreakingBadContext'

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
})

const AppEpisodesCard: React.FC = () => {
    const { selectedCharacter } = useBreakingBad()
    return (
        <Paper sx={{ p: 2, margin: 'auto', maxWidth: 500, flexGrow: 1 }}>
            <Grid container spacing={2}>
                {/* <Grid item>
                    <ButtonBase sx={{ width: 128, height: 128 }}>
                        <Img alt="complex" src={selectedCharacter[0].img} />
                    </ButtonBase>
                </Grid> */}
                <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                            <Typography gutterBottom variant="subtitle1" component="div">
                                <strong>Character:</strong> {selectedCharacter[0].name}
                            </Typography>
                            <Typography variant="subtitle1" gutterBottom>
                                <strong>Quote:</strong> {selectedCharacter[0].status}
                            </Typography>
                            <Typography variant="subtitle2" color="text.secondary">
                                <strong>Portrayed:</strong> {selectedCharacter[0].portrayed}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography sx={{ cursor: 'pointer' }} variant="body2">
                                <strong>Seasons:</strong>
                                {selectedCharacter[0].appearance.map((season, index) => (
                                    <span key={`season-${season}`}>
                                        {season}
                                        {index < selectedCharacter[0].appearance.length - 1 && ','}
                                    </span>
                                ))}
                            </Typography>
                        </Grid>
                    </Grid>
                    {/* <Grid item>
                        <Typography variant="subtitle1" component="div">
                            <strong>Status:</strong> {selectedCharacter[0].status}
                        </Typography>
                    </Grid> */}
                </Grid>
            </Grid>
        </Paper>
    )
}

export default AppEpisodesCard
