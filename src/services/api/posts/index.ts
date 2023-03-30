import { POSTS_API } from 'shared/definitions/api';
import { HttpApi } from 'services/http';
import { compileUrl } from 'shared/utils';
import { IPosts, ListResponse } from '@type';
interface IOptionsProps {
  params?: Object;
}

export const Posts = {
  getPosts: (options: IOptionsProps): Promise<ListResponse<IPosts>> => {
    return HttpApi.post(compileUrl(POSTS_API.GET_POST, options?.params));
  },
};
