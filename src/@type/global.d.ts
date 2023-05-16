type ID = string | number | undefined;
interface LayoutDefaultProps {
  children?: ReactNode;
}

interface AppContextProps {
  props: {
    [x: string]: any;
  };
  setProps: (props: { [x: string]: any }) => void;
}

interface ModalDefaultProps {
  onClose?: () => void;
}

interface ModalContextProps {
  component: React.ComponentType<T> | null;
  props: T;
  showModal: <T>(component: React.ComponentType<T & ModalDefaultProps> | null, props?: T) => void;
  hideModal: () => void;
}

interface RoutesObject {
  path: string;
  name?: string;
  icon?: ReactNode;
  component: string;
  hideInMenu?: boolean;
  layout?: ReactNode;
  roles?: string['ADMIN' | 'USER' | 'GUEST'];
}

interface RoutesConfig {
  path: string;
  name?: string;
  hideInMenu?: boolean;
  icon?: ReactNode;
  layout: ReactNode;
  routes?: RoutesObject[];
}

interface IBreadcrumbs {
  path?: string | ReactNode;
  icon?: ReactNode;
  title?: string | ReactNode;
}

interface IUser {
  id?: ID;
  email?: string;
  is_admin?: boolean;
  image?: {
    image?: string;
    id?: ID;
  };
  first_name?: string;
  last_name?: string;
  position?: string;
  phone?: string;
  department?: string;
  [x: string]: any;
}

interface ResponseGenerator {
  config?: any;
  data?: any;
  body?: any;
  headers?: any;
  request?: any;
  status?: number;
  statusText?: string;
}
