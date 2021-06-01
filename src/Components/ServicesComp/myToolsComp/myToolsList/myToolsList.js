import React from 'react'
import './myToolsList.css'
import { Link } from 'react-router-dom'
import { Grid, Avatar, Button, Icon, makeStyles } from '@material-ui/core'

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
      margin: '1em',
      '@media (max-width: 768px)': {
        margin: 0,
        marginLeft: '1em',
      },
    },
    toolsAvatar: {
      width: '11em',
      height: '5em',
      '@media (max-width: 768px)': {
        width: '6em',
        height: '6em',
      },
    },
  }))
  const classes = useStyles()

  return (
    <div className="my-tools-list">
      <Grid container justify="center" className={classes.listTitle}>
        <Avatar
          variant={props.variant || 'square'}
          src={`${process.env.PUBLIC_URL}/assets/my-tools/${props.title}`}
          className={classes.toolsAvatar}
        ></Avatar>
      </Grid>
      <Grid container direction="row" justify="center" alignItems="center">
        {props.dataList.map((item, index) => (
          <Grid
            key={index}
            xs={4}
            // lg={(props.dataList.length===7)?2:3}
            lg={2}
            item
            container
            direction="row"
            justify="center"
            alignItems="center"
            className="list-item"
            component={Link}
            to={item.link}
          >
            <Grid item container direction="column" alignItems="center">
              <Grid>
                <Avatar
                  variant={props.variant || 'square'}
                  className="list-avatar"
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
      <Grid container justify="center" alignItems="flex-end">
        <Button className={classes.feedConnect} variant="contained">
          <b>Connect To FEED </b>
          {/* <Icon className="fas fa-angle-double-right"></Icon> */}
        </Button>
      </Grid>
    </div>
  )
}
