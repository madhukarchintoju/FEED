import React from 'react'
import MyFarmList from '../../myFarmList/myFarmList'
import { Redirect, Route, Switch } from 'react-router-dom'
import MyFarmGuide from '../../myFarmGuide/myFarmGuide'

export default function Cereals() {
  const dataList = [
    {
      name: 'Bajra',
      icon: '/cereals/BAJRA.png',
      link: '/myfarm/cereals/bajra',
    },
    {
      name: 'Barley',
      icon: '/cereals/BARLEY.png',
      link: '/myfarm/cereals/barley',
    },
    {
      name: 'Maize Corn',
      icon: '/cereals/MAIZE-CORN.png',
      link: '/myfarm/cereals/maizecorn',
    },
    {
      name: 'Oats',
      icon: '/cereals/OATS.png',
      link: '/myfarm/cereals/oats',
    },
    {
      name: 'Quinoa',
      icon: '/cereals/QUINOA.png',
      link: '/myfarm/cereals/quinoa',
    },
    {
      name: 'Ragi',
      icon: '/cereals/RAGI.png',
      link: '/myfarm/cereals/ragi',
    },
    {
      name: 'Rice',
      icon: '/cereals/RICE.png',
      link: '/myfarm/cereals/rice',
    },
    {
      name: 'Sorghum Seeds',
      icon: '/cereals/SORGHUM-SEEDS.png',
      link: '/myfarm/cereals/sorghumseeds',
    },
    {
      name: 'Soya Beans',
      icon: '/cereals/SOYA-BEANS.png',
      link: '/myfarm/cereals/soyabeans',
    },
    {
      name: 'Wheat',
      icon: '/cereals/WHEAT.png',
      link: '/myfarm/cereals/wheat',
    },
  ]
  const dataGuide = [
    {
      name: 'Climate',
      icon: 'climate.png',
      link: '',
      download: 'mango.pdf',
    },
    {
      name: 'Soil Preparation',
      icon: 'soil.png',
      link: '',
      download: 'mango.pdf',
    },
    {
      name: 'Seeds',
      icon: 'seeds.png',
      link: '',
      download: 'mango.pdf',
    },
    {
      name: 'Cultivation',
      icon: 'cultivation.png',
      link: '',
      download: 'mango.pdf',
    },
    {
      name: 'Irrigation',
      icon: 'Irrigation.png',
      link: '',
      download: 'mango.pdf',
    },
    {
      name: 'Pesticides',
      icon: 'pesticides.png',
      link: '',
      download: 'mango.pdf',
    },
    {
      name: 'Dieases',
      icon: 'diseases.png',
      link: '',
      download: 'mango.pdf',
    },
    {
      name: 'Internal Crop',
      icon: 'internalcrop.png',
      link: '',
      download: 'mango.pdf',
    },
    {
      name: 'Pre-harvesting',
      icon: 'preharvesting.png',
      link: '',
      download: 'mango.pdf',
    },
    {
      name: 'Post-Harvesting',
      icon: 'postharvesting.png',
      link: '',
      download: 'mango.pdf',
    },
    {
      name: 'Agri Equipment',
      icon: 'agriequipment.png',
      link: '',
      download: 'mango.pdf',
    },
    {
      name: 'Crop Expenditure Tools',
      icon: 'cropexpenditure.png',
      link: '',
      download: 'mango.pdf',
    },
    {
      name: 'Crop-Advisory',
      icon: 'cropadvisory.png',
      link: '',
      download: 'mango.pdf',
    },
    {
      name: 'Agri Exports',
      icon: 'agriexports.png',
      link: '',
      download: 'mango.pdf',
    },
    {
      name: 'Value Addition Unit',
      icon: 'valueadditionunits.png',
      link: '',
      download: 'mango.pdf',
    },
    {
      name: 'Marketing',
      icon: 'marketing.png',
      link: '',
      download: 'mango.pdf',
    },
    {
      name: 'FAQ',
      icon: 'faq.png',
      link: '',
      download: 'mango.pdf',
    },
    {
      name: 'Farmer Connect Social Media',
      icon: 'connectsocialmedia.png',
      link: '',
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
