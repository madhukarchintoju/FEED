import React from 'react'
import './exportProductSelection.css'
import { Grid, makeStyles } from '@material-ui/core'
import { Link } from 'react-router-dom'

export default function ExportProductSelection() {
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
      <div>
        {/* <Grid container justify='center'> */}
        <Grid container item lg={12} justifyContent="space-around">
          <Grid lg={3} item>
            <Link to="/dashboard/businessprofile">
              <a href="#" className="mhcCard education">
                <div className="mhcOverlay"></div>
                <div className="markcircle">
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/my-dashboard/mymarket/businessprofile.png`}
                    alt="..."
                  />
                </div>
                <h6>General Info</h6>
              </a>
            </Link>
          </Grid>
          <Grid lg={3} item>
            <Link to="/dashboard/manageproducts">
              <a href="#" className="mhcCard credentialing" lg={4}>
                <div className="mhcOverlay"></div>
                <div className="markcircle">
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/my-dashboard/mymarket/mannageproducts.png`}
                    alt="..."
                  />
                </div>
                <h6>Production of Fresh Produce</h6>
              </a>
            </Link>
          </Grid>
          <Grid lg={3} item>
            <Link to="/dashboard/paidads">
              <a href="#" className="mhcCard wallet" lg={4}>
                <div className="mhcOverlay"></div>
                <div className="markcircle">
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/my-dashboard/mymarket/paidads.png`}
                    alt="..."
                  />
                </div>
                <h6>Export to World</h6>
              </a>
            </Link>
          </Grid>
          <Grid lg={3}>
            <Link>
              <a href="#" className="mhcCard human-resources" lg={4}>
                <div className="mhcOverlay"></div>
                <div className="markcircle">
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/my-dashboard/mymarket/invoice.png`}
                    alt="..."
                  />
                </div>
                <h6>Import to World</h6>
              </a>
            </Link>
          </Grid>
          <Grid lg={3}>
            <Link>
              <a href="#" className="mhcCard human-resources" lg={4}>
                <div className="mhcOverlay"></div>
                <div className="markcircle">
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/my-dashboard/mymarket/reviews.png`}
                    alt="..."
                  />
                </div>
                <h6>Import Tariff</h6>
              </a>
            </Link>
          </Grid>
          <Grid lg={3}>
            <Link>
              <a href="#" className="mhcCard human-resources" lg={4}>
                <div className="mhcOverlay"></div>
                <div className="markcircle">
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/my-dashboard/mymarket/exports.png`}
                    alt="..."
                  />
                </div>
                <h6>India's Trading Country</h6>
              </a>
            </Link>
          </Grid>
          <Grid lg={3}>
            <Link>
              <a href="#" className="mhcCard human-resources" lg={4}>
                <div className="mhcOverlay"></div>
                <div className="markcircle">
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/my-dashboard/mymarket/exports.png`}
                    alt="..."
                  />
                </div>
                <h6>Import Regulation Standards</h6>
              </a>
            </Link>
          </Grid>
          <Grid lg={3}>
            <Link>
              <a href="#" className="mhcCard human-resources" lg={4}>
                <div className="mhcOverlay"></div>
                <div className="markcircle">
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/my-dashboard/mymarket/exports.png`}
                    alt="..."
                  />
                </div>
                <h6>SPS Measures</h6>
              </a>
            </Link>
          </Grid>
          <Grid lg={3}>
            <Link>
              <a href="#" className="mhcCard human-resources" lg={4}>
                <div className="mhcOverlay"></div>
                <div className="markcircle">
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/my-dashboard/mymarket/exports.png`}
                    alt="..."
                  />
                </div>
                <h6>Exports from India</h6>
              </a>
            </Link>
          </Grid>
          <Grid lg={3}>
            <Link>
              <a href="#" className="mhcCard human-resources" lg={4}>
                <div className="mhcOverlay"></div>
                <div className="markcircle">
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/my-dashboard/mymarket/exports.png`}
                    alt="..."
                  />
                </div>
                <h6>Market Report</h6>
              </a>
            </Link>
          </Grid>
        </Grid>
        {/* </Grid> */}
      </div>
    </>
  )
}
