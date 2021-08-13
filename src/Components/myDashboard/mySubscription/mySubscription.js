import React, { useState } from 'react'
import { makeStyles, Grid, Avatar } from '@material-ui/core'
export default function MySubscription() {
  const useStyles = makeStyles((theme) => ({
    existingPlanWrap: {
      // backgroundColor:'orange'
      // border: '1px solid red',
      borderRadius: '15px 15px',
      margin: '8px auto 8px auto',
      paddingBottom: '8px',
      boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)',
      webkitBoxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)',
      mozBoxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)',
    },
    existingPlanHeading: {
      padding: '5px',
      backgroundColor: 'orange',
      borderRadius: '15px 15px',
    },
    existingPlanCard: {
      margin: '5px',
      padding: '5px',
      textAlign: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '15px 15px',
      boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)',
      webkitBoxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)',
      mozBoxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)',
    },
    avatarStyle: {
      width: '5em',
      height: '5em',
      padding: '5px',
      margin: 'auto',

      // boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)',
      // webkitBoxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)',
      // mozBoxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)',
    },
  }))
  const classes = useStyles()
  const existingPlans = [
    {
      name: 'FPC',
      icon: 'myfpclogo.png',
    },
    {
      name: 'FARM',
      icon: 'myfarmlogo.png',
    },
    {
      name: 'Business',
      icon: 'mybusinesslogo.png',
    },
    {
      name: 'Education',
      icon: 'myeducationlogo.png',
    },
    {
      name: 'Exports',
      icon: 'myexportslogo.png',
    },
    {
      name: 'Market',
      icon: 'mymarketlogo.png',
    },
    {
      name: 'Products',
      icon: 'myproductslogo.png',
    },
    {
      name: 'Tools',
      icon: 'mytoolslogo.png',
    },
  ]
  const [viewAll, setViewAll] = useState(false)
  return (
    <>
      <Grid>
        <Grid className={classes.existingPlanWrap}>
          <Grid
            container
            className={classes.existingPlanHeading}
            justify="space-between"
            alignItems="center"
          >
            <h5>Existing Plans</h5>
            <i className="fas fa-clock"> Valid Upto 21-2-2022</i>
          </Grid>
          <Grid style={{ padding: '8px' }}>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s,
            </p>
          </Grid>
          <Grid>
            <Grid container justifyContent="space-around">
              {existingPlans.map((item, index) => (
                <Grid
                  lg={2}
                  key={index[5]}
                  className={classes.existingPlanCard}
                >
                  <Avatar
                    className={classes.avatarStyle}
                    src={`${process.env.PUBLIC_URL}/assets/my-dashboard/mysubscription/${item.icon}`}
                    // className="feed-logo-img img-fluid"
                    alt="existing plan"
                  />
                  <h6>{item.name}</h6>
                </Grid>
              ))}
              {existingPlans.length > 5 ? (
                <Grid container justifyContent="flex-end" className="mr-4">
                  <button className="btn btn-warning">View More</button>
                </Grid>
              ) : null}
            </Grid>
          </Grid>
        </Grid>
        <Grid className={classes.existingPlanWrap}>
          <Grid
            container
            className={classes.existingPlanHeading}
            justify="space-between"
            alignItems="center"
          >
            <h5>Upgrade Plans</h5>
            <i className="fas fa-clock"> Valid Upto 21-2-2022</i>
          </Grid>
          <Grid style={{ padding: '8px' }}>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s,
            </p>
          </Grid>
          <Grid>
            <Grid container justifyContent="space-around">
              {existingPlans.map((item, index) => (
                <Grid lg={2} key={index} className={classes.existingPlanCard}>
                  <Avatar
                    className={classes.avatarStyle}
                    src={`${process.env.PUBLIC_URL}/assets/my-dashboard/mysubscription/${item.icon}`}
                    // className="feed-logo-img img-fluid"
                    alt="existing plan"
                  />
                  <h6>{item.name}</h6>
                </Grid>
              ))}
              <Grid container justifyContent="flex-end" className="mr-4">
                <button className="btn btn-warning">View More</button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid className={classes.existingPlanWrap}>
          <Grid
            container
            className={classes.existingPlanHeading}
            justify="space-between"
            alignItems="center"
          >
            <h5>Offers</h5>
            <i className="fas fa-clock"> Valid Upto 21-2-2022</i>
          </Grid>
          <Grid style={{ padding: '8px' }}>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s,
            </p>
          </Grid>
          <Grid>
            <Grid container justifyContent="space-around">
              {existingPlans.map((item, index) => (
                <Grid lg={2} key={index} className={classes.existingPlanCard}>
                  <Avatar
                    className={classes.avatarStyle}
                    src={`${process.env.PUBLIC_URL}/assets/my-dashboard/mysubscription/${item.icon}`}
                    // className="feed-logo-img img-fluid"
                    alt="existing plan"
                  />
                  <h6>{item.name}</h6>
                </Grid>
              ))}
              <Grid container justifyContent="flex-end" className="mr-4">
                <button className="btn btn-warning">View More</button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}
