import React from 'react'
import './myItDm.css'
import { Grid } from '@material-ui/core'
export default function MyItDm() {
  return (
    <>
      <Grid>
        <Grid container justify="center">
          <img
            src={`${process.env.PUBLIC_URL}/assets/my-dashboard/itdm/marketingbanner.png`}
            width="30%"
            alt="..."
          />
        </Grid>
        <Grid>
          <Grid container lg={12} item justify="space-around">
            <Grid className="card cards__item webDevCard">
              <div className="card__frame">
                <div className="card__picture">
                  <img
                    src="https://image.flaticon.com/icons/svg/1336/1336494.svg"
                    alt=""
                    width="120"
                  />
                </div>
                <h5 className="card__title">
                  Website Design &amp; Development
                </h5>
              </div>
              <div className="card__overlay"></div>
              <div className="card__content">
                <h6 className="card__title">
                  Website Design &amp; Development
                </h6>
                <ul>
                  <li>Concept, Ideation &amp; Wireframe</li>
                  <li>User Experience(UX) &amp; User Interface for Web app</li>
                  <li>Wordpress &amp; Ecommerce Websites</li>
                  <li>Graphic Layout Designing</li>
                  <li>Templates</li>
                </ul>
              </div>
            </Grid>
            <Grid className="card cards__item SocialMediaCard">
              <div className="card__frame">
                <div className="card__picture">
                  <img
                    src="https://image.flaticon.com/icons/svg/1496/1496034.svg"
                    alt=""
                    width="120"
                  />
                </div>
                <h2 className="card__title">Social Media Marketing</h2>
              </div>
              <div className="card__overlay"></div>
              <div className="card__content">
                <h2 className="card__title">Social Media Marketing</h2>
                <ul>
                  <li>Facebook + Instagram Marketing</li>
                  <li>Youtube + Google Marketing</li>
                  <li>Twitter Marketing</li>
                  <li>Online Reputation Management</li>
                </ul>
              </div>
            </Grid>
            <Grid className="card cards__item GoogleMarketingcard">
              <div className="card__frame">
                <div className="card__picture">
                  <img
                    src="https://image.flaticon.com/icons/svg/478/478543.svg"
                    alt=""
                    width="120"
                  />
                </div>
                <h4 className="card__title">Google Marketing</h4>
              </div>
              <div className="card__overlay"></div>
              <div className="card__content">
                <h4 className="card__title">Google Marketing</h4>
                <ul>
                  <li>Google Display Network</li>
                  <li>Search Engine Optimization</li>
                </ul>
              </div>
            </Grid>
          </Grid>
        </Grid>
        <Grid>
          <Grid container lg={12} item justify="space-around">
            <Grid className="card cards__item mobileAppCard">
              <div className="card__frame">
                <div className="card__picture">
                  <img
                    src="https://image.flaticon.com/icons/svg/1336/1336494.svg"
                    alt=""
                    width="120"
                  />
                </div>
                <h4 className="card__title">Mobile App Development</h4>
              </div>
              <div className="card__overlay"></div>
              <div className="card__content">
                <h4 className="card__title">Mobile App Development</h4>
                <ul>
                  <li>Concept, Ideation &amp; Wireframe</li>
                  <li>User Experience(UX) &amp; User Interface for Web app</li>
                  <li>Wordpress &amp; Ecommerce Websites</li>
                  <li>Graphic Layout Designing</li>
                  <li>Templates</li>
                </ul>
              </div>
            </Grid>
            <Grid className="card cards__item smsCard">
              <div className="card__frame">
                <div className="card__picture">
                  <img
                    src="https://image.flaticon.com/icons/svg/1496/1496034.svg"
                    alt=""
                    width="120"
                  />
                </div>
                <h2 className="card__title">Bulk SMS &amp; IVR Calls</h2>
              </div>
              <div className="card__overlay"></div>
              <div className="card__content">
                <h2 className="card__title">Bulk SMS &amp; IVR Calls</h2>
                <ul>
                  <li>Facebook + Instagram Marketing</li>
                  <li>Youtube + Google Marketing</li>
                  <li>Twitter Marketing</li>
                  <li>Online Reputation Management</li>
                </ul>
              </div>
            </Grid>
            <Grid className="card cards__item offlineMarketingCard">
              <div className="card__frame">
                <div className="card__picture">
                  <img
                    src="https://image.flaticon.com/icons/svg/478/478543.svg"
                    alt=""
                    width="120"
                  />
                </div>
                <h4 className="card__title">Offline Marketing</h4>
              </div>
              <div className="card__overlay"></div>
              <div className="card__content">
                <h4 className="card__title">Offline Marketing</h4>
                <ul>
                  <li>Google Display Network</li>
                  <li>Search Engine Optimization</li>
                </ul>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}
