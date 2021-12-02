import { AppProps } from 'next/app'
import Head from 'next/head'
import * as React from 'react'

import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'

import { BreakingBadProvider } from '@contexts/BreakingBadContext'
import { CacheProvider, EmotionCache } from '@emotion/react'
import createEmotionCache from '@styles/createEmotionCache'
import theme from '@styles/theme'

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

interface MyAppProps extends AppProps {
    emotionCache?: EmotionCache
}

export default function MyApp(props: MyAppProps): JSX.Element {
    const { Component, emotionCache = clientSideEmotionCache, pageProps } = props
    return (
        <CacheProvider value={emotionCache}>
            <Head>
                <title>My page</title>
                <meta name="viewport" content="initial-scale=1, width=device-width" />
            </Head>
            <BreakingBadProvider>
                <ThemeProvider theme={theme}>
                    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                    <CssBaseline />
                    <Component {...pageProps} />
                </ThemeProvider>
            </BreakingBadProvider>
        </CacheProvider>
    )
}
