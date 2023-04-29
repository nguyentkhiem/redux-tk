// @ts-nocheck
import React from 'react';
import { Menu, MenuProps } from 'antd';
import Sider from 'antd/es/layout/Sider';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from 'shared/definitions/hooks';
import { DEFAULT_PAGE_LOGIN } from 'shared/definitions/config';

type MenuItem = Required<MenuProps>['items'][number];

interface SiderLayoutProps {
  items: MenuItem[];
  collapsed: boolean;
}

const SiderLayout: React.FunctionComponent<SiderLayoutProps> = (props: SiderLayoutProps) => {
  const { items, collapsed } = props;
  const location = useLocation();
  const navigate = useNavigate();
  const { isLogin } = useAuth();

  const menuSelected = items?.find((item) => item?.children?.find((m) => m?.path === location?.pathname));
  const subMenuSelected = menuSelected?.children?.find((m) => m?.path === location?.pathname)?.key;

  const handleOnClick = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { key } = e;

    if (key) {
      const mSelected = items?.find((item) => item?.children?.find((m) => m?.key === key));
      const smSelected = mSelected?.children?.find((m) => m?.key === key)?.path;

      if (smSelected) {
        if (isLogin) {
          navigate(smSelected);
        } else {
          navigate(DEFAULT_PAGE_LOGIN);
        }
      }
    }
  };

  return (
    <Sider collapsed={collapsed} width={250}>
      <Menu
        onSelect={handleOnClick}
        defaultOpenKeys={[`${menuSelected?.key}`]}
        defaultSelectedKeys={[`${subMenuSelected}`]}
        mode="inline"
        theme="dark"
        items={items}
      />
    </Sider>
  );
};

export default SiderLayout;
