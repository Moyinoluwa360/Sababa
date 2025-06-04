import * as React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export function MenuLink({ title, setIsHovered }) {
  return (
    <LinkContainer>
      <LinkIndicator />
      {
        title === "All Outfits" ? (
          <Link to={"alloutfits"} style={{ textDecoration: "none", color: "#545454" }}>
            <LinkText onClick={()=>{setIsHovered(false)}}>{title}</LinkText>
          </Link>
        ) : (<LinkText>{title}</LinkText>)
      }
    </LinkContainer>
  );
}

const LinkContainer = styled.a`
  display: flex;
  align-items: center;
  gap: 12px;
  color: #545454;
  text-decoration: none;
  cursor: pointer;
  font-size: 16px;
  
  &:hover {
    text-decoration: underline;
  }
`;

const LinkIndicator = styled.div`
  border-radius: 8px;
  background-color: #545454;
  align-self: stretch;
  display: flex;
  width: 8px;
  height: 8px;
  margin: auto 0;
`;

const LinkText = styled.span`
  align-self: stretch;
  margin: auto 0;
  white-space: nowrap;
  font-size: 20px;
  
  @media (max-width: 991px) {
    white-space: initial;
  }
`;