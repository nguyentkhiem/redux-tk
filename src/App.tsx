import React, { FunctionComponent, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import i18n from 'i18n';

import { LoadingProvider } from 'context/loading';
import { BreadcrumbsProvider } from 'context/breadcrumb';

import ListRouter from 'routes/index';
import { PAGES_NOT_AUTH, PATH_AUTH_LOGIN } from 'routes/paths';
import { GlobalDebug } from 'shared/utils/remove-consoles';
import { ENV_PRODUCTION } from 'shared/definitions/config';
import { useAuth } from 'shared/definitions/hooks';
import { theme } from 'shared/theme';

const App: FunctionComponent = () => {
  const { isLogin } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  document.documentElement.lang = i18n.language;

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

  return (
    <ConfigProvider theme={theme}>
      <LoadingProvider>
        <BreadcrumbsProvider>
          <ListRouter />
        </BreadcrumbsProvider>
      </LoadingProvider>
    </ConfigProvider>
  );
};

export default React.memo(App);
