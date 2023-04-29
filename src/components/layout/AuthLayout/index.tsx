import React from 'react';
import { Layout } from 'antd';

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
      <b style={{ marginTop: 30 }}>{'Login'}</b>
      {children}
    </Layout>
  );
};

export default Authlayout;
