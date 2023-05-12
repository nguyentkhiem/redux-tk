import React, { FunctionComponent } from 'react';
import { Modal } from 'antd';
import { ModalCreateUserProps } from 'shared/components/Modal';

const ModalCreateUser: FunctionComponent<ModalCreateUserProps> = ({ onClose, user, createUser }) => {
  return (
    <Modal title="modal dialog" centered open={true} onOk={onClose} onCancel={onClose}>
      <p>some contents...</p>
      <p>some contents...</p>
      <p>some contents...</p>
    </Modal>
  );
};

export default ModalCreateUser;
