import React from "react";
import styled from "styled-components";

const BreadcrumbNav = () => {
  return (
    <NavContainer>
      <NavigationSection>
        {/* <NavLink>Home</NavLink>
        <Separator
          src="https://cdn.builder.io/api/v1/image/assets/08bf16d58b0d4aa28fefd3a671be5059/0c050b4fac73f3abab8e7ab7fabe9a73a8a3555807e34010ed93561d489ffcb3?placeholderIfAbsent=true"
          alt="Separator"
        />
        <NavLink>All Outfits</NavLink>
        <Separator
          src="https://cdn.builder.io/api/v1/image/assets/08bf16d58b0d4aa28fefd3a671be5059/0c050b4fac73f3abab8e7ab7fabe9a73a8a3555807e34010ed93561d489ffcb3?placeholderIfAbsent=true"
          alt="Separator"
        />
        <NavLink>Outfit Of The Day 100</NavLink>
        <Separator
          src="https://cdn.builder.io/api/v1/image/assets/08bf16d58b0d4aa28fefd3a671be5059/0c050b4fac73f3abab8e7ab7fabe9a73a8a3555807e34010ed93561d489ffcb3?placeholderIfAbsent=true"
          alt="Separator"
        />
        <CurrentPage>Outfits Breakdown</CurrentPage> */}
        Nothing here for now
      </NavigationSection>
      
    </NavContainer>
  );
};

const NavContainer = styled.section`
  display: flex;
  margin-top: 24px;
  margin-left: 40px;
  width: 824px;
  max-width: 100%;
  flex-direction: column;
  font-family:
    Inter,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
`;

const NavigationSection = styled.nav`
  align-self: start;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  color: rgba(84, 84, 84, 1);
  font-weight: 500;
  justify-content: start;
  flex-wrap: wrap;
`;

/* const NavLink = styled.a`
  align-self: stretch;
  margin-top: auto;
  margin-bottom: auto;
  cursor: pointer;
`;

const Separator = styled.img`
  aspect-ratio: 0.57;
  object-fit: contain;
  object-position: center;
  width: 4px;
  align-self: stretch;
  margin-top: auto;
  margin-bottom: auto;
  flex-shrink: 0;
`;

const CurrentPage = styled.span`
  color: rgba(0, 0, 0, 1);
  align-self: stretch;
  margin-top: auto;
  margin-bottom: auto;
`; */

export default BreadcrumbNav;
