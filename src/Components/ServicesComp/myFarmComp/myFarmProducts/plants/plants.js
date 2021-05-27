import React from 'react'
import MyFarmList from '../../myFarmList/myFarmList'

export default function Plants() {
  const dataList = [
    {
      name: 'Mango',
      icon: 'https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/PLANTS_So2QIQ12i.png',
      link: '/myfarm/fruits/mango',
    },
    {
      name: 'Papaya',
      icon: 'https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/PLANTS_So2QIQ12i.png',
      link: '/analytics',
    },
    {
      name: 'Apple',
      icon: 'https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/PLANTS_So2QIQ12i.png',
      link: '/aboutSection',
    },
    {
      name: 'Grapes',
      icon: 'https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/PLANTS_So2QIQ12i.png',
      link: '/serviceSection',
    },
    {
      name: 'Orange',
      icon: 'https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/PLANTS_So2QIQ12i.png',
      link: '/eventSection',
    },
    {
      name: 'Kiwi',
      icon: 'https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/PLANTS_So2QIQ12i.png',
      link: '/feedWorkingSection',
    },
    {
      name: 'Pomogranate',
      icon: 'https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/PLANTS_So2QIQ12i.png',
      link: '/myfpo',
    },
    {
      name: 'Strawberry',
      icon: 'https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/PLANTS_So2QIQ12i.png',
      link: '/myexport',
    },
    {
      name: 'Blueberry',
      icon: 'https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/PLANTS_So2QIQ12i.png',
      link: '/analytics',
    },
    {
      name: 'Rasberry',
      icon: 'https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/PLANTS_So2QIQ12i.png',
      link: '/',
    },
    {
      name: 'Liche',
      icon: 'https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/PLANTS_So2QIQ12i.png',
      link: '/analytics',
    },
    {
      name: 'Banana',
      icon: 'https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/PLANTS_So2QIQ12i.png',
      link: '/aboutSection',
    },
    {
      name: 'Grapes',
      icon: 'https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/PLANTS_So2QIQ12i.png',
      link: '/serviceSection',
    },
    {
      name: 'Chikku',
      icon: 'https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/PLANTS_So2QIQ12i.png',
      link: '/eventSection',
    },
    {
      name: 'Ice Apple',
      icon: 'https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/PLANTS_So2QIQ12i.png',
      link: '/feedWorkingSection',
    },
    {
      name: 'Green Apple',
      icon: 'https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/PLANTS_So2QIQ12i.png',
      link: '/myfpo',
    },
    {
      name: 'Guava',
      icon: 'https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/PLANTS_So2QIQ12i.png',
      link: '/myexport',
    },
    {
      name: 'Water Melon',
      icon: 'https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/PLANTS_So2QIQ12i.png',
      link: '/myexport',
    },
  ]
  return (
    <>
      <MyFarmList dataList={dataList} title="MyFarm - Plants"></MyFarmList>
    </>
  )
}
