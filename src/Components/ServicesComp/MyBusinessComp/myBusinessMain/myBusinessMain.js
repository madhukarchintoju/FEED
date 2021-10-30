import React, { useState, useEffect } from 'react'
import './myBusinessMain.css'
import { Route, Switch, Redirect } from 'react-router-dom'
import MyBusinessHome from '../myBusinessHome/myBusinessHome'
import SideNavBar from '../../sideNavBar/sideNavBar'
import ServicesNavbar from '../../ServicesNavbar/ServicesNavbar'
import BusinessProfile from '../myBusinessList/businessProfile/businessProfile'
import BusinessAccount from '../myBusinessList/businessAccount/businessAccount'
import BusinessComplainceReg from '../myBusinessList/businessComplainceReg/businessComplainceReg'
import BusinessLoanSchemes from '../myBusinessList/businessLoanSchemes/businessLoanSchemes'
import BusinessMarketingSupport from '../myBusinessList/businessMarketingSupport/businessMarketingSupport'
import BusinessPlan from '../myBusinessList/businessPlan/businessPlan'
import BusinessStatutoryReg from '../myBusinessList/businessComplainceReg/businessStatutoryReg/businessStatutoryReg'
import BusinessLegal from '../myBusinessList/businessComplainceReg/businessLegal/businessLegal'
import BusinessAnnual from '../myBusinessList/businessComplainceReg/businessAnnual/businessAnnual'
import BusinessAgmBoard from '../myBusinessList/businessAgmBoard/businessAgmBoard'
import BusinessReports from '../myBusinessList/businessReports/businessReports'
import WidgetsBar from '../../widgetsBar/widgetsBar'
import BusinessConnect from '../myBusinessList/businessConnect/businessConnect'

export default function MyBusinessMain(props) {
  const navData = [
    {
      name: 'Business Profile',
      icon: 'fas fa-info-circle',
      path: '/mybusiness/businessprofile',
    },
    {
      name: 'Business Account',
      icon: 'fas fa-calculator',
      path: '/mybusiness/businessaccount',
    },
    {
      name: 'Compliances & Registration',
      icon: 'fas fa-file-invoice',
      path: '/mybusiness/businesscomplaincereg',
    },
    {
      name: 'Agm & Board',
      icon: 'fa fa-address-card',
      path: '/mybusiness/agmboard',
    },
    {
      name: 'Business Plan',
      icon: 'fas fa-sticky-note',
      path: '/mybusiness/businessplan',
    },
    {
      name: `Loans & Schemes`,
      icon: 'fas fa-university',
      path: '/mybusiness/loanschemes',
    },
    {
      name: 'Marketing Support',
      icon: 'fa fa-address-card',
      path: '/mybusiness/marketingsupport',
    },
    {
      name: 'Reports',
      icon: 'fa fa-address-card',
      path: '/mybusiness/reports',
    },
    {
      name: 'Business Connect',
      icon: 'fa fa-address-card',
      path: '/mybusiness/businessconnect',
    },
  ]
  const [name, setName] = useState('')
  useEffect(() => {
    if (props.location.pathname === '/mybusiness/home') {
      setName('Business Home')
    } else if (props.location.pathname === '/mybusiness/businessprofile') {
      setName('Business Profile')
    } else if (props.location.pathname === '/mybusiness/businessaccount') {
      setName('Business Account')
    } else if (
      props.location.pathname === '/mybusiness/businesscomplaincereg'
    ) {
      setName('Business Compliances')
    } else if (props.location.pathname === '/mybusiness/agmboard') {
      setName('Agm Board')
    } else if (props.location.pathname === '/mybusiness/businessplan') {
      setName('Business Plan')
    } else if (props.location.pathname === '/mybusiness/loanschemes') {
      setName('Business Loan Schemes')
    } else if (props.location.pathname === '/mybusiness/marketingsupport') {
      setName('Marketing Support')
    } else if (props.location.pathname === '/mybusiness/reports') {
      setName('Reports')
    } else if (props.location.pathname === '/mybusiness/businessconnect') {
      setName('Business Connect')
    }
  }, [props.location.pathname])
  // const path = props.location.pathname.slice(12);
  return (
    <>
      <ServicesNavbar></ServicesNavbar>
      <div className="row m-0">
        <SideNavBar
          className="col"
          data={navData}
          bgColor="#6739b7"
          textColor="white"
          serviceTitle="MY BUSINESS"
          selectedSideNavLink="linear-gradient(90deg, rgba(103,57,183,1) 17%, rgba(255,255,255,1) 67%)"
        ></SideNavBar>
        <div className="col p-0">
          <WidgetsBar screenTitle={name}></WidgetsBar>
          {/* <WidgetsBar /> */}
          <Switch>
            <Route path="/mybusiness/home" component={MyBusinessHome}></Route>
            <Route
              path="/mybusiness/businessprofile"
              component={BusinessProfile}
            ></Route>
            <Route
              path="/mybusiness/businessaccount"
              component={BusinessAccount}
            ></Route>
            <Route
              path="/mybusiness/businesscomplaincereg"
              component={BusinessComplainceReg}
            ></Route>
            <Route
              path="/mybusiness/statutoryreg"
              component={BusinessStatutoryReg}
            ></Route>
            <Route
              path="/mybusiness/legalcompliances"
              component={BusinessLegal}
            ></Route>
            <Route
              path="/mybusiness/annualcompliances"
              component={BusinessAnnual}
            ></Route>
            <Route
              path="/mybusiness/businessplan"
              component={BusinessPlan}
            ></Route>
            <Route
              path="/mybusiness/loanschemes"
              component={BusinessLoanSchemes}
            ></Route>
            <Route
              path="/mybusiness/marketingsupport"
              component={BusinessMarketingSupport}
            ></Route>
            <Route
              path="/mybusiness/agmboard"
              component={BusinessAgmBoard}
            ></Route>
            <Route
              path="/mybusiness/reports"
              component={BusinessReports}
            ></Route>
            <Route
              path="/mybusiness/businessconnect"
              component={BusinessConnect}
            ></Route>
            <Redirect to="/mybusiness/home"></Redirect>
          </Switch>
        </div>
      </div>
    </>
  )
}
