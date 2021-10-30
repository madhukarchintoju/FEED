import React from 'react'
import './myMarketMainComp.css'
import ServicesNavbar from '../../ServicesNavbar/ServicesNavbar.js'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, TextField, InputAdornment, Divider } from '@material-ui/core'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import MyMarketNavComp from '../myMarketNavComp/myMarketNavComp'
import MyMarketHome from '../myMarketHome/myMarketHome'
import MyMarketProductCard from '../myMarketProductCard/myMarketProductCard'
import MyMarketProductSelection from '../myMarketProductSelection/myMarketProductSelection'
const useStyles = makeStyles((theme) => ({}))

export default function MyMarketMainComp() {
  const classes = useStyles()

  return (
    <>
      <ServicesNavbar />
      <div>
        <MyMarketNavComp />
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
          <Redirect to="/ecom/mymarkethome" />
        </Switch>
      </div>
    </>
  )
}
