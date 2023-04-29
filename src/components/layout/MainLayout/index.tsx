import React, { useState } from 'react';
import { Layout, theme } from 'antd';
import { useTranslation } from 'react-i18next';
import HeaderLayout from './header';
import SiderLayout from './sider';
import BreadcrumbLayout from './breadcrumb';
import { routesConfig } from 'routes/router';

const { Content } = Layout;

const MainLayout: React.FunctionComponent<LayoutDefaultProps> = ({ children }: LayoutDefaultProps) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const { t } = useTranslation();
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const menuItems = () => {
    const menus = [];

    for (let i = 0; i < routesConfig?.length; i++) {
      if (!routesConfig[i].hideInMenu) {
        menus.push({
          key: `menu_${i}`,
          icon: routesConfig[i].icon,
          label: t(`${routesConfig[i].name}`),
          children: routesConfig[i].routes?.map((route, index: number) => ({
            key: `sub_menu_${i}_${index}`,
            label: t(`${route.name}`),
            icon: route.icon,
            path: route.path,
          })),
        });
      }
    }

    return menus;
  };

  return (
    <Layout>
      <HeaderLayout collapsed={collapsed} toggleCollapsed={toggleCollapsed} />

      <Layout>
        <SiderLayout items={menuItems()} collapsed={collapsed} />

        <Layout style={{ padding: '0 24px 24px' }}>
          <BreadcrumbLayout />
          <Content
            style={{
              padding: 24,
              margin: 0,
              height: '100%',
              background: colorBgContainer,
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
