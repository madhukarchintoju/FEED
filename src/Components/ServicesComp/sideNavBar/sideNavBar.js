import React, { useState } from 'react'
import './sideNavBar.css'
import clsx from 'clsx'
import { Link, useHistory } from 'react-router-dom'
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

  const [open, setOpen] = useState(screenWidth)
  const [selected, setSelected] = useState()
  const [showServiceTitle, setShowServiceTitle] = useState(true)
  const useStyles = makeStyles((theme) => ({
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
      minHeight: '0px !important',
      background: `${props.serviceTitleBg}` || 'grey',
      color: 'white',
      // color:''
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
    selectedItem: {
      backgroundColor: '#ffdc75',
      // background: 'rgb(230,185,52)',
      // color: "white",
      // background: 'linear-gradient(0deg, rgba(241,241,241,1) 0%, rgba(204,167,0,1) 45%)'
    },
  }))
  const classes = useStyles()

  const handleDrawerOpen = () => {
    setOpen(true)
    setShowServiceTitle(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
    setShowServiceTitle(false)
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
        <div container className={classes.toolbar}>
          {showServiceTitle ? (
            <h5 className="mt-2 text-bold">{props.serviceTitle}</h5>
          ) : (
            ''
          )}
          {open ? (
            <IconButton onClick={handleDrawerClose}>
              <ChevronLeftIcon style={{ color: props.textColor }} />
            </IconButton>
          ) : (
            <IconButton onClick={handleDrawerOpen}>
              <ChevronRightIcon style={{ color: props.textColor }} />
            </IconButton>
          )}
        </div>
        <Divider />
        <List style={{ padding: '0em' }}>
          {props?.data.map((item, index) => (
            <div
              key={index}
              className={selected === index ? classes.selectedItem : ''}
            >
              <ListItem
                button
                component={Link}
                to={item.path}
                onClick={
                  !screenWidth
                    ? () => {
                        setSelected(index)
                        handleDrawerClose()
                      }
                    : () => {
                        setSelected(index)
                      }
                }
              >
                <ListItemIcon>
                  <Icon
                    className={item.icon}
                    style={{ width: '2em', color: props.textColor }}
                  />
                </ListItemIcon>
                <ListItemText primary={item.name} />
              </ListItem>
              <Divider />
            </div>
          ))}
        </List>
      </Drawer>
    </div>
  )
}
