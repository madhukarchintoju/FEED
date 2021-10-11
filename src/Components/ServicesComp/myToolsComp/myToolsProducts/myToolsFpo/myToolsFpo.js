import React from 'react'
import './myToolsFpo.css'
import MyToolsList from '../../myToolsList/myToolsList'

export default function MyToolsFpo() {
  const dataList = [
    {
      name: 'My Fpo',
      icon: 'fpotools/statutoryregistration.png',
      link: '',
    },
    {
      name: 'Business Compliances',
      icon: 'fpotools/businesscompliances.png',
      link: '',
    },
    {
      name: 'It Digital Marketing',
      icon: 'fpotools/itanddigitalmarketing.png',
      link: '',
    },
    {
      name: 'Industry Consultants',
      icon: 'fpotools/industryconsultant.png',
      link: '',
    },
    {
      name: 'Document Formats',
      icon: 'fpotools/documentformates.png',
      link: '',
    },
    {
      name: 'Calculators',
      icon: 'fpotools/calculators.png',
      link: '',
    },
    {
      name: 'Marketing Services',
      icon: 'fpotools/marketingservices.png',
      link: '',
    },
    {
      name: 'Loans Services',
      icon: 'fpotools/loanservices.png',
      link: '',
    },
    {
      name: 'Insurance Services',
      icon: 'fpotools/insuranceservices.png',
      link: '',
    },
    {
      name: 'Logistic Services',
      icon: 'fpotools/logisticservcies.png',
      link: '',
    },
    {
      name: 'legal Services',
      icon: 'fpotools/legalservices.png',
      link: '',
    },
    {
      name: 'EXIM Services',
      icon: 'fpotools/importandexportservices.png',
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
        <MyToolsList
          dataList={dataList}
          title="fpotools/fpohead.png"
        ></MyToolsList>
      </div>
    </>
  )
}
