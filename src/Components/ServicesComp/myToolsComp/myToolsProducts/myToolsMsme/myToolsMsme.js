import React from 'react'
import './myToolsMsme.css'
import MyToolsList from '../../myToolsList/myToolsList'

export default function MyToolsMsme() {
  const dataList = [
    {
      name: 'Statutory Registration',
      icon: '/msme/my-tools-msme-statutory-reg.png',
      link: '',
    },
    {
      name: 'Business Compliances',
      icon: '/msme/my-tools-msme-business-compliances.png',
      link: '',
    },
    {
      name: 'IT & Digital Marketing',
      icon: '/msme/my-tools-msme-itdm.png',
      link: '',
    },
    {
      name: 'Industry Consultant',
      icon: '/msme/my-tools-msme-industry-consultant.png',
      link: '',
    },
    {
      name: 'Document Formats',
      icon: '/msme/my-tools-msme-document-format.png',
      link: '',
    },
    {
      name: 'Calculators',
      icon: '/msme/my-tools-msme-calculators.png',
      link: '',
    },
    {
      name: 'Marketing Services',
      icon: '/msme/my-tools-msme-marketing-services.png',
      link: '',
    },
    {
      name: 'Loan Services',
      icon: '/msme/my-tools-msme-loan-services.png',
      link: '',
    },
    {
      name: 'Insurance Services',
      icon: '/msme/my-tools-msme-insurance-services.png',
      link: '',
    },
    {
      name: 'Logistic Services',
      icon: '/msme/my-tools-msme-logistics-services.png',
      link: '',
    },
    {
      name: 'Legal Services',
      icon: '/msme/my-tools-msme-legal-services.png',
      link: '',
    },
    {
      name: 'Exim Services',
      icon: '/msme/my-tools-msme-exim-services.png',
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
          title="/msme/my-tools-msme-heading.png"
        ></MyToolsList>
      </div>
    </>
  )
}
