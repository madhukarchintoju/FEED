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

  return (
    <>
      <MyFarmList dataList={dataList} title="MyFarm - Fruits"></MyFarmList>
    </>
  )
}
