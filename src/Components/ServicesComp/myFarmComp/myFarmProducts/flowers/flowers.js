import React from 'react'
import MyFarmList from '../../myFarmList/myFarmList'

export default function Flowers() {
  const dataList = [
    {
      name: 'Rose',
      icon: 'flowers/rose.png',
      link: '',
    },
  ]

  return (
    <>
      <MyFarmList dataList={dataList} title="MyFarm - Flowers"></MyFarmList>
    </>
  )
}
