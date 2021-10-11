import React from 'react'
import './legalCompliances.css'
import MyFpoListItem from '../../../myFpoListItem/myFpoListItem'

export default function LegalCompliances() {
  const dataList = [
    {
      name: 'Monthly Returns Filling',
      icon: 'compliances/legal/mgrf.png',
      link: '/myfpo/legalcompliances/monthlygst',
    },
    {
      name: 'PF, ESI, PT Filling',
      icon: 'compliances/legal/pfesi.png',
      link: '',
    },
    {
      name: 'TDS Filling',
      icon: 'compliances/legal/tdsf.png',
      link: '',
    },
    // {
    //   name: 'ROC Compliances',
    //   icon: 'compliances/legal/roc.png',
    //   link: '',
    // },
    // {
    //   name: 'Legal support Service',
    //   icon: 'compliances/legal/lss.png',
    //   link: '',
    // },
    // {
    //   name: 'Auditor Appointment',
    //   icon: 'compliances/legal/auditor.png',
    //   link: '',
    // },
    // {
    //   name: 'Minutes of Board Meeting',
    //   icon: 'compliances/legal/mobm.png',
    //   link: '',
    // },
    // {
    //   name: 'Corporate Governance',
    //   icon: 'compliances/legal/cg.png',
    //   link: '',
    // },
    {
      name: 'Stock Checking',
      icon: 'compliances/legal/stockchecking.png',
      link: '/myfpo/legalcompliances/stockchecking',
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
        cardTitle="compliances/legal/legalcomplianceshead.png"
        headingSize={headingSize}
        cardSize={cardSize}
        headingAlign="center"
        cardsView={4}
      ></MyFpoListItem>
    </>
  )
}
