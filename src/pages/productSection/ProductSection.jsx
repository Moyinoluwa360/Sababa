import React from 'react';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SearchSection } from './SearchSection';
import ProductGrid from './ProductGrid';
import APITest from '../../components/APITest';
import { searchAndFetchProducts, setFilters, clearFilters } from '../../redux/slices/productSlice';

export const ProductSection = () => {
  const dispatch = useDispatch();
  const { products, searchLoading, searchError, filters } = useSelector(state => state.products);
  const [searchQuery, setSearchQuery] = useState("");

  // Initial load with trending products
  useEffect(() => {
    dispatch(searchAndFetchProducts({ 
      searchQuery: "clothing", 
      filters: { limit: 20 } 
    }));
  }, [dispatch]);

  const handleSearch = (query) => {
    setSearchQuery(query);
    dispatch(searchAndFetchProducts({ searchQuery: query, filters }));
  };

  const handleFilterChange = (newFilters) => {
    const updatedFilters = { ...filters, ...newFilters };
    dispatch(setFilters(updatedFilters));
    dispatch(searchAndFetchProducts({ searchQuery, filters: updatedFilters }));
  };

  const handleClearFilters = () => {
    dispatch(clearFilters());
    dispatch(searchAndFetchProducts({ 
      searchQuery: "clothing", 
      filters: { limit: 20 } 
    }));
  };

  return (
    <MainContent>
      <SectionTitle>
        {searchQuery ? `Search Results for "${searchQuery}"` : "Fashion Products"}
      </SectionTitle>
      
      {/* Temporary API Test Component */}
      <APITest />
      
      <SearchSection 
        onSearch={handleSearch}
        onFilterChange={handleFilterChange}
        onClearFilters={handleClearFilters}
        currentFilters={filters}
        isLoading={searchLoading}
      />
      
      {searchLoading && (
        <LoadingMessage>Searching for products...</LoadingMessage>
      )}
      
      {searchError && (
        <ErrorMessage>Error: {searchError}</ErrorMessage>
      )}
      
      {!searchLoading && !searchError && products.length === 0 && (
        <NoResultsMessage>
          No products found. Try a different search term or category.
        </NoResultsMessage>
      )}
      
      <ProductGrid productsDatas={products} />
    </MainContent>
  );
};

const MainContent = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 0;
  @media (max-width: 480px){
    padding: 0 0;
  }
`;

const SectionTitle = styled.h1`
  text-align: center;
  margin-bottom: 24px;
  font: 600 32px Inter, sans-serif;
  @media (max-width: 480px){
    font-size: 16px;
  }
`;

const LoadingMessage = styled.div`
  text-align: center;
  padding: 20px;
  font-size: 16px;
  color: #666;
`;

const ErrorMessage = styled.div`
  text-align: center;
  padding: 20px;
  font-size: 16px;
  color: #d32f2f;
  background-color: #ffebee;
  border-radius: 8px;
  margin: 10px 0;
`;

const NoResultsMessage = styled.div`
  text-align: center;
  padding: 20px;
  font-size: 16px;
  color: #666;
  font-style: italic;
`;