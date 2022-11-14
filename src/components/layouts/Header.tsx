import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav className="flex justify-around h-[72px] items-center bg-[#F8F8F8]">
      <Link to="/report">Report</Link>
      <Link to="/bond-edit">Bond edit</Link>
      <Link to="/Invoice">Invoice</Link>
      <Link to="/commission">Commission</Link>
      <Link to="/transactions">Transactions</Link>
      <Link to="/output-file">Output file</Link>
    </nav>
  )
}

export default Header
