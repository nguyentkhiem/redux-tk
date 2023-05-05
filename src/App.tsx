// library
import React, { FunctionComponent } from 'react';
import { ConfigProvider } from 'antd';
// context
import { LoadingProvider } from 'context/loading';
import { BreadcrumbsProvider } from 'context/breadcrumb';
// others
import ListRouter from 'routes/index';
import { theme } from 'shared/theme';

const App: FunctionComponent = () => {
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
