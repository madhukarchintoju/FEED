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
      icon: 'lemon.png',
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
      name: 'Climate and Soil',
      icon: 'climateandsoil.png',
      link: '/myfarm/guidecontent',
      // download: 'mango.pdf',
    },
    {
      name: 'Land Preparation',
      icon: 'landpreparation.png',
      link: '',
      download: 'mango.pdf',
    },
    {
      name: 'Seeds and Plants',
      icon: 'seedsplants.png',
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
      name: 'Disease and Pestisides',
      icon: 'diseaseandpestisides.png',
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
      name: 'Internal Crops',
      icon: 'internalcrops.png',
      link: '',
      download: 'mango.pdf',
    },
    {
      name: 'Pre Harvesting',
      icon: 'preharvesting.png',
      link: '',
      download: 'mango.pdf',
    },
    {
      name: 'Post Harvesting',
      icon: 'postharvesting.png',
      link: '',
      download: 'mango.pdf',
    },
    {
      name: 'Production',
      icon: 'production.png',
      link: '',
      download: 'mango.pdf',
    },
    {
      name: 'By Products',
      icon: 'byproducts.png',
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
      name: 'Crop Insurance',
      icon: 'cropinsurance.png',
      link: '',
      download: 'mango.pdf',
    },
    {
      name: 'Value Addition',
      icon: 'valueaddition.png',
      link: '',
      download: 'mango.pdf',
    },
    {
      name: 'Market Yard Prices',
      icon: 'marketyardsprices.png',
      link: '',
      download: 'mango.pdf',
    },
    {
      name: 'Govt Links',
      icon: 'govtlinks.png',
      link: '',
      download: 'mango.pdf',
    },
    {
      name: 'Agri Schemes',
      icon: 'agrischemes.png',
      link: '',
      download: 'mango.pdf',
    },
    {
      name: 'Crop Expenditure Tool',
      icon: 'cropexpendituretool.png',
      link: '',
      download: 'mango.pdf',
    },
    {
      name: 'Farmer Connect',
      icon: 'farmerconnect.png',
      link: '',
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
      link: '',
      download: 'mango.pdf',
    },
  ]
  const mangoGuide = [
    {
      name: 'Climate and Soil',
      icon: 'climateandsoil.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Land Preparation',
      icon: 'landpreparation.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Seeds and Plants',
      icon: 'seedsplants.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Cultivation',
      icon: 'cultivation.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Disease and Pestisides',
      icon: 'diseaseandpestisides.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Irrigation',
      icon: 'irrigation.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Internal Crops',
      icon: 'internalcrops.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Pre Harvesting',
      icon: 'preharvesting.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Post Harvesting',
      icon: 'postharvesting.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Production',
      icon: 'production.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'By Products',
      icon: 'byproducts.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Agri Equipment',
      icon: 'agriequipment.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Crop Insurance',
      icon: 'cropinsurance.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Value Addition',
      icon: 'valueaddition.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Market Yard Prices',
      icon: 'marketyardsprices.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Govt Links',
      icon: 'govtlinks.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Agri Schemes',
      icon: 'agrischemes.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Crop Expenditure Tool',
      icon: 'cropexpendituretool.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Farmer Connect',
      icon: 'farmerconnect.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Connect FPC',
      icon: 'connectfpc.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'My Market',
      icon: 'mymarket.png',
      link: '/myfarm/guidecontent',
    },
  ]
  const bananaGuide = [
    {
      name: 'Climate and Soil',
      icon: 'climateandsoil.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Land Preparation',
      icon: 'landpreparation.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Seeds and Plants',
      icon: 'seedsplants.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Cultivation',
      icon: 'cultivation.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Disease and Pestisides',
      icon: 'diseaseandpestisides.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Irrigation',
      icon: 'irrigation.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Internal Crops',
      icon: 'internalcrops.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Pre Harvesting',
      icon: 'preharvesting.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Post Harvesting',
      icon: 'postharvesting.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Production',
      icon: 'production.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'By Products',
      icon: 'byproducts.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Agri Equipment',
      icon: 'agriequipment.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Crop Insurance',
      icon: 'cropinsurance.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Value Addition',
      icon: 'valueaddition.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Market Yard Prices',
      icon: 'marketyardsprices.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Govt Links',
      icon: 'govtlinks.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Agri Schemes',
      icon: 'agrischemes.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Crop Expenditure Tool',
      icon: 'cropexpendituretool.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Farmer Connect',
      icon: 'farmerconnect.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Connect FPC',
      icon: 'connectfpc.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'My Market',
      icon: 'mymarket.png',
      link: '/myfarm/guidecontent',
    },
  ]
  const grapeGuide = [
    {
      name: 'Climate and Soil',
      icon: 'climateandsoil.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Land Preparation',
      icon: 'landpreparation.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Seeds and Plants',
      icon: 'seedsplants.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Cultivation',
      icon: 'cultivation.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Disease and Pestisides',
      icon: 'diseaseandpestisides.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Irrigation',
      icon: 'irrigation.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Internal Crops',
      icon: 'internalcrops.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Pre Harvesting',
      icon: 'preharvesting.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Post Harvesting',
      icon: 'postharvesting.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Production',
      icon: 'production.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'By Products',
      icon: 'byproducts.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Agri Equipment',
      icon: 'agriequipment.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Crop Insurance',
      icon: 'cropinsurance.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Value Addition',
      icon: 'valueaddition.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Market Yard Prices',
      icon: 'marketyardsprices.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Govt Links',
      icon: 'govtlinks.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Agri Schemes',
      icon: 'agrischemes.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Crop Expenditure Tool',
      icon: 'cropexpendituretool.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Farmer Connect',
      icon: 'farmerconnect.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Connect FPC',
      icon: 'connectfpc.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'My Market',
      icon: 'mymarket.png',
      link: '/myfarm/guidecontent',
    },
  ]
  const guavaGuide = [
    {
      name: 'Climate and Soil',
      icon: 'climateandsoil.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Land Preparation',
      icon: 'landpreparation.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Seeds and Plants',
      icon: 'seedsplants.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Cultivation',
      icon: 'cultivation.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Disease and Pestisides',
      icon: 'diseaseandpestisides.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Irrigation',
      icon: 'irrigation.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Internal Crops',
      icon: 'internalcrops.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Pre Harvesting',
      icon: 'preharvesting.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Post Harvesting',
      icon: 'postharvesting.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Production',
      icon: 'production.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'By Products',
      icon: 'byproducts.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Agri Equipment',
      icon: 'agriequipment.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Crop Insurance',
      icon: 'cropinsurance.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Value Addition',
      icon: 'valueaddition.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Market Yard Prices',
      icon: 'marketyardsprices.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Govt Links',
      icon: 'govtlinks.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Agri Schemes',
      icon: 'agrischemes.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Crop Expenditure Tool',
      icon: 'cropexpendituretool.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Farmer Connect',
      icon: 'farmerconnect.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Connect FPC',
      icon: 'connectfpc.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'My Market',
      icon: 'mymarket.png',
      link: '/myfarm/guidecontent',
    },
  ]
  const papayaGuide = [
    {
      name: 'Climate and Soil',
      icon: 'climateandsoil.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Land Preparation',
      icon: 'landpreparation.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Seeds and Plants',
      icon: 'seedsplants.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Cultivation',
      icon: 'cultivation.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Disease and Pestisides',
      icon: 'diseaseandpestisides.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Irrigation',
      icon: 'irrigation.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Internal Crops',
      icon: 'internalcrops.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Pre Harvesting',
      icon: 'preharvesting.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Post Harvesting',
      icon: 'postharvesting.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Production',
      icon: 'production.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'By Products',
      icon: 'byproducts.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Agri Equipment',
      icon: 'agriequipment.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Crop Insurance',
      icon: 'cropinsurance.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Value Addition',
      icon: 'valueaddition.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Market Yard Prices',
      icon: 'marketyardsprices.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Govt Links',
      icon: 'govtlinks.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Agri Schemes',
      icon: 'agrischemes.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Crop Expenditure Tool',
      icon: 'cropexpendituretool.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Farmer Connect',
      icon: 'farmerconnect.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Connect FPC',
      icon: 'connectfpc.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'My Market',
      icon: 'mymarket.png',
      link: '/myfarm/guidecontent',
    },
  ]
  const lemonGuide = [
    {
      name: 'Climate and Soil',
      icon: 'climateandsoil.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Land Preparation',
      icon: 'landpreparation.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Seeds and Plants',
      icon: 'seedsplants.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Cultivation',
      icon: 'cultivation.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Disease and Pestisides',
      icon: 'diseaseandpestisides.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Irrigation',
      icon: 'irrigation.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Internal Crops',
      icon: 'internalcrops.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Pre Harvesting',
      icon: 'preharvesting.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Post Harvesting',
      icon: 'postharvesting.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Production',
      icon: 'production.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'By Products',
      icon: 'byproducts.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Agri Equipment',
      icon: 'agriequipment.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Crop Insurance',
      icon: 'cropinsurance.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Value Addition',
      icon: 'valueaddition.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Market Yard Prices',
      icon: 'marketyardsprices.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Govt Links',
      icon: 'govtlinks.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Agri Schemes',
      icon: 'agrischemes.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Crop Expenditure Tool',
      icon: 'cropexpendituretool.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Farmer Connect',
      icon: 'farmerconnect.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Connect FPC',
      icon: 'connectfpc.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'My Market',
      icon: 'mymarket.png',
      link: '/myfarm/guidecontent',
    },
  ]
  const appleGuide = [
    {
      name: 'Climate and Soil',
      icon: 'climateandsoil.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Land Preparation',
      icon: 'landpreparation.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Seeds and Plants',
      icon: 'seedsplants.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Cultivation',
      icon: 'cultivation.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Disease and Pestisides',
      icon: 'diseaseandpestisides.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Irrigation',
      icon: 'irrigation.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Internal Crops',
      icon: 'internalcrops.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Pre Harvesting',
      icon: 'preharvesting.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Post Harvesting',
      icon: 'postharvesting.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Production',
      icon: 'production.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'By Products',
      icon: 'byproducts.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Agri Equipment',
      icon: 'agriequipment.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Crop Insurance',
      icon: 'cropinsurance.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Value Addition',
      icon: 'valueaddition.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Market Yard Prices',
      icon: 'marketyardsprices.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Govt Links',
      icon: 'govtlinks.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Agri Schemes',
      icon: 'agrischemes.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Crop Expenditure Tool',
      icon: 'cropexpendituretool.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Farmer Connect',
      icon: 'farmerconnect.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Connect FPC',
      icon: 'connectfpc.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'My Market',
      icon: 'mymarket.png',
      link: '/myfarm/guidecontent',
    },
  ]
  const cherryGuide = [
    {
      name: 'Climate and Soil',
      icon: 'climateandsoil.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Land Preparation',
      icon: 'landpreparation.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Seeds and Plants',
      icon: 'seedsplants.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Cultivation',
      icon: 'cultivation.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Disease and Pestisides',
      icon: 'diseaseandpestisides.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Irrigation',
      icon: 'irrigation.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Internal Crops',
      icon: 'internalcrops.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Pre Harvesting',
      icon: 'preharvesting.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Post Harvesting',
      icon: 'postharvesting.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Production',
      icon: 'production.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'By Products',
      icon: 'byproducts.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Agri Equipment',
      icon: 'agriequipment.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Crop Insurance',
      icon: 'cropinsurance.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Value Addition',
      icon: 'valueaddition.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Market Yard Prices',
      icon: 'marketyardsprices.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Govt Links',
      icon: 'govtlinks.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Agri Schemes',
      icon: 'agrischemes.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Crop Expenditure Tool',
      icon: 'cropexpendituretool.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Farmer Connect',
      icon: 'farmerconnect.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Connect FPC',
      icon: 'connectfpc.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'My Market',
      icon: 'mymarket.png',
      link: '/myfarm/guidecontent',
    },
  ]
  const pineappleGuide = [
    {
      name: 'Climate and Soil',
      icon: 'climateandsoil.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Land Preparation',
      icon: 'landpreparation.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Seeds and Plants',
      icon: 'seedsplants.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Cultivation',
      icon: 'cultivation.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Disease and Pestisides',
      icon: 'diseaseandpestisides.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Irrigation',
      icon: 'irrigation.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Internal Crops',
      icon: 'internalcrops.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Pre Harvesting',
      icon: 'preharvesting.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Post Harvesting',
      icon: 'postharvesting.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Production',
      icon: 'production.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'By Products',
      icon: 'byproducts.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Agri Equipment',
      icon: 'agriequipment.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Crop Insurance',
      icon: 'cropinsurance.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Value Addition',
      icon: 'valueaddition.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Market Yard Prices',
      icon: 'marketyardsprices.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Govt Links',
      icon: 'govtlinks.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Agri Schemes',
      icon: 'agrischemes.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Crop Expenditure Tool',
      icon: 'cropexpendituretool.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Farmer Connect',
      icon: 'farmerconnect.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Connect FPC',
      icon: 'connectfpc.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'My Market',
      icon: 'mymarket.png',
      link: '/myfarm/guidecontent',
    },
  ]
  const walnutGuide = [
    {
      name: 'Climate and Soil',
      icon: 'climateandsoil.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Land Preparation',
      icon: 'landpreparation.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Seeds and Plants',
      icon: 'seedsplants.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Cultivation',
      icon: 'cultivation.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Disease and Pestisides',
      icon: 'diseaseandpestisides.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Irrigation',
      icon: 'irrigation.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Internal Crops',
      icon: 'internalcrops.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Pre Harvesting',
      icon: 'preharvesting.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Post Harvesting',
      icon: 'postharvesting.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Production',
      icon: 'production.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'By Products',
      icon: 'byproducts.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Agri Equipment',
      icon: 'agriequipment.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Crop Insurance',
      icon: 'cropinsurance.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Value Addition',
      icon: 'valueaddition.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Market Yard Prices',
      icon: 'marketyardsprices.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Govt Links',
      icon: 'govtlinks.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Agri Schemes',
      icon: 'agrischemes.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Crop Expenditure Tool',
      icon: 'cropexpendituretool.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Farmer Connect',
      icon: 'farmerconnect.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Connect FPC',
      icon: 'connectfpc.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'My Market',
      icon: 'mymarket.png',
      link: '/myfarm/guidecontent',
    },
  ]
  const watermelonGuide = [
    {
      name: 'Climate and Soil',
      icon: 'climateandsoil.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Land Preparation',
      icon: 'landpreparation.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Seeds and Plants',
      icon: 'seedsplants.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Cultivation',
      icon: 'cultivation.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Disease and Pestisides',
      icon: 'diseaseandpestisides.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Irrigation',
      icon: 'irrigation.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Internal Crops',
      icon: 'internalcrops.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Pre Harvesting',
      icon: 'preharvesting.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Post Harvesting',
      icon: 'postharvesting.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Production',
      icon: 'production.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'By Products',
      icon: 'byproducts.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Agri Equipment',
      icon: 'agriequipment.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Crop Insurance',
      icon: 'cropinsurance.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Value Addition',
      icon: 'valueaddition.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Market Yard Prices',
      icon: 'marketyardsprices.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Govt Links',
      icon: 'govtlinks.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Agri Schemes',
      icon: 'agrischemes.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Crop Expenditure Tool',
      icon: 'cropexpendituretool.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Farmer Connect',
      icon: 'farmerconnect.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Connect FPC',
      icon: 'connectfpc.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'My Market',
      icon: 'mymarket.png',
      link: '/myfarm/guidecontent',
    },
  ]
  const almondGuide = [
    {
      name: 'Climate and Soil',
      icon: 'climateandsoil.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Land Preparation',
      icon: 'landpreparation.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Seeds and Plants',
      icon: 'seedsplants.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Cultivation',
      icon: 'cultivation.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Disease and Pestisides',
      icon: 'diseaseandpestisides.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Irrigation',
      icon: 'irrigation.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Internal Crops',
      icon: 'internalcrops.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Pre Harvesting',
      icon: 'preharvesting.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Post Harvesting',
      icon: 'postharvesting.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Production',
      icon: 'production.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'By Products',
      icon: 'byproducts.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Agri Equipment',
      icon: 'agriequipment.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Crop Insurance',
      icon: 'cropinsurance.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Value Addition',
      icon: 'valueaddition.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Market Yard Prices',
      icon: 'marketyardsprices.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Govt Links',
      icon: 'govtlinks.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Agri Schemes',
      icon: 'agrischemes.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Crop Expenditure Tool',
      icon: 'cropexpendituretool.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Farmer Connect',
      icon: 'farmerconnect.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Connect FPC',
      icon: 'connectfpc.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'My Market',
      icon: 'mymarket.png',
      link: '/myfarm/guidecontent',
    },
  ]
  const orangesGuide = [
    {
      name: 'Climate and Soil',
      icon: 'climateandsoil.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Land Preparation',
      icon: 'landpreparation.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Seeds and Plants',
      icon: 'seedsplants.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Cultivation',
      icon: 'cultivation.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Disease and Pestisides',
      icon: 'diseaseandpestisides.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Irrigation',
      icon: 'irrigation.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Internal Crops',
      icon: 'internalcrops.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Pre Harvesting',
      icon: 'preharvesting.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Post Harvesting',
      icon: 'postharvesting.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Production',
      icon: 'production.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'By Products',
      icon: 'byproducts.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Agri Equipment',
      icon: 'agriequipment.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Crop Insurance',
      icon: 'cropinsurance.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Value Addition',
      icon: 'valueaddition.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Market Yard Prices',
      icon: 'marketyardsprices.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Govt Links',
      icon: 'govtlinks.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Agri Schemes',
      icon: 'agrischemes.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Crop Expenditure Tool',
      icon: 'cropexpendituretool.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Farmer Connect',
      icon: 'farmerconnect.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Connect FPC',
      icon: 'connectfpc.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'My Market',
      icon: 'mymarket.png',
      link: '/myfarm/guidecontent',
    },
  ]
  const kiwiGuide = [
    {
      name: 'Climate and Soil',
      icon: 'climateandsoil.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Land Preparation',
      icon: 'landpreparation.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Seeds and Plants',
      icon: 'seedsplants.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Cultivation',
      icon: 'cultivation.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Disease and Pestisides',
      icon: 'diseaseandpestisides.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Irrigation',
      icon: 'irrigation.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Internal Crops',
      icon: 'internalcrops.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Pre Harvesting',
      icon: 'preharvesting.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Post Harvesting',
      icon: 'postharvesting.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Production',
      icon: 'production.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'By Products',
      icon: 'byproducts.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Agri Equipment',
      icon: 'agriequipment.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Crop Insurance',
      icon: 'cropinsurance.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Value Addition',
      icon: 'valueaddition.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Market Yard Prices',
      icon: 'marketyardsprices.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Govt Links',
      icon: 'govtlinks.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Agri Schemes',
      icon: 'agrischemes.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Crop Expenditure Tool',
      icon: 'cropexpendituretool.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Farmer Connect',
      icon: 'farmerconnect.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Connect FPC',
      icon: 'connectfpc.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'My Market',
      icon: 'mymarket.png',
      link: '/myfarm/guidecontent',
    },
  ]
  const pearsGuide = [
    {
      name: 'Climate and Soil',
      icon: 'climateandsoil.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Land Preparation',
      icon: 'landpreparation.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Seeds and Plants',
      icon: 'seedsplants.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Cultivation',
      icon: 'cultivation.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Disease and Pestisides',
      icon: 'diseaseandpestisides.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Irrigation',
      icon: 'irrigation.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Internal Crops',
      icon: 'internalcrops.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Pre Harvesting',
      icon: 'preharvesting.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Post Harvesting',
      icon: 'postharvesting.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Production',
      icon: 'production.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'By Products',
      icon: 'byproducts.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Agri Equipment',
      icon: 'agriequipment.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Crop Insurance',
      icon: 'cropinsurance.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Value Addition',
      icon: 'valueaddition.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Market Yard Prices',
      icon: 'marketyardsprices.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Govt Links',
      icon: 'govtlinks.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Agri Schemes',
      icon: 'agrischemes.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Crop Expenditure Tool',
      icon: 'cropexpendituretool.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Farmer Connect',
      icon: 'farmerconnect.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Connect FPC',
      icon: 'connectfpc.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'My Market',
      icon: 'mymarket.png',
      link: '/myfarm/guidecontent',
    },
  ]
  const strawberryGuide = [
    {
      name: 'Climate and Soil',
      icon: 'climateandsoil.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Land Preparation',
      icon: 'landpreparation.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Seeds and Plants',
      icon: 'seedsplants.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Cultivation',
      icon: 'cultivation.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Disease and Pestisides',
      icon: 'diseaseandpestisides.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Irrigation',
      icon: 'irrigation.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Internal Crops',
      icon: 'internalcrops.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Pre Harvesting',
      icon: 'preharvesting.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Post Harvesting',
      icon: 'postharvesting.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Production',
      icon: 'production.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'By Products',
      icon: 'byproducts.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Agri Equipment',
      icon: 'agriequipment.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Crop Insurance',
      icon: 'cropinsurance.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Value Addition',
      icon: 'valueaddition.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Market Yard Prices',
      icon: 'marketyardsprices.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Govt Links',
      icon: 'govtlinks.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Agri Schemes',
      icon: 'agrischemes.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Crop Expenditure Tool',
      icon: 'cropexpendituretool.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Farmer Connect',
      icon: 'farmerconnect.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Connect FPC',
      icon: 'connectfpc.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'My Market',
      icon: 'mymarket.png',
      link: '/myfarm/guidecontent',
    },
  ]
  const pomegranateGuide = [
    {
      name: 'Climate and Soil',
      icon: 'climateandsoil.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Land Preparation',
      icon: 'landpreparation.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Seeds and Plants',
      icon: 'seedsplants.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Cultivation',
      icon: 'cultivation.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Disease and Pestisides',
      icon: 'diseaseandpestisides.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Irrigation',
      icon: 'irrigation.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Internal Crops',
      icon: 'internalcrops.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Pre Harvesting',
      icon: 'preharvesting.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Post Harvesting',
      icon: 'postharvesting.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Production',
      icon: 'production.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'By Products',
      icon: 'byproducts.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Agri Equipment',
      icon: 'agriequipment.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Crop Insurance',
      icon: 'cropinsurance.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Value Addition',
      icon: 'valueaddition.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Market Yard Prices',
      icon: 'marketyardsprices.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Govt Links',
      icon: 'govtlinks.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Agri Schemes',
      icon: 'agrischemes.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Crop Expenditure Tool',
      icon: 'cropexpendituretool.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Farmer Connect',
      icon: 'farmerconnect.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Connect FPC',
      icon: 'connectfpc.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'My Market',
      icon: 'mymarket.png',
      link: '/myfarm/guidecontent',
    },
  ]
  const pistaGuide = [
    {
      name: 'Climate and Soil',
      icon: 'climateandsoil.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Land Preparation',
      icon: 'landpreparation.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Seeds and Plants',
      icon: 'seedsplants.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Cultivation',
      icon: 'cultivation.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Disease and Pestisides',
      icon: 'diseaseandpestisides.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Irrigation',
      icon: 'irrigation.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Internal Crops',
      icon: 'internalcrops.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Pre Harvesting',
      icon: 'preharvesting.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Post Harvesting',
      icon: 'postharvesting.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Production',
      icon: 'production.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'By Products',
      icon: 'byproducts.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Agri Equipment',
      icon: 'agriequipment.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Crop Insurance',
      icon: 'cropinsurance.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Value Addition',
      icon: 'valueaddition.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Market Yard Prices',
      icon: 'marketyardsprices.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Govt Links',
      icon: 'govtlinks.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Agri Schemes',
      icon: 'agrischemes.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Crop Expenditure Tool',
      icon: 'cropexpendituretool.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Farmer Connect',
      icon: 'farmerconnect.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Connect FPC',
      icon: 'connectfpc.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'My Market',
      icon: 'mymarket.png',
      link: '/myfarm/guidecontent',
    },
  ]
  const figsGuide = [
    {
      name: 'Climate and Soil',
      icon: 'climateandsoil.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Land Preparation',
      icon: 'landpreparation.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Seeds and Plants',
      icon: 'seedsplants.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Cultivation',
      icon: 'cultivation.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Disease and Pestisides',
      icon: 'diseaseandpestisides.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Irrigation',
      icon: 'irrigation.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Internal Crops',
      icon: 'internalcrops.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Pre Harvesting',
      icon: 'preharvesting.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Post Harvesting',
      icon: 'postharvesting.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Production',
      icon: 'production.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'By Products',
      icon: 'byproducts.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Agri Equipment',
      icon: 'agriequipment.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Crop Insurance',
      icon: 'cropinsurance.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Value Addition',
      icon: 'valueaddition.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Market Yard Prices',
      icon: 'marketyardsprices.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Govt Links',
      icon: 'govtlinks.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Agri Schemes',
      icon: 'agrischemes.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Crop Expenditure Tool',
      icon: 'cropexpendituretool.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Farmer Connect',
      icon: 'farmerconnect.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Connect FPC',
      icon: 'connectfpc.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'My Market',
      icon: 'mymarket.png',
      link: '/myfarm/guidecontent',
    },
  ]
  const datesGuide = [
    {
      name: 'Climate and Soil',
      icon: 'climateandsoil.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Land Preparation',
      icon: 'landpreparation.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Seeds and Plants',
      icon: 'seedsplants.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Cultivation',
      icon: 'cultivation.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Disease and Pestisides',
      icon: 'diseaseandpestisides.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Irrigation',
      icon: 'irrigation.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Internal Crops',
      icon: 'internalcrops.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Pre Harvesting',
      icon: 'preharvesting.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Post Harvesting',
      icon: 'postharvesting.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Production',
      icon: 'production.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'By Products',
      icon: 'byproducts.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Agri Equipment',
      icon: 'agriequipment.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Crop Insurance',
      icon: 'cropinsurance.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Value Addition',
      icon: 'valueaddition.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Market Yard Prices',
      icon: 'marketyardsprices.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Govt Links',
      icon: 'govtlinks.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Agri Schemes',
      icon: 'agrischemes.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Crop Expenditure Tool',
      icon: 'cropexpendituretool.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Farmer Connect',
      icon: 'farmerconnect.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'Connect FPC',
      icon: 'connectfpc.png',
      link: '/myfarm/guidecontent',
    },
    {
      name: 'My Market',
      icon: 'mymarket.png',
      link: '/myfarm/guidecontent',
    },
  ]

  return (
    <>
      <Switch>
        <Route path="/myfarm/fruits/home">
          <MyFarmList dataList={dataList} title="MyFarm - Fruits"></MyFarmList>
        </Route>
        <Route path="/myfarm/fruits/mango">
          <MyFarmGuide dataGuide={mangoGuide} title="Mango Guide"></MyFarmGuide>
        </Route>
        <Route path="/myfarm/fruits/banana">
          <MyFarmGuide
            dataGuide={bananaGuide}
            title="Banana Guide"
          ></MyFarmGuide>
        </Route>
        <Route path="/myfarm/fruits/grapes">
          <MyFarmGuide
            dataGuide={grapeGuide}
            title="Grapes Guide"
          ></MyFarmGuide>
        </Route>
        <Route path="/myfarm/fruits/guava">
          <MyFarmGuide dataGuide={guavaGuide} title="Guava Guide"></MyFarmGuide>
        </Route>
        <Route path="/myfarm/fruits/papaya">
          <MyFarmGuide
            dataGuide={papayaGuide}
            title="Papaya Guide"
          ></MyFarmGuide>
        </Route>
        <Route path="/myfarm/fruits/lemon">
          <MyFarmGuide dataGuide={lemonGuide} title="Lemon Guide"></MyFarmGuide>
        </Route>
        <Route path="/myfarm/fruits/apple">
          <MyFarmGuide dataGuide={appleGuide} title="Apple Guide"></MyFarmGuide>
        </Route>
        <Route path="/myfarm/fruits/cherry">
          <MyFarmGuide
            dataGuide={cherryGuide}
            title="Cherry Guide"
          ></MyFarmGuide>
        </Route>
        <Route path="/myfarm/fruits/pineapple">
          <MyFarmGuide
            dataGuide={pineappleGuide}
            title="Pineapple Guide"
          ></MyFarmGuide>
        </Route>
        <Route path="/myfarm/fruits/walnut">
          <MyFarmGuide
            dataGuide={walnutGuide}
            title="Walnut Guide"
          ></MyFarmGuide>
        </Route>
        <Route path="/myfarm/fruits/watermelon">
          <MyFarmGuide
            dataGuide={watermelonGuide}
            title="Watermelon Guide"
          ></MyFarmGuide>
        </Route>
        <Route path="/myfarm/fruits/almond">
          <MyFarmGuide
            dataGuide={almondGuide}
            title="Almond Guide"
          ></MyFarmGuide>
        </Route>
        <Route path="/myfarm/fruits/oranges">
          <MyFarmGuide
            dataGuide={orangesGuide}
            title="Oranges Guide"
          ></MyFarmGuide>
        </Route>
        <Route path="/myfarm/fruits/kiwi">
          <MyFarmGuide dataGuide={kiwiGuide} title="Kiwi Guide"></MyFarmGuide>
        </Route>
        <Route path="/myfarm/fruits/pears">
          <MyFarmGuide dataGuide={pearsGuide} title="Pears Guide"></MyFarmGuide>
        </Route>
        <Route path="/myfarm/fruits/strawberry">
          <MyFarmGuide
            dataGuide={strawberryGuide}
            title="Strawberry Guide"
          ></MyFarmGuide>
        </Route>
        <Route path="/myfarm/fruits/pomegrante">
          <MyFarmGuide
            dataGuide={pomegranateGuide}
            title="Pomegrante Guide"
          ></MyFarmGuide>
        </Route>
        <Route path="/myfarm/fruits/pista">
          <MyFarmGuide dataGuide={pistaGuide} title="Pista Guide"></MyFarmGuide>
        </Route>
        <Route path="/myfarm/fruits/figs">
          <MyFarmGuide dataGuide={figsGuide} title="Figs Guide"></MyFarmGuide>
        </Route>
        <Route path="/myfarm/fruits/dates">
          <MyFarmGuide dataGuide={datesGuide} title="Dates Guide"></MyFarmGuide>
        </Route>
        <Redirect to="/myfarm/fruits/home" />
      </Switch>
    </>
  )
}
