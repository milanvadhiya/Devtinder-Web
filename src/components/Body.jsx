import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const Body = () => {
  return (
    <div className="flex flex-col min-h-screen bg-base-100">
       <main className="flex-grow">
         <Navbar/>
        <Outlet/>
       </main>
        <Footer/>
    </div>
  )
}

export default Body