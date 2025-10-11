import React from 'react';
import styled from 'styled-components';

const SectionContainer = styled.div`
  width: 100%;
  margin: 100px 0 0 0;
  display: flex;
  gap: 40px;
  @media (max-width: 920px) {
    margin: 48px 0 0 0;
  }
`;

const Layout = styled.div`
  display: flex;
  gap: 40px;
  width: 100%;
  height: 801px;
  border-top: 1px solid rgba(120, 124, 127, 0.30);
  border-bottom: 1px solid rgba(120, 124, 127, 0.30);
  @media (max-width: 920px) {
    flex-direction: column;
    height: auto;
    gap: 24px;
  }
`;

const OutfitImage = styled.div`
  width: 720px;
  height: 100%;
  img{
    height: 100%;
    width: 100%;
  }
  @media (max-width: 920px) {
    width: 100%;
    height: 801px;
  }
  @media (max-width: 480px) {
    height: 430px;
  }
`;

const ShopContent = styled.div`
  padding-top: 32px;
  @media (max-width: 920px) {
    padding-top: 0px;
  }
`;

const ShopTitle = styled.h2`
  color: #1C1C1C;
  font-family: 'SF Pro Rounded', -apple-system, BlinkMacSystemFont, Roboto, Helvetica, sans-serif;
  font-weight: 600;
  line-height: normal;
  font-size: 24px;
  margin-bottom: 28px;
  @media (max-width: 920px) {
    font-size: 20px;
    padding-left: 16px;
  }
`;

const ProductList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media (max-width: 920px) {
    flex-direction: row;
    gap: 12px;
    padding-bottom: 10px;
    overflow-x: scroll;
  }
`;

const ProductItem = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  @media (max-width: 920px) {
    flex-direction: column;
    gap: 12px;
    min-width: 172px;
    height: 212px;
  }
`;

const ProductImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 12px;
  object-fit: cover;
  @media (max-width: 920px) {
    width: 100%;
    height: 160px;
  }
`;

const ProductInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 40px;
  @media (max-width: 920px) {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const ProductName = styled.h3`
  color: #1C1C1C;
  font-family: 'SF Pro Rounded', -apple-system, BlinkMacSystemFont, Roboto, Helvetica, sans-serif;
  font-size: 18px;
  font-weight: 500;
  line-height: normal;
  margin: 0;
  @media (max-width: 920px) {
    display: none;
  }
`;

const BuyButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: 1.5px solid #1C1C1C;
  background: transparent;
  color: #1C1C1C;
  font-family: 'SF Pro Rounded', -apple-system, BlinkMacSystemFont, Roboto, Helvetica, sans-serif;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #1C1C1C;
    color: white;
  }
  @media (max-width: 920px) {
    width: 90%;
    height: 41px;
  }
`;

const products = [
  {
    name: 'Prada Jacket',
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/4e58884203546e1511c3dfd1df7095e9f66c9fa3?width=240',
    store: 'Prada'
  },
  {
    name: 'Ash Washed Denim Pants',
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/c84d5c66ee1fd39330a1a29851a741dc420a392f?width=240',
    store: 'Asos'
  },
  {
    name: 'Blue Bandana',
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/e1d760897d6356b8f050b083c84d5411b9643706?width=240',
    store: 'Ebay'
  },
  {
    name: 'Our Legacy Camion Loafers',
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/1cd65eb57d9948c5dc25d42365f8a288474e1366?width=240',
    store: 'Amazon'
  },
  {
    name: 'Sunglasses',
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/9402d4d52b1d1544c79eaf848b9baa1966e810aa?width=240',
    store: 'Amazon'
  }
];

function ShopSection() {
  return (
    <SectionContainer>
      <Layout>
        <OutfitImage>
          <img src='/homeFit.jpg' alt='home page full fit'/>
        </OutfitImage>

        <ShopContent>
          <ShopTitle>Shop Item in this Look</ShopTitle>

          <ProductList>
            {products.map((product, index) => (
              <ProductItem key={index}>
                <ProductImage src={product.image} alt={product.name} />
                <ProductInfo>
                  <ProductName>{product.name}</ProductName>
                  <BuyButton>Buy from {product.store}</BuyButton>
                </ProductInfo>
              </ProductItem>
            ))}
          </ProductList>
        </ShopContent>
      </Layout>
    </SectionContainer>
  );
}

export default ShopSection;
