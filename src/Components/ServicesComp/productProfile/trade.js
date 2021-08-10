import React from 'react'
import './trade.css'
import ServicesNavbar from '../ServicesNavbar/ServicesNavbar'
import PPForm from './form'
import PPMenu from './menu'
const Trade = () => {
  return (
    <>
      <ServicesNavbar></ServicesNavbar>
      <PPForm></PPForm>
      <div className="container-fluid">
        <div className="row">
          <PPMenu></PPMenu>
          <div className="col-lg-10 trade-content">
            <div className="graph-bg d-flex justify-content-center pt-4">
              <div className="trade-title text-center">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/product-profile/trade-banner.png`}
                  alt="title"
                />
              </div>
              <div className="text-content-wrapper">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/product-profile/trade-top-left-border.png`}
                  className="trade-top-left-border"
                />
                <p>
                  Firms scanning the world market for opportunities to diversify
                  products, markets and suppliers, and trade support
                  institutions (TSIs) setting priorities in terms of trade
                  promotion, sectoral performance, partner countries and trade
                  development strategies must have detailed statistical
                  information on international trade flows in order to utilize
                  resources effectively.
                </p>
                <p>
                  Trade Map is free to use and provides trade statistics and
                  market access information for export development. By
                  transforming the large volume of primary trade data into an
                  accessible, user-friendly, web-based format, Trade Map
                  provides indicators on export performance, international
                  demand, alternative markets and the role of competitors. Trade
                  Map covers yearly trade data for 220 countries and territories
                  and all 5,300 products of the Harmonized System.
                </p>
                <img
                  src={`${process.env.PUBLIC_URL}/assets/product-profile/trade-bottom-right-border.png`}
                  className="trade-bottom-right-border"
                />
              </div>
            </div>
            <div className="header-titles-wrapper d-flex justify-content-around">
              <div className="header-title-one d-flex justify-content-center align-items-center">
                <h5 className="text-center">EXPORTS</h5>
                <img
                  src={`${process.env.PUBLIC_URL}/assets/product-profile/left-globe.png`}
                  className="globe left-globe"
                  alt="globe"
                />
              </div>
              <img
                src={`${process.env.PUBLIC_URL}/assets/product-profile/arrows.png`}
                alt="arrows"
              />
              <div className="header-title-two d-flex justify-content-center align-items-center">
                <h5 className="text-center">IMPORTS</h5>
                <img
                  src={`${process.env.PUBLIC_URL}/assets/product-profile/right-globe.png`}
                  className="globe right-globe"
                  alt="globe"
                />
              </div>
            </div>
            <div className="note-points-wrapper d-flex justify-content-around mt-4">
              <ul>
                <li>
                  <span>Commodity-wise</span>
                </li>
                <li>
                  <span>Chapter-wise all Commodities</span>
                </li>
                <li>
                  <span>Commodity-wise all Countries</span>
                </li>
                <li>
                  <span>Commodity x Country-wise</span>
                </li>
                <li>
                  <span>Country-wise</span>
                </li>
                <li>
                  <span>Country-wise all Commodities</span>
                </li>
              </ul>
              <ul>
                <li>
                  <span>Commodity-wise</span>
                </li>
                <li>
                  <span>Chapter-wise all Commodities</span>
                </li>
                <li>
                  <span>Commodity-wise all Countries</span>
                </li>
                <li>
                  <span>Commodity x Country-wise</span>
                </li>
                <li>
                  <span>Country-wise</span>
                </li>
                <li>
                  <span>Country-wise all Commodities</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Trade
