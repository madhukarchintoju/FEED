import React from 'react'
import './MyFpo.css'
import { Link } from 'react-router-dom'
import ServicesNavbar from '../ServicesNavbar/ServicesNavbar.js'

export default function MyFpo() {
    return (
        <>
            <ServicesNavbar />
            {/* <h1>Welcome To My Fpo</h1> */}
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 mt-2">
                        {/* <div>
                    <i class="fa fa-bars" aria-hidden="true" style={{fontSize:"26px"}}></i>
                </div> */}
                        <div className="row">
                            <div className="side-menu active">
                                <div className="">
                                    <ul className="nav">
                                        <li className="nav-item">
                                            <Link to="/" className="nav-link">
                                                <img
                                                    src="assets/info-icon.png"
                                                    alt=""
                                                />{' '}
                                                ABOUT FPO
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/" className="nav-link">
                                                <img
                                                    src="assets/user-icon.png"
                                                    alt=""
                                                />{' '}
                                                FPO ACCOUNT
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/" className="nav-link">
                                                FPO BUSINESS PLAN
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/" className="nav-link">
                                                FPO COMPLAINCES
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/" className="nav-link">
                                                FPO AGM & BOARD
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/" className="nav-link">
                                                FPO LOAN SCHEMES
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/" className="nav-link">
                                                FPO CONNECT
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-2 fpo-about">
                                <div className="text-center">
                                    <img
                                        src="assets/fpo-icon.jpg"
                                        width="70%"
                                        alt=""
                                    />
                                </div>
                                <div className="text-center">
                                    <h1>MY FPO</h1>
                                </div>
                                <div className="text-center">
                                    <img
                                        src="assets/ant.png"
                                        width="100%"
                                        alt=""
                                    />
                                </div>
                            </div>
                            <div className="col-lg-8 fpo-cards-wrap">
                                <div className="row m-auto">
                                    <div className="col-lg-4">
                                        <div class="fpo-cards">
                                            {/* <img src="images/thumbnail.svg" class="card-img-top" alt="..."/> */}
                                            <div class="card-body text-center">
                                                <img
                                                    src="assets/fpo-icon.jpg"
                                                    width="70"
                                                    alt=""
                                                />
                                                <h5 class="card-title my-auto">
                                                    ABOUT FPO
                                                </h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div class="fpo-cards">
                                            <div class="card-body text-center">
                                                <img
                                                    src="assets/fpo-icon.jpg"
                                                    width="70"
                                                    alt=""
                                                />
                                                <h5 class="card-title">
                                                    FPO ACCOUNT
                                                </h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div class="fpo-cards">
                                            <div class="card-body text-center">
                                                <img
                                                    src="assets/fpo-icon.jpg"
                                                    width="70"
                                                    alt=""
                                                />
                                                <h5 class="card-title">
                                                    FPO BUSINESS PLAN
                                                </h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div class="fpo-cards">
                                            <div class="card-body text-center">
                                                <img
                                                    src="assets/fpo-icon.jpg"
                                                    width="70"
                                                    alt=""
                                                />
                                                <h5 class="card-title">
                                                    FPO COMPLAINCES
                                                </h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div class="fpo-cards">
                                            <div class="card-body text-center">
                                                <img
                                                    src="assets/fpo-icon.jpg"
                                                    width="70"
                                                    alt=""
                                                />
                                                <h5 class="card-title">
                                                    FPO AGM & BOARD MEETING
                                                </h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div class="fpo-cards">
                                            <div class="card-body text-center">
                                                <img
                                                    src="assets/fpo-icon.jpg"
                                                    width="70"
                                                    alt=""
                                                />
                                                <h5 class="card-title">
                                                    FPO LOANS & SCHEMES
                                                </h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-10 text-center">
                                        <button className="btn btn-warning fpo-broadcast-btn">
                                            FPO CONNECT BROADCAST
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
