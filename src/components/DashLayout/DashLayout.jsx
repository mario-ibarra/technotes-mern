import React from 'react'
import { Outlet } from 'react-router-dom'
import DashHeader from '../DahsHeader/DashHeader'
import DashFooter from '../DashFooter/DashFooter'

const DashLayout = () => {
  return (
    <React.Fragment>
        <DashHeader />
      <div className="dash-container">
        <Outlet />
      </div>
      <DashFooter />
    </React.Fragment>
  )
}

export default DashLayout
