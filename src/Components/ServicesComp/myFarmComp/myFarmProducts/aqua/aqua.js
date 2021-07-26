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
