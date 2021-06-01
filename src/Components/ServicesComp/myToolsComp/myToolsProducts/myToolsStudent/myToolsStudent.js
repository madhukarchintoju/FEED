import React from 'react'
import './myToolsStudent.css'
import MyToolsList from '../../myToolsList/myToolsList'

export default function MyToolsStudent() {
  const dataList = [
    {
      name: 'Fish',
      icon: 'https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/AQUA_ALVRgxpyxM.png',
      link: '/myfarm/aqua/fish',
    },
    {
      name: 'Prawns',
      icon: 'https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/AQUA_ALVRgxpyxM.png',
      link: '/myfarm/aqua/fish',
    },
    {
      name: 'Fish Type 2',
      icon: 'https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/AQUA_ALVRgxpyxM.png',
      link: '/myfarm/aqua/fish',
    },
    {
      name: 'Fish Type 3',
      icon: 'https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/AQUA_ALVRgxpyxM.png',
      link: '/myfarm/aqua/fish',
    },
    {
      name: 'Fish Type 4',
      icon: 'https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/AQUA_ALVRgxpyxM.png',
      link: '/myfarm/aqua/fish',
    },
  ]
  return (
    <>
      <MyToolsList dataList={dataList} title="MyFarm - Aqua"></MyToolsList>
    </>
  )
}
