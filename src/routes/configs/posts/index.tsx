import { PicRightOutlined } from '@ant-design/icons';
import { MainLayout } from 'shared/components/Layout';
import { PATH_POSTS, PATH_POSTS_CREATE } from 'routes/paths';
import { ROLES } from 'shared/utils/common';

const PostsRoute: RoutesConfig[] = [
  {
    path: PATH_POSTS,
    name: 'posts',
    hideInMenu: false,
    icon: <PicRightOutlined />,
    layout: MainLayout,
    routes: [
      {
        path: PATH_POSTS,
        name: 'posts.list',
        icon: <PicRightOutlined />,
        component: 'posts',
        roles: [ROLES.ADMIN, ROLES.USER, ROLES.GUEST],
      },
      {
        path: PATH_POSTS_CREATE,
        name: 'posts.create',
        icon: <PicRightOutlined />,
        component: 'posts/create',
        roles: [ROLES.ADMIN],
      },
    ],
  },
];

export { PostsRoute };
