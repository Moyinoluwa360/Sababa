import React from 'react'
import { Header } from '../Header/Header'
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import ProductGrid from './ProductGrid';
import Footer from '../Footer';

function SavedItems() {
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
  return (
    <>
        <Header/>
        <PageTitle>
            Saved items
        </PageTitle>
        <ProductGrid productsDatas = {productsDatas} />
        <Footer/>
    </>
  )
}

const PageTitle = styled.div`
    font-size: 20px;
    width:100%;
    text-align: center;
    margin-bottom: 20px;
    font-family: Inter;
    font-weight: 600;
`

export default SavedItems
