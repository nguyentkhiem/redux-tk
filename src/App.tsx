import React, { FunctionComponent } from 'react';
import { Router } from 'react-router-dom';
import './App.css';
import ListRouter from 'routes/index';

const App: FunctionComponent = () => {
  return <ListRouter />;
};

export default React.memo(App);
