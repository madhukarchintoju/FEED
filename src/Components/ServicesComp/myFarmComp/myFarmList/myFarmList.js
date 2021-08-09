import React from 'react'
import './myFarmList.css'
import { Link } from 'react-router-dom'
import { Grid, Avatar, Button, Icon, makeStyles } from '@material-ui/core'

export default function MyFarmList(props) {
  const useStyles = makeStyles((theme) => ({
    feedConnect: {
      backgroundColor: '#a4cf3e',
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
  }))
  const classes = useStyles()

  return (
    <div className="my-farm-list">
      <Grid container justifyContent="center" className={classes.listTitle}>
        <h4>{props.title}</h4>
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
      >
        {props.dataList.map((item, index) => (
          <Grid
            key={index}
            xs={4}
            lg={2}
            item
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            className="list-item"
          >
            <Grid
              item
              container
              direction="column"
              alignItems="center"
              component={Link}
              to={item.link}
            >
              <Grid>
                <Avatar
                  variant={props.variant || 'square'}
                  className="list-avatar"
                  src={`${process.env.PUBLIC_URL}/assets/my-farm/${item.icon}`}
                >
                  {item.name}
                </Avatar>
              </Grid>
              <Grid className={classes.color}>{item.name}</Grid>
            </Grid>
          </Grid>
        ))}
      </Grid>
      <Grid container justifyContent="center" alignItems="flex-end">
        <Button className={classes.feedConnect} variant="contained">
          <b>Connect FEED </b>
          <Icon className="fas fa-angle-double-right"></Icon>
        </Button>
      </Grid>
    </div>
  )
}
