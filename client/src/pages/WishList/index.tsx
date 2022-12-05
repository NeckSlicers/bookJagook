import { Header } from '../../components';
import { WishListLayout, WishListContainer } from './styles.WishList';
import WishCard from './WishCard';

function WishList() {
  return (
    <WishListLayout>
      <Header />
      <WishListContainer>
        <WishCard />
        <WishCard />
        <WishCard />
        <WishCard />
        <WishCard />
        <WishCard />
        <WishCard />
      </WishListContainer>
    </WishListLayout>
  );
}

export default WishList;
