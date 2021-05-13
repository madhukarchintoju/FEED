import React from 'react'
import './myBusinessNav.css'
import { Link } from 'react-router-dom'

export default function MyBusinessNav() {
    return (
        <>
            <div className="row">
                <div className="mybusi-side-menu active">
                    <ul className="nav">
                        <li className="nav-item">
                            <Link
                                to="/mybusiness/businessprofile"
                                className="nav-link text-white"
                            >
                                <img src="assets/user-icon.png" alt="" />{' '}
                                BUSINESS PROFILE
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/mybusiness/businessaccount"
                                className="nav-link text-white"
                            >
                                FPO BUSINESS PLAN
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/mybusiness/businesscomplaincereg"
                                className="nav-link text-white"
                            >
                                COMPLAINCES & REGISTRATION
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/mybusiness/businessplan"
                                className="nav-link text-white"
                            >
                                BUSINESS PLAN
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/mybusiness/loanschemes"
                                className="nav-link text-white"
                            >
                                BUSINESS LOAN SCHEMES
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/mybusiness/marketingsupport"
                                className="nav-link text-white"
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
