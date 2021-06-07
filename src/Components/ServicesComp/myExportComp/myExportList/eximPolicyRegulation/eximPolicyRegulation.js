import React from 'react'
import './eximPolicyRegulation.css'
import { Grid } from '@material-ui/core'
import MyExportListItem from '../../myExportListItem/myExportListItem'

export default function EximPolicyRegulation() {
  const dataList = [
    {
      name: 'Why Exports',
      icon: '/policy/agri-export-policy.png',
      link: '/myexport/whyexport',
    },
    {
      name: 'Start Export',
      icon: '/policy/foreign-trade-policy.png',
      link: '/myexport/startexport',
    },
    {
      name: 'Product Selection',
      icon: '/policy/my-export-export-policy.png',
      link: '/myexport/exportproductselection',
    },
    {
      name: 'Buyers Connection',
      icon: '/policy/my-export-import-policy.png',
      link: '/myexport/exportbuyersconnection',
    },
    {
      name: 'Exim Policy Regulations',
      icon: '/policy/my-export-state-wise-policy.png',
      link: '/myexport/eximpolicyregulation',
    },
    {
      name: 'Finance',
      icon: '/policy/my-export-e-commerce-policy.png',
      link: '',
    },
    {
      name: 'Process Export Order',
      icon: '/policy/my-export-hs-code-wise-policy.png',
      link: '/myexport/processexportorder',
    },
    {
      name: 'Exim Documentation',
      icon: '/policy/my-export-import-regulation.png',
      link: '/myexport/eximdocumentation',
    },
  ]
  const cardSize = {
    webWidth: 8,
    mobWidth: 4,
    webHeight: 8,
    mobHeight: 4,
  }
  return (
    <>
      <Grid
        container
        direction="row"
        justify="space-around"
        alignItems="flex-start"
        className="exim-policy-reg"
      >
        <Grid
          container
          item
          direction="column"
          justify="space-evenly"
          alignItems="center"
          className="image-grid"
          xs={12}
          lg={2}
        >
          <Grid item xs>
            <h4>EXIM POLICY & REGULATIONS</h4>
          </Grid>
          <Grid item xs>
            <img
              className="ant-logo"
              src={`${process.env.PUBLIC_URL}/assets/ant-small.png`}
              alt="ant"
            />
          </Grid>
        </Grid>
        {/* <Grid container item xs={12} lg direction="row">
          <Grid item xs={6} md={4} lg={3}>
            <Link to="" className="nav-link">
              <img
                src={`${process.env.PUBLIC_URL}/assets/agri-export-policy.png`}
                alt="About FPO"
              />
            </Link>
          </Grid>
          <Grid item xs={6} md={4} lg={3}>
            <Link to="" className="nav-link">
              <img
                src={`${process.env.PUBLIC_URL}/assets/foreign-trade-policy.png`}
                alt="FPO Account"
              />
            </Link>
          </Grid>
          <Grid item xs={6} md={4} lg={3}>
            <Link to="" className="nav-link">
              <img
                src={`${process.env.PUBLIC_URL}/assets/my-export-export-policy.png`}
                alt="FPO Business Plan"
              />
            </Link>
          </Grid>
          <Grid item xs={6} md={4} lg={3}>
            <Link to="" className="nav-link">
              <img
                src={`${process.env.PUBLIC_URL}/assets/my-export-import-policy.png`}
                alt="FPO Compliances"
              />
            </Link>
          </Grid>
          <Grid item xs={6} md={4} lg={3}>
            <Link to="" className="nav-link">
              <img
                src={`${process.env.PUBLIC_URL}/assets/my-export-state-wise-policy.png`}
                alt="FPO Agm Board Metting"
              />
            </Link>
          </Grid>
          <Grid item xs={6} md={4} lg={3}>
            <Link to="" className="nav-link">
              <img
                src={`${process.env.PUBLIC_URL}/assets/my-export-e-commerce-policy.png`}
                alt="FPO Loan Schemes"
              />
            </Link>
          </Grid>
          <Grid item xs={6} md={4} lg={3}>
            <Link to="" className="nav-link">
              <img
                src={`${process.env.PUBLIC_URL}/assets/my-export-hs-code-wise-policy.png`}
                alt="FPO Loan Schemes"
              />
            </Link>
          </Grid>
          <Grid item xs={6} md={4} lg={3}>
            <Link to="" className="nav-link">
              <img
                src={`${process.env.PUBLIC_URL}/assets/my-export-import-regulation.png`}
                alt="FPO Loan Schemes"
              />
            </Link>
          </Grid>
        </Grid>
        <Grid container justify="center">
          <Button className="myexport-broadcast-btn" variant="contained" mt={5}>
            <b>CONNECT TO FEED </b>
          </Button>
        </Grid> */}
        <Grid lg>
          <MyExportListItem
            dataList={dataList}
            cardSize={cardSize}
            cardsView={3}
          ></MyExportListItem>
        </Grid>
      </Grid>
    </>
  )
}
