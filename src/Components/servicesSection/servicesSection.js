import React, { useEffect } from 'react'
import './servicesSection.css'
import { Link } from 'react-router-dom'
import Aos from 'aos'
import 'aos/dist/aos.css'
export default function ServicesSection(props) {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  })
  return (
    <>
      <section id="feedServices" className="feed-services-section">
        <div className="row m-0">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            {props?.titleRequired === false ? (
              ''
            ) : (
              <div className="row text-center">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 m-auto">
                  {/* <h5 className="section-heading text-center">FEED Services</h5> */}
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/my-services/feedservicesnameplate.png`}
                    className="img-fluid"
                    alt="FEED STARTUP"
                  />
                </div>
              </div>
            )}
            <div className="row mt-3">
              {window.innerWidth > 720 ? (
                <div
                  className="col-lg-3 col-md-12 rocket-ant"
                  data-aos="zoom-out-right"
                >
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/my-services/feedant.png`}
                    className="img-fluid"
                    alt="FEED STARTUP"
                  />
                </div>
              ) : (
                ''
              )}
              <div className="col-lg-9 col-md-12 col-sm-12 col-xs-12">
                <div className="row">
                  <div
                    className="col-lg-3 col-md-3 col-sm-3 col-xs-3 col item-flx p-0"
                    data-aos="fade-down"
                  >
                    <Link className="nav-link" to="/myfpo">
                      <div className="text-center services-card m-2">
                        <div
                          className="services-card-header"
                          style={{
                            backgroundColor: '#fbba14',
                          }}
                        ></div>
                        <div className="card-body card-img">
                          <img
                            src={`${process.env.PUBLIC_URL}/assets/my-services/myfpclogo.png`}
                            alt=""
                          />
                          <h5
                            className="card-title my-auto"
                            style={{
                              color: '#fbba14',
                            }}
                          >
                            MY FPC / MY COOPs
                          </h5>
                          {window.innerWidth > 720 ? (
                            <small>
                              FARM TO FOREIGN EXPORTS ENTREPRENEURSHIP
                              DEVELOPMENT
                            </small>
                          ) : (
                            ''
                          )}
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div
                    className="col-lg-3 col-md-3 col-sm-3 col-xs-3 col item-flx p-0"
                    data-aos="fade-down"
                  >
                    <Link className="nav-link" to="/myfarm">
                      <div className="text-center services-card m-2">
                        <div
                          className="services-card-header"
                          style={{
                            backgroundColor: '#79b247',
                          }}
                        ></div>
                        <div className="card-body card-img">
                          <img
                            src={`${process.env.PUBLIC_URL}/assets/my-services/myfarmlogo.png`}
                            alt=""
                          />
                          <h5
                            className="card-title P-5 my-auto"
                            style={{
                              position: 'relative',
                              color: '#79b247',
                            }}
                          >
                            MY FARM
                          </h5>
                          {window.innerWidth > 720 ? (
                            <small>
                              FARM TO FOREIGN EXPORTS ENTREPRENEURSHIP
                              DEVELOPMENT
                            </small>
                          ) : (
                            ''
                          )}
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div
                    className="col-lg-3 col-md-3 col-sm-3 col-xs-3 col item-flx p-0"
                    data-aos="fade-down"
                  >
                    <Link className="nav-link" to="/mybusiness">
                      <div className="text-center services-card m-2">
                        <div
                          className="services-card-header"
                          style={{
                            backgroundColor: '#2f79e4',
                          }}
                        ></div>
                        <div className="card-body card-img">
                          <img
                            src={`${process.env.PUBLIC_URL}/assets/my-services/mybusinesslogo.png`}
                            alt=""
                          />
                          <h5
                            className="card-title P-5 my-auto"
                            style={{
                              color: '#2f79e4',
                            }}
                          >
                            MY BUSINESS
                          </h5>
                          {window.innerWidth > 720 ? (
                            <small>
                              FARM TO FOREIGN EXPORTS ENTREPRENEURSHIP
                              DEVELOPMENT
                            </small>
                          ) : (
                            ''
                          )}
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div
                    className="col-lg-3 col-md-3 col-sm-3 col-xs-3 col item-flx p-0"
                    data-aos="fade-down"
                  >
                    <Link className="nav-link" to="/ecom">
                      <div className="text-center services-card m-2">
                        <div
                          className="services-card-header"
                          style={{
                            backgroundColor: '#f54900',
                          }}
                        ></div>
                        <div className="card-body card-img">
                          <img
                            src={`${process.env.PUBLIC_URL}/assets/my-services/mymarketlogo.png`}
                            alt=""
                          />
                          <h5
                            className="card-title P-5 my-auto"
                            style={{
                              color: '#f54900',
                            }}
                          >
                            MY MARKET
                          </h5>
                          {window.innerWidth > 720 ? (
                            <small>
                              FARM TO FOREIGN EXPORTS ENTREPRENEURSHIP
                              DEVELOPMENT
                            </small>
                          ) : (
                            ''
                          )}
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div
                    className="col-lg-3 col-md-3 col-sm-3 col-xs-3 col item-flx p-0"
                    data-aos="fade-up"
                  >
                    <Link className="nav-link" to="/productprofile">
                      <div
                        className="text-center services-card m-2"
                        style={{
                          borderRadius: '10px 10px 10px 10px',
                        }}
                      >
                        <div
                          className="services-card-header"
                          style={{
                            backgroundColor: '#832ad4',
                          }}
                        ></div>
                        <div className="card-body card-img">
                          <img
                            src={`${process.env.PUBLIC_URL}/assets/my-services/myproductslogo.png`}
                            alt=""
                          />
                          <h5
                            className="card-title P-5 my-auto"
                            style={{
                              color: '#832ad4',
                            }}
                          >
                            MY PRODUCTS
                          </h5>
                          {window.innerWidth > 720 ? (
                            <small>
                              FARM TO FOREIGN EXPORTS ENTREPRENEURSHIP
                              DEVELOPMENT
                            </small>
                          ) : (
                            ''
                          )}
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div
                    className="col-lg-3 col-md-3 col-sm-3 col-xs-3 col item-flx p-0"
                    data-aos="fade-up"
                  >
                    <Link className="nav-link" to="/myexport">
                      <div className="text-center services-card m-2">
                        <div
                          className="services-card-header"
                          style={{
                            backgroundColor: '#006a94',
                          }}
                        ></div>
                        <div className="card-body card-img">
                          <img
                            src={`${process.env.PUBLIC_URL}/assets/my-services/myexportslogo.png`}
                            alt=""
                          />
                          <h5
                            className="card-title P-5 my-auto"
                            style={{
                              color: '#006a94',
                            }}
                          >
                            MY EXPORTS
                          </h5>
                          {window.innerWidth > 720 ? (
                            <small>
                              FARM TO FOREIGN EXPORTS ENTREPRENEURSHIP
                              DEVELOPMENT
                            </small>
                          ) : (
                            ''
                          )}
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div
                    className="col-lg-3 col-md-3 col-sm-3 col-xs-3 col item-flx p-0"
                    data-aos="fade-up"
                  >
                    <Link className="nav-link" to="/myeducation">
                      <div className="text-center services-card m-2">
                        <div
                          className="services-card-header"
                          style={{
                            backgroundColor: '#f11c18',
                          }}
                        ></div>
                        <div className="card-body card-img">
                          <img
                            src={`${process.env.PUBLIC_URL}/assets/my-services/myeducationlogo.png`}
                            alt=""
                          />
                          <h5
                            className="card-title P-5 my-auto"
                            style={{
                              color: '#f11c18',
                            }}
                          >
                            MY EDUCATION
                          </h5>
                          {window.innerWidth > 720 ? (
                            <small>
                              FARM TO FOREIGN EXPORTS ENTREPRENEURSHIP
                              DEVELOPMENT
                            </small>
                          ) : (
                            ''
                          )}
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div
                    className="col-lg-3 col-md-3 col-sm-3 col-xs-3 col item-flx p-0"
                    data-aos="fade-up"
                  >
                    <Link className="nav-link" to="/mytools">
                      <div className="text-center services-card m-2">
                        <div
                          className="services-card-header"
                          style={{
                            backgroundColor: '#312401',
                          }}
                        ></div>
                        <div className="card-body card-img">
                          <img
                            src={`${process.env.PUBLIC_URL}/assets/my-services/mytoolslogo.png`}
                            alt=""
                          />
                          <h5
                            className="card-title P-5 my-auto"
                            style={{
                              color: '#312401',
                            }}
                          >
                            MY TOOLS
                          </h5>
                          {window.innerWidth > 720 ? (
                            <small>
                              FARM TO FOREIGN EXPORTS ENTREPRENEURSHIP
                              DEVELOPMENT
                            </small>
                          ) : (
                            ''
                          )}
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
