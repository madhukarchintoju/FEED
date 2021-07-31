import React from 'react'
import MyFarmList from '../../myFarmList/myFarmList'

export default function Plants() {
  const dataList = [
    {
      name: 'Green Betel ',
      icon: 'plants/green-betel-leaf.png',
      link: '',
    },
    {
      name: 'Guargum',
      icon: 'plants/guargum.png',
      link: '',
    },
    {
      name: 'Neem',
      icon: 'plants/neem-tulasi.png',
      link: '',
    },
    {
      name: 'Tobacco',
      icon: 'plants/tobacco.png',
      link: '',
    },
  ]

  return (
    <>
      <MyFarmList dataList={dataList} title="MyFarm - Plants"></MyFarmList>
    </>
  )
}
