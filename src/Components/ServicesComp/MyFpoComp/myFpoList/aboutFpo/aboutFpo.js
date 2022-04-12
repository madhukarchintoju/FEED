import React from 'react'
import './aboutFpo.css'
import { Grid, makeStyles, Avatar } from '@material-ui/core'
import CountUp from 'react-countup'
import Marquee from 'react-fast-marquee'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, {
  Pagination,
  Navigation,
  Autoplay,
  EffectCoverflow,
} from 'swiper/core'
SwiperCore.use([Pagination, Navigation, Autoplay, EffectCoverflow])
export default function AboutFpo(props) {
  const aboutFpcStatistics = [
    {
      statTitle: 'Registered Farmers',
      statcount: 300,
      backgroundColor: '#d8ebd8',
    },
    {
      statTitle: 'Acres of land',
      statcount: 1000,
      backgroundColor: '#f2ede4',
    },
    {
      statTitle: 'Villages Covered',
      statcount: 10,
      backgroundColor: '#f0d7c2',
    },
    {
      statTitle: 'Countries Served',
      statcount: 5,
      backgroundColor: '#cee6ed',
    },
    {
      statTitle: 'Customers Worldwide',
      statcount: 500,
      backgroundColor: '#e4e9f5',
    },
  ]
  const productAndServices = [
    {
      productName: 'Juice',
      productImg: 'grapes.jpg',
      productContent: `Alice is a freelance web designer 
      and developer based in London. She is specialized in HTML5, CSS3, 
      JavaScript, Bootstrap, etc freelance web designer and developer based in London. 
      She is specialized in HTML5, CSS3, JavaScript, Bootstrap, etc freelance web designer and developer.`,
    },
    {
      productName: 'Juice Bottle',
      productImg: 'banana.jpg',
      productContent: `Alice is a freelance web designer 
      and developer based in London. She is specialized in HTML5, CSS3, 
      JavaScript, Bootstrap, etc freelance web designer and developer based in London. 
      She is specialized in HTML5, CSS3, JavaScript, Bootstrap, etc freelance web designer and developer.`,
    },
    {
      productName: 'Organic Juice',
      productImg: 'papaya.jpg',
      productContent: `Alice is a freelance web designer 
      and developer based in London. She is specialized in HTML5, CSS3, 
      JavaScript, Bootstrap, etc freelance web designer and developer based in London. 
      She is specialized in HTML5, CSS3, JavaScript, Bootstrap, etc freelance web designer and developer.`,
    },
    {
      productName: 'Organic juice Bottle',
      productImg: 'guava.jpg',
      productContent: `Alice is a freelance web designer 
      and developer based in London. She is specialized in HTML5, CSS3, 
      JavaScript, Bootstrap, etc freelance web designer and developer based in London. 
      She is specialized in HTML5, CSS3, JavaScript, Bootstrap, etc freelance web designer and developer.`,
    },
  ]
  const aboutGallery = [
    {
      name: '',
      galleryImg: 'galleryimgone.jpg',
    },
    {
      name: '',
      galleryImg: 'galleryimgtwo.jpg',
    },
    {
      name: '',
      galleryImg: 'galleryimgthree.jpg',
    },
    {
      name: '',
      galleryImg: 'galleryimgfour.jpg',
    },
    {
      name: '',
      galleryImg: 'galleryimgfive.jpg',
    },
  ]
  const aboutfpotestimonial = [
    {
      message:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
      img: 'farmer-avatar.jpg',
      name: 'Apple',
      designation: 'Farmer',
    },
    {
      message:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
      img: 'farmer-avatar.jpg',
      name: 'Banana',
      designation: 'Farmer',
    },
    {
      message:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
      img: 'farmer-avatar.jpg',
      name: 'Orange',
      designation: 'Farmer',
    },
    {
      message:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
      img: 'farmer-avatar.jpg',
      name: 'Apple',
      designation: 'Farmer',
    },
  ]
  const certificationPartners = [
    {
      name: '',
      img: 'apeda.png',
    },
    {
      name: '',
      img: 'dgft.png',
    },
    {
      name: '',
      img: 'fieo.png',
    },
    {
      name: '',
      img: 'fssailogo.png',
    },
    {
      name: '',
      img: 'ibef.png',
    },
    {
      name: '',
      img: 'feed.png',
    },
  ]
  const useStyles = makeStyles((theme) => ({
    aboutFpoWrap: {
      padding: '5px',
      // backgroundColor:'#fffcee'
      // border:'1px solid red'
    },
    fpoStatistics: {
      margin: '15px auto',
    },
    aboutFpo: {
      // height:'450px',
    },
    fpcLogo: {
      width: '3em',
      height: '3em',
    },
    aboutFpoTitle: {
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      // padding: '0px 3px',
      border: '2px solid grey',
      borderRadius: '10px 10px',
      // backgroundColor: 'white',
      // fontFamily: `'STIX Two Text', serif`,
      fontSize: '28px',
    },
    aboutFpoContentWrap: {
      marginTop: '1.5em',
    },
    pnsImg: {
      maxWidth: '220px',
      maxHeight: '180px',
      width: 'auto',
      height: 'auto',
      backgroundRepeat: 'no-repeat',
    },
    productServicesWrap: {
      // marginBottom: '0.5em',
      marginTop: '2em',
    },
    prdtCardContainer: {
      width: '300px',
      height: '300px',
      top: '0',
      right: '0',
      left: '0',
      bottom: '0',
      borderRadius: '15px 15px',
      marginBottom: '8px',
      background: `URL("${process.env.PUBLIC_URL}/assets/my-fpo/about/rose.jpeg")`,
      backgroundColor: 'black',
      backgroundSize: 'cover',
      webkitBoxShadow: '0 0 5px #000',
      boxShadow: '0 0 5px #000',
    },
    fpoImgSize: {
      // width: 'auto',
      // height:'auto',
      // minHeight: '15em'
    },
    aboutFpoGallery: {
      padding: '5px',
      // backgroundColor: '#c6e3a0',
      // borderRadius: '15px 15px',
      // boxShadow: '0px 2px 0px 2px rgba(0,0,0,0.75)',
      // webkitBoxShadow: '0px 0px 11px 0px rgba(0,0,0,0.75)',
      // mozBoxShadow: '0px 0px 11px 0px rgba(0,0,0,0.75)',
      boxShadow: '0px 0px 15px 0px rgba(125,125,125,0.75)',
    },
    aboutFpoContact: {
      border: '1px solid red',
    },
    aboutFpoGalleryWrap: {
      marginTop: '3em',
      marginBottom: '3em',
    },
    certificationImg: {
      width: '8em',
      height: '8em',
    },
  }))
  const classes = useStyles()
  const partnersLogo = [
    {
      logo: 'nabardlogo.png',
    },
    {
      logo: 'bharatcall.png',
    },
    {
      logo: 'dgft.png',
    },
    {
      logo: 'fieo.png',
    },
    {
      logo: 'apeda.png',
    },
    {
      logo: 'aagama.png',
    },
    {
      logo: 'ibef.png',
    },
  ]
  return (
    <>
      <Grid className={classes.aboutFpoWrap}>
        {/* <Grid container justifyContent="center" className="mb-3">
          <img
            src={`${process.env.PUBLIC_URL}/assets/my-fpo/about/aboutfpcnameplate.png`}
            alt=""
          />
        </Grid> */}
        <div
          className="col-lg-12"
          style={{ display: 'flex', justifyContent: 'space-between' }}
        >
          <span>
            FPC Name: <strong>Fruits Farm Producer Ltd</strong>
          </span>
          <span>
            Date of Establishment: <strong>14-1-2020</strong>
          </span>
        </div>
        <Grid item lg={11} className="m-auto">
          {/* <ul
            style={{
              textAlign: 'justify',
              textJustify: 'inter-word',
            }}
          >
            <li>
              Exclusive Single page website for FPO along with Business
              Analytics.
            </li>
            <li>
              Accessibility to CEO of FPO for maintaining accounts &amp;
              information on board meetings.
            </li>
            <li>
              Improves visibility of FPO website through “Share FPO profile
              option” anywhere and anytime to potential buyers.
            </li>
          </ul> */}
        </Grid>
        <Grid
          container
          item
          lg={11}
          className={classes.fpoStatistics}
          justifyContent="space-around"
        >
          {aboutFpcStatistics.map((item, index) => (
            <Grid
              key={index}
              lg={2}
              sm={5}
              xs={5}
              style={{
                marginTop: '10px',
                textAlign: 'center',
                borderRadius: '10px 10px',
                backgroundColor: item.backgroundColor,
              }}
            >
              <div className="p-1">
                <h6>{item.statTitle}</h6>
                <h2>
                  <CountUp
                    duration={2}
                    start={0}
                    end={item.statcount}
                  ></CountUp>
                  <span>+</span>
                </h2>
              </div>
            </Grid>
          ))}
        </Grid>
        <Grid container className={classes.aboutFpo}>
          <Grid
            container
            lg={12}
            item
            justifyContent="space-around"
            className={classes.aboutFpoContentWrap}
          >
            <Grid lg={11} item className="about-fpo-content">
              <fieldset>
                {/* <legend>
                  <Grid
                    container
                    className={classes.aboutFpoTitle}
                  >
                    <img
                      src={`${process.env.PUBLIC_URL}/assets/my-fpo/about/fpclogo.jpg`}
                      width='100'
                      alt="FPO LOGO"
                      className={classes.fpcLogo}
                    />
                    <h4>
                      Fruits Farm Producer Ltd
                    </h4>
                  </Grid>
                </legend> */}
                <h5
                  // className="ml-3"
                  style={{ fontFamily: `'STIX Two Text', serif` }}
                >
                  About FPC :
                </h5>
                <Grid className="about-fpo-descpr">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially Lorem Ipsum is simply dummy text of the printing
                    and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an
                    unknown printer took a galley of type and scrambled it to
                    make a type specimen book. It has survived not only five
                    centuries, but also the leap into electronic typesetting,
                    remaining essentially unknown printer took a galley of type
                    and scrambled it to make a type specimen book. It has
                    survived not only five centuries, but also the leap into
                    electronic typesetting, remaining essentiallya type specimen
                    book. It has survived not only five centuries, but also the
                    leap into electronic typesetting, remaining essentially
                    unknown printer took a galley of type and scrambled it to
                    make a type specimen book. It has survived not only five
                    centuries, but also the leap into electronic typesetting,
                    remaining essentially. It has survived not only five
                    centuries, but also the leap into electronic typesetting,
                    remaining essentiallya type specimen book.It has survived
                    not only five centuries, but also the leap into electronic
                    typesetting, remaining essentiallya type specimen book.
                    <a href="#"> Read More</a>
                  </p>
                </Grid>
              </fieldset>
            </Grid>
            {/* <Grid lg={3} item>
              <div className="about-fpo-info-card">
                <div className="col-lg-6 p-1 about-fpo-info-card-role info-card-orange">
                  <span className="my-auto">01</span>
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/statc.svg`}
                    width="40%"
                    className="p-2"
                    alt=""
                  />
                </div>
                <div className="col-lg-6">Info</div>
              </div>
              <div className="about-fpo-info-card">
                <div className="col-lg-6 p-1 about-fpo-info-card-role info-card-green">
                  <span className="my-auto">02</span>
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/home-icon.svg`}
                    width="40%"
                    className="p-2"
                    alt=""
                  />
                </div>
                <div className="col-lg-6">Info</div>
              </div>
              <div className="about-fpo-info-card">
                <div className="col-lg-6 p-1 about-fpo-info-card-role info-card-teal">
                  <span className="my-auto">03</span>
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/bulb-icon.svg`}
                    width="40%"
                    className="p-2"
                    alt=""
                  />
                </div>
                <div className="col-lg-6">Info</div>
              </div>
              <div className="about-fpo-info-card">
                <div className="col-lg-6 p-1 about-fpo-info-card-role info-card-musk">
                  <span className="my-auto">04</span>
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/settings-icon.svg`}
                    width="40%"
                    className="p-2"
                    alt=""
                  />
                </div>
                <div className="col-lg-6">Info</div>
              </div>
              <div className="about-fpo-info-card">
                <div className="col-lg-6 p-1 about-fpo-info-card-role info-card-red">
                  <span className="my-auto">05</span>
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/boy-icon.svg`}
                    width="40%"
                    className="p-2"
                    alt=""
                  />
                </div>
                <div className="col-lg-6">Info</div>
              </div>
            </Grid> */}
          </Grid>
        </Grid>
        <Grid container item className={classes.productServicesWrap}>
          <Grid container justifyContent="center">
            <h3 className="productServicesTitle">Products and Services</h3>
          </Grid>
          <Grid container justifyContent="space-around">
            {productAndServices.map((item, index) => (
              <Grid key={index} lg={3} item className="prcard">
                <Grid item>
                  <Grid className="nav-link">
                    <img
                      src={`${process.env.PUBLIC_URL}/assets/my-fpo/about/${item.productImg}`}
                      alt="..."
                    />
                    <div className="info">
                      <h5>{item.productName}</h5>
                      <p>{item.productContent}</p>
                    </div>
                  </Grid>
                </Grid>
              </Grid>
            ))}
          </Grid>
          <Grid className="m-auto">
            <button className="btn btn-warning">View all</button>
          </Grid>
        </Grid>
        <Grid
          container
          justifyContent="space-around"
          className={classes.aboutFpoGalleryWrap}
        >
          <h3 className="galleryTitle">Gallery</h3>
          <Grid lg={12} item className={classes.aboutFpoGallery}>
            <Grid container justifyContent="center">
              <Swiper
                // effect={'coverflow'}
                centeredSlides={true}
                loop={true}
                navigation
                autoplay={{ delay: 4000 }}
                // coverflowEffect={{
                //   rotate: 40,
                //   stretch: 0,
                //   depth: 50,
                //   modifier: 1,
                //   slideShadows: true,
                // }}
                breakpoints={
                  ({
                    320: {
                      slidesPerView: 1,
                      spaceBetween: 20,
                    },
                  },
                  {
                    480: {
                      slidesPerView: 1,
                      spaceBetween: 30,
                    },
                  },
                  {
                    768: {
                      slidesPerView: 2,
                      spaceBetween: 40,
                    },
                  },
                  {
                    868: {
                      slidesPerView: 3,
                      spaceBetween: 5,
                    },
                  })
                }
                className="aboutFpoGallerySwiper"
              >
                {aboutGallery.map((item, index) => (
                  <SwiperSlide container key={index}>
                    <Grid className={classes.fpoImgSize}>
                      <img
                        variant="square"
                        src={`${process.env.PUBLIC_URL}/assets/my-fpo/about/${item.galleryImg}`}
                        alt="FPO Images"
                        width="100%"
                        className=""
                      />
                    </Grid>
                  </SwiperSlide>
                ))}
              </Swiper>
            </Grid>
          </Grid>
        </Grid>
        <Grid style={{ marginTop: '3em', marginBottom: '3em' }}>
          <Grid
            className="text-center"
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <img
              src={`${process.env.PUBLIC_URL}/assets/common/certificationicon.png`}
              alt="certification icon"
            />
            <h2 className="licensesTitle">Our Licenses and Certifications</h2>
          </Grid>
          {/* <Grid container justifyContent="center">
            {certificationPartners.map((item, index) => (
              <Grid lg={2} item key={index}>
                <img
                  src={`${process.env.PUBLIC_URL}/assets/common/${item.img}`}
                  className={classes.certificationImg}
                  alt="certification icon"
                />
              </Grid>
            ))}
          </Grid> */}
          <Grid className="row justify-content-center">
            <Marquee speed={50} gradient={false}>
              {partnersLogo.map((item, index) => (
                <img
                  style={{ margin: 'auto' }}
                  key={index}
                  variant="square"
                  src={`${process.env.PUBLIC_URL}/assets/my-fpo/about/${item.logo}`}
                  alt="FEED PARTNERS LOGO"
                  width="100"
                />
              ))}
            </Marquee>
          </Grid>
        </Grid>
        <Grid className="aboutFpoTestimonialWrap">
          <Grid className="testimonial-area">
            <div className="container-fluid">
              <div className="sec-title white-title">
                <h2>Testimonials</h2>
                <p>What Client Say About Us?</p>
              </div>
              <Swiper
                centeredSlides={true}
                loop={true}
                navigation
                autoplay={{ delay: 3000 }}
                breakpoints={
                  ({
                    320: {
                      slidesPerView: 1,
                      spaceBetween: 20,
                    },
                  },
                  {
                    480: {
                      slidesPerView: 1,
                      spaceBetween: 30,
                    },
                  },
                  {
                    768: {
                      slidesPerView: 2,
                      spaceBetween: 40,
                    },
                  },
                  {
                    868: {
                      slidesPerView: 2,
                      spaceBetween: 60,
                    },
                  })
                }
              >
                <div className="testimonial-content">
                  {aboutfpotestimonial.map((item, index) => (
                    <SwiperSlide key={index} sm={12} xs={12}>
                      <div className="fpoTestimonialCard">
                        <p>{item.message}</p>
                        <div className="client-info">
                          <div className="client-video">
                            <Avatar
                              src={`${process.env.PUBLIC_URL}/assets/common/${item.img}`}
                            />
                          </div>
                          <div className="client-details">
                            <h6 className="mb-0">{item.name}</h6>
                            <span>{item.designation}</span>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </div>
              </Swiper>
            </div>
          </Grid>
        </Grid>
        <Grid
          container
          lg={12}
          item
          style={{
            padding: '5px 5px',
            background:
              'linear-gradient(130deg, rgba(255,243,254,1) 45%, rgba(238,156,167,1) 47%, rgba(255,221,225,1) 48%)',
          }}
        >
          <Grid
            lg={10}
            style={{
              margin: 'auto',
              borderRadius: '15px 15px',
              boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)',
              padding: '4px',
              backdropFilter: 'blur(5px) saturate(100%)',
            }}
          >
            <div className="text-left">
              <h4 className="text-danger font-italic">Contact Information</h4>
            </div>
            <div className="card-body">
              <h6>
                <i className="fas fa-home"></i> Office Address
              </h6>
              <address>
                First floor, Anand Heights, Kedareswarapet Main Rd,
                <br /> near Prabhas college, Lotus Landmark, Ayodhya Nagar,
                <br />
                Vijayawada Andhra Pradesh - 520003.
              </address>
            </div>
            <div className="text-muted">
              <div className="header-social-icons">
                <a
                  href="https://www.facebook.com/FEEDORGOFFICAL"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/facebook.svg`}
                    width="25"
                    alt="facebook-icon"
                  />
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/instagram.svg`}
                    width="25"
                    alt="instagram-icon"
                  />
                </a>
                <a
                  href="https://twitter.com/feedorg_"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/twitter.svg`}
                    width="25"
                    alt="twitter-icon"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/company/74678041/admin/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/linkedin.svg`}
                    width="25"
                    alt="linkedin-icon"
                  />
                </a>
                <a
                  href="https://www.youtube.com/channel/UCFE_feyAd4VsbMLDnUWIY4A"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/youtube.svg`}
                    width="25"
                    alt="youtube-icon"
                  />
                </a>
              </div>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}
