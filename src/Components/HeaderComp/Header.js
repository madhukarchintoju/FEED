import React, { useState } from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import i18n from 'i18next'

export default function Header() {
    const { t } = useTranslation()
    const languageChange = (event) => {
        i18n.changeLanguage(event.target.value)
    }

    return (
        <>
            <div className="row container-fluid sticky-header header-top">
                <div className="feed-logo">
                    <img
                        src="assets/feed.png"
                        className="img-fluid feed-logo-img"
                        alt="feed-logo"
                    />
                </div>
                <div className="col">
                    <div
                        className="row orange-stripe"
                        style={{
                            backgroundImage: `URL("/assets/orange-stripe.png")`,
                        }}
                    >
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div
                                className="row nav-orange p-2"
                                style={{
                                    borderBottomLeftRadius: '50px',
                                }}
                            >
                                <div className="col-lg-2 col-md-6 col-sm-6 col-xs-6 my-auto text-white contact-num">
                                    <img
                                        src={`${process.env.PUBLIC_URL}/assets/phone.svg`}
                                        width="25"
                                        alt="phone-icon"
                                    />{' '}
                                    <span>+91 9293858689</span>
                                </div>
                                <div className="col-lg-2 col-md-6 col-sm-6 col-xs-6 my-auto text-white contact-mail">
                                    <img
                                        src={`${process.env.PUBLIC_URL}/assets/email.svg`}
                                        width="25"
                                        alt="email-icon"
                                    />{' '}
                                    <span>info@feedorg.com</span>
                                </div>
                                <div className="col-lg-2 col-md-4 col-sm-3 col-xs-3 col">
                                    <form>
                                        <select
                                            className="lng-select form-control"
                                            onChange={languageChange}
                                        >
                                            <option value="default">
                                                Language
                                            </option>
                                            <option value="en">English</option>
                                            <option value="te">Telugu</option>
                                            <option value="hin">Hindi</option>
                                        </select>
                                    </form>
                                </div>
                                <div className="col-lg-2 col-md-4 col-sm-1 col-xs-1 col">
                                    <button className="btn btn-primary download-btn form-control">
                                        <i
                                            className="fa fa-download"
                                            aria-hidden="true"
                                        ></i>{' '}
                                        <span className="download-btn-text">
                                            Downloads
                                        </span>
                                    </button>
                                </div>
                                <div className="col-lg-2 col-md-6 col-sm-6 col-xs-6 search-bar">
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
                                <div className="col-lg-2 col-md-4 col-sm-4 col-xs-4 col my-auto header-social-icons">
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
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 resp-logo-title">
                            <div className="resp-mobile-logo d-md-none d-lg-none d-xl-none">
                                <img
                                    src="assets/feed.png"
                                    className="feed-logo-img img-fluid"
                                    alt="feed-logo"
                                />
                            </div>
                            <div>
                                <h5 className="m-2 title text-center">
                                    FARM TO FOREIGN EXPORTS ENTERPRENEURSHIP
                                    DEVELOPMENT MULTI STATE COOPERATIVE SOCIETY
                                    LTD.
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
                            backgroundImage: `URL("/assets/green-stripe.png")`,
                        }}
                    >
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <nav className="navbar navbar-expand-lg nav-list">
                                <button
                                    className="navbar-toggler"
                                    type="button"
                                    data-toggle="collapse"
                                    data-target="#navbarNav"
                                    aria-controls="navbarNav"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation"
                                >
                                    {/* <span className="navbar-toggler-icon"></span> */}
                                    <i
                                        className="fa fa-bars"
                                        aria-hidden="true"
                                    ></i>
                                </button>
                                <div
                                    className="collapse navbar-collapse"
                                    id="navbarNav"
                                >
                                    <ul className="navbar-nav">
                                        <li className="nav-item active">
                                            {/* <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a> */}
                                            <Link className="nav-link" to="/">
                                                {t('home')}{' '}
                                                <span className="sr-only">
                                                    (current)
                                                </span>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                href="#aboutSection"
                                            >
                                                {t('about_us')}
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                href="#feedServices"
                                            >
                                                {t('services')}
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                href="#eventsUpdates"
                                            >
                                                {t('events')}
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                href="#howFeedWorks"
                                            >
                                                {t('how_feed_works')}
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">
                                                {t('fpo')}
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">
                                                {t('exports')}
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">
                                                {t('contact_us')}
                                            </a>
                                        </li>
                                    </ul>
                                    <Link to="/login">
                                        <button className="login-btn">
                                            {t('login_caps')}
                                        </button>
                                    </Link>
                                    <Link to="/register">
                                        <button className="register-btn">
                                            {t('register_caps')}
                                        </button>
                                    </Link>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
