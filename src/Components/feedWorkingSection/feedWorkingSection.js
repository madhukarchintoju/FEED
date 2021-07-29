import React, { useState, useEffect } from 'react'
import './feedWorkingSection.css'
import { Grid, makeStyles } from '@material-ui/core'
import ReactPlayer from 'react-player'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.min.css'
import 'swiper/components/scrollbar/scrollbar.min.css'
import SwiperCore, { Scrollbar, Mousewheel } from 'swiper/core'
SwiperCore.use([Scrollbar, Mousewheel])

const useStyles = makeStyles((theme) => ({
  FeedWorkingSectionWrap: {
    // marginTop: '2em',
    // padding: '1em',
    // backgroundColor: '#DCD9D4',
    // backgroundImage: 'linear-gradient(to bottom, rgba(255,255,255,0.50) 0%, rgba(0,0,0,0.50) 100%), radial-gradient(at 50% 0%, rgba(255,255,255,0.10) 0%, rgba(0,0,0,0.50) 50%)',
    // backgroundBlendMode: 'soft-light,screen',
    // borderRadius: '20px 20px',
    padding: '8px',
    // backgroundImage: 'linear-gradient(120deg, #a1c4fd 0%, #ff9c9c 100%)',
    // backgroundColor:'#ff9c9c',
  },
  feedWorksHeading: {
    backgroundColor: 'white',
    color: 'black',
    borderRadius: '15px 15px',
    padding: '10px',
    boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)',
    webkitBoxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)',
    mozBoxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)',
  },
  videoWrap: {
    flexGrow: 1,
  },
  paper: {
    padding: '2px',
    textAlign: 'center',
    color: 'black',
  },
  mainVideo: {
    borderRadius: '15px 15px',
    boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)',
    webkitBoxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)',
    mozBoxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)',
  },
  recomvideos: {
    overflow: 'auto',
    height: '450px',
    // border: '3px solid black'
  },
  recomvideocard: {
    border: '1px solid #f1be5f',
    // borderTopLeftRadius: '5px',
    // borderBottomLeftRadius: '5px',
    marginBottom: '4px',
    backgroundColor: 'white',
  },
}))
const recommendedVideos = [
  {
    title: 'FARM TO FOREIGN EXPORTS',
    srclink: 'https://www.youtube.com/embed/ka-nmA0DOAI',
  },
  {
    title: 'Feed Exports',
    srclink: 'https://www.youtube.com/embed/bOkzpur79Us',
  },
  {
    title: 'Feed Hand Hold Farmers',
    srclink: 'https://www.youtube.com/embed/Ov8rF8MjXrY',
  },
  {
    title: 'FARM TO FOREIGN EXPORTS',
    srclink: 'https://www.youtube.com/embed/ka-nmA0DOAI',
  },
  {
    title: 'Feed Exports',
    srclink: 'https://www.youtube.com/embed/bOkzpur79Us',
  },
  {
    title: 'Feed Hand Hold Farmers',
    srclink: 'https://www.youtube.com/embed/Ov8rF8MjXrY',
  },
]
// const regTitle = recommendedVideos[0].title.slice(0,15)
// console.log(regTitle)
export default function FeedWorkingSection() {
  const classes = useStyles()
  const [selectedVideo, setSelectedVideo] = useState([
    recommendedVideos[0].srclink,
  ])
  return (
    <>
      <Grid id="howFeedWorks" className="mt-3">
        <div className="row m-0">
          <Grid container justifyContent="center">
            <img
              src={`${process.env.PUBLIC_URL}/assets/videosection/howfeedworks.png`}
              alt="How FEED Works"
            />
          </Grid>
          <Grid
            container
            justifyContent="space-evenly"
            className={classes.FeedWorkingSectionWrap}
          >
            <Grid
              item
              lg={7}
              md={7}
              sm={12}
              xs={12}
              className={classes.mainVideo}
            >
              <iframe
                width="100%"
                height="100%"
                src={selectedVideo}
                // src="https://www.youtube.com/embed/Ov8rF8MjXrY?autoplay=1&mute=1&enablejsapi=1"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ borderRadius: '15px 15px' }}
              ></iframe>
            </Grid>
            <Grid item lg={4} md={4}>
              <Grid
                className={classes.recomvideos}
                style={{ borderRadius: '15px 15px' }}
              >
                {recommendedVideos.map((item, index) => (
                  <Grid item xs={12} key={index}>
                    <Grid
                      container
                      justifyContent="space-between"
                      className={classes.recomvideocard}
                    >
                      <div className="" style={{ maxWidth: '500px' }}>
                        <div className="row no-gutters justify-content-between">
                          <div
                            className="col-sm-5"
                            style={{ background: '#868e96' }}
                          >
                            <ReactPlayer
                              width="100%"
                              height="100%"
                              url={item.srclink}
                              title="YouTube video player"
                              frameBorder="0"
                              allow="accelerometer; muted; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                            ></ReactPlayer>
                          </div>
                          <div
                            className="col-sm-6"
                            onClick={() => setSelectedVideo(item.srclink)}
                            style={{ cursor: 'pointer' }}
                          >
                            <div className="card-body">
                              <h6>{item.title}</h6>
                              <p className="card-text">
                                Alice is a freelance web designer and developer
                                based in London.
                              </p>
                              <button
                                key={index}
                                onClick={() => setSelectedVideo(item.srclink)}
                                className="btn btn-danger"
                              >
                                <i className="far fa-play-circle"></i> Play
                                Video
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Grid>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </div>
      </Grid>
      {/* <ReactPlayer url={selectedVideo}></ReactPlayer>
      {videolinks.map((item, index) => (
        <button key={index} onClick={()=> setSelectedVideo(item)}>select</button>
      ))} */}
    </>
  )
}
