import React from 'react'
import './feedWorkingSection.css'

export default function FeedWorkingSection() {
  return (
    <>
      <section id="howFeedWorks">
        <div className="row m-0">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="row">
              <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12 m-auto">
                <h3 className="section-heading text-center">How FEED Works</h3>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 m-auto p-0">
                <video
                  width="100%"
                  height="565"
                  controls
                  className="feed-video"
                >
                  <source src="assets/feed-video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
