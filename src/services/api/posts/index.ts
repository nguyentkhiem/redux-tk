import { POSTS_API } from 'shared/definitions/api';
import { HttpApi } from 'services/http';
import { compileUrl } from 'shared/utils';

interface IOptionsProps {
  params?: Object;
}

export const Posts = {
  getPosts: (options: IOptionsProps) => {
    return HttpApi.post(compileUrl(POSTS_API.GET_POST, options?.params));
  },
};
