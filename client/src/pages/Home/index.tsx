import { Layout, Container, Button, Header } from '../../components/index';

import Modal from '../../components/molecules/Modal';

function Home() {
  return (
    <Layout>
      <Header />
      <Container>
        <Button>버튼</Button>
        <Button buttonType="cancel">버튼</Button>
        <Modal />
      </Container>
    </Layout>
  );
}

export default Home;
