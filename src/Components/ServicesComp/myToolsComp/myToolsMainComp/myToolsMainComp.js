import React from 'react'
import './myToolsMainComp.css'
import ServicesNavbar from '../../ServicesNavbar/ServicesNavbar.js'
import MyToolsNavComp from '../myToolsNavComp/myToolsNavComp'
import { Redirect, Route, Switch } from 'react-router'
import MyToolsHome from '../myToolsHome/myToolsHome'
import MyToolsFpo from '../myToolsList/myToolsFpo/myToolsFpo'
import MyToolsFarmer from '../myToolsList/myToolsFarmer/myToolsFarmer'
import MyToolsMsme from '../myToolsList/myToolsMsme/myToolsMsme'
import MyToolsStudent from '../myToolsList/myToolsStudent/myToolsStudent'
import MyToolsExport from '../myToolsList/myToolsExports/myToolsExports'

export default function MyToolsMainComp() {
    return (
        <>
            <ServicesNavbar></ServicesNavbar>
            <div className="row m-0">
                <MyToolsNavComp className="col"></MyToolsNavComp>
                <Switch>
                    <Route path="/mytools/home" component={MyToolsHome}></Route>
                    <Route path="/mytools/fpo" component={MyToolsFpo}></Route>
                    <Route
                        path="/mytools/farmer"
                        component={MyToolsFarmer}
                    ></Route>
                    <Route path="/mytools/msme" component={MyToolsMsme}></Route>
                    <Route
                        path="/mytools/student"
                        component={MyToolsStudent}
                    ></Route>
                    <Route
                        path="/mytools/exports"
                        component={MyToolsExport}
                    ></Route>
                    <Redirect to="/mytools/home"></Redirect>
                </Switch>
            </div>
        </>
    )
}
