import React from 'react'
import { Grid } from '@material-ui/core'

export default function FpoCapacityBuilding() {
  return (
    <>
      {/* <Grid container justifyContent="center">
        <img
          src={`${process.env.PUBLIC_URL}/assets/my-fpo/capacitybuilding/fpccapacitybuildingnameplate.png`}
          alt=""
        />
      </Grid> */}
      <Grid container item lg={11} className="m-auto">
        <ul>
          <li>
            We offer capacity building to CEO &amp; Board of Directors for
            better management of FPO
          </li>
          <li>
            Workshops are conducted to Members of FPO on Good Agricultural
            Practices (GAP) &amp; SPS-TBT measures
          </li>
        </ul>
      </Grid>
    </>
  )
}
