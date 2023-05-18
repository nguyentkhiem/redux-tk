import { ModalContext } from 'context/modal';
import Cookie from 'js-cookie';
import { useContext } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'redux-setup/root-reducer';
import { ACCESS_TOKEN } from 'shared/constants/variables';

/**
 * @description
 */
// TH save auth in store
// export const useAuth = () => useSelector(({ auth }: RootState) => ({ ...auth }));

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
