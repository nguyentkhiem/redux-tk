import React from 'react';
import { Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { UserProvider } from 'context/user';
import { POSTS_API } from 'shared/definitions/api';
import { ContextTest } from './features/contextTest';
import { Login } from 'features/auth/login';
import { Admin } from 'components/layout/admin';
import { NotFound } from 'components/common';

function App() {
  return (
    <div className="App">
      {/* <UserProvider>
          <ContextTest />
        </UserProvider> */}
      <Routes>
        <Route path="/login" Component={Login}></Route>
        <Route path="/admin" Component={Admin}></Route>
        <Route path="*" Component={NotFound}></Route>
      </Routes>
    </div>
  );
}

export default App;
