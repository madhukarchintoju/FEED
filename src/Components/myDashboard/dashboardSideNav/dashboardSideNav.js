import React from 'react'
import { Link } from 'react-router-dom'
import { ListItem, List, makeStyles } from '@material-ui/core'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'
import InboxIcon from '@material-ui/icons/Inbox'
import DraftsIcon from '@material-ui/icons/Drafts'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    // border: '1px solid red',
    borderRadius: '15px 15px',
    width: '20em',
    marginLeft: '1.2em',
    boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)',
    webkitBoxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)',
    mozBoxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)',
  },
  navHeader: {
    // backgroundColor: '#0072b9',
    backgroundColor: '#636260',
    color: 'white',
    borderTopLeftRadius: '15px',
    borderTopRightRadius: '15px',
    textAlign: 'center',
    fontWeight: '600',
  },
  selectedList: {
    backgroundColor: '#fcc30b',
    background:
      'linear-gradient(90deg, rgba(255,68,0,1) 44%, rgba(255,255,255,1) 100%)',
    color: 'white',
    '&:hover': {
      color: 'white',
      backgroundColor: '#fcc30b',
    },
  },
  hover: {
    '&:hover': {
      color: 'black',
      backgroundColor: '#ffeaa6',
      borderRadius: '15px 15px',
    },
  },
  hoverLastItem: {
    '&:hover': {
      backgroundColor: '#ffeaa6',
      borderBottomLeftRadius: '1.5em',
      borderBottomRightRadius: '1.5em',
    },
  },
  selectedBottomList: {
    // backgroundColor: '#fcc30b',
    // background: 'rgb(255,68,0)',
    background:
      'linear-gradient(90deg, rgba(255,68,0,1) 0%, rgba(255,255,255,1) 100%)',
    borderBottomLeftRadius: '1.5em',
    borderBottomRightRadius: '1.5em',
  },
  listNavMain: {
    padding: 0,
    // border:'1px solid red',
    borderRadius: '15px 15px',
  },
  ListItem: {
    borderRadius: '15px 15px',
  },
}))

export default function DashboardSideNav() {
  const classes = useStyles()
  const [selectedIndex, setSelectedIndex] = React.useState(0)

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index)
  }

  return (
    <div className={classes.root}>
      <List
        component="nav"
        aria-label="my-dashboard-nav"
        className={classes.listNavMain}
      >
        <ListItem className={classes.navHeader}>
          <ListItemText primary="Dashboard Home" />
        </ListItem>
        <ListItem
          component={Link}
          to="/dashboard/mysubscription"
          button
          className={selectedIndex === 0 ? classes.selectedList : classes.hover}
          onClick={(event) => handleListItemClick(event, 0)}
        >
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="My subscriptions" />
        </ListItem>
        <Divider />
        <ListItem
          component={Link}
          to="/dashboard/myitdm"
          button
          className={selectedIndex === 1 ? classes.selectedList : classes.hover}
          onClick={(event) => handleListItemClick(event, 1)}
        >
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText primary="My IT & Digital Media" />
        </ListItem>
        <Divider />
        <ListItem
          component={Link}
          to="/dashboard/mymarket"
          button
          className={selectedIndex === 2 ? classes.selectedList : classes.hover}
          onClick={(event) => handleListItemClick(event, 2)}
        >
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="My Market" />
        </ListItem>
        <Divider />
        <ListItem
          component={Link}
          to="/dashboard/mybusinessleads"
          button
          className={selectedIndex === 3 ? classes.selectedList : classes.hover}
          onClick={(event) => handleListItemClick(event, 3)}
        >
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText primary="MY Business Leads" />
        </ListItem>
        <Divider />
        <ListItem
          component={Link}
          to="/dashboard/myofferscoupons"
          button
          className={selectedIndex === 4 ? classes.selectedList : classes.hover}
          onClick={(event) => handleListItemClick(event, 4)}
        >
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="My Offers & Coupons" />
        </ListItem>
        <Divider />
        <ListItem
          component={Link}
          to="/dashboard/myaccount"
          button
          className={selectedIndex === 5 ? classes.selectedList : classes.hover}
          onClick={(event) => handleListItemClick(event, 5)}
        >
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText primary="My Account" />
        </ListItem>
        <Divider />
        <ListItem
          component={Link}
          to="/dashboard/mytransaction"
          button
          className={selectedIndex === 6 ? classes.selectedList : classes.hover}
          onClick={(event) => handleListItemClick(event, 6)}
        >
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="My Transcations" />
        </ListItem>
        <Divider />
        <ListItem
          component={Link}
          to="/dashboard/myreports"
          button
          className={selectedIndex === 7 ? classes.selectedList : classes.hover}
          onClick={(event) => handleListItemClick(event, 7)}
        >
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText primary="My Reports" />
        </ListItem>
        <Divider />
      </List>
    </div>
  )
}
