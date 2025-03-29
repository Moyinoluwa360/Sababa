import React from 'react';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { SearchSection } from './SearchSection';
import ProductGrid from './ProductGrid';
//import { Pagination } from './Pagination';

export const ProductSection = () => {
  const [productName, setProductName] = useState("shoe")
  const [productsDatas, setProductsData] = useState([])
  
  useEffect(()=>{
    async function getproduct() {
      const url = `https://real-time-product-search.p.rapidapi.com/search-v2?q=${productName}&limit=18`;
      const options = {
          method: 'GET',
          headers: {
              'x-rapidapi-key': 'fc9b8e12camshdd051ab15996633p143913jsne1cb645c820d',
              'x-rapidapi-host': 'real-time-product-search.p.rapidapi.com'
          }
      };
  
      try {
          const response = await fetch(url, options);
          const result = await response.json();
          setProductsData(result.data.products)
      } catch (error) {
          console.error(error);
      }
     }
     getproduct()
  },[productName])
  console.log(productsDatas)
  return (
    <MainContent>
      <SectionTitle>{productName}</SectionTitle>
      <SearchSection setProductName = {setProductName} />
      <ProductGrid productsDatas = {productsDatas} />
    </MainContent>
  );
};

const MainContent = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 0;
`;

const SectionTitle = styled.h1`
  text-align: center;
  margin-bottom: 24px;
  font: 600 32px Inter, sans-serif;

`;