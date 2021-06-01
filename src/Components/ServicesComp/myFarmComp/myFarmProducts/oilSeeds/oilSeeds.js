import React from 'react'
import MyFarmList from '../../myFarmList/myFarmList'

export default function OilSeeds() {
  const dataList = [
    {
      name: 'Black Sesame',
      icon: '/oil-seeds/BLACK-SESAME.png',
      link: '',
    },
    {
      name: 'Castor Seeds',
      icon: '/oil-seeds/CASTOR-SEEDS.png',
      link: '',
    },
    {
      name: 'Crude Palm',
      icon: '/oil-seeds/CRUDE-PALM.png',
      link: '',
    },
    {
      name: 'Ground Nut',
      icon: '/oil-seeds/GROUND-NUT.png',
      link: '',
    },
    {
      name: 'Niger Seeds',
      icon: '/oil-seeds/NIGER-SEEDS.png',
      link: '',
    },
    {
      name: 'Sunflower Seeds',
      icon: '/oil-seeds/SUNFLOWER-SEEDS.png',
      link: '',
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
      <MyFarmList dataList={dataList} title="MyFarm - Oil Seeds"></MyFarmList>
    </>
  )
}
