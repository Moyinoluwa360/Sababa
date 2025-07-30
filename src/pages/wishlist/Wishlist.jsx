import React from 'react'
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import ProductGrid from '../productSection/ProductGrid';

function Wishlist() {
  const products = useSelector(state => state.products.products);
  const wishlist = useSelector(state => state.wishlist.items);
  const searchLoading = useSelector(state => state.products.searchLoading);

  // Filter products to only those in the wishlist
  const wishlistProducts = wishlist;
  console.log(wishlistProducts)

  return (
    <>
      <PageTitle>
        Wish List
      </PageTitle>
      {searchLoading ? (
        <LoadingMessage>Loading wish list...</LoadingMessage>
      ) : wishlistProducts.length > 0 ? (
        <ProductGrid productsDatas={wishlistProducts} />
      ) : (
        <NoWishlist>
          <NoWishlistIcon>💖</NoWishlistIcon>
          <NoWishlistTitle>No wishlist items yet</NoWishlistTitle>
          <NoWishlistText>
            Items you add to your wishlist while browsing will appear here.
          </NoWishlistText>
        </NoWishlist>
      )}
    </>
  )
}

const PageTitle = styled.div`
  font-size: 20px;
  width: 100%;
  text-align: center;
  margin-bottom: 20px;
  font-family: Inter;
  font-weight: 600;
`;

const LoadingMessage = styled.div`
  text-align: center;
  padding: 40px;
  font-size: 16px;
  color: #666;
`;

const NoWishlist = styled.div`
  text-align: center;
  padding: 60px 20px;
  color: #666;
`;

const NoWishlistIcon = styled.div`
  font-size: 48px;
  margin-bottom: 16px;
`;

const NoWishlistTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 8px;
  color: #333;
`;

const NoWishlistText = styled.p`
  font-size: 14px;
  color: #666;
`;

export default Wishlist
