import React from 'react'
import './myFarmMain.css'
import ServicesNavbar from '../../ServicesNavbar/ServicesNavbar'
import SideNavBar from '../../sideNavBar/sideNavBar'
import MyFarmFruits from '../myFarmProducts/fruits/fruits'
import Vegetables from '../myFarmProducts/vegetables/vegetables'
import Aqua from '../myFarmProducts/aqua/aqua'
import Cereals from '../myFarmProducts/cereals/cereals'
import Dairy from '../myFarmProducts/dairy/dairy'
import Flowers from '../myFarmProducts/flowers/flowers'
import ForestProducts from '../myFarmProducts/forestProducts/forestProducts'
import OilSeeds from '../myFarmProducts/oilSeeds/oilSeeds'
import PlantationCrop from '../myFarmProducts/plantationCrop/plantationCrop'
import Poultry from '../myFarmProducts/poultry/poultry'
import Spices from '../myFarmProducts/spices/spices'
import Plants from '../myFarmProducts/plants/plants'
import { Redirect, Route, Switch } from 'react-router-dom'
import MyFarmHome from '../myFarmHome/myFarmHome'

export default function MyFarmMainComp() {
    const navData = [
        {
            name: 'Fruits',
            icon: 'fa fa-plus-circle',
            path: '/myfarm/fruits',
        },
        {
            name: 'Vegetables',
            icon: 'fa fa-address-card',
            path: '/myfarm/vegetables',
        },
        {
            name: 'Spices',
            icon: 'fa fa-address-card',
            path: '/myfarm/spices',
        },
        {
            name: 'Cereals',
            icon: 'fa fa-address-card',
            path: '/myfarm/cereals',
        },
        {
            name: 'Oil Seeds',
            icon: 'fa fa-address-card',
            path: '/myfarm/oilSeeds',
        },
        {
            name: 'Forest Products',
            icon: 'fa fa-address-card',
            path: '/myfarm/forestProducts',
        },
        {
            name: 'Poultry',
            icon: 'fa fa-address-card',
            path: '/myfarm/poultry',
        },
        {
            name: 'Aqua',
            icon: 'fa fa-address-card',
            path: '/myfarm/aqua',
        },
        {
            name: 'Dairy',
            icon: 'fa fa-address-card',
            path: '/myfarm/dairy',
        },
        {
            name: 'Plants',
            icon: 'fa fa-address-card',
            path: '/myfarm/plants',
        },
        {
            name: 'Flowers',
            icon: 'fa fa-address-card',
            path: '/myfarm/flowers',
        },
    ]

    return (
        <div>
            <ServicesNavbar></ServicesNavbar>
            <div className="row m-0">
                <SideNavBar
                    className="col"
                    data={navData}
                    bgColor="#a4cf3e"
                    textColor="black"
                ></SideNavBar>
                <div className="col">
                    <Switch>
                        <Route
                            path="/myfarm/home"
                            component={MyFarmHome}
                        ></Route>
                        <Route path="/myfarm/fruits" component={MyFarmFruits} />
                        <Route
                            path="/myfarm/vegetables"
                            component={Vegetables}
                        />
                        <Route path="/myfarm/aqua" component={Aqua} />
                        <Route path="/myfarm/cereals" component={Cereals} />
                        <Route path="/myfarm/dairy" component={Dairy} />
                        <Route path="/myfarm/flowers" component={Flowers} />
                        <Route
                            path="/myfarm/forestProducts"
                            component={ForestProducts}
                        />
                        <Route path="/myfarm/oilSeeds" component={OilSeeds} />
                        <Route
                            path="/myfarm/plantationCrop"
                            component={PlantationCrop}
                        />
                        <Route path="/myfarm/poultry" component={Poultry} />
                        <Route path="/myfarm/spices" component={Spices} />
                        <Route path="/myfarm/plants" component={Plants} />
                        <Redirect to="/myfarm/home"></Redirect>
                    </Switch>
                </div>
            </div>
        </div>
    )
}
