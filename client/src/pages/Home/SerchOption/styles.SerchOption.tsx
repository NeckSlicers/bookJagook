import styled from 'styled-components';

interface Props {
  filterSwitch?: boolean;
}

/** 검색조건 설정 컨테이너 */
export const OptionCotainer = styled.div``;

/** 검색조건 아이콘 컨테이너 */
export const FilterIconContainer = styled.div`
  display: flex;
  padding: 1em;
  align-items: center;
  svg {
    height: 30px;
    width: 30px;
  }
`;

/** 검색조건 상단 텍스트 */
export const FilterText = styled.span`
  padding-left: 1em;
`;

/** 필터 컨테이너 */
export const FilterContainer = styled.div<Props>`
  width: 300px;
  height: 300px;
  border: 1px solid black;
  border-left: none;
  padding: 1em;
  display: ${({ filterSwitch }) => (filterSwitch ? '' : 'none')};
`;

/** 필터 내부 강조글자 */
export const StrongText = styled.span`
  font-size: 1.2rem;
  font-weight: bold;
`;
