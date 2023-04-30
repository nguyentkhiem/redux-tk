import React, { FunctionComponent, useEffect } from 'react';
import './App.css';
import ListRouter from 'routes/index';
import { GlobalDebug } from 'shared/utils/remove-consoles';
import { ENV_PRODUCTION } from 'shared/definitions/config';
import { useAuth } from 'shared/definitions/hooks';
import { useNavigate, useLocation } from 'react-router-dom';
import { PATH_AUTH_LOGIN } from 'routes/paths';
import { PAGES_NOT_AUTH } from 'shared/utils/string';

const App: FunctionComponent = () => {
  const { isLogin } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  if (process.env.REACT_APP_NODE_ENV === ENV_PRODUCTION) {
    GlobalDebug(false, true);
  }

  useEffect(() => {
    if (PAGES_NOT_AUTH.includes(location.pathname))
      return navigate({
        pathname: location.pathname,
        search: location.search.toString(),
      });

    if (!isLogin) return navigate(PATH_AUTH_LOGIN);

    return navigate({
      pathname: location.pathname,
      search: location.search.toString(),
    });
  }, [isLogin]);

  return <ListRouter />;
};

export default React.memo(App);
