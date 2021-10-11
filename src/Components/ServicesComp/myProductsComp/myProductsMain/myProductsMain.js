import React, { useState } from 'react'
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

function MyProductsMain() {
  const [searchTerm, setSearchTerm] = useState('')
  return (
    <>
      <ServicesNavbar />
      <Grid
        container
        lg={12}
        justifyContent="space-around"
        style={{ margin: '10px 0px 10px' }}
      >
        <Grid lg={3}>
          <TextField
            fullWidth
            type="text"
            size="small"
            variant="outlined"
            label="Product Name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </Grid>
        <Grid lg={3}>
          <TextField
            fullWidth
            type="text"
            size="small"
            variant="outlined"
            label="HS Code"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </Grid>
        <button className="btn btn-warning">Submit</button>
      </Grid>
      <MyProductsHome />
      <Router>
        <Switch>
          <Route path="/myproducthome" component={MyProductsHome}></Route>
          {/* <Redirect to='/myproducthome' /> */}
        </Switch>
      </Router>
    </>
  )
}

export default MyProductsMain
