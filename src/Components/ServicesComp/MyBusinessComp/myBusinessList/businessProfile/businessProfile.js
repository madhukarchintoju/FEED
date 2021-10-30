import React from 'react'
import './businessProfile.css'
import { Grid, makeStyles, Avatar } from '@material-ui/core'
import Marquee from 'react-fast-marquee'
import CountUp from 'react-countup'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, {
  Pagination,
  Navigation,
  Autoplay,
  EffectCoverflow,
} from 'swiper/core'
SwiperCore.use([Pagination, Navigation, Autoplay, EffectCoverflow])
export default function BusinessProfile(props) {
  const aboutbusinessStatistics = [
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
  const aboutBusinessTestimonial = [
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
  const useStyles = makeStyles((theme) => ({
    aboutbusinessWrap: {
      padding: '5px',
      // backgroundColor:'#fffcee'
      // border:'1px solid red'
    },
    aboutbusiness: {
      // height:'450px',
    },
    businessLogo: {
      width: '5em',
      height: '5em',
    },
    aboutbusinessTitle: {
      padding: '3px',
      marginLeft: '5px',
      marginRight: '10px',
      border: '3px solid grey',
      borderRadius: '10px 10px',
      backgroundColor: 'white',
      fontFamily: `'STIX Two Text', serif`,
      fontSize: '28px',
    },
    aboutbusinessContentWrap: {
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
    businessImgSize: {
      // width: 'auto',
      // height:'auto',
      // minHeight: '15em'
    },
    aboutbusinessGallery: {
      padding: '5px',
      // backgroundColor: '#c6e3a0',
      borderRadius: '15px 15px',
      boxShadow: '0px 0px 11px 0px rgba(0,0,0,0.75)',
      webkitBoxShadow: '0px 0px 11px 0px rgba(0,0,0,0.75)',
      mozBoxShadow: '0px 0px 11px 0px rgba(0,0,0,0.75)',
    },
    aboutbusinessContact: {
      border: '1px solid red',
    },
    aboutbusinessGalleryWrap: {
      marginTop: '2em',
    },
    certificationImg: {
      width: '8em',
      height: '8em',
    },
    businessContactWrap: {
      marginTop: '8px',
    },
  }))
  const classes = useStyles()
  return (
    <>
      <Grid className={classes.aboutbusinessWrap}>
        <Grid container justifyContent="center" className="mb-3">
          {/* <img
            src={`${process.env.PUBLIC_URL}/assets/my-fpo/about/aboutfpcnameplate.png`}
            alt=""
          /> */}
          {/* <h4>Business Profile</h4> */}
        </Grid>
        <Grid
          container
          item
          lg={11}
          className="m-auto"
          justifyContent="space-around"
        >
          {aboutbusinessStatistics.map((item, index) => (
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
        <Grid container className={classes.aboutbusiness}>
          <Grid
            container
            lg={12}
            item
            justifyContent="space-around"
            className={classes.aboutbusinessContentWrap}
          >
            <Grid lg={11} item className="about-business-content">
              <fieldset>
                <legend>
                  <Grid>
                    <Grid>
                      <img
                        src={`${process.env.PUBLIC_URL}/assets/my-fpo/about/fpclogo.jpg`}
                        // width='120'
                        alt="business LOGO"
                        className={classes.businessLogo}
                      />
                    </Grid>
                    <h4 className={classes.aboutbusinessTitle}>
                      Big Business Private Ltd
                    </h4>
                  </Grid>
                </legend>
                <h5
                  className="ml-3"
                  style={{ fontFamily: `'STIX Two Text', serif` }}
                >
                  About :
                </h5>
                <Grid className="about-business-descpr">
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
          className={classes.aboutbusinessGalleryWrap}
        >
          <h3 className="galleryTitle">Gallery</h3>
          <Grid lg={12} item className={classes.aboutbusinessGallery}>
            <Grid container justifyContent="center">
              <Swiper
                centeredSlides={true}
                loop={true}
                navigation
                autoplay={{ delay: 4000 }}
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
                className="aboutbusinessGallerySwiper"
              >
                {aboutGallery.map((item, index) => (
                  <SwiperSlide container key={index}>
                    <Grid className={classes.businessImgSize}>
                      <img
                        variant="square"
                        src={`${process.env.PUBLIC_URL}/assets/my-fpo/about/${item.galleryImg}`}
                        alt="Business Images"
                        width="100%"
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
          <Grid className="row justify-content-center">
            <Marquee speed={50} gradient={false}>
              {certificationPartners.map((item, index) => (
                <img
                  style={{ margin: 'auto' }}
                  key={index}
                  variant="square"
                  src={`${process.env.PUBLIC_URL}/assets/my-business/about/${item.logo}`}
                  alt="FEED PARTNERS LOGO"
                  width="100"
                />
              ))}
            </Marquee>
          </Grid>
        </Grid>
        <Grid className="aboutbusinessTestimonialWrap">
          <Grid className="aboutBusinessTestimonialArea">
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
                <Grid>
                  {aboutBusinessTestimonial.map((item, index) => (
                    <SwiperSlide key={index} sm={12} xs={12}>
                      <div className="aboutBusinessTestimonialCard">
                        <p>{item.message}</p>
                        <div className="client-info">
                          <div className="client-video">
                            <Avatar
                              src={`${process.env.PUBLIC_URL}/assets/common/${item.img}`}
                            />
                          </div>
                          <div>
                            <h6 className="mb-0">{item.name}</h6>
                            <span>{item.designation}</span>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Grid>
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
                FEED Org, First floor, Anand Heights, Kedareswarapet Main Rd,
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
