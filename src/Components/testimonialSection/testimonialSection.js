import React from 'react'
import './testimonialSection.css'
import { TextField, Button, makeStyles, Grid, Avatar } from '@material-ui/core'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.min.css'
import 'swiper/components/navigation/navigation.min.css'
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y])

export default function TestimonialSection() {
  const useStyles = makeStyles((theme) => ({
    testimonialSlide: {
      // textAlign:'-webkit-center'
    },
  }))
  const classes = useStyles()
  const testimonials = [
    {
      message:
        'We`ve experienced rapid growth with FEED, and we see a lot of interest in the market from the changes we`ve made. Thats because FEED has helped us.',
      image: '',
      name: '',
    },
    {
      message:
        'One of the things we like about FEED is that the interface is really clean the team are able to quickly respond to our need',
      image: '',
      name: '',
    },
    {
      message:
        'We`ve experienced rapid growth with FEED, and we see a lot of interest in the market from the changes we`ve made. Thats because FEED has helped us.',
      image: '',
      name: '',
    },
  ]
  return (
    <>
      <Grid>
        <div className="row m-0">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <Grid container justify="center">
              <h3 className="section-heading text-center">Testimonials</h3>
            </Grid>
            <div className="row">
              <Grid className="col-lg-10 col-md-12 col-sm-12 col-xs-12 m-auto">
                <Swiper
                  // spaceBetween={50}
                  loop="true"
                  navigation
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
                        spaceBetween: 40,
                      },
                    })
                  }
                  onSlideChange={() => console.log('slide change')}
                  onSwiper={(swiper) => console.log(swiper)}
                >
                  <Grid container lg={10}>
                    <Grid>
                      {testimonials.map((item, index) => (
                        <SwiperSlide
                          key="item"
                          className={classes.testimonialSlide}
                        >
                          <div className="testimonialBox">
                            {/* <i className="fa fa-quote-left" aria-hidden="true"></i> */}
                            <div>
                              <p>{item.message}</p>
                              <Grid>
                                <Avatar src="/assets/man-icon.png"></Avatar>
                                <span>Narayana</span>
                              </Grid>
                            </div>
                          </div>
                        </SwiperSlide>
                      ))}
                    </Grid>
                  </Grid>
                </Swiper>
              </Grid>
            </div>
          </div>
        </div>
      </Grid>
    </>
  )
}
