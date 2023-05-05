interface LayoutDefaultProps {
  children?: ReactNode;
}

interface AppContextProps {
  props: {
    [x: string]: any;
  };
  setProps: (props: { [x: string]: any }) => void;
}

interface RoutesObject {
  path: string;
  name?: string;
  icon?: ReactNode;
  component: string;
  hideInMenu?: boolean;
  layout?: ReactNode;
  auth?: boolean;
  roles?: string['ADMIN' | 'USER' | 'GUEST'];
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

interface IBreadcrumbs {
  path?: string | ReactNode;
  icon?: ReactNode;
  title?: string | ReactNode;
}
