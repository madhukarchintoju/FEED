import React from 'react'
import MyFarmList from '../../myFarmList/myFarmList'
import { Redirect, Route, Switch } from 'react-router-dom'
import MyFarmGuide from '../../myFarmGuide/myFarmGuide'

export default function Aqua() {
  const dataList = [
    {
      name: 'Fish',
      icon: 'https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/AQUA_ALVRgxpyxM.png',
      link: '/myfarm/aqua/fish',
    },
    {
      name: 'Prawns',
      icon: 'https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/AQUA_ALVRgxpyxM.png',
      link: '/myfarm/aqua/fish',
    },
    {
      name: 'Fish Type 2',
      icon: 'https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/AQUA_ALVRgxpyxM.png',
      link: '/myfarm/aqua/fish',
    },
    {
      name: 'Fish Type 3',
      icon: 'https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/AQUA_ALVRgxpyxM.png',
      link: '/myfarm/aqua/fish',
    },
    {
      name: 'Fish Type 4',
      icon: 'https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/AQUA_ALVRgxpyxM.png',
      link: '/myfarm/aqua/fish',
    },
  ]

  const dataGuide = [
    {
      name: 'Climate',
      icon: 'https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/AQUA_ALVRgxpyxM.png',
      link: '/myfarm/aqua/fish/climate',
    },
    {
      name: 'Soil Preparation',
      icon: 'https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/AQUA_ALVRgxpyxM.png',
      link: '/myfarm/aqua/fish',
    },
    {
      name: 'Seeds',
      icon: 'https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/AQUA_ALVRgxpyxM.png',
      link: '/myfarm/aqua/fish',
    },
    {
      name: 'Cultivation',
      icon: 'https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/AQUA_ALVRgxpyxM.png',
      link: '/myfarm/aqua/fish',
    },
    {
      name: 'Irrigation',
      icon: 'https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/AQUA_ALVRgxpyxM.png',
      link: '/myfarm/aqua/fish',
    },
    {
      name: 'Fertilizers',
      icon: 'https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/AQUA_ALVRgxpyxM.png',
      link: '/myfarm/aqua/fish',
    },
    {
      name: 'Dieases',
      icon: 'https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/AQUA_ALVRgxpyxM.png',
      link: '/myfarm/aqua/fish',
    },
    {
      name: 'Pesticides',
      icon: 'https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/AQUA_ALVRgxpyxM.png',
      link: '/myfarm/aqua/fish',
    },
    {
      name: 'Internal Crop',
      icon: 'https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/AQUA_ALVRgxpyxM.png',
      link: '/myfarm/aqua/fish',
    },
    {
      name: 'Pre-harvesting',
      icon: 'https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/AQUA_ALVRgxpyxM.png',
      link: '/myfarm/aqua/fish',
    },
    {
      name: 'Harvesting',
      icon: 'https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/AQUA_ALVRgxpyxM.png',
      link: '/myfarm/aqua/fish',
    },
    {
      name: 'Post-Harvesting',
      icon: 'https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/AQUA_ALVRgxpyxM.png',
      link: '/myfarm/aqua/fish',
    },
    {
      name: 'Crop Expenditure Tools',
      icon: 'https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/AQUA_ALVRgxpyxM.png',
      link: '/myfarm/aqua/fish',
    },
    {
      name: 'Crop-Advisory',
      icon: 'https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/AQUA_ALVRgxpyxM.png',
      link: '/myfarm/aqua/fish',
    },
    {
      name: 'Agri Equipments',
      icon: 'https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/AQUA_ALVRgxpyxM.png',
      link: '/myfarm/aqua/fish',
    },
    {
      name: 'Agri Experts',
      icon: 'https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/AQUA_ALVRgxpyxM.png',
      link: '/myfarm/aqua/fish',
    },
    {
      name: 'Value Addition Unit',
      icon: 'https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/AQUA_ALVRgxpyxM.png',
      link: '/myfarm/aqua/fish',
    },
    {
      name: 'Marketing',
      icon: 'https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/AQUA_ALVRgxpyxM.png',
      link: '/myfarm/aqua/fish',
    },
    {
      name: 'FAQ',
      icon: 'https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/AQUA_ALVRgxpyxM.png',
      link: '/myfarm/aqua/fish',
    },
    {
      name: 'Farmer Connect Social Media',
      icon: 'https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/AQUA_ALVRgxpyxM.png',
      link: '/myfarm/aqua/fish',
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
