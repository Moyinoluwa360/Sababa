import * as React from "react";
import styled from "styled-components";
import { MenuLink } from "./MenuLink";

export function MenuSection({ title, items, setIsHovered }) {
  return (
    <SectionContainer>
      <SectionHeader>
        <HeaderIndicator />
        <HeaderTitle>{title}</HeaderTitle>
      </SectionHeader>
      <LinksList>
        {items.map((item, index) => (
          <MenuLink key={index} title={item.title} setIsHovered={setIsHovered} />
        ))}
      </LinksList>
    </SectionContainer>
  );
}

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
`;

const SectionHeader = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 8px;
  font-size: 22px;
  color: #000;
  justify-content: start;
`;

const HeaderIndicator = styled.div`
  border-radius: 1px;
  background-color: #000;
  align-self: stretch;
  display: flex;
  width: 18px;
  height: 4px;
  margin: auto 0;
`;

const HeaderTitle = styled.h2`
  align-self: stretch;
  margin: auto 0;
  font-size: 22px;
  font-weight: 500;
`;

const LinksList = styled.div`
  display: flex;
  margin-top: 42px;
  width: 100%;
  flex-direction: column;
  align-items: start;
  gap: 18px;
  
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;