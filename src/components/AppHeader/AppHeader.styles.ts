import styled from 'styled-components'

import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'

export const AppHeaderContainer = styled(Box)`
    flex-grow: 1;
`

export const StyledToolbar = styled(Toolbar)`
    align-items: flex-start;
    padding: 16px 0;
    @media all {
        min-height: 128px;
    }
`
