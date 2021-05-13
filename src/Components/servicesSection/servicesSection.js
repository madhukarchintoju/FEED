import React from 'react'
import './servicesSection.css'
import { Link } from 'react-router-dom'

export default function ServicesSection() {
    return (
        <>
            <section id="feedServices" className="feed-services-section">
                <div className="row m-0">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="row">
                            <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12 m-auto">
                                <h3 className="section-heading text-center">
                                    FEED Services
                                </h3>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12 rocket-ant">
                                <img
                                    src="assets/rocket-one.png"
                                    className="img-fluid feed-service-img"
                                    alt=""
                                />
                            </div>
                            <div className="col-lg-9 col-md-12 col-sm-12 col-xs-12">
                                <div className="row">
                                    <div className="col-lg-3 col-md-6 col-sm-3 col-xs-3 col item-flx p-0">
                                        <Link className="nav-link" to="/myfpo">
                                            <div className="text-center services-card m-2">
                                                <div
                                                    className="services-card-header"
                                                    style={{
                                                        backgroundColor:
                                                            '#fbba14',
                                                    }}
                                                ></div>
                                                <div className="card-body card-img">
                                                    <img
                                                        src={`${process.env.PUBLIC_URL}/assets/fpo-icon.jpg`}
                                                        alt=""
                                                    />
                                                    <h4
                                                        className="card-title my-auto"
                                                        style={{
                                                            color: '#fbba14',
                                                        }}
                                                    >
                                                        MY FPO
                                                    </h4>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-3 col-xs-3 col item-flx p-0">
                                        <Link className="nav-link" to="/myfarm">
                                            <div className="text-center services-card m-2">
                                                <div
                                                    className="services-card-header"
                                                    style={{
                                                        backgroundColor:
                                                            '#79b247',
                                                    }}
                                                ></div>
                                                <div className="card-body card-img">
                                                    <img
                                                        src={`${process.env.PUBLIC_URL}/assets/farm-icon.jpg`}
                                                        alt=""
                                                    />
                                                    <h4
                                                        className="card-title P-5 my-auto"
                                                        style={{
                                                            position:
                                                                'relative',
                                                            color: '#79b247',
                                                        }}
                                                    >
                                                        MY FARM
                                                    </h4>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-3 col-xs-3 col item-flx p-0">
                                        <Link
                                            className="nav-link"
                                            to="/mybusiness"
                                        >
                                            <div className="text-center services-card m-2">
                                                <div
                                                    className="services-card-header"
                                                    style={{
                                                        backgroundColor:
                                                            '#2f79e4',
                                                    }}
                                                ></div>
                                                <div className="card-body card-img">
                                                    <img
                                                        src={`${process.env.PUBLIC_URL}/assets/my-business-icon.jpg`}
                                                        alt=""
                                                    />
                                                    <h4
                                                        className="card-title P-5 my-auto"
                                                        style={{
                                                            color: '#2f79e4',
                                                        }}
                                                    >
                                                        MY BUSINESS
                                                    </h4>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-3 col-xs-3 col item-flx p-0">
                                        <Link
                                            className="nav-link"
                                            to="/mymarket"
                                        >
                                            <div className="text-center services-card m-2">
                                                <div
                                                    className="services-card-header"
                                                    style={{
                                                        backgroundColor:
                                                            '#f54900',
                                                    }}
                                                ></div>
                                                <div className="card-body card-img">
                                                    <img
                                                        src={`${process.env.PUBLIC_URL}/assets/cart-icon.jpg`}
                                                        alt=""
                                                    />
                                                    <h4
                                                        className="card-title P-5 my-auto"
                                                        style={{
                                                            color: '#f54900',
                                                        }}
                                                    >
                                                        MY MARKET
                                                    </h4>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-3 col-xs-3 col item-flx p-0">
                                        <Link
                                            className="nav-link"
                                            to="/myproducts"
                                        >
                                            <div
                                                className="text-center services-card m-2"
                                                style={{
                                                    borderRadius:
                                                        '10px 10px 10px 10px',
                                                }}
                                            >
                                                <div
                                                    className="services-card-header"
                                                    style={{
                                                        backgroundColor:
                                                            '#832ad4',
                                                    }}
                                                ></div>
                                                <div className="card-body card-img">
                                                    <img
                                                        src={`${process.env.PUBLIC_URL}/assets/product-icon.jpg`}
                                                        alt=""
                                                    />
                                                    <h4
                                                        className="card-title P-5 my-auto"
                                                        style={{
                                                            color: '#832ad4',
                                                        }}
                                                    >
                                                        MY PRODUCTS
                                                    </h4>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-3 col-xs-3 col item-flx p-0">
                                        <Link
                                            className="nav-link"
                                            to="/myexport"
                                        >
                                            <div className="text-center services-card m-2">
                                                <div
                                                    className="services-card-header"
                                                    style={{
                                                        backgroundColor:
                                                            '#006a94',
                                                    }}
                                                ></div>
                                                <div className="card-body card-img">
                                                    <img
                                                        src={`${process.env.PUBLIC_URL}/assets/52474.jpg`}
                                                        alt=""
                                                    />
                                                    <h4
                                                        className="card-title P-5 my-auto"
                                                        style={{
                                                            color: '#006a94',
                                                        }}
                                                    >
                                                        MY EXPORTS
                                                    </h4>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-3 col-xs-3 col item-flx p-0">
                                        <Link
                                            className="nav-link"
                                            to="/myeducation"
                                        >
                                            <div className="text-center services-card m-2">
                                                <div
                                                    className="services-card-header"
                                                    style={{
                                                        backgroundColor:
                                                            '#f11c18',
                                                    }}
                                                ></div>
                                                <div className="card-body card-img">
                                                    <img
                                                        src={`${process.env.PUBLIC_URL}/assets/my-edu-icon.jpg`}
                                                        alt=""
                                                    />
                                                    <h4
                                                        className="card-title P-5 my-auto"
                                                        style={{
                                                            color: '#f11c18',
                                                        }}
                                                    >
                                                        MY EDUCATION
                                                    </h4>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-3 col-xs-3 col item-flx p-0">
                                        <Link
                                            className="nav-link"
                                            to="/mytools"
                                        >
                                            <div className="text-center services-card m-2">
                                                <div
                                                    className="services-card-header"
                                                    style={{
                                                        backgroundColor:
                                                            '#312401',
                                                    }}
                                                ></div>
                                                <div className="card-body card-img">
                                                    <img
                                                        src={`${process.env.PUBLIC_URL}/assets/tools-icon.jpg`}
                                                        alt=""
                                                    />
                                                    <h4
                                                        className="card-title P-5 my-auto"
                                                        style={{
                                                            color: '#312401',
                                                        }}
                                                    >
                                                        MY TOOLS
                                                    </h4>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
