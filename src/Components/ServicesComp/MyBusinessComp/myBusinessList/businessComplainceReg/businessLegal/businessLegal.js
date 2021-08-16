import React from 'react'
import MyBusinessListItem from '../../../myBusinessListItem/myBusinessListItem'

export default function BusinessLegal() {
  const dataList = [
    {
      name: '',
      icon: 'compliances/legal/monthlygstreturnfilling.png',
      link: '',
    },
    {
      name: '',
      icon: 'compliances/legal/pfesi.png',
      link: '',
    },
    {
      name: '',
      icon: 'compliances/legal/tdsfilling.png',
      link: '',
    },
    {
      name: '',
      icon: 'compliances/legal/roccompliances.png',
      link: '',
    },
    {
      name: '',
      icon: 'compliances/legal/legalsupportservices.png',
      link: '',
    },
    {
      name: '',
      icon: 'compliances/legal/auditorappointment.png',
      link: '',
    },
    {
      name: '',
      icon: 'compliances/legal/minitsofboardmeeting.png',
      link: '',
    },
    {
      name: '',
      icon: 'compliances/legal/corporategovernence.png',
      link: '',
    },
    {
      name: '',
      icon: 'compliances/legal/stockchecking.png',
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
        cardTitle="compliances/legal/legalcomlianceshead.png"
        dataList={dataList}
        cardSize={cardSize}
        cardsView={4}
        cardsJustify="space-around"
      ></MyBusinessListItem>
    </>
  )
}
