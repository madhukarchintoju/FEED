import React from 'react';
import './MyFarmNavComp.css';
import { Link } from 'react-router-dom';

export default function MyFarmNavComp() {
 return (
    <div className="myfarm-nav row m-0 mt-2">
        <div className="side-menu active">
            <ul className="nav">
                <li className="nav-item"><Link className="nav-link" to="/">FRUITS</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/">VEGETABLES</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/">SPICES</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/">CEREALS</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/">OIL SEEDS</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/">PLANTATION CROP</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/">FOREST PRODUCTS</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/">POULTRY</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/">AQUA</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/">DAIRY</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/">PLANTS</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/">FLOWERS</Link></li>
            </ul>
        </div>
    </div>
 )
}
