import React from 'react'
import './fabric.css'
import MyFarmList from '../../myFarmList/myFarmList'

export default function Fabric() {
  const dataList = [
    {
      name: 'Cotton',
      icon: 'fabric/cotton.png',
      link: '',
    },
    {
      name: 'Jute',
      icon: 'fabric/jute.png',
      link: '',
    },
    {
      name: 'Silk',
      icon: 'fabric/silk.png',
      link: '',
    },
    {
      name: 'Wool',
      icon: 'fabric/wool.png',
      link: '',
    },
  ]

  return (
    <>
      <MyFarmList dataList={dataList} title="MyFarm - Flowers"></MyFarmList>
    </>
  )
}
