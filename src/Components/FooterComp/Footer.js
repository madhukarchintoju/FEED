import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import { Grid, makeStyles } from '@material-ui/core'
export default function Footer() {
  const useStyles = makeStyles((theme) => ({
    footerWrap: {
      backgroundColor: '#ff5a00',
      // position: 'fixed',
      left: '0',
      bottom: '0',
      width: '100%',
      color: 'white',
      marginTop: '2em',
      paddingTop: '1em',
      paddingBottom: '0.5em',
    },
    footerLinkHeading: {
      borderBottom: '1px solid white',
    },
    linkColor: {
      color: 'white',
      fontSize: '0.85em',
    },
    footerPolicyWrap: {
      borderTop: '1px solid white',
      marginTop: '1em',
      paddingTop: '0.5em',
    },
  }))
  const classes = useStyles()
  const quickLinks = [
    {
      name: 'Home',
      link: '/',
    },
    {
      name: 'About us',
      link: '/aboutSection',
    },
    {
      name: 'Services',
      link: '/serviceSection',
    },
    {
      name: 'Events',
      link: '/eventSection',
    },
    {
      name: 'How FEED Works',
      link: '/feedWorkingSection',
    },
    {
      name: 'FPO',
      link: 'myfpo',
    },
    {
      name: 'Exports',
      link: 'myexport',
    },
    {
      name: 'Analytics',
      link: '/analytics',
    },
    {
      name: 'Contact us',
      link: '',
    },
    {
      name: 'Login',
      link: '/login',
    },
    {
      name: 'Register',
      link: '/register',
    },
    {
      name: 'Contact FEED',
      link: '',
    },
  ]
  const myFpoLinks = [
    {
      name: 'About FPO',
      link: '/myfpo/aboutfpo',
    },
    {
      name: 'FPO Accounts',
      link: '/myfpo/fpoaccount',
    },
    {
      name: 'FPO Business Plan',
      link: '/myfpo/fpobusinessplan',
    },
    {
      name: 'FPO Compliance & Registary',
      link: '/myfpo/fpocomplainces',
    },
    {
      name: 'FPO AGM & Board Meeting',
      link: '/myfpo/fpoagmboard',
    },
    {
      name: 'FPO Loans & Schemes',
      link: '/myfpo/fpoloanschemes',
    },
    {
      name: 'Connect FEED',
      link: '',
    },
  ]
  const myBusinessLinks = [
    {
      name: 'Business Profile',
      links: '/mybusiness/businessprofile',
    },
    {
      name: 'Business Account',
      links: '/mybusiness/businessaccount',
    },
    {
      name: 'Business Plan',
      links: '/mybusiness/businessplan',
    },
    {
      name: 'Compliance & Registary',
      links: '/mybusiness/businesscomplaincereg',
    },
    {
      name: 'Loans & Schemes',
      links: '/mybusiness/loanschemes',
    },
    {
      name: 'Marketing Support',
      links: '/mybusiness/marketingsupport',
    },
    {
      name: 'Connect FEED',
      links: '',
    },
  ]
  const myExportsLinks = [
    {
      name: 'Why Exports',
      link: '/myexport/whyexport',
    },
    {
      name: 'How to start Exports',
      link: '/myexport/startexport',
    },
    {
      name: 'Product selection',
      link: '/myexport/exportproductselection',
    },
    {
      name: 'Buyers connection',
      link: '/myexport/exportbuyersconnection',
    },
    {
      name: 'Export - Import Rules & regulations',
      link: '/myexport/eximpolicyregulation',
    },
    {
      name: 'Export - import Finance & Insurance',
      link: '/myexport/eximfinanceinsurance',
    },
    {
      name: 'Process of export order',
      link: '/myexport/processexportorder',
    },
    {
      name: 'Export Import Documentation',
      link: '/myexport/eximdocumentation',
    },
    {
      name: 'Global trade updates',
      link: '/myexport/globaltradeupdates',
    },

    {
      name: 'Events',
      link: '/myexport/exportevents',
    },
    {
      name: 'Tools & service',
      link: '/myexport/exporttoolservices',
    },
    {
      name: 'Export - Import Tarriff & Benifits',
      link: '/myexport/eximtarrifbenefits',
    },
    {
      name: 'Contact FEED',
      link: '',
    },
  ]
  const myFarmLinks = [
    {
      name: 'Fruits',
      link: '/myfarm/fruits',
    },
    {
      name: 'Vegetables',
      link: '/myfarm/vegetables',
    },
    {
      name: 'Spices',
      link: '/myfarm/spices',
    },
    {
      name: 'Cereals',
      link: '/myfarm/cereals',
    },
    {
      name: 'Oil Seeds',
      link: '/myfarm/oilSeeds',
    },
    {
      name: 'Forest products',
      link: '/myfarm/forestProducts',
    },
    {
      name: 'Animal Husb',
      link: '/myfarm/animalhusbandry',
    },
    {
      name: 'Poultry',
      link: '/myfarm/poultry',
    },
    {
      name: 'Aqua',
      link: '/myfarm/aqua',
    },
    {
      name: 'Dairy',
      link: '/myfarm/dairy',
    },
    {
      name: 'Plants',
      link: '/myfarm/plants',
    },
    {
      name: 'Flowers',
      link: '/myfarm/flowers',
    },
    {
      name: 'Plantation Crop',
      link: '/myfarm/plantationCrop',
    },
    {
      name: 'Fabric',
      link: '/myfarm/fabric',
    },
    {
      name: 'Others',
      link: '/myfarm/others',
    },
  ]
  const myProductsLinks = [
    {
      name: 'Production',
      link: '',
    },
    {
      name: 'Trade',
      link: '',
    },
    {
      name: 'Untapped Market',
      link: '',
    },
    {
      name: 'By Products',
      link: '',
    },
    {
      name: 'Processing',
      link: '',
    },
    {
      name: 'DataBase & Docs',
      link: '',
    },
    {
      name: 'Schemes - policies',
      link: '',
    },
    {
      name: 'Product Guide',
      link: '',
    },
    {
      name: 'Feed Foot Print',
      link: '',
    },
  ]
  const myToolServicesLinks = [
    {
      name: 'FPO Tools',
      link: '/mytools/fpo',
    },
    {
      name: 'Farmer Tools',
      link: '/mytools/farmer',
    },
    {
      name: 'Exports Tools',
      link: '/mytools/exports',
    },
    {
      name: 'Business / MSME Tools',
      link: '/mytools/msme',
    },
    {
      name: 'Education  Tools',
      link: '/mytools/student',
    },
    {
      name: 'Contact FEED',
      link: '',
    },
  ]
  const careerLinks = [
    {
      name: 'Why FEED',
      link: '',
    },
    {
      name: 'Opportunities',
      link: '',
    },
    {
      name: 'Internship programs',
      link: '',
    },
    {
      name: 'FAQs',
      link: '',
    },
    {
      name: 'Contact FEED',
      link: '',
    },
  ]
  const feedInsightsLinks = [
    {
      name: 'Suggestions',
      link: '',
    },
    {
      name: 'Sample Works',
      link: '',
    },
    {
      name: 'Queries',
      link: '',
    },
    {
      name: 'Complaints',
      link: '',
    },
    {
      name: 'FAQs',
      link: '',
    },
    {
      name: 'Contact FEED',
      link: '',
    },
  ]
  return (
    <>
      <Grid className={classes.footerWrap}>
        {window.innerWidth > 720 ? (
          <Grid
            container
            direction="row"
            justify="space-evenly"
            alignContent="center"
          >
            <Grid lg={1} md={6} sm={6} xs={12}>
              <Grid className={classes.footerLinkHeading}>
                <h6>Quick Links</h6>
              </Grid>
              {quickLinks.map((item, index) => (
                <Grid
                  key={index}
                  to={item.link}
                  component={Link}
                  className={classes.linkColor}
                >
                  <li className="nav-link">{item.name}</li>
                </Grid>
              ))}
            </Grid>
            <Grid lg={1} md={6} sm={6} xs={12}>
              <Grid className={classes.footerLinkHeading}>
                <h6>MY EXPORTS</h6>
              </Grid>
              {myExportsLinks.map((item, index) => (
                <Grid
                  key={index}
                  to={item.link}
                  component={Link}
                  className={classes.linkColor}
                >
                  <li className="nav-link">{item.name}</li>
                </Grid>
              ))}
            </Grid>
            <Grid lg={1} md={6} sm={6} xs={12}>
              <Grid className={classes.footerLinkHeading}>
                <h6>MY FARM</h6>
              </Grid>
              {myFarmLinks.map((item, index) => (
                <Grid
                  key={index}
                  to={item.link}
                  component={Link}
                  className={classes.linkColor}
                >
                  <li className="nav-link">{item.name}</li>
                </Grid>
              ))}
            </Grid>
            <Grid lg={1} md={6} sm={6} xs={12}>
              <Grid>
                <Grid className={classes.footerLinkHeading}>
                  <h6>MY FPO</h6>
                </Grid>
                {myFpoLinks.map((item, index) => (
                  <Grid
                    key={index}
                    to={item.link}
                    component={Link}
                    className={classes.linkColor}
                  >
                    <li className="nav-link">{item.name}</li>
                  </Grid>
                ))}
              </Grid>
              <Grid className="mt-2">
                <Grid className={classes.footerLinkHeading}>
                  <h6>CAREERS</h6>
                </Grid>
                {careerLinks.map((item, index) => (
                  <Grid
                    key={index}
                    to={item.link}
                    component={Link}
                    className={classes.linkColor}
                  >
                    <li className="nav-link">{item.name}</li>
                  </Grid>
                ))}
              </Grid>
            </Grid>
            <Grid lg={1} md={6} sm={6} xs={12}>
              <Grid>
                <Grid className={classes.footerLinkHeading}>
                  <h6>MY BUSINESS</h6>
                </Grid>
                {myBusinessLinks.map((item, index) => (
                  <Grid
                    key={index}
                    to={item.link}
                    component={Link}
                    className={classes.linkColor}
                  >
                    <li className="nav-link">{item.name}</li>
                  </Grid>
                ))}
              </Grid>
              <Grid className="mt-2">
                <Grid className={classes.footerLinkHeading}>
                  <h6>FEED INSIGHTS</h6>
                </Grid>
                {feedInsightsLinks.map((item, index) => (
                  <Grid
                    key={index}
                    to={item.link}
                    component={Link}
                    className={classes.linkColor}
                  >
                    <li className="nav-link">{item.name}</li>
                  </Grid>
                ))}
              </Grid>
            </Grid>
            <Grid lg={1} md={6} sm={6} xs={12}>
              <Grid className={classes.footerLinkHeading}>
                <h6>MY PRODUCTS</h6>
              </Grid>
              {myProductsLinks.map((item, index) => (
                <Grid
                  key={index}
                  to={item.link}
                  component={Link}
                  className={classes.linkColor}
                >
                  <li className="nav-link">{item.name}</li>
                </Grid>
              ))}
            </Grid>
            <Grid lg={1} md={6} sm={6} xs={12}>
              <Grid className={classes.footerLinkHeading}>
                <h6>MY TOOLS &amp; SERVICES</h6>
              </Grid>
              {myToolServicesLinks.map((item, index) => (
                <Grid
                  key={index}
                  to={item.link}
                  component={Link}
                  className={classes.linkColor}
                >
                  <li className="nav-link">{item.name}</li>
                </Grid>
              ))}
            </Grid>
            <Grid lg={1} md={6} sm={6} xs={12}>
              <Grid>
                <h6 style={{ fontSize: '14px', textAlign: 'center' }}>
                  FEED STARUP APP
                </h6>
              </Grid>
              <Grid className="text-center" direction="column">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/footer/mobile.png`}
                  // width="90%"
                  alt="FEED APP"
                />
              </Grid>
              <Grid direction="column">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/footer/playstore.png`}
                  // width="90%"
                  alt="FEED APP"
                />
                <img
                  src={`${process.env.PUBLIC_URL}/assets/footer/appstore.png`}
                  // width="90%"
                  alt="FEED APP"
                />
              </Grid>
            </Grid>
          </Grid>
        ) : (
          ''
        )}
        <Grid
          container
          justify="space-evenly"
          className={classes.footerPolicyWrap}
        >
          <Grid>
            <Link to="/" style={{ color: 'white' }}>
              Terms & Conditions
            </Link>{' '}
            |
            <Link to="/" style={{ color: 'white' }}>
              {' '}
              Privacy Policy
            </Link>{' '}
            |
            <Link to="/" style={{ color: 'white' }}>
              {' '}
              Disclaimer
            </Link>
          </Grid>
          <Grid>
            <p>&copy; 2021-2022 FEED ORG. All Rights Reserved</p>
          </Grid>
          <Grid>
            <Grid className="my-auto header-social-icons">
              <a href="" rel="noreferrer">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/facebook.svg`}
                  width="30"
                  alt="facebook-icon"
                />
              </a>
              <a href="">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/instagram.svg`}
                  width="30"
                  alt="instagram-icon"
                />
              </a>
              <a href="">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/twitter.svg`}
                  width="30"
                  alt="twitter-icon"
                />
              </a>
              <a href="">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/linkedin.svg`}
                  width="30"
                  alt="linkedin-icon"
                />
              </a>
              <a href="">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/youtube.svg`}
                  width="30"
                  alt="youtube-icon"
                />
              </a>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}
