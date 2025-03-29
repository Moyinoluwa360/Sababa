import * as React from "react";
import styled from "styled-components";
import ProductCard from "./ProductCard.jsx";

export default function ProductGrid(props) {
  return (
    <GridWrapper>
      <GridContainer>
        {props.productsDatas.map((product, index) => (
            <ProductCard product = {product} />
        ))}
      </GridContainer>
    </GridWrapper>
  );
}

const GridWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: fit-content;
`;

const GridContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  width: 95%;
`;
