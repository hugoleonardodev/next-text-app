import type { AppProps } from 'next/app'
import Head from 'next/head'
import * as React from 'react'
import { ThemeProvider } from 'styled-components'

import CssBaseline from '@mui/material/CssBaseline'
// import { ThemeProvider } from '@mui/material/styles'

import { BreakingBadProvider } from '@contexts/BreakingBadContext'

import theme from '../src/theme'

const MyApp = (props: AppProps): JSX.Element => {
    const { Component, pageProps } = props
    return (
        <>
            <Head>
                <title>Next App</title>
                <link href="/favicon.ico" rel="icon" />
                <meta content="minimum-scale=1, initial-scale=1, width=device-width" name="viewport" />
            </Head>
            <BreakingBadProvider>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <Component {...pageProps} />
                </ThemeProvider>
            </BreakingBadProvider>
        </>
    )
}

export default MyApp
