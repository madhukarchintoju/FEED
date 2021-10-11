import React from 'react'
import './myToolsFarmer.css'
import MyToolsList from '../../myToolsList/myToolsList'

export default function MyToolsFarmer() {
  const dataList = [
    {
      name: '',
      icon: 'farmtools/cropexpendituretool.png',
      link: '',
    },
    {
      name: '',
      icon: 'farmtools/cropadvisory.png',
      link: '',
    },
    {
      name: '',
      icon: 'farmtools/farmequiptments.png',
      link: '',
    },
    {
      name: '',
      icon: 'farmtools/finddealers.png',
      link: '',
    },
    {
      name: '',
      icon: 'farmtools/valueadditionunits.png',
      link: '',
    },
    {
      name: '',
      icon: 'farmtools/fertilizer.png',
      link: '',
    },
    {
      name: '',
      icon: 'farmtools/marketingservices.png',
      link: '',
    },
    {
      name: '',
      icon: 'farmtools/loanservices.png',
      link: '',
    },
    {
      name: '',
      icon: 'farmtools/insuranceservices.png',
      link: '',
    },
    {
      name: '',
      icon: 'farmtools/logisticservices.png',
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
          title="farmtools/farmerhead.png"
        ></MyToolsList>
      </div>
    </>
  )
}
