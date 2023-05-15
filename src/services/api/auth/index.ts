import { AUTH_API } from 'shared/definitions/api';
import { HttpApi } from 'services/http';
import { compileUrl } from 'shared/utils';

interface IOptionsProps {
  params?: Object;
}

export const AuthService = {
  login: (options: IOptionsProps) => {
    return HttpApi.post(compileUrl(AUTH_API.GET_ACCESS_TOKEN, options?.params));
  },
  getIdentityByEmail: (options: IOptionsProps) => {
    return HttpApi.post(compileUrl(AUTH_API.GET_IDENTITY_BY_EMAIL, options?.params));
  },
  getIdentityById: (options: IOptionsProps) => {
    return HttpApi.post(compileUrl(AUTH_API.GET_IDENTITY_BY_ID, options?.params));
  },
};
