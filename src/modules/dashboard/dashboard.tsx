import React from 'react';
import MiniDrawer from '../drawer/drawer';
import DashboardTable from './dashboardTable';

export function Dashboard() {
  return (
    <>
      <MiniDrawer />
      <div data-testid="dashboard-title">Welcome to Dashboard</div>
      <DashboardTable />
    </>
  )
}
