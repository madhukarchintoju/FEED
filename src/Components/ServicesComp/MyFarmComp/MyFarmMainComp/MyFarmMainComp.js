import React from 'react';
import './MyFarmMainComp.css';
import MyFarmNavComp from '../MyFarmNavComp/MyFarmNavComp';
import ServicesNavbar from '../../ServicesNavbar/ServicesNavbar.js'

export default function MyFarmMainComp() {
    return (
        <div>
            <ServicesNavbar> </ServicesNavbar>
            <MyFarmNavComp></MyFarmNavComp>
        </div>
        
    )
}