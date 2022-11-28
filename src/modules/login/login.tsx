import React from 'react'
import { Dashboard } from '../dashboard/dashboard'

export function Login() {
  return (
    <div data-testid="login-page-title">
      Welcome to Login Page
      <Dashboard />
    </div>
  )
}
