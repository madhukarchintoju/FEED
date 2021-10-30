import React from 'react'
import './myMarketHome.css'
import { Grid, TextField, InputAdornment, Divider } from '@material-ui/core'
import { alpha, makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
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
import Rating from '@material-ui/lab/Rating'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'

import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  EffectFade,
} from 'swiper'
import 'swiper/swiper.min.css'
import 'swiper/components/navigation/navigation.min.css'
import MyMarketProductCard from '../myMarketProductCard/myMarketProductCard'
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade])
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
    background: '#f7f7f7',
    justifyContent: 'space-between',
    // paddingBottom: '5px',
    borderRadius: '15px 15px',
    // backgroundColor: 'white',
    '&:hover': {
      boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)',
      webkitBoxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)',
      mozBoxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)',
    },
  },
  featuredProductListCardDetails: {
    padding: '15px',
  },
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
export default function MyMarketHome() {
  const classes = useStyles()
  const carouselImg = [
    {
      image: 'pineapplebanner.png',
      link: '',
    },
    {
      image: 'bannerone.jpg',
      link: '',
    },
    {
      image: 'ecombannerone.png',
      link: '',
    },
  ]
  const browseCategoryList = [
    {
      name: 'Fruits',
      img: 'fruit.png',
    },
    {
      name: 'Vegetables',
      img: 'veg.png',
    },
    {
      name: 'Cereals',
      img: 'cerls.png',
    },
    {
      name: 'Spices',
      img: 'spice.png',
    },
    {
      name: 'Oil Seeds',
      img: 'oilseeds.png',
    },
    {
      name: 'Aqua',
      img: 'aquaa.png',
    },
    {
      name: 'Dairy',
      img: 'milk.png',
    },
  ]
  const featuredProductsList = [
    {
      name: 'Onions',
      img: 'onions.jpg',
      price: 35,
      traderName: 'Rudra Pvt Ltd',
      area: 'Mangalagiri, Guntur Dist.',
    },
    {
      name: 'Grapes',
      img: 'grapes.png',
      price: 60,
      traderName: 'Mitra Pvt Ltd',
      area: 'Chittor, Chittor Dist.',
    },
    {
      name: 'Fish',
      img: 'eatfish.jpg',
      price: 25,
      traderName: 'Chitra Pvt Ltd',
      area: 'Bhimavaram, West Godavari Dist.',
    },
    {
      name: 'Mango',
      img: 'mango.png',
      price: 45,
      traderName: 'Nakshatra Pvt Ltd',
      area: 'Nellore Dist',
    },
    {
      name: 'Wheat',
      img: 'wheat.jpg',
      price: '25',
      traderName: 'Chitra Pvt Ltd',
      area: 'Bhimavaram, West Godavari Dist.',
    },
  ]
  const CategoryList = [
    {
      name: 'FPO',
      img: 'fpoiconimg.png',
    },
    {
      name: 'Farmer',
      img: 'farmerimg.png',
    },
    {
      name: 'MSME',
      img: 'msmeimg.png',
    },
    {
      name: 'Exporter',
      img: 'exporterimg.png',
    },
  ]
  const mostTradeProducts = [
    {
      name: 'Garlic',
      img: 'garlic.png',
      price: '45',
      traderName: 'Rudra Pvt Ltd',
      area: 'Mangalagiri, Guntur Dist.',
    },
    {
      name: 'Tomato',
      img: 'tomato.png',
      price: '20',
      traderName: 'Mitra Pvt Ltd',
      area: 'Chittor, Chittor Dist.',
    },
    {
      name: 'Banana',
      img: 'banana.png',
      price: '25',
      traderName: 'Chitra Pvt Ltd',
      area: 'Bhimavaram, West Godavari Dist.',
    },
    {
      name: 'Lemon',
      img: 'lemon.png',
      price: '30',
      traderName: 'Ditra Pvt Ltd',
      area: 'Nellore Dist',
    },
    {
      name: 'Mushroom',
      img: 'mushroom.jpg',
      price: '120',
      traderName: 'Nakshatra Pvt Ltd',
      area: 'Nellore Dist',
    },
  ]
  const marketCategoryList = [
    {
      name: '',
      image: '',
    },
    {
      name: '',
      image: '',
    },
    {
      name: '',
      image: '',
    },
    {
      name: '',
      image: '',
    },
    {
      name: '',
      image: '',
    },
    {
      name: '',
      image: '',
    },
    {
      name: '',
      image: '',
    },
    {
      name: '',
      image: '',
    },
    {
      name: '',
      image: '',
    },
  ]
  return (
    <>
      {window.innerWidth > 568 ? (
        <Grid
          container
          justifyContent="space-around"
          style={{ padding: '5px' }}
        >
          <Grid lg={12} item className={classes.marketHomeBannerWrap}>
            <Swiper
              loop="true"
              autoplay={{
                delay: 4000,
              }}
              pagination={true}
            >
              {carouselImg.map((item, index) => (
                <SwiperSlide key={index}>
                  <Grid>
                    <div
                      style={{
                        width: '100%',
                        height: '350px',
                        backgroundSize: '100%',
                        backgroundImage: `URL("${process.env.PUBLIC_URL}/assets/my-market/${item.image}")`,
                      }}
                      // width="100" height="363"
                      // src={`${process.env.PUBLIC_URL}/assets/my-market/${item.image}`}
                      alt="FEED STARTUP SLIDES"
                    />
                  </Grid>
                </SwiperSlide>
              ))}
            </Swiper>
          </Grid>
        </Grid>
      ) : (
        ''
      )}
      <div style={{ width: '95%', margin: 'auto' }}>
        <Grid
          style={{
            background:
              'linear-gradient(180deg, rgba(255,255,255,1) 35%, rgba(227,235,222,1) 100%)',
          }}
        >
          <Grid lg={12} style={{ margin: '20px 10px' }}>
            <Grid
              container
              justifyContent="space-between"
              style={{ margin: '10px 0px' }}
            >
              <h4>Browse by Category</h4>
              <button className="btn btn-warning">View All</button>
            </Grid>
            <Grid container justifyContent="space-between">
              {browseCategoryList.map((item, index) => (
                <div lg={2} key={index} className="text-center">
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/my-market/${item.img}`}
                    alt="..."
                    width="80%"
                  />
                  <div className="text-center">
                    <h5>{item.name}</h5>
                  </div>
                </div>
              ))}
            </Grid>
          </Grid>
          <Grid
            container
            lg={12}
            item
            className="m-auto"
            style={{
              backgroundImage: `URL("${process.env.PUBLIC_URL}/assets/my-market/bgpattern.png")`,
            }}
          >
            <Grid item lg={10} className={classes.multipleQuotesFormWrap}>
              <Grid
                container
                lg={12}
                display="flex"
                justifyContent="space-between"
              >
                <Grid
                  lg={6}
                  md={6}
                  item
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}
                >
                  <p style={{ fontSize: '26px' }}>
                    We Connect{' '}
                    <span style={{ fontWeight: '600' }}>
                      Buyers &amp; Sellers
                    </span>
                  </p>
                  <p>
                    <span style={{ fontWeight: 'bold' }}>FEED My Market</span>{' '}
                    is one of the India's largest online B2B marketplace,
                    connecting buyers with suppliers.
                  </p>
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/my-market/feedbullkart.png`}
                    alt="..."
                    width="70%"
                  />
                </Grid>
                <Grid lg={5} md={5} sm={12} xs={12} item>
                  <Grid className={classes.ormq}>
                    <h5>One Requirement For Multiple Quotes</h5>
                  </Grid>
                  <form>
                    <Grid lg={12}>
                      <TextField
                        fullWidth
                        variant="outlined"
                        label="Product Name"
                        margin="normal"
                      />
                    </Grid>
                    <Grid lg={12}>
                      <TextField
                        fullWidth
                        variant="outlined"
                        label="Order Value"
                        margin="normal"
                      />
                    </Grid>
                    <Grid lg={12}>
                      <TextField
                        fullWidth
                        variant="outlined"
                        label="Quantity"
                        margin="normal"
                      />
                    </Grid>
                    <Grid lg={12}>
                      <TextField
                        fullWidth
                        label="Description"
                        placeholder="Enter Description"
                        multiline
                        rows={4}
                        variant="outlined"
                        name="Description"
                        margin="normal"
                      />
                    </Grid>
                    <Grid container justifyContent="center">
                      <button className="btn btn-danger">Send Request</button>
                    </Grid>
                  </form>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid lg={11} style={{ margin: '20px auto', padding: '10px' }}>
          <Grid
            container
            justifyContent="space-between"
            style={{ margin: '10px 0px' }}
          >
            <h4>Featured Products</h4>
            <button className="btn btn-warning">View All</button>
          </Grid>
          <Grid container justifyContent="space-between">
            {featuredProductsList.map((item, index) => (
              <Grid
                item
                lg={2}
                sm={12}
                xs={12}
                key={index}
                // className={classes.featuredProductListCard}
              >
                {/* <Grid
                  style={{
                    borderRadius: '15px 15px 0px 0px',
                    height: '50%',
                  }}
                >
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/my-market/${item.img}`}
                    alt="..."
                    style={{
                      borderRadius: '15px 15px 0px 0px',
                      minHeight: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </Grid> */}
                {/* <Grid
                  style={{ padding: '5px 5px', height: '45%' }}
                  className={classes.featuredProductListCardDetails}
                >
                  <Grid container justifyContent="space-between">
                    <h5>{item.name}</h5>
                    <IconButton aria-label="delete" style={{ padding: '0px' }}>
                      <FavoriteBorderIcon />
                    </IconButton>
                  </Grid>
                  <h6>
                    Price :{' '}
                    <span style={{ color: 'red', fontWeight: '700' }}>
                      Rs {item.price}/-
                    </span>{' '}
                    Kg
                  </h6>
                  <Divider />
                  <h6 style={{ color: '#39698f' }}>{item.traderName}</h6>
                  <h6 className="m-0">{item.area}</h6>
                </Grid> */}
                {/* <Grid
                  style={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                  }}
                >
                  <button className={classes.tradeNowBtn}>Trade Now</button>
                  <Rating
                    name="size-small"
                    defaultValue={4}
                    size="small"
                    precision={0.5}
                  />
                </Grid> */}
                <MyMarketProductCard
                  name={item.name}
                  image={item.img}
                  company={item.traderName}
                  price={item.price}
                  location={item.area}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>

        <Grid lg={10} className="categoryCardWrap">
          {CategoryList.map((item, index) => (
            <Grid key={index}>
              <div className="categoryCard">
                <h2 className="categoryCardTitle">{item.name}</h2>
                <img
                  src={`${process.env.PUBLIC_URL}/assets/my-market/${item.img}`}
                  alt="..."
                />
                <Grid
                  style={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                  }}
                >
                  <button className="btn btn-danger">Buy Now</button>
                  <button className="btn btn-success">Sell Here</button>
                </Grid>
              </div>
            </Grid>
          ))}
        </Grid>
        <Grid lg={11} style={{ margin: '20px auto', padding: '10px' }}>
          <Grid
            container
            justifyContent="space-between"
            style={{ margin: '10px 0px' }}
          >
            <h4>Most Trade Products</h4>
            <button className="btn btn-warning">View All</button>
          </Grid>
          <Grid container justifyContent="space-between">
            {mostTradeProducts.map((item, index) => (
              // <Grid
              //   item
              //   lg={2}
              //   md={3}
              //   sm={6}
              //   xs={6}
              //   key={index}
              //   className={classes.featuredProductListCard}
              // >
              //   <img
              //     src={`${process.env.PUBLIC_URL}/assets/my-market/${item.img}`}
              //     alt="..."
              //     width="100%"
              //     style={{
              //       borderRadius: '15px 15px 0px 0px',
              //       height: '45%',
              //       objectFit: 'cover',
              //     }}
              //   />
              //   <div style={{ padding: '5px 5px' }}>
              //     <Grid container justifyContent="space-between">
              //       <h5>{item.name}</h5>
              //       <IconButton aria-label="delete" style={{ padding: '0px' }}>
              //         <FavoriteBorderIcon />
              //       </IconButton>
              //     </Grid>
              //     <h6>
              //       Price :{' '}
              //       <span style={{ color: 'red', fontWeight: '700' }}>
              //         Rs {item.price}/-
              //       </span>{' '}
              //       Kg
              //     </h6>

              //     <Divider />
              //     <h6 style={{ color: '#39698f' }}>{item.traderName}</h6>
              //     <h6 style={{fontSize:'14px'}}>{item.area}</h6>
              //   </div>
              //   <Grid
              //     style={{
              //       display: 'flex',
              //       justifyContent: 'space-around',
              //       alignItems: 'center',
              //     }}
              //   >
              //     <button className={classes.tradeNowBtn}>Trade Now</button>
              //     <Rating
              //       name="size-small"
              //       defaultValue={4}
              //       size="small"
              //       precision={0.5}
              //     />
              //   </Grid>
              // </Grid>
              <Grid item lg={2} sm={12} xs={12} key={index}>
                <MyMarketProductCard
                  name={item.name}
                  image={item.img}
                  company={item.traderName}
                  price={item.price}
                  location={item.area}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid lg={11} style={{ margin: '20px auto', padding: '10px' }}>
          <Grid
            container
            justifyContent="space-between"
            style={{ margin: '10px 0px' }}
          >
            <h4>Weakly Deals</h4>
            <button className="btn btn-warning">View All</button>
          </Grid>
          <Grid container justifyContent="space-between">
            {mostTradeProducts.map((item, index) => (
              // <Grid
              //   item
              //   lg={2}
              //   key={index}
              //   className={classes.featuredProductListCard}
              // >
              //   <img
              //     src={`${process.env.PUBLIC_URL}/assets/my-market/${item.img}`}
              //     alt="..."
              //     width="100%"
              //     style={{
              //       borderRadius: '15px 15px 0px 0px',
              //       height: '45%',
              //       objectFit: 'cover',
              //     }}
              //   />
              //   <div style={{ padding: '5px 5px' }}>
              //     <Grid container justifyContent="space-between">
              //       <h5>{item.name}</h5>
              //       <IconButton aria-label="delete" style={{ padding: '0px' }}>
              //         <FavoriteBorderIcon />
              //       </IconButton>
              //     </Grid>
              //     <h6>
              //       Price :{' '}
              //       <span style={{ color: 'red', fontWeight: '700' }}>
              //         Rs {item.price}/-
              //       </span>{' '}
              //       Kg
              //     </h6>
              //     {/* <Rating name="size-small" defaultValue={4} size="small" precision={0.5} /> */}
              //     <Divider />
              //     <h6 style={{ color: '#39698f' }}>{item.traderName}</h6>
              //     <h6>{item.area}</h6>
              //   </div>
              //   <Grid
              //     style={{
              //       display: 'flex',
              //       justifyContent: 'space-around',
              //       alignItems: 'center',
              //     }}
              //   >
              //     <button className={classes.tradeNowBtn}>Trade Now</button>
              //     <Rating
              //       name="size-small"
              //       defaultValue={4}
              //       size="small"
              //       precision={0.5}
              //     />
              //   </Grid>
              // </Grid>
              <Grid item lg={2} sm={12} xs={12} key={index}>
                <MyMarketProductCard
                  name={item.name}
                  image={item.img}
                  company={item.traderName}
                  price={item.price}
                  location={item.area}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
        {/* <Grid container lg={11} item className="m-auto">
          <img src={`${process.env.PUBLIC_URL}/assets/my-market/categorybanner.png`} alt="..." width="100%" />
        </Grid> */}
        <Grid lg={11} style={{ margin: '20px auto', padding: '10px' }}>
          <Grid
            container
            justifyContent="space-between"
            style={{ margin: '10px 0px' }}
          >
            <h4>Recently Viewed</h4>
            <button className="btn btn-warning">View All</button>
          </Grid>
          <Grid container justifyContent="space-between">
            {featuredProductsList.map((item, index) => (
              <Grid
                item
                lg={2}
                key={index}
                className={classes.featuredProductListCard}
              >
                <Grid
                  style={{
                    borderRadius: '15px 15px 0px 0px',
                    minHeight: '50%',
                  }}
                >
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/my-market/${item.img}`}
                    alt="..."
                    style={{
                      borderRadius: '15px 15px 0px 0px',
                      // minHeight: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </Grid>
                <Grid
                  style={{ padding: '5px 5px', height: '45%' }}
                  className={classes.featuredProductListCardDetails}
                >
                  <Grid container justifyContent="space-between">
                    <h5>{item.name}</h5>
                    <IconButton aria-label="delete" style={{ padding: '0px' }}>
                      <FavoriteBorderIcon />
                    </IconButton>
                  </Grid>
                  <h6>
                    Price :{' '}
                    <span style={{ color: 'red', fontWeight: '700' }}>
                      Rs {item.price}/-
                    </span>{' '}
                    Kg
                  </h6>
                  <Divider />
                  <h6 style={{ color: '#39698f' }}>{item.traderName}</h6>
                  <h6>{item.area}</h6>
                </Grid>
                <Grid
                  style={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                  }}
                >
                  <button className={classes.tradeNowBtn}>Trade Now</button>
                  <Rating
                    name="size-small"
                    defaultValue={4}
                    size="small"
                    precision={0.5}
                  />
                </Grid>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </div>
    </>
  )
}
