import React from 'react'
import './myDashboard.css'
import { Link } from 'react-router-dom'
import { TextField, Button, makeStyles, Grid } from '@material-ui/core'
import { borderRadius, textAlign } from '@material-ui/system'

export default function MyDashboard() {
  const useStyles = makeStyles((theme) => ({
    myDashboardWrap: {
      position: 'relative',
      height: '600px',
      backgroundImage:
        'linear-gradient(to right, #0db9a9, #00b8b0, #00b8b6, #00b7bc, #00b6c1)',
      textAlign: 'center',
      // background: `URL("${process.env.PUBLIC_URL}/assets/my-dashboard/cloud.png") repeat-x,linear-gradient(to right, #0db9a9, #00b8b0, #00b8b6, #00b7bc, #00b6c1)`,
      // backgroundSize:'cover',
      backgroundPosition: 'bottom',
      // backgroundRepeat: 'no-repeat',
    },
    quickMenu: {
      height: '200px',
      width: '200px',
      left: '-100px',
      top: '-100px',
      // position: 'absolute',
      borderRadius: '50%',
      backgroundImage: `URL("${process.env.PUBLIC_URL}/assets/my-dashboard/quickmenu.png")`,
      // backgroundSize:'100% 100%',
      backgroundPosition: 'center',
      // border:'1px solid white'
      transform: 'translateY(80px) translateX(-65px)',
    },
    subscriptionImg: {
      width: '100px',
      height: '100px',
      border: '6px solid #bbd14d',
      borderRadius: '50% 50%',
      backgroundColor: 'white',
      boxShadow: '0px 0px 12px -2px rgba(0,0,0,0.75)',
      webkitBoxShadow: '0px 0px 12px -2px rgba(0,0,0,0.75)',
      mozBoxShadow: '0px 0px 12px -2px rgba(0,0,0,0.75)',
    },
    itdmImg: {
      width: '100px',
      height: '100px',
      border: '6px solid #ffa13b',
      borderRadius: '50% 50%',
      backgroundColor: 'white',
      boxShadow: '0px 0px 12px -2px rgba(0,0,0,0.75)',
      webkitBoxShadow: '0px 0px 12px -2px rgba(0,0,0,0.75)',
      mozBoxShadow: '0px 0px 12px -2px rgba(0,0,0,0.75)',
    },
    marketImg: {
      width: '100px',
      height: '100px',
      border: '6px solid #ff623e',
      borderRadius: '50% 50%',
      backgroundColor: 'white',
      boxShadow: '0px 0px 12px -2px rgba(0,0,0,0.75)',
      webkitBoxShadow: '0px 0px 12px -2px rgba(0,0,0,0.75)',
      mozBoxShadow: '0px 0px 12px -2px rgba(0,0,0,0.75)',
    },
    businessleadsImg: {
      width: '100px',
      height: '100px',
      border: '6px solid #f4317b',
      borderRadius: '50% 50%',
      backgroundColor: 'white',
      boxShadow: '0px 0px 12px -2px rgba(0,0,0,0.75)',
      webkitBoxShadow: '0px 0px 12px -2px rgba(0,0,0,0.75)',
      mozBoxShadow: '0px 0px 12px -2px rgba(0,0,0,0.75)',
    },
    couponsImg: {
      width: '100px',
      height: '100px',
      border: '6px solid #8b38c1',
      borderRadius: '50% 50%',
      backgroundColor: 'white',
      boxShadow: '0px 0px 12px -2px rgba(0,0,0,0.75)',
      webkitBoxShadow: '0px 0px 12px -2px rgba(0,0,0,0.75)',
      mozBoxShadow: '0px 0px 12px -2px rgba(0,0,0,0.75)',
    },
    reportsImg: {
      width: '100px',
      height: '100px',
      border: '6px solid #4b75f9',
      borderRadius: '50% 50%',
      backgroundColor: 'white',
      boxShadow: '0px 0px 12px -2px rgba(0,0,0,0.75)',
      webkitBoxShadow: '0px 0px 12px -2px rgba(0,0,0,0.75)',
      mozBoxShadow: '0px 0px 12px -2px rgba(0,0,0,0.75)',
    },
    transactionsImg: {
      width: '100px',
      height: '100px',
      border: '6px solid #19d8c5',
      borderRadius: '50% 50%',
      backgroundColor: 'white',
      boxShadow: '0px 0px 12px -2px rgba(0,0,0,0.75)',
      webkitBoxShadow: '0px 0px 12px -2px rgba(0,0,0,0.75)',
      mozBoxShadow: '0px 0px 12px -2px rgba(0,0,0,0.75)',
    },
    accountsImg: {
      width: '100px',
      height: '100px',
      border: '6px solid #003549',
      borderRadius: '50% 50%',
      backgroundColor: 'white',
      boxShadow: '0px 0px 12px -2px rgba(0,0,0,0.75)',
      webkitBoxShadow: '0px 0px 12px -2px rgba(0,0,0,0.75)',
      mozBoxShadow: '0px 0px 12px -2px rgba(0,0,0,0.75)',
    },
  }))
  const classes = useStyles()
  return (
    <>
      <Grid className={classes.myDashboardWrap}>
        <div id="centre">
          <Link>
            <div className={classes.quickMenu}>
              {/* <img
                className=""
                src={`${process.env.PUBLIC_URL}/assets/my-dashboard/quickmenu.png`}
                // width="100"
                alt="FPO Icon"
              /> */}
            </div>
          </Link>
          <Link className="nav-link">
            <Grid>
              <Grid className="subscripPosition">
                <h6>My Subscriptions</h6>
              </Grid>
              <Grid className="outer circle at-12-oclock">
                <Grid className={classes.subscriptionImg}>
                  <img
                    className=""
                    src={`${process.env.PUBLIC_URL}/assets/my-dashboard/mysubscription.png`}
                    alt="FPO Icon"
                  />
                </Grid>
              </Grid>
            </Grid>
          </Link>
          <Link>
            <Grid>
              <Grid className="transacpPosition">
                <h6>IT &amp; Digital Media</h6>
              </Grid>
              <Grid className="outer circle at-2-oclock">
                <Grid className={classes.itdmImg}>
                  <img
                    className=""
                    src={`${process.env.PUBLIC_URL}/assets/my-dashboard/itdm.png`}
                    alt="FPO Icon"
                  />
                </Grid>
              </Grid>
            </Grid>
          </Link>
          <Link>
            <Grid>
              <Grid className="businessLeads">
                <h6>My Market</h6>
              </Grid>
              <Grid className="outer circle at-4-oclock">
                <Grid className={classes.marketImg}>
                  <img
                    className=""
                    src={`${process.env.PUBLIC_URL}/assets/my-dashboard/bullkart1.png`}
                    alt="FPO Icon"
                  />
                </Grid>
              </Grid>
            </Grid>
          </Link>
          <Link>
            <Grid>
              <Grid className="marketPosition">
                <h6>My Business Leads</h6>
              </Grid>
              <Grid className="outer circle at-5-oclock">
                <Grid className={classes.businessleadsImg}>
                  <img
                    className=""
                    src={`${process.env.PUBLIC_URL}/assets/my-dashboard/businessleads.png`}
                    alt="FPO Icon"
                  />
                </Grid>
              </Grid>
            </Grid>
          </Link>
          <Link>
            <Grid>
              <Grid className="reportsPosition">
                <h6>Coupons &amp; Offers</h6>
              </Grid>
              <Grid className="outer circle at-6-oclock">
                <Grid className={classes.couponsImg}>
                  <img
                    className=""
                    src={`${process.env.PUBLIC_URL}/assets/my-dashboard/coupons.png`}
                    alt="FPO Icon"
                  />
                </Grid>
              </Grid>
            </Grid>
          </Link>
          <Link>
            <Grid>
              <Grid className="accountsPosition">
                <h6>My Reports</h6>
              </Grid>
              <Grid className="outer circle at-7-oclock">
                <Grid className={classes.reportsImg}>
                  <img
                    className=""
                    src={`${process.env.PUBLIC_URL}/assets/my-dashboard/reports.png`}
                    alt="FPO Icon"
                  />
                </Grid>
              </Grid>
            </Grid>
          </Link>
          <Link>
            <Grid>
              <Grid className="wishListPosition">
                <h6>My Transactions</h6>
              </Grid>
              <Grid className="outer circle at-8-oclock">
                <Grid className={classes.transactionsImg}>
                  <img
                    className=""
                    src={`${process.env.PUBLIC_URL}/assets/my-dashboard/transactions.png`}
                    alt="FPO Icon"
                  />
                </Grid>
              </Grid>
            </Grid>
          </Link>
          <Link>
            <Grid>
              <Grid className="digitalMediaPosition">
                <h6>My Accounts</h6>
              </Grid>
              <Grid className="outer circle at-10-oclock">
                <Grid className={classes.accountsImg}>
                  <img
                    className=""
                    src={`${process.env.PUBLIC_URL}/assets/my-dashboard/accounts.png`}
                    alt="FPO Icon"
                  />
                </Grid>
              </Grid>
            </Grid>
          </Link>
        </div>
        <Grid style={{ float: 'right' }} className="rocket">
          <img
            className=""
            src={`${process.env.PUBLIC_URL}/assets/my-dashboard/rocket.png`}
            alt="FPO Icon"
          />
        </Grid>
        <Grid className="cloudBg" justify="center">
          <img
            className=""
            src={`${process.env.PUBLIC_URL}/assets/my-dashboard/cloud1.png`}
            alt="FPO Icon"
          />
        </Grid>
      </Grid>
    </>
  )
}
