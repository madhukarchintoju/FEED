import React, { Component } from 'react'
import './home.css'
import { Link } from 'react-router-dom'
import AboutSection from '../../Components/aboutSection/aboutSection'
import ServicesSection from '../../Components/servicesSection/servicesSection'
import EventsSection from '../../Components/eventsSection/eventsSection'
import TestimonialSection from '../../Components/testimonialSection/testimonialSection'
import FeedWorkingSection from '../../Components/feedWorkingSection/feedWorkingSection'
import PartnerSection from '../../Components/partnerSection/partnerSection'
import RoadMap from '../analytics/roadMap/roadMap'
import { Grid, makeStyles } from '@material-ui/core'
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
        <EventsSection></EventsSection>
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
