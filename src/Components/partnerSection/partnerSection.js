import React from 'react'
import './partnerSection.css'
import { Grid, makeStyles, Avatar } from '@material-ui/core'
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

export default function PartnerSection() {
  const useStyles = makeStyles((theme) => ({
    partnerLogo: {
      width: '4em',
      height: '4em',
    },
    partnerSlide: {
      textAlign: '-webkit-center',
    },
  }))
  const classes = useStyles()
  const partnersLogo = [
    {
      logo: 'feed',
    },
    {
      logo: 'nabard-logo',
    },
    {
      logo: 'feed',
    },
    {
      logo: 'nabard-logo',
    },
    {
      logo: 'feed',
    },
    {
      logo: 'nabard-logo',
    },
    {
      logo: 'feed',
    },
    {
      logo: 'nabard-logo',
    },
  ]
  return (
    <>
      <section className="mt-5">
        <div className="row Partners-section m-0">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <Grid container justify="center">
              <h4 className="section-heading">Partners</h4>
            </Grid>
            <Grid className="row">
              <Grid container justify="center">
                <Swiper
                  loop={true}
                  navigation
                  autoplay={{ delay: 2000 }}
                  breakpoints={
                    ({
                      320: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                      },
                    },
                    {
                      480: {
                        slidesPerView: 3,
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
                        slidesPerView: 5,
                        spaceBetween: 40,
                      },
                    })
                  }
                >
                  <Grid container>
                    <Grid>
                      {partnersLogo.map((item, index) => (
                        <SwiperSlide
                          key="item"
                          className={classes.partnerSlide}
                        >
                          <Avatar
                            variant="square"
                            className={classes.partnerLogo}
                            src={`${process.env.PUBLIC_URL}/assets/${item.logo}.png`}
                          ></Avatar>
                        </SwiperSlide>
                      ))}
                    </Grid>
                  </Grid>
                </Swiper>
              </Grid>
            </Grid>
          </div>
        </div>
      </section>
    </>
  )
}
