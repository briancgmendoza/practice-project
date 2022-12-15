import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate // * Use Navigate when you want to redirect the user.
} from 'react-router-dom'
import routes from './routes/routes'
import { Login } from './modules/login/login';
import AddTaskLog from './modules/dashboard/addTaskLog';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path={routes[0].path} element={routes[0].component} />
        <Route path={routes[1].path} element={routes[1].component} />
        <Route path={routes[2].path} element={routes[2].component} />
        {/* test route */}
        <Route path='/dashboard/addTaskLog' element={<AddTaskLog />} />
      </Routes>
    </Router>
  );
}

export default App;
