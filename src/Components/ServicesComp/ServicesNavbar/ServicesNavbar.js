import React from 'react'
import './ServicesNavbar.css'
import { Link } from 'react-router-dom'
import { Avatar } from '@material-ui/core'
import ServicesSection from '../../servicesSection/servicesSection'

export default function ServicesNavbar() {
  const screenWidth = window.innerWidth > 769 ? true : false
  return (
    <>
      {screenWidth ? (
        <div className="container-fluid resp-ServiceNav servicenav-wrap">
          <div className="row m-0 p-1">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 d-lg-flex justify-content-around nav-btn">
              <Link className="nav-link" to="/myfpo">
                <button className="btn btn-warning">
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/fpo-icon.jpg`}
                    width="30"
                    style={{ borderRadius: '50px 50px' }}
                    alt=""
                  />{' '}
                  MY FPO
                </button>
              </Link>
              <Link className="nav-link" to="/myfarm">
                <button className="btn farm-btn">
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/farm-icon.jpg`}
                    width="30"
                    style={{ borderRadius: '50px 50px' }}
                    alt=""
                  />{' '}
                  MY FARM
                </button>
              </Link>
              <Link className="nav-link" to="/myproducts">
                <button className="btn btn-primary">
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/product-icon.jpg`}
                    width="30"
                    style={{ borderRadius: '50px 50px' }}
                    alt=""
                  />{' '}
                  MY PRODUCTS
                </button>
              </Link>
              <Link className="nav-link" to="/mybusiness">
                <button className="btn violet-btn">
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/my-business-icon.jpg`}
                    width="30"
                    style={{ borderRadius: '50px 50px' }}
                    alt=""
                  />{' '}
                  MY BUSINESS
                </button>
              </Link>
              <Link className="nav-link" to="/myexport">
                <button className="btn export-btn">
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/52474.jpg`}
                    width="30"
                    style={{ borderRadius: '50px 50px' }}
                    alt=""
                  />{' '}
                  MY EXPORT
                </button>
              </Link>
              <Link className="nav-link" to="/mymarket">
                <button className="btn wheat-btn">
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/cart-icon.jpg`}
                    width="30"
                    style={{ borderRadius: '50px 50px' }}
                    alt=""
                  />{' '}
                  MY MARKET
                </button>
              </Link>
              <Link className="nav-link" to="/myeducation">
                <button className="btn btn-danger">
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/my-edu-icon.jpg`}
                    width="30"
                    style={{ borderRadius: '50px 50px' }}
                    alt=""
                  />{' '}
                  MY EDUCATION
                </button>
              </Link>
              <Link className="nav-link" to="/mytools">
                <button className="btn btn-dark">
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/tools-icon.jpg`}
                    width="30"
                    style={{ borderRadius: '50px 50px' }}
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
