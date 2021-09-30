import React, { useState, useCallback } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.min.css'
import 'swiper/components/effect-fade/effect-fade.min.css'
import 'swiper/components/navigation/navigation.min.css'
import 'swiper/components/pagination/pagination.min.css'
import SwiperCore, { EffectFade, Navigation, Pagination } from 'swiper/core'

import clsx from 'clsx'
import {
  Grid,
  makeStyles,
  Button,
  Icon,
  Avatar,
  Typography,
  CardContent,
  Collapse,
  TextField,
  Select,
  alpha,
  List,
  ListItem,
  ListItemText,
  Divider,
  FormControl,
  InputLabel,
  NativeSelect,
} from '@material-ui/core'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import InputBase from '@material-ui/core/InputBase'
import Badge from '@material-ui/core/Badge'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'
import AccountCircle from '@material-ui/icons/AccountCircle'
import MailIcon from '@material-ui/icons/Mail'
import NotificationsIcon from '@material-ui/icons/Notifications'
import MoreIcon from '@material-ui/icons/MoreVert'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardActions from '@material-ui/core/CardActions'
import FavoriteIcon from '@material-ui/icons/Favorite'
import ShareIcon from '@material-ui/icons/Share'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import MoreVertIcon from '@material-ui/icons/MoreVert'

import './eventsSection.css'
const carouselImg = [
  {
    image: 'meetingbnr.png',
    link: '',
  },
]
const ministryList = [
  {
    id: 1,
    name: 'Nabard',
  },
  {
    id: 2,
    name: 'Fieo',
  },
  {
    id: 3,
    name: "Ministry of Agriculture & Farmers' Welfare",
  },
  {
    id: 4,
    name: 'Ministry of Commerce and Industry',
  },
  {
    id: 5,
    name: 'Ministry of Co-operation',
  },
  {
    id: 6,
    name: 'Ministry of Food Processing Industries',
  },
  {
    id: 7,
    name: 'Ministry of External Affairs',
  },
  {
    id: 8,
    name: 'Ministry of Finance',
  },
  {
    id: 9,
    name: 'Ministry of Micro, Small and Medium Enterprises',
  },
  {
    id: 10,
    name: 'Ministry of Fisheries, Animal Husbandry and Dairying',
  },
  {
    id: 11,
    name: 'Ministry of Human Resource Development',
  },
  {
    id: 12,
    name: 'Ministry of Shipping',
  },
  {
    id: 13,
    name: 'Ministry of Skill Development and Entrepreneurship',
  },
  {
    id: 14,
    name: 'Ministry of AYUSH',
  },
  {
    id: 15,
    name: 'Ministry of Textiles',
  },
]
const stateList = [
  {
    id: '1',
    name: 'Andhra Pradesh',
  },
  {
    id: '2',
    name: 'Telangana',
  },
]
const feedServicesList = [
  {
    id: '1',
    name: 'FPO/FPC',
  },
  {
    id: '2',
    name: 'FARM',
  },
  {
    id: '3',
    name: 'BUSINESS',
  },
  {
    id: '4',
    name: 'EXPORTS',
  },
  {
    id: '5',
    name: 'MARKET',
  },
  {
    id: '6',
    name: 'PRODUCTS',
  },
  {
    id: '7',
    name: 'EDUCATION',
  },
  {
    id: '8',
    name: 'OTHER SERVICES',
  },
]
const updatesCards = [
  {
    id: '',
    authorTitle: 'FIEO',
    logo: 'fieo.png',
    date: 'September 25 2021',
    image: 'fieoup.jpeg',
    content:
      '"Exports should be a National priority and all stakeholders should work in tandem to achieve it. FIEO, under my leadership, would work shoulder to shoulder with the Government to meet this objective", says Dr A Sakthivel, President, FIEO. "Exports should be a National priority and all stakeholders should work in tandem to achieve it. FIEO, under my leadership, would work shoulder to shoulder with the Government to meet this objective", says Dr A Sakthivel, President, FIEO.',
  },
  {
    id: '',
    authorTitle: 'IBEF',
    logo: 'ibef.png',
    date: 'September 25 2021',
    image: 'ibefup.jpeg',
    content:
      'The demand for electronic products will rise to US$ 400 billion by 2025 from US$ 33 billion in FY20. #RecentUpdates',
  },
  {
    id: '',
    authorTitle: 'COMMERCE',
    logo: '',
    date: 'September 25 2021',
    image: 'commerceup.jpeg',
    content:
      'Join us as we organize special events and programmes throughout next week as part of the #AzadiKaAmritMahotsav celebrations. The Department of Commerce will observe the ‘Vanijya Saptah’ (Trade & Commerce Week) during the period 20-26 September, 2021 #AmritMahotsav #IconicWeek',
  },
  {
    id: '',
    authorTitle: 'APEDA',
    logo: '',
    date: 'September 25 2021',
    image: 'apedaup.jpeg',
    content:
      'To commemorate 75 years of independence being celebrated with the theme #AzadiKaAmritMahotsav, #APEDA organized ‘#VanijyaSaptah’ at an Exporters conclave titled “Reinvigorating the Exporters” at #Visakhapatnam, #AndhraPradesh. #VanijyaUtsav #AatmanirbharBharat #IndiaAt75',
  },
  {
    id: '',
    authorTitle: 'MSME',
    logo: '',
    date: 'September 25 2021',
    image: 'msmeup.jpeg',
    content:
      'Hurry! Mark your calendar as NSSHO,  Bhubaneswar & Br. MSME-DI, Rayagada is organising a One-day Camp (Awareness Programme) on NSSH Schemes through Virtual Platform on 21.09.2021, Time-  04:00 PM-05:30 PM#SCST #scsthub #NSSH #MSME',
  },
  {
    id: '',
    authorTitle: 'SKILL INDIA',
    logo: '',
    date: 'September 25 2021',
    image: 'skillindianup.jpeg',
    content:
      'Azadi ka Amrit Mahotsav: India@75 ASCI is organizing Webinar in the series ‘Agri Skills’ on the topic ’Cotton Sustainability’Cotton is one of the most important fiber & cash crop of India & plays an important role in the industrial and agricultural economy.24Sep2021, 2:00PM',
  },
  {
    id: '',
    authorTitle: 'FOOD PROCESSING',
    logo: '',
    date: 'September 25 2021',
    image: 'foodprocessing.jpeg',
    content:
      '#AzadiKaAmritMahotsav | Under the #PMKSY, the development of the FP sector in Assam has not only created direct & indirect employment opportunities for about 14900 people and benefitted about 65000 farmers but has also helped in creating new investment opportunities.',
  },
]

const eventCards = [
  {
    id: '',
    authorTitle: '',
    logo: 'nabardlogo.png',
    date: '',
    image: '',
    content: '',
  },
  {
    id: '',
    authorTitle: '',
    logo: 'fieo.png',
    date: '',
    image: '',
    content: '',
  },
  {
    id: '',
    authorTitle: '',
    logo: 'ibef.png',
    date: '',
    image: '',
    content: '',
  },
  {
    id: '',
    authorTitle: '',
    logo: 'dgft.png',
    date: '',
    image: '',
    content: '',
  },
  {
    id: '',
    authorTitle: '',
    logo: 'nabardlogo.png',
    date: '',
    image: '',
    content: '',
  },
  {
    id: '',
    authorTitle: '',
    logo: 'fieo.png',
    date: '',
    image: '',
    content: '',
  },
]
export default function EventsSection() {
  SwiperCore.use([EffectFade, Navigation, Pagination])
  const useStyles = makeStyles((theme) => ({
    eventsUpdatesHeader: {
      // height: '100px',
      // paddingTop: '25px',
      // background: 'rgb(255,106,0)',
      // background: 'linear-gradient(180deg, rgba(232,196,197,1) 50%, rgba(217,217,220,1) 50%)',
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
  }))
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
  const mobileMenuId = 'primary-search-account-menu-mobile'
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  )
  const [expanded, setExpanded] = useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }
  const [age, setAge] = React.useState('')
  const handleChange = (event) => {
    setAge(event.target.value)
  }
  return (
    <>
      <Grid>
        <Grid style={{ height: '400px' }}>
          <Swiper
            loop="true"
            effect="fade"
            autoplay={{
              delay: 3000,
            }}
            navigation
          >
            {carouselImg.map((item, index) => (
              <SwiperSlide key={index}>
                <Grid>
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/eventupdates/${item.image}`}
                    width="100%"
                    alt="FEED STARTUP SLIDES"
                  />
                </Grid>
              </SwiperSlide>
            ))}
          </Swiper>
        </Grid>
        <Grid className={classes.eventsUpdatesHeader}>
          <div className={classes.grow}>
            <AppBar position="static" color="inherit" className="pt-1">
              <Toolbar>
                <IconButton
                  edge="start"
                  className={classes.menuButton}
                  color="inherit"
                  aria-label="open drawer"
                >
                  <MenuIcon />
                </IconButton>

                <div className={classes.search}>
                  <div className={classes.searchIcon}>
                    <SearchIcon />
                  </div>
                  <InputBase
                    placeholder="Search…"
                    classes={{
                      root: classes.inputRoot,
                      input: classes.inputInput,
                    }}
                    inputProps={{ 'aria-label': 'search' }}
                  />
                </div>
                <TextField
                  fullWidth
                  select
                  label="Ministry's"
                  variant="outlined"
                >
                  {ministryList.map((item) => (
                    <MenuItem key={item.id} value={item.id}>
                      {item.name}
                    </MenuItem>
                  ))}
                </TextField>
                <TextField fullWidth select variant="outlined" label="State">
                  {stateList.map((item) => (
                    <MenuItem key={item.id} value={item.id}>
                      {item.name}
                    </MenuItem>
                  ))}
                </TextField>
                <TextField fullWidth select variant="outlined" label="FEED">
                  {feedServicesList.map((item) => (
                    <MenuItem key={item.id} value={item.id}>
                      {item.name}
                    </MenuItem>
                  ))}
                </TextField>
                <div className={classes.grow} />
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
              </Toolbar>
            </AppBar>
            {renderMobileMenu}
          </div>
        </Grid>
        <Grid>
          <Grid container justifyContent="space-between">
            <Grid
              container
              justifyContent="space-between"
              lg={12}
              className="mt-3 mb-3 p-2"
            >
              <h5>Updates</h5>
            </Grid>
            <Grid container justifyContent="space-evenly">
              {updatesCards.map((item, index) => (
                <Grid item lg={3} className=" my-1" key={index}>
                  <Card className={classes.root}>
                    <CardHeader
                      avatar={
                        <Avatar
                          aria-label="recipe"
                          className={classes.avatar}
                          src={`${process.env.PUBLIC_URL}/assets/eventupdates/${item.logo}`}
                        />
                      }
                      action={
                        <IconButton aria-label="settings">
                          <MoreVertIcon />
                        </IconButton>
                      }
                      title={item.authorTitle}
                      subheader={item.date}
                    />
                    <img
                      className={classes.media}
                      src={`${process.env.PUBLIC_URL}/assets/eventupdates/${item.image}`}
                      title="Paella dish"
                      alt=""
                      style={{
                        height: '150px',
                        width: '100%',
                        objectFit: 'contain',
                      }}
                    />
                    <CardContent>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        {item.content}
                      </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                      <IconButton aria-label="share">
                        <ShareIcon />
                      </IconButton>
                      <IconButton
                        className={clsx(classes.expand, {
                          [classes.expandOpen]: expanded,
                        })}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                      >
                        <ExpandMoreIcon />
                      </IconButton>
                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                      <CardContent>
                        <Typography paragraph>Method:</Typography>
                        <Typography paragraph>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                        </Typography>
                      </CardContent>
                    </Collapse>
                  </Card>
                </Grid>
              ))}
            </Grid>
            <Grid container justifyContent="center" className="mt-3">
              <button className="btn btn-warning mr-3">See all</button>
            </Grid>
          </Grid>
          <Grid container justifyContent="space-between">
            <Grid
              container
              justifyContent="space-between"
              lg={12}
              className="mt-3 mb-3 p-2"
            >
              <h5>Events</h5>
            </Grid>
            <Grid container justifyContent="space-between">
              {eventCards.map((item, index) => (
                <Grid item lg={3} className="mx-1 my-1" key={index}>
                  <Card className={classes.root}>
                    <CardHeader
                      avatar={
                        <Avatar
                          aria-label="recipe"
                          className={classes.avatar}
                          src={`${process.env.PUBLIC_URL}/assets/eventupdates/fieo.png`}
                        />
                      }
                      action={
                        <IconButton aria-label="settings">
                          <MoreVertIcon />
                        </IconButton>
                      }
                      title="FIEO"
                      subheader="September 14, 2016"
                    />
                    <img
                      className={classes.media}
                      src={`${process.env.PUBLIC_URL}/assets/blogs/cardimgone.jpg`}
                      title="Paella dish"
                      alt=""
                    />
                    <CardContent>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                      </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                      <IconButton aria-label="share">
                        <ShareIcon />
                      </IconButton>
                      <IconButton
                        className={clsx(classes.expand, {
                          [classes.expandOpen]: expanded,
                        })}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                      >
                        <ExpandMoreIcon />
                      </IconButton>
                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                      <CardContent>
                        <Typography paragraph>Method:</Typography>
                        <Typography paragraph>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                        </Typography>
                      </CardContent>
                    </Collapse>
                  </Card>
                </Grid>
              ))}
            </Grid>
            <Grid container justifyContent="center" className="mt-3">
              <button className="btn btn-warning mr-3">See all</button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}
