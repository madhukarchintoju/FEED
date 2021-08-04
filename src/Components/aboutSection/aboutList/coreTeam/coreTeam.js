import React from 'react'
import './coreTeam.css'
import { Grid, makeStyles } from '@material-ui/core'

export default function CoreTeam() {
  const coreTeamDetails = [
    {
      name: 'Alice Liddel',
      designation: 'Software Developer',
    },
    {
      name: 'Alice Liddel',
      designation: 'Software Developer',
    },
    {
      name: 'Alice Liddel',
      designation: 'Software Developer',
    },
    {
      name: 'Alice Liddel',
      designation: 'Software Developer',
    },
    {
      name: 'Alice Liddel',
      designation: 'Software Developer',
    },
    {
      name: 'Alice Liddel',
      designation: 'Software Developer',
    },
    {
      name: 'Alice Liddel',
      designation: 'Software Developer',
    },
    {
      name: 'Alice Liddel',
      designation: 'Software Developer',
    },
  ]
  return (
    <>
      <section className="team-page-section">
        <Grid container>
          <Grid container justify="center" className="coreTeam-title">
            <h2 className="title tracking-in-contract">Our Sharp Shooters</h2>
          </Grid>
          <Grid container lg={12}>
            <Grid className="row clearfix m-0">
              {coreTeamDetails.map((item, index) => (
                <div
                  className="team-block col-lg-3 col-md-4 col-sm-12"
                  key={index}
                >
                  <div
                    className="inner-box wow fadeInLeft"
                    data-wow-delay="0ms"
                    data-wow-duration="1500ms"
                  >
                    <ul className="social-icons">
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-skype"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                      </li>
                    </ul>
                    <div className="image">
                      <a href="#">
                        <img
                          src="https://i.ibb.co/JC4skS0/team-animate.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="lower-content">
                      <h3>{item.name}</h3>
                      <div className="designation">{item.designation}</div>
                    </div>
                  </div>
                </div>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </section>
    </>
  )
}
