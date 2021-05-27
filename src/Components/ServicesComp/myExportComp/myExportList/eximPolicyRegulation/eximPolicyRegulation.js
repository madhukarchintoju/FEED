import React from 'react'
import './eximPolicyRegulation.css'
import { Link } from 'react-router-dom'
import { Grid, Button, Icon } from '@material-ui/core'
import { spacing } from '@material-ui/system'

export default function EximPolicyRegulation() {
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
        <Grid container item xs={12} lg direction="row">
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
        </Grid>
      </Grid>
    </>
  )
}
