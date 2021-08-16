import React from 'react'
import MyBusinessListItem from '../../../myBusinessListItem/myBusinessListItem'

export default function BusinessStatutoryReg() {
  const dataList = [
    {
      name: 'FPO/FPC Registrations',
      icon: 'compliances/statutory/fpcfporegistration.png',
      link: '',
    },
    {
      name: 'Company Registrations',
      icon: 'compliances/statutory/companyregistration.png',
      link: '',
    },
    {
      name: 'GST Registrations',
      icon: 'compliances/statutory/gstregd.png',
      link: '',
    },
    {
      name: 'IEC Registrations',
      icon: 'compliances/statutory/iecregd.png',
      link: '',
    },
    {
      name: 'MSME Registrations',
      icon: 'compliances/statutory/msmeregd.png',
      link: '',
    },
    {
      name: 'PAN Registrations',
      icon: 'compliances/statutory/panregd.png',
      link: '',
    },
    {
      name: 'FSSAI Registrations',
      icon: 'compliances/statutory/fssairegd.png',
      link: '',
    },
    {
      name: 'ISO Registrations',
      icon: 'compliances/statutory/isoregd.png',
      link: '',
    },
    {
      name: 'Shop and Establishment',
      icon: 'compliances/statutory/shopandestablishment.png',
      link: '',
    },
    {
      name: 'Trade Licences',
      icon: 'compliances/statutory/tradeliecence.png',
      link: '',
    },
    {
      name: 'Labour Licences',
      icon: 'compliances/statutory/labourlicenece.png',
      link: '',
    },
    {
      name: 'Any Other Registrations',
      icon: 'compliances/statutory/anyotherregd.png',
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
        dataList={dataList}
        headingSize={headingSize}
        cardTitle="compliances/statutory/statutoryregdhead.png"
        cardSize={cardSize}
        cardsView={3}
        cardsJustify="space-around"
      ></MyBusinessListItem>
    </>
  )
}
