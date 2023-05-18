import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Cookie from 'js-cookie';
import { HomeOutlined } from '@ant-design/icons';
import { BreadcrumbsContext } from 'context/breadcrumb';
import { PATH_HOME } from 'routes/paths';
import { USERS } from 'shared/constants/variables';

const HomePage: React.FunctionComponent = () => {
  const { setBreadcrumbs } = useContext(BreadcrumbsContext);

  useEffect(() => {
    Cookie.set(USERS, JSON.stringify({ username: 'khiemnt', age: 27, sex: 'man' }));

    setBreadcrumbs([
      {
        title: (
          <Link to={PATH_HOME}>
            <HomeOutlined />
          </Link>
        ),
      },
    ]);
  }, []);

  return <>Home</>;
};

export default HomePage;
