import React from 'react'
import { Grid, makeStyles } from '@material-ui/core'
import MyMarketFilters from '../myMarketFilters/myMarketFilters'
import MyMarketProductCard from '../myMarketProductCard/myMarketProductCard'
import Breadcrumbs from '@material-ui/core/Breadcrumbs'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'

function handleClick(event) {
  event.preventDefault()
  console.info('You clicked a breadcrumb.')
}

const useStyles = makeStyles((theme) => ({
  productSelectionWrap: {
    display: 'flex',
    justifyContent: 'space-between',
    borderTop: '2px solid grey',
    marginTop: '5px',
    // border: '1px solid red',
  },
}))
const productsList = [
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
const breadcrumbs = [
  <Link
    underline="hover"
    key="1"
    color="inherit"
    href="/"
    onClick={handleClick}
  >
    My Market
  </Link>,
  <Link
    underline="hover"
    key="2"
    color="inherit"
    href="/getting-started/installation/"
    onClick={handleClick}
  >
    Categories
  </Link>,
  <Typography key="3" color="text.primary">
    Breadcrumb
  </Typography>,
]
function MyMarketProductSelection() {
  const classes = useStyles()
  return (
    <>
      <div className={classes.productSelectionWrap}>
        <Grid lg={2} style={{ boxShadow: '0px 0px 1px 0px rgba(0,0,0,0.75)' }}>
          <MyMarketFilters />
        </Grid>
        <Grid lg={8} item style={{ margin: '0px 10px' }}>
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
            style={{ margin: '5px' }}
          >
            {breadcrumbs}
          </Breadcrumbs>
          <Grid
            container
            lg={12}
            item
            justifyContent="space-between"
            style={{ marginTop: '5px' }}
          >
            {productsList.map((item, index) => (
              <Grid
                item
                lg={3}
                sm={12}
                xs={12}
                key={index}
                style={{ margin: '5px' }}
              >
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
        <Grid lg={2} style={{ boxShadow: '0px 0px 1px 0px rgba(0,0,0,0.75)' }}>
          three
        </Grid>
      </div>
    </>
  )
}

export default MyMarketProductSelection
