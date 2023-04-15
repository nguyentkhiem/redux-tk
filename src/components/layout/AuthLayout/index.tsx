import React from 'react';
import { Button, Layout, Row } from 'antd';
import { redirect, Outlet } from 'react-router-dom';

const Authlayout: React.FunctionComponent = ({ children }: any) => {
  return (
    <Layout
      style={{
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
      }}
    >
      <Outlet />
      <b style={{ marginTop: 30 }}>{'Login'}</b>
      {children}
      <Button onClick={() => redirect('/posts')}>Login</Button>
    </Layout>
  );
};

export default Authlayout;
