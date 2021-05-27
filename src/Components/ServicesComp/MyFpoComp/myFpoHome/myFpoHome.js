import React from 'react'
import './myFpoHome.css'
import { Link } from 'react-router-dom'
import { Grid, Button, Icon } from '@material-ui/core'

export default function MyFpoHome() {
    return (
        <>
            {/* <div className="col-lg-2 fpo-about">
                <div className="text-center">
                    <img
                        src={`${process.env.PUBLIC_URL}/assets/fpo-icon.jpg`}
                        width="70%"
                        alt=""
                    />
                </div>
                <div className="text-center">
                    <h1>MY FPO</h1>
                </div>
                <div className="text-center">
                    <img
                        src={`${process.env.PUBLIC_URL}/assets/ant.png`}
                        width="100%"
                        alt=""
                    />
                </div>
            </div>
            <div className="col-lg-8 fpo-cards-wrap text-center">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="row">
                            <div className="col-lg-4">
                                <Link to="/myfpo/aboutfpo" className="nav-link">
                                    <div className="fpo-cards">
                                        <div className="card-body text-center">
                                            <img
                                                src={`${process.env.PUBLIC_URL}/assets/fpo-icon.jpg`}
                                                width="70"
                                                alt=""
                                            />
                                            <h5 className="card-title my-auto">
                                                ABOUT FPO
                                            </h5>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-lg-4">
                                <Link
                                    to="/myfpo/fpoaccount"
                                    className="nav-link"
                                >
                                    <div className="fpo-cards">
                                        <div className="card-body text-center">
                                            <img
                                                src={`${process.env.PUBLIC_URL}/assets/fpo-icon.jpg`}
                                                width="70"
                                                alt=""
                                            />
                                            <h5 className="card-title">
                                                FPO ACCOUNT
                                            </h5>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-lg-4">
                                <Link
                                    to="/myfpo/fpobusinessplan"
                                    className="nav-link"
                                >
                                    <div className="fpo-cards">
                                        <div className="card-body text-center">
                                            <img
                                                src={`${process.env.PUBLIC_URL}/assets/fpo-icon.jpg`}
                                                width="70"
                                                alt=""
                                            />
                                            <h5 className="card-title">
                                                FPO BUSINESS PLAN
                                            </h5>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-lg-4">
                                <Link
                                    to="/myfpo/fpocomplainces"
                                    className="nav-link"
                                >
                                    <div className="fpo-cards">
                                        <div className="card-body text-center">
                                            <img
                                                src={`${process.env.PUBLIC_URL}/assets/fpo-icon.jpg`}
                                                width="70"
                                                alt=""
                                            />
                                            <h5 className="card-title">
                                                FPO COMPLAINCES
                                            </h5>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-lg-4">
                                <Link
                                    to="/myfpo/fpoagmboard"
                                    className="nav-link"
                                >
                                    <div className="fpo-cards">
                                        <div className="card-body text-center">
                                            <img
                                                src={`${process.env.PUBLIC_URL}/assets/fpo-icon.jpg`}
                                                width="70"
                                                alt=""
                                            />
                                            <h5 className="card-title">
                                                FPO AGM & BOARD MEETING
                                            </h5>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-lg-4">
                                <Link
                                    to="/myfpo/fpoloanschemes"
                                    className="nav-link"
                                >
                                    <div className="fpo-cards">
                                        <div className="card-body text-center">
                                            <img
                                                src={`${process.env.PUBLIC_URL}/assets/fpo-icon.jpg`}
                                                width="70"
                                                alt=""
                                            />
                                            <h5 className="card-title">
                                                FPO LOANS & SCHEMES
                                            </h5>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-11 text-center">
                        <button className="btn myfpo-broadcast-btn">
                            FPO CONNECT BROADCAST
                        </button>
                    </div>
                </div>
            </div> */}



            <Grid
                container
                direction="row"
                justify="space-around"
                alignItems="flex-start"
                className="myfpo-home"
            >
                <Grid
                    container
                    item
                    direction="column"
                    justify="space-evenly"
                    alignItems="center"
                    className="image-grid"
                    xs={12}
                    lg={2}
                >
                    <Grid item xs>
                        <img
                            className="fpo-icon-img"
                            src={`${process.env.PUBLIC_URL}/assets/fpo-icon.jpg`}
                            width="100"
                            alt="FPO Icon"
                        />
                    </Grid>
                    <Grid item xs>
                        <h1>MY FPO</h1>
                    </Grid>
                    <Grid item xs>
                        <img
                            className="ant-logo"
                            src={`${process.env.PUBLIC_URL}/assets/ant-small.png`}
                            alt="ant"
                        />
                    </Grid>
                </Grid>
                <Grid container item xs={12} lg direction="row">
                    <Grid item xs={6} md={4} lg={4}>
                        <Link to="/myfpo/aboutfpo" className="nav-link">
                            <img src={`${process.env.PUBLIC_URL}/assets/about-fpo-card.png`} alt="About FPO" />
                        </Link>
                    </Grid>
                    <Grid item xs={6} md={4} lg={4}>
                        <Link to="/myfpo/fpoaccount" className="nav-link">
                            <img src={`${process.env.PUBLIC_URL}/assets/fpo-account-card.png`} alt="FPO Account" />
                        </Link>
                    </Grid>
                    <Grid item xs={6} md={4} lg={4}>
                        <Link to="/myfpo/fpobusinessplan" className="nav-link">
                            <img src={`${process.env.PUBLIC_URL}/assets/fpo-business-plan-card.png`} alt="FPO Business Plan" />
                        </Link>
                    </Grid>
                    <Grid item xs={6} md={4} lg={4}>
                        <Link to="/myfpo/fpocomplainces" className="nav-link">
                            <img src={`${process.env.PUBLIC_URL}/assets/fpo-compliances-card.png`} alt="FPO Compliances" />
                        </Link>
                    </Grid>
                    <Grid item xs={6} md={4} lg={4}>
                        <Link to="" className="nav-link">
                            <img src={`${process.env.PUBLIC_URL}/assets/fpo-agm-board-card.png`} alt="FPO Agm Board Metting" />
                        </Link>
                    </Grid>
                    <Grid item xs={6} md={4} lg={4}>
                        <Link to="" className="nav-link">
                            <img src={`${process.env.PUBLIC_URL}/assets/fpo-loan-schemes-card.png`} alt="FPO Loan Schemes" />
                        </Link>
                    </Grid>
                </Grid>
                <Grid container justify="center">
                    <Button className="myfpo-broadcast-btn" variant="contained">
                        <b>Connect FPO </b>
                        <Icon className="fas fa-angle-double-right"></Icon>
                    </Button>
                </Grid>
            </Grid>

        </>
    )
}
