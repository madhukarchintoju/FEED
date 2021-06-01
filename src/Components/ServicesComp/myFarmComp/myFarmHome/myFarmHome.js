import React from 'react'
import './myFarmHome.css'
import { Link } from 'react-router-dom'
import { Grid, Avatar, Button, Icon, makeStyles } from '@material-ui/core'

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
      width: '6em',
      height: '6em',
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

  return (
    <>
      <Grid
        container
        direction="row"
        justify="space-around"
        alignItems="flex-start"
        className={classes.grid}
      >
        <Grid
          container
          item
          direction="column"
          justify="space-evenly"
          alignItems="center"
          className={classes.imageGrid}
          xs={12}
          lg={3}
        >
          <Grid item xs>
            <img
              className={classes.grassLogo}
              src={`${process.env.PUBLIC_URL}/assets/farm-icon.jpg`}
              alt=""
            />
          </Grid>
          <Grid item xs>
            <h1>MY FARM</h1>
          </Grid>
          <Grid item xs>
            <img
              className={classes.antLogo}
              src={`${process.env.PUBLIC_URL}/assets/ant.png`}
              alt=""
            />
          </Grid>
        </Grid>

        <Grid
          container
          direction="row"
          item
          lg
          xs={12}
          justify="flex-start"
          alignItems="center"
        >
          {homeData.map((item, index) => (
            <Grid
              key={index}
              xs={6}
              lg={2}
              item
              container
              direction="column"
              justify="center"
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
      </Grid>
      <Grid container justify="center">
        <Button className={classes.feedConnect} variant="contained">
          <b>Connect FEED </b>
          <Icon className="fas fa-angle-double-right"></Icon>
        </Button>
      </Grid>
    </>
  )
}
