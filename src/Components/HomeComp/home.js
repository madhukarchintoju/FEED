import React, { useState, useCallback } from 'react'
import './home.css'
import AboutSection from '../../Components/aboutSection/aboutSection'
import ServicesSection from '../../Components/servicesSection/servicesSection'
import TestimonialSection from '../../Components/testimonialSection/testimonialSection'
import FeedWorkingSection from '../../Components/feedWorkingSection/feedWorkingSection'
import PartnerSection from '../../Components/partnerSection/partnerSection'
import RoadMap from '../analytics/roadMap/roadMap'
import Gallery from 'react-photo-gallery'
import Carousel, { Modal, ModalGateway } from 'react-images'
import Marquee from 'react-easy-marquee'
import Slider from 'react-slick'
import {
  Grid,
  makeStyles,
  List,
  ListItem,
  ListItemText,
  Divider,
  Avatar,
} from '@material-ui/core'
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  EffectFade,
} from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.min.css'
import 'swiper/components/navigation/navigation.min.css'
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade])

function Home() {
  const [currentImage, setCurrentImage] = useState(0)
  const [viewerIsOpen, setViewerIsOpen] = useState(false)
  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index)
    setViewerIsOpen(true)
  }, [])

  const closeLightbox = () => {
    setCurrentImage(0)
    setViewerIsOpen(false)
  }
  const useStyles = makeStyles((theme) => ({
    // swiperButtonNext: {
    //   '&:after' :{
    //     content:'',
    //     backgroundImage: `URL("${process.env.PUBLIC_URL}/assets/common/next.png")`,
    //   },
    //   '&:hover' :{
    //     color:'white'
    //   }
    // }
    eventupdatesWrap: {
      borderRadius: '25px 25px',
      padding: '5px',
      // boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)',
      // webkitBoxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)',
      // mozBoxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)',
      boxShadow: '0px 0px 15px 0px rgba(125,125,125,0.75)',
    },
    newsfeeds: {
      // overflow: 'auto',
      // width:'70',
      height: '460px',
      backgroundColor: 'white',
      padding: 0,
    },
    newsfeedsHeading: {
      display: 'flex',
      justifyContent: 'center',
      height: '2em',
      alignItems: 'center',
      borderRadius: '25px 25px 0px 0px',
      // backgroundColor: '#f08e16',
      background: 'rgba(232, 159, 95,0.5)',
      color: 'black',
    },
  }))
  const classes = useStyles()
  const carouselImg = [
    {
      image: 'underconstruction.jpg',
      link: '',
    },
    {
      image: 'feedstartupdefbanner.jpg',
      link: '',
    },
    {
      image: 'feedstartupbanner.jpg',
      link: '',
    },
  ]
  const photos = [
    {
      src: `${process.env.PUBLIC_URL}/assets/eventupdates/2.jpg`,
      width: 4,
      height: 4,
    },
    {
      src: `${process.env.PUBLIC_URL}/assets/eventupdates/5.jpg`,
      width: 3,
      height: 4,
    },
    {
      src: `${process.env.PUBLIC_URL}/assets/eventupdates/4.jpg`,
      width: 3,
      height: 4,
    },
    {
      src: `${process.env.PUBLIC_URL}/assets/eventupdates/3.jpg`,
      width: 4,
      height: 3,
    },
    {
      src: `${process.env.PUBLIC_URL}/assets/eventupdates/1.jpg`,
      width: 4,
      height: 3,
    },
  ]
  const eventImg = [
    {
      image: 'underconstruction.jpg',
      link: '/myfpo',
    },
    {
      image: 'feedstartupbnr.jpg',
      link: '',
    },
    {
      image: 'feedbnrtwo.jpeg',
      link: '',
    },
  ]
  const feedUpdates = [
    {
      logo: 'myfpclogo.png',
      primary: 'FPC',
      secondary:
        'FEED is a multi-state co-operative society working for the uplift.',
    },
    {
      logo: 'myfarmlogo.png',
      primary: 'Farm',
      secondary:
        'FEED is a multi-state co-operative society working for the uplift.',
    },
    {
      logo: 'mybusinesslogo.png',
      primary: 'My Business',
      secondary:
        'FEED is a multi-state co-operative society working for the uplift.',
    },
    {
      logo: 'myexportslogo.png',
      primary: 'My Exports',
      secondary:
        'FEED is a multi-state co-operative society working for the uplift.',
    },
    {
      logo: 'myproductslogo.png',
      primary: 'MY Products',
      secondary:
        'FEED is a multi-state co-operative society working for the uplift.',
    },
    {
      logo: 'mymarketlogo.png',
      primary: 'My Market',
      secondary:
        'FEED is a multi-state co-operative society working for the uplift.',
    },
    {
      logo: 'mytoolslogo.png',
      primary: 'My Tools',
      secondary:
        'FEED is a multi-state co-operative society working for the uplift.',
    },
  ]
  const centralupdates = [
    {
      logo: 'nabardlogo.png',
      primary: 'Nabard',
      secondary:
        'WRONG COVERAGE REGARDING NABARD IN JAMMU PRINT MEDIA ON 3/09/2021',
      link: 'https://www.nabard.org/pdf/nabcons-clarification-on-himayat-project-press-note.pdf',
    },
    {
      logo: 'dgft.png',
      primary: 'DGFT',
      secondary:
        'Inclusion of Ports of Import in continuation to Notification No. 20/20215-20 dated 24.08.2021 and Notification No. 23/2015-20 dated 03.09.2021.',
      link: 'https://content.dgft.gov.in/Website/dgftprod/dff48098-1fa1-4274-868c-525dd0ed50b1/Notification%2032%20dated%2025Sep%202021%20-%20Eng.pdf',
    },
    {
      logo: 'fieo.png',
      primary: 'FIEO',
      secondary:
        'FIEO MUMBAI : WEB CONFERENCE ON AWARENESS OF CYBER SECURITY ON SEPTEMBER 30, 202',
      link: 'https://www.fieo.org/view_detail.php?id=0,22&dcd=7454&evetype=0',
    },
    {
      logo: 'apeda.png',
      primary: 'Apeda',
      secondary:
        'Report on Development of suitable package & formulation of packaging specification for fresh kiwi from north eastern states.',
      link: 'http://www.apeda.gov.in/apedawebsite/Announcements/Kiwi_Book_Final_13092021.pdf',
    },
    {
      logo: 'ibef.png',
      primary: 'IBEF',
      secondary:
        'PM dedicates to the Nation 35 crop varieties with special traits.',
      link: 'https://www.ibef.org/news/pm-dedicates-to-the-nation-35-crop-varieties-with-special-traits',
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
      <Grid className="container-fluid p-0">
        <Grid>
          <Swiper
            loop="true"
            autoplay={{
              delay: 5000,
            }}
            navigation
          >
            {carouselImg.map((item, index) => (
              <SwiperSlide key={index} className="cht">
                <Grid>
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/home/${item.image}`}
                    width="100%"
                    alt="FEED STARTUP SLIDES"
                  />
                </Grid>
              </SwiperSlide>
            ))}
          </Swiper>
        </Grid>
        {window.innerWidth > 1000 ? (
          <Grid item lg={12} md={12} sm={12}>
            <Grid item container justifyContent="flex-start">
              <Grid>
                <img
                  src={`${process.env.PUBLIC_URL}/assets/aboutsection/ship.png`}
                  className="img-fluid shipmove"
                  alt=""
                />
              </Grid>
            </Grid>
            <Grid>
              <div className="oceanWrap">
                <div>
                  <svg
                    className="waves"
                    viewBox="0 24 150 28"
                    preserveAspectRatio="none"
                    style={{ position: 'relative', bottom: '50px' }}
                  >
                    <defs>
                      <path
                        id="gentle-wave"
                        d="M-110 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
                      />
                    </defs>
                    <g className="parallax">
                      <use
                        href="#gentle-wave"
                        x="48"
                        y="2"
                        fill="rgba(0,162,193,0.5)"
                      />
                      <use
                        href="#gentle-wave"
                        x="48"
                        y="3"
                        fill="rgba(0,156,255,0.5)"
                      />
                      <use
                        href="#gentle-wave"
                        x="48"
                        y="5"
                        fill="rgba(0,142,203,0.7)"
                      />
                      <use
                        href="#gentle-wave"
                        x="48"
                        y="7"
                        fill="rgba(0,154,207,0.1)"
                      />
                    </g>
                  </svg>
                </div>
              </div>
            </Grid>
          </Grid>
        ) : (
          ''
        )}
        <AboutSection shortView="true" />
        <ServicesSection />
        {/* <div className="resp-events-view"> */}
        <Grid id="eventsUpdates" className="events-section">
          <div className="row m-0">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <Grid container justifyContent="center">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/eventupdates/eventsandupdatesnameplate.png`}
                  alt="Event and Updates"
                />
              </Grid>
              <Grid container className="mt-4" justifyContent="space-evenly">
                <Grid item lg={3} md={12} sm={12} xs={12}>
                  <Grid className={classes.eventupdatesWrap}>
                    <h6 className={classes.newsfeedsHeading}>
                      Central / State Updates
                    </h6>
                    <Grid style={{ height: '460px', overflow: 'hidden' }}>
                      <Slider {...settings}>
                        {centralupdates.map((item, index) => (
                          <Grid
                            key={index}
                            container
                            justifyContent="space-around"
                          >
                            <Grid container justifyContent="space-around">
                              <Grid item lg={2}>
                                <img
                                  src={`${process.env.PUBLIC_URL}/assets/eventupdates/${item.logo}`}
                                  width="100"
                                  alt=""
                                />
                              </Grid>
                              <Grid item lg={9}>
                                <ListItemText
                                  primary={item.primary}
                                  secondary={item.secondary}
                                />
                                <small>
                                  <a
                                    href={item.link}
                                    target="_blank"
                                    rel="noreferrer"
                                  >
                                    Click Here
                                  </a>
                                </small>
                              </Grid>
                            </Grid>
                            <Divider />
                          </Grid>
                        ))}
                      </Slider>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item lg={5} md={12} sm={12} xs={12}>
                  <div>
                    <Gallery photos={photos} onClick={openLightbox} />
                    <ModalGateway>
                      {viewerIsOpen ? (
                        <Modal onClose={closeLightbox}>
                          <Carousel
                            currentIndex={currentImage}
                            views={photos.map((x) => ({
                              ...x,
                              srcset: x.srcSet,
                              caption: x.title,
                            }))}
                          />
                        </Modal>
                      ) : null}
                    </ModalGateway>
                  </div>
                </Grid>
                <Grid lg={3} md={12} sm={12} xs={12}>
                  <Grid className={classes.eventupdatesWrap}>
                    <h6 className={classes.newsfeedsHeading}>FEED Updates</h6>
                    <Grid style={{ height: '460px', overflow: 'hidden' }}>
                      <Slider {...settings}>
                        {feedUpdates.map((item, index) => (
                          <Grid
                            key={index}
                            container
                            justifyContent="space-around"
                          >
                            <Grid container justifyContent="space-around">
                              <Grid item lg={2}>
                                <img
                                  src={`${process.env.PUBLIC_URL}/assets/eventupdates/${item.logo}`}
                                  width="100"
                                  alt=""
                                />
                              </Grid>
                              <Grid item lg={9}>
                                <ListItemText
                                  primary={item.primary}
                                  secondary={item.secondary}
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
            </div>
          </div>
        </Grid>
        {/* </div> */}
        {/* <RoadMap /> */}
        <FeedWorkingSection />
        <TestimonialSection />
        <PartnerSection />
      </Grid>
    </>
  )
}
export default Home
