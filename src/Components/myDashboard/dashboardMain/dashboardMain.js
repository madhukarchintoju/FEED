import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import DashboardSideNav from '../dashboardSideNav/dashboardSideNav'
import MyBusinessLeads from '../myBusinessLeads/myBusinessLeads'
import MyItDm from '../myItDm/myItDm'
import MyMarketDashboard from '../myMarketDashboard/myMarketDashboard'
import MyOffersCoupons from '../myOffersCoupons/myOffersCoupons'
import MyReportsDashboard from '../myReportsDashboard/myReportsDashboard'
import MySubscription from '../mySubscription/mySubscription'
import MyTransactionDashboard from '../myTransactionDashboard/myTransactionDashboard'
import PaidAds from '../myMarketDashboard/paidAds/paidAds'
import BusinessProfile from '../myMarketDashboard/businessProfile/businessProfile'
import MyAccountDashboard from '../myAccountDashboard/myAccountDashboard'
import ManageProducts from '../myMarketDashboard/manageProducts/manageProducts'

export default function dashboardMain() {
  return (
    <div className="row m-0 mt-3 mb-3 justify-content-around">
      <DashboardSideNav className="col-lg-3 col-md-3" />
      <div className="col-lg-9 col-lg-9">
        <Switch>
          <Route
            path="/dashboard/myaccount"
            component={MyAccountDashboard}
          ></Route>
          <Route path="/dashboard/myitdm" component={MyItDm}></Route>
          <Route
            path="/dashboard/mymarket"
            component={MyMarketDashboard}
          ></Route>
          <Route
            path="/dashboard/businessprofile"
            component={BusinessProfile}
          ></Route>
          <Route
            path="/dashboard/manageproducts"
            component={ManageProducts}
          ></Route>
          <Route path="/dashboard/paidads" component={PaidAds}></Route>

          <Route
            path="/dashboard/myofferscoupons"
            component={MyOffersCoupons}
          ></Route>
          <Route
            path="/dashboard/myreports"
            component={MyReportsDashboard}
          ></Route>
          <Route
            path="/dashboard/mysubscription"
            component={MySubscription}
          ></Route>
          <Route
            path="/dashboard/mytransaction"
            component={MyTransactionDashboard}
          ></Route>

          <Route
            path="/dashboard/mybusinessleads"
            component={MyBusinessLeads}
          ></Route>
          <Redirect to="/dashboard/mysubscription" />
        </Switch>
      </div>
    </div>
  )
}
