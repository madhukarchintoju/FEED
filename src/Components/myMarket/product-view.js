import React, { useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/swiper.min.css'
import 'swiper/components/navigation/navigation.min.css'
import 'swiper/components/thumbs/thumbs.min.css'
import './product-view.css'

// import Swiper core and required modules
import SwiperCore, { Navigation, Thumbs } from 'swiper/core'

// install Swiper modules
SwiperCore.use([Navigation, Thumbs])

const ProductView = ({ productInfo }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)
  let productImages = []
  if (Object.keys(productInfo).length > 0) {
    productImages = productInfo.productImages
  }
  console.log(productInfo)
  return (
    <>
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        className="mySwiper2"
      >
        {productImages.length > 0 ? (
          productImages.map((productImagePath, index) => {
            return (
              <>
                {productImages.length > 2 ? (
                  <SwiperSlide>
                    {index !== 0 ? (
                      <img
                        src={`${productImagePath}`}
                        alt={productInfo.productName}
                      />
                    ) : (
                      ''
                    )}
                  </SwiperSlide>
                ) : index !== 0 ? (
                  <img
                    src={`${productImagePath}`}
                    alt={productInfo.productName}
                  />
                ) : (
                  ''
                )}
              </>
            )
          })
        ) : (
          <SwiperSlide>
            <img
              src={`https://via.placeholder.com/473x474?text=Placeholder`}
              alt="placeholder-img"
            />
          </SwiperSlide>
        )}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesVisibility={true}
        watchSlidesProgress={true}
        className="mySwiper"
      >
        {productImages.length > 0 ? (
          productImages.map((productImagePath, index) => {
            return (
              <>
                {productImages.length > 2 ? (
                  <SwiperSlide>
                    {index !== 0 ? (
                      <img
                        src={`${productImagePath}`}
                        alt={productInfo.productName}
                      />
                    ) : (
                      ''
                    )}
                  </SwiperSlide>
                ) : (
                  ''
                )}
              </>
            )
          })
        ) : (
          <SwiperSlide>
            <img
              src={`https://via.placeholder.com/473x474?text=Placeholder`}
              alt="placeholder-img"
            />
          </SwiperSlide>
        )}
      </Swiper>
    </>
  )
}

export default ProductView
