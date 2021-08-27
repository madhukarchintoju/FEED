import React from 'react'
import './countryInformation.css'
import { Grid, makeStyles } from '@material-ui/core'
import { Link } from 'react-router-dom'

export default function CountryInformation(Props) {
  const useStyles = makeStyles((theme) => ({
    countryInfoCard: {
      width: '200px',
      height: '200px',
      margin: '8px',
      background: '#fff',
      color: 'black',
      borderRadius: '15px 15px',
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

  const countryInfoCards = [
    {
      name: 'General Info',
      logo: 'info.png',
      link: '',
    },
    {
      name: 'Production of Fresh Produce',
      logo: 'freshproduction.png',
      link: '',
    },
    {
      name: 'Exports to World',
      logo: 'shipping.png',
      link: '',
    },
    {
      name: 'Imports to World',
      logo: 'import.png',
      link: '',
    },
    {
      name: 'Import Tariff',
      logo: 'tariff.png',
      link: '',
    },
    {
      name: 'India Trade with this Country',
      logo: 'trade.png',
      link: '',
    },
    {
      name: 'Import Regulation Standards',
      logo: 'standards.png',
      link: '',
    },
    {
      name: 'SPS Measures',
      logo: 'measures.png',
      link: '',
    },
    {
      name: 'Exports from India',
      logo: 'export.png',
      link: '',
    },
    {
      name: 'Market Report',
      logo: 'marketreport.png',
      link: '',
    },
  ]
  return (
    <>
      <div>
        <Grid container item lg={12}>
          <Grid>
            <h5 className="ml-3">Country Name : </h5>
          </Grid>
        </Grid>
        <Grid container item lg={12} justifyContent="space-around">
          {countryInfoCards.map((item, index) => (
            <Link to="/">
              <Grid lg={3} item key={index}>
                <Grid className={classes.countryInfoCard}>
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/my-exports/countryselection/countryinfo/${item.logo}`}
                    alt="info logo"
                  />
                  <h6>{item.name}</h6>
                </Grid>
              </Grid>
            </Link>
          ))}
        </Grid>
      </div>
    </>
  )
}
