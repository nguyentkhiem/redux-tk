interface LayoutDefaultProps {
  children?: ReactNode;
}

interface RoutesObject {
  path: string;
  name?: string;
  icon?: ReactNode;
  component: string;
  hideInMenu?: boolean;
  layout?: ReactNode;
  auth?: boolean;
}

interface RoutesConfig {
  path: string;
  name?: string;
  hideInMenu?: boolean;
  icon?: ReactNode;
  layout: ReactNode;
  routes?: RoutesObject[];
  auth?: boolean;
}
