import React from 'react'
import { Grid } from '@material-ui/core'
import BarChart from '../../analytics/barChart/barChart'
import DependencyWheel from '../../analytics/dependencyWheel/dependencyWheel'
import LineChart from '../../analytics/lineChart/lineChart'
import PieChart from '../../analytics/pieChart/pieChart'

export default function MyReportsDashboard() {
  return (
    <>
      <Grid>
        <Grid container justifyContent="space-evenly" item lg={12}>
          <Grid lg={5}>
            <BarChart />
          </Grid>
          <Grid lg={5}>
            <DependencyWheel />
          </Grid>
        </Grid>
        <Grid container justifyContent="space-evenly" lg={12}>
          <Grid lg={5}>
            <PieChart />
          </Grid>
          <Grid lg={5}>
            <LineChart />
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}
