import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { NotFound } from 'components/common';
import { routesConfig } from './router';
import LoadingPageSpin from 'components/LoadingPageSpin';

// Lazy load component async
const LazyLoad = (component: string) => React.lazy(() => import(`features/${component}`));

const parseConfig = () => {
  const routes = [];

  for (const config of routesConfig) {
    // @ts-ignore
    for (const route of config.routes) {
      routes.push({ ...route, layout: config.layout });
    }
  }

  return routes;
};

const ListRouter: React.FunctionComponent = () => (
  <Routes>
    {parseConfig().map((routes: RoutesObject, index: number) => {
      const Layout = routes.layout;
      const Conponent = LazyLoad(routes.component);

      return (
        <Route
          key={index}
          path={routes.path}
          element={
            <React.Suspense fallback={<LoadingPageSpin isAnimating />}>
              <Layout>
                <Conponent />
              </Layout>
            </React.Suspense>
          }
        />
      );
    })}
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default React.memo(ListRouter);
