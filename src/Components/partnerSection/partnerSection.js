import React from 'react'
import './partnerSection.css'
import { Grid, makeStyles } from '@material-ui/core'
import Marquee from 'react-fast-marquee'

export default function PartnerSection() {
  const useStyles = makeStyles((theme) => ({
    partnerSectionWrap: {
      marginTop: '2em',
    },
    PartnerSection: {
      width: '98%',
      padding: '5px',
      margin: '0.5em auto 2em !important',
      backgroundColor: 'white',
      borderRadius: '15px 15px 15px 15px',
      // borderLeft: '5px solid orange',
      // borderRight: '5px solid green',
      // boxShadow: '0px -2px 6px 0px rgba(242, 107, 110, 0.75)',
      // webkitBoxShadow: '0px 0px 8px 0px rgba(242, 107, 110, 0.75)',
      // mozBoxShadow: '0px 0px 8px 0px rgba(242, 107, 110, 0.75)',
    },
    partnerSlide: {
      textAlign: '-webkit-center',
    },
  }))
  const classes = useStyles()
  const partnersLogo = [
    {
      logo: 'nabardlogo.png',
    },
    {
      logo: 'bharatcall.jpg',
    },
    {
      logo: 'dgft.jpg',
    },
    {
      logo: 'fieo.jpg',
    },
    {
      logo: 'apeda.png',
    },
    {
      logo: 'aagama.jpg',
    },
    {
      logo: 'ibef.png',
    },
  ]
  return (
    <>
      <Grid className={classes.partnerSectionWrap}>
        <Grid container justifyContent="center" className="mb-3">
          {/* <img
            src={`${process.env.PUBLIC_URL}/assets/partners/partnersnameplate.png`}
            alt="Event and Updates"
          /> */}
          <h5 className="partnersNamePlate">Partners</h5>
        </Grid>
        <Grid container className={classes.PartnerSection}>
          <Grid className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <Grid className="row justify-content-center">
              <Marquee speed={50} gradient={false}>
                {partnersLogo.map((item, index) => (
                  <img
                    style={{ margin: 'auto' }}
                    key={index}
                    variant="square"
                    src={`${process.env.PUBLIC_URL}/assets/partners/${item.logo}`}
                    alt="FEED PARTNERS LOGO"
                    width="100"
                  />
                ))}
              </Marquee>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}
