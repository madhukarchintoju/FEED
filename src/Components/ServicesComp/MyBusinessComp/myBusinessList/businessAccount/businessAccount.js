import React from 'react'
import './businessAccount.css'
import { Link } from 'react-router-dom'

export default function BusinessAccount() {
  return (
    <>
      <div
        className="business-account-wrap"
        // style={{
        //     backgroundImage: `URL("${process.env.PUBLIC_URL}/assets/fpo-accounts-bg.jpg")`,
        //     backgroundSize: "cover",
        //     backgroundPosition: "center",
        //     backgroundRepeat: "no-repeat",
        // }}
      >
        <div className="row m-0 pt-3">
          {/* <img
                        src={`${process.env.PUBLIC_URL}/assets/fpoaccountsheading.png`}
                        width="30%"
                        alt=""
                    /> */}
          <h5>Business Account</h5>
        </div>
        <div className="row m-0 mt-3 d-lg-flex justify-content-around">
          <div>
            <Link>
              <img
                src={`${process.env.PUBLIC_URL}/assets/my-business-create-vendor.png`}
                alt=""
              />
            </Link>
          </div>
          <div>
            <Link>
              <img
                src={`${process.env.PUBLIC_URL}/assets/my-business-share-capital-reg.png`}
                alt=""
              />
            </Link>
          </div>
          <div>
            <Link>
              <img
                src={`${process.env.PUBLIC_URL}/assets/my-business-purchase-reg.png`}
                alt=""
              />
            </Link>
          </div>
          <div>
            <Link>
              <img
                src={`${process.env.PUBLIC_URL}/assets/my-business-sales-reg.png`}
                alt=""
              />
            </Link>
          </div>
          <div>
            <Link>
              <img
                src={`${process.env.PUBLIC_URL}/assets/my-business-stock-reg.png`}
                alt=""
              />
            </Link>
          </div>
        </div>
        <div className="row m-0 mt-4 d-lg-flex justify-content-around">
          <div>
            <Link>
              <img
                src={`${process.env.PUBLIC_URL}/assets/my-business-create-product.png`}
                alt=""
              />
            </Link>
          </div>
          <div>
            <Link>
              <img
                src={`${process.env.PUBLIC_URL}/assets/my-business-ledger-reg.png`}
                alt=""
              />
            </Link>
          </div>
          <div>
            <Link>
              <img
                src={`${process.env.PUBLIC_URL}/assets/my-business-bank-reg.png`}
                alt=""
              />
            </Link>
          </div>
          <div>
            <Link>
              <img
                src={`${process.env.PUBLIC_URL}/assets/my-business-cashbokk-reg.png`}
                alt=""
              />
            </Link>
          </div>
          <div>
            <Link>
              <img
                src={`${process.env.PUBLIC_URL}/assets/my-business-reports.png`}
                alt=""
              />
            </Link>
          </div>
        </div>
        <div className="row m-0 mt-3 pb-4">
          <div className="col-lg-12 text-center">
            <button className="btn btn-primary">CONNECT TO FEED</button>
          </div>
        </div>
      </div>
    </>
  )
}
