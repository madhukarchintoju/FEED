import React from 'react'
import MyFarmList from '../../myFarmList/myFarmList'

export default function PlantationCrop() {
  const dataList = [
    {
      name: 'Bamboos',
      icon: 'plantation-crop/bamboos.png',
      link: '/myfarm/fruits/mango',
    },
    {
      name: 'Betel Nuts',
      icon: 'plantation-crop/betelnuts.png',
      link: '/analytics',
    },
    {
      name: 'Cashew Nuts',
      icon: 'plantation-crop/cashew-nuts.png',
      link: '/aboutSection',
    },
    {
      name: 'Cocoa',
      icon: 'plantation-crop/cocoa.png',
      link: '/serviceSection',
    },
    {
      name: 'Coconut',
      icon: 'plantation-crop/coconut.png',
      link: '/eventSection',
    },
    {
      name: 'Coffee',
      icon: 'plantation-crop/coffee.png',
      link: '/feedWorkingSection',
    },
    {
      name: 'Sugar',
      icon: 'plantation-crop/sugar.png',
      link: '/myfpo',
    },
    {
      name: 'Tea',
      icon: 'plantation-crop/tea.png',
      link: '/myexport',
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
      <MyFarmList dataList={dataList} title="MyFarm - Fruits"></MyFarmList>
    </>
  )
}
