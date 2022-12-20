import React, { useState } from 'react';
import MiniDrawer from '../drawer/drawer';
import DashboardTable from './dashboard-table';
import { Link } from 'react-router-dom'
import AddTaskLog from './addTaskLog';

export function Dashboard() {

  // const [openAddWindow, setOpenAddWindow] = React.useState(false);

  return (
    <>
    <MiniDrawer />
    <div data-testid="dashboard-title" className="dashboard-welcome">Welcome to Dashboard</div>
    </>
  )
}
