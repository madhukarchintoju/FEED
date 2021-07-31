import React from 'react'
import './others.css'
import MyFarmList from '../../myFarmList/myFarmList'

export default function Others() {
  const dataList = [
    {
      name: 'Salt',
      icon: 'other/salt.png',
      link: '',
    },
  ]
  return (
    <>
      <MyFarmList dataList={dataList} title="MyFarm - Flowers"></MyFarmList>
    </>
  )
}
