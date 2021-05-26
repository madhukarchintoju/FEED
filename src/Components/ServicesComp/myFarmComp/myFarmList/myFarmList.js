import React from 'react'
import './myFarmList.css'
import { Link } from 'react-router-dom'
import { Grid, Avatar, Button, Icon, makeStyles } from '@material-ui/core'

export default function MyFarmHome(props) {
    const useStyles = makeStyles((theme) => ({
        feedConnect: {
            backgroundColor: '#a4cf3e',
            '@media (max-width: 768px)': {
                marginTop: '2em',
            },
        },
        color: {
            color: 'black',
            fontWeight: '500',
        },
    }))
    const classes = useStyles()

    return (
        <div className="my-farm-list">
            <Grid container justify="center" className="farm-title">
                <h4>{props.title}</h4>
            </Grid>
            <Grid
                container
                direction="row"
                justify="flex-start"
                alignItems="center"
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
                        component={Link}
                        to={item.link}
                    >
                        <Grid
                            item
                            container
                            direction="column"
                            alignItems="center"
                        >
                            <Grid>
                                <Avatar
                                    variant={props.variant || 'square'}
                                    className="list-avatar"
                                    src={!!item.icon ? item.icon : item.name}
                                >
                                    {item.name}
                                </Avatar>
                            </Grid>
                            <Grid className={classes.color}>{item.name}</Grid>
                        </Grid>
                    </Grid>
                ))}
            </Grid>
            <Grid container justify="center" alignItems="flex-end">
                <Button className={classes.feedConnect} variant="contained">
                    <b>Connect FPO </b>
                    <Icon className="fas fa-angle-double-right"></Icon>
                </Button>
            </Grid>
        </div>
    )
}
