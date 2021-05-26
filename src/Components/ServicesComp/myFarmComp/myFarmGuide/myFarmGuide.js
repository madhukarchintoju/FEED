import React from 'react'
import './myFarmGuide.css'
import { Link } from 'react-router-dom'
import { Grid, Avatar, Button, Icon, makeStyles } from '@material-ui/core'

export default function MyFarmGuide(props) {
    const useStyles = makeStyles((theme) => ({
        feedConnect: {
            backgroundColor: '#a4cf3e',
            '@media (max-width: 768px)': {
                marginTop: '2em',
            },
        },
        itemName: {
            marginLeft: '1em',
            color: 'black',
            fontWeight: '500',
        },
        guideAvatar: {
            width: '3em',
            height: '3em',
            '@media (max-width: 768px)': {
                width: '2em',
                height: '2em',
            },
        },
        guideItem: {
            paddingTop: '0.4em',
            borderRadius: '3em',
            border: '0.2em solid #a4cf3e',
            maxWidth: '19em',
            margin: '1em',
        },
        guideTitle: {
            margin: '1em',
            '@media (max-width: 768px)': {
                margin: 0,
                marginLeft: '1em',
            },
        },
    }))
    const classes = useStyles()

    return (
        <div className="my-farm-guide">
            <Grid container justify="flex-start" className={classes.guideTitle}>
                <h4>{props.title}</h4>
            </Grid>
            <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="center"
            >
                {props.dataGuide.map((item, index) => (
                    <Grid
                        key={index}
                        xs={12}
                        lg={3}
                        item
                        container
                        direction="row"
                        alignItems="center"
                        justify="flex-start"
                        className={classes.guideItem}
                        component={Link}
                        to={item.link}
                    >
                        <Grid>
                            <Avatar
                                variant={props.variant || 'square'}
                                className={classes.guideAvatar}
                                src={!!item.icon ? item.icon : item.name}
                            >
                                {item.name}
                            </Avatar>
                        </Grid>
                        <Grid className={classes.itemName}>{item.name}</Grid>
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
