import React from 'react'
import './statutoryRegistration.css'
import MyFpoListItem from '../../../myFpoListItem/myFpoListItem'

export default function StatutoryRegistration() {
  const dataList = [
    {
      name: 'FPO Registrations',
      icon: '/compliances/statutory/fpor.png',
      link: '',
    },
    {
      name: 'FPC Registrationa',
      icon: '/compliances/statutory/fpcr.png',
      link: '',
    },
    {
      name: 'GST Registrations',
      icon: '/compliances/statutory/gstr.png',
      link: '',
    },
    {
      name: 'IEC Registrations',
      icon: '/compliances/statutory/ieccr.png',
      link: '',
    },
    {
      name: 'MSME Registrations',
      icon: '/compliances/statutory/msme.png',
      link: '',
    },
    {
      name: 'PAN Registrations',
      icon: '/compliances/statutory/pan.png',
      link: '',
    },
    {
      name: 'FSSAI Registrations',
      icon: '/compliances/statutory/fssai.png',
      link: '',
    },
    {
      name: 'ISO Registrations',
      icon: '/compliances/statutory/iso.png',
      link: '',
    },
    {
      name: 'Shops Establishments',
      icon: '/compliances/statutory/se.png',
      link: '',
    },
    {
      name: 'Trade License',
      icon: '/compliances/statutory/trade.png',
      link: '',
    },
    {
      name: 'Labour License',
      icon: '/compliances/statutory/labour.png',
      link: '',
    },
    {
      name: 'Other Registrations',
      icon: '/compliances/statutory/anyother.png',
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
        cardTitle="/compliances/statutory/statutory.png"
        headingSize={headingSize}
        cardSize={cardSize}
        headingAlign="center"
        cardsView={3}
      ></MyFpoListItem>
    </>
  )
}
