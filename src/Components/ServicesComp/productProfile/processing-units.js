import React from 'react'
import './processing-units.css'
import ServicesNavbar from '../ServicesNavbar/ServicesNavbar'
import PPForm from './form'
import PPMenu from './menu'
const ProcessingUnits = () => {
  return (
    <>
      <ServicesNavbar></ServicesNavbar>
      <PPForm></PPForm>
      <div className="container-fluid">
        <div className="row">
          <PPMenu></PPMenu>
          <div className="col-lg-10 processing-content p-5">
            <div className="processing-title text-center">
              <img
                src={`${process.env.PUBLIC_URL}/assets/product-profile/processing-units-banner.png`}
                alt="title"
              />
            </div>
            <div className="row mt-5">
              <div className="col-lg-4 d-flex justify-content-center align-items-center">
                <div className="card shadow-lg">
                  <div className="card-header">
                    <h5 className="text-center">COLD STORAGE</h5>
                  </div>
                  <div className="card-body">
                    <div className="pu-icon">
                      <img
                        src={`${process.env.PUBLIC_URL}/assets/product-profile/cold-storage-icon.png`}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 d-flex justify-content-center align-items-center">
                <div className="card shadow-lg">
                  <div className="card-header">
                    <h5 className="text-center">FOOD PROCESSING</h5>
                  </div>
                  <div className="card-body">
                    <div className="pu-icon">
                      <img
                        src={`${process.env.PUBLIC_URL}/assets/product-profile/food-processing-icon.png`}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 d-flex justify-content-center align-items-center">
                <div className="card shadow-lg">
                  <div className="card-header">
                    <h5 className="text-center">PACK HOUSES</h5>
                  </div>
                  <div className="card-body">
                    <div className="pu-icon">
                      <img
                        src={`${process.env.PUBLIC_URL}/assets/product-profile/pack-houses-icon.png`}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-5 d-flex justify-content-center align-items-center">
              <div className="col-lg-4 d-flex justify-content-center align-items-center">
                <div className="card shadow-lg">
                  <div className="card-header">
                    <h5 className="text-center">MARKET YARDS</h5>
                  </div>
                  <div className="card-body">
                    <div className="pu-icon">
                      <img
                        src={`${process.env.PUBLIC_URL}/assets/product-profile/market-yards-icon.png`}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 d-flex justify-content-center align-items-center">
                <div className="card shadow-lg">
                  <div className="card-header">
                    <h5 className="text-center">WAREHOUSES</h5>
                  </div>
                  <div className="card-body d-flex">
                    <div className="pu-icon">
                      <img
                        src={`${process.env.PUBLIC_URL}/assets/product-profile/warehouses-icon.png`}
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

export default ProcessingUnits
