import React from 'react'
import './myToolsMsme.css'
import MyToolsList from '../../myToolsList/myToolsList'

export default function MyToolsMsme() {
  const dataList = [
    {
      name: 'Statutory Registration',
      icon: 'msmetools/statutoryregistration.png',
      link: '',
    },
    {
      name: 'Business Compliances',
      icon: 'msmetools/businesscompliances.png',
      link: '',
    },
    {
      name: 'IT & Digital Marketing',
      icon: 'msmetools/itanddigital.png',
      link: '',
    },
    {
      name: 'Industry Consultant',
      icon: 'msmetools/industryconsultant.png',
      link: '',
    },
    {
      name: 'Document Formats',
      icon: 'msmetools/documentformates.png',
      link: '',
    },
    {
      name: 'Calculators',
      icon: 'msmetools/calculators.png',
      link: '',
    },
    {
      name: 'Marketing Services',
      icon: 'msmetools/marketingservices.png',
      link: '',
    },
    {
      name: 'Loan Services',
      icon: 'msmetools/loanservices.png',
      link: '',
    },
    {
      name: 'Insurance Services',
      icon: 'msmetools/insuranceservices.png',
      link: '',
    },
    {
      name: 'Logistic Services',
      icon: 'msmetools/logisticservices.png',
      link: '',
    },
    {
      name: 'Legal Services',
      icon: 'msmetools/legalservices.png',
      link: '',
    },
    {
      name: 'Exim Services',
      icon: 'msmetools/importandexportservices.png',
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
          title="msmetools/msmehead.png"
        ></MyToolsList>
      </div>
    </>
  )
}
