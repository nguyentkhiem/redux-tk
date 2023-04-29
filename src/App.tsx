import React, { FunctionComponent, useEffect } from 'react';
import './App.css';
import ListRouter from 'routes/index';
import { GlobalDebug } from 'shared/utils/remove-consoles';
import { ENV_PRODUCTION } from 'shared/definitions/config';

const App: FunctionComponent = () => {
  if (process.env.REACT_APP_NODE_ENV === ENV_PRODUCTION) {
    GlobalDebug(false, true);
  }

  return <ListRouter />;
};

export default React.memo(App);
