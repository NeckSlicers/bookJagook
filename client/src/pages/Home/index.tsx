import {
  TopContainer,
  BottomContainer,
  ListContainer,
  TitleContainer,
  LayoutColumn,
} from './styles.Home';
import { Button, Input, Paragraph, Header } from '../../components/index';
import coverImg from '../../assets/logo.png';
// import Modal from '../../components/molecules/Modal';

/** 임시데이터로 key는 isbn으로 할 예정 */
const data = [
  {
    cover: coverImg,
    title: '책 제목',
    author: '작가명',
    date: '생성일',
    subTitle: '부제목',
    price: 15000,
    saledPrice: 13500,
    description:
      '책의 내용에 대한 요약 등 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도',
  },
  {
    cover: coverImg,
    title: '책 제목',
    author: '작가명',
    date: '생성일',
    subTitle: '부제목',
    price: 15000,
    saledPrice: 13500,
    description:
      '책의 내용에 대한 요약 등 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도',
  },
  {
    cover: coverImg,
    title: '책 제목',
    author: '작가명',
    date: '생성일',
    subTitle: '부제목',
    price: 15000,
    saledPrice: 13500,
    description:
      '책의 내용에 대한 요약 등 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도',
  },
  {
    cover: coverImg,
    title: '책 제목',
    author: '작가명',
    date: '생성일',
    subTitle: '부제목',
    price: 15000,
    saledPrice: 13500,
    description:
      '책의 내용에 대한 요약 등 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도',
  },
  {
    cover: coverImg,
    title: '책 제목',
    author: '작가명',
    date: '생성일',
    subTitle: '부제목',
    price: 15000,
    saledPrice: 13500,
    description:
      '책의 내용에 대한 요약 등 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도',
  },
  {
    cover: coverImg,
    title: '책 제목',
    author: '작가명',
    date: '생성일',
    subTitle: '부제목',
    price: 15000,
    saledPrice: 13500,
    description:
      '책의 내용에 대한 요약 등 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도',
  },
  {
    cover: coverImg,
    title: '책 제목',
    author: '작가명',
    date: '생성일',
    subTitle: '부제목',
    price: 15000,
    saledPrice: 13500,
    description:
      '책의 내용에 대한 요약 등 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도',
  },
  {
    cover: coverImg,
    title: '책 제목',
    author: '작가명',
    date: '생성일',
    subTitle: '부제목',
    price: 15000,
    saledPrice: 13500,
    description:
      '책의 내용에 대한 요약 등 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도',
  },
  {
    cover: coverImg,
    title: '책 제목',
    author: '작가명',
    date: '생성일',
    subTitle: '부제목',
    price: 15000,
    saledPrice: 13500,
    description:
      '책의 내용에 대한 요약 등 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도',
  },
  {
    cover: coverImg,
    title: '책 제목',
    author: '작가명',
    date: '생성일',
    subTitle: '부제목',
    price: 15000,
    saledPrice: 13500,
    description:
      '책의 내용에 대한 요약 등 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도 길게 3줄정도',
  },
];
function Home() {
  // const [modal, setModal] = useState(false);
  return (
    <LayoutColumn>
      <Header />
      <TopContainer>
        <Paragraph>읽고 싶은 책을 검색해보세요!</Paragraph>
        <Input type="text" />
        <Button>찾기</Button>
        <>
          <Button>베스트셀러</Button>
          <Button>신간 리스트</Button>
        </>
      </TopContainer>
      <BottomContainer>
        <div>검색조건변경</div>
        <div>검색 조건 박스</div>
        {data.map((el) => (
          <ListContainer>
            <div className="cover">
              <img src={el.cover} alt="cover" />
            </div>
            <div className="text">
              <TitleContainer>
                {/* section, article 지정해서 사용 */}
                <div className="title">{el.title}</div>
                <div className="spaceBetween">
                  <span>{el.author}</span>
                  <span>{el.date}</span>
                </div>
              </TitleContainer>
              <div>{el.subTitle}</div>
              <div>
                {el.price}
                {'->'}
                {el.saledPrice}원
              </div>
              <div>{el.description}</div>
            </div>
            <div className="icon">
              <div>icon</div>
            </div>
          </ListContainer>
        ))}
        {/* <ListContainer>
          <div className="cover">
            <img src={data[0].cover} alt="cover" />
          </div>
          <div className="text">
            <TitleContainer>
              <div className="title">{data[0].title}</div>
              <div>{data[0].author}</div>
            </TitleContainer>
            <div>{data[0].date}</div>
            <div>{data[0].subTitle}</div>
            <div>
              {data[0].price}
              {'->'}
              {data[0].saledPrice}원
            </div>
            <div>{data[0].description}</div>
          </div>
          <div className="icon">
            <div>icon</div>
          </div>
        </ListContainer> */}
      </BottomContainer>
    </LayoutColumn>
  );
}

export default Home;
