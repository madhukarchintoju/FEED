import React from 'react'
import { Grid } from '@material-ui/core'
export default function HsCodePolicy() {
  return (
    <>
      <div>
        <Grid style={{ margin: '10px' }}>
          <h5>ITC-HS codes are divided into two schedules. </h5>
          <p>
            ITC(HS) Import Schedule I describe the rules and guidelines related
            to import policies where as Schedule II describe the rules and
            regulation related to export policies.
          </p>
          <p>
            Schedule I of the ITC-HS code is divided into 21 sections and each
            section is further divided into chapters. The total number of
            chapters in the schedule I is 98. The chapters are further divided
            into sub-heading under which different HS codes are mentioned.
          </p>
          <p>
            Export Policy Schedule II of the ITC-HS code contain 97 chapters
            giving all the details about the guidelines related to the export
            policies.
          </p>
          <a href="https://www.dgft.gov.in/CP/?opt=itchs-import-export">
            https://www.dgft.gov.in/CP/?opt=itchs-import-export
          </a>
        </Grid>
      </div>
    </>
  )
}
