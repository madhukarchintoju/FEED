import React from 'react'
import { Grid, Button, Icon, Avatar, makeStyles } from '@material-ui/core'
export default function FpoBusinessPlan() {
  const useStyles = makeStyles((theme) => ({
    businessPlanPara: {
      margin: 'auto',
      width: '90%',
      padding: '2px',
      textAlign: 'justify',
      textJustify: 'inter-word',
    },
  }))
  const classes = useStyles()
  return (
    <>
      <div>
        <h1 className="text-center">FPC Business Plan</h1>
        <Grid item lg={12} className={classes.businessPlanPara}>
          <ul style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
            <li>
              Create customized business plans as per the requirement of the FPO
            </li>
            <li>Promotes operational &amp; financial sustainability</li>
            <li>
              Expert advice on Trading, Production &amp; Service categories
            </li>
          </ul>
        </Grid>
        <Grid container justifyContent="center">
          <a href="/" download>
            <button className="btn btn-danger m-auto" download>
              Download Business Plan <i class="fas fa-cloud-download-alt"></i>
            </button>
          </a>
        </Grid>
      </div>
    </>
  )
}
