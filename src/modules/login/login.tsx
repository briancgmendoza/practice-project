import React from 'react'
import { Dashboard } from '../dashboard/dashboard'
import  '../../styles/_login.scss'

export function Login() {
  return (
    <div className="banner" data-testid="login-page-title">
      Welcome to Login Page
      <Dashboard />
    </div>
  )
}
