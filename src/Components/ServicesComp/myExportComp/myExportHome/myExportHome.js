import React from 'react'
import './myExportHome.css'
import { Link } from 'react-router-dom'
// import MyExportListItem from '../myExportListItem/myExportListItem'
import { Grid, Avatar, makeStyles } from '@material-ui/core'

export default function MyExportHome() {
  const useStyles = makeStyles((theme) => ({
    feedConnect: {
      backgroundColor: '#64c5bc',
      '@media (max-width: 768px)': {
        marginTop: '2em',
      },
    },
    color: {
      color: 'black',
      fontWeight: '500',
    },
    titleHeading: {
      // margin: '1em',
      '@media (max-width: 768px)': {
        margin: 0,
        marginLeft: '1em',
      },
    },
    listItem: {
      marginBottom: '2em',
    },
    headingAvatar: {
      width: '18em',
      height: '5em',
      '@media (max-width: 768px)': {
        width: '6em',
        height: '3em',
      },
    },
    cardsAvatar: {
      width: '9em',
      height: '8em',
      margin: '0.1em',
      '@media (max-width:768px)': {
        width: '4em',
        height: '4em',
      },
    },
  }))
  const classes = useStyles()
  const exportHome = [
    {
      name: 'Why Exports',
      icon: 'home/why-exports.png',
      link: '/myexport/whyexport',
    },
    {
      name: 'How to Start Export',
      icon: 'home/start-export.png',
      link: '/myexport/startexport',
    },
    {
      name: 'Product Selection',
      icon: 'home/PRODUCT-SELECTION.png',
      link: '/myexport/exportproductselection',
    },
    {
      name: 'Buyers Connection',
      icon: 'home/BUYERS-CONNECTIONS.png',
      link: '/myexport/exportbuyersconnection',
    },
    {
      name: 'Exim Policy Regulations',
      icon: 'home/POLICIES.png',
      link: '/myexport/eximpolicyregulation',
    },
    {
      name: 'Finance',
      icon: 'home/FINANCE.png',
      link: '',
    },
    {
      name: 'Process Export Order',
      icon: 'home/PROCESS.png',
      link: '/myexport/processexportorder',
    },
    {
      name: 'Exim Documentation',
      icon: 'home/DOCUMENTATION.png',
      link: '/myexport/eximdocumentation',
    },
    {
      name: 'Global Trade Updates',
      icon: 'home/globaltrade.png',
      link: '/myexport/globaltradeupdates',
    },
    {
      name: 'Country Selection',
      icon: 'home/countryselection.png',
      link: '/myexport/countryselection',
    },
    {
      name: 'Tarrif',
      icon: 'home/TARIFF.png',
      link: '/myexport/eximtarrifbenefits',
    },
    {
      name: 'Tools & Services',
      icon: 'home/TOOLS-SERVICES.png',
      link: '/myexport/exporttoolservices',
    },
  ]
  const cardSize = {
    webWidth: 9,
    mobWidth: 5,
    webHeight: 8,
    mobHeight: 4,
  }
  return (
    <>
      <div>
        <Grid container justifyContent="center">
          <h5>Exports Home</h5>
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="space-around"
          alignItems="center"
        >
          {exportHome.map((item, index) => (
            <Grid item container lg={2} justifyContent="center" key={index}>
              <Grid>
                <Avatar
                  to={item.link}
                  component={Link}
                  variant="square"
                  className={classes.cardsAvatar}
                  src={`${process.env.PUBLIC_URL}/assets/my-exports/${item.icon}`}
                >
                  {item.name}
                </Avatar>
              </Grid>
              {/* <Grid className={classes.color}>{item.name}</Grid> */}
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  )
}
