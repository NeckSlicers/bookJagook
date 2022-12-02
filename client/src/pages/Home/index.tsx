import {
  Layout,
  Container,
  Button,
  Input,
  Paragraph,
  Header,
} from '../../components/index';

import Modal from '../../components/molecules/Modal';

function Home() {
  return (
    <Layout>
      <Header />
      <Container>
        <Button>확인</Button>
        <Button buttonType="cancel">취소</Button>
        <Modal />
        <Paragraph>
          컴포넌츠/아톰즈/Text.ts 의 Paragraph 스타일드컴포넌트입니다. 보통
          텍스트 지정용
        </Paragraph>
        <Input type="text" placeholder="도서 검색용. 기본값" />
        <Input type="text" inputType="comment" placeholder="한줄평용" />
        <Input
          type="textarea"
          inputType="review"
          placeholder="리뷰용. textarea"
        />
      </Container>
    </Layout>
  );
}

export default Home;
