import React from 'react'
import './myToolsExports.css'
import MyToolsList from '../../myToolsList/myToolsList'

export default function MyToolsExports() {
  const dataList = [
    {
      name: 'HS Code Search',
      icon: '/exports/my-tools-exports-hs-code-search.png',
      link: '',
    },
    {
      name: 'CHA',
      icon: '/exports/my-tools-exports-cha.png',
      link: '',
    },
    {
      name: 'Freight Foreward',
      icon: '/exports/my-tools-exports-freight-foreward.png',
      link: '',
    },
    {
      name: 'Logistic Services',
      icon: '/exports/my-tools-exports-logistics-services.png',
      link: '',
    },
    {
      name: 'Loan Services',
      icon: '/exports/my-tools-exports-loan-services.png',
      link: '',
    },
    {
      name: 'Insurance Services',
      icon: '/exports/my-tools-exports-insurance-services.png',
      link: '',
    },
    {
      name: 'Certificate Formats',
      icon: '/exports/my-tools-exports-certificate-format.png',
      link: '',
    },
    {
      name: 'Calculators',
      icon: '/exports/my-tools-exports-calculators.png',
      link: '',
    },
    {
      name: 'Industry Consultant',
      icon: '/exports/my-tools-exports-industry-consultant.png',
      link: '',
    },
    {
      name: 'Marketing Services',
      icon: '/exports/my-tools-exports-marketing-services.png',
      link: '',
    },
    {
      name: 'IT & Digital Marketing',
      icon: '/exports/my-tools-exports-itdm.png',
      link: '',
    },
    {
      name: 'Legal Services',
      icon: '/exports/my-tools-exports-legal-services.png',
      link: '',
    },
    {
      name: 'Statutory Registrations',
      icon: '/exports/my-tools-exports-statutory-reg.png',
      link: '',
    },
    {
      name: 'Business Compliances',
      icon: '/exports/my-tools-exports-business-compliances.png',
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
          title="/exports/my-tools-exports-heading.png"
        ></MyToolsList>
      </div>
    </>
  )
}
