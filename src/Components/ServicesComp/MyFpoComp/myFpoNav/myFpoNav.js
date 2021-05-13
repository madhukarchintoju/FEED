import React from 'react'
import './myFpoNav.css'
import { Link } from 'react-router-dom'

export default function MyFpoNav() {
    return (
        <>
            <div className="row m-0 mt-2">
                <div className="fpo-side-menu active">
                    <ul className="nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/myfpo/aboutfpo">
                                ABOUT FPO
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/myfpo/fpoaccount">
                                FPO ACCOUNTS
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                to="/myfpo/fpobusinessplan"
                            >
                                FPO BUSINESS PLAN
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                to="/myfpo/fpocomplainces"
                            >
                                FPO COMPLAINCES
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/myfpo/fpoagmboard">
                                FPO AGM & BOARD
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                to="/myfpo/fpoloanschemes"
                            >
                                FPO LOAN SCHEMES
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/myfpo/fpoconnect">
                                FPO CONNECT
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}
