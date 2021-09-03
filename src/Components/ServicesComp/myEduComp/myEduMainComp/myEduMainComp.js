import React from 'react'
import './myEduMainComp.css'
import ServicesNavbar from '../../ServicesNavbar/ServicesNavbar.js'
import { Grid } from '@material-ui/core'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation } from 'swiper'
SwiperCore.use([Navigation])
const educationBanners = [
  {
    name: '',
    image: '29493.jpg',
  },
  {
    name: '',
    image: '2406.jpg',
  },
  {
    name: '',
    image: '4776069.jpg',
  },
]
export default function MyEduMainComp() {
  return (
    <>
      <ServicesNavbar />
      <h1 className="text-center text-danger">COMING SOON</h1>
      <Swiper loop="true" navigation>
        {educationBanners.map((item, index) => (
          <SwiperSlide key={index}>
            <Grid style={{ height: '500px' }}>
              <img
                src={`${process.env.PUBLIC_URL}/assets/my-education/${item.image}`}
                width="100%"
                alt="FEED STARTUP SLIDES"
                style={{ backgroundSize: 'fit-content' }}
              />
            </Grid>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}
