import * as React from 'react'
import { useStyles } from 'src/common/hooks'

import { Tooltip } from '@mui/material'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'

// import { useBreakingBad } from '@contexts/BreakingBadContext'

type TAppEpisodesCardProps = {
    seasonEpisodes: ApiRespnse.Episode[]
}
const AppEpisodesCard: React.FC<TAppEpisodesCardProps> = ({ seasonEpisodes }) => {
    const styles = useStyles()
    return (
        <Paper sx={{ p: 2, margin: 'auto', maxWidth: 220, minWidth: 180, flexGrow: 1 }}>
            {/* <Grid container spacing={2}>
                <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}> */}
            <Grid item xs>
                <Typography gutterBottom variant="subtitle1" component="div">
                    <strong>Episodes:</strong>
                </Typography>

                {seasonEpisodes.map(episode => (
                    <Grid
                        item
                        xs
                        container
                        direction="row"
                        spacing={2}
                        key={`season-${episode.season}-epidose=${episode.title}`}
                    >
                        <Grid item xs>
                            <Tooltip
                                title={`${episode.season}. ${episode.title}. Air date: ${episode.air_date}`}
                                placement="top"
                                className={styles.showingDataHover}
                            >
                                <Typography variant="subtitle1" gutterBottom>
                                    <strong>{episode.season}:</strong> <strong>{episode.title}</strong>
                                </Typography>
                            </Tooltip>
                        </Grid>
                        {/* <Grid item xs>
                                        <Typography variant="subtitle2" gutterBottom color="text.secondary">
                                            Air date: {episode.air_date}
                                        </Typography>
                                    </Grid> */}
                    </Grid>
                ))}
            </Grid>
            {/* </Grid>
                </Grid>
            </Grid> */}
        </Paper>
    )
}

export default AppEpisodesCard
