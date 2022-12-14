import { Routes, Route } from 'react-router-dom';
import { Home, WishList, MyBooks, Mypage, Register } from './pages';
// import Kakao from './components/callback/Kakao';
import { PATH } from './constants';

function App() {
  return (
    <Routes>
      <Route path={PATH.HOME} element={<Home />} />
      <Route path={PATH.WISHLIST} element={<WishList />} />
      <Route path={PATH.MYBOOKS} element={<MyBooks />} />
      <Route path={PATH.MYPAGE} element={<Mypage />} />
      <Route path={PATH.REGISTER} element={<Register />} />
      {/* <Route path="/auth/kakao/callback" element={<Kakao />} /> */}
    </Routes>
  );
}

export default App;
