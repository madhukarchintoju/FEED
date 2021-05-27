import React, { useState } from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import i18n from 'i18next'
import SwipeableNav from '../swipeableNav/swipeableNav'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

export default function Header() {
  const { t } = useTranslation()
  const languageChange = (event) => {
    i18n.changeLanguage(event.target.value)
  }
  const isMobile = window.innerWidth > 769 ? false : true
  const [open, setOpen] = useState(false)
  const toggleDrawer = () => {
    setOpen(true)
  }

  const navOpened = () => {
    setOpen(false)
  }

  return (
    <>
      <div className="row container-fluid sticky-header header-top wrapper">
        <div className="feed-logo">
          <img
            src={`${process.env.PUBLIC_URL}/assets/feed.png`}
            className="feed-logo-img"
            alt="feed-logo"
          />
        </div>
        <div className="col nav-wrap">
          <div
            className="row orange-stripe"
            style={{
              display: 'flex',
              justifyContent: 'space-around',
              padding: '5px',
              backgroundImage: `URL("${process.env.PUBLIC_URL}/assets/orange-bg.png")`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
            }}
          >
            <div className="my-auto text-white contact-num">
              <img
                src={`${process.env.PUBLIC_URL}/assets/phone.svg`}
                width="25"
                alt="phone-icon"
              />{' '}
              <span>+91 9293858689</span>
            </div>
            <div className="my-auto text-white contact-mail">
              <img
                src={`${process.env.PUBLIC_URL}/assets/email.svg`}
                width="25"
                alt="email-icon"
              />{' '}
              <span>info@feedorg.com</span>
            </div>
            <div className="my-auto">
              <form>
                <select
                  className="lng-select form-control"
                  onChange={languageChange}
                >
                  <option value="default">Language</option>
                  <option value="en">English</option>
                  <option value="te">Telugu</option>
                  <option value="hin">Hindi</option>
                </select>
              </form>
            </div>
            <div className="my-auto">
              <button className="btn btn-primary download-btn form-control">
                <i className="fa fa-download" aria-hidden="true"></i>{' '}
                <span className="download-btn-text">Downloads</span>
              </button>
            </div>
            <div className="my-auto search-bar">
              <form className="form-inline">
                <div className="form-group has-search">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search"
                  />
                  {/* <span className="fa fa-search form-control-feedback"></span> */}
                </div>
              </form>
            </div>
            <div className="my-auto header-social-icons">
              <a href="">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/facebook.svg`}
                  width="30"
                  alt="facebook-icon"
                />
              </a>
              <a href="">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/instagram.svg`}
                  width="30"
                  alt="instagram-icon"
                />
              </a>
              <a href="">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/twitter.svg`}
                  width="30"
                  alt="twitter-icon"
                />
              </a>
              <a href="">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/linkedin.svg`}
                  width="30"
                  alt="linkedin-icon"
                />
              </a>
              <a href="">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/youtube.svg`}
                  width="30"
                  alt="youtube-icon"
                />
              </a>
            </div>
          </div>
          <div className="row white-bg">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 resp-logo-title">
              <div className="resp-mobile-logo d-lg-none d-xl-none">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/feed.png`}
                  className="feed-logo-img img-fluid"
                  alt="feed-logo"
                />
              </div>
              <div>
                <h5 className="m-2 title text-center">
                  FARM TO FOREIGN EXPORTS ENTERPRENEURSHIP DEVELOPMENT MULTI
                  STATE COOPERATIVE SOCIETY LTD.
                </h5>
                <h6 className="reg-no text-right m-0">
                  REG.No: MSCS/CR/1295/2020
                </h6>
              </div>
            </div>
          </div>
          <div
            className="row green-stripe"
            style={{
              backgroundImage: `URL("${process.env.PUBLIC_URL}/assets/green-bg.png")`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
            }}
          >
            {isMobile ? (
              <>
                <Toolbar>
                  <IconButton onClick={toggleDrawer}>
                    <MenuIcon />
                  </IconButton>
                </Toolbar>
                <SwipeableNav open={open} navOpened={navOpened} />
              </>
            ) : (
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 p-0">
                <nav className="navbar navbar-expand-lg nav-list p-0">
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <i className="fa fa-bars" aria-hidden="true"></i>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-5">
                      <li className="nav-item active">
                        {/* <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a> */}
                        <Link className="nav-link" to="/">
                          {t('home')} <span className="sr-only">(current)</span>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/analytics">
                          {t('analytics')}{' '}
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/aboutSection">
                          {t('about_us')}{' '}
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/serviceSection">
                          {t('services')}
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/eventSection">
                          {t('events')}{' '}
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/feedWorkingSection">
                          {t('how_feed_works')}{' '}
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/myfpo">
                          {t('fpo')}{' '}
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/myexport">
                          {t('exports')}{' '}
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="">
                          {t('contact_us')}{' '}
                        </Link>
                      </li>
                    </ul>
                    <Link to="/login" className="nav-link my-auto">
                      <button className="login-btn">{t('login_caps')}</button>
                    </Link>
                    <Link to="/register" className="nav-link">
                      <button className="register-btn">
                        {t('register_caps')}
                      </button>
                    </Link>
                  </div>
                </nav>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
