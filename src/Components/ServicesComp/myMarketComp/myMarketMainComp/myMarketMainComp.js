import React from 'react'
import './myMarketMainComp.css'
import ServicesNavbar from '../../ServicesNavbar/ServicesNavbar.js'
import { makeStyles } from '@material-ui/core/styles'
import {
  Grid,
  TextField,
  InputAdornment,
  Divider,
  Breadcrumbs,
} from '@material-ui/core'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom'
// import Link from '@material-ui/core/Link'
import MyMarketNavComp from '../myMarketNavComp/myMarketNavComp'
import MyMarketHome from '../myMarketHome/myMarketHome'
import MyMarketProductCard from '../myMarketProductCard/myMarketProductCard'
import MyMarketProductSelection from '../myMarketProductSelection/myMarketProductSelection'
import MyMarketProductView from '../myMarketProductView/myMarketProductView'
import MmEnqryFormModal from '../mm-EnqryFormModal/mm-EnqryFormModal'
const useStyles = makeStyles((theme) => ({}))
function handleClick(event) {
  event.preventDefault()
  console.info('You clicked a breadcrumb.')
}
const breadcrumbs = [
  // <Link
  //   underline="hover"
  //   key="1"
  //   color="inherit"
  //   href="/"
  //   onClick={handleClick}
  // >
  //   My Market
  // </Link>,
  <Link
    underline="hover"
    key="2"
    color="inherit"
    to="/ecom/mymarkethome"
    // onClick={handleClick}
  >
    My-Market
  </Link>,
  <Link
    underline="hover"
    key="2"
    color="inherit"
    to="/ecom/productselection"
    // onClick={handleClick}
  >
    Categories
  </Link>,
  <Link
    underline="hover"
    key="2"
    color="inherit"
    to="/ecom/productview"
    // onClick={handleClick}
  >
    Mango Pvt Ltd
  </Link>,
]
export default function MyMarketMainComp() {
  const classes = useStyles()

  return (
    <>
      <ServicesNavbar />
      <div>
        <MyMarketNavComp />
        <div style={{ backgroundColor: '#f1f3f6' }}>
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
            style={{ margin: '5px 0px', fontSize: '14px' }}
          >
            {breadcrumbs}
          </Breadcrumbs>
          <Switch>
            <Route path="/ecom/mymarkethome" component={MyMarketHome}></Route>
            <Route
              path="/ecom/productcard"
              component={MyMarketProductCard}
            ></Route>
            <Route
              path="/ecom/productselection"
              component={MyMarketProductSelection}
            ></Route>
            <Route
              path="/ecom/productview"
              component={MyMarketProductView}
            ></Route>
            <Route
              path="/ecom/mmenqryformmodal"
              component={MmEnqryFormModal}
            ></Route>
            <Redirect to="/ecom/mymarkethome" />
          </Switch>
        </div>
      </div>
    </>
  )
}
