import React from 'react'
import './myMarketDashboard.css'
import { makeStyles, Grid } from '@material-ui/core'
import { Link } from 'react-router-dom'

export default function MyMarketDashboard() {
  const useStyles = makeStyles((theme) => ({
    myMarketHomeWrap: {
      marginTop: '20px',
      // border: '1px solid red',
      borderRadius: '15px 15px',
    },
    myMarketHomeCards: {
      width: '150px',
      // border: '1px solid red',
      padding: '5px',
      textAlign: 'center',
      boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)',
      webkitBoxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)',
      mozBoxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)',
    },
  }))
  const classes = useStyles()
  const myMarketHomeCards = [
    {
      name: 'Business Profile',
      icon: 'businessprofile.png',
      link: '/dashboard/businessprofile',
    },
    {
      name: 'Manage Products',
      icon: 'mannageproducts.png',
      link: '/dashboard/manageproducts',
    },
    {
      name: 'Paid Ads',
      icon: 'paidads.png',
      link: '/dashboard/paidads',
    },
    {
      name: 'Invoice/Quotation',
      icon: 'invoice.png',
      link: '',
    },
    {
      name: 'Reviews',
      icon: 'reviews.png',
      link: '',
    },
    {
      name: 'Start Exports',
      icon: 'exports.png',
      link: '',
    },
  ]
  return (
    <>
      {/* <Grid container justify='center'>
        <Grid lg={10} container item className={classes.myMarketHomeWrap} justify='space-around'>
          {myMarketHomeCards.map((item, index) => (
            <Grid lg={4} item className={classes.myMarketHomeCards} key={index}>
              <Grid to={item.link} component={Link} className='nav-link'>
                <img src={`${process.env.PUBLIC_URL}/assets/my-dashboard/mymarket/${item.icon}`} alt="..." />
                <div className="card-body text-center">
                  <h5>{item.name}</h5>
                </div>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Grid> */}
      <Grid container justify="center">
        <Grid lg={4} item justify="center">
          <Link to="/dashboard/businessprofile">
            <a href="#" className="mhcCard education">
              <div className="mhcOverlay"></div>
              <div className="markcircle">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/my-dashboard/mymarket/businessprofile.png`}
                  alt="..."
                />
              </div>
              <p>Business Profile</p>
            </a>
          </Link>
        </Grid>
        <Grid lg={4} item>
          <Link to="/dashboard/manageproducts">
            <a href="#" className="mhcCard credentialing" lg={4}>
              <div className="mhcOverlay"></div>
              <div className="markcircle">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/my-dashboard/mymarket/mannageproducts.png`}
                  alt="..."
                />
              </div>
              <p>Manage Products</p>
            </a>
          </Link>
        </Grid>
        <Grid lg={4} item>
          <Link to="/dashboard/paidads">
            <a href="#" className="mhcCard wallet" lg={4}>
              <div className="mhcOverlay"></div>
              <div className="markcircle">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/my-dashboard/mymarket/paidads.png`}
                  alt="..."
                />
              </div>
              <p>Paid Ads</p>
            </a>
          </Link>
        </Grid>
        <Grid lg={4}>
          <Link>
            <a href="#" className="mhcCard human-resources" lg={4}>
              <div className="mhcOverlay"></div>
              <div className="markcircle">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/my-dashboard/mymarket/invoice.png`}
                  alt="..."
                />
              </div>
              <p>Invoice/Quotation</p>
            </a>
          </Link>
        </Grid>
        <Grid lg={4}>
          <Link>
            <a href="#" className="mhcCard human-resources" lg={4}>
              <div className="mhcOverlay"></div>
              <div className="markcircle">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/my-dashboard/mymarket/reviews.png`}
                  alt="..."
                />
              </div>
              <p>Reviews</p>
            </a>
          </Link>
        </Grid>
        <Grid lg={4}>
          <Link>
            <a href="#" className="mhcCard human-resources" lg={4}>
              <div className="mhcOverlay"></div>
              <div className="markcircle">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/my-dashboard/mymarket/exports.png`}
                  alt="..."
                />
              </div>
              <p>Start Exports</p>
            </a>
          </Link>
        </Grid>
      </Grid>
    </>
  )
}
