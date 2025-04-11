import React from 'react'
import { Header } from '../Header/Header'
import Footer from '../Footer'
import { Outlet } from 'react-router-dom'

function GeneralLayout() {
  return (
    <>
        <Header/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default GeneralLayout
