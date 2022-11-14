import React from 'react'
import { Routes, Route, Outlet } from 'react-router-dom'

import PageNotFound from '../../components/layouts/PageNotFound'
import Page from '../../pages'
import BondEdit from '../../pages/bond-edit'
import Commission from '../../pages/commission'
import Invoice from '../../pages/invoice'
import OutputFile from '../../pages/output-file'
import Report from '../../pages/report'
import Transactions from '../../pages/transactions'

const NeedToLogin = () => {
  return (
    <div>
      <span className="text-5xl">You need to login now!</span>
    </div>
  )
}

const ProtectedRoute = ({ isAllowed = false, children = null }: any) => {
  if (!isAllowed) {
    return <NeedToLogin />
  }

  return children ? children : <Outlet />
}

const user = { id: 'a', name: 'robin', permissions: ['analyze'], roles: ['admin'] }

const RouterOutlet = () => {
  return (
    <Routes>
      <Route element={<Page />}>
        <Route element={<ProtectedRoute isAllowed={!!user} />}>
          <Route index element={<Report />} />
          <Route path="report" element={<Report />} />
          <Route path="bond-edit" element={<BondEdit />} />
          <Route path="invoice" element={<Invoice />} />
          <Route path="commission" element={<Commission />} />
          <Route path="transactions" element={<Transactions />} />
          <Route path="output-file" element={<OutputFile />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  )
}

export default RouterOutlet
