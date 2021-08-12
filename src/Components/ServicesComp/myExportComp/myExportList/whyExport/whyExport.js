import React from 'react'
import { Grid } from '@material-ui/core'
export default function WhyExport() {
  return (
    <>
      <div>
        <Grid>
          <img
            src={`${process.env.PUBLIC_URL}/assets/my-exports/whyexports/whyexportsbnr.png`}
            // width="20"
            alt="email-icon"
          />{' '}
        </Grid>
        <Grid style={{ margin: '10px' }}>
          <h3>Why Export &#63;</h3>
          <h5>
            Need and Importance of exports for both exporter and to the country{' '}
          </h5>
          <ul className="ml-5">
            <li>Where does India stand in global trade? </li>
            <li>
              What are the benefits of exporting my product to different
              countries
            </li>
            <li>
              What are the tariffs and benefits I receive from government when I
              export?{' '}
            </li>
            <li>
              Questions like these may arise when we hear the term
              exports…You’ll find answers to all these questions in WHY EXPORTS.
            </li>
          </ul>
        </Grid>
      </div>
    </>
  )
}
