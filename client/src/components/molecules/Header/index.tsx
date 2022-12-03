import { Link, useNavigate } from 'react-router-dom';
import { FaRegUserCircle } from 'react-icons/fa';
import { TbSearch } from 'react-icons/tb';
import { BiBookHeart } from 'react-icons/bi';
import { GiBookshelf } from 'react-icons/gi';
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
      <Logo onClick={() => navigate(PATH.HOME)}>
        <img src={logoImage} alt="logo" />
      </Logo>
      <Navbar>
        <NavMenus>
          <NavItem>
            <Link to={PATH.HOME}>
              <TbSearch />
              <span>도서 검색</span>
            </Link>
          </NavItem>
          <NavItem>
            <Link to={PATH.WISHLIST}>
              <BiBookHeart />
              <span>위시리스트</span>
            </Link>
          </NavItem>
          <NavItem>
            <Link to={PATH.MYBOOKS}>
              <GiBookshelf />
              <span>나의 서재</span>
            </Link>
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
