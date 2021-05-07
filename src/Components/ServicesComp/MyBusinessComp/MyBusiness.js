import React from 'react';
import './MyBusiness.css';
import { Link } from 'react-router-dom';
import ServicesNavbar from '../ServicesNavbar/ServicesNavbar.js'

export default function MyBusiness() {
  return (
    <>
        <ServicesNavbar/>
        {/* <h1>Welcome To My Fpo</h1> */}
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 mt-3">
                    {/* <div>
                        <i class="fa fa-bars" aria-hidden="true" style={{fontSize:"26px"}}></i>
                    </div> */}
                    <div className="row">
                        <div className="mybusi-side-menu active">
                            <div className="">
                                <ul className="nav">
                                <li className="nav-item"><Link to="/" className="nav-link text-white"><img src="assets/info-icon.png" alt=""/> ABOUT FPO</Link></li>
                                <li className="nav-item"><Link to="/" className="nav-link text-white"><img src="assets/user-icon.png" alt=""/> FPO ACCOUNT</Link></li>
                                <li className="nav-item"><Link to="/" className="nav-link text-white">FPO BUSINESS PLAN</Link></li>
                                <li className="nav-item"><Link to="/" className="nav-link text-white">FPO COMPLAINCES</Link></li>
                                <li className="nav-item"><Link to="/" className="nav-link text-white">FPO AGM & BOARD</Link></li>
                                <li className="nav-item"><Link to="/" className="nav-link text-white">FPO LOAN SCHEMES</Link></li>
                                <li className="nav-item"><Link to="/" className="nav-link text-white">FPO CONNECT</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 fpo-about">
                            <div className="text-center">
                                <img src="assets/my-business-icon.jpg" width="70%" alt=""/>
                            </div>
                            <div className="text-center">
                                <h1>MY BUSINESS</h1>
                            </div>
                            <div className="text-center">
                                <img src="assets/ant.png" width="100%" alt=""/>
                            </div>
                        </div>
                        <div className="col-lg-8 mybusi-cards-wrap">
                            <div className="row m-auto">
                                <div className="col-lg-4">
                                    <div class="fpo-cards">
                                        {/* <img src="images/thumbnail.svg" class="card-img-top" alt="..."/> */}
                                        <div class="card-body text-center">
                                            <img src="assets/my-business-icon.jpg" width="70" alt=""/>
                                            <h5 class="card-title my-auto">BUSINESS PROFILE</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div class="mybusi-cards">
                                        <div class="card-body text-center">
                                            <img src="assets/my-business-icon.jpg" width="70" alt=""/>
                                            <h5 class="card-title">BUSINESS ACCOUNT</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div class="mybusi-cards">
                                        <div class="card-body text-center">
                                            <img src="assets/my-business-icon.jpg" width="70" alt=""/>
                                            <h5 class="card-title">COMPLAINCES & REGISTRATION</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div class="mybusi-cards">
                                        <div class="card-body text-center">
                                            <img src="assets/my-business-icon.jpg" width="70" alt=""/>
                                            <h5 class="card-title">BUSINESS PLAN</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div class="mybusi-cards">
                                        <div class="card-body text-center">
                                            <img src="assets/my-business-icon.jpg" width="70" alt=""/>
                                            <h5 class="card-title">BUSINESS LOANS & SCHEMES</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div class="mybusi-cards">
                                        <div class="card-body text-center">
                                            <img src="assets/my-business-icon.jpg" width="70" alt=""/>
                                            <h5 class="card-title">MARKETING SUPPORT</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-10 text-center">
                                    <button className="btn mybusi-broadcast-btn">CONNECT TO FEED</button>
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
