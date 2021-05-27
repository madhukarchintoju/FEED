import React from 'react'
import './eximTarrifBenefits.css'
import { Link } from 'react-router-dom'

export default function EximTarrifbenefits() {
  return (
    <>
      <div className="text-center">
        <h4>EXPORT - IMPORT TARIFF BENEFITS</h4>
      </div>
      <div className="row mt-4 justify-content-center">
        <div className="col-lg-2">
          <Link to="">
            <img
              src={`${process.env.PUBLIC_URL}/assets/know-export-tariff.png`}
              alt=""
            />
          </Link>
        </div>
        <div className="col-lg-2">
          <Link>
            <img
              src={`${process.env.PUBLIC_URL}/assets/interest-subvention-schemes.png`}
              alt=""
            />
          </Link>
        </div>
        <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2">
          <Link>
            <img
              src={`${process.env.PUBLIC_URL}/assets/export-policy.png`}
              alt=""
            />
          </Link>
        </div>
        <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2">
          <Link>
            <img
              src={`${process.env.PUBLIC_URL}/assets/sps-tbt-measures.png`}
              alt=""
            />
          </Link>
        </div>
        <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2">
          <Link>
            <img
              src={`${process.env.PUBLIC_URL}/assets/meis-rodtep.png`}
              alt=""
            />
          </Link>
        </div>
      </div>
      <div className="row mt-3 justify-content-center">
        <div className="col-lg-2">
          <Link to="">
            <img
              src={`${process.env.PUBLIC_URL}/assets/gst-other.png`}
              alt=""
            />
          </Link>
        </div>
        <div className="col-lg-2">
          <Link>
            <img
              src={`${process.env.PUBLIC_URL}/assets/tax-refund.png`}
              alt=""
            />
          </Link>
        </div>
        <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2">
          <Link>
            <img src={`${process.env.PUBLIC_URL}/assets/tma.png`} alt="" />
          </Link>
        </div>
        <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2">
          <Link>
            <img
              src={`${process.env.PUBLIC_URL}/assets/meis-rodtep.png`}
              alt=""
            />
          </Link>
        </div>
      </div>
      <div className="row justify-content-center mt-3">
        <button className="btn btn-primary">CONNECT TO FEED</button>
      </div>
    </>
  )
}
