/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable-next-line react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import queryString from 'query-string';
import { PATH } from '../../constants';

function Kakao() {
  const navigate = useNavigate();

  const query = queryString.parse(window.location.search);

  const sendKakaoTokenToServer = (token: string) => {
    axios.post('/auth/kakao', { access_token: token }).then((res) => {
      if (res.status === 201 || res.status === 200) {
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
        const { access_token } = res.data; // jwt아님. 카카오 엑세스 토큰. 서버로 다시 보내서 서버한테 jwt 다시 받아야 함
        sendKakaoTokenToServer(access_token);
      });
  };

  useEffect(() => {
    if (query.code) {
      getKakaoTokenHandler(query.code.toString());
    }
    //
  }, []);

  return <div>Kakao</div>;
}

export default Kakao;
