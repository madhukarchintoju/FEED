import React from 'react'
import './spices.css'
import MyFarmList from '../../myFarmList/myFarmList'
import { Redirect, Route, Switch } from 'react-router-dom'
import MyFarmGuide from '../../myFarmGuide/myFarmGuide'

export default function Spices() {
  const dataList = [
    {
      name: 'Ajwan',
      icon: 'spices/ajwan.png',
      link: '/myfarm/spices/ajwan',
    },
    {
      name: 'Ansie',
      icon: 'spices/anise.png',
      link: '/myfarm/spices/anise',
    },
    {
      name: 'Asafoetida',
      icon: 'spices/asafoetida.png',
      link: '/myfarm/spices/asafoetida',
    },
    {
      name: 'Black Pepper',
      icon: 'spices/black-pepper.png',
      link: '/myfarm/spices/blackpepper',
    },
    {
      name: 'Cassia',
      icon: 'spices/cassia.png',
      link: '/myfarm/spices/cassia',
    },
    {
      name: 'Chilly',
      icon: 'spices/chilly.png',
      link: '/myfarm/spices/chilly',
    },
    {
      name: 'Corinader',
      icon: 'spices/corinader.png',
      link: '/myfarm/spices/corinader',
    },
    {
      name: 'Cumin',
      icon: 'spices/cumin.png',
      link: '/myfarm/spices/cumin',
    },
    // {
    //     name: 'Elachi',
    //     icon: '',
    //     link: '/myfarm/spices/elachi',
    // },
    {
      name: 'Fennel Seeds',
      icon: 'spices/fennel-seeds.png',
      link: '/myfarm/spices/fennelseeds',
    },
    {
      name: 'Fenugreek',
      icon: 'spices/fenugreek.png',
      link: '/myfarm/spices/fenugreek',
    },
    {
      name: 'Ginger',
      icon: 'spices/ginger.png',
      link: '/myfarm/spices/ginger',
    },
    {
      name: 'Mint',
      icon: 'spices/mint.png',
      link: '/myfarm/spices/mint',
    },
    {
      name: 'Mustard',
      icon: 'spices/mustard.png',
      link: '/myfarm/spices/mustard',
    },
    {
      name: 'Poppy Seeds',
      icon: 'spices/poppy-seeds.png',
      link: '/myfarm/spices/poppyseeds',
    },
    {
      name: 'Tamarind',
      icon: 'spices/tamrind.png',
      link: '/myfarm/spices/tamrind',
    },
    {
      name: 'Turmeric',
      icon: 'spices/turmeric.png',
      link: '/myfarm/spices/turmeric',
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
        <Route path="/myfarm/spices/home">
          <MyFarmList dataList={dataList} title="MyFarm - Spices"></MyFarmList>
        </Route>
        <Route path="/myfarm/spices/ajwan">
          <MyFarmGuide
            dataGuide={dataGuide}
            title="MyFarm - Ajwan"
          ></MyFarmGuide>
        </Route>
        <Route path="/myfarm/spices/ansie">
          <MyFarmGuide
            dataGuide={dataGuide}
            title="MyFarm - Ansie"
          ></MyFarmGuide>
        </Route>
        <Route path="/myfarm/spices/asafoetida">
          <MyFarmGuide
            dataGuide={dataGuide}
            title="MyFarm - Asafoetida"
          ></MyFarmGuide>
        </Route>
        <Route path="/myfarm/spices/blackpepper">
          <MyFarmGuide
            dataGuide={dataGuide}
            title="MyFarm - Black Pepper"
          ></MyFarmGuide>
        </Route>
        <Route path="/myfarm/spices/cassia">
          <MyFarmGuide
            dataGuide={dataGuide}
            title="MyFarm - Cassia"
          ></MyFarmGuide>
        </Route>
        <Route path="/myfarm/spices/chilly">
          <MyFarmGuide
            dataGuide={dataGuide}
            title="MyFarm - Chilly"
          ></MyFarmGuide>
        </Route>
        <Route path="/myfarm/spices/coriander">
          <MyFarmGuide
            dataGuide={dataGuide}
            title="MyFarm - Coriander"
          ></MyFarmGuide>
        </Route>
        <Route path="/myfarm/spices/cumin">
          <MyFarmGuide
            dataGuide={dataGuide}
            title="MyFarm - Cumin"
          ></MyFarmGuide>
        </Route>
        <Route path="/myfarm/spices/elachi">
          <MyFarmGuide
            dataGuide={dataGuide}
            title="MyFarm - Elachi"
          ></MyFarmGuide>
        </Route>
        <Route path="/myfarm/spices/fennelseeds">
          <MyFarmGuide
            dataGuide={dataGuide}
            title="MyFarm - Fennel Seeds"
          ></MyFarmGuide>
        </Route>
        <Route path="/myfarm/spices/fenugreek">
          <MyFarmGuide
            dataGuide={dataGuide}
            title="MyFarm - Fenugreek"
          ></MyFarmGuide>
        </Route>
        <Route path="/myfarm/spices/ginger">
          <MyFarmGuide
            dataGuide={dataGuide}
            title="MyFarm - Ginger"
          ></MyFarmGuide>
        </Route>
        <Route path="/myfarm/spices/mint">
          <MyFarmGuide
            dataGuide={dataGuide}
            title="MyFarm - Mint"
          ></MyFarmGuide>
        </Route>
        <Route path="/myfarm/spices/mustard">
          <MyFarmGuide
            dataGuide={dataGuide}
            title="MyFarm - Mustard"
          ></MyFarmGuide>
        </Route>
        <Route path="/myfarm/spices/poppyseeds">
          <MyFarmGuide
            dataGuide={dataGuide}
            title="MyFarm - Poppy Seeds"
          ></MyFarmGuide>
        </Route>
        <Route path="/myfarm/spices/tamarind">
          <MyFarmGuide
            dataGuide={dataGuide}
            title="MyFarm - Tamarind"
          ></MyFarmGuide>
        </Route>
        <Route path="/myfarm/spices/turmeric">
          <MyFarmGuide
            dataGuide={dataGuide}
            title="MyFarm - Turmeric"
          ></MyFarmGuide>
        </Route>

        <Redirect to="/myfarm/spices/home"></Redirect>
      </Switch>
    </>
  )
}
