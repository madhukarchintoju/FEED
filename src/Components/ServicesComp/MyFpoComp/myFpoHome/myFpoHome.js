import React from 'react'
import './myFpoHome.css'
import { Link } from 'react-router-dom'

export default function MyFpoHome() {
    return (
        <>
            <div className="col-lg-2 fpo-about">
                <div className="text-center">
                    <img
                        src={`${process.env.PUBLIC_URL}/assets/fpo-icon.jpg`}
                        width="70%"
                        alt=""
                    />
                </div>
                <div className="text-center">
                    <h1>MY FPO</h1>
                </div>
                <div className="text-center">
                    <img
                        src={`${process.env.PUBLIC_URL}/assets/ant.png`}
                        width="100%"
                        alt=""
                    />
                </div>
            </div>
            <div className="col-lg-8 fpo-cards-wrap text-center">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="row">
                            <div className="col-lg-4">
                                <Link to="/myfpo/aboutfpo" className="nav-link">
                                    <div className="fpo-cards">
                                        <div className="card-body text-center">
                                            <img
                                                src={`${process.env.PUBLIC_URL}/assets/fpo-icon.jpg`}
                                                width="70"
                                                alt=""
                                            />
                                            <h5 className="card-title my-auto">
                                                ABOUT FPO
                                            </h5>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-lg-4">
                                <Link
                                    to="/myfpo/fpoaccount"
                                    className="nav-link"
                                >
                                    <div className="fpo-cards">
                                        <div className="card-body text-center">
                                            <img
                                                src={`${process.env.PUBLIC_URL}/assets/fpo-icon.jpg`}
                                                width="70"
                                                alt=""
                                            />
                                            <h5 className="card-title">
                                                FPO ACCOUNT
                                            </h5>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-lg-4">
                                <Link
                                    to="/myfpo/fpobusinessplan"
                                    className="nav-link"
                                >
                                    <div className="fpo-cards">
                                        <div className="card-body text-center">
                                            <img
                                                src={`${process.env.PUBLIC_URL}/assets/fpo-icon.jpg`}
                                                width="70"
                                                alt=""
                                            />
                                            <h5 className="card-title">
                                                FPO BUSINESS PLAN
                                            </h5>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-lg-4">
                                <Link
                                    to="/myfpo/fpocomplainces"
                                    className="nav-link"
                                >
                                    <div className="fpo-cards">
                                        <div className="card-body text-center">
                                            <img
                                                src={`${process.env.PUBLIC_URL}/assets/fpo-icon.jpg`}
                                                width="70"
                                                alt=""
                                            />
                                            <h5 className="card-title">
                                                FPO COMPLAINCES
                                            </h5>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-lg-4">
                                <Link
                                    to="/myfpo/fpoagmboard"
                                    className="nav-link"
                                >
                                    <div className="fpo-cards">
                                        <div className="card-body text-center">
                                            <img
                                                src={`${process.env.PUBLIC_URL}/assets/fpo-icon.jpg`}
                                                width="70"
                                                alt=""
                                            />
                                            <h5 className="card-title">
                                                FPO AGM & BOARD MEETING
                                            </h5>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-lg-4">
                                <Link
                                    to="/myfpo/fpoloanschemes"
                                    className="nav-link"
                                >
                                    <div className="fpo-cards">
                                        <div className="card-body text-center">
                                            <img
                                                src={`${process.env.PUBLIC_URL}/assets/fpo-icon.jpg`}
                                                width="70"
                                                alt=""
                                            />
                                            <h5 className="card-title">
                                                FPO LOANS & SCHEMES
                                            </h5>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-11 text-center">
                        <button className="btn myfpo-broadcast-btn">
                            FPO CONNECT BROADCAST
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
