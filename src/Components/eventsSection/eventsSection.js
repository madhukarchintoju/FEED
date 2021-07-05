import React, { useState } from 'react'
import './eventsSection.css'
import {
  Grid,
  makeStyles,
  List,
  ListItem,
  ListItemText,
  Typography,
  Divider,
} from '@material-ui/core'
// import { Swiper, SwiperSlide } from "swiper/react";
// import SwiperCore, { Pagination } from 'swiper/core';

// import "swiper/swiper.min.css";
// import "swiper/components/pagination/pagination.min.css";
// SwiperCore.use([Pagination]);
export default function EventsSection() {
  // const Images = [
  //   'assets/event-img-one.jpg',
  //   'assets/event-img-two.jpg',
  //   'assets/event-img-three.jpg',
  //   'assets/event-img-four.jpg',
  // ]
  // const [selectedImg, setSelectedImg] = useState(Images[0])
  const useStyles = makeStyles((theme) => ({
    eventupdatesWrap: {
      boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)',
      webkitBoxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)',
      mozBoxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)',
    },
    newsfeeds: {
      overflow: 'auto',
      height: '500px',
      backgroundColor: 'white',
    },
    newsfeedsHeading: {
      height: '2em',
      textAlign: 'center',
      backgroundColor: '#ce9bff',
    },
  }))
  const eventsupdates = [
    {
      primary: 'FEED',
      secondary:
        'FEED is a multi-state co-operative society working for the uplift.',
    },
    {
      primary: 'NABARD',
      secondary:
        'FEED is a multi-state co-operative society working for the uplift.',
    },
    {
      primary: 'FEED',
      secondary:
        'FEED is a multi-state co-operative society working for the uplift.',
    },
    {
      primary: 'FEED',
      secondary:
        'FEED is a multi-state co-operative society working for the uplift.',
    },
    {
      primary: 'FEED',
      secondary:
        'FEED is a multi-state co-operative society working for the uplift.',
    },
    {
      primary: 'FEED',
      secondary:
        'FEED is a multi-state co-operative society working for the uplift.',
    },
    {
      primary: 'FEED',
      secondary:
        'FEED is a multi-state co-operative society working for the uplift.',
    },
  ]
  const eventImg = [
    {
      image: 'underconstruction.jpg',
      link: '/myfpo',
    },
    {
      image: 'feedstartupbnr.jpg',
      link: '',
    },
    {
      image: 'feedbnrtwo.jpeg',
      link: '',
    },
  ]
  const classes = useStyles()
  return (
    <>
      <Grid id="eventsUpdates" className="events-section">
        <div className="row m-0">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <Grid container justify="center">
              <h3 className="section-heading text-center">
                Events &amp; Updates
              </h3>
            </Grid>
            <Grid container>
              <Grid className="col-lg-3 col-md-12 col-sm-12 col-xs-12">
                <Grid className={classes.eventupdatesWrap}>
                  <h6 className={classes.newsfeedsHeading}>
                    Central / State Updates
                  </h6>
                  <List className={classes.newsfeeds}>
                    {eventsupdates.map((item, index) => (
                      <Grid key={index}>
                        <ListItem alignItems="flex-start">
                          <Grid container justify="space-between">
                            <Grid item lg={4}>
                              <img
                                src={`${process.env.PUBLIC_URL}/assets/testimonials/farmerone.png`}
                                width="100"
                                alt=""
                              />
                            </Grid>
                            <Grid item lg={7}>
                              <ListItemText
                                primary={item.primary}
                                secondary={item.secondary}
                              />
                            </Grid>
                          </Grid>
                        </ListItem>
                        <Divider />
                      </Grid>
                    ))}
                  </List>
                </Grid>
              </Grid>
              {/* <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                <div className="row">
                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 event-images-wrap">
                    <div className="selected-img-wrap">
                      <img
                        src={selectedImg}
                        alt="selected"
                        className="selected"
                      />
                    </div>
                    <div className="imgContainer">
                      {Images.map((img, index) => (
                        <img
                          style={{
                            border:
                              selectedImg === img ? '4px solid purple' : '',
                          }}
                          key={index}
                          src={img}
                          alt="dog"
                          onClick={() => setSelectedImg(img)}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div> */}
              <Grid item lg={6}>
                <Grid container justify="space-around">
                  <Grid item lg={8} style={{ border: '1px solid red' }}>
                    <img
                      src={`${process.env.PUBLIC_URL}/assets/event-img-one.jpg`}
                      alt=""
                      width="100%"
                    />
                  </Grid>
                  <Grid item lg={4} style={{ border: '1px solid red' }}>
                    <img
                      src={`${process.env.PUBLIC_URL}/assets/event-img-two.jpg`}
                      alt=""
                      width="100%"
                    />
                  </Grid>
                </Grid>
                <Grid container justify="space-around">
                  <Grid item lg={4} style={{ border: '1px solid red' }}>
                    <Grid style={{ border: '1px solid red' }}>
                      <img
                        src={`${process.env.PUBLIC_URL}/assets/event-img-three.jpg`}
                        alt=""
                        width="100%"
                      />
                    </Grid>
                    <Grid style={{ border: '1px solid red' }}>
                      <img
                        src={`${process.env.PUBLIC_URL}/assets/event-img-four.jpg`}
                        alt=""
                        width="100%"
                      />
                    </Grid>
                  </Grid>
                  <Grid item lg={4} style={{ border: '1px solid red' }}>
                    <Grid>
                      <img
                        src={`${process.env.PUBLIC_URL}/assets/event-img-three.jpg`}
                        alt=""
                        width="100%"
                        height="100%"
                      />
                    </Grid>
                  </Grid>
                  <Grid item lg={4} style={{ border: '1px solid red' }}>
                    <Grid style={{ border: '1px solid red' }}>
                      <img
                        src={`${process.env.PUBLIC_URL}/assets/event-img-three.jpg`}
                        alt=""
                        width="100%"
                      />
                    </Grid>
                    <Grid style={{ border: '1px solid red' }}>
                      <img
                        src={`${process.env.PUBLIC_URL}/assets/event-img-two.jpg`}
                        alt=""
                        width="100%"
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid className="col-lg-3 col-md-12 col-sm-12 col-xs-12">
                <Grid className={classes.eventupdatesWrap}>
                  <h6 className={classes.newsfeedsHeading}>
                    Central / State Updates
                  </h6>
                  <List className={classes.newsfeeds}>
                    {eventsupdates.map((item, index) => (
                      <Grid key={index}>
                        <ListItem alignItems="flex-start">
                          <Grid container justify="space-between">
                            <Grid item lg={4}>
                              <img
                                src={`${process.env.PUBLIC_URL}/assets/testimonials/farmertwo.jpg`}
                                width="100"
                                alt=""
                              />
                            </Grid>
                            <Grid item lg={7}>
                              <ListItemText
                                primary={item.primary}
                                secondary={item.secondary}
                              />
                            </Grid>
                          </Grid>
                        </ListItem>
                        <Divider />
                      </Grid>
                    ))}
                  </List>
                </Grid>
              </Grid>
            </Grid>
          </div>
        </div>
      </Grid>
    </>
  )
}
