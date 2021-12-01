import React, { FC, ReactElement } from 'react'

import { CssBaseline, ThemeProvider } from '@mui/material'
import { render, RenderOptions, RenderResult } from '@testing-library/react'

import theme from '../src/theme'
const AllTheProviders: FC = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    )
}

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>): RenderResult =>
    render(ui, { wrapper: AllTheProviders, ...options })

export * from '@testing-library/react'
export { customRender as render }
