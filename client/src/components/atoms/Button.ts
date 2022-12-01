import styled, { css } from 'styled-components';

type ButtonProps = {
  buttonType?: 'cancel';
};

export const Button = styled.button<ButtonProps>`
  background-color: #99a799;
  color: #fff;
  border: none;
  padding: 0.5em 1em;
  border-radius: 0.5em;
  font-size: 1.1rem;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }

  ${({ buttonType }) =>
    buttonType === 'cancel' &&
    css`
      background-color: transparent;
      color: #0065ff;
    `}
`;
