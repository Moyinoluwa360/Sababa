import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer'
import styled from 'styled-components'
import { Outlet } from 'react-router-dom'

function GeneralLayout() {
  return (
    <MainContainer>
        <Header/>
        {/* styling for this element is in index.css */}
        <div className='generalLayout'>
          <Outlet />
        </div>
        <Footer/>
    </MainContainer>
  )
}

const MainContainer = styled.div`
  background-color: #D9D9D9;
`

export default GeneralLayout
