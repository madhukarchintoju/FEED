import React from 'react'
import './myToolsExports.css'
import MyToolsList from '../../myToolsList/myToolsList'

export default function MyToolsExports() {
  const dataList = [
    {
      name: 'Fish',
      icon: 'statutory-reg.png',
      link: '/myfarm/aqua/fish',
    },
    {
      name: 'Prawns',
      icon: 'statutory-reg.png',
      link: '/myfarm/aqua/fish',
    },
    {
      name: 'Fish Type 2',
      icon: 'statutory-reg.png',
      link: '/myfarm/aqua/fish',
    },
    {
      name: 'Fish Type 3',
      icon: 'statutory-reg.png',
      link: '/myfarm/aqua/fish',
    },
    {
      name: 'Fish Type 4',
      icon: 'statutory-reg.png',
      link: '/myfarm/aqua/fish',
    },
    {
      name: 'Fish Type 4',
      icon: 'statutory-reg.png',
      link: '/myfarm/aqua/fish',
    },
    {
      name: 'Fish Type 4',
      icon: 'statutory-reg.png',
      link: '/myfarm/aqua/fish',
    },
  ]
  return (
    <>
      <MyToolsList dataList={dataList} title="statutory-reg.png"></MyToolsList>
    </>
  )
}
