import React from 'react'
import { render, screen } from '@testing-library/react'
import App from '../../../App'

describe('App', () => {
  it('Renders Login Page', () => {
    render(<App />)

    expect(screen.getByTestId('login-page-title')).toHaveTextContent(
      'Welcome to Login Page'
    )
  })
})
