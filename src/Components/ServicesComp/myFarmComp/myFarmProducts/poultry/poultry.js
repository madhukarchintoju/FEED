import React from 'react'
import MyFarmList from '../../myFarmList/myFarmList'

export default function Poultry() {
  const dataList = [
    {
      name: 'Eggs',
      icon: 'poultry/eggs.png',
      link: '',
    },
  ]
  return (
    <>
      <MyFarmList
        dataList={dataList}
        title="MyFarm - Poultry"
        className="classes.sideNaV"
      ></MyFarmList>
    </>
  )
}
