import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchAndFetchProducts, setFilters, clearFilters } from '../../redux/slices/productSlice';
import { addToCart } from '../../redux/slices/cartSlice';
import styled from 'styled-components';

const ProductList = () => {
  const dispatch = useDispatch();
  const { products, loading, error, searchLoading, searchError } = useSelector((state) => state.products);
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setLocalFilters] = useState({
    platform: '',
    category: '',
    searchQuery: ''
  });

  useEffect(() => {
    // Load initial products using searchAndFetchProducts (mock data)
    dispatch(searchAndFetchProducts({ searchQuery: '', filters: {} }));
  }, [dispatch]);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      dispatch(searchAndFetchProducts({ 
        searchQuery: searchQuery.trim(), 
        filters 
      }));
    }
  };

  const handleFilterChange = (key, value) => {
    const newFilters = { ...filters, [key]: value };
    setLocalFilters(newFilters);
    dispatch(setFilters(newFilters));
    
    // Refetch products with new filters
    dispatch(searchAndFetchProducts({ 
      searchQuery: searchQuery.trim(), 
      filters: newFilters 
    }));
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart({ product, quantity: 1 }));
  };

  const clearAllFilters = () => {
    setLocalFilters({
      platform: '',
      category: '',
      searchQuery: ''
    });
    setSearchQuery('');
    dispatch(clearFilters());
    dispatch(searchAndFetchProducts({ searchQuery: '', filters: {} }));
  };

  const filteredProducts = products.filter(product => {
    const matchesPlatform = !filters.platform || product.platform === filters.platform;
    const matchesCategory = !filters.category || product.category === filters.category;
    
    return matchesPlatform && matchesCategory;
  });

  const isLoading = loading || searchLoading;
  const hasError = error || searchError;

  return (
    <Container>
      <Header>
        <Title>Our Products</Title>
        <Subtitle>Browse products from AliExpress and Jumia</Subtitle>
      </Header>

      <SearchSection>
        <SearchForm onSubmit={handleSearch}>
          <SearchInput
            type="text"
            placeholder="Search for products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <SearchButton type="submit" disabled={searchLoading}>
            {searchLoading ? 'Searching...' : 'Search'}
          </SearchButton>
        </SearchForm>
      </SearchSection>

      <FiltersContainer>
        <FilterGroup>
          <FilterLabel>Platform:</FilterLabel>
          <FilterSelect 
            value={filters.platform} 
            onChange={(e) => handleFilterChange('platform', e.target.value)}
          >
            <option value="">All Platforms</option>
            <option value="aliexpress">AliExpress</option>
            <option value="jumia">Jumia</option>
          </FilterSelect>
        </FilterGroup>

        <FilterGroup>
          <FilterLabel>Category:</FilterLabel>
          <FilterSelect 
            value={filters.category} 
            onChange={(e) => handleFilterChange('category', e.target.value)}
          >
            <option value="">All Categories</option>
            <option value="fashion">Fashion</option>
            <option value="electronics">Electronics</option>
            <option value="home">Home & Garden</option>
            <option value="beauty">Beauty</option>
          </FilterSelect>
        </FilterGroup>

        <ClearFiltersButton onClick={clearAllFilters}>
          Clear Filters
        </ClearFiltersButton>
      </FiltersContainer>

      {hasError && (
        <ErrorContainer>
          Error: {hasError}
          <RetryButton onClick={() => dispatch(searchAndFetchProducts({ searchQuery: '', filters: {} }))}>
            Retry
          </RetryButton>
        </ErrorContainer>
      )}

      {isLoading ? (
        <LoadingContainer>
          <LoadingSpinner />
          {searchLoading ? 'Searching products...' : 'Loading products...'}
        </LoadingContainer>
      ) : (
        <>
          <ResultsInfo>
            Found {filteredProducts.length} products
            {searchQuery && ` for "${searchQuery}"`}
          </ResultsInfo>

          <ProductGrid>
            {filteredProducts.map((product) => (
              <ProductCard key={product.id}>
                <ProductImage src={product.images?.[0] || '/dummyImg/shirtDummy.svg'} alt={product.title} />
                <ProductInfo>
                  <ProductTitle>{product.title}</ProductTitle>
                  <ProductDescription>{product.description}</ProductDescription>
                  <PlatformBadge platform={product.platform}>
                    {product.platform === 'aliexpress' ? 'AliExpress' : 'Jumia'}
                  </PlatformBadge>
                  <PriceContainer>
                    <OriginalPrice>₦{product.originalPrice}</OriginalPrice>
                    <FinalPrice>₦{product.finalPrice}</FinalPrice>
                    <MarkupInfo>+15% service fee</MarkupInfo>
                  </PriceContainer>
                  <AddToCartButton onClick={() => handleAddToCart(product)}>
                    Add to Cart
                  </AddToCartButton>
                </ProductInfo>
              </ProductCard>
            ))}
          </ProductGrid>

          {filteredProducts.length === 0 && !isLoading && (
            <NoProducts>
              <NoProductsIcon>🔍</NoProductsIcon>
              <NoProductsTitle>No products found</NoProductsTitle>
              <NoProductsText>
                {searchQuery 
                  ? `No products found for "${searchQuery}". Try adjusting your search or filters.`
                  : 'No products available. Try searching for something or adjusting your filters.'
                }
              </NoProductsText>
            </NoProducts>
          )}
        </>
      )}
    </Container>
  );
};

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 30px;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 10px;
`;

const Subtitle = styled.p`
  font-size: 1.1rem;
  color: #666;
`;

const SearchSection = styled.div`
  margin-bottom: 30px;
`;

const SearchForm = styled.form`
  display: flex;
  gap: 10px;
  max-width: 600px;
  margin: 0 auto;
`;

const SearchInput = styled.input`
  flex: 1;
  padding: 15px;
  border: 2px solid #ddd;
  border-radius: 8px;
  font-size: 16px;
  
  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

const SearchButton = styled.button`
  padding: 15px 30px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;
  
  &:hover:not(:disabled) {
    background-color: #0056b3;
  }
  
  &:disabled {
    background-color: #6c757d;
    cursor: not-allowed;
  }
`;

const FiltersContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 30px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: end;
`;

const FilterGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const FilterLabel = styled.label`
  font-weight: 600;
  color: #333;
`;

const FilterSelect = styled.select`
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
`;

const ClearFiltersButton = styled.button`
  padding: 8px 16px;
  background-color: #6c757d;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  
  &:hover {
    background-color: #5a6268;
  }
`;

const ResultsInfo = styled.div`
  text-align: center;
  margin-bottom: 20px;
  color: #666;
  font-size: 1rem;
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
`;

const ProductCard = styled.div`
  border: 1px solid #eee;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.2s, box-shadow 0.2s;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const ProductInfo = styled.div`
  padding: 15px;
`;

const ProductTitle = styled.h3`
  font-size: 1.1rem;
  margin-bottom: 8px;
  color: #333;
`;

const ProductDescription = styled.p`
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 10px;
  line-height: 1.4;
`;

const PlatformBadge = styled.span`
  display: inline-block;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: 600;
  margin-bottom: 10px;
  background-color: ${props => props.platform === 'aliexpress' ? '#ff6b35' : '#f7931e'};
  color: white;
`;

const PriceContainer = styled.div`
  margin-bottom: 15px;
`;

const OriginalPrice = styled.div`
  font-size: 0.9rem;
  color: #999;
  text-decoration: line-through;
`;

const FinalPrice = styled.div`
  font-size: 1.3rem;
  font-weight: 600;
  color: #333;
`;

const MarkupInfo = styled.div`
  font-size: 0.8rem;
  color: #666;
  font-style: italic;
`;

const AddToCartButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: #0056b3;
  }
`;

const LoadingContainer = styled.div`
  text-align: center;
  padding: 50px;
  font-size: 1.2rem;
  color: #666;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const LoadingSpinner = styled.div`
  width: 40px;
  height: 40px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #007bff;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const ErrorContainer = styled.div`
  text-align: center;
  padding: 20px;
  color: #dc3545;
  font-size: 1.1rem;
  background-color: #f8d7da;
  border: 1px solid #f5c6cb;
  border-radius: 8px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const RetryButton = styled.button`
  padding: 8px 16px;
  background-color: #dc3545;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  align-self: center;
  
  &:hover {
    background-color: #c82333;
  }
`;

const NoProducts = styled.div`
  text-align: center;
  padding: 50px;
  color: #666;
`;

const NoProductsIcon = styled.div`
  font-size: 4rem;
  margin-bottom: 20px;
`;

const NoProductsTitle = styled.h3`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 10px;
`;

const NoProductsText = styled.p`
  font-size: 1rem;
  color: #666;
  max-width: 400px;
  margin: 0 auto;
`;

export default ProductList; 