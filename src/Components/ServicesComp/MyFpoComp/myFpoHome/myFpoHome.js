import React, { useState } from 'react'
import './myFpoHome.css'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import {
  makeStyles,
  Grid,
  Avatar,
  List,
  ListItem,
  ListItemText,
  Divider,
  Tabs,
  Tab,
  Box,
  Typography,
} from '@material-ui/core'
import Slider from 'react-slick'

export default function MyFpoHome(props) {
  const useStyles = makeStyles((theme) => ({
    fpoHomeCard: {
      width: '150px',
      height: '150px',
      margin: '8px',
      background: '#fff',
      color: 'black',
      borderRadius: '15px 15px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      textAlign: 'center',
      textDecoration: 'none',
      boxShadow: '0 0px 3px rgba(0, 0, 0, 0.2)',
      transition: 'all 0.3s ease-out',
      '&:hover': {
        textDecoration: 'none',
        backgroundColor: '#f8e4a8',
        transform: 'translateY(-5px) scale(1.005) translateZ(0)',
      },
      '@media (max-width: 568px)': {
        width: '150px',
        height: '150px',
      },
    },
    homeItem: {
      width: '9em',
      height: '8em',
      // margin: '1em',
      '@media (max-width:768px)': {
        width: '4.5em',
        height: '4em',
      },
    },
    fpoConnectBtn: {
      // width: '15em',
      backgroundColor: '#ffc107',
    },
    newsfeedsWrap: {
      marginTop: '10px',
      boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)',
      webkitBoxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)',
      mozBoxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)',
    },
    // newsfeeds: {
    //   overflow: 'auto',
    //   height: '350px',
    //   padding: '2px',
    //   backgroundSize: 'cover',
    //   color: 'black',
    // },
    fpoUpdatesWrap: {
      height: '450px',
      overflow: 'hidden',
      borderRadius: '15px 15px',
      padding: '2px',
      boxShadow: '0px 0px 2px 0px rgba(0,0,0,0.5)',
      webkitBoxShadow: '0px 0px 2px 0px rgba(0,0,0,0.5)',
      mozBoxShadow: '0px 0px 2px 0px rgba(0,0,0,0.5)',
    },
    fpoUpdatesHeading: {
      display: 'flex',
      height: '2em',
      // paddingTop: '5px',
      justifyContent: 'center',
      textAlign: 'center',
      alignItems: 'center',
      borderRadius: '15px 15px 0px 0px',
      // backgroundColor: 'rgb(107 109 153)',
      backgroundColor: '#fae3a0',
      color: 'black',
    },
  }))
  const classes = useStyles()
  const fpoHomeData = [
    {
      name: 'About Fpo',
      icon: 'aboutbusiness.png',
      link: '/myfpo/aboutfpc',
    },
    {
      name: 'Fpo Account',
      icon: 'businessaccounts.png',
      link: '/myfpo/fpcaccount',
    },
    {
      name: 'FPO Business Plan',
      icon: 'businessplan.png',
      link: '/myfpo/fpcbusinessplan',
    },
    {
      name: 'Capacity Building',
      icon: 'businesscapacitybuilding.png',
      link: '/myfpo/fpccapacitybuilding',
    },
    {
      name: 'FPO Compliances',
      icon: 'businesscompliances.png',
      link: '/myfpo/fpccomplainces',
    },
    {
      name: 'Agm & Board Meetings',
      icon: 'businessagmboard.png',
      link: '/myfpo/fpcagmboard',
    },
    {
      name: 'Loans & Schemes',
      icon: 'businessloans.png',
      link: '/myfpo/fpcloanschemes',
    },

    {
      name: 'FPC Reports',
      icon: 'businessreports.png',
      link: '/myfpo/reports',
    },
  ]
  const fpcnewsupdates = [
    {
      logo: 'fpo.jpg',
      title: 'FPO',
      description:
        'FEED is a multi-state co-operative society working for the uplift of exports from all corners of India, We Provide',
    },
    {
      logo: 'farm.jpg',
      title: 'FARM',
      description:
        'NABARD helps multi-state co-operative society working for the uplift of exports from all corners of India, We Provide',
    },
    {
      logo: 'products.jpg',
      title: 'MY PRODUCTS',
      description:
        'FEED is a multi-state co-operative society working for the uplift of exports from all corners of India, We Provide',
    },
    {
      logo: 'business.jpg',
      title: 'MY BUSINESS',
      description:
        'NABARD helps multi-state co-operative society working for the uplift of exports from all corners of India, We Provide',
    },
    {
      logo: 'export.jpg',
      title: 'MY EXPORT',
      description:
        'FEED is a multi-state co-operative society working for the uplift of exports from all corners of India, We Provide',
    },
    {
      logo: 'market.jpg',
      title: 'MY MARKET',
      description:
        'FEED is a multi-state co-operative society working for the uplift of exports from all corners of India, We Provide',
    },
    {
      logo: 'education.jpg',
      title: 'MY EDUCATION',
      description:
        'FEED is a multi-state co-operative society working for the uplift of exports from all corners of India, We Provide',
    },
    {
      logo: 'tools.jpg',
      title: 'MY TOOLS',
      description:
        'FEED is a multi-state co-operative society working for the uplift of exports from all corners of India, We Provide',
    },
  ]
  const settings = {
    arrows: false,
    autoplay: true,
    speed: 200,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
  }
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  function TabPanel(props) {
    const { children, value, index, ...other } = props

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`scrollable-auto-tabpanel-${index}`}
        aria-labelledby={`scrollable-auto-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    )
  }

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  }

  function a11yProps(index) {
    return {
      id: `scrollable-auto-tab-${index}`,
      'aria-controls': `scrollable-auto-tabpanel-${index}`,
    }
  }
  return (
    <>
      <Grid container direction="row" justifyContent="space-around">
        <Grid
          container
          item
          lg={12}
          justifyContent="space-around"
          style={{ margin: '5px 0px' }}
        >
          <Grid container item lg={8} justifyContent="space-around">
            {fpoHomeData.map((item, index) => (
              <Grid
                key={index}
                to={item.link}
                component={Link}
                // lg={3}
                // md={3}
                // sm={6}
                // xs={5}
                item
                className={classes.fpoHomeCard}
              >
                <img
                  src={`${process.env.PUBLIC_URL}/assets/my-fpo/home/${item.icon}`}
                  alt="info logo"
                />
                <h6>{item.name}</h6>
              </Grid>
            ))}
          </Grid>
          <Grid lg={3} md={12} sm={12} xs={12} item>
            <Grid className={classes.fpoUpdatesWrap}>
              <h6 className={classes.fpoUpdatesHeading}>FEED Updates</h6>
              <Grid style={{ height: '100%', overflow: 'hidden' }}>
                <Slider {...settings}>
                  {fpcnewsupdates.map((item, index) => (
                    <Grid key={index} container justifyContent="space-around">
                      <Grid
                        container
                        justifyContent="space-around"
                        style={{ alignItems: 'center' }}
                      >
                        {window.innerWidth > 475 ? (
                          <Grid item lg={2}>
                            <img
                              src={`${process.env.PUBLIC_URL}/assets/my-fpo/home/${item.logo}`}
                              width="100"
                              alt=""
                            />
                          </Grid>
                        ) : (
                          ''
                        )}
                        <Grid item lg={9}>
                          <ListItemText
                            primary={item.title}
                            secondary={item.description}
                          />
                        </Grid>
                      </Grid>
                      <Divider />
                    </Grid>
                  ))}
                </Slider>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <div
          className="col-lg-10"
          style={{
            padding: '1em',
            margin: '2em 2em',
            borderRadius: '10px 10px',
            boxShadow: '0px 0px 4px 0px rgba(0,0,0,0.75)',
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
          >
            <Tab label="feed to fpo" {...a11yProps(0)} />
          </Tabs>
          <TabPanel value={value} index={0}>
            <ul style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
              <li>
                To conduct baseline survey and analyse the social and financial
                viability to form an FPO{' '}
              </li>
              <li>
                To provide statutory registration support for registration of
                company &amp; other formalities associated
              </li>
              <li>
                To cater to the needs of FPOs by connecting them to various
                STATE &amp; central govt. schemes &amp; orgs like Export
                promotional councils/committees
              </li>
              <li>
                To provide capacity building training to FPOs for better
                management and Workshops on Good Agricultural Practices (GAP) to
                producer members
              </li>
              <li>
                To build awareness on judicious and timely use of chemicals{' '}
              </li>
              <li>
                To provide required quality inspection certifications as per the
                export country/region
              </li>
              <li>
                To make them self-sustainable by providing domestic and
                International market linkages along with the database of
                International buyers from top 50 trading countries with India
              </li>
              <li>
                To render end-to-end support in exporting their product in
                global markets through latest technology software{' '}
              </li>
              <li>
                To serve as a guide in raising L/Cs, taking export insurance
                policies, Logistic support etc.
              </li>
              <li>
                To provide the technical support in managing day-to-day
                activities like preparing business plan, legal and annual
                compliances etc.
              </li>
              <li>
                To assess the capital requirements &amp; financial viability of
                FPO and accordingly perform the resource mobilization and credit
                support
              </li>
              <li>
                To establish processing units to do value addition to FPO
                products to enhance their members income levels
              </li>
              <li>
                To provide support in marketing their products through
                E-commerce and in International fairs
              </li>
              <li>
                To integrate agriculture marketing infrastructure support to the
                end roots and supply the farm machinery and other inputs at low
                costs to FPOs
              </li>
            </ul>
          </TabPanel>
        </div>
      </Grid>
    </>
  )
}
