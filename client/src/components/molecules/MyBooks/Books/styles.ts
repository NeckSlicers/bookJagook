import styled from 'styled-components';

export const BooksLayout = styled.section`
  margin: 0 auto;
  max-width: 1000px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;

  @media screen and (max-width: 479px) {
    display: flex;
    flex-direction: column;
  }
`;
