import React from 'react'
import './menu.css'
import { Link } from 'react-router-dom'
const PPMenu = () => {
  return (
    <div className="col-lg-2 pp-side-menu">
      <div className="accordion">
        {/* <h2 className="ml-3">PRODUCT PROFILE</h2> */}
        <div className="card">
          <div className="card-header d-flex justify-content-between">
            {/* <div className="shape"></div> */}
            <h4>EXPAND ALL</h4>
            <button type="button" data-toggle="collapse" data-target="#accOne">
              <i class="fas fa-angle-down"></i>
            </button>
          </div>
          <div className="collapse" id="accOne">
            <div className="card-body">
              <p>
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header d-flex justify-content-between">
            {/* <div className="shape"></div> */}
            <h4>SUMMARY</h4>
            <button type="button" data-toggle="collapse" data-target="#accTwo">
              <i class="fas fa-angle-down"></i>
            </button>
          </div>
          <div className="collapse" id="accTwo">
            <div className="card-body">
              <p>
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header d-flex justify-content-between">
            {/* <div className="shape"></div> */}
            <Link
              to={'/productprofile/production'}
              style={{
                textDecoration: 'none',
              }}
            >
              <h4>PRODUCTION</h4>
            </Link>
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
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header d-flex justify-content-between">
            {/* <div className="shape"></div> */}
            <Link
              to={'/productprofile/trade'}
              style={{
                textDecoration: 'none',
              }}
            >
              <h4>TRADE</h4>
            </Link>
            <button type="button" data-toggle="collapse" data-target="#accFour">
              <i class="fas fa-angle-down"></i>
            </button>
          </div>
          <div className="collapse" id="accFour">
            <div className="card-body">
              <p>
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header d-flex justify-content-between">
            {/* <div className="shape"></div> */}
            <Link
              to={'/productprofile/untapped-products'}
              style={{
                textDecoration: 'none',
              }}
            >
              <h4>UNTAPPED MARKET</h4>
            </Link>
            <button type="button" data-toggle="collapse" data-target="#accFive">
              <i class="fas fa-angle-down"></i>
            </button>
          </div>
          <div className="collapse" id="accFive">
            <div className="card-body">
              <p>
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header d-flex justify-content-between">
            {/* <div className="shape"></div> */}
            <Link
              to={'/productprofile/bi-products'}
              style={{
                textDecoration: 'none',
              }}
            >
              <h4>BI PRODUCTS</h4>
            </Link>
            <button type="button" data-toggle="collapse" data-target="#accSix">
              <i class="fas fa-angle-down"></i>
            </button>
          </div>
          <div className="collapse" id="accSix">
            <div className="card-body">
              <p>
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header d-flex justify-content-between">
            {/* <div className="shape"></div> */}
            <Link
              to={'/productprofile/processing-units'}
              style={{
                textDecoration: 'none',
              }}
            >
              <h4>PROCESSING</h4>
            </Link>
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
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header d-flex justify-content-between">
            {/* <div className="shape"></div> */}
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
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header d-flex justify-content-between">
            {/* <div className="shape"></div> */}
            <Link
              to={'/productprofile/schemes-and-policies'}
              style={{
                textDecoration: 'none',
              }}
            >
              <h4>SCHEMES & POLICIES</h4>
            </Link>
            <button type="button" data-toggle="collapse" data-target="#accNine">
              <i class="fas fa-angle-down"></i>
            </button>
          </div>
          <div className="collapse" id="accNine">
            <div className="card-body">
              <p>
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header d-flex justify-content-between">
            {/* <div className="shape"></div> */}
            <h4>PRODUCT GUIDE</h4>
            <button type="button" data-toggle="collapse" data-target="#accTen">
              <i class="fas fa-angle-down"></i>
            </button>
          </div>
          <div className="collapse" id="accTen">
            <div className="card-body">
              <p>
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header d-flex justify-content-between">
            {/* <div className="shape"></div> */}
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
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PPMenu
