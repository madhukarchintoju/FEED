import React from 'react';
import './myFarmHome.css';
import { Link } from 'react-router-dom';

export default function MyFarmHome() {
    return (
        <>
            <div className="col-lg-2">
                <div className="text-center">
                    <img
                        src={`${process.env.PUBLIC_URL}/assets/farm-icon.jpg`}
                        width="70%"
                        alt=""
                    />
                </div>
                <div className="text-center">
                    <h1>MY FARM</h1>
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
                            <div className="col-lg-2">
                                <Link to="" className="nav-link">
                                    <img
                                        src="https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/SPICES_nu_1c0Aea.png"
                                        // width="70"
                                        alt=""
                                    />
                                </Link>
                            </div>
                            <div className="col-lg-2">
                                <Link to="" className="nav-link">
                                    <img
                                        src="https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/CEREALS_-akHzC2xIV.png"
                                        // width="70"
                                        alt=""
                                    />
                                </Link>
                            </div>
                            <div className="col-lg-2">
                                <Link to="" className="nav-link">
                                    <img
                                        src="https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/AQUA_ALVRgxpyxM.png"
                                        // width="70"
                                        alt=""
                                    />
                                </Link>
                            </div>
                            <div className="col-lg-2">
                                <Link to="" className="nav-link">
                                    <img
                                        src="https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/DAIRY_XAlsfOGZ19.png"
                                        // width="70"
                                        alt=""
                                    />
                                </Link>
                            </div>
                            <div className="col-lg-2">
                                <Link to="" className="nav-link">
                                    <img
                                        src="https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/FOREST-PRODUCTS_BuVD3boEx.png"
                                        // width="70"
                                        alt=""
                                    />
                                </Link>
                            </div>
                            <div className="col-lg-2">
                                <Link to="" className="nav-link">
                                    <img
                                        src="https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/PLANTATION-CROP_qQoR-IXTcl.png"
                                        // width="70"
                                        alt=""
                                    />
                                </Link>
                            </div>
                            <div className="col-lg-2">
                                <Link to="" className="nav-link">
                                    <img
                                        src="https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/PLANTS_So2QIQ12i.png"
                                        // width="70"
                                        alt=""
                                    />
                                </Link>
                            </div>
                            <div className="col-lg-2">
                                <Link to="" className="nav-link">
                                    <img
                                        src="https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/ROSE-FLOWER_lp6IRmHSrv.png"
                                        // width="70"
                                        alt=""
                                    />
                                </Link>
                            </div>
                            <div className="col-lg-2">
                                <Link to="" className="nav-link">
                                    <img
                                        src="https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/POULTRY_kK6Xr2XeR.png"
                                        // width="70"
                                        alt=""
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-11 text-center">
                        <button className="btn myfpo-broadcast-btn">
                            CONNECT FARM
                    </button>
                    </div>
                </div>
            </div>
        </>
    )
}
