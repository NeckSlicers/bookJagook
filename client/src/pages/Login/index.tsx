import { useEffect } from 'react';
import queryString from 'query-string';
import axios from 'axios';
import { Layout, Container, LogoDiv, KakaoSignInBtn } from './styles';
import logo from '../../assets/logo.png';
import kakaoLogo from '../../assets/kakaoLogo.png';
import { PATH } from '../../constants';

function Login() {
  const kauthUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_KAKAO_REST_KEY}&redirect_uri=${PATH.REDIRECT}&response_type=code`;

  const query = queryString.parse(window.location.search);

  const sendKakaoTokenToServer = (token: string) => {
    axios.post('/auth/kakao', { access_token: token }).then((res) => {
      if (res.status === 201 || res.status === 200) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { user } = res.data;
        window.localStorage.setItem(
          'access_token',
          JSON.stringify({
            access_token: res.data.jwt,
          }),
        );
      } else {
        // eslint-disable-next-line no-alert
        window.alert('로그인에 실패하였습니다');
      }
    });
  };

  const getKakaoTokenHandler = async (code: string) => {
    const data: any = {
      grant_type: 'authorization_code',
      client_id: process.env.REACT_APP_KAKAO_REST_KEY,
      redirect_url: `${PATH.REDIRECT}`,
      code,
    };
    const decodedQueryString = Object.keys(data)
      .map(
        (k: any) => `${encodeURIComponent(k)}=${encodeURIComponent(data[k])}`,
      )
      .join('&');

    // 토큰 발급 REST API
    axios
      .post('https://kauth.kakao.com/oauth/token', decodedQueryString, {
        headers: {
          'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
        },
      })
      .then((res) => {
        // TODO: 주소는 우리 서버의 user 라우터로
        sendKakaoTokenToServer(res.data.access_token);
      });
  };

  useEffect(() => {
    if (query.code) {
      getKakaoTokenHandler(query.code.toString());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
