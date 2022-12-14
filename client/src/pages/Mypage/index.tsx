import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { PATH } from '../../constants';
import { Layout, Container, Button } from '../../components';
import { handleLogout } from '../../api';
// import {} from './styles';

function Mypage() {
  const navigate = useNavigate();

  const onClick = () => {
    handleLogout();
    localStorage.clear();
    return navigate(PATH.HOME);
  };

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (!localStorage.access_token) return navigate(PATH.REGISTER);
  }, [navigate]);

  return (
    <Layout>
      <Container>
        <Button onClick={onClick}>로그아웃</Button>
      </Container>
    </Layout>
  );
}

export default Mypage;
