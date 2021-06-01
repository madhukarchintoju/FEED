import React from 'react'
import './myToolsFpo.css'
import MyToolsList from '../../myToolsList/myToolsList'

export default function MyToolsFpo() {
  const dataList = [
    {
      name: 'Fish',
      icon: 'statutory-reg.png',
      link: '/myfarm/aqua/fish',
    },
    {
      name: 'Prawns',
      icon: 'business-compliances.png',
      link: '/myfarm/aqua/fish',
    },
    {
      name: 'Fish Type 2',
      icon: 'it-dm.png',
      link: '/myfarm/aqua/fish',
    },
    {
      name: 'Fish Type 3',
      icon: 'industry-consultant.png',
      link: '',
    },
    {
      name: 'Fish Type 4',
      icon: 'document-formats.png',
      link: '/myfarm/aqua/fish',
    },
    {
      name: 'Fish Type 3',
      icon: 'tools-fpo-calculators.png',
      link: '',
    },
    {
      name: 'Fish Type 3',
      icon: 'tools-fpo-marketing-services.png',
      link: '',
    },
    {
      name: 'Fish Type 3',
      icon: 'tools-fpo-loan-services.png',
      link: '',
    },
    {
      name: 'Fish Type 3',
      icon: 'tools-fpo-insurance-services.png',
      link: '',
    },
    {
      name: 'Fish Type 3',
      icon: 'tools-fpo-logistics-services.png',
      link: '',
    },
    {
      name: 'Fish Type 3',
      icon: 'tools-fpo-legal-services.png',
      link: '',
    },
    {
      name: 'Fish Type 3',
      icon: 'tools-fpo-exim-services.png',
      link: '',
    },
  ]
  return (
    <>
      <div
        style={{
          backgroundImage: `URL("${process.env.PUBLIC_URL}/assets/my-tools/bg/mytoolsmyfpo.jpg")`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <MyToolsList dataList={dataList} title="fpo-heading.png"></MyToolsList>
      </div>
    </>
  )
}
