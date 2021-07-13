import React from 'react'
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
    border: '1px solid',
    borderRadius: '1.5em',
    width: '20em',
    marginLeft: '1.2em',
  },
  navHeader: {
    backgroundColor: '#0072b9',
    color: 'white',
    borderTopLeftRadius: '1.5em',
    borderTopRightRadius: '1.5em',
    textAlign: 'center',
  },
  selectedList: {
    backgroundColor: '#fcc30b',
    '&:hover': {
      backgroundColor: '#fcc30b',
    },
  },
  hover: {
    '&:hover': {
      backgroundColor: '#ffeaa6',
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
    backgroundColor: '#fcc30b',
    borderBottomLeftRadius: '1.5em',
    borderBottomRightRadius: '1.5em',
  },
  listNavMain: {
    padding: 0,
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
