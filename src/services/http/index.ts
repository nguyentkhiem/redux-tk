import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import Cookie from 'js-cookie';
import { store } from 'redux-setup/store';
import { Permissions, Roles } from 'shared/definitions/auth';
import { useAuth } from 'shared/definitions/hooks';
import { logout } from 'redux-setup/auth';
import { ACCESS_TOKEN } from 'shared/utils/variables';
import { AUTH } from 'shared/definitions/saga-type';

interface optionsType {
  baseURL: string | undefined;
  params?: Object;
}

interface requestsType {
  url: string;
  data?: Object;
  config?: Object;
}

interface configsType {
  headers: Object;
}

class Http {
  _http;

  /**
   * @param options
   */
  constructor(options: optionsType) {
    this._http = axios.create(options);
    this.interceptorsRequest();
    this.interceptorsResponse();
  }

  /**
   * @param url
   * @param config
   */
  get({ url, config }: requestsType) {
    return this._http.get(url, config);
  }

  /**
   * @param url
   * @param data
   * @param config
   */
  post({ url, data, config }: requestsType) {
    return this._http.post(url, data, config);
  }

  /**
   * @param url
   * @param data
   * @param config
   */
  put({ url, data, config }: requestsType) {
    return this._http.put(url, data, config);
  }

  /**
   * @param url
   * @param data
   * @param config
   */
  patch({ url, data, config }: requestsType) {
    return this._http.patch(url, data, config);
  }

  /**
   * @param url
   * @param data
   * @param config
   */
  delete({ url, config }: requestsType) {
    return this._http.delete(url, config);
  }

  /**
   * @param url
   * @param data
   * @param config
   */
  head({ url, config }: requestsType) {
    return this._http.head(url, config);
  }

  /**
   * @param url
   * @param data
   * @param config
   */
  options({ url, config }: requestsType) {
    return this._http.options(url, config);
  }

  /**
   * @param configs
   * @param accessToken
   */
  configHeaderAuthorization(configs: AxiosRequestConfig, accessToken: string) {
    try {
      configs.headers = {
        ...configs.headers,
        Authorization: `Bearer ${accessToken}`,
      };
      return configs;
    } catch (e) {
      return configs;
    }
  }

  /**
   *
   */
  interceptorsRequest() {
    this._http.interceptors.request.use(
      async (config: AxiosRequestConfig): Promise<any> => {
        const accessToken: string = `${Cookie.get(ACCESS_TOKEN)}`;
        return this.configHeaderAuthorization(config, accessToken);
      },
      (error) => {
        console.log(error);
        return Promise.reject(error);
      },
    );
  }

  /**
   *
   */
  interceptorsResponse() {
    this._http.interceptors.response.use(
      async (response: AxiosResponse): Promise<any> => {
        try {
          return response;
        } catch (error) {
          console.log(error);
          return Promise.reject(error);
        }
      },
      (error) => {
        console.log(error);
        return Promise.reject(error);
      },
    );
  }

  /**
   *
   * @param user
   */
  login(user?: any): any {
    store.dispatch({
      type: AUTH.FETCH_USER_LOGIN,
      payload: { user },
    });
  }

  /**
   *
   */
  logout() {
    Cookie.remove(ACCESS_TOKEN);
    store.dispatch(logout());
  }

  /**
   * @param permission
   */
  can(permission?: Permissions | Permissions[]): boolean {
    const { permissions: authPermissions }: any = useAuth();

    return false;
  }

  /**
   * @param user
   */
  getUserPermissions(user: IUser): Array<Permissions> {
    const permissions: Array<Permissions> = [];
    // push permissions

    return permissions;
  }

  /**
   * @param user
   */
  getUserRole(user: IUser): Roles {
    const { is_admin } = user;

    let role: Roles = is_admin ? Roles.ADMIN : Roles.GUEST;

    return role;
  }
}

export const HttpApi = new Http({
  baseURL: process.env.REACT_APP_BASE_URL_API,
});
