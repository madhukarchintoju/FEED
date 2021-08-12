import React from 'react'
import { Link } from 'react-router-dom'
import './fpoAccount.css'
import { Grid, makeStyles } from '@material-ui/core'

export default function FpoAccount() {
  const useStyles = makeStyles((theme) => ({
    fpoAccountWrap: {
      backgroundImage: `URL("${process.env.PUBLIC_URL}/assets/my-fpo/accounts/myfpoaccountsbg.png")`,
      backgroundSize: '100% 100%',
      backgroundRepeat: 'no-repeat',
    },
  }))
  const classes = useStyles()
  const cardSize = {
    webWidth: 11,
    mobWidth: 4,
    webHeight: 6,
    mobHeight: 4,
  }

  return (
    <>
      <Grid className="text-center">
        <img
          src={`${process.env.PUBLIC_URL}/assets/my-fpo/accounts/fpcfpoaccountsnameplate.png`}
          alt=""
        />
      </Grid>
      <Grid item lg={11} className="m-auto">
        <ul style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
          <li>
            Enables to track the input, output, monthly and yearly expenditures
          </li>
          <li>
            Provides easy access to editable &amp; downloadable documents that
            are to be mandatorily maintained by an FPO
          </li>
        </ul>
      </Grid>
      {/* <MyFpoListItem dataList={dataList} cardSize={cardSize}></MyFpoListItem> */}

      <Grid container item lg={12} justifyContent="center">
        <Grid item lg={5} className="text-center">
          <Link to="/myfpo/createvendor">
            <img
              src={`${process.env.PUBLIC_URL}/assets/my-fpo/accounts/createvendor.png`}
              alt=""
            />
          </Link>
        </Grid>
        <Grid item lg={5} className="text-center">
          <Link to="/myfpo/createProduct">
            <img
              src={`${process.env.PUBLIC_URL}/assets/my-fpo/accounts/createproduct.png`}
              alt=""
            />
          </Link>
        </Grid>
      </Grid>
      <Grid container item lg={12}>
        <Grid item lg={4} className="text-center">
          <Link to="/myfpo/sharecapitalregistry">
            <img
              src={`${process.env.PUBLIC_URL}/assets/my-fpo/accounts/sharecapitalregistry.png`}
              alt=""
            />
          </Link>
        </Grid>
        <Grid item lg={4} className="text-center">
          <Link to="/myfpo/purchaseregistry">
            <img
              src={`${process.env.PUBLIC_URL}/assets/my-fpo/accounts/purcheseregistry.png`}
              alt=""
            />
          </Link>
        </Grid>
        <Grid item lg={4} className="text-center">
          <Link to="/myfpo/salesregister">
            <img
              src={`${process.env.PUBLIC_URL}/assets/my-fpo/accounts/salesregistry.png`}
              alt=""
            />
          </Link>
        </Grid>
        <Grid item lg={4} className="text-center">
          <Link to="/myfpo/stockregistry">
            <img
              src={`${process.env.PUBLIC_URL}/assets/my-fpo/accounts/stockregistry.png`}
              alt=""
            />
          </Link>
        </Grid>
        <Grid item lg={4} className="text-center">
          <Link to="/myfpo/bankregistry">
            <img
              src={`${process.env.PUBLIC_URL}/assets/my-fpo/accounts/bankregistry.png`}
              alt=""
            />
          </Link>
        </Grid>
        <Grid item lg={4} className="text-center">
          <Link to="/myfpo/cashbookregistry">
            <img
              src={`${process.env.PUBLIC_URL}/assets/my-fpo/accounts/cashbookregistry.png`}
              alt=""
            />
          </Link>
        </Grid>
      </Grid>
      <Grid container item lg={12} justifyContent="center">
        <Grid item lg={5} className="text-center">
          <Link to="/myfpo/ledgerregistry">
            <img
              src={`${process.env.PUBLIC_URL}/assets/my-fpo/accounts/ledgerregistry.png`}
              alt=""
            />
          </Link>
        </Grid>
        <Grid item lg={5} className="text-center">
          <Link to="/myfpo/fporeports">
            <img
              src={`${process.env.PUBLIC_URL}/assets/my-fpo/accounts/reports.png`}
              alt=""
            />
          </Link>
        </Grid>
      </Grid>
    </>
  )
}
