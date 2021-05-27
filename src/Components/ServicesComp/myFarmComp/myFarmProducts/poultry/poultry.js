import React from 'react'
import MyFarmList from '../../myFarmList/myFarmList'
import { makeStyles } from '@material-ui/core'
import { CallReceived } from '@material-ui/icons'

export default function Poultry() {
  const useStyles = makeStyles((theme) => ({}))

  const classes = useStyles()
  const dataList = [
    {
      name: 'Eggs',
      icon: 'https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/POULTRY_kK6Xr2XeR.png',
      link: '/myfarm/fruits/mango',
    },
    {
      name: 'Chicken',
      icon: 'https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/POULTRY_kK6Xr2XeR.png',
      link: '/analytics',
    },
    {
      name: 'Mutton',
      icon: 'https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/POULTRY_kK6Xr2XeR.png',
      link: '/aboutSection',
    },
    {
      name: 'Legs',
      icon: 'https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/POULTRY_kK6Xr2XeR.png',
      link: '/serviceSection',
    },
    {
      name: 'Liver',
      icon: 'https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/POULTRY_kK6Xr2XeR.png',
      link: '/eventSection',
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
