import { Link, useNavigate } from 'react-router-dom';
import { FaRegUserCircle } from 'react-icons/fa';
import { PATH } from '../../../constants';
import {
  SHeader,
  Logo,
  Navbar,
  NavMenus,
  NavItem,
  MypageLogo,
} from './styles.Header';
import logoImage from '../../../assets/logo.png';

function Header() {
  const navigate = useNavigate();

  return (
    <SHeader>
      <Logo>
        <img src={logoImage} alt="" />
      </Logo>
      <Navbar>
        <NavMenus>
          <NavItem>
            <Link to={PATH.HOME}>도서 검색</Link>
          </NavItem>
          <NavItem>
            <Link to={PATH.WISHLIST}>위시리스트</Link>
          </NavItem>
          <NavItem>
            <Link to={PATH.MYBOOKS}>나의 서재</Link>
          </NavItem>
        </NavMenus>
      </Navbar>
      <MypageLogo>
        <FaRegUserCircle onClick={() => navigate(PATH.MYPAGE)} />
      </MypageLogo>
    </SHeader>
  );
}

export { Header };
