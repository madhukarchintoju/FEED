import React from 'react'
import './statutoryRegistration.css'
import MyFpoListItem from '../../../myFpoListItem/myFpoListItem'

export default function StatutoryRegistration() {
  const dataList = [
    {
      name: 'FPO / FPC Registrations',
      icon: 'compliances/statutory/fpofpcregistration.png',
      link: '/myfpo/statutoryregistration/fpofpcreg',
    },
    {
      name: 'Company Registrationa',
      icon: 'compliances/statutory/companyregistration.png',
      link: '/myfpo/statutoryregistration/companyreg',
    },
    {
      name: 'GST Registrations',
      icon: 'compliances/statutory/gstr.png',
      link: '/myfpo/statutoryregistration/gstreg',
    },
    {
      name: 'IEC Registrations',
      icon: 'compliances/statutory/ieccr.png',
      link: '/myfpo/statutoryregistration/ieccode',
    },
    {
      name: 'MSME Registrations',
      icon: 'compliances/statutory/msme.png',
      link: '/myfpo/statutoryregistration/msmereg',
    },
    {
      name: 'PAN Registrations',
      icon: 'compliances/statutory/pan.png',
      link: '/myfpo/statutoryregistration/panreg',
    },
    {
      name: 'FSSAI Registrations',
      icon: 'compliances/statutory/fssai.png',
      link: '/myfpo/statutoryregistration/fssaireg',
    },
    {
      name: 'ISO Registrations',
      icon: 'compliances/statutory/iso.png',
      link: '/myfpo/statutoryregistration/isoreg',
    },
    {
      name: 'Shops Establishments',
      icon: 'compliances/statutory/se.png',
      link: '/myfpo/statutoryregistration/shopsestb',
    },
    {
      name: 'Trade License',
      icon: 'compliances/statutory/trade.png',
      link: '/myfpo/statutoryregistration/tradelicence',
    },
    {
      name: 'Labour License',
      icon: 'compliances/statutory/labour.png',
      link: '/myfpo/statutoryregistration/labourlicence',
    },
    {
      name: 'Other Registrations',
      icon: 'compliances/statutory/anyother.png',
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
        cardTitle="compliances/statutory/statutory.png"
        headingSize={headingSize}
        cardSize={cardSize}
        headingAlign="center"
        cardsView={3}
      ></MyFpoListItem>
    </>
  )
}
