import React from 'react'
import { makeStyles, Grid } from '@material-ui/core'
export default function MySubscription() {
  const useStyles = makeStyles((theme) => ({
    existingPlanWrap: {
      // backgroundColor:'orange'
      border: '1px solid red',
    },
    existingPlanHeading: {
      padding: '5px',
      backgroundColor: 'orange',
    },
  }))
  const classes = useStyles()
  return (
    <>
      <Grid>
        <Grid className={classes.existingPlanWrap}>
          <Grid
            container
            className={classes.existingPlanHeading}
            justify="space-between"
            alignItems="center"
          >
            <h5>Existing Plans</h5>
            <i className="fas fa-clock"> Valid Upto 21-2-2022</i>
          </Grid>
          <Grid>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s,
            </p>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}
