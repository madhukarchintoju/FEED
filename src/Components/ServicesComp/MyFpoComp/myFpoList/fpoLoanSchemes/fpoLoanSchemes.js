import React from 'react'
import { Grid } from '@material-ui/core'
export default function FpoLoanSchemes() {
  return (
    <>
      <Grid className="text-center">
        <h5>FPC Loans &amp; Schemes</h5>
      </Grid>
      <Grid container item lg={11} className="m-auto">
        <ul>
          <li>
            Provides information on loans &amp; schemes offered to FPOs from all
            ministries, organizations &amp; apex bodies
          </li>
        </ul>
      </Grid>
    </>
  )
}
