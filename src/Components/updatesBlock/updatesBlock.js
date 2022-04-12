import React from 'react'
import {
  Grid,
  makeStyles,
  List,
  ListItem,
  ListItemText,
  Divider,
  Avatar,
} from '@material-ui/core'
import Slider from 'react-slick'

function UpdatesBlock(props) {
  const settings = {
    arrows: false,
    autoplay: true,
    speed: 200,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
  }

  const useStyles = makeStyles((theme) => ({
    updatesBlockWrap: {
      borderRadius: '25px 25px',
      padding: '5px',
      // boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)',
      // webkitBoxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)',
      // mozBoxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)',
      boxShadow: '0px 0px 15px 0px rgba(125,125,125,0.75)',
    },
    newsfeeds: {
      // overflow: 'auto',
      // width:'70',
      height: '460px',
      backgroundColor: 'white',
      padding: 0,
    },
    updatesBlockHeading: {
      display: 'flex',
      justifyContent: 'center',
      height: '2em',
      alignItems: 'center',
      borderRadius: '25px 25px 0px 0px',
      // backgroundColor: '#f08e16',
      background: 'rgba(232, 159, 95,0.5)',
      color: 'black',
    },
  }))
  const classes = useStyles()
  const updatesData = [
    {
      logo: props.logo,
      primaryText: props.primary,
      secondary: props.secondary,
      link: props.link,
    },
  ]
  return (
    <>
      <Grid className={classes.updatesBlockWrap}>
        <h6 className={classes.updatesBlockHeading}>Central / State Updates</h6>
        <Grid style={{ height: '460px', overflow: 'hidden' }}>
          {/* <Slider {...settings}> */}
          {/* {updatesData.map((item, index) => ( */}
          <Grid container justifyContent="space-around">
            <Grid container justifyContent="space-around">
              <Grid item lg={2}>
                <img
                  src={`${process.env.PUBLIC_URL}/assets/eventupdates/${props.logo}`}
                  width="100"
                  alt=""
                />
              </Grid>
              <Grid item lg={9}>
                <ListItemText
                  primary={props.primary}
                  secondary={props.secondary}
                />
                <small>
                  <a href={props.link} target="_blank" rel="noreferrer">
                    Click Here
                  </a>
                </small>
              </Grid>
            </Grid>
            <Divider />
          </Grid>
          {/* ))} */}

          {/* </Slider> */}
        </Grid>
      </Grid>
    </>
  )
}

export default UpdatesBlock
