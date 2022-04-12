import React from 'react'
import './ServicesNavbar.css'
import { Link } from 'react-router-dom'
import { Avatar, Grid } from '@material-ui/core'
import ServicesSection from '../../servicesSection/servicesSection'
export default function ServicesNavbar() {
  const screenWidth = window.innerWidth > 769 ? true : false
  return (
    <>
      {screenWidth ? (
        <div className="container-fluid resp-ServiceNav servicenav-wrap">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 d-lg-flex justify-content-around nav-btn">
              <Link className="nav-link" to="/myfpo">
                <button
                  className="btn btn-warning"
                  style={{ color: 'white', borderRadius: '10px 10px' }}
                >
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/servicenavbar/fpo-icon.jpg`}
                    width="25"
                    style={{ borderRadius: '50px 50px' }}
                    alt=""
                  />{' '}
                  MY FPC
                </button>
              </Link>
              <Link className="nav-link" to="/myfarm">
                <button
                  className="btn farm-btn"
                  style={{ borderRadius: '10px 10px' }}
                >
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/servicenavbar/farm.png`}
                    width="25"
                    // style={{ borderRadius: '50px 50px' }}
                    alt=""
                  />{' '}
                  MY FARM
                </button>
              </Link>
              <Link className="nav-link" to="/productprofile">
                <button
                  className="btn btn-primary"
                  style={{ borderRadius: '10px 10px' }}
                >
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/servicenavbar/carton.png`}
                    width="25"
                    // style={{ borderRadius: '50px 50px' }}
                    alt=""
                  />{' '}
                  MY PRODUCTS
                </button>
              </Link>
              <Link className="nav-link" to="/mybusiness">
                <button
                  className="btn business-btn"
                  style={{ borderRadius: '10px 10px' }}
                >
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/servicenavbar/business.png`}
                    width="25"
                    // style={{ borderRadius: '50px 50px' }}
                    alt=""
                  />{' '}
                  MY BUSINESS
                </button>
              </Link>
              <Link className="nav-link" to="/myexport">
                <button
                  className="btn export-btn"
                  style={{ borderRadius: '10px 10px' }}
                >
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/servicenavbar/exim.png`}
                    width="25"
                    // style={{ borderRadius: '50px 50px' }}
                    alt=""
                  />{' '}
                  MY EXPORT
                </button>
              </Link>
              {/* <Link className="nav-link" to="/mymarket"> */}
              <Link
                className="nav-link"
                to="/ecom"
                style={{ borderRadius: '20px 20px' }}
              >
                <button
                  className="btn wheat-btn"
                  style={{ borderRadius: '10px 10px' }}
                >
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/servicenavbar/cart.png`}
                    width="25"
                    // style={{ borderRadius: '50px 50px' }}
                    alt=""
                  />{' '}
                  MY MARKET
                </button>
              </Link>
              <Link className="nav-link" to="/myeducation">
                <button
                  className="btn btn-danger"
                  style={{ borderRadius: '10px 10px' }}
                >
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/servicenavbar/education.png`}
                    width="25"
                    // style={{ borderRadius: '50px 50px' }}
                    alt=""
                  />{' '}
                  MY EDUCATION
                </button>
              </Link>
              <Link className="nav-link" to="/mytools">
                <button
                  className="btn btn-dark"
                  style={{ borderRadius: '10px 10px' }}
                >
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/servicenavbar/tools.png`}
                    width="25"
                    // style={{ borderRadius: '50px 50px' }}
                    alt=""
                  />{' '}
                  MY TOOLS
                </button>
              </Link>
              {/* <div>
                <Avatar alt="Travis Howard" src="/assets/farmer-avatar.jpg" />
              </div> */}
            </div>
          </div>
        </div>
      ) : (
        <ServicesSection titleRequired={false} />
      )}
    </>
  )
}
