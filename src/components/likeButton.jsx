import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { updateWishlistInFirestore } from "../redux/slices/wishlistSlice";
import { toggleWishlist } from '../redux/slices/wishlistSlice';
import SignInModal from "./SignInModal";

const LikeButton = ({ariaLabel, outfit, top, OOTDNUM, bottom, right, left }) => {
  const [showModal, setShowModal] = useState(false);
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

  
  
  
  return (
  <StyledButton 
    onClick={user 
      ? 
      (e) => {
        e.preventDefault()
        e.stopPropagation(); // Prevent card click when like button is clicked
        handleLike();
      }
      : (e) => {
        e.preventDefault();
        e.stopPropagation(); // Prevent card click when like button is clicked
        if (!showModal) {
          setShowModal(true);
        }else {
          setShowModal(false);
        }
      }} 
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
    {/* // the pop up that shows when the user is not logged in */}
    {
      showModal &&
      <SignInModal 
        open = {showModal} 
        setShowModal = {setShowModal} 
      /> 
    }
  </StyledButton>
)};

const StyledButton = styled.button`
  position: absolute;
  ${({ $bottom }) => $bottom !== undefined && `bottom: ${$bottom};`}
  ${({ $right }) => $right !== undefined && `right: ${$right};`}
  ${({ $top }) => $top !== undefined && `top: ${$top};`}
  ${({ $left }) => $left !== undefined && `left: ${$left};`}
  border-radius: 25px;
  background-color: rgba(255, 255, 255, 0.5);
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
  width: 40px;
  height: 40px;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.8);
  }
  
  &:focus {
    outline: 2px solid #000;
    outline-offset: 2px;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }

  @media (max-width:480px){
    width: 30px;
    height: 30px;
  }
`;

const LikeIcon = styled.img`
  width: 25px;
  height: 25px;
  margin-top: 2.5px;
  @media (max-width:480px){
    width: 20px;
    height: 20px;
  }
`;

export default LikeButton;