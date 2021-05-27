import React from 'react'
import './fpoComplainces.css'
import { Link } from 'react-router-dom'

export default function FpoComplainces() {
    return (
        <>
            <div
                className="fpo-compliance-wrap"
                style={{
                    backgroundImage: `URL("${process.env.PUBLIC_URL}/assets/fpo-compliances-bg.jpg")`,
                }}
            >
                <div className="row m-0">
                    <div className="col-lg-12 text-center">
                        <img
                            src={`${process.env.PUBLIC_URL}/assets/fpocomplaincesheading.png`}
                            width="30%"
                            alt=""
                        />
                    </div>
                </div>
                <div className="row m-0 mt-3 d-lg-flex justify-content-around">
                    <Link to="/myfpo/fpocompliances/statutoryregistration">
                        <div className="">
                            <img
                                src={`${process.env.PUBLIC_URL}/assets/statutaoryregistrations.png`}
                                width="80%"
                                alt=""
                            />
                        </div>
                    </Link>
                    <Link to="/myfpo/fpocompliances/legalcompliances">
                        <div className="">
                            <img
                                src={`${process.env.PUBLIC_URL}/assets/legalcomplainces.png`}
                                width="80%"
                                alt=""
                            />
                        </div>
                    </Link>
                    <Link to="/myfpo/fpocompliances/annualcompliances">
                        <div className="">
                            <img
                                src={`${process.env.PUBLIC_URL}/assets/annualcomplainces.png`}
                                width="80%"
                                alt=""
                            />
                        </div>
                    </Link>
                </div>
                <div className="row m-0 mt-3 pb-4">
                    <div className="col-lg-12 text-center">
                        <button className="btn btn-warning">
                            CONNECT TO FEED
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
