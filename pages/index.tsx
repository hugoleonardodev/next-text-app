import * as React from 'react'

import { Grid, Skeleton, Typography } from '@mui/material'
import Container from '@mui/material/Container'

import { useStyles } from '@common/hooks'
import AppHeader from '@components/AppHeader'
import AppPagination from '@components/AppPagination'
import AppTable from '@components/AppTable'
import { useBreakingBad } from '@contexts/BreakingBadContext'

const Index: React.FC = () => {
    const styles = useStyles()
    const { isLoading } = useBreakingBad()
    return (
        <Container maxWidth="lg" disableGutters component="main">
            <AppHeader />
            {isLoading ? (
                <Typography gutterBottom variant="h2" className={styles.homeSectionTitle}>
                    <Skeleton variant="rectangular" width={400} height={118} />
                </Typography>
            ) : (
                <Typography gutterBottom variant="h2" className={styles.homeSectionTitle}>
                    Character&apos;s facts
                </Typography>
            )}
            <section>
                <AppTable />
            </section>
            <AppPagination />
        </Container>
    )
}
export default Index
