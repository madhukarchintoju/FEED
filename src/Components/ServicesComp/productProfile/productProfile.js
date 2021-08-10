import React from 'react'
import './productProfile.css'
import { Link } from 'react-router-dom'
import ServicesNavbar from '../ServicesNavbar/ServicesNavbar'
import PPForm from './form'
import PPMenu from './menu'
const ProductProfile = () => {
  return (
    <>
      <ServicesNavbar></ServicesNavbar>
      <PPForm></PPForm>
      <div className="container-fluid">
        <div className="row">
          <PPMenu></PPMenu>
          <div className="col-lg-10 form-div">
            <div className="row">
              <div className="col-lg-4">
                {/* <div className="form">
                          <form>
                            <div className="form-group">
                               <label for="productName">PRODUCT NAME</label>
                               <input type="text" id="productName" name="productName" className="form-control"/>
                            </div>
                            <div className="form-group">
                               <label for="hsCode">HS CODE</label>
                               <input type="text" id="hsCode" name="hsCode" className="form-control"/>
                            </div>
                            <div className="form-group">
                               <label for="year">YEAR</label>
                               <input type="text" id="year" name="year" className="form-control"/>
                            </div>
                            <div className="form-group text-center">
                              <button type="submit">SUBMIT</button>
                            </div>
                          </form>
                      </div> */}
                <div className="card sec-1 db-sec shadow-lg">
                  <div className="card-header">
                    <h5 className="text-center">DATABASE & DOCS</h5>
                  </div>
                  <div className="card-body d-flex">
                    <ul>
                      <li>BUYERS</li>
                      <li>SELLERS</li>
                      <li>EXIM DOCUMENTATION</li>
                    </ul>
                    <div className="icon">
                      <img
                        src={`${process.env.PUBLIC_URL}/assets/product-profile/documentation.png`}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="ant-div d-flex justify-content-center flex-column">
                  <div className="ant text-center mt-3">
                    <img
                      src={`${process.env.PUBLIC_URL}/assets/product-profile/ant.png`}
                      alt=""
                    />
                  </div>
                  <div className="connect-to-feed text-center mt-3">
                    <button type="button">CONNECT TO FEED</button>
                  </div>
                </div>
              </div>
              <div className="col-lg-8 sections d-flex flex-wrap justify-content-around">
                <Link to={`/productprofile/production`}>
                  <div className="card sec-1 shadow-lg">
                    <div className="card-header">
                      <h5 className="text-center">PRODUCTION</h5>
                    </div>
                    <div className="card-body d-flex">
                      <ul>
                        <li>TYPE</li>
                        <li>AREA</li>
                        <li>QUANTITY</li>
                      </ul>
                      <div className="icon">
                        <img
                          src={`${process.env.PUBLIC_URL}/assets/product-profile/production.png`}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </Link>
                <Link to={'/productprofile/trade'}>
                  <div className="card sec-2 shadow-lg">
                    <div className="card-header">
                      <h5 className="text-center">TRADE</h5>
                    </div>
                    <div className="card-body d-flex">
                      <ul>
                        <li>EXPORT</li>
                        <li>IMPORT</li>
                        <li>DOMESTIC</li>
                      </ul>
                      <div className="icon">
                        <img
                          src={`${process.env.PUBLIC_URL}/assets/product-profile/dollar.png`}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </Link>
                <Link to={'/productprofile/untapped-products'}>
                  <div className="card sec-3 shadow-lg">
                    <div className="card-header">
                      <h5 className="text-center">UNTAPPED MARKET</h5>
                    </div>
                    <div className="card-body d-flex">
                      <ul>
                        <li>COUNTRY/REGION</li>
                        <li>WISE UNTAPPED</li>
                        <li>EXPORT OPPORTUNITIES</li>
                      </ul>
                      <div className="icon">
                        <img
                          src={`${process.env.PUBLIC_URL}/assets/product-profile/arrow.png`}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </Link>
                <Link to={'/productprofile/bi-products'}>
                  <div className="card sec-4 shadow-lg">
                    <div className="card-header">
                      <h5 className="text-center">BI PRODUCTS</h5>
                    </div>
                    <div className="card-body d-flex">
                      <ul>
                        <li>NAME</li>
                        <li>HS CODE</li>
                      </ul>
                      <div className="icon">
                        <img
                          src={`${process.env.PUBLIC_URL}/assets/product-profile/bi.png`}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </Link>
                <Link to={'/productprofile/processing-units'}>
                  <div className="card sec-5 shadow-lg">
                    <div className="card-header">
                      <h5 className="text-center">PROCESSING</h5>
                    </div>
                    <div className="card-body d-flex">
                      <ul>
                        <li>VALUE ADDITION UNITS</li>
                        <li>MARKET YARDS</li>
                      </ul>
                      <div className="icon">
                        <img
                          src={`${process.env.PUBLIC_URL}/assets/product-profile/yards.png`}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </Link>
                <Link to={'/myexport/home'}>
                  <div className="card sec-6 shadow-lg">
                    <div className="card-header">
                      <h5 className="text-center">COUNTRY PROFILE</h5>
                    </div>
                    <div className="card-body d-flex justify-content-center">
                      {/* <ul>
                                  <li>BUYERS</li>
                                  <li>SELLERS</li>
                                  <li>EXIM DOCUMENTATION</li>
                                </ul> */}
                      <div className="text-center">
                        <img
                          src={`${process.env.PUBLIC_URL}/assets/product-profile/country-profile.png`}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </Link>
                <Link to={'/productprofile/schemes-and-policies'}>
                  <div className="card sec-7 shadow-lg">
                    <div className="card-header">
                      <h5 className="text-center">SCHEMES & POLICIES</h5>
                    </div>
                    <div className="card-body d-flex">
                      <ul>
                        <li>
                          GLOBAL/
                          <br />
                          CENTRAL/
                          <br />
                          STATE
                          <br />
                          SCHEMES & POLICIES
                        </li>
                      </ul>
                      <div className="icon">
                        <img
                          src={`${process.env.PUBLIC_URL}/assets/product-profile/schemes.png`}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </Link>
                <div className="card sec-8 shadow-lg">
                  <div className="card-header">
                    <h5 className="text-center">PRODUCT GUIDE</h5>
                  </div>
                  <div className="card-body d-flex">
                    <ul>
                      <li>FARMING</li>
                      <li>PROCESSING</li>
                      <li>PACKING</li>
                      <li>TRADING</li>
                    </ul>
                    <div className="icon">
                      <img
                        src={`${process.env.PUBLIC_URL}/assets/product-profile/product-guide.png`}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="card sec-9 shadow-lg">
                  <div className="card-header">
                    <h5 className="text-center">FEED FOOT PRINT</h5>
                  </div>
                  <div className="card-body d-flex">
                    <ul>
                      <li>NO.OF EPMs</li>
                      <li>NO.OF FPOs</li>
                      <li>FEED TRADE</li>
                      <li>FEED FARMING/PROCESSING</li>
                    </ul>
                    <div className="icon">
                      <img
                        src={`${process.env.PUBLIC_URL}/assets/product-profile/foot-print.png`}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductProfile
