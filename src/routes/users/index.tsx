import { MainLayout } from 'components/layout';
import { UserOutlined } from '@ant-design/icons';
import { PATH_USERS, PATH_USERS_CREATE } from 'routes/paths';

const UsersRoute: RoutesConfig[] = [
  {
    path: PATH_USERS,
    name: 'users',
    hideInMenu: false,
    icon: <UserOutlined />,
    layout: MainLayout,
    routes: [
      {
        path: PATH_USERS,
        name: 'users.list',
        icon: <UserOutlined />,
        component: 'users',
      },
      {
        path: PATH_USERS_CREATE,
        name: 'users.create',
        icon: <UserOutlined />,
        component: 'users/create',
      },
    ],
  },
];

export { UsersRoute };
