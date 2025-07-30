"use client";
import React from "react";
import styled from "styled-components";
import LikeButton from "../../components/likeButton";
import { useDispatch, useSelector } from "react-redux";
import { toggleWishlist } from "../../redux/slices/wishlistSlice";
import { updateWishlistInFirestore } from "../../redux/slices/wishlistSlice";
import { removeFromCart, changeQuantityByType, updateCartInFirestore } from "../../redux/slices/cartSlice";

const CartItem = ({product}) => {

    // Data extraction (keep logic as before)
    const productTitle = product?.title || product?.product_title || "Product Title";
    const productImage = product?.images?.[0] || product?.product_photos?.[0] || "/dummyImg/shirtDummy.svg";
    const productPrice = product?.finalPrice || product?.originalPrice || 0;
   
    const dispatch = useDispatch();
    const wishlist = useSelector(state => state.wishlist.items);
    const user = useSelector(state => state.auth.user);
    const liked = wishlist.some(item => item.id === product.id);
    const cartItems = useSelector(state => state.cart.items);
    const totalPrice = useSelector(state => state.cart.totalPrice);
    const totalProducts = useSelector(state => state.cart.totalProducts);
    const deliveryPrice = useSelector(state => state.cart.deliveryPrice);
    const orderTotal = useSelector(state => state.cart.orderTotal);
  
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

    const handleRemove = () => {
      dispatch(removeFromCart(product.id));
      if (user && user.uid) {
        setTimeout(() => {
          dispatch(updateCartInFirestore({ userId: user.uid, cart: cartItems.filter(item => item.id !== product.id), totalPrice, totalProducts: totalProducts - product.quantity, deliveryPrice, orderTotal }));
        }, 0);
      }
    };

    const handleDecrement = () => {
      if (product.quantity > 1) {
        dispatch(changeQuantityByType({ productId: product.id, actionType: "minus" }));
        if (user && user.uid) {
          setTimeout(() => {
            dispatch(updateCartInFirestore({ userId: user.uid, cart: cartItems.map(item => item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item), totalPrice, totalProducts: totalProducts - 1, deliveryPrice, orderTotal }));
          }, 0);
        }
      }
    };

    const handleIncrement = () => {
      dispatch(changeQuantityByType({ productId: product.id, actionType: "add" }));
      if (user && user.uid) {
        setTimeout(() => {
          dispatch(updateCartInFirestore({ userId: user.uid, cart: cartItems.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item), totalPrice, totalProducts: totalProducts + 1, deliveryPrice, orderTotal }));
        }, 0);
      }
    };

  return (
    <CartItemContainer>
      <ProductImage src={productImage} alt="Product" />
      <ItemDetails>
        <PriceContainer>
          <CurrentPrice>${productPrice}</CurrentPrice>
        </PriceContainer>
        <ProductTitle>{product.description}</ProductTitle>
        <ProductOptions>
          <span>{product.availableColors && product.availableColors.length > 0 ? product.availableColors[0] : "—"}</span>
          <Divider />
          <span>UK:{product.availableSizes && product.availableSizes.length > 0 ? product.availableSizes[0] : "—"}</span>
          <Divider />
          <QtyControl>
            <QtyButton onClick={handleDecrement} disabled={product.quantity <= 1}>-</QtyButton>
            <QtyValue>{product.quantity}</QtyValue>
            <QtyButton onClick={handleIncrement}>+</QtyButton>
          </QtyControl>
        </ProductOptions>
      </ItemDetails>
      <ButtonContainer>
        <LikeButton
          liked={liked}
          onClick={handleLike}
          ariaLabel={`Like ${productTitle}`}
          isLoggedIn={!!user}
          right="0px"
        />
        <RemoveItem onClick={handleRemove}>
          <img src="/trash.svg" alt="remove button" />
        </RemoveItem>
      </ButtonContainer>
    </CartItemContainer>
  );
};

const CartItemContainer = styled.article`
  display: flex;
  padding: 16px;
  align-self: center;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  margin-bottom: 8px;
  width: 681px;
  height: 221px;
  position: relative;
  @media (max-width: 710px){
    width: 600px;
    height: 200px;
  }
  @media (max-width: 620px){
    width: 343px;
    height: 195px;
  }
  @media (max-width: 370px){
    width: 260px;
    height: 160px;
  }
  @media (max-width: 280px){
    width: 220px;
    height: 145px;
    padding-left: 5px;
  }
`;

const ProductImage = styled.img`
  width: 209px;
  height: 189px;
  border-radius: 4px;
  object-fit: cover;
  @media (max-width: 620px){
    width: 129px;
    height: 160px;
  }
  @media (max-width: 370px){
    width: 100px;
    height: 130px;
  }
  @media (max-width: 280px){
    width: 70px;
    height: 90px;
  }
`;

const ItemDetails = styled.div`
  margin-left: 16px;
  flex: 1;
  @media (max-width: 370px){
    max-width: 105px;
  }
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
  width:50%;
`;

const CurrentPrice = styled.span`
  color: #000;
  font-family: Inter, sans-serif;
  font-size: 18px;
  font-weight: 600;
  @media (max-width: 620px){
    font-size: 16px;
  }
  @media (max-width: 370px){
    font-size: 14px;
  }
`;

const OriginalPrice = styled.span`
  color: #545454;
  font-family: Inter, sans-serif;
  font-size: 14px;
  font-weight: 600;
  text-decoration: line-through;
  @media (max-width: 620px){
    font-size: 12px;
  }
  @media (max-width: 370px){
    font-size: 10px;
  }
`;

const ProductTitle = styled.h3`
  color: #545454;
  font-family: Inter, sans-serif;
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 16px;
  @media (max-width: 620px){
    font-size: 12px;
  }
  @media (max-width: 370px){
    font-size: 10px;
  }
`;

const ProductOptions = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #545454;
  font-family: Inter, sans-serif;
  font-size: 16px;
  font-weight: 500;
  width: 100%;
  @media (max-width: 620px){
    font-size: 11px;
    gap: 2px;
  }
  @media (max-width: 370px){
    overflow: auto;
    font-size: 9px;
    width: 120px;
  }
`;

const Divider = styled.span`
  width: 1px;
  height: 8px;
  background-color: rgba(0, 0, 0, 0.1);
`;

const SaveLater = styled.button`
  background-color: black;
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 32px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  font-family: Inter, sans-serif;
  font-size: 16px;
  color: #000;
  @media (max-width: 620px){
    font-size: 12px;
    margin-top: 12px;
  }
  @media (max-width: 370px){
    font-size: 10px;
    margin-top: 6px;
  }
`;

const HeartIconContainer = styled.div`
  img{
    height: 40px;
    width: 40px;
    @media (max-width: 710px){
      width: 27px;
      height: 27px;
    }
    @media (max-width: 370px){
      width: 20px;
      height: 20px;
    }
  }
`;

const ButtonContainer = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  min-width: 90px;
  @media (max-width: 710px) {
    top: 12px;
    right: 12px;
    gap: 16px;
    min-width: 100px;
  }
  @media (max-width: 620px) {
    top: 10px;
    right: 10px;
    gap: 14px;
    min-width: 80px;
  }
  @media (max-width: 370px) {
    top: 8px;
    right: 8px;
    gap: 12px;
    min-width: 50px;
  }
  @media (max-width: 280px) {
    top: 6px;
    right: 6px;
    gap: 10px;
    min-width: 40px;
  }
`;

const RemoveItem = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 620px) {
    img {
      width: 15px;
      height: 15px;
    }
  }
  @media (max-width: 370px) {
    img {
      width: 12px;
      height: 12px;
    }
  }
`;

const QtyControl = styled.div`
  display: flex;
  align-items: center;
  gap: 0;
  background: #fff;
  border-radius: 999px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
  border: 1px solid #e0e0e0;
  padding: 0 8px;
  min-width: 96px;
  height: 40px;
  margin: 0 4px;
  @media (max-width: 710px) {
    min-width: 80px;
    height: 36px;
    padding: 0 6px;
  }
  @media (max-width: 620px) {
    min-width: 60px;
    height: 30px;
    padding: 0 4px;
  }
  @media (max-width: 370px) {
    min-width: 44px;
    height: 22px;
    padding: 0 2px;
  }
  @media (max-width: 280px) {
    min-width: 32px;
    height: 16px;
    padding: 0 1px;
  }
`;

const QtyButton = styled.button`
  width: 36px;
  height: 36px;
  border: none;
  background: #f3f3f3;
  color: #222;
  font-size: 22px;
  font-weight: 700;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 2px;
  transition: background 0.18s, box-shadow 0.18s;
  box-shadow: 0 1px 3px rgba(0,0,0,0.04);
  &:hover:not(:disabled), &:focus {
    background: #e0e0e0;
    outline: none;
    box-shadow: 0 2px 8px rgba(0,0,0,0.10);
  }
  &:active {
    background: #d1d1d1;
  }
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  @media (max-width: 710px) {
    width: 30px;
    height: 30px;
    font-size: 18px;
  }
  @media (max-width: 620px) {
    width: 22px;
    height: 22px;
    font-size: 14px;
  }
  @media (max-width: 370px) {
    width: 16px;
    height: 16px;
    font-size: 10px;
  }
  @media (max-width: 280px) {
    width: 12px;
    height: 12px;
    font-size: 8px;
  }
`;

const QtyValue = styled.span`
  min-width: 32px;
  text-align: center;
  font-size: 18px;
  font-weight: 600;
  color: #222;
  letter-spacing: 0.5px;
  user-select: none;
  @media (max-width: 710px) {
    min-width: 24px;
    font-size: 14px;
  }
  @media (max-width: 620px) {
    min-width: 16px;
    font-size: 11px;
  }
  @media (max-width: 370px) {
    min-width: 10px;
    font-size: 8px;
  }
  @media (max-width: 280px) {
    min-width: 8px;
    font-size: 6px;
  }
`;

export default CartItem;
