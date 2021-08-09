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
import {
  Grid,
  makeStyles,
  List,
  ListItem,
  ListItemText,
  Divider,
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
      boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)',
      webkitBoxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)',
      mozBoxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)',
    },
    newsfeeds: {
      height: '540px',
      backgroundColor: 'white',
      padding: 0,
    },
    newsfeedsHeading: {
      height: '2em',
      textAlign: 'center',
      backgroundColor: '#f08e16',
    },
  }))
  const classes = useStyles()
  const carouselImg = [
    {
      image: 'underconstruction.jpg',
      link: '',
    },
    {
      image: 'feedstartupdefbanner.png',
      link: '',
    },
    {
      image: 'feedstartupbnr.jpg',
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
      logo: 'feedlogo.png',
      primary: 'FEED',
      secondary:
        'FEED is a multi-state co-operative society working for the uplift.',
    },
    {
      logo: 'feedlogo.png',
      primary: 'NABARD',
      secondary:
        'FEED is a multi-state co-operative society working for the uplift.',
    },
    {
      logo: 'feedlogo.png',
      primary: 'FEED',
      secondary:
        'FEED is a multi-state co-operative society working for the uplift.',
    },
    {
      logo: 'feedlogo.png',
      primary: 'FEED',
      secondary:
        'FEED is a multi-state co-operative society working for the uplift.',
    },
    {
      logo: 'feedlogo.png',
      primary: 'FEED',
      secondary:
        'FEED is a multi-state co-operative society working for the uplift.',
    },
  ]
  const centralupdates = [
    {
      logo: 'nabardlogo.png',
      primary: 'FEED',
      secondary:
        'FEED is a multi-state co-operative society working for the uplift.',
    },
    {
      logo: 'dgft.png',
      primary: 'NABARD',
      secondary:
        'FEED is a multi-state co-operative society working for the uplift.',
    },
    {
      logo: 'fieo.png',
      primary: 'FEED',
      secondary:
        'FEED is a multi-state co-operative society working for the uplift.',
    },
    {
      logo: 'apeda.png',
      primary: 'FEED',
      secondary:
        'FEED is a multi-state co-operative society working for the uplift.',
    },
    {
      logo: 'ibef.png',
      primary: 'FEED',
      secondary:
        'FEED is a multi-state co-operative society working for the uplift.',
    },
  ]
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
                        fill="rgba(0,172,193,0.5)"
                      />
                      <use
                        href="#gentle-wave"
                        x="48"
                        y="7"
                        fill="rgba(32,156,255,0.5)"
                      />
                      <use
                        href="#gentle-wave"
                        x="48"
                        y="3"
                        fill="rgba(0,122,183,0.7)"
                      />
                      <use
                        href="#gentle-wave"
                        x="48"
                        y="5"
                        fill="rgba(104,224,207,0.1)"
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
              <Grid container className="mt-3">
                <Grid className="col-lg-3 col-md-12 col-sm-12 col-xs-12">
                  <Grid className={classes.eventupdatesWrap}>
                    <h6 className={classes.newsfeedsHeading}>
                      Central / State Updates
                    </h6>
                    <List className={classes.newsfeeds}>
                      <Marquee
                        duration={10000}
                        height="inherit"
                        width="100%"
                        axis="Y"
                        align="center"
                        overflow="hidden"
                        pauseOnHover={false}
                        reverse={true}
                      >
                        {centralupdates.map((item, index) => (
                          <Grid key={index}>
                            <ListItem alignItems="flex-start">
                              <Grid container justifyContent="space-between">
                                <Grid item lg={4}>
                                  <img
                                    src={`${process.env.PUBLIC_URL}/assets/eventupdates/${item.logo}`}
                                    width="100"
                                    alt=""
                                  />
                                </Grid>
                                <Grid item lg={7}>
                                  <ListItemText
                                    primary={item.primary}
                                    secondary={item.secondary}
                                  />
                                </Grid>
                              </Grid>
                            </ListItem>
                            <Divider />
                          </Grid>
                        ))}
                      </Marquee>
                    </List>
                  </Grid>
                </Grid>
                <Grid item lg={6}>
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
                <Grid className="col-lg-3 col-md-12 col-sm-12 col-xs-12">
                  <Grid className={classes.eventupdatesWrap}>
                    <h6 className={classes.newsfeedsHeading}>FEED Updates</h6>
                    <List className={classes.newsfeeds}>
                      <Marquee
                        duration={10000}
                        height="inherit"
                        width="100%"
                        axis="Y"
                        align="center"
                        overflow="hidden"
                        pauseOnHover={false}
                        reverse={true}
                      >
                        {feedUpdates.map((item, index) => (
                          <Grid key={index}>
                            <ListItem alignItems="flex-start">
                              <Grid container justifyContent="space-between">
                                <Grid item lg={4}>
                                  <img
                                    src={`${process.env.PUBLIC_URL}/assets/eventupdates/${item.logo}`}
                                    width="100"
                                    alt=""
                                  />
                                </Grid>
                                <Grid item lg={7}>
                                  <ListItemText
                                    primary={item.primary}
                                    secondary={item.secondary}
                                  />
                                </Grid>
                              </Grid>
                            </ListItem>
                            <Divider />
                          </Grid>
                        ))}
                      </Marquee>
                    </List>
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
