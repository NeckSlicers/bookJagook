import { Layout, Container, Header } from '../../components';

import Books from '../../components/molecules/MyBooks/Books';

function MyBooks() {
  return (
    <Layout>
      <Header />
      <Container>
        <Books />
      </Container>
    </Layout>
  );
}

export default MyBooks;
