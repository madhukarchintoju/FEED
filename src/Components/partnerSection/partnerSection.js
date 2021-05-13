import React from 'react'
import './partnerSection.css'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.min.css'
import 'swiper/components/navigation/navigation.min.css'
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y])

export default function PartnerSection() {
    return (
        <>
            <section className="mt-5">
                <div className="row Partners-section m-0">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 m-auto">
                        <div className="row">
                            <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12 m-auto">
                                <h3 className="section-heading text-center">
                                    Partners
                                </h3>
                            </div>
                        </div>
                        <div className="row text-center">
                            <div className="col-lg-10 col-md-12 col-sm-12 col-xs-12 m-auto">
                                <Swiper
                                    spaceBetween={50}
                                    loop={true}
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
                                    <div className="row">
                                        <div className="col-lg-2 col-md-12 col-sm-12 col-xs-12">
                                            <SwiperSlide key="1">
                                                <img
                                                    src="assets/feed.png"
                                                    width="100"
                                                    alt="partner-logo"
                                                />
                                            </SwiperSlide>
                                        </div>
                                        <div className="col-lg-2 col-md-12 col-sm-12 col-xs-12">
                                            <SwiperSlide key="2">
                                                <img
                                                    src="assets/nabard-logo.png"
                                                    width="100"
                                                    alt="partner-logo"
                                                />
                                            </SwiperSlide>
                                        </div>
                                        <div className="col-lg-2 col-md-12 col-sm-12 col-xs-12">
                                            <SwiperSlide key="3">
                                                <img
                                                    src="assets/feed.png"
                                                    width="100"
                                                    alt="partner-logo"
                                                />
                                            </SwiperSlide>
                                        </div>
                                        <div className="col-lg-2 col-md-12 col-sm-12 col-xs-12">
                                            <SwiperSlide key="4">
                                                <img
                                                    src="assets/nabard-logo.png"
                                                    width="100"
                                                    alt="partner-logo"
                                                />
                                            </SwiperSlide>
                                        </div>
                                        <div className="col-lg-2 col-md-12 col-sm-12 col-xs-12">
                                            <SwiperSlide key="5">
                                                <img
                                                    src="assets/feed.png"
                                                    width="100"
                                                    alt="partner-logo"
                                                />
                                            </SwiperSlide>
                                        </div>
                                        <div className="col-lg-2 col-md-12 col-sm-12 col-xs-12">
                                            <SwiperSlide key="6">
                                                <img
                                                    src="assets/nabard-logo.png"
                                                    width="100"
                                                    alt="partner-logo"
                                                />
                                            </SwiperSlide>
                                        </div>
                                        <div className="col-lg-2 col-md-12 col-sm-12 col-xs-12">
                                            <SwiperSlide key="7">
                                                <img
                                                    src="assets/feed.png"
                                                    width="100"
                                                    alt="partner-logo"
                                                />
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
