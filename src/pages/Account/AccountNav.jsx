"use client";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import useWindowWidth from "../../components/useWindowWidth";
import { doSignOut } from "../../firebase/auth";
import { useSelector } from "react-redux";

function NavigationItem({ icon, label, setCurrentNav, currentNav, onClick }) {
  return (
    <NavItemContainer
      onClick={() => {
        if (onClick) {
          onClick(); // Execute custom onClick if provided
        } else {
          setCurrentNav(label);
        }
      }}
      className={currentNav === label ? "active" : ""}
    >
      <IconWrapper>
        <img src={icon} alt={label} />
      </IconWrapper>
      <Label>{label}</Label>
    </NavItemContainer>
  );
}

export function NavigationItems(props) {
  const windowWidth = useWindowWidth();
  const user = useSelector((state) => state.auth.user);

  const handleSignOut = async () => {
    try {
      await doSignOut();
      window.location.href = "/home"; // Redirect to sign-in page after sign out
      // Optionally show a success message or handle additional cleanup
      alert("User signed out successfully");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  const navigationItems = [
    {
      icon: '/profileSettings.svg',
      label: "Profile",
      path: "profile"
    },
    {
      icon: '/passwordKey.svg',
      label: "Password",
      path: "password"
    },
    {
      icon: '/signOutIcon.svg',
      label: "Sign out",
      path: null, // No path for sign out
      onClick: handleSignOut // Custom click handler
    },
  ];

  return (
    <SidebarContainer>
      <NavContainer>
        {navigationItems.map((item, index) => {
          // Handle Sign out differently - no NavLink wrapper
          if (item.label === "Sign out") {
            return (
              <NavigationItem 
                key={index} 
                icon={item.icon} 
                label={item.label} 
                setCurrentNav={props.setCurrentNav} 
                currentNav={props.currentNav}
                onClick={()=>{item.onClick()}} // Call the custom onClick function
              />
            );
          }
          
          // Regular navigation items with NavLink
          return (
            <NavLink 
              to={`/account/${item.path}`}
              style={{ textDecoration: 'none' }} 
              key={index}
            > 
              <NavigationItem 
                key={index} 
                icon={item.icon} 
                label={item.label} 
                setCurrentNav={props.setCurrentNav} 
                currentNav={props.currentNav} 
              />
            </NavLink>
          );
        })}
      </NavContainer>
    </SidebarContainer>
  );
}


const SidebarContainer = styled.aside`
  width: 300px;
  height: auto;
  border-radius: 8px;
  background-color: #fff;
  @media (max-width : 800px){
    width: 100%;
  }
`;

const NavContainer = styled.nav`
  padding: 12px 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const NavItemContainer = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  cursor: pointer;
  background: none;
  border: none;
  width: 100%;
  height: 40px;
  text-align: left;
  border-radius: 10px;
  color: #787C7F;
  @media (max-width: 480px) {
    padding: 6px 4px;
  }
  &.active{
    background-color: #D9D9D9;
    color: #1c1c1c;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  width: 20px;
  height: 20px;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
`;

const Label = styled.span`
  font-family: Inter, sans-serif;
  font-size: 14px;
  font-weight: 500;
  @media (max-width: 240px) {
    font-size: 12px;
  }
`;
