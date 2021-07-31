import React from 'react'
import MyFarmList from '../../myFarmList/myFarmList'

export default function Dairy() {
  const dataList = [
    {
      name: 'Butter',
      icon: 'dairy/butter.png',
      link: '',
    },
    {
      name: 'Cheese',
      icon: 'dairy/cheese.png',
      link: '',
    },
    {
      name: 'Ghee',
      icon: 'dairy/ghee.png',
      link: '',
    },
    {
      name: 'Milk Dairy',
      icon: 'dairy/milk dairy.png',
      link: '',
    },
  ]

  return (
    <>
      <MyFarmList dataList={dataList} title="MyFarm - Dairy"></MyFarmList>
    </>
  )
}
