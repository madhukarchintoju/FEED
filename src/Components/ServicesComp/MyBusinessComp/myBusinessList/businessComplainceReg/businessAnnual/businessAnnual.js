import React from 'react'
import MyBusinessListItem from '../../../myBusinessListItem/myBusinessListItem'

export default function BusinessAnnual() {
  const dataList = [
    {
      name: 'Income Tax',
      icon: 'compliances/annual/incometax.png',
      link: '',
    },
    {
      name: 'GST',
      icon: 'compliances/annual/gst.png',
      link: '',
    },
    {
      name: 'Preparation',
      icon: 'compliances/annual/preparation.png',
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
    webWidth: 11,
    mobWidth: 6,
    webHeight: 4,
    mobHeight: 2,
  }
  return (
    <>
      <MyBusinessListItem
        headingSize={headingSize}
        cardTitle="compliances/annual/annualcomplianceshead.png"
        dataList={dataList}
        cardSize={cardSize}
        cardsView={4}
        cardsJustify="space-around"
      ></MyBusinessListItem>
    </>
  )
}
