import React from 'react'
import { Grid } from '@material-ui/core'
export default function FpoConnect() {
  return (
    <>
      <Grid>
        <h5 className="text-center">FPC Connect</h5>
        <Grid item lg={11} className="m-auto">
          <ul>
            <li>
              Enables communication within the members of the FPO through
              internal messaging system
            </li>
            <li>
              Can share any information or post queries related to
              product/management issues
            </li>
          </ul>
        </Grid>
      </Grid>
    </>
  )
}
