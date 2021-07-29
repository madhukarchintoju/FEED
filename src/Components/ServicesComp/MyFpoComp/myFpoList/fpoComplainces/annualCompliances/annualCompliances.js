import React from 'react'
import './annualCompliances.css'
import MyFpoListItem from '../../../myFpoListItem/myFpoListItem'

export default function AnnualCompliances() {
  const dataList = [
    {
      name: 'Income Tax Returns',
      icon: 'compliances/annual/itreturns.png',
      link: '',
    },
    {
      name: 'GST Annual Returns',
      icon: 'compliances/annual/gstannualreturns.png',
      link: '',
    },
    {
      name: 'Preparations of Financials',
      icon: 'compliances/annual/preparationsoffinancials.png',
      link: '',
    },
    {
      name: 'Audit Report',
      icon: 'compliances/annual/auditreport.png',
      link: '',
    },
    {
      name: 'Stock Checking',
      icon: 'compliances/annual/stockchecking.png',
      link: '',
    },
  ]
  const headingSize = {
    webWidth: 14,
    mobWidth: 8,
    webHeight: 4,
    mobHeight: 2,
  }
  const cardSize = {
    webWidth: 12,
    mobWidth: 6,
    webHeight: 3,
    mobHeight: 2,
  }
  return (
    <>
      <MyFpoListItem
        dataList={dataList}
        cardTitle="/compliances/annual/annualcomplianceshead.png"
        headingSize={headingSize}
        cardSize={cardSize}
        headingAlign="center"
        cardsView={4}
      ></MyFpoListItem>
    </>
  )
}
