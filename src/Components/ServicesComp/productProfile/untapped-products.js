import React from 'react'
import './untapped-products.css'
import ServicesNavbar from '../ServicesNavbar/ServicesNavbar'
import PPForm from './form'
import PPMenu from './menu'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
const UntappedProducts = () => {
  return (
    <>
      <ServicesNavbar></ServicesNavbar>
      <PPForm></PPForm>
      <div className="container-fluid">
        <div className="row">
          <PPMenu></PPMenu>
          <div className="col-lg-10 utp-content p-5">
            <div className="utp-title text-center">
              <img
                src={`${process.env.PUBLIC_URL}/assets/product-profile/utp-banner.png`}
                alt="title"
              />
            </div>
            <h3 className="text-center utp-main-title mt-3">
              GLOBAL PRODUCTION & CONSUMPTION - INDIA POSITION
            </h3>
            <div className="row mt-5 utp-flag-row">
              <div className="col-lg-4 d-flex justify-content-center align-items-center m-auto">
                <div className="card shadow-lg world-members">
                  <div className="card-header d-flex justify-content-center align-items-center">
                    <h5 className="text-center">
                      WORLD TOP 10 IMPORTING COUNTRIES
                    </h5>
                  </div>
                  <div className="card-body d-flex flex-wrap justify-content-center">
                    <div className="cf-wrapper-one d-flex justify-content-around">
                      <div className="country-flag">
                        <img
                          src={`${process.env.PUBLIC_URL}/assets/product-profile/flags/china.png`}
                        />
                        <h6 className="text-center">China</h6>
                      </div>
                      <div className="country-flag">
                        <img
                          src={`${process.env.PUBLIC_URL}/assets/product-profile/flags/usa.png`}
                        />
                        <h6 className="text-center">USA</h6>
                      </div>
                      <div className="country-flag">
                        <img
                          src={`${process.env.PUBLIC_URL}/assets/product-profile/flags/germany.png`}
                        />
                        <h6 className="text-center">Germany</h6>
                      </div>
                      <div className="country-flag">
                        <img
                          src={`${process.env.PUBLIC_URL}/assets/product-profile/flags/japan.png`}
                        />
                        <h6 className="text-center">Japan</h6>
                      </div>
                      <div className="country-flag">
                        <img
                          src={`${process.env.PUBLIC_URL}/assets/product-profile/flags/france.png`}
                        />
                        <h6 className="text-center">France</h6>
                      </div>
                    </div>
                    <div className="cf-wrapper-two d-flex justify-content-around">
                      <div className="country-flag">
                        <img
                          src={`${process.env.PUBLIC_URL}/assets/product-profile/flags/south-korea.png`}
                        />
                        <h6 className="text-center">South Korea</h6>
                      </div>
                      <div className="country-flag">
                        <img
                          src={`${process.env.PUBLIC_URL}/assets/product-profile/flags/netherlands.png`}
                        />
                        <h6 className="text-center">Netherlands</h6>
                      </div>
                      <div className="country-flag">
                        <img
                          src={`${process.env.PUBLIC_URL}/assets/product-profile/flags/italy.png`}
                        />
                        <h6 className="text-center">Italy</h6>
                      </div>
                      <div className="country-flag">
                        <img
                          src={`${process.env.PUBLIC_URL}/assets/product-profile/flags/uk.png`}
                        />
                        <h6 className="text-center">United Kingdom</h6>
                      </div>
                      <div className="country-flag">
                        <img
                          src={`${process.env.PUBLIC_URL}/assets/product-profile/flags/canada.png`}
                        />
                        <h6 className="text-center">Canada</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 d-flex justify-content-center align-items-center m-auto">
                <div className="card shadow-lg">
                  <div className="card-header">
                    <h5 className="text-center">
                      WORLD TOP 10 IMPORTING COUNTRIES FROM INDIA
                    </h5>
                  </div>
                  <div className="card-body d-flex flex-wrap justify-content-center">
                    <div className="cf-wrapper-one d-flex justify-content-around">
                      <div className="country-flag">
                        <img
                          src={`${process.env.PUBLIC_URL}/assets/product-profile/flags/china.png`}
                        />
                        <h6 className="text-center">China</h6>
                      </div>
                      <div className="country-flag">
                        <img
                          src={`${process.env.PUBLIC_URL}/assets/product-profile/flags/usa.png`}
                        />
                        <h6 className="text-center">USA</h6>
                      </div>
                      <div className="country-flag">
                        <img
                          src={`${process.env.PUBLIC_URL}/assets/product-profile/flags/germany.png`}
                        />
                        <h6 className="text-center">Germany</h6>
                      </div>
                      <div className="country-flag">
                        <img
                          src={`${process.env.PUBLIC_URL}/assets/product-profile/flags/japan.png`}
                        />
                        <h6 className="text-center">Japan</h6>
                      </div>
                      <div className="country-flag">
                        <img
                          src={`${process.env.PUBLIC_URL}/assets/product-profile/flags/france.png`}
                        />
                        <h6 className="text-center">France</h6>
                      </div>
                    </div>
                    <div className="cf-wrapper-two d-flex justify-content-around">
                      <div className="country-flag">
                        <img
                          src={`${process.env.PUBLIC_URL}/assets/product-profile/flags/south-korea.png`}
                        />
                        <h6 className="text-center">South Korea</h6>
                      </div>
                      <div className="country-flag">
                        <img
                          src={`${process.env.PUBLIC_URL}/assets/product-profile/flags/netherlands.png`}
                        />
                        <h6 className="text-center">Netherlands</h6>
                      </div>
                      <div className="country-flag">
                        <img
                          src={`${process.env.PUBLIC_URL}/assets/product-profile/flags/italy.png`}
                        />
                        <h6 className="text-center">Italy</h6>
                      </div>
                      <div className="country-flag">
                        <img
                          src={`${process.env.PUBLIC_URL}/assets/product-profile/flags/uk.png`}
                        />
                        <h6 className="text-center">United Kingdom</h6>
                      </div>
                      <div className="country-flag">
                        <img
                          src={`${process.env.PUBLIC_URL}/assets/product-profile/flags/canada.png`}
                        />
                        <h6 className="text-center">Canada</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="utp-policies p-5">
              <ul className="d-flex justify-content-center align-items-center">
                <li>Export Policy</li>
                <li>SPS - TBT</li>
                <li>RoDTEP</li>
                <li>GST</li>
              </ul>
              <ul className="d-flex justify-content-center align-items-center">
                <li>Data Drawback</li>
                <li>Interest Subvention</li>
                <li>MEIS</li>
                <li>TMA</li>
              </ul>
            </div>
            <div className="utp-text-content mt-5">
              <img
                src={`${process.env.PUBLIC_URL}/assets/product-profile/utp-top-left-border.png`}
                className="utp-top-left-border"
              />
              <p>
                Disclosure: This post may contain affiliate links, meaning I get
                a commission if you decide to make a purchase or sign up through
                my links, at no cost to you. Please read my disclaimer for more
                info.
              </p>
              <p>
                Building a website requires you to fulfill a need for a new
                audience looking for solutions or questions answered. Here is a
                list of untapped niche markets to consider on your journey to
                making money online.
              </p>
              <p>
                Building a website requires you to fulfill a need for a new
                audience looking for solutions or questions answered. Here is a
                list of untapped niche markets to consider on your journey to
                making money online.
              </p>
              <p className="more-info text-right">
                more info&nbsp;
                <i class="fa fa-angle-double-right" aria-hidden="true"></i>
              </p>
              <img
                src={`${process.env.PUBLIC_URL}/assets/product-profile/utp-bottom-right-border.png`}
                className="utp-bottom-right-border"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default UntappedProducts
