import React from 'react'
import MyFarmList from '../../myFarmList/myFarmList'
import { Redirect, Route, Switch } from 'react-router-dom'
import MyFarmGuide from '../../myFarmGuide/myFarmGuide'

export default function Cereals() {
  const dataList = [
    {
      name: 'Bajra',
      icon: 'cereals/bajra.png',
      link: '/myfarm/cereals/bajra',
    },
    {
      name: 'Barley',
      icon: 'cereals/barley.png',
      link: '/myfarm/cereals/barley',
    },
    {
      name: 'Maize Corn',
      icon: 'cereals/maize-corn.png',
      link: '/myfarm/cereals/maizecorn',
    },
    {
      name: 'Oats',
      icon: 'cereals/oats.png',
      link: '/myfarm/cereals/oats',
    },
    {
      name: 'Quinoa',
      icon: 'cereals/quinoa.png',
      link: '/myfarm/cereals/quinoa',
    },
    {
      name: 'Ragi',
      icon: 'cereals/ragi.png',
      link: '/myfarm/cereals/ragi',
    },
    {
      name: 'Rice',
      icon: 'cereals/rice.png',
      link: '/myfarm/cereals/rice',
    },
    {
      name: 'Sorghum Seeds',
      icon: 'cereals/sorghum-seeds.png',
      link: '/myfarm/cereals/sorghumseeds',
    },
    {
      name: 'Soya Beans',
      icon: 'cereals/soya-beans.png',
      link: '/myfarm/cereals/soyabeans',
    },
    {
      name: 'Wheat',
      icon: 'cereals/wheat.png',
      link: '/myfarm/cereals/wheat',
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
        <Route path="/myfarm/cereals/home">
          <MyFarmList dataList={dataList} title="MyFarm - Cereals"></MyFarmList>
        </Route>
        <Route path="/myfarm/cereals/bajra">
          <MyFarmGuide
            dataGuide={dataGuide}
            title="MyFarm - Bajra"
          ></MyFarmGuide>
        </Route>
        <Route path="/myfarm/cereals/barley">
          <MyFarmGuide
            dataGuide={dataGuide}
            title="MyFarm - Barley"
          ></MyFarmGuide>
        </Route>
        <Route path="/myfarm/cereals/maizecorn">
          <MyFarmGuide
            dataGuide={dataGuide}
            title="MyFarm - Maize Corn"
          ></MyFarmGuide>
        </Route>
        <Route path="/myfarm/cereals/oats">
          <MyFarmGuide
            dataGuide={dataGuide}
            title="MyFarm - Oats"
          ></MyFarmGuide>
        </Route>
        <Route path="/myfarm/cereals/quinoa">
          <MyFarmGuide
            dataGuide={dataGuide}
            title="MyFarm - Quinoa"
          ></MyFarmGuide>
        </Route>
        <Route path="/myfarm/cereals/ragi">
          <MyFarmGuide
            dataGuide={dataGuide}
            title="MyFarm - Ragi"
          ></MyFarmGuide>
        </Route>
        <Route path="/myfarm/cereals/rice">
          <MyFarmGuide
            dataGuide={dataGuide}
            title="MyFarm - Rice"
          ></MyFarmGuide>
        </Route>
        <Route path="/myfarm/cereals/sorghumseeds">
          <MyFarmGuide
            dataGuide={dataGuide}
            title="MyFarm - Sorghum Seeds"
          ></MyFarmGuide>
        </Route>
        <Route path="/myfarm/cereals/soyabeans">
          <MyFarmGuide
            dataGuide={dataGuide}
            title="MyFarm - Soya Beans"
          ></MyFarmGuide>
        </Route>
        <Route path="/myfarm/cereals/wheat">
          <MyFarmGuide
            dataGuide={dataGuide}
            title="MyFarm - Wheat"
          ></MyFarmGuide>
        </Route>
        <Redirect to="/myfarm/cereals/home"></Redirect>
      </Switch>
    </>
  )
}
