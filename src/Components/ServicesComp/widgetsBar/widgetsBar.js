import React from 'react'
import { Route, Switch, Redirect, useHistory } from 'react-router-dom'
import {
  Grid,
  Button,
  Icon,
  Avatar,
  makeStyles,
  TextField,
  InputAdornment,
  Tooltip,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Divider,
} from '@material-ui/core'
import SettingsIcon from '@material-ui/icons/Settings'
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone'
import SearchIcon from '@material-ui/icons/Search'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline'
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined'
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined'
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined'
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined'

const useStyles = makeStyles((theme) => ({
  widgetsBtnWrap: {
    display: 'inline-block',
    // color: '#08090a',
    backgroundColor: 'white',
    textAlign: 'center',
    verticalAlign: 'middle',
    border: '1.5px solid #c7c7c7',
    padding: '0.3rem 0.75rem',
    fontSize: '1rem',
    lineHeight: '1.5',
    borderRadius: '0.5rem',
    transition:
      'color .15s ease -in -out, background - color .15s ease -in -out, border - color .15s ease -in -out, box - shadow .15s ease -in -out',
  },
  screenTitle: {
    fontWeight: '400',
    marginBottom: '0px',
    '@media (max-width: 768px)': {
      fontSize: '18px',
    },
  },
}))
export default function WidgetsBar(props) {
  const classes = useStyles()
  let history = useHistory()

  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <>
      <Grid
        // container
        justifyContent="space-between"
        style={{
          width: '100%',
          display: 'flex',
          backgroundColor: '#f5f5f5',
          padding: '3px 25px',
        }}
      >
        <div
          className="col-lg-4"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <button
            className={classes.widgetsBtnWrap}
            onClick={() => history.goBack()}
          >
            <ArrowBackIcon /> {window.innerWidth > 768 ? `Back` : ''}
          </button>
          <h4 className={classes.screenTitle}>{props.screenTitle}</h4>
        </div>
        <div
          className="col-lg-6"
          style={{ display: 'flex', justifyContent: 'space-between' }}
        >
          {window.innerWidth > 768 ? (
            <TextField
              placeholder="Search FPO's,Schemes,"
              type="search"
              variant="outlined"
              size="small"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              style={{ width: '40%', backgroundColor: 'white' }}
            />
          ) : (
            ''
          )}
          <button className={classes.widgetsBtnWrap}>
            <AddCircleOutlineIcon />{' '}
            {window.innerWidth > 768 ? `Quick Menu` : ''}
          </button>
          <button className={classes.widgetsBtnWrap}>
            <NotificationsNoneIcon />
          </button>
          <Tooltip title="Account settings">
            <IconButton
              onClick={handleClick}
              size="small"
              sx={{ ml: 2 }}
              aria-controls={open ? 'account-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
            >
              <AccountCircleOutlinedIcon fontSize="large">
                R
              </AccountCircleOutlinedIcon>
            </IconButton>
          </Tooltip>
          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            // PaperProps={{
            //   elevation: 0,
            //   sx: {
            //     overflow: 'visible',
            //     filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            //     mt: 1.5,
            //     '& .MuiAvatar-root': {
            //       width: 32,
            //       height: 32,
            //       ml: -0.5,
            //       mr: 1,
            //     },
            //     '&:before': {
            //       content: '""',
            //       display: 'block',
            //       position: 'absolute',
            //       top: 0,
            //       right: 14,
            //       width: 10,
            //       height: 10,
            //       bgcolor: 'background.paper',
            //       transform: 'translateY(-50%) rotate(45deg)',
            //       zIndex: 0,
            //     },
            //   },
            // }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          >
            <MenuItem>
              <ListItemIcon>
                <PersonOutlineOutlinedIcon fontSize="small" />
              </ListItemIcon>
              Profile
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <SettingsIcon fontSize="small" />
              </ListItemIcon>
              Account Settings
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <DashboardOutlinedIcon fontSize="small" />
              </ListItemIcon>
              Dashboard
            </MenuItem>
            <Divider />
            <MenuItem>
              <ListItemIcon>
                <ExitToAppOutlinedIcon fontSize="small" />
              </ListItemIcon>
              Logout
            </MenuItem>
          </Menu>
          {/* <button className={classes.widgetsBtnWrap}>
            <SettingsIcon />
          </button> */}
        </div>
      </Grid>
    </>
  )
}
