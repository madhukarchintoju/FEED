import React from 'react';
import './myExportNavComp.css';
import { Link } from 'react-router-dom';

export default function MyExportNavComp() {
  return (
    <>
      <div className="myexport-nav row m-0 mt-2">
        <div className="side-menu active">
            <ul className="nav">
                <li className="nav-item"><Link className="nav-link" to="/">WHY EXPORTS</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/">HOW TO START EXPORT</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/">PRODUCT SELECTION</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/">BUYERS CONNECTIONS</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/">EXPORT-IMPORT POLICIES & REGULATIONS</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/">PROCESS AND EXPORT ORDER</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/">EXPORT-IMPORT DOCUMENTATION</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/">GLOBAL TRADE UPDATES</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/">EVENTS</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/">TOOLS &  SERVICES</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/">EXPORT-IMPORT TARIFF & BENIFITS</Link></li>
            </ul>
        </div>
    </div>
    </>
  )
}
