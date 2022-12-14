/* eslint-disable consistent-return */
/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { PATH } from '../../constants';
import { Layout } from '../../components';
import { AuthFormContainer, BtnWrapper, AuthChangeBtn } from './styles';
import Form from '../../components/molecules/Form';

function Register() {
  const navigate = useNavigate();
  const [formType, setFormType] = useState('signup');
  const [isValid, setIsValid] = useState(true);
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (localStorage.access_token) return navigate(PATH.HOME);

    userInfo.email.includes('@') && userInfo.password.length >= 8
      ? setIsValid(false)
      : setIsValid(true);
  }, [userInfo, navigate]);

  return (
    <Layout>
      <AuthFormContainer>
        <BtnWrapper>
          <AuthChangeBtn onClick={() => setFormType('signup')}>
            <div id={formType === 'signup' ? 'active' : 'deactivate'}>
              회원가입
            </div>
          </AuthChangeBtn>
          <AuthChangeBtn onClick={() => setFormType('signin')}>
            <div id={formType === 'signin' ? 'active' : 'deactivate'}>
              로그인
            </div>
          </AuthChangeBtn>
        </BtnWrapper>
        <Form
          onChange={onChange}
          userInfo={userInfo}
          isValid={isValid}
          formType={formType}
        />
      </AuthFormContainer>
    </Layout>
  );
}

export default Register;
