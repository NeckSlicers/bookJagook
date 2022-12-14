/* eslint-disable no-alert */
/* eslint-disable @typescript-eslint/naming-convention */
import { useNavigate } from 'react-router-dom';
import { Button, Input } from '../../atoms';
import {
  FormLayout,
  FormTitle,
  InputLabel,
  BtnWrapper,
  AlertText,
} from './styles';
import { FormProps } from '../../../types';
import { handleSignup, handleSignin } from '../../../api';
import { PATH } from '../../../constants';

function Form({ onChange, userInfo, isValid, formType }: FormProps) {
  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formType === 'signup') {
      handleSignup(userInfo).then((res) => {
        if (res.statusCode === 400) return alert(`${res.message}`);
        const { access_token } = res.data;
        localStorage.setItem('access_token', access_token);
        return alert('정상적으로 회원가입되었습니다.');
      });
    }

    if (formType === 'signin') {
      handleSignin(userInfo).then((res) => {
        if (res.statusCode === 401)
          return alert('이메일과 비밀번호를 다시 확인해주세요');
        localStorage.access_token = res.data.access_token;
        return navigate(PATH.HOME);
      });
    }
  };

  return (
    <FormLayout onSubmit={handleSubmit}>
      <FormTitle>{formType === 'signin' ? 'LOG IN' : 'REGISTER'}</FormTitle>
      <InputLabel htmlFor="email">
        <span>email</span>
        <Input type="email" id="email" name="email" onChange={onChange} />
      </InputLabel>
      <AlertText>
        {userInfo.email.includes('@')
          ? null
          : '@이 포함된 올바른 이메일 주소를 입력하세요'}
      </AlertText>
      <InputLabel htmlFor="password">
        <span>password</span>
        <Input
          type="password"
          id="password"
          name="password"
          onChange={onChange}
        />
      </InputLabel>
      <AlertText>
        {userInfo.password.length >= 8
          ? null
          : '비밀번호는 8자리 이상이어야 합니다'}
      </AlertText>
      {formType === 'signup' && (
        <InputLabel htmlFor="username">
          <span>닉네임</span>
          <Input
            type="text"
            id="username"
            name="username"
            onChange={onChange}
          />
        </InputLabel>
      )}
      <BtnWrapper>
        <Button type="submit" disabled={isValid}>
          제출
        </Button>
      </BtnWrapper>
    </FormLayout>
  );
}

export default Form;
