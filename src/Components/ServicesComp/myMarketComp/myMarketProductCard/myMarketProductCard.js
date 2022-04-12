import React, { useState } from 'react'
import './myMarketProductCard.css'
import { makeStyles } from '@material-ui/core/styles'
import { Divider, Grid, MenuItem, TextField } from '@material-ui/core'
import Rating from '@material-ui/lab/Rating'
import IconButton from '@material-ui/core/IconButton'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import Modal from '@material-ui/core/Modal'

function rand() {
  return Math.round(Math.random() * 20) - 10
}

function getModalStyle() {
  const top = 50 + rand()
  const left = 50 + rand()

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  }
}

const useStyles = makeStyles((theme) => ({
  productCard: {
    minWidth: '240px',
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
      // border: '1px solid red',
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
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}))
export default function MyMarketProductCard(props) {
  const classes = useStyles()
  console.log(props.name)
  const [productRequestFormData, setProductRequestForm] = useState({
    phoneNumber: '',
    product: '',
    orderValue: '',
    quantity: '',
    description: '',
  })
  const { phoneNumber, product, orderValue, quantity, description } =
    productRequestFormData
  const changeProductRequestFormData = (e) => {
    setProductRequestForm({
      ...productRequestFormData,
      [e.target.name]: [e.target.value],
    })
  }
  const productRequestForm = (e) => {
    e.preventDefault()
    console.log(productRequestFormData)
    setProductRequestForm({
      phoneNumber: '',
      orderValue: '',
      quantity: '',
      description: '',
    })
  }
  const [modalStyle] = useState(getModalStyle)
  const [open, setOpen] = useState(false)
  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const modalBody = (
    <div
      className="row col-lg-12 col-md-12 col-sm-12 col-xs-12"
      style={{
        overflow: 'auto',
        padding: '10px',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        top: '50%',
        left: '50%',
        transform: `translate(-50%,-50%)`,
        maxHeight: `calc(100% - 10%)`,
        margin: '0px',
        width: '80%',
        borderRadius: '15px 15px',
      }}
    >
      <Grid lg={4} md={4} sm={12} xs={12}>
        <img
          src={`${process.env.PUBLIC_URL}/assets/my-market/${props.image}`}
          alt=""
        />
        <hr />
        <table
          style={{
            display: 'block',
            justifyContent: 'space-evenly',
            alignItems: 'center',
          }}
          className={classes.productSpecificationsTable}
        >
          <tr>
            <td style={{ width: '200px' }}>
              <h5 className="mb-0">{props.name}</h5>
            </td>
            <td>
              <h5 className="mb-0">
                &#8377; {props.price}/{' '}
                <span style={{ fontSize: '15px' }}>Kg</span>
              </h5>
            </td>
          </tr>
          <hr />
          <tr>
            <td style={{ width: '200px' }}>
              <h6 className="mb-0 text-secondary">Trader Name</h6>
            </td>
            <td>
              <p className="mb-0">{props.company}</p>
            </td>
          </tr>
          <hr />
          <tr>
            <td style={{ width: '200px' }}>
              <h6 className="mb-0 text-secondary">Place of Origin</h6>
            </td>
            <td>
              <p className="mb-0">{props.location}</p>
            </td>
          </tr>
          <hr />
        </table>
      </Grid>
      <Grid item lg={7} md={7} xs={12} sm={12} spacing={2}>
        <form onSubmit={productRequestForm}>
          <h4>Mention Your Requirements</h4>
          <Grid container justifyContent="space-around" spacing={1}>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <TextField
                fullWidth
                margin="normal"
                variant="outlined"
                label="Phone number"
                name="phoneNumber"
                value={phoneNumber}
                onChange={changeProductRequestFormData}
              />
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <TextField
                fullWidth
                margin="normal"
                variant="outlined"
                label="Product"
                name="product"
                value={product}
                onChange={changeProductRequestFormData}
              />
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <TextField
                fullWidth
                margin="normal"
                variant="outlined"
                label="Order Value"
                name="orderValue"
                value={orderValue}
                onChange={changeProductRequestFormData}
              />
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <TextField
                fullWidth
                margin="normal"
                variant="outlined"
                label="Quantity"
                name="quantity"
                value={quantity}
                onChange={changeProductRequestFormData}
              />
            </Grid>
            <Grid item lg={12} md={12} sm={12} xs={12}>
              <TextField
                fullWidth
                id=""
                label="Description"
                placeholder="Product Requirements Description"
                multiline
                margin="normal"
                rows={4}
                variant="outlined"
                name="description"
                value={description}
                onChange={changeProductRequestFormData}
              />
            </Grid>
            <div style={{ textAlign: 'center' }}>
              <button className="btn btn-danger" type="submit">
                Send Request
              </button>
            </div>
          </Grid>
        </form>
      </Grid>
    </div>
  )

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
          <Rating
            name="size-small"
            defaultValue={4}
            size="small"
            precision={0.5}
          />
          <p className={classes.locationStyle}>{props.location}</p>
          <div style={{ textAlign: 'center' }}>
            <button className={classes.tradeNowBtn} onClick={handleOpen}>
              Contact Supplier
            </button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
            >
              {modalBody}
            </Modal>
          </div>
        </div>
      </div>
    </>
  )
}
