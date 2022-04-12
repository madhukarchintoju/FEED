import React from 'react'
import { Grid, makeStyles } from '@material-ui/core'
import MyMarketFilters from '../myMarketFilters/myMarketFilters'
import MyMarketProductCard from '../myMarketProductCard/myMarketProductCard'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
  productSelectionWrap: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px',
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
function MyMarketProductSelection() {
  const classes = useStyles()
  return (
    <>
      <div className={classes.productSelectionWrap}>
        <Grid style={{ width: '18%' }}>
          <MyMarketFilters />
        </Grid>
        <Grid
          item
          style={{ width: '70%', backgroundColor: 'white', padding: '10px' }}
        >
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
        <Grid
          style={{
            width: '10%',
            padding: '3px',
            textAlign: 'center',
            backgroundColor: 'white',
          }}
        >
          <h6>Search by Category</h6>
          <hr />
          <div style={{ display: 'grid' }}>
            <button className="btn btn-warning">FPC</button>
            <hr />
            <button className="btn btn-success">FARMER</button>
            <hr />
            <button className="btn btn-primary">MSME</button>
            <hr />
            <button className="btn btn-info">EXPORTS</button>
          </div>
        </Grid>
      </div>
    </>
  )
}

export default MyMarketProductSelection
