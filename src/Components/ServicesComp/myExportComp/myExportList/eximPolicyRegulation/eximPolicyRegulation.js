import React from 'react'
import './eximPolicyRegulation.css'
import { Grid } from '@material-ui/core'
import MyExportListItem from '../../myExportListItem/myExportListItem'

export default function EximPolicyRegulation() {
  const dataList = [
    {
      name: 'Agri Export Policy Regulation',
      icon: 'policy/agri-export-policy.png',
      link: '/myexport/agriexportpolicy',
    },
    {
      name: 'Start Export',
      icon: 'policy/foreign-trade-policy.png',
      link: '/myexport/foreigntradepolicy',
    },
    {
      name: 'Product Selection',
      icon: 'policy/my-export-export-policy.png',
      link: '/myexport/exportpolicy',
    },
    {
      name: 'Buyers Connection',
      icon: 'policy/my-export-import-policy.png',
      link: '/myexport/importpolicy',
    },
    {
      name: 'Exim Policy Regulations',
      icon: 'policy/my-export-state-wise-policy.png',
      link: '/myexport/statewisepolicy',
    },
    {
      name: 'Finance',
      icon: 'policy/my-export-e-commerce-policy.png',
      link: '/myexport/ecommercepolicy',
    },
    {
      name: 'Process Export Order',
      icon: 'policy/my-export-hs-code-wise-policy.png',
      link: '/myexport/hscodepolicy',
    },
    {
      name: 'Exim Documentation',
      icon: 'policy/my-export-import-regulation.png',
      link: '/myexport/importregulations',
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
      <Grid container justifyContent="center">
        <h5>Export-Import Policy &amp; Benefits</h5>
      </Grid>
      <Grid
        container
        direction="row"
        justify="space-around"
        alignItems="flex-start"
        className="exim-policy-reg"
      >
        <Grid
          container
          item
          direction="column"
          justify="space-evenly"
          alignItems="center"
          className="image-grid"
          xs={12}
          lg={2}
        >
          {/* <Grid item xs>
            <h4>EXIM POLICY & REGULATIONS</h4>
          </Grid> */}
          {/* <Grid item xs>
            <img
              className="ant-logo"
              src={`${process.env.PUBLIC_URL}/assets/ant-small.png`}
              alt="ant"
            />
          </Grid> */}
        </Grid>
        <Grid lg={12}>
          <MyExportListItem
            dataList={dataList}
            cardSize={cardSize}
            cardsView={3}
          ></MyExportListItem>
        </Grid>
      </Grid>
    </>
  )
}
