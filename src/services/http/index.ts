import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import Cookie from 'js-cookie';

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

  constructor(options: optionsType) {
    this._http = axios.create(options);
    this.interceptorsRequest();
    this.interceptorsResponse();
  }

  get({ url, config }: requestsType) {
    return this._http.get(url, config);
  }

  post({ url, data, config }: requestsType) {
    return this._http.post(url, data, config);
  }

  /**
   *
   * @param url
   * @param data
   * @param config
   */
  put({ url, data, config }: requestsType) {
    return this._http.put(url, data, config);
  }

  /**
   *
   * @param url
   * @param data
   * @param config
   */
  patch({ url, data, config }: requestsType) {
    return this._http.patch(url, data, config);
  }

  /**
   *
   * @param url
   * @param data
   * @param config
   */
  delete({ url, config }: requestsType) {
    return this._http.delete(url, config);
  }

  /**
   *
   * @param url
   * @param data
   * @param config
   */
  head({ url, config }: requestsType) {
    return this._http.head(url, config);
  }

  /**
   *
   * @param url
   * @param data
   * @param config
   */
  options({ url, config }: requestsType) {
    return this._http.options(url, config);
  }

  configHeaderAuthorization(configs: configsType, accessToken: string) {
    try {
      configs.headers = {
        authorization: `Bearer ${accessToken}`,
      };
      return configs;
    } catch (e) {
      return configs;
    }
  }

  interceptorsRequest() {
    this._http.interceptors.request.use(
      async (config: AxiosRequestConfig): Promise<any> => {
        return config;
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
}

export const HttpApi = new Http({
  baseURL: process.env.REACT_APP_BASE_URL_API,
});
