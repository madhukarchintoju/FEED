import React from 'react'
import './testimonialSection.css'
import { makeStyles, Grid, Avatar } from '@material-ui/core'
import CardHeader from '@material-ui/core/CardHeader'
import IconButton from '@material-ui/core/IconButton'
import MoreVertIcon from '@material-ui/icons/MoreVert'
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

  const testimonialDetails = [
    {
      img: 'farmerone.png',
      name: 'Subba Rao',
      profession: 'farmer',
      message: `One of the things we like about FEED is that the interface is really clean the team are able to quickly respond to our need`,
      ratingValue: '5',
    },
    {
      img: 'farmertwo.jpg',
      name: 'Vara Lakshmi',
      profession: 'farmer',
      message: `We've experienced rapid growth with FEED, and we see a lot of interest in the market from the changes we've made. Thats because FEED has helped us.`,
      ratingValue: '4.5',
    },
    {
      img: 'farmerthree.png',
      name: 'Eswar',
      profession: 'farmer',
      message: `We've experienced rapid growth with FEED, and we see a lot of interest in the market from the changes we've made. Thats because FEED has helped us.`,
      ratingValue: '5',
    },
    {
      img: 'farmerone.png',
      name: 'Anantha kumari',
      profession: 'MSME Entrepreneur',
      message: `Lorem Ippsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
      ratingValue: '4.5',
    },
    {
      img: 'farmerthree.png',
      name: 'Suryanarayana',
      profession: 'farmer',
      message: `Lorem Ippsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
      ratingValue: '5',
    },
  ]
  return (
    <>
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
              // navigation
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
                      {/* <div className="testimonilaAvatar">
                        <img
                          src={`${process.env.PUBLIC_URL}/assets/testimonials/${item.img}`}
                          alt=""
                          width="100"
                        />
                      </div> */}
                      <div className="testimonials-text-before">
                        <i className="fa fa-quote-left"></i>
                      </div>
                      <div className="testimonials-text">
                        <p className="testimonialMessage">{item.message}</p>
                        {/* <span className="text-link">
                          <Rating
                            name="size-small"
                            precision={0.5}
                            defaultValue={5}
                            size="small"
                          />
                        </span> */}
                        <CardHeader
                          avatar={
                            <Avatar
                              aria-label="recipe"
                              className={classes.avatar}
                              src={`${process.env.PUBLIC_URL}/assets/testimonials/${item.img}`}
                            />
                          }
                          style={{
                            textTransform: 'capitalize',
                            color: 'white',
                          }}
                          // action={
                          //   <IconButton aria-label="settings">
                          //     <MoreVertIcon />
                          //   </IconButton>
                          // }
                          title={item.name}
                          subheader={item.profession}
                        />
                        {/* <div className="testimonials-avatar">
                          <h3>{item.name}</h3>
                          <h5 className="testimonialProfession">
                            {item.profession}
                          </h5>
                          <div class="listing-rating">
                            <i class="fa fa-star"></i>
                          </div>
                        </div> */}
                      </div>
                      {/* <div className="testimonials-text-after">
                        <i className="fa fa-quote-right"></i>
                      </div> */}
                    </div>
                  </SwiperSlide>
                ))}
              </Grid>
            </Swiper>
          </Grid>
        </div>
      </Grid>
    </>
  )
}
