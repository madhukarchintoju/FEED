import React from 'react'
import './myFpoMain.css'
import { Grid, Button, Icon, Avatar } from '@material-ui/core'

import MyFpoNav from '../myFpoNav/myFpoNav'
import ServicesNavbar from '../../ServicesNavbar/ServicesNavbar.js'
import SideNavBar from '../../sideNavBar/sideNavBar'
import { Route, Switch, Redirect } from 'react-router-dom'
import AboutFpo from '../myFpoList/aboutFpo/aboutFpo'
import MyFpoHome from '../myFpoHome/myFpoHome'
import FpoAccount from '../myFpoList/fpoAccount/fpoAccount'
import FpoAgmBoard from '../myFpoList/fpoAgmBoard/fpoAgmBoard'
import FpoBusinessPlan from '../myFpoList/fpoBusinessPlan/fpoBusinessPlan'
import FpoComplainces from '../myFpoList/fpoComplainces/fpoComplainces'
import FpoConnect from '../myFpoList/fpoConnect/fpoConnect'
import FpoLoanSchemes from '../myFpoList/fpoLoanSchemes/fpoLoanSchemes'
import StatutoryRegistration from '../myFpoList/fpoComplainces/statutoryRegistration/statutoryRegistration'
import LegalCompliances from '../myFpoList/fpoComplainces/legalCompliances/legalCompliances'
import AnnualCompliances from '../myFpoList/fpoComplainces/annualCompliances/annualCompliances'
import CreateProduct from '../myFpoList/fpoAccount/createProduct/createProduct'
import SalesRegistry from '../myFpoList/fpoAccount/salesRegister/salesRegister'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import Grow from '@material-ui/core/Grow'
import Paper from '@material-ui/core/Paper'
import Popper from '@material-ui/core/Popper'
import MenuItem from '@material-ui/core/MenuItem'
import MenuList from '@material-ui/core/MenuList'
export default function MyFpoMain() {
  const navData = [
    {
      name: 'About FPC',
      icon: 'fa fa-plus-circle',
      path: '/myfpo/aboutfpo',
    },
    {
      name: 'FPC Account',
      icon: 'fa fa-address-card',
      path: '/myfpo/fpoaccount',
    },
    {
      name: 'FPC Business Plan',
      icon: 'fa fa-briefcase',
      path: '/myfpo/fpobusinessplan',
    },
    {
      name: 'FPC Compliances',
      icon: 'fas fa-book-open',
      path: '/myfpo/fpocomplainces',
    },
    {
      name: 'FPC AGM & Board',
      icon: 'far fa-comments',
      path: '/myfpo/fpoagmboard',
    },
    {
      name: 'FPC Loans Schemes',
      icon: 'fas fa-university',
      path: '/myfpo/fpoloanschemes',
    },
    {
      name: 'FPC Connect',
      icon: 'fas fa-handshake',
      path: '/myfpo/fpoconnect',
    },
  ]
  const [open, setOpen] = React.useState(false)
  const anchorRef = React.useRef(null)

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen)
  }

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return
    }

    setOpen(false)
  }

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault()
      setOpen(false)
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open)
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus()
    }

    prevOpen.current = open
  }, [open])
  return (
    <>
      <ServicesNavbar></ServicesNavbar>
      <div className="row m-0 content-wrapper-services">
        <SideNavBar
          className="col p-0 sidenavbar"
          data={navData}
          bgColor="#ffc107"
          textColor="black"
        ></SideNavBar>
        <div className="col p-0 fpo-content-wrap">
          <Grid
            container
            direction="col"
            justify="space-between"
            style={{ marginBottom: '0.5em' }}
          >
            <Grid style={{ border: '1px solid red' }}>
              <Button
                variant="contained"
                color="primary"
                startIcon={<Icon className="fas fa-arrow-left" />}
              >
                Back
              </Button>
            </Grid>
            <Grid
              className=""
              container
              direction="col"
              alignItems="center"
              style={{ border: '1px solid red' }}
            >
              <Grid>
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<Icon className="fa fa-plus-circle" />}
                >
                  Add To Quick Menu
                </Button>
              </Grid>
              <Grid style={{ position: 'relative', zIndex: '50' }}>
                <Avatar
                  ref={anchorRef}
                  aria-controls={open ? 'menu-list-grow' : undefined}
                  aria-haspopup="true"
                  onClick={handleToggle}
                  src={`${process.env.PUBLIC_URL}/assets/farmer-avatar.jpg`}
                />
                <Popper
                  open={open}
                  anchorEl={anchorRef.current}
                  role={undefined}
                  transition
                  disablePortal
                >
                  {({ TransitionProps, placement }) => (
                    <Grow
                      {...TransitionProps}
                      style={{
                        transformOrigin:
                          placement === 'bottom'
                            ? 'center top'
                            : 'center bottom',
                      }}
                    >
                      <Paper>
                        <ClickAwayListener onClickAway={handleClose}>
                          <MenuList
                            autoFocusItem={open}
                            id="menu-list-grow"
                            onKeyDown={handleListKeyDown}
                          >
                            <MenuItem onClick={handleClose}>Profile</MenuItem>
                            <MenuItem onClick={handleClose}>
                              My account
                            </MenuItem>
                            <MenuItem onClick={handleClose}>Logout</MenuItem>
                          </MenuList>
                        </ClickAwayListener>
                      </Paper>
                    </Grow>
                  )}
                </Popper>
              </Grid>
            </Grid>
          </Grid>
          <Switch>
            <Route path="/myfpo/home" component={MyFpoHome}></Route>
            <Route path="/myfpo/aboutfpo" component={AboutFpo}></Route>
            <Route path="/myfpo/fpoaccount" component={FpoAccount}></Route>
            <Route path="/myfpo/fpoagmboard" component={FpoAgmBoard}></Route>
            <Route
              path="/myfpo/fpobusinessplan"
              component={FpoBusinessPlan}
            ></Route>
            <Route
              path="/myfpo/fpocomplainces"
              component={FpoComplainces}
            ></Route>
            <Route path="/myfpo/fpoconnect" component={FpoConnect}></Route>
            <Route
              path="/myfpo/fpoloanschemes"
              component={FpoLoanSchemes}
            ></Route>
            <Route
              path="/myfpo/fpocompliances/statutoryregistration"
              component={StatutoryRegistration}
            ></Route>
            <Route
              path="/myfpo/fpocompliances/legalcompliances"
              component={LegalCompliances}
            ></Route>
            <Route
              path="/myfpo/fpocompliances/annualcompliances"
              component={AnnualCompliances}
            ></Route>
            <Route
              path="/myfpo/createProduct"
              component={CreateProduct}
            ></Route>
            <Route
              path="/myfpo/salesregister"
              component={SalesRegistry}
            ></Route>
            <Redirect to="/myfpo/home" />
          </Switch>
        </div>
      </div>
    </>
  )
}
