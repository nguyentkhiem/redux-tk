import { HomeRoute } from 'routes/home';
import { PostsRoute } from 'routes/posts';
import { UsersRoute } from 'routes/users';
import { AuthRoute } from 'routes/auth';

const routesConfig: RoutesConfig[] = [...AuthRoute, ...HomeRoute, ...PostsRoute, ...UsersRoute];

export { routesConfig };
