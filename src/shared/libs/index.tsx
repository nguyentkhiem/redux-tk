import React, { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from 'shared/definitions/hooks';
import { DEFAULT_PAGE_LOGIN } from 'shared/definitions/config';

/**
 *
 * @param Component
 */
export const withAuth = (Component: ReactNode, isPrivate?: boolean) => {
  const { isLogin } = useAuth();

  return isPrivate && !isLogin ? <Navigate to={DEFAULT_PAGE_LOGIN} replace /> : Component;
};
