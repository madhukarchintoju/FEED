import React from 'react'
import SideNavBar from '../../ServicesComp/sideNavBar/sideNavBar'
import { Route, Switch } from 'react-router-dom'
import MySubscription from '../mySubscription/mySubscription'
import MyItDm from '../myItDm/myItDm'
import MyBusinessLeadsDashboard from '../myBusinessLeadsDashboard/myBusinessLeadsDashboard'
import MyOffersCoupons from '../myOffersCoupons/myOffersCoupons'
import MyAccountDashboard from '../myAccountDashboard/myAccountDashboard'
import MyTransactionDashboard from '../myTransactionDashboard/myTransactionDashboard'
import MyReportsDashboard from '../myReportsDashboard/myReportsDashboard'
import BusinessProfileDashboard from '../myMarketDashboard/businessProfile/businessProfile'
import PaidAds from '../myMarketDashboard/paidAds/paidAds'
import MyMarketDashboard from '../myMarketDashboard/myMarketDashboard'
export default function MyDashboardHome() {
  const navData = [
    {
      name: 'My Subscriptions',
      icon: 'fa fa-plus-circle',
      path: '/mydashboardhome/mysubscription',
    },
    {
      name: 'My IT & Digital Media',
      icon: 'fa fa-address-card',
      path: '/mydashboardhome/myitdm',
    },
    {
      name: 'My Market',
      icon: 'fa fa-briefcase',
      path: '/mydashboardhome/mymarketdashboard',
    },
    {
      name: 'My Business Leads',
      icon: 'fas fa-book-open',
      path: '/mydashboardhome/mybusinessleadsdashboard',
    },
    {
      name: 'My Offers & Coupons',
      icon: 'far fa-comments',
      path: '/mydashboardhome/myofferscoupons',
    },
    {
      name: 'My Account',
      icon: 'fas fa-university',
      path: '/mydashboardhome/myaccountsdashboard',
    },
    {
      name: 'My Transactions',
      icon: 'fas fa-handshake',
      path: '/mydashboardhome/mytransactiondashboard',
    },
    {
      name: 'My Reports',
      icon: 'fas fa-handshake',
      path: '/mydashboardhome/myreportsdashboard',
    },
  ]
  return (
    <>
      <div className="row m-0">
        <SideNavBar
          className="col p-0"
          data={navData}
          bgColor="#d2d3d5"
          textColor="black"
        ></SideNavBar>
        <div className="col p-0 fpo-content-wrap">
          <Switch>
            <Route
              path="/mydashboardhome/mysubscription"
              component={MySubscription}
            ></Route>
            <Route path="/mydashboardhome/myitdm" component={MyItDm}></Route>
            <Route
              path="/mydashboardhome/mymarketdashboard"
              component={MyMarketDashboard}
            ></Route>
            <Route
              path="/mydashboardhome/mybusinessleadsdashboard"
              component={MyBusinessLeadsDashboard}
            ></Route>
            <Route
              path="/mydashboardhome/myofferscoupons"
              component={MyOffersCoupons}
            ></Route>
            <Route
              path="/mydashboardhome/myaccountsdashboard"
              component={MyAccountDashboard}
            ></Route>
            <Route
              path="/mydashboardhome/mytransactiondashboard"
              component={MyTransactionDashboard}
            ></Route>
            <Route
              path="/mydashboardhome/myreportsdashboard"
              component={MyReportsDashboard}
            ></Route>
            <Route
              path="/mydashboardhome/mymarket/businessprofile"
              component={BusinessProfileDashboard}
            ></Route>
            <Route
              path="/mydashboardhome/mymarket/paidads"
              component={PaidAds}
            ></Route>
          </Switch>
        </div>
      </div>
    </>
  )
}
