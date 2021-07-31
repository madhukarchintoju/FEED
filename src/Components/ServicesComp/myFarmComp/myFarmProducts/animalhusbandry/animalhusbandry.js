import React from 'react'
import './animalhusbandry.css'
import MyFarmList from '../../myFarmList/myFarmList'

export default function AnimalHusbandry() {
  const dataList = [
    {
      name: 'Chicken',
      icon: 'live-animals/chicken.png',
      link: '',
    },
    {
      name: 'Goat',
      icon: 'live-animals/goat.png',
      link: '',
    },
    {
      name: 'Honey',
      icon: 'other/honey.png',
      link: '',
    },
  ]
  return (
    <>
      <MyFarmList dataList={dataList} title="MyFarm - Fruits"></MyFarmList>
    </>
  )
}
