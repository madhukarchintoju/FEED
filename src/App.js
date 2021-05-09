import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './Components/HeaderComp/Header'
import Home from './Components/HomeComp/home'
import Register from './Components/RegisterComp/Register'
import Login from './Components/LoginComp/Login'
import './App.css'
import React from 'react'
import Footer from './Components/FooterComp/Footer'
import MyFpo from './Components/ServicesComp/MyFpoComp/MyFpo'
import MyFarmMainComp from './Components/ServicesComp/MyFarmComp/myFarmMainComp/myFarmMainComp'
import MyProductsMainComp from './Components/ServicesComp/myProductsComp/myProductsMainComp/myProductsMainComp'
import MyBusiness from './Components/ServicesComp/MyBusinessComp/MyBusiness'
import MyExportMainComp from './Components/ServicesComp/myExportComp/myExportMainComp/myExportMainComp'
import MyEduMainComp from './Components/ServicesComp/myEduComp/myEduMainComp/myEduMainComp'
import MyMarketMainComp from './Components/ServicesComp/myMarketComp/myMarketMainComp/myMarketMainComp'
import MyToolsMainComp from './Components/ServicesComp/myToolsComp/myToolsMainComp/myToolsMainComp'

function App() {
    return (
        <React.Fragment>
            <Router>
                <Header />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/register" component={Register} />
                    <Route path="/login" component={Login} />
                    <Route path="/myfpo" component={MyFpo} />
                    <Route path="/myfarm" component={MyFarmMainComp} />
                    <Route path="/myproducts" component={MyProductsMainComp} />
                    <Route path="/mybusiness" component={MyBusiness} />
                    <Route path="/myexport" component={MyExportMainComp} />
                    <Route path="/myeducation" component={MyEduMainComp} />
                    <Route path="/mymarket" component={MyMarketMainComp} />
                    <Route path="/mytools" component={MyToolsMainComp} />
                </Switch>
                <Footer />
            </Router>
        </React.Fragment>
    )
}

export default App
