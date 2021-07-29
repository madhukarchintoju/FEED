import React from 'react'
import { makeStyles, Grid } from '@material-ui/core'
import { Link } from 'react-router-dom'
export default function PaidAds() {
  const useStyles = makeStyles((theme) => ({
    headingStripePaidads: {
      backgroundColor: 'orange',
      textAlign: 'center',
    },
    paidAdsCardWrap: {
      marginTop: '5em',
    },
    paidadsCards: {
      // border: '1px solid red',
      textAlign: 'center',
      borderRadius: '15px 15px',
      boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)',
      webkitBoxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)',
      mozBoxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)',
    },
  }))
  const classes = useStyles()
  const paidAdsDetails = [
    {
      icon: 'bannerads.png',
      name: 'Banner Ads',
      link: '',
    },
    {
      icon: 'digitalmarketing.png',
      name: 'Digital marketing',
      link: '',
    },
    {
      icon: 'offlinemarketing.png',
      name: 'Offline Marketing',
      link: '',
    },
  ]
  return (
    <>
      <div>
        <Grid className={classes.headingStripePaidads}>
          <h5>Paid Ads</h5>
        </Grid>
        <Grid container justify="center">
          <Grid
            lg={9}
            container
            item
            justify="space-around"
            className={classes.paidAdsCardWrap}
          >
            {paidAdsDetails.map((item, index) => (
              <Grid
                lg={3}
                item
                className={classes.paidadsCards}
                to={item.link}
                component={Link}
                key={index}
              >
                <img
                  src={`${process.env.PUBLIC_URL}/assets/my-dashboard/mymarket/${item.icon}`}
                  alt="..."
                />
                <div className="card-body">
                  <h5>{item.name}</h5>
                </div>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </div>
    </>
  )
}
