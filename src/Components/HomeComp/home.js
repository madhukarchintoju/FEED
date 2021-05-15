import React from 'react'
import './home.css'
import AboutSection from '../../Components/aboutSection/aboutSection'
import ServicesSection from '../../Components/servicesSection/servicesSection'
import EventsSection from '../../Components/eventsSection/eventsSection'
import TestimonialSection from '../../Components/testimonialSection/testimonialSection'
import FeedWorkingSection from '../../Components/feedWorkingSection/feedWorkingSection'
import PartnerSection from '../../Components/partnerSection/partnerSection'

function Home() {
    return (
        <>
            <div className="container-fluid p-0">
                <section className="carousel-section p-0">
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
                </section>
                <AboutSection />
                <ServicesSection />
                <div className="resp-events-view">
                    <EventsSection></EventsSection>
                </div>
                <FeedWorkingSection />
                <TestimonialSection />
                <PartnerSection />
            </div>
        </>
    )
}
export default Home
