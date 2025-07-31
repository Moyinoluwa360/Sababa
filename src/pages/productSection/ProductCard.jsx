import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import LikeButton from "../../components/likeButton.jsx";
import { useDispatch, useSelector } from "react-redux";
import { toggleWishlist } from "../../redux/slices/wishlistSlice";
import { updateWishlistInFirestore } from "../../redux/slices/wishlistSlice";
import { addToCart } from "../../redux/slices/cartSlice";
import { updateCartInFirestore } from "../../redux/slices/cartSlice";


export default function ProductCard({ product }) {
  const navigate = useNavigate();
  
  // Data extraction (keep logic as before)
  const productTitle = product?.title || product?.product_title || "Product Title";
  const productImage = product?.images?.[0] || product?.product_photos?.[0] || "/dummyImg/shirtDummy.svg";
  const productPrice = product?.finalPrice || product?.originalPrice || 0;
  const originalPrice = product?.originalPrice || product?.typical_price_range?.[0] || 0;
  const brand = product?.brand || product?.store || "";
  const rating = product?.rating || null;
  const reviewCount = product?.reviewCount || null;

  const dispatch = useDispatch();
  const wishlist = useSelector(state => state.wishlist.items);
  const user = useSelector(state => state.auth.user);
  const liked = wishlist.some(item => item.id === product.id);
  const cart = useSelector(state => state.cart.items);

  const handleLike = () => {
    dispatch(toggleWishlist(product));
    if (user && user.uid) {
      setTimeout(() => {
        const updatedWishlist = liked
          ? wishlist.filter(item => item.id !== product.id)
          : [...wishlist, product];
        dispatch(updateWishlistInFirestore({ userId: user.uid, wishlist: updatedWishlist }));
      }, 0);
    }
  };

  const handleCardClick = () => {
    navigate(`/home/product/${product.id}`);
  };

  const handleAddToCart = (e) => {
    e.stopPropagation(); // Prevent card click when button is clicked
    dispatch(addToCart({ product }));
    if (user && user.uid) {
      setTimeout(() => {
        // Find updated cart (simulate what Redux will have after add)
        const existingItem = cart.find(item => item.id === product.id);
        let updatedCart;
        if (existingItem) {
          updatedCart = cart.map(item =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          );
        } else {
          const finalPrice = product.originalPrice * 1.15;
          updatedCart = [
            ...cart,
            { ...product, quantity: 1, finalPrice: Math.round(finalPrice * 100) / 100 }
          ];
        }
        dispatch(updateCartInFirestore({ userId: user.uid, cart: updatedCart }));
      }, 0);
    }
  };

  // Format price in Nigerian Naira
  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN'
    }).format(price);
  };

  return (
    <CardContainer onClick={handleCardClick}>
      <ImageContainer>
        <ProductImage src={productImage} alt={productTitle} loading="lazy" />
        <LikeButton
          liked={liked}
          onClick={(e) => {
            e.stopPropagation(); // Prevent card click when like button is clicked
            handleLike();
          }}
          ariaLabel={`Like ${productTitle}`}
          isLoggedIn={user}
          bottom="12px"
          right="12px"
        />
      </ImageContainer>
      <DetailsContainer>
        <ProductTitle>{productTitle}</ProductTitle>
        <PriceContainer>
          <CurrentPrice>{formatPrice(productPrice)}</CurrentPrice>
          {originalPrice !== productPrice && (
            <OriginalPrice>{formatPrice(originalPrice)}</OriginalPrice>
          )}
        </PriceContainer>
        <BrandRatingContainer>
          <Brand>{brand}</Brand>
          <RatingContainer>
            {rating && (
              <>
                <RatingText>{rating}</RatingText>
                {/* Star icon placeholder */}
                <span role="img" aria-label="star">⭐</span>
                {reviewCount && <ReviewText>({reviewCount})</ReviewText>}
              </>
            )}
          </RatingContainer>
        </BrandRatingContainer>
        <AddToCartButton onClick={handleAddToCart}>Add to Cart</AddToCartButton>
      </DetailsContainer>
    </CardContainer>
  );
}



const CardContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 218px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 304px;
  object-fit: cover;
  border-radius: 4px;
  flex-shrink: 0;
`;

const FavoriteButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  width: 32px;
  height: 32px;
  padding: 8px;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
  box-shadow: 1px 1px 10px 0px rgba(0, 0, 0, 0.1);
  border: none;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.7);
  }
`;

const DetailsContainer = styled.div`
  width: 100%;
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const ProductTitle = styled.h3`
  font-family:
    Inter,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: normal;
  color: #1c1c1c;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const CurrentPrice = styled.span`
  font-family:
    Inter,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-size: 16px;
  font-weight: 700;
  color: #1c1c1c;
`;

const OriginalPrice = styled.span`
  font-family:
    Inter,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-size: 12px;
  font-weight: 700;
  color: #545454;
  text-decoration: line-through;
`;

const BrandRatingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const Brand = styled.span`
  font-family:
    Inter,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: #1c1c1c;
`;

const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
`;

const RatingText = styled.span`
  font-family:
    Inter,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-size: 12px;
  font-weight: 500;
  color: #1c1c1c;
`;

const ReviewText = styled.span`
  font-family:
    Inter,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-size: 12px;
  font-weight: 500;
  color: #545454;
`;

const AddToCartButton = styled.button`
  display: flex;
  width: 100%;
  height: 40px;
  padding: 10px 64px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  border: 1.5px solid #545454;
  background: transparent;
  color: #1c1c1c;
  font-family:
    Inter,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: #1c1c1c;
    color: #fff;
    border-color: #1c1c1c;
  }
`;