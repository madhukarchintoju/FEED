import React from 'react'
import './myExportMainComp.css'
import ServicesNavbar from '../../ServicesNavbar/ServicesNavbar.js'
import MyExportNavComp from '../myExportNavComp/myExportNavComp'
import { Route, Switch, Redirect } from 'react-router-dom'
import MyExportHome from '../myExportHome/myExportHome'
import WhyExport from '../myExportList/whyExport/whyExport'
import StartExport from '../myExportList/startExport/startExport'
import ExportProductSelection from '../myExportList/exportProductSelection/exportProductSelection'
import ExportBuyersConnections from '../myExportList/exportBuyersConnection/exportBuyersConnection'
import EximPolicyRegulation from '../myExportList/eximPolicyRegulation/eximPolicyRegulation'
import ProcessExportOrder from '../myExportList/processExportOrder/processExportOrder'
import EximDocumentation from '../myExportList/eximDocumentation/eximDocumentation'
import GlobalTradeUpdates from '../myExportList/globalTradeUpdates/globalTradeUpdates'
import ExportEvents from '../myExportList/exportEvents/exportEvents'
import ExportToolServices from '../myExportList/exportToolServices/exportToolServices'
import EximTarrifbenefits from '../myExportList/eximTarrifBenefits/eximTarrifBenefits'
import EximFinanceInsurance from '../myExportList/eximFinanceInsurance/eximFinanceInsurance'

export default function MyExportMainComp() {
    return (
        <>
            <ServicesNavbar></ServicesNavbar>
            <div className="row m-0">
                <MyExportNavComp></MyExportNavComp>
                <Switch>
                    <Route
                        path="/myexport/home"
                        component={MyExportHome}
                    ></Route>
                    <Route
                        path="/myexport/whyexport"
                        component={WhyExport}
                    ></Route>
                    <Route
                        path="/myexport/startexport"
                        component={StartExport}
                    ></Route>
                    <Route
                        path="/myexport/exportproductselection"
                        component={ExportProductSelection}
                    ></Route>
                    <Route
                        path="/myexport/exportbuyersconnection"
                        component={ExportBuyersConnections}
                    ></Route>
                    <Route
                        path="/myexport/eximpolicyregulation"
                        component={EximPolicyRegulation}
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
                        path="/myexport/exportevents"
                        component={ExportEvents}
                    ></Route>
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
        </>
    )
}
