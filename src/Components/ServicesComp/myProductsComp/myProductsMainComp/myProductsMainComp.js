import React from 'react'
import './myProductsMainComp.css'
import ServicesNavbar from '../../ServicesNavbar/ServicesNavbar.js'
import { Link } from 'react-router-dom'

export default function MyProductsMainComp() {
  return (
    <>
      <ServicesNavbar />
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-2 pp-side-menu">
            <div className="accordion">
              <h2 className="ml-3">PRODUCT PROFILE</h2>
              <div className="card">
                <div className="card-header d-flex justify-content-between">
                  <div className="shape"></div>
                  <h4>EXPAND ALL</h4>
                  <button
                    type="button"
                    data-toggle="collapse"
                    data-target="#accOne"
                  >
                    <i class="fas fa-angle-down"></i>
                  </button>
                </div>
                <div className="collapse" id="accOne">
                  <div className="card-body">
                    <p>
                      sjdvsdhjhsabdw
                      ddbwhjdbjwdbjwehdjwedbjewdjewdjewdwd.dewjdbwedbewdeedde
                    </p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header d-flex justify-content-between">
                  <div className="shape"></div>
                  <h4>SUMMARY</h4>
                  <button
                    type="button"
                    data-toggle="collapse"
                    data-target="#accTwo"
                  >
                    <i class="fas fa-angle-down"></i>
                  </button>
                </div>
                <div className="collapse" id="accTwo">
                  <div className="card-body">
                    <p>
                      sjdvsdhjhsabdw
                      ddbwhjdbjwdbjwehdjwedbjewdjewdjewdwd.dewjdbwedbewdeedde
                    </p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header d-flex justify-content-between">
                  <div className="shape"></div>
                  <h4>PRODUCTION</h4>
                  <button
                    type="button"
                    data-toggle="collapse"
                    data-target="#accThree"
                  >
                    <i class="fas fa-angle-down"></i>
                  </button>
                </div>
                <div className="collapse" id="accThree">
                  <div className="card-body">
                    <p>
                      sjdvsdhjhsabdw
                      ddbwhjdbjwdbjwehdjwedbjewdjewdjewdwd.dewjdbwedbewdeedde
                    </p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header d-flex justify-content-between">
                  <div className="shape"></div>
                  <h4>TRADE</h4>
                  <button
                    type="button"
                    data-toggle="collapse"
                    data-target="#accFour"
                  >
                    <i class="fas fa-angle-down"></i>
                  </button>
                </div>
                <div className="collapse" id="accFour">
                  <div className="card-body">
                    <p>
                      sjdvsdhjhsabdw
                      ddbwhjdbjwdbjwehdjwedbjewdjewdjewdwd.dewjdbwedbewdeedde
                    </p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header d-flex justify-content-between">
                  <div className="shape"></div>
                  <h4>UNTAPPED MARKET</h4>
                  <button
                    type="button"
                    data-toggle="collapse"
                    data-target="#accFive"
                  >
                    <i class="fas fa-angle-down"></i>
                  </button>
                </div>
                <div className="collapse" id="accFive">
                  <div className="card-body">
                    <p>
                      sjdvsdhjhsabdw
                      ddbwhjdbjwdbjwehdjwedbjewdjewdjewdwd.dewjdbwedbewdeedde
                    </p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header d-flex justify-content-between">
                  <div className="shape"></div>
                  <h4>BI PRODUCTS</h4>
                  <button
                    type="button"
                    data-toggle="collapse"
                    data-target="#accSix"
                  >
                    <i class="fas fa-angle-down"></i>
                  </button>
                </div>
                <div className="collapse" id="accSix">
                  <div className="card-body">
                    <p>
                      sjdvsdhjhsabdw
                      ddbwhjdbjwdbjwehdjwedbjewdjewdjewdwd.dewjdbwedbewdeedde
                    </p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header d-flex justify-content-between">
                  <div className="shape"></div>
                  <h4>PROCESSING</h4>
                  <button
                    type="button"
                    data-toggle="collapse"
                    data-target="#accSeven"
                  >
                    <i class="fas fa-angle-down"></i>
                  </button>
                </div>
                <div className="collapse" id="accSeven">
                  <div className="card-body">
                    <p>
                      sjdvsdhjhsabdw
                      ddbwhjdbjwdbjwehdjwedbjewdjewdjewdwd.dewjdbwedbewdeedde
                    </p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header d-flex justify-content-between">
                  <div className="shape"></div>
                  <h4>DATABASE & DOCS</h4>
                  <button
                    type="button"
                    data-toggle="collapse"
                    data-target="#accEight"
                  >
                    <i class="fas fa-angle-down"></i>
                  </button>
                </div>
                <div className="collapse" id="accEight">
                  <div className="card-body">
                    <p>
                      sjdvsdhjhsabdw
                      ddbwhjdbjwdbjwehdjwedbjewdjewdjewdwd.dewjdbwedbewdeedde
                    </p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header d-flex justify-content-between">
                  <div className="shape"></div>
                  <h4>SCHEMES & POLICIES</h4>
                  <button
                    type="button"
                    data-toggle="collapse"
                    data-target="#accNine"
                  >
                    <i class="fas fa-angle-down"></i>
                  </button>
                </div>
                <div className="collapse" id="accNine">
                  <div className="card-body">
                    <p>
                      sjdvsdhjhsabdw
                      ddbwhjdbjwdbjwehdjwedbjewdjewdjewdwd.dewjdbwedbewdeedde
                    </p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header d-flex justify-content-between">
                  <div className="shape"></div>
                  <h4>PRODUCT GUIDE</h4>
                  <button
                    type="button"
                    data-toggle="collapse"
                    data-target="#accTen"
                  >
                    <i class="fas fa-angle-down"></i>
                  </button>
                </div>
                <div className="collapse" id="accTen">
                  <div className="card-body">
                    <p>
                      sjdvsdhjhsabdw
                      ddbwhjdbjwdbjwehdjwedbjewdjewdjewdwd.dewjdbwedbewdeedde
                    </p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header d-flex justify-content-between">
                  <div className="shape"></div>
                  <h4>FEED FOOT PRINT</h4>
                  <button
                    type="button"
                    data-toggle="collapse"
                    data-target="#accEleven"
                  >
                    <i class="fas fa-angle-down"></i>
                  </button>
                </div>
                <div className="collapse" id="accEleven">
                  <div className="card-body">
                    <p>
                      sjdvsdhjhsabdw
                      ddbwhjdbjwdbjwehdjwedbjewdjewdjewdwd.dewjdbwedbewdeedde
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-10 form-div">
            <div className="row">
              <div className="col-lg-4">
                <div className="form">
                  <form>
                    <div className="form-group">
                      <label for="productName">PRODUCT NAME</label>
                      <input
                        type="text"
                        id="productName"
                        name="productName"
                        className="form-control"
                      />
                    </div>
                    <div className="form-group">
                      <label for="hsCode">HS CODE</label>
                      <input
                        type="text"
                        id="hsCode"
                        name="hsCode"
                        className="form-control"
                      />
                    </div>
                    <div className="form-group">
                      <label for="year">YEAR</label>
                      <input
                        type="text"
                        id="year"
                        name="year"
                        className="form-control"
                      />
                    </div>
                    <div className="form-group text-center">
                      <button type="submit">SUBMIT</button>
                    </div>
                  </form>
                </div>
                <div className="ant-div d-flex justify-content-center flex-column">
                  <div className="ant text-center mt-3">
                    <img
                      src={`${process.env.PUBLIC_URL}/assets/my-products/product-profile/ant.png`}
                      alt=""
                    />
                  </div>
                  <div className="connect-to-feed text-center mt-3">
                    <button type="button">CONNECT TO FEED</button>
                  </div>
                </div>
              </div>
              <div className="col-lg-8 sections d-flex flex-wrap justify-content-around">
                <a
                  href="http://www.indiastatagri.com/data/agriculture/agricultural-production"
                  rel="noreferrer"
                  target="_blank"
                >
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
                          src={`${process.env.PUBLIC_URL}/assets/my-products/product-profile/production.png`}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </a>
                <a href="https://tradestat.commerce.gov.in/eidb/default.asp">
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
                          src={`${process.env.PUBLIC_URL}/assets/my-products/product-profile/dollar.png`}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href="https://exportpotential.intracen.org/en/products/analyze?fromMarker=i&exporter=699&toMarker=w&market=w&whatMarker=k"
                  target="_blank"
                  rel="noreferrer"
                >
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
                          src={`${process.env.PUBLIC_URL}/assets/my-products/product-profile/arrow.png`}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </a>
                <div className="card sec-4 shadow-lg">
                  <div className="card-header">
                    <h5 className="text-center">BY PRODUCTS</h5>
                  </div>
                  <div className="card-body d-flex">
                    <ul>
                      <li>NAME</li>
                      <li>HS CODE</li>
                    </ul>
                    <div className="icon">
                      <img
                        src={`${process.env.PUBLIC_URL}/assets/my-products/product-profile/bi.png`}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <a
                  href="https://agmarknet.gov.in/PriceAndArrivals/CommodityDailyStateWise_cat.aspx#"
                  target="_blank"
                  rel="noreferrer"
                >
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
                          src={`${process.env.PUBLIC_URL}/assets/my-products/product-profile/yards.png`}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </a>
                <Link to="/myexport/home">
                  <div className="card sec-6 shadow-lg">
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
                          src={`${process.env.PUBLIC_URL}/assets/my-products/product-profile/documentation.png`}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </Link>
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
                        src={`${process.env.PUBLIC_URL}/assets/my-products/product-profile/schemes.png`}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
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
                        src={`${process.env.PUBLIC_URL}/assets/my-products/product-profile/product-guide.png`}
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
                        src={`${process.env.PUBLIC_URL}/assets/my-products/product-profile/foot-print.png`}
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
