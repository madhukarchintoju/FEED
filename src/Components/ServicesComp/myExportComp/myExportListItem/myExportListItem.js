import React from 'react'
import './myExportListItem.css'
import { Link } from 'react-router-dom'
import { Grid, Avatar, makeStyles } from '@material-ui/core'

export default function MyExportListItem(props) {
  const useStyles = makeStyles((theme) => ({
    feedConnect: {
      backgroundColor: '#64c5bc',
      '@media (max-width: 768px)': {
        marginTop: '2em',
      },
    },
    color: {
      color: 'black',
      fontWeight: '500',
    },
    titleHeading: {
      // margin: '1em',
      '@media (max-width: 768px)': {
        margin: 0,
        marginLeft: '1em',
      },
    },
    listItem: {
      marginBottom: '2em',
    },
    headingAvatar: {
      width: `${props.headingSize?.webWidth}em` || '18em',
      height: `${props.headingSize?.webHeight}em` || '5em',
      '@media (max-width: 768px)': {
        width: `${props.headingSize?.mobWidth}em` || '6em',
        height: `${props.headingSize?.mobHeight}em` || '3em',
      },
    },
    cardsAvatar: {
      width: `${props.cardSize?.webWidth}em` || '6em',
      height: `${props.cardSize?.webHeight}em` || '6em',
      margin: '0.1em',
      '@media (max-width:768px)': {
        width: `${props.cardSize?.mobWidth}em` || '4em',
        height: `${props.cardSize?.mobHeight}em` || '4em',
      },
    },
  }))
  const classes = useStyles()

  return (
    <div className="my-farm-list">
      <Grid
        container
        justify={props.headingAlign || 'center'}
        className={classes.titleHeading}
      >
        {props.cardTitle ? (
          <Avatar
            variant={props.variant || 'square'}
            src={`${process.env.PUBLIC_URL}/assets/my-exports/${props.cardTitle}`}
            className={classes.headingAvatar}
          ></Avatar>
        ) : (
          <h4>{props.title}</h4>
        )}
      </Grid>
      <Grid
        container
        direction="row"
        justify="space-around"
        alignItems="center"
      >
        {props.dataList.map((item, index) => (
          <Grid
            key={index}
            xs={6}
            lg={props.cardsView || 2}
            md={4}
            item
            container
            direction="row"
            className="listItem"
            alignItems="center"
          >
            <Grid item container justify="center">
              <Grid>
                <Avatar
                  to={item.link}
                  component={Link}
                  variant={props.variant || 'square'}
                  className={classes.cardsAvatar}
                  src={`${process.env.PUBLIC_URL}/assets/my-exports/${item.icon}`}
                >
                  {item.name}
                </Avatar>
              </Grid>
              {/* <Grid className={classes.color}>{item.name}</Grid> */}
            </Grid>
          </Grid>
        ))}
      </Grid>
      {/* <Grid container justify="center" alignItems="flex-end" m={3}>
        <Button className={classes.feedConnect} variant="contained">
          <b>Connect FEED </b>
          <Icon className="fas fa-angle-double-right"></Icon>
        </Button>
      </Grid> */}
    </div>
  )
}
