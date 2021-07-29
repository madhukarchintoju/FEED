import React from 'react'
import './myToolsMainComp.css'
import ServicesNavbar from '../../ServicesNavbar/ServicesNavbar.js'
import SideNavBar from '../../sideNavBar/sideNavBar'
import { Redirect, Route, Switch } from 'react-router'
import MyToolsHome from '../myToolsHome/myToolsHome'
import MyToolsFpo from '../myToolsProducts/myToolsFpo/myToolsFpo'
import MyToolsFarmer from '../myToolsProducts/myToolsFarmer/myToolsFarmer'
import MyToolsMsme from '../myToolsProducts/myToolsMsme/myToolsMsme'
import MyToolsStudent from '../myToolsProducts/myToolsStudent/myToolsStudent'
import MyToolsExports from '../myToolsProducts/myToolsExports/myToolsExports'

export default function MyToolsMainComp() {
  const navData = [
    {
      name: 'FPO',
      icon: 'fa fa-address-card',
      path: '/mytools/fpo',
    },
    {
      name: 'FARMER',
      icon: 'fa fa-plus-circle',
      path: '/mytools/farmer',
    },
    {
      name: 'MSME',
      icon: 'fa fa-address-card',
      path: '/mytools/msme',
    },
    {
      name: 'STUDENT',
      icon: 'fa fa-address-card',
      path: '/mytools/student',
    },
    {
      name: 'EXPORTS',
      icon: 'fa fa-address-card',
      path: '/mytools/exports',
    },
  ]
  return (
    <>
      <ServicesNavbar></ServicesNavbar>
      <div className="row m-0">
        <SideNavBar
          className="col"
          data={navData}
          bgColor="black"
          textColor="white"
          serviceTitle="MY TOOLS"
        ></SideNavBar>
        <div className="col-lg p-0">
          <Switch>
            <Route path="/mytools/home" component={MyToolsHome}></Route>
            <Route path="/mytools/fpo" component={MyToolsFpo}></Route>
            <Route path="/mytools/farmer" component={MyToolsFarmer}></Route>
            <Route path="/mytools/msme" component={MyToolsMsme}></Route>
            <Route path="/mytools/student" component={MyToolsStudent}></Route>
            <Route path="/mytools/exports" component={MyToolsExports}></Route>
            <Redirect to="/mytools/home"></Redirect>
          </Switch>
        </div>
      </div>
    </>
  )
}
