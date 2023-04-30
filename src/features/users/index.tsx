import { HomeOutlined, UserOutlined } from '@ant-design/icons';
import { ConfigProvider, Radio } from 'antd';
import { BreadcrumbsContext } from 'context/breadcrumb';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { PATH_HOME, PATH_USERS } from 'routes/paths';

export interface IUsersProps {}

const Users: React.FunctionComponent = (props: IUsersProps) => {
  const { setBreadcrumbs } = useContext(BreadcrumbsContext);

  useEffect(() => {
    setBreadcrumbs([
      {
        title: (
          <Link to={PATH_HOME}>
            <HomeOutlined />
          </Link>
        ),
      },
      {
        title: (
          <Link to={PATH_USERS}>
            <UserOutlined />
            <span>User List</span>
          </Link>
        ),
      },
      {
        title: 'List',
      },
    ]);
  }, []);

  return (
    <>
      <h2>Users</h2>
      <ConfigProvider
        theme={{
          components: {
            Radio: {
              colorPrimary: '#00b96b',
            },
          },
        }}
      >
        <Radio>Radio</Radio>
      </ConfigProvider>
    </>
  );
};

export default Users;
