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
      paddingTop: '1em',
      paddingBottom: '0.5em',
    },
    footerLinkHeading: {
      // borderBottom: '1px solid white',
      '&:before': {
        content: '',
        position: 'absolute',
        left: '50%',
        top: '0',
        height: '3px',
        width: '50px',
        borderRadius: '3px',
        borderBottom: '1px solid red',
        zIndex: '2',
        backgroundColor: '#007aff',
        marginLeft: '-25px',
      },
    },
    linkColor: {
      color: 'white',
      fontSize: '0.85em',
    },
    footerPolicyWrap: {
      borderTop: '1px solid white',
      // marginTop: '1em',
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
      name: 'How FEED Works',
      link: '/feedWorkingSection',
    },
    {
      name: 'Events',
      link: '/eventSection',
    },

    {
      name: 'FPO',
      link: 'myfpo',
    },
    {
      name: 'Exports',
      link: '/myexport',
    },
    {
      name: 'Exports Road Map',
      link: '/',
    },
    {
      name: 'Events & Updates',
      link: '/',
    },
    {
      name: 'Media',
      link: '/',
    },
    {
      name: 'Blogs',
      link: '/',
    },
    {
      name: 'Prices',
      link: '/',
    },
    {
      name: 'Contact us',
      link: '/',
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
      link: '/',
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
      name: 'Connect FPC',
      link: '/',
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
      links: '/',
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
      link: '/',
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
      link: '/',
    },
    {
      name: 'Trade',
      link: '/',
    },
    {
      name: 'Untapped Market',
      link: '/',
    },
    {
      name: 'By Products',
      link: '/',
    },
    {
      name: 'Processing',
      link: '/',
    },
    {
      name: 'DataBase & Docs',
      link: '/',
    },
    {
      name: 'Schemes - policies',
      link: '/',
    },
    {
      name: 'Product Guide',
      link: '/',
    },
    {
      name: 'Feed Foot Print',
      link: '/',
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
      link: '/',
    },
  ]
  const careerLinks = [
    {
      name: 'Why FEED',
      link: '/',
    },
    {
      name: 'Opportunities',
      link: '/',
    },
    {
      name: 'Internship programs',
      link: '/',
    },
    {
      name: 'FAQs',
      link: '/',
    },
    {
      name: 'Contact FEED',
      link: '/',
    },
  ]
  const feedInsightsLinks = [
    {
      name: 'Suggestions',
      link: '/',
    },
    {
      name: 'Sample Works',
      link: '/',
    },
    {
      name: 'Queries',
      link: '/',
    },
    {
      name: 'Complaints',
      link: '/',
    },
    {
      name: 'FAQs',
      link: '/',
    },
    {
      name: 'Contact FEED',
      link: '/',
    },
  ]

  const year = new Date().getFullYear()
  return (
    <>
      {/* <Grid className={classes.footerWrap}>
        {window.innerWidth > 720 ? (
          <Grid
            container
            direction="row"
            justifyContent="space-evenly"
            alignContent="center"
            className="footerLinks"
          >
            <Grid item lg={1} md={6} sm={6} xs={12}>
              <Grid className={classes.footerLinkHeading}>
                <h6 className="footerTitleBtmBrd">Quick Links</h6>
              </Grid>
              {quickLinks.map((item, index) => (
                <Grid
                  key={index}
                  to={item.link}
                  component={Link}
                  className={classes.linkColor}
                >
                  <li className="nav-link mt-2">{item.name}</li>
                </Grid>
              ))}
            </Grid>
            <Grid item lg={1} md={6} sm={6} xs={12}>
              <Grid className={classes.footerLinkHeading}>
                <h6 className="footerTitleBtmBrd">MY FPO</h6>
              </Grid>
              {myFpoLinks.map((item, index) => (
                <Grid
                  key={index}
                  to={item.link}
                  component={Link}
                  className={classes.linkColor}
                >
                  <li className="nav-link mt-2">{item.name}</li>
                </Grid>
              ))}
            </Grid>
            <Grid item lg={1} md={6} sm={6} xs={12}>
              <Grid className={classes.footerLinkHeading}>
                <h6 className="footerTitleBtmBrd">MY FARM</h6>
              </Grid>
              {myFarmLinks.map((item, index) => (
                <Grid
                  key={index}
                  to={item.link}
                  component={Link}
                  className={classes.linkColor}
                >
                  <li className="nav-link mt-2">{item.name}</li>
                </Grid>
              ))}
            </Grid>
            <Grid item lg={1} md={6} sm={6} xs={12}>
              <Grid className={classes.footerLinkHeading}>
                <h6 className="footerTitleBtmBrd">MY PRODUCTS</h6>
              </Grid>
              {myProductsLinks.map((item, index) => (
                <Grid
                  key={index}
                  to={item.link}
                  component={Link}
                  className={classes.linkColor}
                >
                  <li className="nav-link mt-2">{item.name}</li>
                </Grid>
              ))}
            </Grid>
            <Grid item lg={1} md={6} sm={6} xs={12}>
              <Grid className={classes.footerLinkHeading}>
                <h6 className="footerTitleBtmBrd">MY EXPORTS</h6>
              </Grid>
              {myExportsLinks.map((item, index) => (
                <Grid
                  key={index}
                  to={item.link}
                  component={Link}
                  className={classes.linkColor}
                >
                  <li className="nav-link mt-2">{item.name}</li>
                </Grid>
              ))}
            </Grid>
            <Grid item lg={1} md={6} sm={6} xs={12}>
              <Grid>
                <Grid className={classes.footerLinkHeading}>
                  <h6 className="footerTitleBtmBrd">MY BUSINESS</h6>
                </Grid>
                {myBusinessLinks.map((item, index) => (
                  <Grid
                    key={index}
                    to={item.link}
                    component={Link}
                    className={classes.linkColor}
                  >
                    <li className="nav-link mt-2">{item.name}</li>
                  </Grid>
                ))}
              </Grid>
              <Grid className="mt-2">
                <Grid className={classes.footerLinkHeading}>
                  <h6 className="footerTitleBtmBrd">FEED INSIGHTS</h6>
                </Grid>
                {feedInsightsLinks.map((item, index) => (
                  <Grid
                    key={index}
                    to={item.link}
                    component={Link}
                    className={classes.linkColor}
                  >
                    <li className="nav-link mt-2">{item.name}</li>
                  </Grid>
                ))}
              </Grid>
            </Grid>
            <Grid item lg={1} md={6} sm={6} xs={12}>
              <Grid>
                <Grid className={classes.footerLinkHeading}>
                  <h6 className="footerTitleBtmBrd">MY TOOLS &amp; SERVICES</h6>
                </Grid>
                {myToolServicesLinks.map((item, index) => (
                  <Grid
                    key={index}
                    to={item.link}
                    component={Link}
                    className={classes.linkColor}
                  >
                    <li className="nav-link mt-2">{item.name}</li>
                  </Grid>
                ))}
              </Grid>
              <Grid className="mt-2">
                <Grid className={classes.footerLinkHeading}>
                  <h6 className="footerTitleBtmBrd">CAREERS</h6>
                </Grid>
                {careerLinks.map((item, index) => (
                  <Grid
                    key={index}
                    to={item.link}
                    component={Link}
                    className={classes.linkColor}
                  >
                    <li className="nav-link mt-2">{item.name}</li>
                  </Grid>
                ))}
              </Grid>
            </Grid>
            <Grid item lg={1} md={6} sm={6} xs={12}>
              <Grid>
                <h6 style={{ fontSize: '14px', textAlign: 'center' }}>
                  FEED STARTUP APP
                </h6>
              </Grid>
              <Grid className="text-center banner-right mt-4">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/footer/mobile.png`}
                  width="90%"
                  alt="FEED APP"
                />
              </Grid>
              <Grid>
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
          justifyContent="space-around"
          className={classes.footerPolicyWrap}
        >
          <Grid lg={4} style={{ textAlign: 'center' }}>
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
          <Grid lg={4} style={{ textAlign: 'center' }}>
            <p>&copy; 2021-2022 FEED ORG. All Rights Reserved</p>
          </Grid>
          <Grid lg={4} style={{ textAlign: 'center' }}>
            <Grid className="my-auto header-social-icons">
              <a href="https://www.facebook.com/FEEDORGOFFICAL/">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/facebook.svg`}
                  width="30"
                  alt="facebook-icon"
                />
              </a>
              <a href="https://www.instagram.com/feed6306/">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/instagram.svg`}
                  width="30"
                  alt="instagram-icon"
                />
              </a>
              <a href="https://www.twitter.com/feedorg_">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/twitter.svg`}
                  width="30"
                  alt="twitter-icon"
                />
              </a>
              <a href="https://www.linkedin.com/in/feed-org-32637b1ba/">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/linkedin.svg`}
                  width="30"
                  alt="linkedin-icon"
                />
              </a>
              <a href="https://www.youtube.com/channel/UCTH5vGORnLhVLc5RLrpMl3A">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/youtube.svg`}
                  width="30"
                  alt="youtube-icon"
                />
              </a>
            </Grid>
          </Grid>
        </Grid>
      </Grid> */}

      <footer className="new_footer_area bg_color">
        <div className="new_footer_top">
          <div className="container">
            <div style={{ display: 'flex' }}>
              {/* <div class="col-lg-3 col-md-6">
                <div class="f_widget company_widget wow fadeInLeft" data-wow-delay="0.2s" style={{visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInLeft'}}>
                  <h3 class="f-title f_600 t_color f_size_18">Get in Touch</h3>
                  <p>Don’t miss any updates of our new templates and extensions.!</p>
                  <form action="#" class="f_subscribe_two mailchimp" method="post" novalidate="true" _lpchecked="1">
                    <input type="text" name="EMAIL" class="form-control memail" placeholder="Email"/>
                    <button class ="btn btn_get btn_get_two" type ="submit">Subscribe</button>
                    <p class ="mchimp-errmessage" style={{display: 'none'}}></p>
                    <p class ="mchimp-sucmessage" style={{display: 'none'}}></p>
                  </form>
                </div>
              </div> */}
              <div className="col-lg-2 col-md-6 col-sm-6 col-xs-6">
                <div
                  className="f_widget about-widget pl_70 wow fadeInLeft"
                  data-wow-delay="0.4s"
                  style={{
                    visibility: 'visible',
                    animationDelay: '0.4s',
                    animationName: 'fadeInLeft',
                  }}
                >
                  <h3 className="f-title f_600 t_color f_size_18">
                    Quick Links
                  </h3>
                  <ul className="list-unstyled f_list">
                    <li>
                      <a href="#">Sitemap</a>
                    </li>
                    <li>
                      <a href="#">Pricing</a>
                    </li>
                    <li>
                      <a href="#">Join us</a>
                    </li>
                    <li>
                      <a href="#">Contact us</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-6 col-xs-6">
                <div
                  className="f_widget about-widget pl_70 wow fadeInLeft"
                  data-wow-delay="0.4s"
                  style={{
                    visibility: 'visible',
                    animationDelay: '0.4s',
                    animationName: 'fadeInLeft',
                  }}
                >
                  <h3 className="f-title f_600 t_color f_size_18">Services</h3>
                  <ul className="list-unstyled f_list">
                    <li>
                      <a href="#">My Fpo</a>
                    </li>
                    <li>
                      <a href="#">My Farm</a>
                    </li>
                    <li>
                      <a href="#">My Business</a>
                    </li>
                    <li>
                      <a href="#">My Products</a>
                    </li>
                    <li>
                      <a href="#">My Exports</a>
                    </li>
                    <li>
                      <a href="#">My Market</a>
                    </li>
                    <li>
                      <a href="#">My Education</a>
                    </li>
                    <li>
                      <a href="#">My Tools</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-6 col-xs-6">
                <div
                  className="f_widget about-widget pl_70 wow fadeInLeft"
                  data-wow-delay="0.4s"
                  style={{
                    visibility: 'visible',
                    animationDelay: '0.4s',
                    animationName: 'fadeInLeft',
                  }}
                >
                  <h3 className="f-title f_600 t_color f_size_18">
                    FEED Insights
                  </h3>
                  <ul className="list-unstyled f_list">
                    <li>
                      <a href="#">Suggestions</a>
                    </li>
                    <li>
                      <a href="#">Sample works</a>
                    </li>
                    <li>
                      <a href="#">Queries</a>
                    </li>
                    <li>
                      <a href="#">Compliants</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-6 col-xs-6">
                <div
                  className="f_widget about-widget pl_70 wow fadeInLeft"
                  data-wow-delay="0.6s"
                  style={{
                    visibility: 'visible',
                    animationDelay: '0.4s',
                    animationName: 'fadeInLeft',
                  }}
                >
                  <h3 className="f-title f_600 t_color f_size_18">Help</h3>
                  <ul className="list-unstyled f_list">
                    <li>
                      <a href="#">FAQs</a>
                    </li>
                    <li>
                      <a href="#">Reporting</a>
                    </li>
                    <li>
                      <a href="#">Documentation</a>
                    </li>
                    <li>
                      <a href="#">Support Policy</a>
                    </li>
                    <li>
                      <a href="#">Terms &amp; conditions</a>
                    </li>
                    <li>
                      <a href="#">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="#">Disclaimer</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6">
                <div
                  className="f_widget social-widget pl_70 wow fadeInLeft"
                  data-wow-delay="0.8s"
                  style={{
                    visibility: 'visible',
                    animationDelay: '0.4s',
                    animationName: 'fadeInLeft',
                  }}
                >
                  <h3 className="f-title f_600 t_color f_size_18">
                    Connect with us
                  </h3>
                  <div className="f_social_icon">
                    <a href="#" className="fab fa-facebook"></a>
                    <a href="#" className="fab fa-twitter"></a>
                    <a href="#" className="fab fa-linkedin"></a>
                    <a href="#" className="fab fa-pinterest"></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {window.innerWidth > 768 ? (
            <div className="footer_bg">
              {/* <div className="footer_bg_one" style={{ backgroundImage: `URL("${process.env.PUBLIC_URL}/assets/my-market/bullock-cart.png")`, width: '10%', backgroundRepeat: 'no-repeat', transform: 'scaleX(-1)' }}></div> */}
              <div className="footer_bg_two"></div>
              <div
                className="footer_bg_three"
                style={{
                  backgroundImage: `URL("${process.env.PUBLIC_URL}/assets/footer/plane.png")`,
                  width: '80px',
                  backgroundRepeat: 'no-repeat',
                }}
              ></div>
            </div>
          ) : (
            ''
          )}
        </div>
        <Grid
          container
          justifyContent="space-around"
          className={classes.footerPolicyWrap}
          style={{ boxShadow: '0px -11px 2px 0px rgba(0,0,0,0.75)' }}
        >
          <Grid item lg={4} style={{ textAlign: 'center' }}>
            <p>Copyright &copy; {year} FEED ORG. All Rights Reserved</p>
          </Grid>
        </Grid>
      </footer>
    </>
  )
}
