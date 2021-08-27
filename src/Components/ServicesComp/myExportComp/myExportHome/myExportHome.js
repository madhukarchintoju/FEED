import React from 'react'
import './myExportHome.css'
import { Link } from 'react-router-dom'
// import MyExportListItem from '../myExportListItem/myExportListItem'
import { Grid, Avatar, makeStyles } from '@material-ui/core'

export default function MyExportHome() {
  const useStyles = makeStyles((theme) => ({
    exportHomeCard: {
      width: '180px',
      height: '180px',
      margin: '8px',
      background: '#fff',
      color: 'black',
      borderRadius: '15px 15px',
      borderBottom: '3px solid #F4A896',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      textAlign: 'center',
      position: 'relative',
      textDecoration: 'none',
      boxShadow: '0 14px 20px rgba(0, 0, 0, 0.2)',
      transition: 'all 0.3s ease-out',
      '&:hover': {
        textDecoration: 'none',
        backgroundColor: 'rgb(179, 216, 231)',
        transform: 'translateY(-5px) scale(1.005) translateZ(0)',
      },
    },
  }))
  const classes = useStyles()
  const exportHomeCard = [
    {
      name: 'Why Exports',
      logo: 'whyexports.png',
      link: '/myexport/whyexport',
    },
    {
      name: 'How to Start Exports',
      logo: 'startexports.png',
      link: '/myexport/startexport',
    },
    {
      name: 'Product Selection',
      logo: 'productselection.png',
      link: '/productprofile',
    },
    {
      name: 'Buyers Connection',
      logo: 'buyersconnection.png',
      link: '/myexport/exportbuyersconnection',
    },
    {
      name: 'Export - Import Policies & Regulations',
      logo: 'eximpolicy.png',
      link: '/myexport/eximpolicyregulation',
    },
    {
      name: 'Export - Import Finance & Insurance',
      logo: 'financeinsurance.png',
      link: '/myexport/eximfinanceinsurance',
    },
    {
      name: 'Process & Export Order',
      logo: 'exportorder.png',
      link: '/myexport/processexportorder',
    },
    {
      name: 'Export - Import Documentation',
      logo: 'eximdocumentation.png',
      link: '/myexport/eximdocumentation',
    },
    {
      name: 'Global Trade Updates & Events',
      logo: 'updatesevent.png',
      link: '/myexport/globaltradeupdates',
    },
    {
      name: 'Country Selection',
      logo: 'countryselectionimg.png',
      link: '/myexport/countryselection',
    },
    {
      name: 'Export - Import Tariff & Benefits',
      logo: 'tariffbenefits.png',
      link: '/myexport/eximtarrifbenefits',
    },
    {
      name: 'Tools & Services',
      logo: 'toolsservices.png',
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
        <Grid container item lg={12} justifyContent="space-around">
          {exportHomeCard.map((item, index) => (
            <Grid key={index} to={item.link} component={Link}>
              <Grid className={classes.exportHomeCard}>
                <img
                  src={`${process.env.PUBLIC_URL}/assets/my-exports/home/${item.logo}`}
                  alt="info logo"
                />
                <h6>{item.name}</h6>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  )
}
