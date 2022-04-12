import React, { useState, useEffect } from 'react'
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

export default function SideNavBar(props, { defaultActive }) {
  const history = useHistory()
  const screenWidth = window.innerWidth > 769 ? true : false

  const [open, setOpen] = useState(screenWidth)
  const [selected, setSelected] = useState()
  const useStyles = makeStyles((theme) => ({
    hide: {
      display: 'none',
    },
    drawer: {
      flexShrink: 0,
      whiteSpace: 'nowrap',
      // height: '100%',
      // border:'1px solid red',
      // borderRadius:'10px 10px',
      // backgroundColor:'#f6f4f5'
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
      justifyContent: 'space-around',
      // padding: theme.spacing(0, 1),
      ...theme.mixins.toolbar,
      minHeight: '0px !important',
      // background: `${props.serviceTitleBg}` || 'grey',
      // color: 'white',
      borderRadius: '5px 5px',
      // borderBottom:'2px dotted orange'
      //       boxShadow: '0px 5px 5px 0px rgba(255,255,255,0.75)',
      // webkitBoxShadow: '0px 5px 5px 0px rgba(255,255,255,0.75)',
      // mozBoxShadow: '0px 5px 5px 0px rgba(255,255,255,0.75)',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    paper: {
      // backgroundColor: props.bgColor || 'grey',
      backgroundColor: '#f5f5f5',
      // borderRadius:'5px 5px 0px 0px',
      border: 'none',
      color: props.textColor || 'white',
      top: 'initial',
      position: 'relative',
      zIndex: 1,
    },
    selectedItem: {
      // backgroundColor: '#ffdc75',
      // background: 'rgb(230,185,52)',
      borderRadius: '10px 10px',
      // color: props.selectedSideNavLinkColor || 'black',
      color: 'black',
      backgroundColor: '#e0e0e0',
      fontWeight: '800',
      border: '3px solid white',
      // background:
      //   props.selectedSideNavLink ||
      //   'linear-gradient(90deg, rgba(255,193,7,1) 17%, rgba(255,255,255,1) 67%)',
    },
    hoverlink: {
      color: '#5c5c5c',
      '&:hover': {
        borderRadius: '10px 10px',
        backgroundColor: '#e0e0e0',
        color: 'black',
      },
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
    <>
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
            {open ? (
              <h5 className="mt-2 text-bold mr-5">{props.serviceTitle}</h5>
            ) : (
              ''
            )}
            {open ? (
              <IconButton
                onClick={handleDrawerClose}
                style={{ padding: '0px' }}
              >
                <ChevronLeftIcon style={{ color: props.textColor }} />
              </IconButton>
            ) : (
              <IconButton
                onClick={handleDrawerOpen}
                style={{ padding: '0.3em' }}
              >
                <ChevronRightIcon style={{ color: props.textColor }} />
              </IconButton>
            )}
          </div>
          {/* <Divider /> */}
          <List style={{ padding: '0em' }}>
            {props?.data.map((item, index) => (
              <div
                key={index}
                className={
                  window.location.pathname === item.path
                    ? classes.selectedItem
                    : ''
                }
              >
                <ListItem
                  button
                  component={Link}
                  to={item.path}
                  className={classes.hoverlink}
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
                    {item.icon ? (
                      <Icon
                        className={item.icon}
                        style={{ width: '2em', color: props.textColor }}
                      />
                    ) : (
                      <img
                        src={`${process.env.PUBLIC_URL}/assets/icons/${item.svgicon}.svg`}
                      />
                    )}
                  </ListItemIcon>
                  <ListItemText primary={item.name} />
                </ListItem>
                {/* <Divider /> */}
              </div>
            ))}
          </List>
        </Drawer>
      </div>
    </>
  )
}
