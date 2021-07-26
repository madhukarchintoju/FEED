import React from 'react'
import MyFarmList from '../../myFarmList/myFarmList'
import { Redirect, Route, Switch } from 'react-router-dom'
import MyFarmGuide from '../../myFarmGuide/myFarmGuide'

export default function MyFarmFruits() {
  const dataList = [
    {
      name: 'Mango',
      icon: 'mango.png',
      link: '/myfarm/fruits/mango',
      hsCode: '08045020',
    },
    {
      name: 'Banana',
      icon: 'banana.png',
      link: '/myfarm/fruits/banana',
      hsCode: '08039010',
    },
    {
      name: 'Grapes',
      icon: 'grapes.png',
      link: '/myfarm/fruits/grapes',
      hsCode: '08061000',
    },
    {
      name: 'Guava',
      icon: 'guava.png',
      link: '/myfarm/fruits/guava',
      hsCode: '08045010',
    },
    {
      name: 'Papaya',
      icon: 'papaya.png',
      link: '/myfarm/fruits/papaya',
      hsCode: '08072000',
    },
    {
      name: 'Lemon',
      icon: 'Lemon.png',
      link: '/myfarm/fruits/lemon',
      hsCode: '08055000',
    },
    {
      name: 'Apple',
      icon: 'apple.png',
      link: '/myfarm/fruits/apple',
      hsCode: '08081000',
    },
    {
      name: 'Cherry',
      icon: 'cherry.png',
      link: '/myfarm/fruits/cherry',
      hsCode: '',
    },
    {
      name: 'Pineapple',
      icon: 'pineapple.png',
      link: '/myfarm/fruits/pineapple',
      hsCode: '08043000',
    },
    {
      name: 'Walnut',
      icon: 'walnut.png',
      link: '/myfarm/fruits/walnut',
      hsCode: '08023200',
    },
    {
      name: 'Watermelon',
      icon: 'watermelon.png',
      link: '/myfarm/fruits/watermelon',
      hsCode: '08071100',
    },
    {
      name: 'Almond',
      icon: 'almond.png',
      link: '/myfarm/fruits/almond',
      hsCode: '08021100',
    },
    {
      name: 'Oranges',
      icon: 'oranges.png',
      link: '/myfarm/fruits/oranges',
      hsCode: '08051000',
    },
    {
      name: 'Kiwi',
      icon: 'kiwi.png',
      link: '/myfarm/fruits/kiwi',
      hsCode: '08105000',
    },
    {
      name: 'Pears',
      icon: 'pears.png',
      link: '/myfarm/fruits/pears',
      hsCode: '08083000',
    },
    {
      name: 'Strawberry',
      icon: 'strawberry.png',
      link: '/myfarm/fruits/strawberry',
      hsCode: '',
    },
    {
      name: 'Pomegranate',
      icon: 'pomegranates.png',
      link: '/myfarm/fruits/pomegranate',
      hsCode: '08109010',
    },
    {
      name: 'Pista',
      icon: 'pista.png',
      link: '/myfarm/fruits/pista',
      hsCode: '08025100',
    },
    {
      name: 'Figs',
      icon: 'figs.png',
      link: '/myfarm/fruits/figs',
      hsCode: '08042090',
    },
    {
      name: 'Dates',
      icon: 'dates.png',
      link: '/myfarm/fruits/dates',
      hsCode: '08041020',
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
      icon: 'irrigation.png',
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
        <Route path="/myfarm/fruits/home">
          <MyFarmList dataList={dataList} title="MyFarm - Fruits"></MyFarmList>
        </Route>
        <Route path="/myfarm/fruits/mango">
          <MyFarmGuide
            dataGuide={dataGuide}
            title="Fruits - Mango"
          ></MyFarmGuide>
        </Route>
        <Route path="/myfarm/fruits/banana">
          <MyFarmGuide
            dataGuide={dataGuide}
            title="Fruits - banana"
          ></MyFarmGuide>
        </Route>
        <Route path="/myfarm/fruits/grapes">
          <MyFarmGuide
            dataGuide={dataGuide}
            title="Fruits - Grapes"
          ></MyFarmGuide>
        </Route>
        <Route path="/myfarm/fruits/guava">
          <MyFarmGuide
            dataGuide={dataGuide}
            title="Fruits - Guava"
          ></MyFarmGuide>
        </Route>
        <Route path="/myfarm/fruits/papaya">
          <MyFarmGuide
            dataGuide={dataGuide}
            title="Fruits - Papaya"
          ></MyFarmGuide>
        </Route>
        <Route path="/myfarm/fruits/lemon">
          <MyFarmGuide
            dataGuide={dataGuide}
            title="Fruits - Lemon"
          ></MyFarmGuide>
        </Route>
        <Route path="/myfarm/fruits/apple">
          <MyFarmGuide
            dataGuide={dataGuide}
            title="Fruits - Apple"
          ></MyFarmGuide>
        </Route>
        <Route path="/myfarm/fruits/cherry">
          <MyFarmGuide
            dataGuide={dataGuide}
            title="Fruits - Cherry"
          ></MyFarmGuide>
        </Route>
        <Route path="/myfarm/fruits/pineapple">
          <MyFarmGuide
            dataGuide={dataGuide}
            title="Fruits - Pineapple"
          ></MyFarmGuide>
        </Route>
        <Route path="/myfarm/fruits/walnut">
          <MyFarmGuide
            dataGuide={dataGuide}
            title="Fruits - Walnut"
          ></MyFarmGuide>
        </Route>
        <Route path="/myfarm/fruits/watermelon">
          <MyFarmGuide
            dataGuide={dataGuide}
            title="Fruits - Watermelon"
          ></MyFarmGuide>
        </Route>
        <Route path="/myfarm/fruits/almond">
          <MyFarmGuide
            dataGuide={dataGuide}
            title="Fruits - Almond"
          ></MyFarmGuide>
        </Route>
        <Route path="/myfarm/fruits/oranges">
          <MyFarmGuide
            dataGuide={dataGuide}
            title="Fruits - Oranges"
          ></MyFarmGuide>
        </Route>
        <Route path="/myfarm/fruits/kiwi">
          <MyFarmGuide
            dataGuide={dataGuide}
            title="Fruits - Kiwi"
          ></MyFarmGuide>
        </Route>
        <Route path="/myfarm/fruits/pears">
          <MyFarmGuide
            dataGuide={dataGuide}
            title="Fruits - Pears"
          ></MyFarmGuide>
        </Route>
        <Route path="/myfarm/fruits/strawberry">
          <MyFarmGuide
            dataGuide={dataGuide}
            title="Fruits - Strawberry"
          ></MyFarmGuide>
        </Route>
        <Route path="/myfarm/fruits/pomegrante">
          <MyFarmGuide
            dataGuide={dataGuide}
            title="Fruits - Pomegrante"
          ></MyFarmGuide>
        </Route>
        <Route path="/myfarm/fruits/pista">
          <MyFarmGuide
            dataGuide={dataGuide}
            title="Fruits - Pista"
          ></MyFarmGuide>
        </Route>
        <Route path="/myfarm/fruits/figs">
          <MyFarmGuide
            dataGuide={dataGuide}
            title="Fruits - Figs"
          ></MyFarmGuide>
        </Route>
        <Route path="/myfarm/fruits/dates">
          <MyFarmGuide
            dataGuide={dataGuide}
            title="Fruits - Dates"
          ></MyFarmGuide>
        </Route>
        <Redirect to="/myfarm/fruits/home" />
      </Switch>
    </>
  )
}
