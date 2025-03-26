import React, { useState } from 'react';
import styled from 'styled-components';
import { ProductCard } from './ProductCard';
import { GalleryControls } from './GalleryControls';

const products = [
  {
    id: 1,
    name: "Yankess Snapback",
    image: "https://cdn.builder.io/api/v1/image/assets/d1df3775ad2c4bfbbcb6cc50e4ccaf24/679cb80d99e284d5cc3f00b3189b9e87ecf9818de82ed010d1a33ed73bb009ff?apiKey=d1df3775ad2c4bfbbcb6cc50e4ccaf24&",
    price: 40.50,
    storeCount: 3
  },
  {
    id: 2,
    name: "Tech-fleece Jacket",
    image: "https://cdn.builder.io/api/v1/image/assets/d1df3775ad2c4bfbbcb6cc50e4ccaf24/c1b7cbff8c061a7035c242bd568f1513f235d363680c53da2c1e44b203301789?apiKey=d1df3775ad2c4bfbbcb6cc50e4ccaf24&",
    price: 24.00,
    storeCount: 2
  },
  {
    id: 3,
    name: "Cowskin Female Shoe",
    image: "https://cdn.builder.io/api/v1/image/assets/d1df3775ad2c4bfbbcb6cc50e4ccaf24/9ec3e4d9f576e9fc8a6bc11bc08414b74add243a110fbc271a902e470985d681?apiKey=d1df3775ad2c4bfbbcb6cc50e4ccaf24&",
    price: 72.90,
    storeCount: 3
  },
  {
    id: 4,
    name: "Cowskin Travel Bag",
    image: "https://cdn.builder.io/api/v1/image/assets/d1df3775ad2c4bfbbcb6cc50e4ccaf24/51e46928e4b4b67d9980e416c65f68bebe2d63b6de0a993ba2b74f9964049020?apiKey=d1df3775ad2c4bfbbcb6cc50e4ccaf24&",
    price: 99.99,
    storeCount: 2
  },
  {
    id: 5,
    name: "Dr Martens Green Leather",
    image: "https://cdn.builder.io/api/v1/image/assets/d1df3775ad2c4bfbbcb6cc50e4ccaf24/735e5f859edf59ec9bc9eff797994a973b629baf84c9d5fb20e92126b14d9735?apiKey=d1df3775ad2c4bfbbcb6cc50e4ccaf24&",
    price: 140.50,
    storeCount: 3
  },
  {
    id: 6,
    name: "Cartiers Tank Watch",
    image: "https://cdn.builder.io/api/v1/image/assets/d1df3775ad2c4bfbbcb6cc50e4ccaf24/2f1cb25f6da2d03de25dd1b3783b9a13c481fc43187bd6e0299a7ad21b702b74?apiKey=d1df3775ad2c4bfbbcb6cc50e4ccaf24&",
    price: 400.00,
    storeCount: 2
  },
  {
    id: 7,
    name: "Yankess Snapback",
    image: "https://cdn.builder.io/api/v1/image/assets/d1df3775ad2c4bfbbcb6cc50e4ccaf24/679cb80d99e284d5cc3f00b3189b9e87ecf9818de82ed010d1a33ed73bb009ff?apiKey=d1df3775ad2c4bfbbcb6cc50e4ccaf24&",
    price: 40.50,
    storeCount: 3
  },
  {
    id: 8,
    name: "Tech-fleece Jacket",
    image: "https://cdn.builder.io/api/v1/image/assets/d1df3775ad2c4bfbbcb6cc50e4ccaf24/c1b7cbff8c061a7035c242bd568f1513f235d363680c53da2c1e44b203301789?apiKey=d1df3775ad2c4bfbbcb6cc50e4ccaf24&",
    price: 24.00,
    storeCount: 2
  },
  {
    id: 9,
    name: "Cowskin Female Shoe",
    image: "https://cdn.builder.io/api/v1/image/assets/d1df3775ad2c4bfbbcb6cc50e4ccaf24/9ec3e4d9f576e9fc8a6bc11bc08414b74add243a110fbc271a902e470985d681?apiKey=d1df3775ad2c4bfbbcb6cc50e4ccaf24&",
    price: 72.90,
    storeCount: 3
  },
  {
    id: 10,
    name: "Cowskin Travel Bag",
    image: "https://cdn.builder.io/api/v1/image/assets/d1df3775ad2c4bfbbcb6cc50e4ccaf24/51e46928e4b4b67d9980e416c65f68bebe2d63b6de0a993ba2b74f9964049020?apiKey=d1df3775ad2c4bfbbcb6cc50e4ccaf24&",
    price: 99.99,
    storeCount: 2
  },
  {
    id: 11,
    name: "Dr Martens Green Leather",
    image: "https://cdn.builder.io/api/v1/image/assets/d1df3775ad2c4bfbbcb6cc50e4ccaf24/735e5f859edf59ec9bc9eff797994a973b629baf84c9d5fb20e92126b14d9735?apiKey=d1df3775ad2c4bfbbcb6cc50e4ccaf24&",
    price: 140.50,
    storeCount: 3
  }
];

export function ProductGallery({ title }) {
  return (
    <GalleryContainer>
      <GalleryHeader>
        <GalleryTitle>{title}</GalleryTitle>
      </GalleryHeader>
      <ProductsGrid>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </ProductsGrid>
    </GalleryContainer>
  );
}

const GalleryContainer = styled.section`
  width: 100%;
  max-width: 95%;
  margin: 40px auto;
`;

const GalleryHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

const GalleryTitle = styled.h2`
  color: rgba(0, 0, 0, 1);
  font: 600 25px Inter, sans-serif;
  margin: 0;
  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const ProductsGrid = styled.div`
  display: flex;
  gap: 12px;
  overflow-x: auto;
  white-space: nowrap;
  padding-bottom: 10px;

  & > * {
    flex: 0 0 auto;
  }

  /* Hide scrollbar for WebKit browsers */
  &::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge and Firefox */
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
`;