import React from 'react'
import './myFarmList.css'
import { Link } from 'react-router-dom'
import { Grid, Avatar } from '@material-ui/core'

export default function MyFarmHome(props) {
    return (
        <>
            <div>{props.title}</div>
            <Grid
                container
                direction="row"
                justify="flex-start"
                alignItems="center"
                className="my-farm-list"
            >
                {props.dataList.map((item, index) => (
                    <Grid
                        key={index}
                        xs={4}
                        lg={2}
                        item
                        container
                        direction="row"
                        justify="center"
                        alignItems="center"
                        className="list-item"
                    >
                        <Grid
                            item
                            container
                            direction="column"
                            alignItems="center"
                        >
                            <Grid>
                                <Avatar
                                    className="list-avatar"
                                    src="https://ik.imagekit.io/o0om8c0nr9/FEED-NEW/DAIRY_XAlsfOGZ19.png"
                                ></Avatar>
                            </Grid>
                            <Grid>{item.name}</Grid>
                        </Grid>
                    </Grid>
                ))}
            </Grid>
        </>
    )
}
