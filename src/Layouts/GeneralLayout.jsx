import React from 'react'
import { Header } from '../pages/Header/Header'
import Footer from '../components/Footer'
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
