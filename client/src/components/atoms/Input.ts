import styled, { css } from 'styled-components';
import { THEME } from '../../constants';

type InputProps = {
  inputType?: 'search' | 'review' | 'report';
};

export const Input = styled.input<InputProps>`
  border: 1px solid ${THEME.MEDIUM};
  border-radius: ${THEME.RADIUS};
  width: 300px;
  height: 35px;

  :focus {
    font-size: 16px;
    padding-left: 10px;
  }
  ::placeholder {
    padding-left: 10px;
  }

  ${({ inputType }) =>
    inputType === 'review' &&
    css`
      width: 350px;
    `}
  ${({ inputType }) =>
    inputType === 'report' &&
    css`
      width: 800px;
      height: 300px; // 확인용 임시값

      @media screen and (max-width: 479px) {
        width: 100%;
      }
    `}
`;
