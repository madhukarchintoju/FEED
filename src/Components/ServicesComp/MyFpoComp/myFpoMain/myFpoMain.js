import React from 'react'
import './myFpoMain.css'
import MyFpoNav from '../myFpoNav/myFpoNav'
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
export default function MyFpoMain() {
    const navData = [
        {
            name: 'About FPO',
            icon: 'fa fa-plus-circle',
            path: '/myfpo/aboutfpo',
        },
        {
            name: 'FPO Account',
            icon: 'fa fa-address-card',
            path: '/myfpo/fpoaccount',
        },
        {
            name: 'FPO Business Plan',
            icon: 'fa fa-briefcase',
            path: '/myfpo/fpobusinessplan',
        },
        {
            name: 'FPO Compliances',
            icon: 'fas fa-book-open',
            path: '/myfpo/fpocomplainces',
        },
        {
            name: 'FPO AGM & Board',
            icon: 'far fa-comments',
            path: '/myfpo/fpoagmboard',
        },
        {
            name: 'FPO Loans Schemes',
            icon: 'fas fa-university',
            path: '/myfpo/fpoloanschemes',
        },
        {
            name: 'FPO Connect',
            icon: 'fas fa-handshake',
            path: '/myfpo/fpoconnect',
        },
    ]
    return (
        <>
            <ServicesNavbar></ServicesNavbar>
            <div className="row m-0 content-wrapper-services">
                <SideNavBar
                    className="col p-0 sidenavbar"
                    data={navData}
                    bgColor="#ffc107"
                    textColor="black"
                ></SideNavBar>
                <div className="col p-0 fpo-content-wrap">
                    <Switch>
                        <Route path="/myfpo/home" component={MyFpoHome}></Route>
                        <Route
                            path="/myfpo/aboutfpo"
                            component={AboutFpo}
                        ></Route>
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
                        <Redirect to="/myfpo/home" />
                    </Switch>
                </div>
            </div>
        </>
    )
}
