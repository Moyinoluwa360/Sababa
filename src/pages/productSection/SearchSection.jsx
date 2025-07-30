import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';

const filterButtons = [
  { id: 1, text: 'All', value: '' },
  { id: 2, text: 'Casual', value: 'casual' },
  { id: 3, text: 'Formal', value: 'formal' },
  { id: 4, text: 'Sandals', value: 'sandals' },
  { id: 5, text: 'Boots', value: 'boots' },
  { id: 6, text: 'Thrifts', value: 'thrifts' }
];

const platformFilters = [
  { id: 1, text: 'All Platforms', value: '' },
  { id: 2, text: 'AliExpress', value: 'aliexpress' },
  { id: 3, text: 'Jumia', value: 'jumia' }
];

export const SearchSection = ({ 
  onSearch, 
  onFilterChange, 
  onClearFilters, 
  currentFilters = {}, 
  isLoading = false 
}) => {
  const [searchItem, setSearchItem] = useState("");

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && searchItem.trim()) {
      onSearch(searchItem.trim());
      setSearchItem("");
    }
  };

  const handleSearchClick = () => {
    if (searchItem.trim()) {
      onSearch(searchItem.trim());
      setSearchItem("");
    }
  };

  const handleCategoryFilter = (category) => {
    onFilterChange({ category });
  };

  const handlePlatformFilter = (platform) => {
    onFilterChange({ platform });
  };

  const isCategoryActive = (value) => {
    return currentFilters.category === value;
  };

  const isPlatformActive = (value) => {
    return currentFilters.platform === value;
  };

  return (
    <SearchWrapper>
      <SearchContainer>
        <SearchInput 
          type="search" 
          placeholder="Search products or browse all below..."
          value={searchItem}
          onChange={(e) => setSearchItem(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={isLoading}
          aria-label="Search products"
        />
        <SearchButton 
          onClick={handleSearchClick}
          disabled={isLoading || !searchItem.trim()}
        >
          {isLoading ? 'Searching...' : 'Search'}
        </SearchButton>
      </SearchContainer>

      <FilterSection>
        <FilterGroup>
          <FilterLabel>Categories:</FilterLabel>
          <FilterButtons>
            {filterButtons.map(button => (
              <FilterButton 
                key={button.id}
                $active={isCategoryActive(button.value)}
                onClick={() => handleCategoryFilter(button.value)}
                disabled={isLoading}
                tabIndex="0"
              >
                {button.text}
              </FilterButton>
            ))}
          </FilterButtons>
        </FilterGroup>

        <FilterGroup>
          <FilterLabel>Platforms:</FilterLabel>
          <FilterButtons>
            {platformFilters.map(button => (
              <FilterButton 
                key={button.id}
                $active={isPlatformActive(button.value)}
                onClick={() => handlePlatformFilter(button.value)}
                disabled={isLoading}
                tabIndex="0"
              >
                {button.text}
              </FilterButton>
            ))}
          </FilterButtons>
        </FilterGroup>

        {(currentFilters.category || currentFilters.platform) && (
          <ClearFiltersButton onClick={onClearFilters} disabled={isLoading}>
            Clear Filters
          </ClearFiltersButton>
        )}
      </FilterSection>
    </SearchWrapper>
  );
};

const SearchWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media (max-width: 520px){
    padding-left: 16px;
    padding-right: 16px;
  }
`;

const SearchContainer = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  @media (max-width: 520px){
    flex-direction: column;
    width: 100%;
  }
`;

const SearchInput = styled.input`
  border-radius: 16px;
  height: 52px;
  width: 400px;
  background-color: rgba(0, 0, 0, 0.05);
  border: none;
  padding: 0 20px;
  font: 500 16px Inter, sans-serif;
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
  @media (max-width: 520px){
    width: 100%;
    font-size: 12px;
    padding-left: 16px;
    padding-right: 16px;
    height: 37px;
    border-radius: 8px;
  }
`;

const SearchButton = styled.button`
  height: 52px;
  padding: 0 20px;
  border-radius: 16px;
  border: none;
  background-color: #007bff;
  color: white;
  font: 500 16px Inter, sans-serif;
  cursor: pointer;
  transition: background-color 0.2s;
  
  &:hover:not(:disabled) {
    background-color: #0056b3;
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
  
  @media (max-width: 520px){
    width: 100%;
    font-size: 12px;
    height: 37px;
    border-radius: 8px;
  }
`;

const FilterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
`;

const FilterGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const FilterLabel = styled.span`
  font: 600 14px Inter, sans-serif;
  color: #333;
`;

const FilterButtons = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
  @media (max-width: 430px){
    justify-content: flex-start;
    gap: 8px;
    overflow-x: auto;
    &::-webkit-scrollbar {
      display: none;
    }
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`;

const FilterButton = styled.button`
  padding: 8px 12px;
  border-radius: 4px;
  color: #545454;
  border: 1px solid rgba(0, 0, 0, 0.2);
  background: ${props => props.$active ? '#007bff' : 'none'};
  color: ${props => props.$active ? 'white' : '#545454'};
  cursor: pointer;
  transition: all 0.2s;
  font: 600 14px Inter, sans-serif;
  
  &:hover:not(:disabled) {
    background-color: ${props => props.$active ? '#0056b3' : '#f0f0f0'};
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
  
  @media (max-width: 640px){
    font-size: 12px;
    height: 32px;
  }
`;

const ClearFiltersButton = styled.button`
  padding: 8px 16px;
  border-radius: 4px;
  border: 1px solid #dc3545;
  background: none;
  color: #dc3545;
  cursor: pointer;
  transition: all 0.2s;
  font: 600 14px Inter, sans-serif;
  
  &:hover:not(:disabled) {
    background-color: #dc3545;
    color: white;
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;