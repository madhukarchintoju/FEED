import React from 'react'
import './myFpoHome.css'
import { Link } from 'react-router-dom'
import {
  makeStyles,
  Grid,
  Avatar,
  List,
  ListItem,
  ListItemText,
  Divider,
} from '@material-ui/core'
import Slider from 'react-slick'

export default function MyFpoHome(props) {
  const useStyles = makeStyles((theme) => ({
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
    newsfeeds: {
      overflow: 'auto',
      height: '410px',
      // backgroundColor: 'red',
      // border:'1px solid red',
      padding: '2px',
      // color: 'white',
      // backgroundImage: `url('https://images.unsplash.com/photo-1519681393784-d120267933ba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1124&q=100')`
      // backgroundImage: `URL("${process.env.PUBLIC_URL}/assets/my-fpo/home/notibgsix.jpg")`,
      backgroundSize: 'cover',
      color: 'black',
    },
    fpoUpdatesWrap: {
      boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)',
      webkitBoxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)',
      mozBoxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)',
    },
    fpoUpdatesHeading: {
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
  const fpoHomeData = [
    {
      name: 'About Fpo',
      icon: 'aboutfpc.png',
      link: '/myfpo/aboutfpo',
    },
    {
      name: 'Fpo Account',
      icon: 'fpcaccounts.png',
      link: '/myfpo/fpoaccount',
    },
    {
      name: 'FPO Business Plan',
      icon: 'fpcbusinessplan.png',
      link: '/myfpo/fpobusinessplan',
    },
    {
      name: 'Capacity Building',
      icon: 'capacitybuilding.png',
      link: '/myfpo/fpocapacitybuilding',
    },
    {
      name: 'FPO Compliances',
      icon: 'fpccompliances.png',
      link: '/myfpo/fpocomplainces',
    },
    {
      name: 'Agm & Board Meetings',
      icon: 'fpcagmboard.png',
      link: '/myfpo/fpoagmboard',
    },
    {
      name: 'Loans & Schemes',
      icon: 'fpcloansschemes.png',
      link: '/myfpo/fpoloanschemes',
    },

    {
      name: 'FPC Reports',
      icon: 'reports.png',
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
    slidesToShow: 4,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
  }
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="space-around"
        // alignItems="flex-start"
        className="myfpo-home"
      >
        <Grid container justifyContent="center">
          <img
            src={`${process.env.PUBLIC_URL}/assets/my-fpo/home/myfpcnameplate.png`}
            alt="..."
          />
        </Grid>
        <Grid
          container
          item
          lg={12}
          justifyContent="space-between"
          className="p-1"
        >
          <Grid container item lg={8} className="mx-auto">
            {fpoHomeData.map((item, index) => (
              <Grid key={index} item xs={6} md={3} lg={3}>
                <Grid className="homeItemWrap">
                  <Avatar
                    to={item.link}
                    component={Link}
                    variant="square"
                    className={classes.homeItem}
                    src={`${process.env.PUBLIC_URL}/assets/my-fpo/home/${item.icon}`}
                  >
                    {item.name}
                  </Avatar>
                </Grid>
              </Grid>
            ))}
          </Grid>
          <Grid lg={3} md={12} sm={12} xs={12}>
            <Grid className={classes.fpoUpdatesWrap}>
              <h6 className={classes.fpoUpdatesHeading}>FEED Updates</h6>
              <Grid style={{ height: '460px', overflow: 'hidden' }}>
                <Slider {...settings}>
                  {fpcnewsupdates.map((item, index) => (
                    <Grid key={index} container justifyContent="space-around">
                      <Grid
                        container
                        justifyContent="space-around"
                        style={{ alignItems: 'center' }}
                      >
                        <Grid item lg={2}>
                          <img
                            src={`${process.env.PUBLIC_URL}/assets/my-fpo/home/${item.logo}`}
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
          </Grid>
        </Grid>
        <Grid
          container
          item
          lg={12}
          xs={12}
          style={{
            // backgroundImage: `URL("${process.env.PUBLIC_URL}/assets/my-fpo/home/pointsbg.jpg")`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            // opacity:"0.1",
            // backgroundImage: `url("${process.env.PUBLIC_URL}/assets/my-fpo/home/keypointsbg.jpg"), linear-gradient(90deg, rgba(246,246,246,1) 35%, rgba(255,255,255,1) 100%)`,
            // filter:'FlipV',
            // msFilter: "FlipV",
            // transform: 'rotateY(180deg)',
            // border:'1px solid red',
            margin: '5px',
            borderRadius: '15px 15px',
            padding: '2em',
          }}
        >
          <h4
            style={{
              // textDecoration: 'underline',
              fontFamily: `'STIX Two Text', serif`,
              fontWeight: '600',
              alignItems: 'center',
              marginBottom: '0px',
            }}
          >
            Glance at the services offered to FPOs by FEED
          </h4>
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
              To cater to the needs of FPOs by connecting them to various STATE
              &amp; central govt. schemes &amp; orgs like Export promotional
              councils/committees
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
              To render end-to-end support in exporting their product in global
              markets through latest technology software{' '}
            </li>
            <li>
              To serve as a guide in raising L/Cs, taking export insurance
              policies, Logistic support etc.
            </li>
            <li>
              To provide the technical support in managing day-to-day activities
              like preparing business plan, legal and annual compliances etc.
            </li>
            <li>
              To assess the capital requirements &amp; financial viability of
              FPO and accordingly perform the resource mobilization and credit
              support
            </li>
            <li>
              To establish processing units to do value addition to FPO products
              to enhance their members income levels
            </li>
            <li>
              To provide support in marketing their products through E-commerce
              and in International fairs
            </li>
            <li>
              To integrate agriculture marketing infrastructure support to the
              end roots and supply the farm machinery and other inputs at low
              costs to FPOs
            </li>
          </ul>
        </Grid>
      </Grid>
    </>
  )
}
