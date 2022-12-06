import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate // * Use Navigate when you want to redirect the user.
} from 'react-router-dom'
import routes from './routes/routes'
import { Login } from './modules/login/login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path={routes[0].path} element={routes[0].component} />
        <Route path={routes[1].path} element={routes[1].component} />
      </Routes>
    </Router>
  );
}

export default App;
