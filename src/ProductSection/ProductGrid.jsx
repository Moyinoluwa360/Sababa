import * as React from "react";
import styled from "styled-components";
import ProductCard from "./ProductCard.jsx";

export default function ProductGrid(props) {
  console.debug(props.productsDatas)
  return (
    <GridWrapper>
      <GridContainer>
        {props.productsDatas.map((product, index) => (
          <GridItem key={index}>
            <ProductCard product = {product} />
          </GridItem>
        ))}
      </GridContainer>
    </GridWrapper>
  );
}

const GridWrapper = styled.section`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  width: 80%;

  @media (max-width: 991px) {
    grid-template-columns: 1fr;
  }
`;

const GridItem = styled.div`
  display: flex;
  flex-direction: column;
`;