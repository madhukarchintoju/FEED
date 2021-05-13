import React from 'react'
import './myBusinessHome.css'

export default function MyBusinessHome() {
    return (
        <>
            <div className="col-lg-2 fpo-about">
                <div className="text-center">
                    <img
                        src={`${process.env.PUBLIC_URL}/assets/my-business-icon.jpg`}
                        width="70%"
                        alt=""
                    />
                </div>
                <div className="text-center">
                    <h1>MY BUSINESS</h1>
                </div>
                <div className="text-center">
                    <img
                        src={`${process.env.PUBLIC_URL}/assets/ant.png`}
                        width="100%"
                        alt=""
                    />
                </div>
            </div>
            <div className="col-lg-8 mybusi-cards-wrap">
                <div className="row m-auto">
                    <div className="col-lg-4">
                        <div className="fpo-cards">
                            <div className="card-body text-center">
                                <img
                                    src={`${process.env.PUBLIC_URL}/assets/my-business-icon.jpg`}
                                    width="70"
                                    alt=""
                                />
                                <h5 className="card-title my-auto">
                                    BUSINESS PROFILE
                                </h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="mybusi-cards">
                            <div className="card-body text-center">
                                <img
                                    src={`${process.env.PUBLIC_URL}/assets/my-business-icon.jpg`}
                                    width="70"
                                    alt=""
                                />
                                <h5 className="card-title">BUSINESS ACCOUNT</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="mybusi-cards">
                            <div className="card-body text-center">
                                <img
                                    src={`${process.env.PUBLIC_URL}/assets/my-business-icon.jpg`}
                                    width="70"
                                    alt=""
                                />
                                <h5 className="card-title">
                                    COMPLAINCES & REGISTRATION
                                </h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="mybusi-cards">
                            <div className="card-body text-center">
                                <img
                                    src={`${process.env.PUBLIC_URL}/assets/my-business-icon.jpg`}
                                    width="70"
                                    alt=""
                                />
                                <h5 className="card-title">BUSINESS PLAN</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="mybusi-cards">
                            <div className="card-body text-center">
                                <img
                                    src={`${process.env.PUBLIC_URL}/assets/my-business-icon.jpg`}
                                    width="70"
                                    alt=""
                                />
                                <h5 className="card-title">
                                    BUSINESS LOANS & SCHEMES
                                </h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="mybusi-cards">
                            <div className="card-body text-center">
                                <img
                                    src={`${process.env.PUBLIC_URL}/assets/my-business-icon.jpg`}
                                    width="70"
                                    alt=""
                                />
                                <h5 className="card-title">
                                    MARKETING SUPPORT
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-10 text-center">
                        <button className="btn mybusi-broadcast-btn">
                            CONNECT TO FEED
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
