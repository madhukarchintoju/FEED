import React, { useState } from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import i18n from 'i18next'
import SwipeableNav from '../swipeableNav/swipeableNav'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import { Divider } from '@material-ui/core'

export default function Header() {
  const { t } = useTranslation()
  const languageChange = (event) => {
    i18n.changeLanguage(event.target.value)
  }
  const isMobile = window.innerWidth > 869 ? false : true
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
            src={`${process.env.PUBLIC_URL}/assets/home/feedlogonewtitle.png`}
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
                width="20"
                alt="phone-icon"
              />{' '}
              <span>+91 9293858689</span>
            </div>
            <div className="my-auto text-white contact-mail">
              <img
                src={`${process.env.PUBLIC_URL}/assets/email.svg`}
                width="20"
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
            <div className="btn-group">
              <button className="download-btn btn-primary mr-1">
                <i className="fa fa-download" aria-hidden="true"></i>{' '}
                <span className="download-btn-text">Downloads</span>
              </button>
              <Link to="/mediapage">
                <button className="btn-primary mr-1">Media</button>
              </Link>
              <button className="btn-primary">Blogs</button>
            </div>
            {/* <div>
              <ul className='nav'>
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Media
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Blogs
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Prices
                  </Link>
                </li>
              </ul>
            </div> */}
            {/* <div className="my-auto search-bar">
              <form className="form-inline">
                <div className="form-group has-search">
                  <input
                    type="text"
                    placeholder="Search"
                  />
                </div>
              </form>
            </div> */}
            {window.innerWidth > 425 ? (
              <div className="my-auto header-social-icons">
                <a
                  href="https://www.facebook.com/FEEDORGOFFICAL"
                  target="_blank"
                >
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/facebook.svg`}
                    width="25"
                    alt="facebook-icon"
                  />
                </a>
                <a href="https://www.instagram.com" target="_blank">
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/instagram.svg`}
                    width="25"
                    alt="instagram-icon"
                  />
                </a>
                <a href="https://twitter.com/feedorg_" target="_blank">
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/twitter.svg`}
                    width="25"
                    alt="twitter-icon"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/company/74678041/admin/"
                  target="_blank"
                >
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/linkedin.svg`}
                    width="25"
                    alt="linkedin-icon"
                  />
                </a>
                <a
                  href="https://www.youtube.com/channel/UCFE_feyAd4VsbMLDnUWIY4A"
                  target="_blank"
                >
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/youtube.svg`}
                    width="25"
                    alt="youtube-icon"
                  />
                </a>
              </div>
            ) : (
              ''
            )}
          </div>
          <div className="row white-bg">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 resp-logo-title">
              <div className="resp-mobile-logo d-lg-none d-xl-none">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/home/feedlogonewtitle.png`}
                  className="feed-logo-img img-fluid"
                  alt="feed-logo"
                  // width="60%"
                />
              </div>
              <div>
                <h5 className="m-2 title text-center">
                  FARM TO FOREIGN EXPORTS ENTERPRENEURSHIP DEVELOPMENT MULTI
                  STATE COOPERATIVE SOCIETY LTD.
                </h5>
                <p className="reg-no text-right m-0">
                  REG.No: MSCS/CR/1295/2020
                </p>
              </div>
            </div>
          </div>
          <div
            className="row green-stripe"
            style={{
              backgroundImage: `URL("${process.env.PUBLIC_URL}/assets/green-bg.png")`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              // backgroundImage: 'linear-gradient(to right top, #30680c, #346f0f, #387712, #3d7e15, #418618, #3e8217, #3c7d16, #397915, #2f6910, #26590b, #1d4906, #153a01)'
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
                    <i className="fa fa-bars p-0" aria-hidden="true"></i>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-3">
                      <li className="nav-item">
                        <Link className="nav-link" to="/">
                          {t('home')} <span className="sr-only">(current)</span>
                        </Link>
                      </li>
                      <li className="nav-item dropdown">
                        <Link
                          to="/"
                          className="nav-link dropdown-toggle"
                          id="navbarDropdown"
                          role="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          {t('about_us')}{' '}
                        </Link>
                        <div
                          className="dropdown-menu"
                          aria-labelledby="navbarDropdown"
                        >
                          <Link to="/" className="dropdown-item">
                            Founder Message
                          </Link>
                          <Link to="/" className="dropdown-item">
                            Board of Directors
                          </Link>
                          <Link to="/" className="dropdown-item">
                            Core Team
                          </Link>
                          <Link to="/" className="dropdown-item">
                            Company Profile
                          </Link>
                        </div>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/serviceSection">
                          {t('services')}{' '}
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/eventSection">
                          {t('Events & Updates')}{' '}
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/myexports">
                          Export Road Map
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
                      {/* <li className="nav-item">
                        <Link className="nav-link" to="/">
                          Media
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/">
                          Blogs
                        </Link>
                      </li> */}
                      <li className="nav-item">
                        <Link className="nav-link" to="/mydashboard">
                          Prices
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/contactus">
                          {t('contact_us')}{' '}
                        </Link>
                      </li>
                    </ul>
                    <ul className="navbar-nav ml-auto">
                      <Link to="/login" className="nav-link my-auto">
                        <button className="login-btn">{t('login_caps')}</button>
                      </Link>
                      <Link to="/register" className="nav-link">
                        <button className="register-btn">
                          {t('register_caps')}
                        </button>
                      </Link>
                    </ul>
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
