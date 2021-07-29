import React from 'react'
import './myFpoHome.css'
import { Link } from 'react-router-dom'
import {
  makeStyles,
  Grid,
  Button,
  Avatar,
  List,
  ListItem,
  ListItemText,
  Typography,
  Divider,
} from '@material-ui/core'

export default function MyFpoHome(props) {
  const useStyles = makeStyles((theme) => ({
    homeItem: {
      width: '9em',
      height: '8em',
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
      marginTop: '10px',
      boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)',
      webkitBoxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)',
      mozBoxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)',
    },
    newsfeeds: {
      overflow: 'auto',
      height: '420px',
      // backgroundColor: 'red',
      // border:'1px solid red',
      padding: '2px',
      color: 'white',
      // backgroundImage: `url('https://images.unsplash.com/photo-1519681393784-d120267933ba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1124&q=100')`
      backgroundImage: `URL("${process.env.PUBLIC_URL}/assets/my-fpo/home/notibgsix.jpg")`,
      backgroundSize: 'cover',
    },
    newsfeedsHeading: {
      height: '2em',
      textAlign: 'center',
      alignItems: 'center',
      backgroundColor: '#111927',
      color: 'white',
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
        'NABARD helps multi-state co-operative society working for the uplift of exports from all corners of India, We Provide',
    },
    {
      primary: 'FEED',
      secondary:
        'FEED is a multi-state co-operative society working for the uplift of exports from all corners of India, We Provide',
    },
    {
      primary: 'NABARD',
      secondary:
        'NABARD helps multi-state co-operative society working for the uplift of exports from all corners of India, We Provide',
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
        justifyContent="space-around"
        // alignItems="flex-start"
        className="myfpo-home"
      >
        <Grid container item lg={8} xs={12}>
          {fpoHomeData.map((item, index) => (
            <Grid key={index} item xs={6} md={3} lg={3}>
              <Grid className="homeItemWrap">
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
        <Grid lg={3} item>
          <Grid className={classes.newsfeedsWrap}>
            <Grid className={classes.newsfeedsHeading}>
              <h6 className="my-auto">News Updates &amp; Info</h6>
            </Grid>
            <List className={classes.newsfeeds}>
              {fpcnewsupdates.map((item, index) => (
                <Grid key={index}>
                  <ListItem
                    alignItems="flex-start"
                    className="notificationItem"
                  >
                    <ListItemText
                      primary={item.primary}
                      secondary={item.secondary}
                    />
                  </ListItem>
                </Grid>
              ))}
            </List>
          </Grid>
        </Grid>
      </Grid>
      <Grid container justifyContent="center" className="mt-3">
        <Button className={classes.fpoConnectBtn} variant="contained">
          <b>Connect FPC </b>
        </Button>
      </Grid>
    </>
  )
}
