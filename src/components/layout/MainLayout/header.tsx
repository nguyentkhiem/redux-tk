import React from 'react';
import type { MenuProps } from 'antd';
import { Button, Layout, Menu } from 'antd';
import { useTranslation } from 'react-i18next';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';

const { Header } = Layout;

const items1: MenuProps['items'] = ['1', '2', '3'].map((key) => ({
  key,
  label: `nav ${key}`,
}));

interface HeaderLayoutProps {
  collapsed: boolean;
  toggleCollapsed: () => void;
}

const HeaderLayout: React.FunctionComponent<HeaderLayoutProps> = (props: HeaderLayoutProps) => {
  const { collapsed, toggleCollapsed } = props;

  return (
    <Header className="header">
      <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
        <h1 style={{ color: '#ffffff', width: 200 }}>NTK</h1>
        {/* <div className="logo" /> */}

        {/* <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items1} /> */}

        <Button type="primary" onClick={toggleCollapsed} style={{ width: 40 }}>
          {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </Button>
      </div>
    </Header>
  );
};

export default HeaderLayout;
