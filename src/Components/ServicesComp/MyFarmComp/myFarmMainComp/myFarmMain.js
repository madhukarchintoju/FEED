import React from 'react'
import './myFarmMain.css'
import MyFarmNavComp from '../myFarmNavComp/myFarmNav'
import ServicesNavbar from '../../ServicesNavbar/ServicesNavbar.js'
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
import { Route, Switch } from 'react-router-dom'

export default function MyFarmMainComp() {
    return (
        <div>
            <ServicesNavbar></ServicesNavbar>
            <div className="row m-0">
                <MyFarmNavComp className="col"></MyFarmNavComp>
                <Switch>
                    <Route path="/myfarm/fruits" component={MyFarmFruits} />
                    <Route path="/myfarm/vegetables" component={Vegetables} />
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
                </Switch>
            </div>
        </div>
    )
}
