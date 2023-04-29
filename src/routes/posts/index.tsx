import { PicRightOutlined } from '@ant-design/icons';
import { MainLayout } from 'components/layout';
import { PATH_POSTS, PATH_POSTS_CREATE } from 'routes/paths';

const PostsRoute: RoutesConfig[] = [
  {
    path: PATH_POSTS,
    name: 'posts',
    hideInMenu: false,
    icon: <PicRightOutlined />,
    layout: MainLayout,
    auth: true,
    routes: [
      {
        path: PATH_POSTS,
        name: 'posts.list',
        icon: <PicRightOutlined />,
        component: 'posts',
      },
      {
        path: PATH_POSTS_CREATE,
        name: 'posts.create',
        icon: <PicRightOutlined />,
        component: 'posts/create',
      },
    ],
  },
];

export { PostsRoute };
