import React from 'react'
import './myMarketNavComp.css'
import {
  Grid,
  TextField,
  InputAdornment,
  Divider,
  MenuItem,
  Typography,
  Select,
} from '@material-ui/core'
import { alpha, makeStyles } from '@material-ui/core/styles'
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'
import IconButton from '@material-ui/core/IconButton'
import NotificationsIcon from '@material-ui/icons/Notifications'
import Badge from '@material-ui/core/Badge'
import MoreIcon from '@material-ui/icons/MoreVert'
import AccountCircle from '@material-ui/icons/AccountCircle'
import MailIcon from '@material-ui/icons/Mail'
import Menu from '@material-ui/core/Menu'
// import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    // display: 'none',
    // [theme.breakpoints.up('sm')]: {
    //   display: 'block',
    // },
    // display:'flex',
    // fontWeight: '650',alignItems:'center'
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  ormq: {
    boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)',
    webkitBoxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)',
    mozBoxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)',
  },
  featuredProductListCard: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingBottom: '5px',
    borderRadius: '15px 15px',
    backgroundColor: 'white',
    boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)',
    webkitBoxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)',
    mozBoxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)',
    // '@media (max-width: 768px)': {
    //   // width: `30em` || '6em',
    //   height: `20em` || '3em',
    // },
  },
  featuredProductListCardDetails: {},
  tradeNowBtn: {
    padding: '5px',
    background:
      'linear-gradient(180deg, rgba(249,193,32,1) 35%, rgba(248,66,2,1) 100%)',
    border: 'none',
    fontWeight: '600',
    borderRadius: '5px 5px',
  },
  multipleQuotesFormWrap: {
    margin: '10px auto',
    padding: '10px',
    borderRadius: '10px 10px',
    background:
      'linear-gradient(185deg, rgba(255,254,252,1) 35%, rgba(255,255,255,1) 100%)',
    boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)',
    webkitBoxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)',
    mozBoxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)',
  },
  searchAdornedEnd: {
    paddingRight: '0px',
  },
  ormq: {
    backgroundColor: '#ffd72a',
    color: 'red',
    padding: '5px',
    textAlign: 'center',
    borderRadius: '5px 5px',
    transform: 'skew(-10deg)',
  },
}))
export default function MyMarketNavComp() {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = React.useState(null)
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null)

  const isMenuOpen = Boolean(anchorEl)
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
    handleMobileMenuClose()
  }

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget)
  }

  const menuId = 'primary-search-account-menu'
  const mobileMenuId = 'primary-search-account-menu-mobile'
  const cityList = ['Vijayawada', 'Hyderabad', 'Mumbai', 'Bangalore', 'Delhi']
  const categoriesList = [
    {
      label: 'Vegetables',
    },
    {
      label: 'Fruits',
    },
    {
      label: 'Oil Seeds',
    },
    {
      label: 'Cereals',
    },
    {
      label: 'Aqua',
    },
    {
      label: 'Flowers',
    },
    {
      label: 'Dairy',
    },
    {
      label: 'Fabric',
    },
    {
      label: 'More',
    },
  ]
  const vegetablesList = [
    {
      item: 'Tomato',
      link: '',
    },
    {
      item: 'Onion',
      link: '',
    },
    {
      item: 'Potato',
      link: '',
    },
    {
      item: 'Cucumber',
      link: '',
    },
    {
      item: 'Carrot',
      link: '',
    },
    {
      item: 'Beans',
      link: '',
    },
    {
      item: 'Green Chilly',
      link: '',
    },
  ]
  // const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <>
      <div style={{ width: '93%', margin: 'auto' }}>
        <Grid
          color="white"
          style={{
            // position: 'sticky',
            // top: '150px',
            // zIndex: '1020',
            paddingTop: '3px',
            boxShadow: 'none',
            backgroundColor: 'white',
          }}
        >
          {/* <Toolbar> */}
          {/* <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton> */}
          <Grid
            container
            style={{
              borderRadius: '5px 5px',
              backgroundColor: '#efded2',
              // padding: '1px',
            }}
          >
            <Grid
              lg={2}
              md={3}
              sm={12}
              xs={12}
              item
              style={{ display: 'flex', justifyContent: 'space-evenly' }}
            >
              <img
                src={`${process.env.PUBLIC_URL}/assets/my-market/bullock-cart.png`}
                width="100"
                alt="My Market"
              />
              {/* <Typography
              className={classes.title}
              variant="h5"
              noWrap
              style={{
                display: 'flex',
                fontWeight: '650',
                alignItems: 'center',
              }}
            > */}
              <h5
                className={classes.title}
                style={{
                  display: 'flex',
                  fontWeight: '600',
                  alignItems: 'center',
                  marginBottom: '0px',
                  fontSize: '26px',
                }}
              >
                <span style={{ color: '#f89c2f' }}>My </span>
                <span style={{ color: '#ed1e25' }}> Market</span>
              </h5>
              {/* </Typography> */}
            </Grid>
            <Grid
              container
              lg={8}
              md={7}
              style={{
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center',
              }}
            >
              <Grid lg={2} md={3} sm={12} xs={4}>
                <TextField
                  select
                  fullWidth
                  size="small"
                  variant="outlined"
                  label="Select city"
                  style={{ backgroundColor: 'white', borderRadius: '5px 5px' }}
                >
                  {cityList.map((item, index) => (
                    <MenuItem key={index} value={item}>
                      {item}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid lg={8} md={6} sm={6} xs={7}>
                <TextField
                  fullWidth
                  size="small"
                  variant="outlined"
                  placeholder="Search…"
                  // classes={{
                  //   root: classes.inputRoot,
                  //   input: classes.inputInput,
                  // }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <button className="btn btn-secondary">
                          <SearchIcon />
                        </button>
                      </InputAdornment>
                    ),
                    classes: {
                      adornedEnd: classes.searchAdornedEnd,
                    },
                  }}
                  inputProps={{ 'aria-label': 'search' }}
                  style={{ backgroundColor: 'white', borderRadius: '5px 5px' }}
                />
              </Grid>
            </Grid>
            <Grid
              lg={2}
              style={{ display: 'flex', justifyContent: 'space-around' }}
            >
              {/* <div className={classes.grow} /> */}
              <div className={classes.sectionDesktop}>
                <IconButton aria-label="show 4 new mails" color="inherit">
                  <Badge badgeContent={4} color="secondary">
                    <MailIcon />
                  </Badge>
                </IconButton>
                <IconButton
                  aria-label="show 17 new notifications"
                  color="inherit"
                >
                  <Badge badgeContent={17} color="secondary">
                    <NotificationsIcon />
                  </Badge>
                </IconButton>
                <IconButton
                  edge="end"
                  aria-label="account of current user"
                  aria-controls={menuId}
                  aria-haspopup="true"
                  onClick={handleProfileMenuOpen}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
              </div>
              <div className={classes.sectionMobile}>
                <IconButton
                  aria-label="show more"
                  aria-controls={mobileMenuId}
                  aria-haspopup="true"
                  onClick={handleMobileMenuOpen}
                  color="inherit"
                >
                  <MoreIcon />
                </IconButton>
              </div>
            </Grid>
          </Grid>
          {/* </Toolbar> */}
        </Grid>
        {/* {renderMobileMenu}
      {renderMenu} */}
        <Grid style={{ border: '1px solid #f5f5f5' }}>
          <li
            class="nav-item dropdown nav-link"
            style={{ width: '15em', height: '2.5em' }}
          >
            <button
              class="nav-link btn dropdown-toggle categoryBtn"
              href="http://example.com"
              id="navbarDropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              style={{
                backgroundColor: '#84c225',
                color: 'white',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              VIEW BY CATEGORY
            </button>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li class="dropdown-submenu">
                <a class="dropdown-item" href="#">
                  Vegetables
                </a>
                <ul class="dropdown-menu">
                  {vegetablesList.map((item, index) => (
                    <li>
                      <a class="dropdown-item" href="#">
                        {item.item}
                      </a>
                    </li>
                  ))}
                  {/* <li><a class="dropdown-item" href="#">Submenu</a></li>
                <li><a class="dropdown-item" href="#">Submenu0</a></li>
                <li class="dropdown-submenu"><a class="dropdown-item" href="#">Submenu 1</a>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Subsubmenu1</a></li>
                    <li><a class="dropdown-item" href="#">Subsubmenu1</a></li>
                  </ul>
                </li>
                <li class="dropdown-submenu"><a class="dropdown-item" href="#">Submenu 2</a>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Subsubmenu2</a></li>
                    <li><a class="dropdown-item" href="#">Subsubmenu2</a></li>
                  </ul>
                </li> */}
                </ul>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Fruits
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Spices
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Cereals
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Oil Seeds
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Aqua
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Flowers
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Fabric
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Dairy
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  More
                </a>
              </li>
            </ul>
          </li>
        </Grid>
      </div>
    </>
  )
}
