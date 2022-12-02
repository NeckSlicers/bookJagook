import styled, { css } from 'styled-components';
import { THEME } from '../../constants';

type InputProps = {
  inputType?: 'search' | 'comment' | 'review';
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
    inputType === 'comment' &&
    css`
      width: 100%;
    `}
  ${({ inputType }) =>
    inputType === 'review' &&
    css`
      width: 100%;
      height: 300px; // 확인용 임시값
    `}
`;
