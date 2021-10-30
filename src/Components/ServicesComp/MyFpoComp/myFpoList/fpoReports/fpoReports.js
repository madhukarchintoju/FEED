import React from 'react'
import { Grid } from '@material-ui/core'
import AnalyticsMain from '../../../../analytics/analyticsMain/analyticsMain'

export default function FpoReports() {
  return (
    <>
      {/* <Grid container justifyContent="center">
        <img
          src={`${process.env.PUBLIC_URL}/assets/my-fpo/reports/fpcconnectnameplate.png`}
          alt="..."
        />
      </Grid> */}
      <Grid container item lg={11} className="m-auto">
        <ul>
          <li>
            Generates reports on vendors, sales &amp; other business
            transactional reports{' '}
          </li>
          <li>
            Provides analysis based on the reports for better readability and
            accountability
          </li>
        </ul>
      </Grid>
      <Grid>
        <AnalyticsMain />
      </Grid>
    </>
  )
}
