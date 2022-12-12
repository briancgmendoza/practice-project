import React from 'react';
import MiniDrawer from '../drawer/drawer';
import Form from './form';

export function Dashboard() {
  return (
    <>
      <MiniDrawer />
      <div data-testid="dashboard-title">Welcome to Dashboard</div>
      <Form />
    </>
  )
}
