import { Routes, Route } from 'react-router-dom';
import { Home, WishList, MyBooks, Mypage } from './pages';
import { PATH } from './constants';

function App() {
  return (
    <Routes>
      <Route path={PATH.HOME} element={<Home />} />
      <Route path={PATH.WISHLIST} element={<WishList />} />
      <Route path={PATH.MYBOOKS} element={<MyBooks />} />
      <Route path={PATH.MYPAGE} element={<Mypage />} />
    </Routes>
  );
}

export default App;
