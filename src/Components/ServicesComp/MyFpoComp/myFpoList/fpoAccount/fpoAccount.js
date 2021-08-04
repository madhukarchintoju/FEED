import React from 'react'
import MyFpoListItem from '../../myFpoListItem/myFpoListItem'
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
  const dataList = [
    {
      id: '1',
      name: 'Create Vendor',
      icon: 'accounts/createvendor.png',
      link: '/myfpo/createvendor',
    },
    {
      id: '2',
      name: 'Share Capital Registry',
      icon: 'accounts/sharecapitalregistry.png',
      link: '',
    },
    {
      id: '3',
      name: 'Purchase Registry',
      icon: 'accounts/purcheseregistry.png',
      link: '',
    },
    {
      id: '4',
      name: 'Sale Registry',
      icon: 'accounts/salesregistry.png',
      link: '/myfpo/salesregister',
    },
    {
      id: '5',
      name: 'Stock Registry',
      icon: 'accounts/stockregistry.png',
      link: '',
    },
    {
      id: '6',
      name: 'Create Product',
      icon: 'accounts/createproduct.png',
      link: '/myfpo/createProduct',
    },
    {
      id: '7',
      name: 'Ledger Registry',
      icon: 'accounts/ledgerregistry.png',
      link: '',
    },
    {
      id: '8',
      name: 'Bank Registry',
      icon: 'accounts/bankregistry.png',
      link: '',
    },
    {
      id: '9',
      name: 'Cash Book Registry',
      icon: 'accounts/cashbookregistry.png',
      link: '',
    },
    {
      id: '10',
      name: 'FPO Reports',
      icon: 'accounts/reports.png',
      link: '',
    },
  ]
  const cardSize = {
    webWidth: 11,
    mobWidth: 4,
    webHeight: 6,
    mobHeight: 4,
  }

  return (
    <>
      <Grid className="text-center">
        <h5>FPO/FPC Accounts</h5>
      </Grid>
      <Grid item lg={7} className="m-auto">
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
          <img
            src={`${process.env.PUBLIC_URL}/assets/my-fpo/accounts/createvendor.png`}
            alt=""
          />
        </Grid>
        <Grid item lg={5} className="text-center">
          <img
            src={`${process.env.PUBLIC_URL}/assets/my-fpo/accounts/createproduct.png`}
            alt=""
          />
        </Grid>
      </Grid>
      <Grid container item lg={12}>
        <Grid item lg={4} className="text-center">
          <img
            src={`${process.env.PUBLIC_URL}/assets/my-fpo/accounts/sharecapitalregistry.png`}
            alt=""
          />
        </Grid>
        <Grid item lg={4} className="text-center">
          <img
            src={`${process.env.PUBLIC_URL}/assets/my-fpo/accounts/purcheseregistry.png`}
            alt=""
          />
        </Grid>
        <Grid item lg={4} className="text-center">
          <img
            src={`${process.env.PUBLIC_URL}/assets/my-fpo/accounts/salesregistry.png`}
            alt=""
          />
        </Grid>
        <Grid item lg={4} className="text-center">
          <img
            src={`${process.env.PUBLIC_URL}/assets/my-fpo/accounts/stockregistry.png`}
            alt=""
          />
        </Grid>
        <Grid item lg={4} className="text-center">
          <img
            src={`${process.env.PUBLIC_URL}/assets/my-fpo/accounts/bankregistry.png`}
            alt=""
          />
        </Grid>
        <Grid item lg={4} className="text-center">
          <img
            src={`${process.env.PUBLIC_URL}/assets/my-fpo/accounts/cashbookregistry.png`}
            alt=""
          />
        </Grid>
      </Grid>
      <Grid container item lg={12} justifyContent="center">
        <Grid item lg={5} className="text-center">
          <img
            src={`${process.env.PUBLIC_URL}/assets/my-fpo/accounts/ledgerregistry.png`}
            alt=""
          />
        </Grid>
        <Grid item lg={5} className="text-center">
          <img
            src={`${process.env.PUBLIC_URL}/assets/my-fpo/accounts/reports.png`}
            alt=""
          />
        </Grid>
      </Grid>
    </>
  )
}
