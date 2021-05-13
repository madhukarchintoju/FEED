import React from 'react'
import './myFpoHome.css'

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
            <div className="col-lg-8 fpo-cards-wrap">
                <div className="row">
                    <div className="col-lg-4">
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
                    </div>
                    <div className="col-lg-4">
                        <div className="fpo-cards">
                            <div className="card-body text-center">
                                <img
                                    src={`${process.env.PUBLIC_URL}/assets/fpo-icon.jpg`}
                                    width="70"
                                    alt=""
                                />
                                <h5 className="card-title">FPO ACCOUNT</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
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
                    </div>
                    <div className="col-lg-4">
                        <div className="fpo-cards">
                            <div className="card-body text-center">
                                <img
                                    src={`${process.env.PUBLIC_URL}/assets/fpo-icon.jpg`}
                                    width="70"
                                    alt=""
                                />
                                <h5 className="card-title">FPO COMPLAINCES</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
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
                    </div>
                    <div className="col-lg-4">
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
                    </div>
                </div>
                <div className="row">
                    <div className="col text-center">
                        <button className="btn btn-warning">
                            FPO CONNECT BROADCAST
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
