import React from 'react'
import { Grid } from '@material-ui/core'

export default function FpoReports() {
  return (
    <>
      <Grid className="text-center">
        <h5>FPC Reports</h5>
      </Grid>
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
    </>
  )
}
