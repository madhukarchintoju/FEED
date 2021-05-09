import React from 'react'
import './myExportMainComp.css'
import ServicesNavbar from '../../ServicesNavbar/ServicesNavbar.js'
import MyExportNavComp from '../myExportNavComp/myExportNavComp'

export default function MyExportMainComp() {
    return (
        <>
            <ServicesNavbar />
            <div className="container-fluid p-0">
                <div className="row m-0">
                    <div className="col-lg-12 p-0 d-lg-flex">
                        <div>
                            <MyExportNavComp />
                        </div>
                        <div className="p-2">
                            <h2 style={{ fontWeight: '700' }}>MY EXPORTS</h2>
                            <div className="row m-0">
                                <div className="col-lg-2">
                                    {/* <div class="fpo-cards">
                                        <img src="images/thumbnail.svg" class="card-img-top" alt="..."/>
                                        <div class="card-body text-center">
                                            <img
                                                src="./assets/52474.jpg"
                                                width="70"
                                                alt=""
                                            />
                                            <h5 class="card-title my-auto">
                                                ABOUT FPO
                                            </h5>
                                        </div>
                                    </div> */}
                                    <img src="assets/my-exports/PRODUCT-SELECTION.png" alt="Why Exports card"/>
                                </div>
                                <div className="col-lg-2">
                                    <img src="assets/my-exports/PRODUCT-SELECTION.png" alt="Why Exports card"/>
                                </div>
                                <div className="col-lg-2">
                                    <img src="assets/my-exports/PRODUCT-SELECTION.png" alt="Why Exports card"/>
                                </div>
                                <div className="col-lg-2">
                                    <img src="assets/my-exports/PRODUCT-SELECTION.png" alt="Why Exports card"/>
                                </div>
                                <div className="col-lg-2">
                                    <img src="assets/my-exports/PRODUCT-SELECTION.png" alt="Why Exports card"/>
                                </div>
                                <div className="col-lg-2">
                                    <img src="assets/my-exports/PRODUCT-SELECTION.png" alt="Why Exports card"/>
                                </div>
                                <div className="col-lg-2">
                                    <img src="assets/my-exports/PRODUCT-SELECTION.png" alt="Why Exports card"/>
                                </div>
                                <div className="col-lg-2">
                                    <img src="assets/my-exports/PRODUCT-SELECTION.png" alt="Why Exports card"/>
                                </div>
                                <div className="col-lg-2">
                                    <img src="assets/my-exports/PRODUCT-SELECTION.png" alt="Why Exports card"/>
                                </div>
                                <div className="col-lg-2">
                                    <img src="assets/my-exports/PRODUCT-SELECTION.png" alt="Why Exports card"/>
                                </div>
                                <div className="col-lg-2">
                                    <img src="assets/my-exports/PRODUCT-SELECTION.png" alt="Why Exports card"/>
                                </div>
                                <div className="col-lg-2">
                                    <img src="assets/my-exports/PRODUCT-SELECTION.png" alt="Why Exports card"/>
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
                    </div>
                </div>
            </div>
        </>
    )
}
