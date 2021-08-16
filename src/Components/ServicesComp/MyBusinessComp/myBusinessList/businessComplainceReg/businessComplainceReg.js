import React from 'react'
import MyBusinessListItem from '../../myBusinessListItem/myBusinessListItem'

export default function BusinessComplainceReg() {
  const dataList = [
    {
      name: 'Statutory Registrations',
      icon: 'compliances/home/statutoryreg.png',
      link: '/mybusiness/statutoryreg',
    },
    {
      name: 'Legal compliances',
      icon: 'compliances/home/legalcomliances.png',
      link: '/mybusiness/legalcompliances',
    },
    {
      name: 'Annual Compliances',
      icon: 'compliances/home/annualcompliances.png',
      link: '/mybusiness/annualcompliances',
    },
  ]
  const headingSize = {
    webWidth: 14,
    mobWidth: 8,
    webHeight: 4,
    mobHeight: 2,
  }
  const cardSize = {
    webWidth: 10,
    mobWidth: 4,
    webHeight: 10,
    mobHeight: 4,
  }
  return (
    <>
      <MyBusinessListItem
        dataList={dataList}
        headingSize={headingSize}
        cardTitle="compliances/statutory/statutoryregdhead.png"
        cardSize={cardSize}
        cardsJustify="space-around"
      ></MyBusinessListItem>
    </>
  )
}
