import React from 'react'
import './myMarketProductCard.css'
import { makeStyles } from '@material-ui/core/styles'
import { Divider, Grid } from '@material-ui/core'
import Rating from '@material-ui/lab/Rating'
import IconButton from '@material-ui/core/IconButton'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
const useStyles = makeStyles((theme) => ({
  productCard: {
    minWidth: '250px',
    /* position: relative; */
    /* box-shadow: 0 2px 7px #dfdfdf; */
    /* margin: 50px auto; */
    background: '#f7f7f7',
    // border:'1px solid red',
    // borderBottom:'1px solid red',
    borderRadius: '10px 10px',
    '@media (max-width: 768px)': {
      width: `80px`,
      // height: `6em` || '3em',
      border: '1px solid red',
    },
    '&:hover': {
      boxShadow: '0px 0px 1px 0px rgba(0,0,0,0.75)',
    },
  },
  tradeNowBtn: {
    padding: '5px',
    background:
      'linear-gradient(180deg, rgba(249,193,32,1) 35%, rgba(248,66,2,1) 100%)',
    border: 'none',
    fontWeight: '600',
    borderRadius: '5px 5px',
  },
  locationStyle: {
    fontSize: '14px',
  },
}))
export default function MyMarketProductCard(props) {
  const classes = useStyles()

  return (
    <>
      <div className={classes.productCard}>
        <div class="product-tumb">
          <img
            src={`${process.env.PUBLIC_URL}/assets/my-market/${props.image}`}
            alt=""
          />
        </div>
        <div class="product-details">
          <Grid container justifyContent="space-between">
            <h5>{props.name}</h5>
            <IconButton aria-label="delete" style={{ padding: '0px' }}>
              <FavoriteBorderIcon />
            </IconButton>
          </Grid>
          <h6>
            Price :{' '}
            <span style={{ color: 'red', fontWeight: '700' }}>
              Rs {props.price}/-
            </span>{' '}
            Kg
          </h6>
          <Divider />
          <h6 style={{ color: '#527c9d' }}>{props.company}</h6>
          <p className={classes.locationStyle}>{props.location}</p>
          <Grid
            style={{
              display: 'flex',
              justifyContent: 'space-between',
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
        </div>
      </div>
    </>
  )
}
