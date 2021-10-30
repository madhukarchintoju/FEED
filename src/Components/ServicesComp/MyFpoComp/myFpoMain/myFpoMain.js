import React, { useState, useEffect } from 'react'
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
import FpoFpcReg from '../myFpoList/fpoComplainces/statutoryRegistration/fpoFpcReg/fpoFpcReg'
import CompanyReg from '../myFpoList/fpoComplainces/statutoryRegistration/companyReg/companyReg'
import GstReg from '../myFpoList/fpoComplainces/statutoryRegistration/gstReg/gstReg'
import IecCode from '../myFpoList/fpoComplainces/statutoryRegistration/iecCode/iecCode'
import MsmeReg from '../myFpoList/fpoComplainces/statutoryRegistration/msmeReg/msmeReg'
import PanReg from '../myFpoList/fpoComplainces/statutoryRegistration/panReg/panReg'
import FssaiReg from '../myFpoList/fpoComplainces/statutoryRegistration/fssaiReg/fssaiReg'
import IsoReg from '../myFpoList/fpoComplainces/statutoryRegistration/isoReg/isoReg'
import ShopsEstb from '../myFpoList/fpoComplainces/statutoryRegistration/shopsEstb/shopsEstb'
import TradeLice from '../myFpoList/fpoComplainces/statutoryRegistration/tradeLice/tradeLice'
import LabourLice from '../myFpoList/fpoComplainces/statutoryRegistration/labourLice/labourLice'
import MonthlyGst from '../myFpoList/fpoComplainces/legalCompliances/monthlyGst/monthlyGst'
import StockChecking from '../myFpoList/fpoComplainces/legalCompliances/stockChecking/stockChecking'

export default function MyFpoMain(props) {
  const background = {
    '/myfpo/home': {
      // backgroundColor: '#f7f1dd',
    },
    '/myfpo/aboutfpc': {
      backgroundColor: '',
    },
    '/myfpo/fpcaccount': {
      backgroundImage: `URL("/assets/my-fpo/accounts/myfpoaccountsbg.png")`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
    },
    '/myfpo/fpcbusinessplan': {},
    '/myfpo/fpccomplainces': {
      backgroundImage: `URL("/assets/my-fpo/compliances/home/fpo-compliances-bg.jpg")`,
      backgroundRepeat: 'no-repeat',
    },
    '/myfpo/fpccompliances/statutoryregistration': {
      backgroundImage: `URL("/assets/my-fpo/compliances/statutory/statutory-compliances-bg.jpg")`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    },
    '/myfpo/fpccompliances/legalcompliances': {
      backgroundImage: `URL("/assets/my-fpo/compliances/legal/legal-compliances-bg.jpg")`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
    },
    '/myfpo/fpccompliances/annualcompliances': {
      backgroundImage: `URL("/assets/my-fpo/compliances/annual/annual-compliances-bg.jpg")`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
    },
    '/myfpo/fpcagmboard': {
      backgroundImage: `URL("/assets/my-fpo/agmboard/agmbg.jpg")`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
    },
    '/myfpo/fpcloanschemes': {},
    '/myfpo/fpcconnect': {},
  }
  const navData = [
    {
      name: 'About FPC',
      icon: 'fas fa-info-circle',
      path: '/myfpo/aboutfpc',
    },
    {
      name: 'FPC Account',
      icon: 'fas fa-calculator',
      path: '/myfpo/fpcaccount',
    },
    {
      name: 'FPC Business Plan',
      icon: 'fa fa-briefcase',
      path: '/myfpo/fpcbusinessplan',
    },
    {
      name: 'Capacity Building',
      icon: 'fas fa-handshake',
      path: '/myfpo/fpccapacitybuilding',
    },
    {
      name: 'FPC Compliances',
      icon: 'fas fa-file-invoice',
      path: '/myfpo/fpccomplainces',
    },
    {
      name: 'FPC AGM & Board',
      icon: 'fas fa-users',
      path: '/myfpo/fpcagmboard',
    },
    {
      name: 'FPC Loans Schemes',
      icon: 'fas fa-university',
      path: '/myfpo/fpcloanschemes',
    },
    {
      name: 'Reports',
      icon: 'fas fa-file-pdf',
      path: '/myfpo/reports',
    },
    {
      name: 'FPC Connect',
      icon: 'fas fa-network-wired',
      path: '/myfpo/fpcconnect',
    },
  ]

  const useStyles = makeStyles((theme) => ({
    background: background[props.location.pathname],
  }))
  const classes = useStyles()

  // const [name,setName] = useState(() => {
  //   switch (props.location.pathname) {
  //     case "/myfpo/home":
  //       return "FPO Home";
  //     case "/myfpo/aboutfpc":
  //       return "About FPC";
  //     default:
  //       return "FEED"
  //   }
  // })
  const [name, setName] = useState('')
  useEffect(() => {
    if (props.location.pathname === '/myfpo/home') {
      setName('FPC Home')
    } else if (props.location.pathname === '/myfpo/aboutfpc') {
      setName('About FPC')
    } else if (props.location.pathname === '/myfpo/fpcaccount') {
      setName('FPC Account')
    } else if (props.location.pathname === '/myfpo/fpcbusinessplan') {
      setName('FPC Business Plan')
    } else if (props.location.pathname === '/myfpo/fpccapacitybuilding') {
      setName('FPC Capacity Building')
    } else if (props.location.pathname === '/myfpo/fpccomplainces') {
      setName('FPC Compliances')
    } else if (props.location.pathname === '/myfpo/fpcagmboard') {
      setName('FPC Agm Board')
    } else if (props.location.pathname === '/myfpo/fpcloanschemes') {
      setName('FPC Loan Schemes')
    } else if (props.location.pathname === '/myfpo/reports') {
      setName('Reports')
    } else if (props.location.pathname === '/myfpo/fpcconnect') {
      setName('FPC Connect')
    }
  }, [props.location.pathname])

  // const path = props.location.pathname.slice(7);
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
          <WidgetsBar screenTitle={name}></WidgetsBar>
          <Switch>
            <Route path="/myfpo/home" component={MyFpoHome}></Route>
            <Route path="/myfpo/aboutfpc" component={AboutFpo}></Route>
            <Route path="/myfpo/fpcaccount" component={FpoAccount}></Route>
            <Route path="/myfpo/fpcagmboard" component={FpoAgmBoard}></Route>
            <Route
              path="/myfpo/fpcbusinessplan"
              component={FpoBusinessPlan}
              title={'businplan'}
            ></Route>
            <Route
              path="/myfpo/fpccomplainces"
              component={FpoComplainces}
            ></Route>
            <Route
              path="/myfpo/fpccapacitybuilding"
              component={FpoCapacityBuilding}
            ></Route>
            <Route path="/myfpo/fpcconnect" component={FpoConnect}></Route>
            <Route path="/myfpo/reports" component={FpoReports}></Route>
            <Route
              path="/myfpo/fpcloanschemes"
              component={FpoLoanSchemes}
            ></Route>
            <Route
              path="/myfpo/fpocompliances/statutoryregistration"
              component={StatutoryRegistration}
            ></Route>
            <Route
              path="/myfpo/statutoryregistration/fpofpcreg"
              component={FpoFpcReg}
            ></Route>
            <Route
              path="/myfpo/statutoryregistration/companyreg"
              component={CompanyReg}
            ></Route>
            <Route
              path="/myfpo/statutoryregistration/gstreg"
              component={GstReg}
            ></Route>
            <Route
              path="/myfpo/statutoryregistration/ieccode"
              component={IecCode}
            ></Route>
            <Route
              path="/myfpo/statutoryregistration/msmereg"
              component={MsmeReg}
            ></Route>
            <Route
              path="/myfpo/statutoryregistration/panreg"
              component={PanReg}
            ></Route>
            <Route
              path="/myfpo/statutoryregistration/fssaireg"
              component={FssaiReg}
            ></Route>
            <Route
              path="/myfpo/statutoryregistration/isoreg"
              component={IsoReg}
            ></Route>
            <Route
              path="/myfpo/statutoryregistration/shopsestb"
              component={ShopsEstb}
            ></Route>
            <Route
              path="/myfpo/statutoryregistration/tradelicence"
              component={TradeLice}
            ></Route>
            <Route
              path="/myfpo/statutoryregistration/labourlicence"
              component={LabourLice}
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
            <Route
              path="/myfpo/legalcompliances/monthlygst"
              component={MonthlyGst}
            ></Route>
            <Route
              path="/myfpo/legalcompliances/stockchecking"
              component={StockChecking}
            ></Route>
            <Route path="/myfpo/fporeports" component={Reports}></Route>
            <Redirect to="/myfpo/home" />
          </Switch>
        </div>
      </div>
    </>
  )
}
