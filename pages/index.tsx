import * as React from 'react'

import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'

import Link from '../src/Link'

const Index: React.FC = () => {
    return (
        <div>
            <Container maxWidth="lg">
                <Box>
                    <Typography variant="h4" component="h1" gutterBottom>
                        Next.js with TypeScript example
                    </Typography>
                    <Link href="/about" color="secondary">
                        Go to the about page
                    </Link>
                </Box>
            </Container>
        </div>
    )
}
export default Index
