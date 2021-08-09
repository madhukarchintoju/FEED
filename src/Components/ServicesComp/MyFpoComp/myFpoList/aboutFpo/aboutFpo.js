import React, { useState, useEffect } from 'react'
import './aboutFpo.css'
import { Grid, makeStyles, Avatar, TextField } from '@material-ui/core'
import CountUp, { useCountUp } from 'react-countup'
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
      backgroundColor: '#B9C406',
    },
    {
      statTitle: 'Acres of land',
      statcount: 1000,
      backgroundColor: '#704404',
    },
    {
      statTitle: 'Villages Covered',
      statcount: 10,
      backgroundColor: '#F1931B',
    },
    {
      statTitle: 'Countries Served',
      statcount: 5,
      backgroundColor: '#f96762',
    },
    {
      statTitle: 'Customers Worldwide',
      statcount: 500,
      backgroundColor: '#996aa0',
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
    aboutFpo: {
      // height:'450px',
    },
    fpcLogo: {
      width: '5em',
      height: '5em',
    },
    aboutFpoTitle: {
      padding: '3px',
      marginLeft: '5px',
      marginRight: '10px',
      border: '3px solid grey',
      borderRadius: '10px 10px',
      backgroundColor: 'white',
      fontFamily: `'STIX Two Text', serif`,
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
      borderRadius: '15px 15px',
      boxShadow: '0px 0px 11px 0px rgba(0,0,0,0.75)',
      webkitBoxShadow: '0px 0px 11px 0px rgba(0,0,0,0.75)',
      mozBoxShadow: '0px 0px 11px 0px rgba(0,0,0,0.75)',
    },
    aboutFpoContact: {
      border: '1px solid red',
    },
    aboutFpoGalleryWrap: {
      marginTop: '2em',
    },
    certificationImg: {
      width: '8em',
      height: '8em',
    },
  }))
  const classes = useStyles()
  const data = [0, 1, 2, 3, 4, 5, 6]
  return (
    <>
      <Grid className={classes.aboutFpoWrap}>
        <Grid container justifyContent="center" className="mb-3">
          <img
            src={`${process.env.PUBLIC_URL}/assets/my-fpo/about/aboutfpcnameplate.jpg`}
            alt=""
          />
        </Grid>
        <Grid item lg={11} className="m-auto">
          <ul
            style={{
              textAlign: 'justify',
              textJustify: 'inter-word',
              fontWeight: '600',
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
          </ul>
        </Grid>
        <Grid
          container
          item
          lg={11}
          className="m-auto"
          justifyContent="space-around"
        >
          {aboutFpcStatistics.map((item, index) => (
            <Grid
              key={index}
              lg={2}
              style={{
                marginTop: '10px',
                textAlign: 'center',
                borderRadius: '10px 10px',
                backgroundColor: item.backgroundColor,
                boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)',
                webkitBoxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)',
                mozBoxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75) ',
              }}
            >
              <div className="text-white p-1">
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
                <legend>
                  <Grid
                  // container
                  // style={{ display: 'flex', justifyContent: 'center' }}
                  >
                    <Grid>
                      <img
                        src={`${process.env.PUBLIC_URL}/assets/my-fpo/about/fpclogo.jpg`}
                        // width='120'
                        alt="FPO LOGO"
                        className={classes.fpcLogo}
                      />
                    </Grid>

                    {/* <Grid> */}
                    <h4 className={classes.aboutFpoTitle}>
                      Fruits Farm Producer Ltd
                    </h4>
                    {/* </Grid> */}
                  </Grid>
                </legend>
                <h5
                  className="ml-3"
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
                effect={'coverflow'}
                centeredSlides={true}
                loop={true}
                navigation
                autoplay={{ delay: 4000 }}
                coverflowEffect={{
                  rotate: 40,
                  stretch: 0,
                  depth: 50,
                  modifier: 1,
                  slideShadows: true,
                }}
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
                      slidesPerView: 4,
                      spaceBetween: 5,
                    },
                  })
                }
                className="mySwiper aboutFpoGallerySwiper"
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
        <Grid style={{ marginTop: '2em' }}>
          <Grid className="text-center">
            <img
              src={`${process.env.PUBLIC_URL}/assets/common/certificationicon.png`}
              alt="certification icon"
            />
            <h2 className="licensesTitle">Our Licenses and Certifications</h2>
          </Grid>
          <Grid container justifyContent="center">
            {certificationPartners.map((item, index) => (
              <Grid lg={2} item key={index}>
                <img
                  src={`${process.env.PUBLIC_URL}/assets/common/${item.img}`}
                  className={classes.certificationImg}
                  alt="certification icon"
                />
              </Grid>
            ))}
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
                className="mySwiper"
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
          item
          style={{
            height: 'fit-content',
            backgroundImage: `URL("${process.env.PUBLIC_URL}/assets/my-fpo/about/aboutcontactbnr.png")`,
            backgroundSize: '60% 100%',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <Grid className="ctrWrap">
            <div className="text-left">
              <h4 className="text-danger font-italic">Contact Us</h4>
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
