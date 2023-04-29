import { useEffect } from 'react';
import Cookie from 'js-cookie';
import { Button } from 'antd';
import { useNavigate, redirect, Navigate } from 'react-router-dom';
import { ACCESS_TOKEN } from 'shared/utils/string';
import { useAuth } from 'shared/definitions/hooks';
import { DEFAULT_PAGE_HOME } from 'shared/definitions/config';

export interface ILoginProps {}

export default function Login(props: ILoginProps) {
  const navigate = useNavigate();
  const { isLogin } = useAuth();

  const handleLogin = () => {
    Cookie.set(ACCESS_TOKEN, 'khiemnt');

    setTimeout(() => {
      navigate(DEFAULT_PAGE_HOME);
    }, 2000);
  };

  useEffect(() => {
    if (isLogin) {
      navigate('/');
    }
  }, []);

  return (
    <div>
      <h1 style={{ color: 'red', fontSize: 50 }}>Login</h1>
      <Button onClick={handleLogin}>Login</Button>
    </div>
  );
}
