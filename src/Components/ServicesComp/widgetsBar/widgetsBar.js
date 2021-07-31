import React from 'react'
import { Route, Switch, Redirect, useHistory } from 'react-router-dom'
import { Grid, Button, Icon, Avatar, makeStyles } from '@material-ui/core'

export default function WidgetsBar(props) {
  let history = useHistory()
  return (
    <>
      <Grid
        container
        justifyContent="space-between"
        style={{ marginBottom: '0.2em' }}
      >
        <Grid>
          <Button
            variant="contained"
            color="primary"
            startIcon={<Icon className="fas fa-arrow-left" />}
            onClick={() => history.goBack()}
          >
            Back
          </Button>
        </Grid>
        <Grid>
          <h4>{props.screenTitle}</h4>
        </Grid>
        <Grid style={{ display: 'flex' }}>
          <Grid>
            <Button
              variant="contained"
              color="primary"
              startIcon={<Icon className="fa fa-plus-circle" />}
            >
              Add To Quick Menu
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}
