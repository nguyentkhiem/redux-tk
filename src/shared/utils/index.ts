import { compile } from 'path-to-regexp';

export const compileUrl = (link: string, params?: Object) => {
  const url = compile(link)(params);
  return {
    url: url.toString(),
    data: params,
  };
};
