import React from 'react';
import './myFarmNavComp.css';
import { Link } from 'react-router-dom';

export default function MyFarmNavComp() {
    return (
        <div className="myfarm-nav row m-0 mt-2">
            <div className="side-menu active">
                <ul className="nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/myfarm/fruits">
                            FRUITS
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/myfarm/vegetables">
                            VEGETABLES
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/myfarm/spices">
                            SPICES
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/myfarm/cereals">
                            CEREALS
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/myfarm/oilSeeds">
                            OIL SEEDS
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/myfarm/plantationCrop">
                            PLANTATION CROP
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/myfarm/forestProducts">
                            FOREST PRODUCTS
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/myfarm/poultry">
                            POULTRY
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/myfarm/aqua">
                            AQUA
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/myfarm/dairy">
                            DAIRY
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/myfarm/plants">
                            PLANTS
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/myfarm/flowers">
                            FLOWERS
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}
