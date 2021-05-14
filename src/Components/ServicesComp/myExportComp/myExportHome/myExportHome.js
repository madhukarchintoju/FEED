import React from 'react'
import { Link } from 'react-router-dom'
import './myExportHome.css'

export default function MyExportHome() {
    return (
        <>
            <div>
                <h2 style={{ fontWeight: '700' }}>MY EXPORTS</h2>
                <div className="row m-0">
                    <div className="col-lg-12">
                        <div className="row">
                            <div className="col-lg-2">
                                <Link className="nav-link" to="/">
                                    <img
                                        src={`${process.env.PUBLIC_URL}/assets/my-exports/why-exports.png`}
                                        alt="Why Exports card"
                                    />
                                </Link>
                            </div>
                            <div className="col-lg-2">
                                <Link to="">
                                    <img
                                        src={`${process.env.PUBLIC_URL}/assets/my-exports/start-export.png`}
                                        alt="Why Exports card"
                                    />
                                </Link>
                            </div>
                            <div className="col-lg-2">
                                <Link className="nav-link" to="">
                                    <img
                                        src={`${process.env.PUBLIC_URL}/assets/my-exports/PRODUCT-SELECTION.png`}
                                        alt="Why Exports card"
                                    />
                                </Link>
                            </div>
                            <div className="col-lg-2">
                                <Link className="nav-link" to="">
                                    <img
                                        src={`${process.env.PUBLIC_URL}/assets/my-exports/BUYERS-CONNECTIONS.png`}
                                        alt="Why Exports card"
                                    />
                                </Link>
                            </div>
                            <div className="col-lg-2">
                                <Link className="nav-link" to="">
                                    <img
                                        src={`${process.env.PUBLIC_URL}/assets/my-exports/POLICIES.png`}
                                        alt="Why Exports card"
                                    />
                                </Link>
                            </div>
                            <div className="col-lg-2">
                                <Link className="nav-link" to="">
                                    <img
                                        src={`${process.env.PUBLIC_URL}/assets/my-exports/FINANCE.png`}
                                        alt="Why Exports card"
                                    />
                                </Link>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-2">
                                <Link className="nav-link" to="">
                                    <img
                                        src={`${process.env.PUBLIC_URL}/assets/my-exports/PROCESS.png`}
                                        alt="Why Exports card"
                                    />
                                </Link>
                            </div>
                            <div className="col-lg-2">
                                <Link className="nav-link" to="">
                                    <img
                                        src={`${process.env.PUBLIC_URL}/assets/my-exports/DOCUMENTATION.png`}
                                        alt="Why Exports card"
                                    />
                                </Link>
                            </div>
                            <div className="col-lg-2">
                                <Link className="nav-link" to="">
                                    <img
                                        src={`${process.env.PUBLIC_URL}/assets/my-exports/GLOBAL-UPDATE.png`}
                                        alt="Why Exports card"
                                    />
                                </Link>
                            </div>
                            <div className="col-lg-2">
                                <Link className="nav-link" to="">
                                    <img
                                        src={`${process.env.PUBLIC_URL}/assets/my-exports/EVENTS.png`}
                                        alt="Why Exports card"
                                    />
                                </Link>
                            </div>
                            <div className="col-lg-2">
                                <Link className="nav-link" to="">
                                    <img
                                        src={`${process.env.PUBLIC_URL}/assets/my-exports/TOOLS-SERVICES.png`}
                                        alt="Why Exports card"
                                    />
                                </Link>
                            </div>
                            <div className="col-lg-2">
                                <Link className="nav-link" to="">
                                    <img
                                        src={`${process.env.PUBLIC_URL}/assets/my-exports/TARIFF.png`}
                                        alt="Why Exports card"
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row m-0">
                    <div className="col-lg-12 text-center">
                        <button className="btn btn-success fpo-broadcast-btn">
                            CONNECT TO FEED
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
