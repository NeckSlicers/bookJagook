import {
  Layout,
  Container,
  Button,
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
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam nisi
          unde aliquid incidunt tempora ut hic illum at, ducimus quidem. Sunt
          dolore ipsa, quo tempora repellendus voluptate laudantium
          exercitationem distinctio.
        </Paragraph>
      </Container>
    </Layout>
  );
}

export default Home;
