import * as React from "react";
import styled from "styled-components";
import ProductCard from "./ProductCard.jsx";

export default function ProductGrid(props) {
  return (
    <Wrapper>
      {props.productsDatas.map((product, index) => (
          <ProductCard key={product.id || index} product={product} />
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
  gap: 12px;
  padding-left: 5px;
  padding-right: 5px;  
  @media (max-width: 480px){
    gap: 12px;
  }
`;

