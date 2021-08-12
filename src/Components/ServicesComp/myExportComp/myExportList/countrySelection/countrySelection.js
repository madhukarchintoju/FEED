import React from 'react'
import './countrySelection.css'
import { Grid, makeStyles } from '@material-ui/core'
import { Link } from 'react-router-dom'
export default function CountrySelection() {
  const useStyles = makeStyles((theme) => ({
    education: {
      backgroundColor: '#ffd861',
      boxShadow: 'rgba(255, 215, 97, 0.48)',
    },
    flagShadow: {
      // margin:'5px auto 5px auto',
      width: '100%',
      height: '70%',
      borderRadius: '15px 15px',
      boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)',
      webkitBoxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)',
      mozBoxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)',
    },
  }))
  const classes = useStyles()
  const countryList = [
    {
      name: 'Algeria',
      flag: 'algeria.jpg',
    },
    {
      name: 'Angola',
      flag: 'angola.jpg',
    },
    {
      name: 'Argentina',
      flag: 'argentina.jpg',
    },
    {
      name: 'Australia',
      flag: 'australia.jpg',
    },
    {
      name: 'Bangladesh',
      flag: 'bangladesh.jpg',
    },
    {
      name: 'Belgium',
      flag: 'belgium.jpg',
    },
    {
      name: 'Brazil',
      flag: 'brazil.png',
    },
    {
      name: 'Canada',
      flag: 'canada.png',
    },
    {
      name: 'China',
      flag: 'china.png',
    },
    {
      name: 'Egypt',
      flag: 'egypt.png',
    },
    {
      name: 'France',
      flag: 'france.png',
    },
    {
      name: 'Germany',
      flag: 'germany.jpg',
    },
    {
      name: 'Ghana',
      flag: 'ghana.png',
    },
    {
      name: 'Hongkong',
      flag: 'hongkong.jpg',
    },
    {
      name: 'Indonesia',
      flag: 'indonesia.png',
    },
    {
      name: 'Iran',
      flag: 'iran.png',
    },
    {
      name: 'Iraq',
      flag: 'Iraq.png',
    },
    {
      name: 'Israel',
      flag: 'israel.png',
    },
    {
      name: 'Italy',
      flag: 'Italy.jpg',
    },
    {
      name: 'Japan',
      flag: 'japan.png',
    },
    {
      name: 'Kazakhstan',
      flag: 'kazakhstan.png',
    },
    {
      name: 'Kuwait',
      flag: 'kuwait.png',
    },
    {
      name: 'Malaysia',
      flag: 'malaysia.png',
    },
    {
      name: 'Mexico',
      flag: 'mexico.png',
    },
    {
      name: 'Mozambique',
      flag: 'mozambique.png',
    },
    {
      name: 'Nepal',
      flag: 'nepal.png',
    },
    {
      name: 'Netherlands',
      flag: 'netherlands.png',
    },
    {
      name: 'Nigeria',
      flag: 'nigeria.png',
    },
    {
      name: 'Oman',
      flag: 'Oman.jpg',
    },
    {
      name: 'Pakistan',
      flag: 'pakistan.png',
    },
    {
      name: 'Poland',
      flag: 'poland.png',
    },
    {
      name: 'Qatar',
      flag: 'qatar.png',
    },
    {
      name: 'Russia',
      flag: 'russia.png',
    },
    {
      name: 'Saudi Arabia',
      flag: 'saudiarabia.png',
    },
    {
      name: 'Singapore',
      flag: 'singapore.jpg',
    },
    {
      name: 'South Africa',
      flag: 'southafrica.png',
    },
    {
      name: 'South Korea',
      flag: 'southkorea.png',
    },
    {
      name: 'Spain',
      flag: 'spain.png',
    },
    {
      name: 'Sri Lanka',
      flag: 'srilanka.png',
    },
    {
      name: 'Switzerland',
      flag: 'switzerland.png',
    },
    {
      name: 'Taiwan',
      flag: 'taiwan.png',
    },
    {
      name: 'Tanzania',
      flag: 'tanzania.png',
    },
    {
      name: 'Thailand',
      flag: 'thailand.png',
    },
    {
      name: 'Turkey',
      flag: 'turkey.png',
    },
    {
      name: 'uae',
      flag: 'uae.jpg',
    },
    {
      name: 'Ukraine',
      flag: 'ukraine.png',
    },
    {
      name: 'United Kingdom',
      flag: 'unitedkingdom.jpg',
    },
    {
      name: 'usa',
      flag: 'usa.png',
    },
    {
      name: 'Venezuela',
      flag: 'venezuela.png',
    },
    {
      name: 'Vietnam',
      flag: 'vietnam.png',
    },
  ]
  return (
    <>
      <div>
        <Grid container justifyContent="center">
          <h5>Country Selection</h5>
        </Grid>
        <Grid container item lg={12} style={{ textAlign: '-webkit-center' }}>
          {countryList.map((item, index) => (
            <Grid lg={3} item key={index}>
              {/* <Link to="/dashboard/businessprofile"> */}
              <Grid className="countryCard education">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/my-exports/flags/${item.flag}`}
                  alt="..."
                  className={classes.flagShadow}
                />
                <h5>{item.name}</h5>
              </Grid>
              {/* </Link> */}
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  )
}
