import { MainLayout } from 'shared/components/Layout';
import { UserOutlined } from '@ant-design/icons';
import { PATH_USERS, PATH_USERS_CREATE } from 'routes/paths';
import { ROLES } from 'shared/utils/common';

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
        roles: [ROLES.ADMIN, ROLES.USER],
      },
      {
        path: PATH_USERS_CREATE,
        name: 'users.create',
        icon: <UserOutlined />,
        component: 'users/create',
        roles: [ROLES.ADMIN],
      },
    ],
  },
];

export { UsersRoute };
