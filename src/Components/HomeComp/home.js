import React from 'react'
import './home.css'
import AboutSection from '../../Components/aboutSection/aboutSection'
import ServicesSection from '../../Components/servicesSection/servicesSection'
import EventsSection from '../../Components/eventsSection/eventsSection'
import TestimonialSection from '../../Components/testimonialSection/testimonialSection'
import FeedWorkingSection from '../../Components/feedWorkingSection/feedWorkingSection'
import PartnerSection from '../../Components/partnerSection/partnerSection'
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
  const useStyles = makeStyles((theme) => ({}))
  const classes = useStyles()
  return (
    <>
      <Grid className="container-fluid p-0">
        <Grid>
          <Swiper
            loop="true"
            // effect={'fade'}
            autoplay={{
              delay: 2000,
            }}
            // navigation
          >
            <SwiperSlide>
              <img
                src={`${process.env.PUBLIC_URL}/assets/underconstruction.jpg`}
                width="100%"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={`${process.env.PUBLIC_URL}/assets/feedstartupbnr.jpg`}
                width="100%"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={`${process.env.PUBLIC_URL}/assets/feedbnrtwo.jpeg`}
                width="100%"
                alt=""
              />
            </SwiperSlide>
          </Swiper>
        </Grid>
        <AboutSection shortView="true" />
        <ServicesSection />
        <div className="resp-events-view">
          <EventsSection></EventsSection>
        </div>
        <FeedWorkingSection />
        <TestimonialSection />
        <PartnerSection />
      </Grid>
    </>
  )
}
export default Home
