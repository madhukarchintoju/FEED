import React from 'react'
import './fpoComplainces.css'
import MyFpoListItem from '../../myFpoListItem/myFpoListItem'

export default function FpoComplainces() {
  const dataList = [
    {
      name: 'Statutory Registrations',
      icon: 'compliances/home/statutory.png',
      link: '/myfpo/fpocompliances/statutoryregistration',
    },
    {
      name: 'Legal compliances',
      icon: 'compliances/home/legal.png',
      link: '/myfpo/fpocompliances/legalcompliances',
    },
    {
      name: 'Annual Compliances',
      icon: 'compliances/home/annual.png',
      link: '/myfpo/fpocompliances/annualcompliances',
    },
  ]
  const headingSize = {
    webWidth: 15,
    mobWidth: 7,
    webHeight: 5,
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
      <MyFpoListItem
        dataList={dataList}
        cardTitle="compliances/home/head.png"
        headingSize={headingSize}
        cardSize={cardSize}
        headingAlign="center"
        cardsJustify="space-around"
      ></MyFpoListItem>
    </>
  )
}
