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
  max-width: 646px;
  margin-bottom: 77px;
`;

const SearchInput = styled.input`
  border-radius: 16px;
  height: 64px;
  width: 100%;
  margin-bottom: 16px;
  background-color: rgba(0, 0, 0, 0.05);
  border: none;
  padding: 0 20px;
  font: 500 16px Inter, sans-serif;
`;

const FilterButtons = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
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
`;