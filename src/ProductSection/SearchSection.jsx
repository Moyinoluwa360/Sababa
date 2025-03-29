import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';

const filterButtons = [
  { id: 1, text: 'All', active: true },
  { id: 2, text: 'Casual' },
  { id: 3, text: 'Formal' },
  { id: 4, text: 'Sandals' },
  { id: 5, text: 'Boots' },
  { id: 6, text: 'Thrifts' }
];

export const SearchSection = (props) => {
  const [searchItem, setSearchItem] = useState("")
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      props.setProductName(searchItem);
      event.target.value = ""
    }
  };
  return (
    <SearchWrapper>
      <SearchInput 
        type="search" 
        placeholder="Search products..."
        onChange={(e)=> setSearchItem(e.target.value)}
        onKeyDown={handleKeyDown}
        aria-label="Search products"
      />
      <FilterButtons>
        {filterButtons.map(button => (
          <FilterButton 
            key={button.id}
            $active={button.active}
            tabIndex="0"
          >
            {button.text}
          </FilterButton>
        ))}
      </FilterButtons>
    </SearchWrapper>
  );
};

const SearchWrapper = styled.div`
  width: 100%;
  height: 141px;
  display: flex;
  flex-direction: column;
  @media (max-width: 520px){
    padding-left:16px;
    padding-right: 16px;
    height: 100px;
  }
`;

const SearchInput = styled.input`
  border-radius: 16px;
  height: 52px;
  width: 488px;
  margin-bottom: 16px;
  background-color: rgba(0, 0, 0, 0.05);
  border: none;
  padding: 0 20px;
  font: 500 16px Inter, sans-serif;
  align-self: center;
  @media (max-width: 520px){
    width: 100%;
    font-size: 12px;
    padding-left:16px;
    padding-right: 16px;
    height: 37px;
    border-radius: 8px;
  }
`;

const FilterButtons = styled.div`
  display: flex;
  gap: 16px;
  width: 100%;
  justify-content: center;
  @media (max-width: 430px){
    justify-content: flex-start;
    gap: 8px;
    overflow-x: auto;
    &::-webkit-scrollbar {
    display: none;
    }
    
  /* Hide scrollbar for IE, Edge and Firefox */
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;
  }
`;

const FilterButton = styled.button`
  padding: 8px 12px;
  border-radius: 4px;
  color: #545454;
  border: 1px solid rgba(0, 0, 0, 0.2);
  background: ${props => props.$active ? '#f0f0f0' : 'none'};
  cursor: pointer;
  transition: all 0.2s;
  font: 600 20px Inter, sans-serif;
  &:hover {
    background-color: #f0f0f0;
  }
  @media (max-width: 640px){
    font-size: 12px;
    height: 32px;
  }
`;