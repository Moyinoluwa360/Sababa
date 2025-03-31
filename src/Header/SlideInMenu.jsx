import React, { useState } from "react";
import styled from "styled-components";
import { FiX, FiChevronDown, FiChevronUp } from "react-icons/fi";

const MenuContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: white;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  transition: transform 0.3s ease-in-out;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  padding: 20px;
  padding-top: 80px;
  @media (max-width: 480px) {
    padding-top: 60px;
  }
`;

const CloseButton = styled(FiX)`
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 30px;
  cursor: pointer;
  @media (max-width: 480px) {
    font-size: 21px;
  }
`;

const MenuItem = styled.div`
  padding: 15px;
  font-size: 18px;
  font-weight: 600;
  font-family: Inter;
  color: #1C1C1C;
  border-bottom: 1px solid lightgray;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  @media (max-width: 480px) {
    font-size: 14px;
    padding-left: 0%;
    padding-right: 0%;
  }
  @media (max-width: 300px) {
    font-size: 12px;
  }
`;

const DropdownContainer = styled.div`
  display: ${({ open }) => (open ? "block" : "none")};
  padding-left: 20px;
`;

const DropdownItem = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0;
  font-size: 16px;
  font-family: Inter;
  @media (max-width: 480px) {
    font-size: 13px;
    padding-left: 0%;
    padding-right: 0%;
  }
  @media (max-width: 300px) {
    font-size: 11px;
  }
`;

const IconPlaceholder = styled.div`
  width: 24px;
  height: 24px;
  background: lightgray;
  margin-right: 10px;
`;

const SlideInMenu = ({ open, onClose }) => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <MenuContainer open={open}>
      <CloseButton onClick={onClose} />
      <MenuItem>Home</MenuItem>
      <MenuItem>All Outfits</MenuItem>
      <MenuItem onClick={() => toggleDropdown("outfits")}> 
        Outfits by Style {openDropdown === "outfits" ? <FiChevronUp /> : <FiChevronDown />}
      </MenuItem>
      <DropdownContainer open={openDropdown === "outfits"}>
        {["Casual Outfits", "Work Outfits", "Street Outfits", "Occasion Outfits", "Corporate Outfit"].map((item) => (
          <DropdownItem key={item}>
            <IconPlaceholder />
            {item}
          </DropdownItem>
        ))}
      </DropdownContainer>

      <MenuItem onClick={() => toggleDropdown("categories")}> 
        Products by Categories {openDropdown === "categories" ? <FiChevronUp /> : <FiChevronDown />}
      </MenuItem>
      <DropdownContainer open={openDropdown === "categories"}>
        {["Hats", "Jewelries", "Bags", "Belts", "Pants & Shorts", "Shirts", "Hoodies", "Shoes"].map((item) => (
          <DropdownItem key={item}>
            <IconPlaceholder />
            {item}
          </DropdownItem>
        ))}
      </DropdownContainer>

      <MenuItem onClick={() => toggleDropdown("stores")}> 
        Products by Stores {openDropdown === "stores" ? <FiChevronUp /> : <FiChevronDown />}
      </MenuItem>
      <DropdownContainer open={openDropdown === "stores"}>
        {["Amazon", "Etsy", "Shein", "Uniqlo"].map((item) => (
          <DropdownItem key={item}>
            <IconPlaceholder />
            {item}
          </DropdownItem>
        ))}
      </DropdownContainer>
      
      <MenuItem>FAQs</MenuItem>
      <MenuItem>Contact us</MenuItem>
    </MenuContainer>
  );
};

export default SlideInMenu;
