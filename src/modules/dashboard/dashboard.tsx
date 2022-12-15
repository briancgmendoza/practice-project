import React from 'react';
import MiniDrawer from '../drawer/drawer';
import DashboardTable from './dashboard-table';
import { Link } from 'react-router-dom'

export function Dashboard() {
  return (
    <>
      <MiniDrawer />
      <div data-testid="dashboard-title">Welcome to Dashboard</div>
      <Link to="/dashboard/addTaskLog">AddTaskLog</Link>
    </>
  )
}
