import React from 'react'
import { Header } from './Header/Header'
import { ProductSection } from './productSection/ProductSection'
import Footer from '../components/Footer'
import styled from 'styled-components'
function StaticPageDiv() {
  return (
    <Page>
        <Header/>
        <ProductSection/>
        <Footer/>
    </Page>
  )
}


const Page = styled.div`
  background-color: rgba(252, 252, 252, 1);
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;
export default StaticPageDiv
