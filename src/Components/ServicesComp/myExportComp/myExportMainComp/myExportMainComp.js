import React from 'react'
import './myExportMainComp.css'
import ServicesNavbar from '../../ServicesNavbar/ServicesNavbar.js'
import SideNavBar from '../../sideNavBar/sideNavBar'
import { Route, Switch, Redirect } from 'react-router-dom'
import MyExportHome from '../myExportHome/myExportHome'
import WhyExport from '../myExportList/whyExport/whyExport'
import StartExport from '../myExportList/startExport/startExport'
import ExportProductSelection from '../myExportList/exportProductSelection/exportProductSelection'
import ExportBuyersConnections from '../myExportList/exportBuyersConnection/exportBuyersConnection'
import EximPolicyRegulation from '../myExportList/eximPolicyRegulation/eximPolicyRegulation'
import AgriExportPolicy from '../myExportList/eximPolicyRegulation/agriExportPolicy/agriExportPolicy'
import ForeignTradePolicy from '../myExportList/eximPolicyRegulation/foreignTradePolicy/foreignTradePolicy'
import ExportPolicy from '../myExportList/eximPolicyRegulation/exportPolicy/exportPolicy'
import ImportPolicy from '../myExportList/eximPolicyRegulation/importPolicy/importPolicy'
import StateWisePolicy from '../myExportList/eximPolicyRegulation/stateWisePolicy/stateWisePolicy'
import ECommercePolicy from '../myExportList/eximPolicyRegulation/eCommercePolicy/eCommercePolicy'
import HsCodePolicy from '../myExportList/eximPolicyRegulation/hsCodePolicy/hsCodePolicy'
import ImportRegulations from '../myExportList/eximPolicyRegulation/importRegulations/importRegulations'
import ProcessExportOrder from '../myExportList/processExportOrder/processExportOrder'
import EximDocumentation from '../myExportList/eximDocumentation/eximDocumentation'
import GlobalTradeUpdates from '../myExportList/globalTradeUpdates/globalTradeUpdates'
// import ExportEvents from '../myExportList/exportEvents/exportEvents'
import ExportToolServices from '../myExportList/exportToolServices/exportToolServices'
import EximTarrifbenefits from '../myExportList/eximTarrifBenefits/eximTarrifBenefits'
import EximFinanceInsurance from '../myExportList/eximFinanceInsurance/eximFinanceInsurance'
import CountrySelection from '../myExportList/countrySelection/countrySelection'
import CountryInformation from '../myExportList/countrySelection/countryInformation/countryInformation'
import WidgetsBar from '../../widgetsBar/widgetsBar'

export default function MyExportMainComp(props) {
  const navData = [
    {
      name: 'Why Exports',
      icon: 'far fa-question-circle',
      path: '/myexport/whyexport',
    },
    {
      name: 'How to Start Exports',
      icon: 'fas fa-hourglass-start',
      path: '/myexport/startexport',
    },
    {
      name: 'Product Selection',
      icon: 'far fa-hand-pointer',
      path: '/productprofile',
    },
    {
      name: 'Buyers Connection',
      icon: 'fab fa-connectdevelop',
      path: '/myexport/exportbuyersconnection',
    },
    {
      name: `Exim Policies & Regulation`,
      icon: 'far fa-sticky-note',
      path: '/myexport/eximpolicyregulation',
    },
    {
      name: `Exim Finance & Insurance`,
      icon: 'far fa-sticky-note',
      path: '/myexport/eximfinanceinsurance',
    },
    {
      name: 'Process & Export Order',
      icon: 'fas fa-sort',
      path: '/myexport/processexportorder',
    },
    {
      name: 'Exim Documentation',
      icon: 'fas fa-file-alt',
      path: '/myexport/eximdocumentation',
    },
    {
      name: 'Global Trade Updates & Events',
      icon: 'far fa-edit',
      path: '/myexport/globaltradeupdates',
    },
    {
      name: 'Country Selection',
      icon: 'far fa-edit',
      path: '/myexport/countryselection',
    },
    // {
    //   name: 'Events',
    //   icon: 'fas fa-calendar-week',
    //   path: '/myexport/exportevents',
    // },
    {
      name: 'Exim Tariff & Benfits',
      icon: 'fab fa-elementor',
      path: '/myexport/eximtarrifbenefits',
    },
    {
      name: 'Tools & Services',
      icon: 'fas fa-calculator',
      path: '/myexport/exporttoolservices',
    },
  ]
  const path = props.location.pathname.slice(10)
  return (
    <>
      <ServicesNavbar></ServicesNavbar>
      <WidgetsBar screenTitle={path}></WidgetsBar>
      <div className="row m-0">
        <SideNavBar
          className="col"
          data={navData}
          bgColor="#64c5bc"
          textColor="black"
          serviceTitle="MY EXPORTS"
          selectedSideNavLink="linear-gradient(90deg, rgba(100,197,188,1) 17%, rgba(255,255,255,1) 67%)"
        ></SideNavBar>
        <div className="col-lg p-0">
          {/* <WidgetsBar /> */}
          <Switch>
            <Route path="/myexport/home" component={MyExportHome}></Route>
            <Route path="/myexport/whyexport" component={WhyExport}></Route>
            <Route path="/myexport/startexport" component={StartExport}></Route>
            {/* <Route
              path="/myexport/exportproductselection"
              component={ExportProductSelection}
            ></Route> */}
            <Route
              path="/myexport/exportbuyersconnection"
              component={ExportBuyersConnections}
            ></Route>
            <Route
              path="/myexport/eximpolicyregulation"
              component={EximPolicyRegulation}
            ></Route>
            <Route
              path="/myexport/agriexportpolicy"
              component={AgriExportPolicy}
            ></Route>
            <Route
              path="/myexport/foreigntradepolicy"
              component={ForeignTradePolicy}
            ></Route>
            <Route
              path="/myexport/exportpolicy"
              component={ExportPolicy}
            ></Route>
            <Route
              path="/myexport/importpolicy"
              component={ImportPolicy}
            ></Route>
            <Route
              path="/myexport/statewisepolicy"
              component={StateWisePolicy}
            ></Route>
            <Route
              path="/myexport/ecommercepolicy"
              component={ECommercePolicy}
            ></Route>
            <Route
              path="/myexport/hscodepolicy"
              component={HsCodePolicy}
            ></Route>
            <Route
              path="/myexport/importregulations"
              component={ImportRegulations}
            ></Route>
            <Route
              path="/myexport/processexportorder"
              component={ProcessExportOrder}
            ></Route>
            <Route
              path="/myexport/eximdocumentation"
              component={EximDocumentation}
            ></Route>
            <Route
              path="/myexport/globaltradeupdates"
              component={GlobalTradeUpdates}
            ></Route>
            <Route
              path="/myexport/countryselection"
              component={CountrySelection}
            ></Route>
            <Route
              path="/myexport/countryinformation"
              component={CountryInformation}
            ></Route>
            {/* <Route
              path="/myexport/exportevents"
              component={ExportEvents}
            ></Route> */}
            <Route
              path="/myexport/exporttoolservices"
              component={ExportToolServices}
            ></Route>
            <Route
              path="/myexport/eximtarrifbenefits"
              component={EximTarrifbenefits}
            ></Route>
            <Route
              path="/myexport/eximfinanceinsurance"
              component={EximFinanceInsurance}
            ></Route>
            <Redirect to="/myexport/home"></Redirect>
          </Switch>
        </div>
      </div>
    </>
  )
}
