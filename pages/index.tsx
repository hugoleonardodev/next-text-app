import * as React from 'react'

import Container from '@mui/material/Container'

import AppHeader from '@components/AppHeader'
import AppPagination from '@components/AppPagination'
import AppTable from '@components/AppTable'

const Index: React.FC = () => {
    return (
        <Container maxWidth="lg" disableGutters>
            <AppHeader />
            <AppTable />
            <AppPagination />
        </Container>
    )
}
export default Index
