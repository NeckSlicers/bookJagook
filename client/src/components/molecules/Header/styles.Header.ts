import styled from 'styled-components';
import { THEME } from '../../../constants';

export const SHeader = styled.header`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1330px;
  padding: 1rem;

  border-radius: 12px;
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.1);

  @media screen and (max-width: 479px) {
    flex-direction: column;
    row-gap: 1rem;
  }
`;

export const Logo = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 6rem;
    /* height: 60px; */
  }
`;

export const Navbar = styled.nav`
  display: flex;
  justify-content: center;
`;

export const NavMenus = styled.ul`
  display: flex;
  column-gap: 2rem;
`;

export const NavItem = styled.li`
  a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: ${THEME.light};

    :hover {
      color: ${THEME.strong};
    }
  }

  span {
    padding: 5px;
  }
`;

export const MypageLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;

  svg {
    width: 1.5rem;
    height: 1.5rem;
    color: ${THEME.light};

    :hover {
      color: ${THEME.strong};
    }
  }

  @media screen and (max-width: 479px) {
    position: absolute;
    top: 1rem;
    right: 1rem;
  }
`;
