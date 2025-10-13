import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { updateWishlistInFirestore } from "../redux/slices/wishlistSlice";
import { toggleWishlist } from '../redux/slices/wishlistSlice';

const LikeButton = ({ariaLabel, outfit, top, OOTDNUM, bottom, right, left, onShowModal }) => {
  const dispatch = useDispatch();
  const wishlist = useSelector(state => state.wishlist.items);
  const wishLoading = useSelector(state => state.wishlist.wishLoading);
  const user = useSelector(state => state.auth.user);
  const liked = wishlist.some(item => item.id === outfit.id);
  const prevWishlistRef = useRef(wishlist);
  
  // Save to Firestore when wishlist changes
  useEffect(() => {
    if (user && user.uid && prevWishlistRef.current !== wishlist) {
      dispatch(updateWishlistInFirestore({ userId: user.uid, wishlist }));
      prevWishlistRef.current = wishlist;
    }
  }, [wishlist, user, dispatch]);

  const handleLike = () => {
    dispatch(toggleWishlist({...outfit, OOTDNUM}));
  };

  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation(); // Prevent card click when like button is clicked
    
    if (user) {
      handleLike();
    } else {
      onShowModal?.(); // Call the modal handler passed from parent
    }
  };
  
  return (
    <StyledButton 
      onClick={handleClick}
      aria-label={ariaLabel} 
      type="button"
      title={!user ? "Log in to add to wishlist" : wishLoading ? "Updating wishlist..." : ""}
      $bottom={bottom}
      $right={right}
      $top={top}
      $left={left}
    >
      <LikeIcon
        src={liked ? "/heart/liked-heart.svg" : "/heart/unliked-heart.svg"}
        alt={liked ? "Black heart (wishlisted)" : "Red heart (wishlisted)"}
        loading="lazy"
      />
    </StyledButton>
  );
};

const StyledButton = styled.button`
  position: absolute;
  ${({ $bottom }) => $bottom !== undefined && `bottom: ${$bottom};`}
  ${({ $right }) => $right !== undefined && `right: ${$right};`}
  ${({ $top }) => $top !== undefined && `top: ${$top};`}
  ${({ $left }) => $left !== undefined && `left: ${$left};`}
  border-radius: 25px;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: -1px -1px 4px 0 rgba(255, 255, 255, 0.20) inset,1px 1px 4px 0 rgba(255, 255, 255, 0.20) inset;
  backdrop-filter: blur(10px);
  border: none;
  width: 40px;
  height: 40px;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease;
  
  &:hover {
    background: rgba(108, 108, 108, 0.15);
  }
  
  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }

  @media (max-width:480px){
    width: 35px;
    height: 35px;
  }
`;

const LikeIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-top: 2.5px;
  @media (max-width:480px){
    width: 16px;
    height: 14px;
  }
`;

export default LikeButton;