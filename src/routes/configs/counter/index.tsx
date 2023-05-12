import { PicRightOutlined } from '@ant-design/icons';
import { MainLayout } from 'shared/components/Layout';
import { ROLES } from 'shared/utils/common';

const CounterRoute: RoutesConfig[] = [
  {
    path: '/counter',
    name: 'counter',
    hideInMenu: false,
    icon: <PicRightOutlined />,
    layout: MainLayout,
    routes: [
      {
        path: '/counter',
        name: 'counter',
        icon: <PicRightOutlined />,
        component: 'counter',
        roles: [ROLES.ADMIN, ROLES.USER, ROLES.GUEST],
      },
    ],
  },
];

export { CounterRoute };
