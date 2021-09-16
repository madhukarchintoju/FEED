import React from 'react'
import './myBusinessHome.css'
import { Link } from 'react-router-dom'
import {
  makeStyles,
  Grid,
  Avatar,
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core'

export default function MyBusinessHome(props) {
  const useStyles = makeStyles((theme) => ({
    businesshomeItem: {
      width: '3em',
      height: '5em',
      margin: '1px',
      textAlign: 'center',
      border: '3px solid blue',
      borderRadius: '15px 15px',
      boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)',
      webkitBoxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)',
      mozBoxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)',
      '@media (max-width:768px)': {
        width: '4.5em',
        height: '4em',
      },
    },
    businessHomeCard: {
      width: '90%',
      height: '8em',
      // margin: '1px',
      // padding: '5px',
      textAlign: 'center',
      justifyContent: 'space-around',
      '&:hover': {
        borderBottom: '3px solid #ffbe59',
        borderRadius: '15px 15px',
        boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)',
        webkitBoxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)',
        mozBoxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)',
      },
    },
    avatarStyle: {
      width: '5em',
      height: '5em',
      // padding: '5px',
      margin: 'auto',
    },
    fpoConnectBtn: {
      // width: '15em',
      backgroundColor: '#ffc107',
    },
    businessnotificationItem: {
      marginBottom: '4px',
      padding: '0px 10px 0px 10px',
      // backdropFilter: 'blur(6px) saturate(180%)',
      // webkitBackdropFilter: 'blur(6px) saturate(180%)',
      backgroundColor: 'rgba(255, 255, 255, 0.25)',
      borderRadius: '12px',
      color: 'black',
      // border: '1px solid rgba(209, 213, 219, 0.3)',
    },
    newsfeedsWrap: {
      marginTop: '10px',
      boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)',
      webkitBoxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)',
      mozBoxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)',
    },
    newsfeeds: {
      overflow: 'auto',
      height: '410px',
      // backgroundColor: 'red',
      // border:'1px solid red',
      padding: '2px',
      color: 'white',
      // backgroundImage: `url('https://images.unsplash.com/photo-1519681393784-d120267933ba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1124&q=100')`
      // backgroundImage: `URL("${process.env.PUBLIC_URL}/assets/my-fpo/home/notibgsix.jpg")`,
      backgroundSize: 'cover',
    },
    newsfeedsHeading: {
      height: '2em',
      paddingTop: '5px',
      justifyContent: 'center',
      textAlign: 'center',
      alignItems: 'center',
      backgroundColor: 'rgb(107 109 153)',
      color: 'white',
    },
  }))
  const classes = useStyles()
  const businessHomeCards = [
    {
      name: 'About Business',
      icon: 'aboutbusiness.png',
      link: '/mybusiness/businessprofile',
    },
    {
      name: 'Business Account',
      icon: 'businessaccounts.png',
      link: '/mybusiness/businessaccount',
    },
    {
      name: 'Business Plan',
      icon: 'businessplan.png',
      link: '/mybusiness/businessplan',
    },
    {
      name: 'Capacity Building',
      icon: 'businesscapacitybuilding.png',
      link: '/mybusiness/loanschemes',
    },
    {
      name: 'Compliances',
      icon: 'businesscompliances.png',
      link: '/mybusiness/businesscomplaincereg',
    },
    {
      name: 'Agm & Board',
      icon: 'businessagmboard.png',
      link: '/mybusiness/agmboard',
    },
    {
      name: 'Loans & Schemes',
      icon: 'businessloans.png',
      link: '/mybusiness/loanschemes',
    },
    {
      name: 'Reports',
      icon: 'businessreports.png',
      link: '/mybusiness/reports',
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
        <Grid container justifyContent="center">
          {/* <img
              src={`${process.env.PUBLIC_URL}/assets/my-fpo/home/myfpcnameplate.png`}
              alt="..."
            /> */}
          <h4>My Business</h4>
        </Grid>
        <Grid container item lg={12} justifyContent="space-between">
          <Grid container item lg={8} justifyContent="space-around">
            {businessHomeCards.map((item, index) => (
              <Grid
                item
                key={index}
                lg={3}
                xs={6}
                md={3}
                className={classes.businessHomeCard}
              >
                <Grid
                  to={item.link}
                  component={Link}
                  className="nav-link text-dark"
                >
                  <Avatar
                    variant="square"
                    className={classes.avatarStyle}
                    src={`${process.env.PUBLIC_URL}/assets/my-business/home/${item.icon}`}
                    alt="existing plan"
                  />
                  <h6>{item.name}</h6>
                </Grid>
              </Grid>
            ))}
          </Grid>
          <Grid item lg={3}>
            <Grid className={classes.newsfeedsWrap}>
              <Grid className={classes.newsfeedsHeading}>
                <h6 className="my-auto mt-2">Updates &amp; Information</h6>
              </Grid>
              <List className={classes.newsfeeds}>
                {fpcnewsupdates.map((item, index) => (
                  <Grid key={index}>
                    <ListItem
                      alignItems="flex-start"
                      className={classes.businessnotificationItem}
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
      </Grid>
    </>
  )
}
