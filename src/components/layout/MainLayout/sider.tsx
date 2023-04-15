import React, { useEffect, useState } from 'react';
import { Menu, MenuProps } from 'antd';
import Sider from 'antd/es/layout/Sider';

type MenuItem = Required<MenuProps>['items'][number];

interface SiderLayoutProps {
  items: MenuItem[];
  collapsed: boolean;
}

const SiderLayout: React.FunctionComponent<SiderLayoutProps> = (props: SiderLayoutProps) => {
  const { items, collapsed } = props;

  return (
    <Sider collapsed={collapsed} width={250}>
      <Menu defaultSelectedKeys={['menu_1']} defaultOpenKeys={['sub_menu_1_0']} mode="inline" theme="dark" items={items} />
    </Sider>
  );
};

export default SiderLayout;
