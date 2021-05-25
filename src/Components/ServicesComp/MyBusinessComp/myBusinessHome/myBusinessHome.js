import React from 'react'
import './myBusinessHome.css'

export default function MyBusinessHome() {
    return (
        <>
            <div className="d-lg-flex">
                <div className="fpo-about">
                    <div className="text-center">
                        <img
                            src={`${process.env.PUBLIC_URL}/assets/my-business-icon.jpg`}
                            width="100"
                            alt=""
                            style={{ borderRadius: '50px 50px' }}
                        />
                    </div>
                    <div className="text-center">
                        <h3>MY BUSINESS</h3>
                    </div>
                    <div className="text-center">
                        <img
                            src={`${process.env.PUBLIC_URL}/assets/ant-small.png`}
                            alt=""
                        />
                    </div>
                </div>
                <div className="mybusi-cards-wrap">
                    <div className="row m-auto">
                        <div className="col-lg-4">
                            <img
                                src={`${process.env.PUBLIC_URL}/assets/my-business/business-profile.png`}
                                // width="70"
                                alt=""
                            />
                        </div>
                        <div className="col-lg-4">
                            <img
                                src={`${process.env.PUBLIC_URL}/assets/my-business/business-account.png`}
                                // width="70"
                                alt=""
                            />
                        </div>
                        <div className="col-lg-4">
                            <img
                                src={`${process.env.PUBLIC_URL}/assets/my-business/compliance-registration.png`}
                                // width="70"
                                alt=""
                            />
                        </div>
                        <div className="col-lg-4">
                            <img
                                src={`${process.env.PUBLIC_URL}/assets/my-business/business-plan.png`}
                                // width="70"
                                alt=""
                            />
                        </div>
                        <div className="col-lg-4">
                            <img
                                src={`${process.env.PUBLIC_URL}/assets/my-business/business-loan-schemes.png`}
                                // width="70"
                                alt=""
                            />
                        </div>
                        <div className="col-lg-4">
                            <img
                                src={`${process.env.PUBLIC_URL}/assets/my-business/marketing-support.png`}
                                // width="70"
                                alt=""
                            />
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
            </div>
        </>
    )
}
