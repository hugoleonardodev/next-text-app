import * as React from 'react'

import AccountCircle from '@mui/icons-material/AccountCircle'
import SearchIcon from '@mui/icons-material/Search'
import { Menu, MenuItem } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'

import { StyledToolbar } from './AppHeader.styles'

const AppHeader: React.FC = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
    const handleMenu = React.useCallback((event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget)
    }, [])

    const handleClose = React.useCallback(() => {
        setAnchorEl(null)
    }, [])
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <StyledToolbar>
                    <Typography variant="h5" noWrap component="div" sx={{ flexGrow: 1, alignSelf: 'flex-end' }}>
                        MUI
                    </Typography>
                    <IconButton size="large" aria-label="search" color="inherit">
                        <SearchIcon />
                    </IconButton>
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
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
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
