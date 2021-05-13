import React from 'react'
import './myBusinessMain.css'
import { Route, Switch, Redirect } from 'react-router-dom'
import MyBusinessHome from '../myBusinessHome/myBusinessHome'
import MyBusinessNav from '../myBusinessNav/myBusinessNav'
import ServicesNavbar from '../../ServicesNavbar/ServicesNavbar'
import BusinessProfile from '../myBusinessList/businessProfile/businessProfile'
import BusinessAccount from '../myBusinessList/businessAccount/businessAccount'
import BusinessComplainceReg from '../myBusinessList/businessComplainceReg/businessComplainceReg'
import BusinessLoanSchemes from '../myBusinessList/businessLoanSchemes/businessLoanSchemes'
import BusinessMarketingSupport from '../myBusinessList/businessMarketingSupport/businessMarketingSupport'
import BusinessPlan from '../myBusinessList/businessPlan/businessPlan'

export default function MyBusinessMain() {
    return (
        <>
            <ServicesNavbar></ServicesNavbar>
            <div className="row m-0">
                <MyBusinessNav className="col"></MyBusinessNav>
                <Switch>
                    <Route
                        path="/mybusiness/home"
                        component={MyBusinessHome}
                    ></Route>
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
                    <Redirect to="/mybusiness/home"></Redirect>
                </Switch>
            </div>
        </>
    )
}
