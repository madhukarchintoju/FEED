import React from 'react'
import './myFarmHome.css'
import { Link } from 'react-router-dom'
import { Grid, Button, Icon } from '@material-ui/core'

export default function MyFarmHome() {
    return (
        <>
            <Grid
                container
                direction="row"
                justify="space-around"
                alignItems="flex-start"
                className="my-farm-home"
            >
                <Grid
                    container
                    item
                    direction="column"
                    justify="space-evenly"
                    alignItems="center"
                    className="image-grid"
                    xs={12}
                    lg={3}
                >
                    <Grid item xs>
                        <img
                            className="grass-logo"
                            src={`${process.env.PUBLIC_URL}/assets/farm-icon.jpg`}
                        />
                    </Grid>
                    <Grid item xs>
                        <h1>MY FARM</h1>
                    </Grid>
                    <Grid item xs>
                        <img
                            className="ant-logo"
                            src={`${process.env.PUBLIC_URL}/assets/ant.png`}
                        />
                    </Grid>
                </Grid>
                <Grid container item xs={12} lg spacing={3} direction="row">
                    <Grid item xs={6} lg={3} md={4}>
                        <Link to="/myfarm/spices" className="nav-link">
                            <img src="https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/SPICES_nu_1c0Aea.png" />
                        </Link>
                    </Grid>
                    <Grid item xs={6} lg={3} md={4}>
                        <Link to="/myfarm/cereals" className="nav-link">
                            <img src="https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/CEREALS_-akHzC2xIV.png" />
                        </Link>
                    </Grid>
                    <Grid item xs={6} lg={3} md={4}>
                        <Link to="/myfarm/aqua" className="nav-link">
                            <img src="https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/AQUA_ALVRgxpyxM.png" />
                        </Link>
                    </Grid>
                    <Grid item xs={6} lg={3} md={4}>
                        <Link to="/myfarm/dairy" className="nav-link">
                            <img src="https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/DAIRY_XAlsfOGZ19.png" />
                        </Link>
                    </Grid>
                    <Grid item xs={6} lg={3} md={4}>
                        <Link to="/myfarm/forestProducts" className="nav-link">
                            <img src="https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/FOREST-PRODUCTS_BuVD3boEx.png" />
                        </Link>
                    </Grid>
                    <Grid item xs={6} lg={3} md={4}>
                        <Link to="/myfarm/oilSeeds" className="nav-link">
                            <img src="https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/PLANTATION-CROP_qQoR-IXTcl.png" />
                        </Link>
                    </Grid>
                    <Grid item xs={6} lg={3} md={4}>
                        <Link to="/myfarm/plants" className="nav-link">
                            <img src="https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/PLANTS_So2QIQ12i.png" />
                        </Link>
                    </Grid>
                    <Grid item xs={6} lg={3} md={4}>
                        <Link to="/myfarm/flowers" className="nav-link">
                            <img src="https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/ROSE-FLOWER_lp6IRmHSrv.png" />
                        </Link>
                    </Grid>
                    <Grid item xs={6} lg={3} md={4}>
                        <Link to="/myfarm/poultry" className="nav-link">
                            <img src="https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/POULTRY_kK6Xr2XeR.png" />
                        </Link>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container justify="center">
                <Button className="feedConnect" variant="contained">
                    <b>Connect FPO </b>
                    <Icon className="fas fa-angle-double-right"></Icon>
                </Button>
            </Grid>
        </>
    )
}
