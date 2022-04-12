import React from 'react'
import './myFarmGuide.css'
import { Link } from 'react-router-dom'
import { Grid, Avatar, Button, Icon, makeStyles } from '@material-ui/core'

export default function MyFarmGuide(props) {
  const useStyles = makeStyles((theme) => ({
    feedConnect: {
      backgroundColor: '#a4cf3e',
      '@media (max-width: 768px)': {
        marginTop: '2em',
      },
    },
    itemName: {
      marginLeft: '1em',
      color: 'black',
      fontWeight: '500',
    },
    guideAvatar: {
      width: '14em',
      height: '5em',
      '@media (max-width: 768px)': {
        width: '6em',
        height: '2em',
      },
    },
    guideItem: {
      paddingTop: '0.4em',
      borderRadius: '3em',
      maxWidth: '19em',
      margin: '1em',
    },
    guideTitle: {
      margin: '1em',
      '@media (max-width: 768px)': {
        margin: 0,
        marginLeft: '1em',
      },
    },
  }))
  const classes = useStyles()
  return (
    <div className="my-farm-guide">
      {/* <Grid container justify="center" className={classes.guideTitle}>
        <h4>{props.title}</h4>
      </Grid> */}
      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="center"
      >
        {props.dataGuide.map((item, index) => (
          <Grid key={index} xs={3} lg={4} item className={classes.guideItem}>
            <Grid component={Link} to={item.link}>
              {/* <a
                href={`${process.env.PUBLIC_URL}/assets/my-farm/pdf/${item.download}`}
                target="_blank"
                rel="noreferrer"
                download
              > */}
              <Avatar
                variant={props.variant || 'square'}
                className={classes.guideAvatar}
                src={`${process.env.PUBLIC_URL}/assets/my-farm/guide/${item.icon}`}
              >
                {item.name}
              </Avatar>
              {/* </a> */}
            </Grid>
          </Grid>
        ))}
      </Grid>
      <Grid container justify="center" alignItems="flex-end">
        <Button className={classes.feedConnect} variant="contained">
          <b>Connect FPO </b>
          <Icon className="fas fa-angle-double-right"></Icon>
        </Button>
      </Grid>
    </div>
  )
}
