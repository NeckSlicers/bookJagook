import { Routes, Route } from 'react-router-dom';
import { Home, WishList, MyBooks, Mypage, Login } from './pages';

import { PATH } from './constants';

function App() {
  return (
    <Routes>
      <Route path={PATH.HOME} element={<Home />} />
      <Route path={PATH.WISHLIST} element={<WishList />} />
      <Route path={PATH.MYBOOKS} element={<MyBooks />} />
      <Route path={PATH.MYPAGE} element={<Mypage />} />
      <Route path={PATH.LOGIN} element={<Login />} />
    </Routes>
  );
}

export default App;
