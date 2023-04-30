import React, { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import _ from 'lodash';
import { useAuth } from 'shared/definitions/hooks';
import { DEFAULT_PAGE_LOGIN } from 'shared/definitions/config';
import { ROLES } from 'shared/utils/common';

/**
 *
 * @param Component
 */
// export const withAuth = (Component: ReactNode, isPrivate?: boolean) => {
//   const { isLogin } = useAuth();

//   return isPrivate && !isLogin ? <Navigate to={DEFAULT_PAGE_LOGIN} replace /> : Component;
// };

/**
 *
 * @param role
 */
export const hasRoles = (roles?: ROLES[]) => {
  if (!roles) return true;

  const userInfo: any = {
    role: 'USER',
  };

  return userInfo && roles.includes(userInfo?.role);
};

/**
 *
 * @param role
 */
export const withRole = (Component: React.ElementType, roles?: ROLES[]) =>
  hasRoles(roles) ? <Component /> : <Navigate to={'/forbidden'} />;