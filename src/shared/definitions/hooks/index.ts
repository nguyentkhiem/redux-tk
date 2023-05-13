import { ModalContext } from 'context/modal';
import Cookie from 'js-cookie';
import { useContext } from 'react';
import { ACCESS_TOKEN } from 'shared/utils/variables';

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
