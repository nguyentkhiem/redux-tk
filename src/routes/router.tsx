import { AuthRoute, HomeRoute, PostsRoute, UsageRoute, UsersRoute } from 'routes/configs';

const routesConfig: RoutesConfig[] = [...AuthRoute, ...HomeRoute, ...PostsRoute, ...UsersRoute, ...UsageRoute];

export { routesConfig };
