import React from 'react'
import { Grid } from '@material-ui/core'
export default function FpoLoanSchemes() {
  return (
    <>
      <Grid className="text-center">
        <img
          src={`${process.env.PUBLIC_URL}/assets/my-fpo/fpcloansschemes/fpcloansandschemesnameplate.png`}
          alt="..."
        />
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
