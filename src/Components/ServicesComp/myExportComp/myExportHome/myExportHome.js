import React from 'react'
import './myExportHome.css'
import MyExportListItem from '../myExportListItem/myExportListItem'

export default function MyExportHome() {
  const dataList = [
    {
      name: 'Why Exports',
      icon: '/home/why-exports.png',
      link: '/myexport/whyexport',
    },
    {
      name: 'Start Export',
      icon: '/home/start-export.png',
      link: '/myexport/startexport',
    },
    {
      name: 'Product Selection',
      icon: '/home/PRODUCT-SELECTION.png',
      link: '/myexport/exportproductselection',
    },
    {
      name: 'Buyers Connection',
      icon: '/home/BUYERS-CONNECTIONS.png',
      link: '/myexport/exportbuyersconnection',
    },
    {
      name: 'Exim Policy Regulations',
      icon: '/home/POLICIES.png',
      link: '/myexport/eximpolicyregulation',
    },
    {
      name: 'Finance',
      icon: '/home/FINANCE.png',
      link: '',
    },
    {
      name: 'Process Export Order',
      icon: '/home/PROCESS.png',
      link: '/myexport/processexportorder',
    },
    {
      name: 'Exim Documentation',
      icon: '/home/DOCUMENTATION.png',
      link: '/myexport/eximdocumentation',
    },
    {
      name: 'Global Trade Updates',
      icon: '/home/GLOBAL-UPDATE.png',
      link: '/myexport/globaltradeupdates',
    },
    {
      name: 'Events',
      icon: '/home/EVENTS.png',
      link: '/myexport/exportevents',
    },
    {
      name: 'Tools & Services',
      icon: '/home/TOOLS-SERVICES.png',
      link: '/myexport/exporttoolservices',
    },
    {
      name: 'Tarrif',
      icon: '/home/TARIFF.png',
      link: '/myexport/eximtarrifbenefits',
    },
  ]
  const cardSize = {
    webWidth: 9,
    mobWidth: 5,
    webHeight: 8,
    mobHeight: 4,
  }
  return (
    <>
      <MyExportListItem
        dataList={dataList}
        cardSize={cardSize}
        title="My-Exports"
      ></MyExportListItem>
    </>
  )
}
