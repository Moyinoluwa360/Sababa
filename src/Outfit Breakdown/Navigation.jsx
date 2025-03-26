"use client";
import React from "react";
import styled from "styled-components";

export function Navigation() {
  return (
    <NavSection>
      <BreadcrumbNav>
        <NavLink>Home</NavLink>
        <Separator
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/4d257a64c4fd431196f0bd5355e29fdb/0c050b4fac73f3abab8e7ab7fabe9a73a8a3555807e34010ed93561d489ffcb3"
          alt=""
        />
        <NavLink>All Outfits</NavLink>
        <Separator
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/4d257a64c4fd431196f0bd5355e29fdb/0c050b4fac73f3abab8e7ab7fabe9a73a8a3555807e34010ed93561d489ffcb3"
          alt=""
        />
        <NavLink>Outfit Of The Day 100</NavLink>
      </BreadcrumbNav>
      <PageTitle>Outfit Of The Day 100</PageTitle>
    </NavSection>
  );
}

const NavSection = styled.section`
  display: flex;
  margin: 24px 0 0 40px;
  width: 847px;
  max-width: 100%;
  flex-direction: column;
  font-family:
    Inter,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  color: #000000;
`;

const BreadcrumbNav = styled.nav`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  font-weight: 500;
`;

const NavLink = styled.a`
  cursor: pointer;
`;

const Separator = styled.img`
  aspect-ratio: 0.57;
  object-fit: contain;
  width: 4px;
`;

const PageTitle = styled.h1`
  font-size: 32px;
  font-weight: 600;
  align-self: end;
  margin-top: 21px;
`;
