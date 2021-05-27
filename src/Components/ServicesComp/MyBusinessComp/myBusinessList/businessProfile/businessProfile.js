import React from 'react'
import './businessProfile.css'

export default function BusinessProfile() {
    return (
        <>
            <div className="row m-0 business-profile-wrap">
                <div className="col-lg-9 col-sm-12 col-xs-12 p-0">
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'space-evenly',
                        }}
                    >
                        <img
                            src={`${process.env.PUBLIC_URL}/assets/sample-fpo-logo.svg`}
                            width="6%"
                            alt=""
                        />
                        <h4
                            className="text-center my-auto p-1"
                            style={{
                                border: '3px solid #8660a9',
                                borderRadius: '15px 15px',
                            }}
                        >
                            Indian Farm Industry Pvt Ltd
                        </h4>
                    </div>
                    <div className="row m-0">
                        <div className="col-lg-11 p-0 business-profile-content">
                            <p className="p-3">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since
                                the 1500s, when an unknown printer took a galley
                                of type and scrambled it to make a type specimen
                                book. It has survived not only five centuries,
                                but also the leap into electronic typesetting,
                                remaining essentially Lorem Ipsum is simply
                                dummy text of the printing and typesetting
                                industry. Lorem Ipsum has been the industry's
                                standard dummy text ever since the 1500s, when
                                an unknown printer took a galley of type and
                                scrambled it to make a type specimen book. It
                                has survived not only five centuries, but also
                                the leap into electronic typesetting, remaining
                                essentially unknown printer took a galley of
                                type and scrambled it to make a type specimen
                                book. It has survived not only five centuries,
                                but also the leap into electronic typesetting,
                                remaining essentially
                            </p>
                        </div>
                    </div>
                    <div className="row about-fpo-images-wrap">
                        <div className="col-lg-11 m-auto about-fpo-images">
                            <img
                                src={`${process.env.PUBLIC_URL}/assets/circle-img.jpg`}
                                alt=""
                            />
                            <img
                                src={`${process.env.PUBLIC_URL}/assets/circle-img.jpg`}
                                alt=""
                            />
                            <img
                                src={`${process.env.PUBLIC_URL}/assets/circle-img.jpg`}
                                alt=""
                            />
                            <img
                                src={`${process.env.PUBLIC_URL}/assets/circle-img.jpg`}
                                alt=""
                            />
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 p-0">
                    <div className="about-fpo-info-card">
                        <div className="col-lg-6 p-1 about-fpo-info-card-role info-card-orange">
                            <span className="my-auto">01</span>
                            <img
                                src={`${process.env.PUBLIC_URL}/assets/statc.svg`}
                                width="40%"
                                className="p-2"
                                alt=""
                            />
                        </div>
                        <div className="col-lg-6">Info</div>
                    </div>
                    <div className="about-fpo-info-card">
                        <div className="col-lg-6 p-1 about-fpo-info-card-role info-card-green">
                            <span className="my-auto">02</span>
                            <img
                                src={`${process.env.PUBLIC_URL}/assets/home-icon.svg`}
                                width="40%"
                                className="p-2"
                                alt=""
                            />
                        </div>
                        <div className="col-lg-6">Info</div>
                    </div>
                    <div className="about-fpo-info-card">
                        <div className="col-lg-6 p-1 about-fpo-info-card-role info-card-teal">
                            <span className="my-auto">03</span>
                            <img
                                src={`${process.env.PUBLIC_URL}/assets/bulb-icon.svg`}
                                width="40%"
                                className="p-2"
                                alt=""
                            />
                        </div>
                        <div className="col-lg-6">Info</div>
                    </div>
                    <div className="about-fpo-info-card">
                        <div className="col-lg-6 p-1 about-fpo-info-card-role info-card-musk">
                            <span className="my-auto">04</span>
                            <img
                                src={`${process.env.PUBLIC_URL}/assets/settings-icon.svg`}
                                width="40%"
                                className="p-2"
                                alt=""
                            />
                        </div>
                        <div className="col-lg-6">Info</div>
                    </div>
                    <div className="about-fpo-info-card">
                        <div className="col-lg-6 p-1 about-fpo-info-card-role info-card-red">
                            <span className="my-auto">05</span>
                            <img
                                src={`${process.env.PUBLIC_URL}/assets/boy-icon.svg`}
                                width="40%"
                                className="p-2"
                                alt=""
                            />
                        </div>
                        <div className="col-lg-6">Info</div>
                    </div>
                    <div className="text-center">
                        <button
                            className="btn"
                            style={{
                                width: '80%',
                                fontWeight: 'bold',
                                borderRadius: '20px 20px',
                                color: 'white',
                                backgroundColor: '#8660a9',
                            }}
                        >
                            CONNECT FEED
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
