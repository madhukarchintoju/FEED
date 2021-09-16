import React from 'react'
import MyFarmList from '../../myFarmList/myFarmList'

export default function OilSeeds() {
  const dataList = [
    {
      name: 'Black Sesame',
      icon: 'oil-seeds/black-sesame.png',
      link: '',
    },
    {
      name: 'Castor Seeds',
      icon: 'oil-seeds/castor-seeds.png',
      link: '',
    },
    {
      name: 'Crude Palm',
      icon: 'oil-seeds/crude-palm.png',
      link: '',
    },
    {
      name: 'Ground Nut',
      icon: 'oil-seeds/ground-nut.png',
      link: '',
    },
    {
      name: 'Niger Seeds',
      icon: 'oil-seeds/niger-seeds.png',
      link: '',
    },
    {
      name: 'Sunflower Seeds',
      icon: 'oil-seeds/sunflower-seeds.png',
      link: '',
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
      <MyFarmList dataList={dataList} title="MyFarm - Oil Seeds"></MyFarmList>
    </>
  )
}
