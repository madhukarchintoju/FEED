import React from 'react'
import './myFarmHome.css'
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

export default function MyFarmHome() {
  const useStyles = makeStyles((theme) => ({
    grid: {
      marginTop: '1em',
    },
    imageGrid: {
      '@media (max-width: 768px)': {
        display: 'none',
      },
    },
    grassLogo: {
      height: '13em',
    },
    antLogo: {
      height: '20em',
    },
    navLink: {
      width: '8em',
      height: '8em',
      '@media (max-width: 768px)': {
        width: '4em',
        height: '4em',
      },
    },
    feedConnect: {
      backgroundColor: '#a4cf3e',
      '@media (max-width: 768px)': {
        marginTop: '2em',
      },
    },
    guideItem: {
      paddingTop: '0.4em',
      borderRadius: '3em',
      maxWidth: '19em',
      margin: '1em',
    },
    color: {
      color: 'black',
      fontWeight: '500',
    },
    newsfeedsWrap: {
      boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)',
      webkitBoxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)',
      mozBoxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)',
    },
    newsfeeds: {
      overflow: 'auto',
      height: '400px',
      backgroundColor: 'white',
    },
    newsfeedsHeading: {
      height: '2em',
      textAlign: 'center',
      backgroundColor: '#d2cf6e',
    },
    farmUpdatesWrap: {
      boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)',
      webkitBoxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)',
      mozBoxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)',
    },
    farmUpdatesHeading: {
      height: '2em',
      paddingTop: '5px',
      justifyContent: 'center',
      textAlign: 'center',
      alignItems: 'center',
      backgroundColor: 'rgb(107 109 153)',
      color: 'white',
    },
  }))
  const classes = useStyles()

  const homeData = [
    {
      name: 'Fruits',
      icon: 'fruits.png',
      path: '/myfarm/fruits',
    },
    {
      name: 'Vegetables',
      icon: 'vegetables.png',
      path: '/myfarm/vegetables',
    },
    {
      name: 'Spices',
      icon: 'spices.png',
      path: '/myfarm/spices',
    },
    {
      name: 'Cereals',
      icon: 'cereals.png',
      path: '/myfarm/cereals',
    },
    {
      name: 'Oil Seeds',
      icon: 'oilseeds.png',
      path: '/myfarm/oilSeeds',
    },
    {
      name: 'Forest Products',
      icon: 'forestprod.png',
      path: '/myfarm/forestProducts',
    },
    {
      name: 'Animal Husb',
      icon: 'liveanimals.png',
      path: '/myfarm/animalhusbandry',
    },
    {
      name: 'Poultry',
      icon: 'liveanimals.png',
      path: '/myfarm/poultry',
    },
    {
      name: 'Aqua',
      icon: 'aqua.png',
      path: '/myfarm/aqua',
    },
    {
      name: 'Dairy',
      icon: 'dairy.png',
      path: '/myfarm/dairy',
    },
    {
      name: 'Plants',
      icon: 'plants.png',
      path: '/myfarm/plants',
    },
    {
      name: 'Flowers',
      icon: 'flowers.png',
      path: '/myfarm/flowers',
    },
    {
      name: 'Plantation Crop',
      icon: 'plantationcrop.png',
      path: '/myfarm/plantationcrop',
    },
    {
      name: 'Fabric',
      icon: 'fabrics.png',
      path: '/myfarm/fabric',
    },
    {
      name: 'Others',
      icon: 'others.png',
      path: '/myfarm/others',
    },
  ]

  const farmnewsupdates = [
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
    slidesToShow: 4,
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
      <Grid
        container
        direction="row"
        justifyContent="space-around"
        alignItems="flex-start"
        className={classes.grid}
      >
        <Grid
          container
          direction="row"
          item
          lg={12}
          xs={12}
          justifyContent="flex-start"
          alignItems="center"
        >
          {homeData.map((item, index) => (
            <Grid
              key={index}
              xs={6}
              lg={2}
              item
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
              className="list-item"
              component={Link}
              to={item.path}
            >
              <Grid item className={classes.guideItem}>
                <Avatar
                  variant="square"
                  className={classes.navLink}
                  src={`${process.env.PUBLIC_URL}/assets/my-farm/home/${item.icon}`}
                >
                  {item.name}
                </Avatar>
              </Grid>
              <Grid item className={classes.color}>
                {item.name}
              </Grid>
            </Grid>
          ))}
        </Grid>
        {/* <Grid lg={3} md={12} sm={12} xs={12}>
          <Grid className={classes.farmUpdatesWrap}>
            <h6 className={classes.farmUpdatesHeading}>FEED Updates</h6>
            <Grid style={{ height: '460px', overflow: 'hidden' }}>
              <Slider {...settings}>
                {farmnewsupdates.map((item, index) => (
                  <Grid key={index} container justifyContent="space-around">
                    <Grid
                      container
                      justifyContent="space-around"
                      style={{ alignItems: 'center' }}
                    >
                      <Grid item lg={2}>
                        <img
                          src={`${process.env.PUBLIC_URL}/assets/my-farm/home/${item.logo}`}
                          width="100"
                          alt=""
                        />
                      </Grid>
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
        </Grid> */}
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
            <Tab label="feed to farm" {...a11yProps(0)} />
            <Tab label="feed updates" {...a11yProps(1)} />
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
          <TabPanel value={value} index={1}>
            <Grid style={{ height: '460px', overflow: 'hidden' }}>
              {farmnewsupdates.map((item, index) => (
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
            </Grid>
          </TabPanel>
        </div>
      </Grid>
      {/* <Grid container justifyContent="center">
        <Button className={classes.feedConnect} variant="contained">
          <b>Connect FEED </b>
          <Icon className="fas fa-angle-double-right"></Icon>
        </Button>
      </Grid> */}
    </>
  )
}
