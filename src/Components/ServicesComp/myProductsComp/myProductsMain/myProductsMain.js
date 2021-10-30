import React, { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
  Redirect,
} from 'react-router-dom'
import { Grid, makeStyles, TextField } from '@material-ui/core'
import ServicesNavbar from '../../ServicesNavbar/ServicesNavbar'
import MyProductsHome from '../myProductsHome/myProductsHome'
import ProductDatabase from '../myProductsProfileList/productDatabase/productDatabase'
import ProductProduction from '../myProductsProfileList/productProduction/productProduction'
import ProductTrade from '../myProductsProfileList/productTrade/productTrade'
import ProductUntappedMarket from '../myProductsProfileList/productUntappedMarket/productUntappedMarket'
import ProductProcessing from '../myProductsProfileList/productProcessing/productProcessing'
import ProductSchemesPolicy from '../myProductsProfileList/productSchemesPolicy/productSchemesPolicy'
import ProductByProducts from '../myProductsProfileList/productByProducts/productByProducts'
import WidgetsBar from '../../widgetsBar/widgetsBar'
import SideNavBar from '../../sideNavBar/sideNavBar'

function MyProductsMain(props) {
  const navData = [
    {
      name: 'Production',
      icon: 'fas fa-tractor',
      path: '/myproductprofile/productproduction',
    },
    {
      name: 'Trade',
      icon: '',
      path: '/myproductprofile/producttrade',
      iconimg: 'my-products/tradeicon.png',
    },
    {
      name: 'Untapped Market',
      icon: '',
      path: '/myproductprofile/productuntappedmarket',
    },
    {
      name: 'BY Products',
      icon: '',
      path: '/myproductprofile/productbyproducts',
    },
    {
      name: 'Processing',
      icon: '',
      path: '/myproductprofile/productprocessing',
    },
    {
      name: 'Database & Docs',
      icon: '',
      path: '/myproductprofile/productdatabase',
    },
    {
      name: 'Country Profile',
      icon: '',
      path: '',
    },
    {
      name: 'Schemes & Policies',
      icon: '',
      path: '/myproductprofile/productschemespolicy',
    },
    {
      name: 'Product Guide',
      icon: '',
      path: '',
    },
    {
      name: 'Feed Foot Print',
      icon: '',
      path: '',
    },
  ]
  const [searchTerm, setSearchTerm] = useState('')
  const [pageTitle, setPageTitle] = useState('')
  useEffect(() => {
    if (props.location.pathname === '/myproductprofile/myproducthome') {
      setPageTitle('Product Home')
    } else if (
      props.location.pathname === '/myproductprofile/productdatabase'
    ) {
      setPageTitle('Product Database')
    } else if (
      props.location.pathname === '/myproductprofile/productproduction'
    ) {
      setPageTitle('Product Production')
    } else if (props.location.pathname === '/myproductprofile/producttrade') {
      setPageTitle('Product Trade')
    } else if (
      props.location.pathname === '/myproductprofile/productuntappedmarket'
    ) {
      setPageTitle('Product Untapped Market')
    } else if (
      props.location.pathname === '/myproductprofile/productbiproducts'
    ) {
      setPageTitle('Product Bi Products')
    } else if (
      props.location.pathname === '/myproductprofile/productprocessing'
    ) {
      setPageTitle('Product Processing')
    } else if (
      props.location.pathname === '/myproductprofile/productschemespolicy'
    ) {
      setPageTitle('Product Schemes Policy')
    }
  }, [props.location.pathname])
  return (
    <>
      <ServicesNavbar />
      <Grid
        container
        lg={12}
        item
        justifyContent="space-evenly"
        style={{ backgroundColor: '#e1e2e6', alignItems: 'center' }}
      >
        <Grid lg={4} md={4} sm={12} xs={12} item>
          <TextField
            fullWidth
            type="text"
            size="small"
            variant="outlined"
            label="Product Name"
            placeholder="Product Name"
            name="productName"
            margin="normal"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ backgroundColor: 'white' }}
            InputLabelProps={{
              style: {
                color: 'black',
                fontWeight: '600',
              },
            }}
          />
        </Grid>
        <Grid lg={4} md={4} sm={12} xs={12} item>
          <TextField
            fullWidth
            type="text"
            size="small"
            variant="outlined"
            label="HS Code"
            placeholder="HS Code"
            name="hsCode"
            margin="normal"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ backgroundColor: 'white' }}
            InputLabelProps={{
              style: {
                color: 'black',
                fontWeight: '600',
              },
            }}
          />
        </Grid>
        <Grid>
          <button className="btn btn-warning">Submit</button>
        </Grid>
      </Grid>
      <div className="row m-0">
        <SideNavBar
          className="col-lg p-0 sidenavbar"
          data={navData}
          bgColor="#8fbff2"
          textColor="black"
          serviceTitleBg="#6690bd"
          serviceTitle="MY Products"
          selectedSideNavLink="linear-gradient(90deg, rgba(143,191,242,1) 17%, rgba(255,255,255,1) 69%)"
        ></SideNavBar>
        <div className="col-lg p-0 fpo-content-wrap">
          <WidgetsBar screenTitle={pageTitle} />
          {/* <Router> */}
          <Switch>
            <Route
              path="/myproductprofile/myproducthome"
              component={MyProductsHome}
            ></Route>
            <Route
              path="/myproductprofile/productdatabase"
              component={ProductDatabase}
            ></Route>
            <Route
              path="/myproductprofile/productproduction"
              component={ProductProduction}
            ></Route>
            <Route
              path="/myproductprofile/producttrade"
              component={ProductTrade}
            ></Route>
            <Route
              path="/myproductprofile/productuntappedmarket"
              component={ProductUntappedMarket}
            ></Route>
            <Route
              path="/myproductprofile/productbyproducts"
              component={ProductByProducts}
            ></Route>
            <Route
              path="/myproductprofile/productprocessing"
              component={ProductProcessing}
            ></Route>
            <Route
              path="/myproductprofile/productschemespolicy"
              component={ProductSchemesPolicy}
            ></Route>
            <Redirect to="/myproductprofile/myproducthome" />
          </Switch>
          {/* </Router> */}
        </div>
      </div>
    </>
  )
}

export default MyProductsMain
