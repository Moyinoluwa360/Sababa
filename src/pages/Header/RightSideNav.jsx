import styled from 'styled-components';
import useWindowWidth from '../../components/useWindowWidth';
import { deviceSizes } from '../../components/deviceSize';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


export default function Nav2 () {
  const user = useSelector((state) => state.auth.user);
  const windowWidth = useWindowWidth();
  return (
    <IconButtonsWrapper>
      <Link to={"/account"}>
        <IconButton  tabIndex="0">
          {
            user?.photoURL == "default_profile_picture_url"
              ?
            <img src= "/account.svg" alt="account icon" className='userImg' loading={"lazy"}  />
              :
            <img src={user ? user.photoURL : "/account.svg"} alt="account icon" className='userImg' loading={"lazy"}  />
          }
          <div className="iconLabel">
            {
              user?
              windowWidth < 600
               ?
              'Hello!'
              : `Hello! ${user?.displayName?.split(' ')[0]|| user?.displayName}` 
              : (
                    <div className="signIn">Sign In</div>                  
              )
            }
          </div>
        </IconButton>
      </Link>

      <Link to={"wishlist"}>
        <IconButton  tabIndex="0">
          <img src="/liked-heart.svg" alt="liked icon"/>
          {
            useWindowWidth() > 600 ?
            <div className="iconLabel">Wish List</div>
            :
            null
          }
        </IconButton>
      </Link>

      {/* not yet available for mvp and use */}
      {/* <Link to={"bag"}>
        <IconButton  tabIndex="0">
          <img src="/shopping-cart.svg" alt="cart icon"  />
          {
            useWindowWidth() > 600 ?
            <div className="iconLabel">Bag(0)</div>
            :
            null
          }
        </IconButton>
      </Link> */}
      
    </IconButtonsWrapper>
  );
};

const IconButtonsWrapper = styled.div`
  align-self: center;
  display: flex;
  color: black;
  align-items: center;
  gap: 24px;
  margin-left: auto;
  @media (min-width: ${deviceSizes.desktop}) {
      margin-right:5px;
    }
  @media (max-width: ${deviceSizes.mobile}) {
      height: 20px;
      gap: 16px;
    }
  a{
    text-decoration: none;
  }
`;

const IconButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  img{
    width: 25px;
    height: 25px;
  }
  .userImg{
    width: 25px;
    height: 25px;
    border-radius:50%;
  }
  transition: opacity 0.2s;
  &:hover {
    opacity: 0.8;
  }
  .iconLabel{
    font-size:17.5px;
    margin-left: 3px;
    font-weight: 600;
    color : black;
  }
  .signIn{
    height: 30px;
    cursor: pointer;
    width: fit-content;
    color: white;
    background-color: #000000;
    font-size: 16px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 15px 0 15px;
    border-radius: 5px;
    margin-left: 5px;
    &:hover{
      background-color: #8d8d8d;
    }
    @media (max-width: 480px){
      height: 25px;
      font-size: 14px;
      font-weight: 600;
      padding: 0 10px 0 10px;
    }
  }
  @media (max-width: ${deviceSizes.mobile}) {
    img{
      width: 20px;
      height: 20px;
    }
  }
`;