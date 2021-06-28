import React from 'react'
import './feedWorkingSection.css'
import { Grid, makeStyles, Avatar } from '@material-ui/core'

export default function FeedWorkingSection() {
  return (
    <>
      <section id="howFeedWorks">
        <div className="row m-0">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <Grid container justify="center">
              <h3 className="section-heading text-center">How FEED Works</h3>
            </Grid>
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 m-auto p-0 video-wrap">
                <iframe
                  width="100%"
                  height="500"
                  src="https://www.youtube.com/embed/Ov8rF8MjXrY"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <Grid></Grid>
          </div>
        </div>
      </section>
    </>
  )
}
