import React from 'react'
import './schemes-and-policies.css'
import ServicesNavbar from '../ServicesNavbar/ServicesNavbar'
import PPForm from './form'
import PPMenu from './menu'
const SchemesAndPolicies = () => {
  return (
    <>
      <ServicesNavbar></ServicesNavbar>
      <PPForm></PPForm>
      <div className="container-fluid">
        <div className="row">
          <PPMenu></PPMenu>
          <div className="col-lg-10 schemes-content p-5">
            <div className="schemes-title text-center">
              <img
                src={`${process.env.PUBLIC_URL}/assets/product-profile/schemes-banner.png`}
                alt="title"
              />
            </div>
            <div className="row mt-5">
              <div className="col-lg-3 d-flex justify-content-center align-items-center">
                <div className="scheme-wrapper d-flex flex-column justify-content-center align-items-center">
                  <div className="sp-decorator sp-fpo-decorator"></div>
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/product-profile/fpo-icon.png`}
                    className="mb-4"
                    alt="fpo"
                  />
                  <h4 className="text-center">FPO</h4>
                </div>
              </div>
              <div className="col-lg-3 d-flex justify-content-center align-items-center">
                <div className="scheme-wrapper d-flex flex-column justify-content-center align-items-center">
                  <div className="sp-decorator sp-msme-decorator"></div>
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/product-profile/msme-icon.png`}
                    className="mb-4"
                    alt="msme"
                  />
                  <h4 className="text-center">MSME</h4>
                </div>
              </div>
              <div className="col-lg-3 d-flex justify-content-center align-items-center">
                <div className="scheme-wrapper d-flex flex-column justify-content-center align-items-center">
                  <div className="sp-decorator sp-farmer-decorator"></div>
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/product-profile/farmer-icon.png`}
                    className="mb-4"
                    alt="farmer"
                  />
                  <h4 className="text-center">FARMER</h4>
                </div>
              </div>
              <div className="col-lg-3 d-flex justify-content-center align-items-center">
                <div className="scheme-wrapper d-flex flex-column justify-content-center align-items-center">
                  <div className="sp-decorator sp-exports-decorator"></div>
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/product-profile/exports-icon.png`}
                    className="mb-4"
                    alt="exports"
                  />
                  <h4 className="text-center">EXPORTS</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SchemesAndPolicies
