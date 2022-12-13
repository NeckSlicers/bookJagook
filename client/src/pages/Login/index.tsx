import { Layout, Container, LogoDiv, KakaoSignInBtn } from './styles';
import logo from '../../assets/logo.png';
import kakaoLogo from '../../assets/kakaoLogo.png';
import { PATH } from '../../constants';
// 카톡 로그인 리다이렉트

function Login() {
  const kauthUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_KAKAO_REST_KEY}&redirect_uri=${PATH.REDIRECT}&response_type=code`;

  return (
    <Layout>
      <Container>
        <h1>당신의 온라인 서재, 책자국입니다.</h1>
        <LogoDiv>
          <img src={logo} alt="logo" />
        </LogoDiv>
        <KakaoSignInBtn>
          <img src={kakaoLogo} alt="" />
          <a href={kauthUrl}>
            <span>카카오 계정으로 로그인하기</span>
          </a>
        </KakaoSignInBtn>
      </Container>
    </Layout>
  );
}

export default Login;
