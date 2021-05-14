import React from 'react'
import './myBusinessNav.css'
import { Link } from 'react-router-dom'

export default function MyBusinessNav() {
    return (
        <>
            <div className="row m-0 mt-2">
                <div className="mybusiness-side-menu active">
                    <ul className="nav">
                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                to="/mybusiness/businessprofile"
                            >
                                BUSINESS PROFILE
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                to="/mybusiness/businessaccount"
                            >
                                BUSINESS ACCOUNTS
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                to="/mybusiness/businesscomplaincereg"
                            >
                                COMPLAINCES &amp; REGISTRATION
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                to="/mybusiness/businessplan"
                            >
                                BUSINESS PLAN
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                to="/mybusiness/loanschemes"
                            >
                                BUSINESS LOANS &amp; SCHEMES
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                to="/mybusiness/marketingsupport"
                            >
                                MARKETING SUPPORT
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}
