import React from 'react'
import { Grid } from '@material-ui/core'
export default function BusinessPlan() {
  return (
    <>
      <Grid container justifyContent="center">
        <h4>Business Plan</h4>
      </Grid>
      <Grid>
        <h6>
          A business plan placed in simpler words is a document that defines:
        </h6>
        <ol style={{ marginLeft: '15px' }}>
          <li>What is the business you do?</li>
          <li>Who are your customers?</li>
          <li>How do you market your product/service?</li>
          <li>How much does it cost to run the business in real grounds?</li>
          <li>
            Where do you operate your business and how do you execute your
            operations?{' '}
          </li>
        </ol>
        <p>
          For an FPO or MSME, it is quite necessary to make their business plans
          in order to run their business operations successfully.
        </p>
        <span>
          <a href="#">Click here</a> to know more about the Business plan.
        </span>
      </Grid>
    </>
  )
}
