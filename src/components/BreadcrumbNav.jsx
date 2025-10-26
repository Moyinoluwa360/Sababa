import React from "react";
import styled from "styled-components";
import { useLocation, Link, useNavigate } from "react-router-dom";
import useWindowWidth from "./useWindowWidth";

const BreadcrumbNav = () => {
  const navigate = useNavigate();
  const location = useLocation();
  let currentLink = ""
  const crumb = location.pathname.split("/").filter(crumb => crumb !== "")
  const splicedCrumb = crumb.toSpliced(-1)
        .map(crumb => {
          currentLink += `/${crumb}`
          return (
            <NavLink key={crumb}>
              <Link className="Link" style={{paddingRight:"5px", textDecoration:"none", color: "#787C7F"}} to={currentLink}>{crumb.charAt(0).toUpperCase() + crumb.slice(1)}</Link>
              <Separator
                src="https://cdn.builder.io/api/v1/image/assets/08bf16d58b0d4aa28fefd3a671be5059/0c050b4fac73f3abab8e7ab7fabe9a73a8a3555807e34010ed93561d489ffcb3?placeholderIfAbsent=true"
                alt="Separator"
              />
            </NavLink>
          )
        })

  return (
    <NavContainer>
      {
        useWindowWidth() > 480 ? (
          <NavigationSection>
            {splicedCrumb}
          </NavigationSection>
        ):
        (
          <div className="mobileNav" onClick={() => navigate(-1)} style={{color:"black", fontSize:"15px", fontWeight:"500"}}>
            {<img src="/lessThan.svg" alt="Back" height={"12px"} />}{" Back"}
          </div>
        )
      }
    </NavContainer>
  );
};

const NavContainer = styled.section`
  display: flex;
  padding: 0 0 0 40px;
  width: 100%;
  flex-direction: column;
  background-color: #D9D9D9;
  font-family:
    Inter,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  @media (max-width:400px){
    padding:0 0 0 14px;
  }
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

const NavLink = styled.div`
  align-self: stretch;
  margin-top: auto;
  margin-bottom: auto;
  cursor: pointer;
  .Link{
    color: black;
    :last-child{
      color: black;
    }
  }
`;

const Separator = styled.img`
  aspect-ratio: 0.57;
  object-fit: contain;
  object-position: center;
  width: 6px;
  align-self: stretch;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 5px;
  flex-shrink: 0;
  padding-top: 1px;
`;


export default BreadcrumbNav;
