import React from 'react'
import { Header } from '../pages/Header/Header'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'

function GeneralLayout() {
  return (
    <>
        <Header/>
        {/* styling for this element is in index.css */}
        <div className='generalLayout'>
          <Outlet />
        </div>
        <Footer/>
    </>
  )
}

export default GeneralLayout
