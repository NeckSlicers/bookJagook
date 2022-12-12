import { useState } from 'react';
import { Button } from '../../../components';
import {
  TopButtonContainer,
  SerchingGuide,
  SerchingContainer,
  SerchingInput,
  SerchingButtonContainer,
} from './styles.TopContainer';

function TopContainer() {
  const [serchingStr, setSerchingStr] = useState('');

  /** 글자 상태 변경 */
  const strHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSerchingStr(e.target.value);
  };

  /** 읽고 싶은 책 검색 */
  const submitHandler = () => {
    let a = serchingStr;
    const b = a;
    a = b;
  };

  return (
    <TopButtonContainer>
      <SerchingGuide>읽고 싶은 책을 검색해보세요!</SerchingGuide>
      <SerchingContainer>
        <SerchingInput onChange={strHandler} />
        <Button onClick={submitHandler}>찾기</Button>
      </SerchingContainer>
      <SerchingButtonContainer>
        <Button>베스트셀러</Button>
        <Button>신간 리스트</Button>
      </SerchingButtonContainer>
    </TopButtonContainer>
  );
}

export default TopContainer;
