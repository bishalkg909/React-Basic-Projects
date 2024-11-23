import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
    {/* HERE ONLY THE OUTLET WILL CHANGE AND OTHER COMPONENTS WILL REMAIN THE SAME */}
      <Header />
      <Outlet/>
      <Footer />
    </>
  )
}

export default Layout
