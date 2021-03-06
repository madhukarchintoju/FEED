import React from 'react'
import './myFarmMain.css'
import { Redirect, Route, Switch } from 'react-router-dom'
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
import MyFarmHome from '../myFarmHome/myFarmHome'
import Fabric from '../myFarmProducts/fabric/fabric'
import AnimalHusbandry from '../myFarmProducts/animalhusbandry/animalhusbandry'
import Others from '../myFarmProducts/others/others'
import MyFarmGuideContent from '../myFarmGuideContent/myFarmGuideContent'
import WidgetsBar from '../../widgetsBar/widgetsBar'
import GovtLinks from '../myFarmGuide/govtLinks/govtLinks'
import SchemesLoans from '../myFarmGuide/schemesLoans/schemesLoans'
import Cultivation from '../myFarmGuide/cultivation/cultivation'

export default function MyFarmMainComp(props) {
  const navData = [
    {
      name: 'Vegetables',
      icon: 'fas fa-leaf',
      path: '/myfarm/vegetables',
    },
    {
      name: 'Spices',
      icon: 'fas fa-pepper-hot',
      path: '/myfarm/spices',
    },
    {
      name: 'Fruits',
      icon: 'fas fa-apple-alt',
      path: '/myfarm/fruits',
    },
    {
      name: 'Cereals',
      icon: 'fas fa-mortar-pestle',
      path: '/myfarm/cereals',
    },
    {
      name: 'Oil Seeds',
      icon: 'fas fa-seedling',
      path: '/myfarm/oilSeeds',
    },
    {
      name: 'Forest Products',
      icon: 'fas fa-tree',
      path: '/myfarm/forestProducts',
    },
    {
      name: 'Animal Husbandry',
      icon: 'fas fa-fan',
      path: '/myfarm/animalhusbandry',
    },
    {
      name: 'Poultry',
      icon: 'fas fa-drumstick-bite',
      path: '/myfarm/poultry',
    },
    {
      name: 'Aqua',
      icon: 'fas fa-fish',
      path: '/myfarm/aqua',
    },
    {
      name: 'Dairy',
      icon: 'fas fa-blender',
      path: '/myfarm/dairy',
    },
    {
      name: 'Plants',
      icon: 'fas fa-tree',
      path: '/myfarm/plants',
    },
    {
      name: 'Flowers',
      icon: 'fas fa-fan',
      path: '/myfarm/flowers',
    },
    {
      name: 'Plantation Crop',
      icon: 'fas fa-fan',
      path: '/myfarm/plantationcrop',
    },
    {
      name: 'Fabric',
      icon: 'fas fa-fan',
      path: '/myfarm/fabric',
    },
    {
      name: 'Others',
      icon: 'fas fa-fan',
      path: '/myfarm/others',
    },
  ]
  const path = props.location.pathname.slice(8)
  return (
    <div>
      <ServicesNavbar></ServicesNavbar>
      <WidgetsBar screenTitle={path}></WidgetsBar>
      <div className="row m-0">
        <SideNavBar
          className="col-lg p-0 sidenavbar"
          data={navData}
          bgColor="#ffc107"
          textColor="black"
          serviceTitleBg="#d6a920"
          serviceTitle="MY FPC"
          selectedSideNavLink="linear-gradient(90deg, rgba(255,193,7,1) 17%, rgba(255,255,255,1) 67%)"
        ></SideNavBar>
        <div className=" col-lg p-0 my-farm-wrap">
          {/* <WidgetsBar /> */}
          <Switch>
            <Route path="/myfarm/home" component={MyFarmHome}></Route>
            <Route path="/myfarm/fruits" component={MyFarmFruits} />
            <Route path="/myfarm/vegetables" component={Vegetables} />
            <Route path="/myfarm/aqua" component={Aqua} />
            <Route path="/myfarm/cereals" component={Cereals} />
            <Route path="/myfarm/dairy" component={Dairy} />
            <Route path="/myfarm/flowers" component={Flowers} />
            <Route path="/myfarm/forestProducts" component={ForestProducts} />
            <Route path="/myfarm/oilSeeds" component={OilSeeds} />
            <Route path="/myfarm/plantationCrop" component={PlantationCrop} />
            <Route path="/myfarm/poultry" component={Poultry} />
            <Route path="/myfarm/spices" component={Spices} />
            <Route path="/myfarm/plants" component={Plants} />
            <Route path="/myfarm/plantationcrop" component={PlantationCrop} />
            <Route path="/myfarm/animalhusbandry" component={AnimalHusbandry} />
            <Route path="/myfarm/fabric" component={Fabric} />
            <Route path="/myfarm/govtlinks" component={GovtLinks} />
            <Route path="/myfarm/schemesloans" component={SchemesLoans} />
            <Route path="/myfarm/cultivation" component={Cultivation} />
            <Route path="/myfarm/others" component={Others} />
            <Route
              path="/myfarm/guidecontent"
              component={MyFarmGuideContent}
            ></Route>
            <Redirect to="/myfarm/home"></Redirect>
          </Switch>
        </div>
      </div>
    </div>
  )
}
