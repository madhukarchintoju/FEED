import React from 'react'
import './sideNavBar.css'
import clsx from 'clsx'
import { Link } from 'react-router-dom'
import {
    makeStyles,
    Drawer,
    List,
    Divider,
    IconButton,
    ListItem,
    ListItemIcon,
    ListItemText,
    Icon,
} from '@material-ui/core'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'

export default function SideNavBar(props) {
    const screenWidth = window.innerWidth > 769 ? true : false

    const [open, setOpen] = React.useState(screenWidth)

    const useStyles = makeStyles((theme) => ({
        root: {
            display: 'flex',
        },
        hide: {
            display: 'none',
        },
        drawer: {
            flexShrink: 0,
            whiteSpace: 'nowrap',
        },
        drawerOpen: {
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        },
        drawerClose: {
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            overflowX: 'hidden',
            width: theme.spacing(7) + 1,
        },
        toolbar: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            padding: theme.spacing(0, 1),
            ...theme.mixins.toolbar,
            minHeight: '50px !important',
        },
        content: {
            flexGrow: 1,
            padding: theme.spacing(3),
        },
        paper: {
            backgroundColor: props.bgColor || 'grey',
            color: props.textColor || 'white',
            top: 'initial',
            position: 'relative',
            zIndex: 1,
        },
    }))
    const classes = useStyles()

    const handleDrawerOpen = () => {
        setOpen(true)
    }

    const handleDrawerClose = () => {
        setOpen(false)
    }

    return (
        <div className="side-navbar">
            <Drawer
                variant="permanent"
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: true,
                    [classes.drawerClose]: !true,
                })}
                classes={{
                    paper: clsx({
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open,
                        [classes.paper]: true,
                    }),
                }}
            >
                <div className={classes.toolbar}>
                    {open ? (
                        <IconButton onClick={handleDrawerClose}>
                            <ChevronLeftIcon
                                style={{ color: props.textColor }}
                            />
                        </IconButton>
                    ) : (
                        <IconButton onClick={handleDrawerOpen}>
                            <ChevronRightIcon
                                style={{ color: props.textColor }}
                            />
                        </IconButton>
                    )}
                </div>
                <Divider />
                <List>
                    {props?.data.map((item, index) => (
                        <ListItem
                            button
                            key={index}
                            component={Link}
                            to={item.path}
                            onClick={!screenWidth ? handleDrawerClose : ''}
                        >
                            <ListItemIcon>
                                <Icon
                                    className={item.icon}
                                    style={{ color: props.textColor }}
                                />
                            </ListItemIcon>
                            <ListItemText primary={item.name} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </div>
    )
}
