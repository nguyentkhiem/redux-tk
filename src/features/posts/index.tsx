import React, { useContext, useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { HomeOutlined, PicRightOutlined } from '@ant-design/icons';
import { Button, Modal } from 'antd';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
// context
import { BreadcrumbsContext } from 'context/breadcrumb';
import { LoadingContext } from 'context/loading';
// shared
import { ModalCreateUser, ModalCreateUserProps } from 'shared/components/Modal';
import { useModal } from 'shared/definitions/hooks';
// others
import { PATH_HOME, PATH_POSTS } from 'routes/paths';
import { USERS } from 'shared/utils/variables';

export interface IPostsProps {}

const Posts: React.FunctionComponent = (props: IPostsProps) => {
  const { t } = useTranslation();
  const { setShow, setHide } = useContext(LoadingContext);
  const { setBreadcrumbs } = useContext(BreadcrumbsContext);
  const { showModal, hideModal } = useModal();

  const onClickCreateUser = () => {
    return showModal<ModalCreateUserProps>(ModalCreateUser, {
      user: {},
      createUser: () => {},
    });
  };

  useEffect(() => {
    const userInfo: any = Cookies.get(USERS);
    console.log(11, JSON.parse(userInfo));

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
      <h4>{t('required')}</h4>
      <Button type="primary" onClick={onClickCreateUser}>
        modal dialog
      </Button>
    </>
  );
};

export default Posts;
