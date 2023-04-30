import { AuthLayout } from 'components/layout';
import { PATH_AUTH, PATH_AUTH_LOGIN } from 'routes/paths';

const AuthRoute: RoutesConfig[] = [
  {
    path: PATH_AUTH,
    name: 'auth',
    hideInMenu: true,
    icon: <></>,
    layout: AuthLayout,
    routes: [
      {
        path: PATH_AUTH_LOGIN,
        name: 'auth.login',
        component: 'auth/login',
      },
    ],
  },
];

export { AuthRoute };
