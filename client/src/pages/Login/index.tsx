import { Layout, Container, LogoDiv, KakaoSignInBtn } from './styles';
import logo from '../../assets/logo.png';
import kakaoLogo from '../../assets/kakaoLogo.png';

function Login() {
  return (
    <Layout>
      <Container>
        <h1>당신의 온라인 서재, 책자국입니다.</h1>
        <LogoDiv>
          <img src={logo} alt="logo" />
        </LogoDiv>
        <KakaoSignInBtn>
          <img src={kakaoLogo} alt="" />
          <span>카카오 계정으로 로그인하기</span>
        </KakaoSignInBtn>
      </Container>
    </Layout>
  );
}

export default Login;
