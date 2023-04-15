import React from 'react';
import { AuthLayout, BlankLayout, MainLayout } from 'components/layout';
import { EnvironmentOutlined } from '@ant-design/icons';

const routesConfig: RoutesConfig[] = [
  {
    path: '/auth',
    name: 'auth',
    hideInMenu: true,
    icon: <EnvironmentOutlined />,
    layout: AuthLayout,
    routes: [
      {
        path: '/auth/login',
        name: 'auth.login',
        icon: <EnvironmentOutlined />,
        component: 'auth/login',
      },
    ],
  },
  {
    path: '/posts',
    name: 'posts',
    hideInMenu: false,
    icon: <EnvironmentOutlined />,
    layout: MainLayout,
    routes: [
      {
        path: '/posts',
        name: 'posts.list',
        icon: <EnvironmentOutlined />,
        component: 'posts',
      },
      {
        path: 'posts/create',
        name: 'posts.create',
        icon: <EnvironmentOutlined />,
        component: 'posts/create',
      },
    ],
  },
  {
    path: '/',
    name: 'home',
    hideInMenu: false,
    icon: <EnvironmentOutlined />,
    layout: BlankLayout,
    routes: [
      {
        path: '/',
        name: 'home',
        icon: <EnvironmentOutlined />,
        component: 'home',
      },
    ],
  },
];

export { routesConfig };
