import { useState } from 'react';
import { VscListFilter } from 'react-icons/vsc';
import {
  OptionCotainer,
  FilterIconContainer,
  FilterText,
  StrongText,
  FilterContainer,
} from './styles.SerchOption';

function SerchOption() {
  const [filterSwitch, setFilterSwitch] = useState<boolean>(false);

  /** 필터 온오프 함수 */
  const filterHandler = () => {
    setFilterSwitch(!filterSwitch);
  };

  return (
    <OptionCotainer>
      <FilterIconContainer>
        <VscListFilter onClick={filterHandler} />
        <FilterText>검색조건 변경</FilterText>
      </FilterIconContainer>
      <FilterContainer filterSwitch={filterSwitch}>
        <StrongText>기간</StrongText>
        <div>
          연도:
          <input type="date" />
        </div>
        <div>
          월간:
          <input type="month" />
        </div>
        <div>
          주간:
          <input type="week" />
        </div>
        <StrongText>분류</StrongText>

        <button type="button">선택한 조건으로 검색</button>
      </FilterContainer>
    </OptionCotainer>
  );
}

export default SerchOption;
