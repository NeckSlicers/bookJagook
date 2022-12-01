import styled from 'styled-components';

export const SHeader = styled.header`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1330px;

  border-radius: 12px;
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.1);
`;

export const Logo = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 80px;
    /* height: 60px; */
  }
`;

export const Navbar = styled.nav``;

export const NavMenus = styled.ul`
  display: flex;
`;

export const NavItem = styled.li`
  padding: 1rem;
  a {
    text-decoration: none;
  }
`;

export const MypageLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;

  svg {
    width: 1.2rem;
    height: 1.2rem;
  }
`;
