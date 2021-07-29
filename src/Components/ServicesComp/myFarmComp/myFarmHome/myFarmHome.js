import React from 'react'
import './myFarmHome.css'
import { Link } from 'react-router-dom'
import {
  Grid,
  Avatar,
  Button,
  Icon,
  makeStyles,
  ListItem,
  ListItemText,
  Typography,
  List,
  Divider,
} from '@material-ui/core'

export default function MyFarmHome() {
  const useStyles = makeStyles((theme) => ({
    grid: {
      marginTop: '1em',
    },
    imageGrid: {
      '@media (max-width: 768px)': {
        display: 'none',
      },
    },
    grassLogo: {
      height: '13em',
    },
    antLogo: {
      height: '20em',
    },
    navLink: {
      width: '8em',
      height: '8em',
      '@media (max-width: 768px)': {
        width: '4em',
        height: '4em',
      },
    },
    feedConnect: {
      backgroundColor: '#a4cf3e',
      '@media (max-width: 768px)': {
        marginTop: '2em',
      },
    },
    guideItem: {
      paddingTop: '0.4em',
      borderRadius: '3em',
      maxWidth: '19em',
      margin: '1em',
    },
    color: {
      color: 'black',
      fontWeight: '500',
    },
    newsfeedsWrap: {
      boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)',
      webkitBoxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)',
      mozBoxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)',
    },
    newsfeeds: {
      overflow: 'auto',
      height: '400px',
      backgroundColor: 'white',
    },
    newsfeedsHeading: {
      height: '2em',
      textAlign: 'center',
      backgroundColor: '#d2cf6e',
    },
  }))
  const classes = useStyles()

  const homeData = [
    {
      name: 'Fruits',
      icon: 'fruits.png',
      path: '/myfarm/fruits',
    },
    {
      name: 'Vegetables',
      icon: 'vegetables.png',
      path: '/myfarm/vegetables',
    },
    {
      name: 'Spices',
      icon: 'spices.png',
      path: '/myfarm/spices',
    },
    {
      name: 'Cereals',
      icon: 'cereals.png',
      path: '/myfarm/cereals',
    },
    {
      name: 'Oil Seeds',
      icon: 'oilseeds.png',
      path: '/myfarm/oilSeeds',
    },
    {
      name: 'Forest Products',
      icon: 'forestprod.png',
      path: '/myfarm/forestProducts',
    },
    {
      name: 'Animal Husb',
      icon: 'liveanimals.png',
      path: '/myfarm/animalhusbandry',
    },
    {
      name: 'Poultry',
      icon: 'liveanimals.png',
      path: '/myfarm/poultry',
    },
    {
      name: 'Aqua',
      icon: 'aqua.png',
      path: '/myfarm/aqua',
    },
    {
      name: 'Dairy',
      icon: 'dairy.png',
      path: '/myfarm/dairy',
    },
    {
      name: 'Plants',
      icon: 'plants.png',
      path: '/myfarm/plants',
    },
    {
      name: 'Flowers',
      icon: 'flowers.png',
      path: '/myfarm/flowers',
    },
    {
      name: 'Plantation Crop',
      icon: 'plantationcrop.png',
      path: '/myfarm/plantationcrop',
    },
    {
      name: 'Fabric',
      icon: 'fabrics.png',
      path: '/myfarm/fabric',
    },
    {
      name: 'Others',
      icon: 'others.png',
      path: '/myfarm/others',
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
    {
      primary: 'FEED',
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
        justifyContent="space-around"
        alignItems="flex-start"
        className={classes.grid}
      >
        <Grid
          container
          direction="row"
          item
          lg
          xs={12}
          justifyContent="flex-start"
          alignItems="center"
        >
          {homeData.map((item, index) => (
            <Grid
              key={index}
              xs={6}
              lg={3}
              item
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
              className="list-item"
              component={Link}
              to={item.path}
            >
              <Grid item className={classes.guideItem}>
                <Avatar
                  variant="square"
                  className={classes.navLink}
                  src={`${process.env.PUBLIC_URL}/assets/my-farm/home/${item.icon}`}
                >
                  {item.name}
                </Avatar>
              </Grid>
              <Grid item className={classes.color}>
                {item.name}
              </Grid>
            </Grid>
          ))}
        </Grid>
        <Grid lg={3} item>
          <Grid className={classes.newsfeedsWrap}>
            <Grid className={classes.newsfeedsHeading}>
              <h6>News Updates &amp; Info</h6>
            </Grid>
            <List className={classes.newsfeeds}>
              {fpcnewsupdates.map((item, index) => (
                <Grid key={index}>
                  <ListItem alignItems="flex-start">
                    <ListItemText
                      primary={item.primary}
                      secondary={item.secondary}
                    />
                  </ListItem>
                  <Divider />
                </Grid>
              ))}
            </List>
          </Grid>
        </Grid>
      </Grid>
      <Grid container justifyContent="center">
        <Button className={classes.feedConnect} variant="contained">
          <b>Connect FEED </b>
          <Icon className="fas fa-angle-double-right"></Icon>
        </Button>
      </Grid>
    </>
  )
}
