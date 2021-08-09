import {
  Grid,
  makeStyles,
  Card,
  CardActionArea,
  CardContent,
} from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import i18n from 'i18next'
import './aboutSection.css'

export default function AboutSection(props) {
  const { t } = useTranslation()
  const languageChange = (event) => {
    i18n.changeLanguage(event.target.value)
  }
  const useStyles = makeStyles((theme) => ({
    aboutBg: {
      marginTop: '1em',
      padding: '1em',
      background: 'rgba(255, 255, 255, 0.8)',
      borderRadius: '20px 20px',
      boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)',
      webkitBoxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)',
      mozBoxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)',
    },
    // aboutSectionWrap: {
    //   backgroundImage: `URL("${process.env.PUBLIC_URL}/assets/home/aboutsectionpplainbnr.jpg")`,
    //   backgroundRepeat: 'no-repeat',
    //   backgroundSize: '100% 100%',
    //   paddingBottom: '1em',
    // },
    objectiveBg: {
      margin: '5px',
      opacity: '0.5em',
      color: 'white',
      padding: '1em',
      background: 'rgba(255, 255, 255, 0.8)',
      borderRadius: '20px 20px',
      boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)',
      webkitBoxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)',
      mozBoxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)',
      height: 'fit-content',
    },
    objectiveContent: {
      fontWeight: '500',
      color: 'black',
      textAlign: 'justify',
      textJustify: 'inter-word',
      '@media (max-width:768px)': {
        fontSize: '12px',
      },
    },
    missionContent: {
      fontWeight: '500',
      color: 'black',
      '@media (max-width:768px)': {
        fontSize: '12px',
      },
    },
    visionContent: {
      fontWeight: '500',
      color: 'black',
      '@media (max-width:768px)': {
        fontSize: '12px',
      },
    },
    aboutUsContent: {
      fontWeight: '500',
      color: 'black',
      textAlign: 'justify',
      textJustify: 'inter-word',
      '@media (max-width:768px)': {
        fontSize: '12px',
      },
    },
    visionCard: {
      height: '100%',
      background: 'rgba(255, 255, 255, 0.8)',
      borderRadius: '20px 20px',
      textAlign: 'justify',
      textJustify: 'inter-word',
      boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)',
      webkitBoxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)',
      mozBoxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)',
    },
    missionCard: {
      height: '100%',
      background: 'rgba(255, 255, 255, 0.8)',
      borderRadius: '20px 20px',
      textAlign: 'justify',
      textJustify: 'inter-word',
      boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)',
      webkitBoxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)',
      mozBoxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)',
    },
    textRed: {
      color: 'red',
    },
    aboutFeedHeading: {
      width: '15%',
      padding: '0.25em',
      backgroundColor: '#008689',
      boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)',
      webkitBoxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)',
      mozBoxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)',
      color: 'white',
      marginTop: '0.75em',
      textAlign: 'end',
      transformOrigin: 'bottom left',
      transform: 'skewX(-30deg, 0deg)',
      '@media (max-width:768px)': {
        fontSize: '14px',
      },
    },
    aboutFeedBg: {
      backgroundImage: `URL("${process.env.PUBLIC_URL}/assets/aboutsection/aboutusbg.png")`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    },
  }))
  const classes = useStyles()
  const aboutUsContent = {
    contentOne: `FARM TO FOREIGN EXPORTS ENTREPRENEURSHIP DEVELOPMENT MULTI STATE COOPERATIVE SOCIETY LTD. (FEED) registered under MSCS Act, 2002 with Regd.No. MSCS /CR /1295 /2020 and currently operating in the states of Andhra Pradesh and Telangana. `,
    contentTwo: `FEED is a multi - state cooperative society We're the first - of - its kind export based multi - state cooperative society working for the uplift of exports from farmers, new entrepreneurs and MSMES from rural and semi - urban areas through the concept of product-based FARMER PRODUCER ORGANISATIONS (FPO) by conducting EXPORT PROMOTIONAL MEETINGS in all districts of India. `,
    contentThree: `FEED connects with around 15+ Central Government departments, Export Based Organizations (Banks, Ports, CHAs, Export promotion councils, Commodity boards, Embassies, FIEO, DGFT, NABARD, NCDC, ECGC, SFAC etc) to ensure updated data dissemination on export prices, govt. schemes to FEED members (FPOs, MSMEs etc.) `,
    contentFour: `FEED signs MoU with State Governments to develop export entrepreneurship & establish value addition units in order to enhance exports and economy of the states.`,
    contentFive: ` We promote exports by conducting EXPORT PROMOTIONAL MEETINGS in every district. We tend to create awareness on exports and inform the product potentiality of various agricultural commodities in International markets through our export promotional meetings.`,
    contentSix: `FEED forms PRODUCT - BASED EXPORT ORIENTED FPOs for the top 10 products in every district. FEED provides hand - holding support to such FPOs formed throughout the export cycle. `,
    contentSeven: `We also assist the FPOs in establishing processing units to enhance their income levels and help them reach the International quality standards.`,
    contentEight: ` All in all, FEED's vision is to provide the FPOS & MSMEs the exposure to best prices in both domestic and international markets and render end - to - end support in capturing such markets.`,
  }
  return (
    <>
      <Grid
        item
        container
        justifyContent="center"
        className={classes.aboutSectionWrap}
      >
        <Grid item container justifyContent="space-around">
          <Grid className={classes.aboutFeedBg}>
            <h4 className={classes.aboutFeedHeading}>About FEED</h4>
            <Grid
              container
              justifyContent="space-around"
              className={classes.aboutFeedContent}
            >
              <Grid item lg={5} md={4} sm={4}>
                <img
                  src={`${process.env.PUBLIC_URL}/assets/aboutsection/aboutfeedstartuplogo.png`}
                  width="68%"
                  className="img-fluid"
                  alt=""
                />
              </Grid>
              <Grid item lg={5} md={6} sm={6} className={classes.objectiveBg}>
                <Grid>
                  <h4 className={classes.textRed}>FEED Main Objective:</h4>
                  <Grid className={classes.objectiveContent}>
                    <p className="m-0">
                      FEED is a multi-state co-operative society working for the
                      uplift of exports from all corners of India, We Provide
                      <br />
                      Crucial technical software and social platform connecting
                      : "Farmers, Traders, MSME industries &amp; new
                      entrepreneurs" in Rural and Semi Urban areas
                    </p>
                    <p className="text-center m-0">with</p>
                    <p>
                      "International markets, Export Promotional councils,
                      Central and state governments, Banks and Financial
                      institutes, ports" by organizing Exports Promotional
                      meetings, Forming FPO's (product wise) and supporting the
                      FPOs with technical information &amp; support on
                      processing export orders.
                    </p>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              container
              justifyContent="space-around"
              style={{ marginTop: '0.2em' }}
            >
              <Grid item lg={5} md={5} sm={5}>
                <Card className={classes.visionCard}>
                  <CardActionArea>
                    <CardContent>
                      <Grid
                        container
                        alignItems="center"
                        justifyContent="space-between"
                      >
                        <h4 className={classes.textRed}>Vision</h4>
                        <img
                          src={`${process.env.PUBLIC_URL}/assets/vision.png`}
                          alt=""
                          width="80"
                        />
                      </Grid>
                      <Grid className={classes.visionContent}>
                        <p>{t('vision')}</p>
                      </Grid>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
              <Grid item lg={5} md={5} sm={5}>
                <Card className={classes.missionCard}>
                  <CardActionArea>
                    <CardContent>
                      <Grid
                        container
                        alignItems="center"
                        justifyContent="space-between"
                      >
                        <h4 className={classes.textRed}>Mission</h4>
                        <img
                          src={`${process.env.PUBLIC_URL}/assets/mission.png`}
                          alt=""
                          width="80"
                        />
                      </Grid>
                      <Grid className={classes.missionContent}>
                        <p>{t('mission')}</p>
                      </Grid>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            </Grid>
            <Grid container justifyContent="center">
              <Grid item lg={11} md={11} sm={11} className={classes.aboutBg}>
                {/* <h4>About us</h4> */}
                <Grid className={classes.aboutUsContent}>
                  <p>
                    FARM TO FOREIGN EXPORTS ENTREPRENEURSHIP DEVELOPMENT MULTI
                    STATE COOPERATIVE SOCIETY LTD. (FEED) registered under MSCS
                    Act, 2002 with Regd.No. MSCS /CR /1295 /2020 and currently
                    operating in the states of Andhra Pradesh and Telangana.
                  </p>
                  <p>
                    FEED is a multi - state cooperative society We're the first
                    - of - its kind export based multi - state cooperative
                    society working for the uplift of exports from farmers, new
                    entrepreneurs and MSMES from rural and semi - urban areas
                    through the concept of product-based FARMER PRODUCER
                    ORGANISATIONS (FPO) by conducting EXPORT PROMOTIONAL
                    MEETINGS in all districts of India.
                  </p>
                  <Grid container justifyContent="flex-end">
                    {props.shortView && (
                      <Link to="/aboutsection" className="text-dark">
                        <u>Read more...</u>
                      </Link>
                    )}
                  </Grid>
                  {!props.shortView && (
                    <>
                      <p>{aboutUsContent.contentThree}</p>
                      <p>{aboutUsContent.contentFour}</p>
                      <p>{aboutUsContent.contentFive}</p>
                      <p>{aboutUsContent.contentSix}</p>
                      <p>{aboutUsContent.contentSeven}</p>
                      <p>{aboutUsContent.contentEight}</p>
                    </>
                  )}
                </Grid>
                <p>{aboutUsContent.content}</p>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}
