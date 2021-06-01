import React from 'react'
import './myToolsFarmer.css'
import MyToolsList from '../../myToolsList/myToolsList'

export default function MyToolsFarmer() {
  const dataList = [
    {
      name: '',
      icon: '/farmer/my-tools-farmer-crop-exp-tool.png',
      link: '',
    },
    {
      name: '',
      icon: '/farmer/my-tools-farmer-crop-advisory.png',
      link: '',
    },
    {
      name: '',
      icon: '/farmer/my-tools-farmer-farm-equipment.png',
      link: '',
    },
    {
      name: '',
      icon: '/farmer/my-tools-farmer-find-dealers.png',
      link: '',
    },
    {
      name: '',
      icon: '/farmer/my-tools-farmer-value-addition-units.png',
      link: '',
    },
    {
      name: '',
      icon: '/farmer/my-tools-farmer-fertilizer-calculator.png',
      link: '',
    },
    {
      name: '',
      icon: '/farmer/my-tools-farmer-marketing-services.png',
      link: '',
    },
    {
      name: '',
      icon: '/farmer/my-tools-farmer-loan-services.png',
      link: '',
    },
    {
      name: '',
      icon: '/farmer/my-tools-farmer-insurance-services.png',
      link: '',
    },
    {
      name: '',
      icon: '/farmer/my-tools-farmer-logistics-services.png',
      link: '',
    },
  ]
  return (
    <>
      <div
        style={{
          backgroundImage: `URL("${process.env.PUBLIC_URL}/assets/my-tools/bg/mytoolsfarmer.jpg")`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <MyToolsList
          dataList={dataList}
          title="/farmer/my-tools-farmer-heading.png"
        ></MyToolsList>
      </div>
    </>
  )
}
