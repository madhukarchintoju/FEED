import React, { useState } from 'react'
import './feedWorkingSection.css'
import { Grid, makeStyles } from '@material-ui/core'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.min.css'
import 'swiper/components/scrollbar/scrollbar.min.css'
import SwiperCore, { Scrollbar, Mousewheel } from 'swiper/core'
SwiperCore.use([Scrollbar, Mousewheel])

const useStyles = makeStyles((theme) => ({
  FeedWorkingSectionWrap: {
    marginTop: '2em',
    padding: '1em',
    // backgroundColor: '#DCD9D4',
    // backgroundImage: 'linear-gradient(to bottom, rgba(255,255,255,0.50) 0%, rgba(0,0,0,0.50) 100%), radial-gradient(at 50% 0%, rgba(255,255,255,0.10) 0%, rgba(0,0,0,0.50) 50%)',
    // backgroundBlendMode: 'soft-light,screen',
    borderRadius: '20px 20px',
    backgroundImage: 'linear-gradient(120deg, #a1c4fd 0%, #ff9c9c 100%)',
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
  },
  recomvideocard: {
    borderTopLeftRadius: '5px',
    borderBottomLeftRadius: '5px',
    marginBottom: '4px',
    backgroundColor: 'white',
  },
}))
const recommendedVideos = [
  {
    srclink: 'https://www.youtube.com/embed/ka-nmA0DOAI',
  },
  {
    srclink: 'https://www.youtube.com/embed/bOkzpur79Us',
  },
  {
    srclink: 'https://www.youtube.com/embed/Ov8rF8MjXrY',
  },
  {
    srclink: 'https://www.youtube.com/embed/ka-nmA0DOAI',
  },
  {
    srclink: 'https://www.youtube.com/embed/bOkzpur79Us',
  },
  {
    srclink: 'https://www.youtube.com/embed/Ov8rF8MjXrY',
  },
]
export default function FeedWorkingSection() {
  const Images = [
    'assets/event-img-one.jpg',
    'assets/event-img-two.jpg',
    'assets/event-img-three.jpg',
    'assets/event-img-four.jpg',
  ]
  const [selectedImg, setSelectedImg] = useState(Images[0])
  const classes = useStyles()
  return (
    <>
      <Grid id="howFeedWorks" className={classes.FeedWorkingSectionWrap}>
        <div className="row m-0">
          <Grid container justify="center">
            <h3 className={classes.feedWorksHeading}>How FEED Works</h3>
          </Grid>
          <Grid container justify="space-around">
            <Grid item lg={7} md={7} className={classes.mainVideo}>
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/Ov8rF8MjXrY"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ borderRadius: '15px 15px' }}
              ></iframe>
            </Grid>
            <Grid item lg={4} md={4}>
              {/* <Swiper direction={'vertical'} slidesPerColumn={'auto'} freeMode={true} scrollbar={true} mousewheel={true} className='mySwiper'>
                <SwiperSlide> */}
              <Grid className={classes.recomvideos}>
                {recommendedVideos.map((item, index) => (
                  <Grid item xs={12} key={index}>
                    <Grid
                      container
                      justify="space-between"
                      className={classes.recomvideocard}
                    >
                      <Grid item lg={7} md={6} sm={6} xs={6}>
                        <iframe
                          width="100%"
                          height="100%"
                          src={item.srclink}
                          title="YouTube video player"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          style={{
                            borderTopLeftRadius: '5px',
                            borderBottomLeftRadius: '5px',
                          }}
                        ></iframe>
                      </Grid>
                      <Grid item lg={4} md={5} sm={5} xs={6}>
                        <h6>How To start Exports</h6>
                        <small>
                          lorem ipsum rem web development request lorem. lorem
                          ipsum rem web development request lorem
                        </small>
                      </Grid>
                    </Grid>
                  </Grid>
                ))}
              </Grid>
              {/* </SwiperSlide>
              </Swiper> */}
            </Grid>
          </Grid>
        </div>
      </Grid>
    </>
  )
}
