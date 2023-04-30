import { HomeOutlined, PicRightOutlined } from '@ant-design/icons';
import { BreadcrumbsContext } from 'context/breadcrumb';
import { LoadingContext } from 'context/loading';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { PATH_HOME, PATH_POSTS } from 'routes/paths';

export interface IPostsProps {}

const Posts: React.FunctionComponent = (props: IPostsProps) => {
  const { setShow, setHide } = useContext(LoadingContext);
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
          <Link to={PATH_POSTS}>
            <PicRightOutlined />
            <span>Posts List</span>
          </Link>
        ),
      },
      {
        title: 'List',
      },
    ]);
  }, []);

  useEffect(() => {
    // setShow();
  }, []);
  return <>Posts</>;
};

export default Posts;
