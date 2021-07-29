import React from 'react'
import './eximTarrifBenefits.css'
import MyExportListItem from '../../myExportListItem/myExportListItem'

export default function EximTarrifbenefits() {
  const dataList = [
    {
      name: 'Know Export Tariff',
      icon: 'tariff/know-export-tariff.png',
      link: '',
    },
    {
      name: 'Interest Subvention Scheme',
      icon: 'tariff/interest-subvention-schemes.png',
      link: '',
    },
    {
      name: 'Export Policy',
      icon: 'tariff/export-policy.png',
      link: '',
    },
    {
      name: 'SPS-PBT Measures',
      icon: 'tariff/sps-tbt-measures.png',
      link: '',
    },
    {
      name: 'MEIS/RODTEP',
      icon: 'tariff/meis-rodtep.png',
      link: '',
    },
    {
      name: 'GST Other',
      icon: 'tariff/gst-other.png',
      link: '',
    },
    {
      name: 'Duty Drawbacks',
      icon: 'tariff/tax-refund.png',
      link: '',
    },
    {
      name: 'Tma',
      icon: 'tariff/tma.png',
      link: '',
    },
    {
      name: 'Exim Documentation',
      icon: 'tariff/meis-rodtep.png',
      link: '',
    },
  ]
  const cardSize = {
    webWidth: 8,
    mobWidth: 4,
    webHeight: 8,
    mobHeight: 4,
  }
  return (
    <>
      <MyExportListItem
        dataList={dataList}
        cardSize={cardSize}
        cardsView={2}
        title="Export - Import Tariff Benefits"
      ></MyExportListItem>
    </>
  )
}
