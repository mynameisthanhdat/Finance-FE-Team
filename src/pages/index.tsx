import React from 'react'
import { Outlet } from 'react-router-dom'

import Footer from '../components/layouts/Footer'
import Header from '../components/layouts/Header'

const Page = () => {
  return (
    <div className="bg-neutral-8 flex flex-col h-[100vh] max-w-[1440px] m-auto overflow-auto">
      <Header />
      <div className="flex-1 bg-violet-500 px-20">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default Page
