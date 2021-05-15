import React from 'react';
import './myToolsNavComp.css';
import { Link } from 'react-router-dom'

export default function MyToolsNavComp() {
  return (
    <>
      <div className="row m-0 mt-2">
        <div className="mytools-side-menu active">
            <ul className="nav">
                <h3 className="text-center">MY TOOLS</h3>
                <li className="nav-item">
                    <Link className="nav-link" to="/mytools/fpo">
                        FPO
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/mytools/farmer">
                        FARMERS
                    </Link>
                </li>
                <li className="nav-item">
                    <Link
                        className="nav-link"
                        to="/mytools/msme"
                    >
                        MSME
                    </Link>
                </li>
                <li className="nav-item">
                    <Link
                        className="nav-link"
                        to="/mytools/student"
                    >
                        STUDENTS
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/mytools/exports">
                        EXPORTS
                    </Link>
                </li>
            </ul>
        </div>
    </div>
    </>
  )
}
