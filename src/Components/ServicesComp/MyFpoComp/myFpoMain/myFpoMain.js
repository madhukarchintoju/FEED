import React from 'react'
import './myFpoMain.css'
import MyFpoNav from '../myFpoNav/myFpoNav'
import ServicesNavbar from '../../ServicesNavbar/ServicesNavbar.js'
import { Route, Switch, Redirect } from 'react-router-dom'
import AboutFpo from '../myFpoList/aboutFpo/aboutFpo'
import MyFpoHome from '../myFpoHome/myFpoHome'
import FpoAccount from '../myFpoList/fpoAccount/fpoAccount'
import FpoAgmBoard from '../myFpoList/fpoAgmBoard/fpoAgmBoard'
import FpoBusinessPlan from '../myFpoList/fpoBusinessPlan/fpoBusinessPlan'
import FpoComplainces from '../myFpoList/fpoComplainces/fpoComplainces'
import FpoConnect from '../myFpoList/fpoConnect/fpoConnect'
import FpoLoanSchemes from '../myFpoList/fpoLoanSchemes/fpoLoanSchemes'
export default function MyFpoMain() {
    return (
        <>
            <ServicesNavbar></ServicesNavbar>
            <div className="row m-0">
                <MyFpoNav className="col"></MyFpoNav>
                <Switch>
                    <Route path="/myfpo/home" component={MyFpoHome}></Route>
                    <Route path="/myfpo/aboutfpo" component={AboutFpo}></Route>
                    <Route
                        path="/myfpo/fpoaccount"
                        component={FpoAccount}
                    ></Route>
                    <Route
                        path="/myfpo/fpoagmboard"
                        component={FpoAgmBoard}
                    ></Route>
                    <Route
                        path="/myfpo/fpobusinessplan"
                        component={FpoBusinessPlan}
                    ></Route>
                    <Route
                        path="/myfpo/fpocomplainces"
                        component={FpoComplainces}
                    ></Route>
                    <Route
                        path="/myfpo/fpoconnect"
                        component={FpoConnect}
                    ></Route>
                    <Route
                        path="/myfpo/fpoloanschemes"
                        component={FpoLoanSchemes}
                    ></Route>

                    <Redirect to="/myfpo/home" />
                </Switch>
            </div>
        </>
    )
}
