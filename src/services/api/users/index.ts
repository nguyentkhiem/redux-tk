import { USERS_API } from 'shared/definitions/api';
import { HttpApi } from 'services/http';
import { compileUrl } from 'shared/utils';
import { IPosts, ListResponse } from '@type';

interface IOptionsProps {
  params?: Object;
}

export const UsersService = {
  getUsers: (options: IOptionsProps): Promise<ListResponse<any>> => {
    return HttpApi.get(compileUrl(USERS_API.GET_USERS, options?.params));
  },
};
