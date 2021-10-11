import React from 'react'
import './myToolsList.css'
import { Link } from 'react-router-dom'
import { Grid, Avatar, Button, makeStyles } from '@material-ui/core'

export default function MyToolsList(props) {
  const useStyles = makeStyles((theme) => ({
    feedConnect: {
      color: 'white',
      backgroundColor: 'black',
      '@media (max-width: 768px)': {
        marginTop: '2em',
      },
    },
    color: {
      color: 'black',
      fontWeight: '500',
    },
    listTitle: {
      '@media (max-width: 768px)': {
        margin: 0,
        marginLeft: '1em',
      },
    },
    toolsAvatar: {
      margin: '1em',
      width: '12em',
      height: '5em',
      '@media (max-width: 768px)': {
        width: '6em',
        height: '3em',
      },
    },
    listAvatar: {
      width: '6em',
      height: '6em',
      '@media (max-width: 768px)': {
        width: '3em',
        height: '3em',
      },
    },
  }))
  const classes = useStyles()

  return (
    <div>
      <Grid container justify="center" className={classes.listTitle}>
        <Avatar
          variant={props.variant || 'square'}
          src={`${process.env.PUBLIC_URL}/assets/my-tools/${props.title}`}
          className={classes.toolsAvatar}
        ></Avatar>
      </Grid>
      <Grid
        container
        direction="row"
        // spacing={1}
        justify="flex-start"
        alignItems="center"
        style={{ paddingBottom: '30px' }}
      >
        {props.dataList.map((item, index) => (
          <Grid
            key={index}
            xs={6}
            lg={2}
            item
            container
            direction="row"
            justify="flex-start"
            alignItems="center"
            className="list-item"
          >
            <Grid item container direction="column" alignItems="center">
              <Grid component={Link} to={item.link}>
                <Avatar
                  variant={props.variant || 'square'}
                  className={classes.listAvatar}
                  src={`${process.env.PUBLIC_URL}/assets/my-tools/${item.icon}`}
                >
                  {item.name}
                </Avatar>
              </Grid>
              {/* <Grid className={classes.color}>{item.name}</Grid> */}
            </Grid>
          </Grid>
        ))}
      </Grid>
      {/* <Grid container justify="center" alignItems="flex-end">
        <Button className={classes.feedConnect} variant="contained">
          <b>Connect To FEED </b>
        </Button>
      </Grid> */}
    </div>
  )
}
