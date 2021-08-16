import React from 'react'
import './myFpoMain.css'
import { useHistory } from 'react-router-dom'
import { Grid, Button, Icon, Avatar, makeStyles } from '@material-ui/core'
import ServicesNavbar from '../../ServicesNavbar/ServicesNavbar.js'
import SideNavBar from '../../sideNavBar/sideNavBar'
import { Route, Switch, Redirect } from 'react-router-dom'
import AboutFpo from '../myFpoList/aboutFpo/aboutFpo'
import MyFpoHome from '../myFpoHome/myFpoHome'
import FpoAccount from '../myFpoList/fpoAccount/fpoAccount'
import FpoAgmBoard from '../myFpoList/fpoAgmBoard/fpoAgmBoard'
import FpoBusinessPlan from '../myFpoList/fpoBusinessPlan/fpoBusinessPlan'
import FpoComplainces from '../myFpoList/fpoComplainces/fpoComplainces'
import FpoConnect from '../myFpoList/fpoConnect/fpoConnect'
import FpoLoanSchemes from '../myFpoList/fpoLoanSchemes/fpoLoanSchemes'
import StatutoryRegistration from '../myFpoList/fpoComplainces/statutoryRegistration/statutoryRegistration'
import LegalCompliances from '../myFpoList/fpoComplainces/legalCompliances/legalCompliances'
import AnnualCompliances from '../myFpoList/fpoComplainces/annualCompliances/annualCompliances'
import CreateProduct from '../myFpoList/fpoAccount/createProduct/createProduct'
import SalesRegistry from '../myFpoList/fpoAccount/salesRegister/salesRegister'
import WidgetsBar from '../../widgetsBar/widgetsBar'
import CreateVendor from '../myFpoList/fpoAccount/createVendor/createVendor'
import FpoReports from '../myFpoList/fpoReports/fpoReports'
import FpoCapacityBuilding from '../myFpoList/fpoCapacityBuilding/fpoCapacityBuilding'
import ShareCapitalRegistry from '../myFpoList/fpoAccount/shareCapitalRegistry/shareCapitalRegistry'
import PurchaseRegistry from '../myFpoList/fpoAccount/purchaseRegistry/purchaseRegistry'
import StockRegistry from '../myFpoList/fpoAccount/stockRegistry/stockRegistry'
import BankRegistry from '../myFpoList/fpoAccount/bankRegistry/bankRegistry'
import CashbookRegistry from '../myFpoList/fpoAccount/cashbookRegistry/cashbookRegistry'
import LedgerRegistry from '../myFpoList/fpoAccount/ledgerRegistry/ledgerRegistry'
import Reports from '../myFpoList/fpoAccount/reports/reports'

export default function MyFpoMain(props) {
  const background = {
    '/myfpo/home': {
      // backgroundColor: '#f7f1dd',
    },
    '/myfpo/aboutfpo': {
      backgroundColor: '',
    },
    '/myfpo/fpoaccount': {
      backgroundImage: `URL("/assets/my-fpo/accounts/myfpoaccountsbg.png")`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
    },
    '/myfpo/fpobusinessplan': {},
    '/myfpo/fpocomplainces': {
      backgroundImage: `URL("/assets/my-fpo/compliances/home/fpo-compliances-bg.jpg")`,
      backgroundRepeat: 'no-repeat',
    },
    '/myfpo/fpocompliances/statutoryregistration': {
      backgroundImage: `URL("/assets/my-fpo/compliances/statutory/statutory-compliances-bg.jpg")`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    },
    '/myfpo/fpocompliances/legalcompliances': {
      backgroundImage: `URL("/assets/my-fpo/compliances/legal/legal-compliances-bg.jpg")`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
    },
    '/myfpo/fpocompliances/annualcompliances': {
      backgroundImage: `URL("/assets/my-fpo/compliances/annual/annual-compliances-bg.jpg")`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
    },
    '/myfpo/fpoagmboard': {
      backgroundImage: `URL("/assets/my-fpo/agmboard/agmboard.jpg")`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    },
    '/myfpo/fpoloanschemes': {},
    '/myfpo/fpoconnect': {},
  }
  const navData = [
    {
      name: 'About FPC',
      icon: 'fas fa-info-circle',
      path: '/myfpo/aboutfpo',
    },
    {
      name: 'FPC Account',
      icon: 'fas fa-calculator',
      path: '/myfpo/fpoaccount',
    },
    {
      name: 'FPC Business Plan',
      icon: 'fa fa-briefcase',
      path: '/myfpo/fpobusinessplan',
    },
    {
      name: 'Capacity Building',
      icon: 'fas fa-handshake',
      path: '/myfpo/fpocapacitybuilding',
    },
    {
      name: 'FPC Compliances',
      icon: 'fas fa-file-invoice',
      path: '/myfpo/fpocomplainces',
    },
    {
      name: 'FPC AGM & Board',
      icon: 'fas fa-users',
      path: '/myfpo/fpoagmboard',
    },
    {
      name: 'FPC Loans Schemes',
      icon: 'fas fa-university',
      path: '/myfpo/fpoloanschemes',
    },
    {
      name: 'Reports',
      icon: 'fas fa-file-pdf',
      path: '/myfpo/reports',
    },
    {
      name: 'FPC Connect',
      icon: 'fas fa-network-wired',
      path: '/myfpo/fpoconnect',
    },
  ]

  const useStyles = makeStyles((theme) => ({
    background: background[props.location.pathname],
  }))
  const classes = useStyles()
  // const widgetsBar = <WidgetsBar />
  let history = useHistory()
  return (
    <>
      <ServicesNavbar></ServicesNavbar>
      <div className={'row m-0 content-wrapper-services ' + classes.background}>
        <SideNavBar
          className="col-lg p-0 sidenavbar"
          data={navData}
          bgColor="#ffc107"
          textColor="black"
          serviceTitleBg="#d6a920"
          serviceTitle="MY FPC"
          selectedSideNavLink="linear-gradient(90deg, rgba(255,193,7,1) 17%, rgba(255,255,255,1) 67%)"
        ></SideNavBar>
        <div className="col-lg p-0 fpo-content-wrap">
          <WidgetsBar></WidgetsBar>
          {/* {widgetsBar} */}
          <Switch>
            <Route path="/myfpo/home" component={MyFpoHome}></Route>
            <Route path="/myfpo/aboutfpo" component={AboutFpo}></Route>
            <Route path="/myfpo/fpoaccount" component={FpoAccount}></Route>
            <Route path="/myfpo/fpoagmboard" component={FpoAgmBoard}></Route>
            <Route
              path="/myfpo/fpobusinessplan"
              component={FpoBusinessPlan}
            ></Route>
            <Route
              path="/myfpo/fpocomplainces"
              component={FpoComplainces}
            ></Route>
            <Route
              path="/myfpo/fpocapacitybuilding"
              component={FpoCapacityBuilding}
            ></Route>
            <Route path="/myfpo/fpoconnect" component={FpoConnect}></Route>
            <Route path="/myfpo/reports" component={FpoReports}></Route>
            <Route
              path="/myfpo/fpoloanschemes"
              component={FpoLoanSchemes}
            ></Route>
            <Route
              path="/myfpo/fpocompliances/statutoryregistration"
              component={StatutoryRegistration}
            ></Route>
            <Route
              path="/myfpo/fpocompliances/legalcompliances"
              component={LegalCompliances}
            ></Route>
            <Route
              path="/myfpo/fpocompliances/annualcompliances"
              component={AnnualCompliances}
            ></Route>
            <Route
              path="/myfpo/createProduct"
              component={CreateProduct}
            ></Route>
            <Route path="/myfpo/createvendor" component={CreateVendor}></Route>
            <Route
              path="/myfpo/salesregister"
              component={SalesRegistry}
            ></Route>
            <Route
              path="/myfpo/sharecapitalregistry"
              component={ShareCapitalRegistry}
            ></Route>
            <Route
              path="/myfpo/purchaseregistry"
              component={PurchaseRegistry}
            ></Route>
            <Route
              path="/myfpo/stockregistry"
              component={StockRegistry}
            ></Route>
            <Route path="/myfpo/bankregistry" component={BankRegistry}></Route>
            <Route
              path="/myfpo/cashbookregistry"
              component={CashbookRegistry}
            ></Route>
            <Route
              path="/myfpo/ledgerregistry"
              component={LedgerRegistry}
            ></Route>
            <Route path="/myfpo/fporeports" component={Reports}></Route>
            <Redirect to="/myfpo/home" />
          </Switch>
        </div>
      </div>
    </>
  )
}
