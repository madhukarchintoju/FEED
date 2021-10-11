import React from 'react'
import './myToolsHome.css'
import MyToolList from '../myToolsList/myToolsList'

export default function MyToolsHome() {
  const dataList = [
    {
      name: 'Fish',
      icon: 'home/myfpo.png',
      link: '/mytools/fpo',
    },
    {
      name: 'Prawns',
      icon: 'home/farmer.png',
      link: '/mytools/farmer',
    },
    {
      name: 'Fish Type 2',
      icon: 'home/msme.png',
      link: '/mytools/msme',
    },
    {
      name: 'Fish Type 3',
      icon: 'home/student.png',
      link: '/mytools/student',
    },
    {
      name: 'Fish Type 4',
      icon: 'home/exports.png',
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
          title="home/toolsserviceshead.png"
        ></MyToolList>
      </div>
    </>
  )
}
