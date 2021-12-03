/**
 * @jest-environment jsdom
 */

import React from 'react'

import Index from '../../pages/index'
import { render } from '../testUtils'

describe('Home page', () => {
    it('should render with a description', () => {
        const { getByText } = render(<Index />, { hydrate: false })
        expect(getByText('Next.js with TypeScript example')).toBeInTheDocument()
    })
})
