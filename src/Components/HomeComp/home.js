import React, { Component } from 'react'
import './home.css'
import { Link } from 'react-router-dom'
import AboutSection from '../../Components/aboutSection/aboutSection'
import ServicesSection from '../../Components/servicesSection/servicesSection'
import EventsSection from '../../Components/eventsSection/eventsSection'
import TestimonialSection from '../../Components/testimonialSection/testimonialSection'
import FeedWorkingSection from '../../Components/feedWorkingSection/feedWorkingSection'
import PartnerSection from '../../Components/partnerSection/partnerSection';
import RoadMap from '../analytics/roadMap/roadMap'
import { Grid } from '@material-ui/core'
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
  // const useStyles = makeStyles((theme) => ({}))
  // const classes = useStyles()
  const carouselImg = [
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
              <SwiperSlide key={index}>
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
        <AboutSection shortView="true" />
        <ServicesSection />
        <div className="resp-events-view">
          <EventsSection></EventsSection>
        </div>
        <RoadMap/>
        <FeedWorkingSection />
        <TestimonialSection />
        <PartnerSection />
      </Grid>
    </>
  )
}
export default Home
