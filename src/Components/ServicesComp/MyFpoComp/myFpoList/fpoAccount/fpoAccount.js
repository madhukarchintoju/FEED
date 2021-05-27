import React from 'react'
import { Link } from 'react-router-dom'
import './fpoAccount.css'

export default function FpoAccount() {
  return (
    <>
      <div
        className="fpo-account-wrap"
        style={{
          backgroundImage: `URL("${process.env.PUBLIC_URL}/assets/fpo-accounts-bg.jpg")`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      >
        <div className="row m-0 pt-3">
          <img
            src={`${process.env.PUBLIC_URL}/assets/fpoaccountsheading.png`}
            width="30%"
            alt=""
          />
        </div>
        <div className="row m-0 mt-3 d-lg-flex justify-content-around">
          <div>
            <Link>
              <img
                src={`${process.env.PUBLIC_URL}/assets/fpocreatevendor-icon.png`}
                alt=""
              />
            </Link>
          </div>
          <div>
            <Link>
              <img
                src={`${process.env.PUBLIC_URL}/assets/sharecapitalregistry-icon.png`}
                alt=""
              />
            </Link>
          </div>
          <div>
            <Link>
              <img
                src={`${process.env.PUBLIC_URL}/assets/fpopurchaseregistry-icon.png`}
                alt=""
              />
            </Link>
          </div>
          <div>
            <Link>
              <img
                src={`${process.env.PUBLIC_URL}/assets/fposaleregistryicon.png`}
                alt=""
              />
            </Link>
          </div>
          <div>
            <Link>
              <img
                src={`${process.env.PUBLIC_URL}/assets/fpostockregistry-icon.png`}
                alt=""
              />
            </Link>
          </div>
        </div>
        <div className="row m-0 mt-4 d-lg-flex justify-content-around">
          <div>
            <Link>
              <img
                src={`${process.env.PUBLIC_URL}/assets/fpocreateproduct-icon.png`}
                alt=""
              />
            </Link>
          </div>
          <div>
            <Link>
              <img
                src={`${process.env.PUBLIC_URL}/assets/fpoledgerregistry-icon.png`}
                alt=""
              />
            </Link>
          </div>
          <div>
            <Link>
              <img
                src={`${process.env.PUBLIC_URL}/assets/fpobankregistry-icon.png`}
                alt=""
              />
            </Link>
          </div>
          <div>
            <Link>
              <img
                src={`${process.env.PUBLIC_URL}/assets/fpocashbookregistry-icon.png`}
                alt=""
              />
            </Link>
          </div>
          <div>
            <Link>
              <img
                src={`${process.env.PUBLIC_URL}/assets/fporeports-icon.png`}
                alt=""
              />
            </Link>
          </div>
        </div>
        <div className="row m-0 mt-3 pb-4">
          <div className="col-lg-12 text-center">
            <button className="btn btn-warning">CONNECT TO FEED</button>
          </div>
        </div>
      </div>
    </>
  )
}
