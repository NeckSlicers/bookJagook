import { useEffect } from 'react';
import Book from './Book';
import { BooksLayout } from './styles';
import { getMybooks } from '../../../../api';

function Books() {
  const mybookLists = async () => {
    const data = await getMybooks();
    console.log(data);
  };

  useEffect(() => {
    mybookLists();
  }, []);

  return (
    <BooksLayout>
      <Book />
    </BooksLayout>
  );
}

export default Books;
