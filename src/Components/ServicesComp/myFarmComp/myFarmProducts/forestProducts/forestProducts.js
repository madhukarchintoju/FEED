import React from 'react'
import MyFarmList from '../../myFarmList/myFarmList'

export default function ForestProducts() {
  const dataList = [
    {
      name: 'Rubber',
      icon: 'forest-products/rubber.png',
      link: '',
    },
    {
      name: 'Wood',
      icon: 'forest-products/wood.png',
      link: '',
    },
  ]

  return (
    <>
      <MyFarmList
        dataList={dataList}
        title="MyFarm - Forest Products"
      ></MyFarmList>
    </>
  )
}
