import React from 'react'
import './fpoComplainces.css'
import { Grid } from '@material-ui/core'
import MyFpoListItem from '../../myFpoListItem/myFpoListItem'

export default function FpoComplainces() {
  const dataList = [
    {
      name: 'Statutory Registrations',
      icon: 'compliances/home/statutory.png',
      link: '/myfpo/fpocompliances/statutoryregistration',
    },
    {
      name: 'Legal compliances',
      icon: 'compliances/home/legal.png',
      link: '/myfpo/fpocompliances/legalcompliances',
    },
    {
      name: 'Annual Compliances',
      icon: 'compliances/home/annual.png',
      link: '/myfpo/fpocompliances/annualcompliances',
    },
  ]
  const headingSize = {
    webWidth: 15,
    mobWidth: 7,
    webHeight: 5,
    mobHeight: 2,
  }
  const cardSize = {
    webWidth: 10,
    mobWidth: 4,
    webHeight: 10,
    mobHeight: 4,
  }
  return (
    <>
      <Grid item lg={11} className="m-auto">
        {/* <Grid className="text-center">
          <img
            src={`${process.env.PUBLIC_URL}/assets/my-fpo/compliances/home/fpccompliancesnameplate.png`}
            alt="..."
          />
        </Grid> */}
        <ul style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
          <li>
            Create customized business plans as per the requirement of the FPO
          </li>
          <li>Promotes operational &amp; financial sustainability</li>
          <li>Expert advice on Trading, Production &amp; Service categories</li>
        </ul>
      </Grid>
      <MyFpoListItem
        dataList={dataList}
        // cardTitle="compliances/home/head.png"
        headingSize={headingSize}
        cardSize={cardSize}
        headingAlign="center"
        cardsJustify="space-around"
      ></MyFpoListItem>
    </>
  )
}
