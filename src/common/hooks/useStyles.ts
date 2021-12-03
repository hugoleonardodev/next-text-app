// import { makeStyles, Theme } from '@material-ui/core';

import { Theme } from '@mui/material'
import { makeStyles } from '@mui/styles'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const useStyles = makeStyles((theme: Theme) => ({
    showingDataHover: {
        '&:hover': {
            backgroundColor: theme.palette.secondary.main,
        },
    },
    homeSectionTitle: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '0.35em',
    },
    sectionMarginTop: {
        marginTop: '2em',
    },
    footerStyles: {
        backgroundColor: theme.palette.primary.main,
    },
    paginationStyles: {
        paddingTop: '0.5rem',
        color: theme.palette.primary.contrastText,
    },
}))

export default useStyles
