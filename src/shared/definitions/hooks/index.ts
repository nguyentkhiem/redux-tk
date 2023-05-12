import { ModalContext } from 'context/modal';
import Cookie from 'js-cookie';
import { useContext } from 'react';
import { ACCESS_TOKEN } from 'shared/utils/string';

/**
 * @description
 */
export const useAuth = () => {
  const accessToken = Cookie.get(ACCESS_TOKEN);
  return { isLogin: !!accessToken };
};

/**
 * @description
 */
export const useModal = () => useContext(ModalContext);
