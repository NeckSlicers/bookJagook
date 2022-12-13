import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { PATH } from '../../constants';

function Mypage() {
  const navigate = useNavigate();

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (!localStorage.access_token) return navigate(PATH.LOGIN);
  }, [navigate]);

  return <div>Mypage</div>;
}

export default Mypage;
