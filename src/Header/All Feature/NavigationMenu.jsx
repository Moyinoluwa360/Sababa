import * as React from "react";
import styled from "styled-components";
import { MenuSection } from "./MenuSection";

const outfitsData = [
  { title: "All Outfits" }
];

const outfitStylesData = [
  { title: "Casual Outfits" },
  { title: "Work Outfits" },
  { title: "Street Outfits" },
  { title: "Occasion Outfits" },
  { title: "Corporate Outfits" }
];

const categoriesData = [
  { title: "Hats" },
  { title: "Jewellries" },
  { title: "Bags" },
  { title: "Belts" },
  { title: "Pants & Coat" },
  { title: "Shirts" },
  { title: "Hoodies" },
  { title: "Shoes" }
];

const storesData = [
  { title: "Amazon" },
  { title: "Uniqlo" },
  { title: "Shein" },
  { title: "Etsy" },
  { title: "About us" },
  { title: "more..." }
];

function NavigationMenu() {
  return (
    <NavigationContainer>
      <MenuWrapper>
        <MenuContent>
          <MenuSection title="Outfits" items={outfitsData} />
          <MenuSection title="Outfits by Style" items={outfitStylesData} />
          <MenuSection title="Products by Categories" items={categoriesData} />
          <MenuSection title="Products by Stores" items={storesData} />
        </MenuContent>
      </MenuWrapper>
    </NavigationContainer>
  );
}

const NavigationContainer = styled.nav`
  display: flex;
  flex-direction: row;
  width: 100vw;
  font-family: Inter, sans-serif;
  font-weight: 500;
  position: absolute;
  top: 100%;
  left: -400px;
  right: 0;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 10;
`;
const MenuWrapper = styled.div`
  background-color: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  padding: 20px 70px 76px;
  
  @media (max-width: 991px) {
    max-width: 100%;
    padding: 0 20px;
  }
`;

const MenuContent = styled.div`
  display: flex;
  align-items: start;
  gap: 100px 120px;
  justify-content: start;
  flex-wrap: wrap;
  
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

export default NavigationMenu;
