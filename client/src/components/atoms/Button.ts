import styled, { css } from 'styled-components';
import { THEME } from '../../constants';

type ButtonProps = {
  buttonType?: 'cancel';
};

export const Button = styled.button<ButtonProps>`
  background-color: ${THEME.LIGHT};
  color: #fff;
  border: none;
  padding: 0.5em 1em;
  border-radius: ${THEME.RADIUS};
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
    background-color: ${THEME.MEDIUM};
  }

  ${({ buttonType }) =>
    buttonType === 'cancel' &&
    css`
      background-color: transparent;
      color: ${THEME.LIGHT};
      border: 1px solid ${THEME.LIGHT};
      box-shadow: 1px 1px 1px ${THEME.LIGHT};
    `}
`;
