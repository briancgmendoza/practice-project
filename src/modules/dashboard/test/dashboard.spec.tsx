import React from 'react'
import { render, screen } from '@testing-library/react'
import { Dashboard } from '../dashboard'

describe('Dashboard', () => {
  it('Renders Dashboard Page', () => {
    render(<Dashboard />)

    expect(screen.getByTestId('dashboard-title')).toHaveTextContent(
      'Welcome to Dashboard'
    )
  })
})
