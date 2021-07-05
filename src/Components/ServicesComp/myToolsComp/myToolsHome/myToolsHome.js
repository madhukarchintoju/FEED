import React from 'react'
import './myToolsHome.css'
import MyToolList from '../myToolsList/myToolsList'

export default function MyToolsHome() {
  const dataList = [
    {
      name: 'Fish',
      icon: 'my-fpo-card.png',
      link: '/mytools/fpo',
    },
    {
      name: 'Prawns',
      icon: 'farmer-card.png',
      link: '/mytools/farmer',
    },
    {
      name: 'Fish Type 2',
      icon: 'msme-card.png',
      link: '/mytools/msme',
    },
    {
      name: 'Fish Type 3',
      icon: 'student-card.png',
      link: '/mytools/student',
    },
    {
      name: 'Fish Type 4',
      icon: 'exports-card.png',
      link: '/mytools/exports',
    },
  ]
  return (
    <>
      <div
        style={{
          backgroundImage: `URL("${process.env.PUBLIC_URL}/assets/my-tools/bg/mytools.jpg")`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <MyToolList
          dataList={dataList}
          title="my-tools-home-heading.png"
        ></MyToolList>
      </div>
    </>
  )
}
