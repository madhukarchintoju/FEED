import React from 'react'
import './eximTarrifBenefits.css'
import { Link } from 'react-router-dom'
import { Grid, TextField, makeStyles, Avatar } from '@material-ui/core'
import Autocomplete from '@material-ui/lab/Autocomplete'
import MyExportListItem from '../../myExportListItem/myExportListItem'

export default function EximTarrifbenefits() {
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
      width: '8em',
      height: '8em',
      margin: '0.1em',
      '@media (max-width:768px)': {
        width: '4em',
        height: '4em',
      },
    },
  }))
  const classes = useStyles()
  const exportitems = [
    { title: 'Banana' },
    { title: 'Apple' },
    { title: 'Grapes' },
    { title: 'Kiwi' },
    { title: 'Orange' },
    { title: 'Papaya' },
  ]
  const tarrifMenu = [
    {
      name: 'Know Export Tariff',
      icon: 'tariff/know-export-tariff.png',
      link: '',
    },
    {
      name: 'Interest Subvention Scheme',
      icon: 'tariff/interest-subvention-schemes.png',
      link: '',
    },
    {
      name: 'Export Policy',
      icon: 'tariff/export-policy.png',
      link: '',
    },
    {
      name: 'SPS-PBT Measures',
      icon: 'tariff/sps-tbt-measures.png',
      link: '',
    },
    {
      name: 'MEIS/RODTEP',
      icon: 'tariff/meis-rodtep.png',
      link: '',
    },
    {
      name: 'GST Other',
      icon: 'tariff/gst-other.png',
      link: '',
    },
    {
      name: 'Duty Drawbacks',
      icon: 'tariff/tax-refund.png',
      link: '',
    },
    {
      name: 'Tma',
      icon: 'tariff/tma.png',
      link: '',
    },
    {
      name: 'Exim Documentation',
      icon: 'tariff/meis-rodtep.png',
      link: '',
    },
  ]
  return (
    <>
      <Grid container justifyContent="center">
        <h5>Export-Import Tariff &amp; Benefits</h5>
      </Grid>
      <Grid
        container
        direction="row"
        justify="space-around"
        alignItems="center"
      >
        {tarrifMenu.map((item, index) => (
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
      <Grid style={{ margin: '20px' }}>
        <h6>
          The word ‘tariff’ in general means a tax imposed by one country on the
          goods and services imported from another country.
        </h6>
        <h6>Why do Governments Impose Tariffs?</h6>
        <p>
          The concept of imposing tariff is to encourage domestic production and
          protect the industries from foreign competition. Imposing tariffs on
          imported goods and services make them less attractive (due to high
          price) than the domestic goods and services.
        </p>
        <p>
          The tariffs imposed and benefits provided by Government of India to
          the exporters are in line with the government’s flagship “Make in
          India” and “Atmanirbhar Bharat”.
        </p>
        <p>
          The current export import tariffs in India are as per the EXIM policy
          of India which strictly conforms to the "Harmonized Commodity
          Description and Coding System".
        </p>
      </Grid>
      <Grid style={{ margin: '20px' }}>
        <form>
          <Grid>
            <h6>
              Enter the HS Code and Country to know more about the tariffs and
              benefits of that HS code:
            </h6>
            <Autocomplete
              options={exportitems}
              getOptionLabel={(option) => option.title}
              style={{ width: 300 }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="HS CODE"
                  variant="outlined"
                  margin="normal"
                />
              )}
            />
            <button className="btn btn-warning">Search</button>
          </Grid>
        </form>
      </Grid>
    </>
  )
}
