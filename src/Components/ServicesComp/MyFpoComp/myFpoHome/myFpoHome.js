import React from 'react'
import './myFpoHome.css'
import { Link } from 'react-router-dom'
import { makeStyles, Grid, Button, Icon, Avatar } from '@material-ui/core'

export default function MyFpoHome(props) {
  const useStyles = makeStyles((theme) => ({
    homeItem: {
      width: '9em',
      height: '8em',
      margin: '1em',
      '@media (max-width:768px)': {
        width: '4.5em',
        height: '4em',
      },
    },
    fpoConnectBtn: {
      backgroundColor: '#ffc107',
    },
  }))
  const classes = useStyles()
  const fpoHomeData = [
    {
      name: 'About Fpo',
      icon: 'aboutfpo.png',
      link: '/myfpo/aboutfpo',
    },
    {
      name: 'Fpo Account',
      icon: 'fpoaccounts.png',
      link: '/myfpo/fpoaccount',
    },
    {
      name: 'FPO Business Plan',
      icon: 'fpobusinessplan.png',
      link: '/myfpo/fpobusinessplan',
    },
    {
      name: 'FPO Compliances',
      icon: 'fpocompliances.png',
      link: '/myfpo/fpocomplainces',
    },
    {
      name: 'Agm & Board Meetings',
      icon: 'fpoagmboard.png',
      link: '',
    },
    {
      name: 'Loans & Schemes',
      icon: 'fpoloans.png',
      link: '',
    },
  ]
  return (
    <>
      <Grid
        container
        direction="row"
        justify="space-around"
        alignItems="flex-start"
        className="myfpo-home"
      >
        <Grid
          container
          item
          direction="column"
          justify="space-evenly"
          alignItems="center"
          className="image-grid"
          xs={12}
          lg={2}
        >
          <Grid item xs>
            <img
              className="fpo-icon-img"
              src={`${process.env.PUBLIC_URL}/assets/fpo-icon.jpg`}
              width="100"
              alt="FPO Icon"
            />
          </Grid>
          <Grid item xs>
            <h1>MY FPO</h1>
          </Grid>
          <Grid item xs>
            <img
              className="ant-logo"
              src={`${process.env.PUBLIC_URL}/assets/ant-small.png`}
              alt="ant"
            />
          </Grid>
        </Grid>
        <Grid container item xs={12} lg direction="row" alignItems="center">
          {fpoHomeData.map((item, index) => (
            <Grid key={index} item xs={6} md={4} lg={4}>
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
            <b>Connect FPO </b>
            <Icon className="fas fa-angle-double-right"></Icon>
          </Button>
        </Grid>
      </Grid>
    </>
  )
}
