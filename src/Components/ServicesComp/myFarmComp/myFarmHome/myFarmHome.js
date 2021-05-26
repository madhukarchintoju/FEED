import React from 'react'
import './myFarmHome.css'
import { Link } from 'react-router-dom'
import { Grid, Button, Icon, makeStyles } from '@material-ui/core'

export default function MyFarmHome() {
    const useStyles = makeStyles((theme) => ({
        grid: {
            marginTop: '1em',
        },
        imageGrid: {
            '@media (max-width: 768px)': {
                display: 'none',
            },
        },
        grassLogo: {
            height: '13em',
        },
        antLogo: {
            height: '20em',
        },
        navLink: {
            '@media (max-width: 768px)': {
                '& img': {
                    width: '7em',
                    height: '7em',
                },
            },
        },
        feedConnect: {
            backgroundColor: '#a4cf3e',
            '@media (max-width: 768px)': {
                marginTop: '2em',
            },
        },
    }))
    const classes = useStyles()

    return (
        <>
            <Grid
                container
                direction="row"
                justify="space-around"
                alignItems="flex-start"
                className={classes.grid}
            >
                <Grid
                    container
                    item
                    direction="column"
                    justify="space-evenly"
                    alignItems="center"
                    className={classes.imageGrid}
                    xs={12}
                    lg={3}
                >
                    <Grid item xs>
                        <img
                            className={classes.grassLogo}
                            src={`${process.env.PUBLIC_URL}/assets/farm-icon.jpg`}
                        />
                    </Grid>
                    <Grid item xs>
                        <h1>MY FARM</h1>
                    </Grid>
                    <Grid item xs>
                        <img
                            className={classes.antLogo}
                            src={`${process.env.PUBLIC_URL}/assets/ant.png`}
                        />
                    </Grid>
                </Grid>
                <Grid
                    container
                    item
                    xs={12}
                    lg
                    direction="row"
                    className={classes.navLink}
                >
                    <Grid item xs={6} lg={3} md={4}>
                        <Link to="/myfarm/spices">
                            <img src="https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/SPICES_nu_1c0Aea.png" />
                        </Link>
                    </Grid>
                    <Grid item xs={6} lg={3} md={4}>
                        <Link to="/myfarm/cereals">
                            <img src="https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/CEREALS_-akHzC2xIV.png" />
                        </Link>
                    </Grid>
                    <Grid item xs={6} lg={3} md={4}>
                        <Link to="/myfarm/aqua">
                            <img src="https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/AQUA_ALVRgxpyxM.png" />
                        </Link>
                    </Grid>
                    <Grid item xs={6} lg={3} md={4}>
                        <Link to="/myfarm/dairy">
                            <img src="https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/DAIRY_XAlsfOGZ19.png" />
                        </Link>
                    </Grid>
                    <Grid item xs={6} lg={3} md={4}>
                        <Link to="/myfarm/forestProducts">
                            <img src="https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/FOREST-PRODUCTS_BuVD3boEx.png" />
                        </Link>
                    </Grid>
                    <Grid item xs={6} lg={3} md={4}>
                        <Link to="/myfarm/oilSeeds">
                            <img src="https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/PLANTATION-CROP_qQoR-IXTcl.png" />
                        </Link>
                    </Grid>
                    <Grid item xs={6} lg={3} md={4}>
                        <Link to="/myfarm/plants">
                            <img src="https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/PLANTS_So2QIQ12i.png" />
                        </Link>
                    </Grid>
                    <Grid item xs={6} lg={3} md={4}>
                        <Link to="/myfarm/flowers">
                            <img src="https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/ROSE-FLOWER_lp6IRmHSrv.png" />
                        </Link>
                    </Grid>
                    <Grid item xs={6} lg={3} md={4}>
                        <Link to="/myfarm/poultry">
                            <img src="https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/POULTRY_kK6Xr2XeR.png" />
                        </Link>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container justify="center">
                <Button className={classes.feedConnect} variant="contained">
                    <b>Connect FPO </b>
                    <Icon className="fas fa-angle-double-right"></Icon>
                </Button>
            </Grid>
        </>
    )
}
