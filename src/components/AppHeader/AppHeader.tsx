import * as React from 'react'

import AccountCircle from '@mui/icons-material/AccountCircle'
import { PopoverOrigin } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/system'

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    alignItems: 'flex-start',
    paddingTop: '16px',
    paddingBottom: '16px',
    // Override media queries injected by theme.mixins.toolbar
    '@media all': {
        minHeight: '72px',
    },
}))

const AppHeader: React.FC = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

    const handleMenu = React.useCallback((event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget)
    }, [])

    const handleClose = React.useCallback(() => {
        setAnchorEl(null)
    }, [])

    const flexGrow = React.useMemo(() => ({ flexGrow: 1 }), [])
    const flexGrowFlexStart = React.useMemo(() => ({ flexGrow: 1, alignSelf: 'flex-start' }), [])
    const verticalHorizotal = React.useMemo(
        () => ({
            vertical: 'top',
            horizontal: 'right',
        }),
        [],
    ) as PopoverOrigin

    return (
        <Box sx={flexGrow}>
            <AppBar position="static" color="secondary">
                <StyledToolbar>
                    <Typography variant="h5" noWrap component="div" sx={flexGrowFlexStart}>
                        Breaking Bad Facts
                    </Typography>
                    {/* <TextField id="standard-basic" label="Standard" variant="standard" sx={flexGrowFlexEnd} />
                    <IconButton size="large" aria-label="search" color="inherit" sx={flexGrowFlexEnd}>
                        <SearchIcon />
                    </IconButton> */}
                    <div>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleMenu}
                            color="inherit"
                        >
                            <AccountCircle />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={verticalHorizotal}
                            keepMounted
                            transformOrigin={verticalHorizotal}
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleClose}>Profile</MenuItem>
                            <MenuItem onClick={handleClose}>My account</MenuItem>
                        </Menu>
                    </div>
                </StyledToolbar>
            </AppBar>
        </Box>
    )
}

export default AppHeader
