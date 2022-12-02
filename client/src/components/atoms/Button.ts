import styled, { css } from 'styled-components';
import { THEME } from '../../constants';

type ButtonProps = {
  buttonType?: 'cancel';
};

export const Button = styled.button<ButtonProps>`
  background-color: ${THEME.light};
  color: #fff;
  border: none;
  padding: 0.5em 1em;
  border-radius: ${THEME.radius};
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
    background-color: ${THEME.medium};
  }

  ${({ buttonType }) =>
    buttonType === 'cancel' &&
    css`
      background-color: transparent;
      color: ${THEME.light};
      border: 1px solid ${THEME.light};
      box-shadow: 1px 1px 1px ${THEME.light};
    `}
`;
