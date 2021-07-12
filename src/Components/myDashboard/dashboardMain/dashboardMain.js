import React from 'react'
import { Route, Switch } from 'react-router-dom'
import DashboardSideNav from '../dashboardSideNav/dashboardSideNav'
import MyBusinessLeads from '../myBusinessLeads/myBusinessLeads'

export default function dashboardMain() {
  return (
    <div className="row">
      <DashboardSideNav className="col" />
      <div className="col">
        <Switch>
          <Route
            path="/dashboard/mybusinessleads"
            component={MyBusinessLeads}
          ></Route>
        </Switch>
      </div>
    </div>
  )
}
