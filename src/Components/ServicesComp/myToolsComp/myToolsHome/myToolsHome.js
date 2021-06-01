import React from 'react'
import './myToolsHome.css'
import MyToolList from '../myToolsList/myToolsList'

export default function MyToolsHome() {
  const dataList = [
    {
      name: 'Fish',
      icon: 'my-fpo-card.png',
      link: '',
    },
    {
      name: 'Prawns',
      icon: 'farmer-card.png',
      link: '/myfarm/aqua/fish',
    },
    {
      name: 'Fish Type 2',
      icon: 'msme-card.png',
      link: '/myfarm/aqua/fish',
    },
    {
      name: 'Fish Type 3',
      icon: 'student-card.png',
      link: '/myfarm/aqua/fish',
    },
    {
      name: 'Fish Type 4',
      icon: 'exports-card.png',
      link: '/myfarm/aqua/fish',
    },
  ]
  return (
    <>
      <MyToolList
        dataList={dataList}
        title="my-tools-home-heading.png"
      ></MyToolList>
    </>
  )
}
