import React from 'react'
import { Link } from 'react-router-dom'
import './businessAccount.css'
import { Grid, makeStyles } from '@material-ui/core'

export default function BusinessAccount() {
  const useStyles = makeStyles((theme) => ({}))
  const classes = useStyles()

  return (
    <>
      <Grid className="text-center">
        {/* <img
          src={`${process.env.PUBLIC_URL}/assets/my-fpo/accounts/fpcfpoaccountsnameplate.png`}
          alt=""
        /> */}
        <h4>Business Accounts</h4>
      </Grid>
      {/* <Grid item lg={11} className="m-auto">
        <ul style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
          <li>
            Enables to track the input, output, monthly and yearly expenditures
          </li>
          <li>
            Provides easy access to editable &amp; downloadable documents that
            are to be mandatorily maintained by an FPO
          </li>
        </ul>
      </Grid> */}
      {/* <MyFpoListItem dataList={dataList} cardSize={cardSize}></MyFpoListItem> */}

      <Grid container item lg={12} justifyContent="center">
        <Grid item lg={5} className="text-center">
          <Link to="/myfpo/createvendor">
            <img
              src={`${process.env.PUBLIC_URL}/assets/my-business/accounts/createvendor.png`}
              alt=""
            />
          </Link>
        </Grid>
        <Grid item lg={5} className="text-center">
          <Link to="/myfpo/createProduct">
            <img
              src={`${process.env.PUBLIC_URL}/assets/my-business/accounts/createproduct.png`}
              alt=""
            />
          </Link>
        </Grid>
      </Grid>
      <Grid container item lg={12}>
        <Grid item lg={4} className="text-center">
          <Link to="/myfpo/sharecapitalregistry">
            <img
              src={`${process.env.PUBLIC_URL}/assets/my-business/accounts/sharecapitalregistry.png`}
              alt=""
            />
          </Link>
        </Grid>
        <Grid item lg={4} className="text-center">
          <Link to="/myfpo/purchaseregistry">
            <img
              src={`${process.env.PUBLIC_URL}/assets/my-business/accounts/puchaseregistry.png`}
              alt=""
            />
          </Link>
        </Grid>
        <Grid item lg={4} className="text-center">
          <Link to="/myfpo/salesregister">
            <img
              src={`${process.env.PUBLIC_URL}/assets/my-business/accounts/salesregistry.png`}
              alt=""
            />
          </Link>
        </Grid>
        <Grid item lg={4} className="text-center">
          <Link to="/myfpo/stockregistry">
            <img
              src={`${process.env.PUBLIC_URL}/assets/my-business/accounts/stockregistry.png`}
              alt=""
            />
          </Link>
        </Grid>
        <Grid item lg={4} className="text-center">
          <Link to="/myfpo/bankregistry">
            <img
              src={`${process.env.PUBLIC_URL}/assets/my-business/accounts/bankregistry.png`}
              alt=""
            />
          </Link>
        </Grid>
        <Grid item lg={4} className="text-center">
          <Link to="/myfpo/cashbookregistry">
            <img
              src={`${process.env.PUBLIC_URL}/assets/my-business/accounts/cashbookregistry.png`}
              alt=""
            />
          </Link>
        </Grid>
      </Grid>
      <Grid container item lg={12} justifyContent="center">
        <Grid item lg={5} className="text-center">
          <Link to="/myfpo/ledgerregistry">
            <img
              src={`${process.env.PUBLIC_URL}/assets/my-business/accounts/ledgerregistry.png`}
              alt=""
            />
          </Link>
        </Grid>
        <Grid item lg={5} className="text-center">
          <Link to="/myfpo/fporeports">
            <img
              src={`${process.env.PUBLIC_URL}/assets/my-business/accounts/reports.png`}
              alt=""
            />
          </Link>
        </Grid>
      </Grid>
    </>
  )
}
