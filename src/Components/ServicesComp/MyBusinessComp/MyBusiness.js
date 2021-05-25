import React from 'react'
import './MyBusiness.css'
import { Link } from 'react-router-dom'
import ServicesNavbar from '../ServicesNavbar/ServicesNavbar.js'

export default function MyBusiness() {
    return (
        <>
            <ServicesNavbar />
            {/* <h1>Welcome To My Fpo</h1> */}
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 mt-3"></div>
                </div>
            </div>
        </>
    )
}
