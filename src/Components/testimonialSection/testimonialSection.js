import React from 'react'
import './testimonialSection.css'
import { makeStyles, Grid } from '@material-ui/core'
import Rating from '@material-ui/lab/Rating'
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.min.css'
import 'swiper/components/navigation/navigation.min.css'
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay])

export default function TestimonialSection() {
  const useStyles = makeStyles((theme) => ({}))
  const classes = useStyles()
  // const testimonials = [
  //   {
  //     message:
  //       'We`ve experienced rapid growth with FEED, and we see a lot of interest in the market from the changes we`ve made. Thats because FEED has helped us.',
  //     image: '',
  //     name: 'Hari',
  //   },
  //   {
  //     message:
  //       'One of the things we like about FEED is that the interface is really clean the team are able to quickly respond to our need',
  //     image: '',
  //     name: 'Srikanth',
  //   },
  //   {
  //     message:
  //       'We`ve experienced rapid growth with FEED, and we see a lot of interest in the market from the changes we`ve made. Thats because FEED has helped us.',
  //     image: '',
  //     name: 'Suresh',
  //   },
  //   {
  //     message:
  //       'We`ve experienced rapid growth with FEED, and we see a lot of interest in the market from the changes we`ve made. Thats because FEED has helped us.',
  //     image: '',
  //     name: 'Hari Kishore',
  //   },
  //   {
  //     message:
  //       'We`ve experienced rapid growth with FEED, and we see a lot of interest in the market from the changes we`ve made. Thats because FEED has helped us.',
  //     image: '',
  //     name: 'narayana',
  //   },
  // ]
  const testimonialDetails = [
    {
      img: 'farmerone.png',
      name: 'Hari',
      profession: 'farmer',
      message: `One of the things we like about FEED is that the interface is really clean the team are able to quickly respond to our need`,
      ratingValue: '5',
    },
    {
      img: 'farmertwo.jpg',
      name: 'Srikanth',
      profession: 'farmer',
      message: `We've experienced rapid growth with FEED, and we see a lot of interest in the market from the changes we've made. Thats because FEED has helped us.`,
      ratingValue: '4.5',
    },
    {
      img: 'farmerthree.png',
      name: 'Suresh',
      profession: 'farmer',
      message: `We've experienced rapid growth with FEED, and we see a lot of interest in the market from the changes we've made. Thats because FEED has helped us.`,
      ratingValue: '5',
    },
    {
      img: 'farmerone.png',
      name: 'Hari Kishore',
      profession: 'farmer',
      message: `Lorem Ippsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
      ratingValue: '4.5',
    },
    {
      img: 'farmerthree.png',
      name: 'Srikanth suresh',
      profession: 'farmer',
      message: `Lorem Ippsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
      ratingValue: '5',
    },
  ]
  return (
    <>
      {/* <Grid>
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
                  autoplay={{
                    delay: 15000,
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
                            <Avatar src={`${process.env.PUBLIC_URL}/assets/man-icon.png`}></Avatar>
                            <div>
                              <p>{item.message}</p>
                              <Grid>

                                <span>{item.name}</span>
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
      </Grid> */}
      <Grid className="mt-5">
        <Grid container justifyContent="center" className="mb-3">
          <img
            src={`${process.env.PUBLIC_URL}/assets/testimonials/testimonialsnameplate.png`}
            alt="Event and Updates"
          />
        </Grid>
        <div
          className="testimonials-carousel-wrap"
          style={{
            backgroundImage: `URL("${process.env.PUBLIC_URL}/assets/testimonials/s.jpg")`,
          }}
        >
          <Grid>
            <Swiper
              loop={true}
              navigation
              autoplay={{
                delay: 2000,
              }}
              centeredSlides={true}
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
            >
              <Grid>
                {testimonialDetails.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className="testimonialCard">
                      <div className="testimonilaAvatar">
                        <img
                          src={`${process.env.PUBLIC_URL}/assets/testimonials/${item.img}`}
                          alt=""
                          width="100"
                        />
                      </div>
                      <div className="testimonials-text-before">
                        <i className="fa fa-quote-left"></i>
                      </div>
                      <div className="testimonials-text">
                        <p className="testimonialMessage">{item.message}</p>
                        <span className="text-link">
                          <Rating
                            name="size-small"
                            precision={0.5}
                            defaultValue={5}
                            size="small"
                          />
                        </span>
                        <div className="testimonials-avatar">
                          <h3>{item.name}</h3>
                          <h5 className="testimonialProfession">
                            {item.profession}
                          </h5>
                          {/* <div class="listing-rating">
                          <i class="fa fa-star"></i>
                        </div> */}
                        </div>
                      </div>
                      <div className="testimonials-text-after">
                        <i className="fa fa-quote-right"></i>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Grid>
            </Swiper>
          </Grid>

          {/* <div class="tc-pagination"></div> */}
        </div>
      </Grid>
    </>
  )
}
