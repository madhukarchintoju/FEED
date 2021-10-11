import React from 'react'
import './myToolsExports.css'
import MyToolsList from '../../myToolsList/myToolsList'

export default function MyToolsExports() {
  const dataList = [
    {
      name: 'HS Code Search',
      icon: 'exporttools/hscode.png',
      link: '',
    },
    {
      name: 'CHA',
      icon: 'exporttools/cha.png',
      link: '',
    },
    {
      name: 'Freight Foreward',
      icon: 'exporttools/freightforeward.png',
      link: '',
    },
    {
      name: 'Logistic Services',
      icon: 'exporttools/logisticservices.png',
      link: '',
    },
    {
      name: 'Loan Services',
      icon: 'exporttools/loanservices.png',
      link: '',
    },
    {
      name: 'Insurance Services',
      icon: 'exporttools/insuranceservices.png',
      link: '',
    },
    {
      name: 'Document Formats',
      icon: 'exporttools/documentformates.png',
      link: '',
    },
    {
      name: 'Calculators',
      icon: 'exporttools/calculators.png',
      link: '',
    },
    {
      name: 'Industry Consultant',
      icon: 'exporttools/industryconsultant.png',
      link: '',
    },
    {
      name: 'Marketing Services',
      icon: 'exporttools/marketingservices.png',
      link: '',
    },
    {
      name: 'IT & Digital Marketing',
      icon: 'exporttools/itanddigital.png',
      link: '',
    },
    {
      name: 'Legal Services',
      icon: 'exporttools/legalservices.png',
      link: '',
    },
    {
      name: 'Statutory Registrations',
      icon: 'exporttools/statutoryregistrations.png',
      link: '',
    },
    {
      name: 'Business Compliances',
      icon: 'exporttools/businesscompliances.png',
      link: '',
    },
  ]
  return (
    <>
      <div
        style={{
          backgroundImage: `URL("${process.env.PUBLIC_URL}/assets/my-tools/bg/mytoolsmsme.jpg")`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <MyToolsList
          dataList={dataList}
          title="exporttools/exportshead.png"
        ></MyToolsList>
      </div>
    </>
  )
}
