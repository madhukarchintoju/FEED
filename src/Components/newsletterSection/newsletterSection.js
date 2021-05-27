import React from 'react'
import './newsletterSection.css'

export default function NewsletterSection() {
  return (
    <>
      <section className="newsletter-section-wrap">
        <div className="row m-0">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="row">
              <div className="col-lg-10 col-md-12 col-sm-12 col-xs-12 newsletter-section">
                <div className="row">
                  <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                    <h2>Newsletter Signup</h2>
                  </div>
                  <div className="col-lg-8 col-md-12 col-sm-12 col-xs-12">
                    <form>
                      <div className="row">
                        <div className="col-lg-10 col-md-12 col-sm-12 col-xs-12">
                          <input
                            type="email"
                            placeholder="Enter Email"
                            className="form-control"
                          />
                        </div>
                        <div className="col-lg-2 col-md-12 col-sm-12 col-xs-12">
                          <button className="btn btn-danger">Subscribe</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <p style={{ fontWeight: 'bold' }}>
                      GET THE LATEST UPDATES ON AGRI
                    </p>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries,
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
