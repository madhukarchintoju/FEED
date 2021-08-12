import React from 'react'
import './partnerSection.css'
import { Grid, makeStyles } from '@material-ui/core'
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
    partnerSectionWrap: {
      marginTop: '2em',
    },
    PartnerSection: {
      width: '98%',
      margin: '0.5em auto 2em !important',
      backgroundColor: 'white',
      borderRadius: '15px 15px 15px 15px',
      borderLeft: '5px solid orange',
      borderRight: '5px solid green',
      boxShadow: '0px 0px 8px 0px rgba(242, 107, 110, 0.75)',
      webkitBoxShadow: '0px 0px 8px 0px rgba(242, 107, 110, 0.75)',
      mozBoxShadow: '0px 0px 8px 0px rgba(242, 107, 110, 0.75)',
    },
    // partnerLogo: {
    //   width: '110px',
    //   height: '110px',
    // },
    partnerSlide: {
      textAlign: '-webkit-center',
    },
  }))
  const classes = useStyles()
  const partnersLogo = [
    {
      logo: 'nabardlogo.png',
    },
    {
      logo: 'bharatcall.png',
    },
    {
      logo: 'dgft.png',
    },
    {
      logo: 'fieo.png',
    },
    {
      logo: 'apeda.png',
    },
    {
      logo: 'aagama.png',
    },
    {
      logo: 'ibef.png',
    },
  ]
  return (
    <>
      <Grid className={classes.partnerSectionWrap}>
        <Grid container justifyContent="center" className="mb-3">
          <img
            src={`${process.env.PUBLIC_URL}/assets/partners/partnersnameplate.png`}
            alt="Event and Updates"
          />
        </Grid>
        <Grid container className={classes.PartnerSection}>
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <Grid className="row partnerSlideWrap">
              <Grid container justifyContent="center">
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
                          key={index}
                          className={classes.partnerSlide}
                        >
                          <Grid>
                            <img
                              variant="square"
                              src={`${process.env.PUBLIC_URL}/assets/partners/${item.logo}`}
                              className={classes.partnerLogo}
                              alt="FEED PARTNERS LOGO"
                              width="100"
                            />
                          </Grid>
                        </SwiperSlide>
                      ))}
                    </Grid>
                  </Grid>
                </Swiper>
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Grid>
    </>
  )
}
