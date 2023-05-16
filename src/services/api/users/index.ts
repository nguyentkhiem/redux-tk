import { USERS_API } from 'shared/definitions/api';
import { HttpApi } from 'services/http';
import { compileUrl } from 'shared/utils';
import { ListResponse } from '@type';

interface IOptionsProps {
  params?: Object;
}

export const UsersService = {
  getUsers: (options: IOptionsProps): Promise<ListResponse<any>> => {
    return HttpApi.get(compileUrl(USERS_API.GET_USERS, options?.params));
  },
  getCurrentUserInfo: (options: IOptionsProps): Promise<ListResponse<any>> => {
    return HttpApi.get(compileUrl(USERS_API.GET_USER_INFO, options?.params));
  },
};
