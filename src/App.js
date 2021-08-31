import React, { useEffect } from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from 'react-router-dom'
import Header from './Components/HeaderComp/Header'
import Home from './Components/HomeComp/home'
import AboutSection from './Components/aboutSection/aboutSection'
import ServicesSection from './Components/servicesSection/servicesSection'
import EventsSection from './Components/eventsSection/eventsSection'
import FeedWorkingSection from './Components/feedWorkingSection/feedWorkingSection'
import TestimonialSection from './Components/testimonialSection/testimonialSection'
import PartnerSection from './Components/partnerSection/partnerSection'
import NewsletterSection from './Components/newsletterSection/newsletterSection'
import Register from './Components/RegisterComp/Register'
import Login from './Components/LoginComp/Login'
import Footer from './Components/FooterComp/Footer'
import MyFarmMainComp from './Components/ServicesComp/myFarmComp/myFarmMainComp/myFarmMain'
// import MyProductsMainComp from './Components/ServicesComp/myProductsComp/myProductsMainComp/myProductsMainComp'
import MyBusinessMain from './Components/ServicesComp/MyBusinessComp/myBusinessMain/myBusinessMain'
import MyExportMainComp from './Components/ServicesComp/myExportComp/myExportMainComp/myExportMainComp'
import MyEduMainComp from './Components/ServicesComp/myEduComp/myEduMainComp/myEduMainComp'
import MyMarketMainComp from './Components/ServicesComp/myMarketComp/myMarketMainComp/myMarketMainComp'
import MyToolsMainComp from './Components/ServicesComp/myToolsComp/myToolsMainComp/myToolsMainComp'
import MyFpoMain from './Components/ServicesComp/MyFpoComp/myFpoMain/myFpoMain'
import AnalyticsMain from './Components/analytics/analyticsMain/analyticsMain'
import MyDashboard from './Components/myDashboard/myDashboard'
import ContactUs from './Components/contactus/contactus'
import DashboardMain from './Components/myDashboard/dashboardMain/dashboardMain'
import MediaPage from './Components/mediaPage/mediaPage'
import Blogs from './Components/blogs/blogs'
import AboutList from './Components/aboutSection/aboutList/aboutList'
import MyMarket from './Components/myMarket/myMarket'
import Products from './Components/myMarket/products'
import SingleProduct from './Components/myMarket/single-product'
import ProductProfile from './Components/ServicesComp/productProfile/productProfile'
import Production from './Components/ServicesComp/productProfile/production'
import BIProducts from './Components/ServicesComp/productProfile/biproducts'
import SchemesAndPolicies from './Components/ServicesComp/productProfile/schemes-and-policies'
import ProcessingUnits from './Components/ServicesComp/productProfile/processing-units'
import Trade from './Components/ServicesComp/productProfile/trade'
import UntappedProducts from './Components/ServicesComp/productProfile/untapped-products'
import Downloads from './Components/downloads/downloads'

function App() {
  const ScrollToTop = () => {
    const { pathname } = useLocation()

    useEffect(() => {
      window.scrollTo(0, 0)
    }, [pathname])

    return null
  }
  return (
    <React.Fragment>
      <Router>
        <ScrollToTop />
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/aboutSection" exact component={AboutSection} />
          <Route path="/aboutlist" component={AboutList}></Route>
          <Route path="/analytics" exact component={AnalyticsMain} />
          <Route path="/serviceSection" exact component={ServicesSection} />
          <Route path="/eventSection" exact component={EventsSection} />
          <Route path="/contactus" exact component={ContactUs}></Route>
          <Route
            path="/feedWorkingSection"
            exact
            component={FeedWorkingSection}
          />
          <Route
            path="/testimonialSection"
            exact
            component={TestimonialSection}
          />
          <Route path="/partnerSection" exact component={PartnerSection} />
          <Route
            path="/newsletterSection"
            exact
            component={NewsletterSection}
          />
          <Route path="/downloads" component={Downloads}></Route>
          <Route path="/mediapage" component={MediaPage}></Route>
          <Route path="/blogspage" component={Blogs}></Route>
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/myfpo" component={MyFpoMain} />
          <Route path="/myfarm" component={MyFarmMainComp} />
          {/* <Route path="/myproducts" component={MyProductsMainComp} /> */}
          <Route path="/productprofile" exact component={ProductProfile} />
          <Route
            path="/productprofile/production"
            exact
            component={Production}
          />
          <Route
            path="/productprofile/bi-products"
            exact
            component={BIProducts}
          />
          <Route
            path="/productprofile/schemes-and-policies"
            exact
            component={SchemesAndPolicies}
          />
          <Route
            path="/productprofile/processing-units"
            exact
            component={ProcessingUnits}
          />
          <Route path="/productprofile/trade" exact component={Trade} />
          <Route
            path="/productprofile/untapped-products"
            exact
            component={UntappedProducts}
          />
          <Route path="/mybusiness" component={MyBusinessMain} />
          <Route path="/myexport" component={MyExportMainComp} />
          <Route path="/mymarket" exact component={MyMarket} />
          <Route
            path="/mymarket/products/:categoryId"
            exact
            component={Products}
          />
          <Route
            path="/mymarket/product/:productId"
            exact
            component={SingleProduct}
          />
          <Route path="/myeducation" component={MyEduMainComp} />
          <Route path="/mymarket" component={MyMarketMainComp} />
          <Route path="/mytools" component={MyToolsMainComp} />
          <Route path="/mydashboard" component={MyDashboard}></Route>
          <Route path="/dashboard" component={DashboardMain}></Route>
        </Switch>
        <Footer />
      </Router>
    </React.Fragment>
  )
}

export default App
