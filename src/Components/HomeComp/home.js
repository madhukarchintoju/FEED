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
        {/* <section className="carousel-section p-0">
          <div
            id="carouselExampleFade"
            className="carousel slide carousel-fade"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="/assets/village-famer.jpg"
                  className="d-block w-100 img-fluid"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src="/assets/cow.jpg"
                  className="d-block w-100 img-fluid"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src="/assets/transportation-logistics.jpg"
                  className="d-block w-100 img-fluid"
                  alt="..."
                />
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselExampleFade"
              role="button"
              data-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleFade"
              role="button"
              data-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </section> */}
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
