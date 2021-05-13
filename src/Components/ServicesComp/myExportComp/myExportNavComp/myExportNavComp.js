import React from 'react'
import './myExportNavComp.css'
import { Link } from 'react-router-dom'

export default function MyExportNavComp() {
    return (
        <>
            <div className="myexport-nav row m-0 mt-2">
                <div className="myexport-side-menu active">
                    <ul className="nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/myexport/whyexport">
                                WHY EXPORTS
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                to="/myexport/startexport"
                            >
                                HOW TO START EXPORT
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                to="/myexport/exportproductselection"
                            >
                                PRODUCT SELECTION
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                to="/myexport/exportbuyersconnection"
                            >
                                BUYERS CONNECTIONS
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                to="/myexport/eximpolicyregulation"
                            >
                                EXPORT-IMPORT FINANCE & INSURANCE
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                to="/myexport/eximfinanceinsurance"
                            >
                                EXPORT-IMPORT POLICIES & REGULATIONS
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                to="/myexport/processexportorder"
                            >
                                PROCESS AND EXPORT ORDER
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                to="/myexport/eximdocumentation"
                            >
                                EXPORT-IMPORT DOCUMENTATION
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                to="/myexport/globaltradeupdates"
                            >
                                GLOBAL TRADE UPDATES
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                to="/myexport/exportevents"
                            >
                                EVENTS
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                to="/myexport/exporttoolservices"
                            >
                                TOOLS & SERVICES
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                to="/myexport/eximtarrifbenefits"
                            >
                                EXPORT-IMPORT TARIFF & BENIFITS
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}
