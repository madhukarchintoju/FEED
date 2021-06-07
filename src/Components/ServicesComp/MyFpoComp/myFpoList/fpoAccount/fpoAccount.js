import React from 'react'
import MyFpoListItem from '../../myFpoListItem/myFpoListItem'
import './fpoAccount.css'
import { makeStyles } from '@material-ui/core'

export default function FpoAccount() {
  const useStyles = makeStyles((theme) => ({
    fpoAccountWrap: {
      backgroundImage: `URL("${process.env.PUBLIC_URL}/assets/my-fpo/bg/accounts.jpg")`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    },
  }))
  const classes = useStyles()
  const dataList = [
    {
      name: 'Create Vendor',
      icon: '/accounts/createvendor.png',
      link: '',
    },
    {
      name: 'Share Capital Registry',
      icon: '/accounts/sharecapitalregistry.png',
      link: '',
    },
    {
      name: 'Purchase Registry',
      icon: '/accounts/purcheseregistry.png',
      link: '',
    },
    {
      name: 'Sale Registry',
      icon: '/accounts/salesregistry.png',
      link: '',
    },
    {
      name: 'Stock Registry',
      icon: '/accounts/stockregistry.png',
      link: '',
    },
    {
      name: 'Create Product',
      icon: '/accounts/createproduct.png',
      link: '/myfpo/createProduct',
    },
    {
      name: 'Ledger Registry',
      icon: '/accounts/ledgerregistry.png',
      link: '',
    },
    {
      name: 'Bank Registry',
      icon: '/accounts/bankregistry.png',
      link: '',
    },
    {
      name: 'Cash Book Registry',
      icon: '/accounts/cashbookregistry.png',
      link: '',
    },
    {
      name: 'FPO Reports',
      icon: '/accounts/reports.png',
      link: '',
    },
  ]
  const headingSize = {
    webWidth: 18,
    mobWidth: 8,
    webHeight: 2,
    mobHeight: 1,
  }
  const cardSize = {
    webWidth: 9,
    mobWidth: 4,
    webHeight: 8,
    mobHeight: 4,
  }

  return (
    <>
      <div className={classes.fpoAccountWrap}>
        <MyFpoListItem
          dataList={dataList}
          headingSize={headingSize}
          cardTitle="/accounts/fpoaccountsheading.png"
          headingAlign="flex-start"
          cardSize={cardSize}
        ></MyFpoListItem>
      </div>
    </>
  )
}
