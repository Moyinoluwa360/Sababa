import React, { useState } from "react";
import styled from "styled-components";
import { FiX, FiChevronDown, FiChevronUp } from "react-icons/fi";
import { Link } from "react-router-dom";

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
  a{
    text-decoration: none;
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

const Icon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 10px;
`;

const SlideInMenu = ({ open, onClose }) => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

const dropdownDivs = {
  outfits: [
    {
      type : "Casual Outfits",
      img : "/hamburger imgs/styles/casual.svg"
    },
    {
      type : "Work Outfits",
      img : "/hamburger imgs/styles/work.svg"
    },
    {
      type : "Street Outfits",
      img : "/hamburger imgs/styles/street.svg"
    },
    {
      type : "Occasion Outfits",
      img : "/hamburger imgs/styles/occasion.svg"
    },
    {
      type : "Corporate Outfit",
      img : "/hamburger imgs/styles/corporate.svg"
    },
  ],
 categories: [
  {
    type : "Hats",
    img : "/hamburger imgs/products/hats.svg"
  },
  {
    type : "Jewelries",
    img : "/hamburger imgs/products/jewellries.svg"
  },
  {
    type : "Bags",
    img : "/hamburger imgs/products/bags.svg"
  },
  {
    type : "Belts",
    img : "/hamburger imgs/products/belts.svg"
  },
  {
    type : "Pants & Shorts",
    img : "/hamburger imgs/products/pants.svg"
  },
  {
    type : "Shirts",
    img : "/hamburger imgs/products/shirts.svg"
  },
  {
    type : "Hoodies",
    img : "/hamburger imgs/products/hoodies.svg"
  },
  {
    type : "Shoes",
    img : "/hamburger imgs/products/shoes.svg"
  }
 ],
 stores : [
  {
    type : "Amazon",
    img : "/hamburger imgs/stores/amazon.svg"
  },
  {
    type : "Etsy",
    img : "/hamburger imgs/stores/etsy.svg"
  },
  {
    type : "Shein",
    img : "/hamburger imgs/stores/shein.svg"
  },
  {
    type : "Uniqlo",
    img : "/hamburger imgs/stores/uniqlo.svg"
  }
 ]
}
  return (
    <MenuContainer open={open}>
      <CloseButton onClick={onClose} />
      <Link to={"/"} onClick={onClose} ><MenuItem>Home</MenuItem></Link>
      <Link to={"alloutfits"} onClick={onClose}  ><MenuItem>All Outfits</MenuItem></Link>
      <MenuItem onClick={() => toggleDropdown("outfits")}> 
        Outfits by Style {openDropdown === "outfits" ? <FiChevronUp /> : <FiChevronDown />}
      </MenuItem>
      <DropdownContainer open={openDropdown === "outfits"}>
        {dropdownDivs.outfits.map((item) => (
          <DropdownItem key={item.type}>
            <Icon loading={"lazy"} src={item.img} />
            {item.type}
          </DropdownItem>
        ))}
      </DropdownContainer>

      <MenuItem onClick={() => toggleDropdown("categories")}> 
        Products by Categories {openDropdown === "categories" ? <FiChevronUp /> : <FiChevronDown />}
      </MenuItem>
      <DropdownContainer open={openDropdown === "categories"}>
        {dropdownDivs.categories.map((item) => (
          <DropdownItem key={item.type}>
            <Icon loading={"lazy"} src={item.img} />
            {item.type}
          </DropdownItem>
        ))}
      </DropdownContainer>

      <MenuItem onClick={() => toggleDropdown("stores")}> 
        Products by Stores {openDropdown === "stores" ? <FiChevronUp /> : <FiChevronDown />}
      </MenuItem>
      <DropdownContainer open={openDropdown === "stores"}>
        {dropdownDivs.stores.map((item) => (
          <DropdownItem key={item.type}>
            <Icon loading= {"lazy"} src={item.img} />
            {item.type}
          </DropdownItem>
        ))}
      </DropdownContainer>
      
      <Link to={"/account"} onClick={onClose}  ><MenuItem>Account</MenuItem></Link>
      <Link to={"contact"} onClick={onClose}  ><MenuItem>Contact us</MenuItem></Link>
    </MenuContainer>
  );
};

export default SlideInMenu;
