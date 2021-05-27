import React from 'react'
import './testimonialSection.css'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.min.css'
import 'swiper/components/navigation/navigation.min.css'
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y])

export default function TestimonialSection() {
  return (
    <>
      <section>
        <div className="row m-0">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="row">
              <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12 m-auto">
                <h3 className="section-heading text-center">Testimonials</h3>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-10 col-md-12 col-sm-12 col-xs-12 m-auto">
                <Swiper
                  spaceBetween={50}
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
                  <div className="row">
                    <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12">
                      <SwiperSlide key="1">
                        <div className="custom-swiper-slide">
                          <div className="testimonialBox">
                            <i
                              className="fa fa-quote-left"
                              aria-hidden="true"
                            ></i>
                            <div className="content">
                              <p>
                                loremipsum lorem ipsum loremipsum lorem ipsum
                                loremipsum lorem ipsum loremipsum lorem ipsum
                                loremipsum lorem ipsum
                              </p>
                              <div className="details">
                                <div className="imgBx">
                                  <img
                                    src="/assets/man-icon.png"
                                    alt="user-icon"
                                  />
                                  <span>Narayana</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    </div>
                    <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12">
                      <SwiperSlide key="2">
                        <div className="custom-swiper-slide">
                          <div className="testimonialBox">
                            <i
                              className="fa fa-quote-left"
                              aria-hidden="true"
                            ></i>
                            <div className="content">
                              <p>
                                loremipsum lorem ipsum loremipsum lorem ipsum
                                loremipsum lorem ipsum loremipsum lorem ipsum
                                loremipsum lorem ipsum
                              </p>
                              <div className="details">
                                <div className="imgBx">
                                  <img
                                    src="/assets/female-icon.png"
                                    alt="user-icon"
                                  />
                                  <span>Kumari</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    </div>
                    <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12">
                      <SwiperSlide key="3">
                        <div className="custom-swiper-slide">
                          <div className="testimonialBox">
                            <i
                              className="fa fa-quote-left"
                              aria-hidden="true"
                            ></i>
                            <div className="content">
                              <p>
                                loremipsum lorem ipsum loremipsum lorem ipsum
                                loremipsum lorem ipsum loremipsum lorem ipsum
                                loremipsum lorem ipsum
                              </p>
                              <div className="details">
                                <div className="imgBx">
                                  <img
                                    src="/assets/man-icon.png"
                                    alt="user-icon"
                                  />
                                  <span>Venkatesh</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    </div>
                    <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12">
                      <SwiperSlide key="4">
                        <div className="custom-swiper-slide">
                          <div className="testimonialBox">
                            <i
                              className="fa fa-quote-left"
                              aria-hidden="true"
                            ></i>
                            <div className="content">
                              <p>
                                loremipsum lorem ipsum loremipsum lorem ipsum
                                loremipsum lorem ipsum loremipsum lorem ipsum
                                loremipsum lorem ipsum
                              </p>
                              <div className="details">
                                <div className="imgBx">
                                  <img
                                    src="/assets/man-icon.png"
                                    alt="user-icon"
                                  />
                                  <span>Narayana</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    </div>
                  </div>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
