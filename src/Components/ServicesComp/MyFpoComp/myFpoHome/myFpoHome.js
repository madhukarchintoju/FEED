import React from 'react'
import './myFpoHome.css'
import { Link } from 'react-router-dom'
import {
  makeStyles,
  Grid,
  Button,
  Icon,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
  Divider,
} from '@material-ui/core'

export default function MyFpoHome(props) {
  const useStyles = makeStyles((theme) => ({
    homeItem: {
      width: '8em',
      height: '7em',
      // margin: '1em',
      '@media (max-width:768px)': {
        width: '4.5em',
        height: '4em',
      },
    },
    fpoConnectBtn: {
      // width: '15em',
      backgroundColor: '#ffc107',
    },
    newsfeedsWrap: {
      boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)',
      webkitBoxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)',
      mozBoxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)',
    },
    newsfeeds: {
      overflow: 'auto',
      height: '300px',
      backgroundColor: 'white',
    },
    newsfeedsHeading: {
      height: '2em',
      textAlign: 'center',
      backgroundColor: '#ffc107',
    },
  }))
  const classes = useStyles()
  const fpoHomeData = [
    {
      name: 'About Fpo',
      icon: 'aboutfpc.png',
      link: '/myfpo/aboutfpo',
    },
    {
      name: 'Fpo Account',
      icon: 'fpcaccount.png',
      link: '/myfpo/fpoaccount',
    },
    {
      name: 'FPO Business Plan',
      icon: 'fpcbusinessplan.png',
      link: '/myfpo/fpobusinessplan',
    },
    {
      name: 'Loans & Schemes',
      icon: 'capacitybuilding.png',
      link: '',
    },
    {
      name: 'FPO Compliances',
      icon: 'fpccompliances.png',
      link: '/myfpo/fpocomplainces',
    },
    {
      name: 'Agm & Board Meetings',
      icon: 'fpcagmboard.png',
      link: '',
    },
    {
      name: 'Loans & Schemes',
      icon: 'fpcloans.png',
      link: '',
    },

    {
      name: 'Loans & Schemes',
      icon: 'reports.png',
      link: '',
    },
  ]
  const fpcnewsupdates = [
    {
      primary: 'FEED',
      secondary:
        'FEED is a multi-state co-operative society working for the uplift of exports from all corners of India, We Provide',
    },
    {
      primary: 'NABARD',
      secondary:
        'FEED is a multi-state co-operative society working for the uplift of exports from all corners of India, We Provide',
    },
    {
      primary: 'FEED',
      secondary:
        'FEED is a multi-state co-operative society working for the uplift of exports from all corners of India, We Provide',
    },
  ]
  return (
    <>
      <Grid
        container
        direction="row"
        justify="flex-start"
        // alignItems="flex-start"
        className="myfpo-home"
      >
        <Grid
          container
          item
          justify="space-evenly"
          // alignItems="center"
          direction="row"
          className="image-grid"
          xs={12}
          lg={9}
          md={9}
        >
          <Grid container item xs={12}>
            {fpoHomeData.map((item, index) => (
              <Grid key={index} item xs={6} md={3} lg={3}>
                <Grid>
                  <Avatar
                    to={item.link}
                    component={Link}
                    variant="square"
                    className={classes.homeItem}
                    src={`${process.env.PUBLIC_URL}/assets/my-fpo/home/${item.icon}`}
                  >
                    {item.name}
                  </Avatar>
                </Grid>
              </Grid>
            ))}
          </Grid>
          <Grid container justify="center">
            <Button className={classes.fpoConnectBtn} variant="contained">
              <b>Connect FPC </b>
            </Button>
          </Grid>
        </Grid>
        <Grid lg={3}>
          <Grid className={classes.newsfeedsWrap}>
            <Grid className={classes.newsfeedsHeading}>
              <h6>News Updates &amp; Info</h6>
            </Grid>
            <List className={classes.newsfeeds}>
              {fpcnewsupdates.map((item, index) => (
                <>
                  <ListItem alignItems="flex-start" key="item">
                    <ListItemText
                      primary={item.primary}
                      secondary={
                        <Grid>
                          <Typography
                            component="span"
                            variant="body2"
                            className={classes.inline}
                            color="textPrimary"
                          >
                            {item.secondary}
                          </Typography>
                        </Grid>
                      }
                    />
                  </ListItem>
                  <Divider />
                </>
              ))}
            </List>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}
