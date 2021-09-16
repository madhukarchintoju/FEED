import React from 'react'
import MyFarmList from '../../myFarmList/myFarmList'
import { Redirect, Route, Switch } from 'react-router-dom'
import MyFarmGuide from '../../myFarmGuide/myFarmGuide'

export default function Aqua() {
  const dataList = [
    {
      name: 'Fish',
      icon: 'aqua/fish.png',
      link: '/myfarm/aqua/fish',
    },
    {
      name: 'Prawns',
      icon: 'aqua/prawn.png',
      link: '/myfarm/aqua/fish',
    },
  ]

  const dataGuide = [
    {
      name: 'Climate and Soil',
      icon: 'climateandsoil.png',
      link: '/myfarm/guidecontent',
      download: 'mango.pdf',
    },
    {
      name: 'Land Preparation',
      icon: 'landpreparation.png',
      link: '/myfarm/guidecontent',
      download: 'mango.pdf',
    },
    {
      name: 'Seeds and Plants',
      icon: 'seedsplants.png',
      link: '/myfarm/guidecontent',
      download: 'mango.pdf',
    },
    {
      name: 'Cultivation',
      icon: 'cultivation.png',
      link: '/myfarm/guidecontent',
      download: 'mango.pdf',
    },
    {
      name: 'Disease and Pestisides',
      icon: 'diseaseandpestisides.png',
      link: '/myfarm/guidecontent',
      download: 'mango.pdf',
    },
    {
      name: 'Irrigation',
      icon: 'irrigation.png',
      link: '/myfarm/guidecontent',
      download: 'mango.pdf',
    },
    {
      name: 'Internal Crops',
      icon: 'internalcrops.png',
      link: '/myfarm/guidecontent',
      download: 'mango.pdf',
    },
    {
      name: 'Pre Harvesting',
      icon: 'preharvesting.png',
      link: '/myfarm/guidecontent',
      download: 'mango.pdf',
    },
    {
      name: 'Post Harvesting',
      icon: 'postharvesting.png',
      link: '/myfarm/guidecontent',
      download: 'mango.pdf',
    },
    {
      name: 'Production',
      icon: 'production.png',
      link: '/myfarm/guidecontent',
      download: 'mango.pdf',
    },
    {
      name: 'By Products',
      icon: 'byproducts.png',
      link: '/myfarm/guidecontent',
      download: 'mango.pdf',
    },
    {
      name: 'Agri Equipment',
      icon: 'agriequipment.png',
      link: '/myfarm/guidecontent',
      download: 'mango.pdf',
    },
    {
      name: 'Crop Insurance',
      icon: 'cropinsurance.png',
      link: '/myfarm/guidecontent',
      download: 'mango.pdf',
    },
    {
      name: 'Value Addition',
      icon: 'valueaddition.png',
      link: '/myfarm/guidecontent',
      download: 'mango.pdf',
    },
    {
      name: 'Market Yard Prices',
      icon: 'marketyardsprices.png',
      link: '/myfarm/guidecontent',
      download: 'mango.pdf',
    },
    {
      name: 'Govt Links',
      icon: 'govtlinks.png',
      link: '/myfarm/guidecontent',
      download: 'mango.pdf',
    },
    {
      name: 'Agri Schemes',
      icon: 'agrischemes.png',
      link: '/myfarm/guidecontent',
      download: 'mango.pdf',
    },
    {
      name: 'Crop Expenditure Tool',
      icon: 'cropexpendituretool.png',
      link: '/myfarm/guidecontent',
      download: 'mango.pdf',
    },
    {
      name: 'Farmer Connect',
      icon: 'farmerconnect.png',
      link: '/myfarm/guidecontent',
      download: 'mango.pdf',
    },
    {
      name: 'Connect FPC',
      icon: 'connectfpc.png',
      link: '',
      download: 'mango.pdf',
    },
    {
      name: 'My Market',
      icon: 'mymarket.png',
      link: '/mymarket',
      download: 'mango.pdf',
    },
  ]
  return (
    <>
      <Switch>
        <Route path="/myfarm/aqua/home">
          <MyFarmList dataList={dataList} title="MyFarm - Aqua"></MyFarmList>
        </Route>
        <Route path="/myfarm/aqua/fish">
          <MyFarmGuide dataGuide={dataGuide} title="Aqua - Fish"></MyFarmGuide>
        </Route>
        <Route path="/myfarm/aqua/fish">
          <MyFarmGuide
            dataGuide={dataGuide}
            title="Aqua - Prawns"
          ></MyFarmGuide>
        </Route>
        <Route path="/myfarm/aqua/prans">
          <MyFarmGuide
            dataGuide={dataGuide}
            title="Aqua - Fish Type 2"
          ></MyFarmGuide>
        </Route>
        <Route path="/myfarm/aqua/fish">
          <MyFarmGuide
            dataGuide={dataGuide}
            title="Aqua - Fish Type 3"
          ></MyFarmGuide>
        </Route>
        <Redirect to="/myfarm/aqua/home" />
      </Switch>
    </>
  )
}
