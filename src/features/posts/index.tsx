import React, { useContext, useEffect, useState } from 'react';
import { HomeOutlined, PicRightOutlined } from '@ant-design/icons';
import { Button, Modal } from 'antd';
import { Link } from 'react-router-dom';
// context
import { BreadcrumbsContext } from 'context/breadcrumb';
import { LoadingContext } from 'context/loading';
// shared
import { ModalCreateUser, ModalCreateUserProps } from 'shared/components/Modal';
import { useModal } from 'shared/definitions/hooks';
// others
import { PATH_HOME, PATH_POSTS } from 'routes/paths';

export interface IPostsProps {}

const Posts: React.FunctionComponent = (props: IPostsProps) => {
  const { setShow, setHide } = useContext(LoadingContext);
  const { setBreadcrumbs } = useContext(BreadcrumbsContext);
  const { showModal, hideModal } = useModal();

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

  return (
    <>
      <h3>Posts</h3>
      <Button
        type="primary"
        onClick={() => {
          showModal<ModalCreateUserProps>(ModalCreateUser, {
            user: {},
            createUser: () => {},
          });
        }}
      >
        modal dialog
      </Button>
    </>
  );
};

export default Posts;
