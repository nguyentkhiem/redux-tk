import React from 'react';
import { HttpApi } from 'services/http';
import { Permissions } from 'shared/definitions/auth';

interface PermissonProps {
  permission?: Permissions | Permissions[];
  id?: ID;
  children: (state: { access: boolean }) => any;
}

const Permission: React.FC<PermissonProps> = ({ permission, children }: PermissonProps) => {
  const access = HttpApi.can(permission);

  const renderedChildren = children({ access });

  return renderedChildren && React.Children.only(renderedChildren);
};

export default React.memo(Permission);
