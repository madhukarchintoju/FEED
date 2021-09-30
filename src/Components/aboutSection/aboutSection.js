import React, { useEffect } from 'react'
import {
  Grid,
  makeStyles,
  Card,
  CardActionArea,
  CardContent,
} from '@material-ui/core'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import i18n from 'i18next'
import './aboutSection.css'

export default function AboutSection(props) {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
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
              <Grid
                item
                lg={5}
                md={6}
                sm={6}
                className={classes.objectiveBg}
                data-aos="fade-up"
              >
                <Grid>
                  <h4 className={classes.textRed}>FEED Main Objective:</h4>
                  <Grid className={classes.objectiveContent}>
                    <p>{t('main_objective')}</p>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              container
              justifyContent="space-around"
              style={{ marginTop: '0.2em' }}
            >
              <Grid item lg={5} md={5} sm={5} data-aos="zoom-in-right">
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
                          src={`${process.env.PUBLIC_URL}/assets/aboutsection/vision.png`}
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
              <Grid item lg={5} md={5} sm={5} data-aos="zoom-in-left">
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
                          src={`${process.env.PUBLIC_URL}/assets/aboutsection/mission.png`}
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
            <Grid container justifyContent="center" data-aos="zoom-in-up">
              <Grid item lg={11} md={11} sm={11} className={classes.aboutBg}>
                {/* <h4>About us</h4> */}
                <Grid className={classes.aboutUsContent}>
                  <p>{t('about_para_one')}</p>
                  <p>{t('about_para_two')}</p>
                  <Grid container justifyContent="flex-end">
                    {props.shortView && (
                      <Link to="/aboutsection" className="text-dark">
                        <u>Read more...</u>
                      </Link>
                    )}
                  </Grid>
                  {!props.shortView && (
                    <>
                      <p>{t('about_para_three')}</p>
                      <p>{t('about_para_four')}</p>
                      <p>{t('about_para_five')}</p>
                      <p>{t('about_para_six')}</p>
                      <p>{t('about_para_seven')}</p>
                      <p>{t('about_para_eight')}</p>
                    </>
                  )}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}
