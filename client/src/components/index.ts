import styled from 'styled-components';

// atoms
import { Button } from './atoms/Button';
// molecules
import { Header } from './molecules/Header';

export { Button, Header };

export const Layout = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0f6ee;
`;

export const Container = styled.div`
  border: 3px solid lightgray;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: max-content;
  max-width: 1330px;
  padding: 0 160px;
`;
