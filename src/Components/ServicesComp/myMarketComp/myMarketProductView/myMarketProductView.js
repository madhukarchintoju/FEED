import React, { useState } from 'react'
import './myMarketProductView.css'
import {
  Grid,
  makeStyles,
  Typography,
  TextField,
  MenuItem,
} from '@material-ui/core'
// import { alpha, makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import Avatar from '@material-ui/core/Avatar'
import Rating from '@material-ui/lab/Rating'
import { red } from '@material-ui/core/colors'
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import MyMarketProductCard from '../myMarketProductCard/myMarketProductCard'
import { Swiper, SwiperSlide } from 'swiper/react'
// import "swiper/css";
// import "swiper/css/pagination"

import SwiperCore, { Pagination, Navigation } from 'swiper'
import { textAlign } from '@material-ui/system'

SwiperCore.use([Pagination, Navigation])

const useStyles = makeStyles((theme) => ({
  productSpecificationsTable: {
    'tr:nth-child(even)': {
      backgroundColor: 'grey',
    },
  },
}))

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

function MyMarketProductView() {
  const Images = [
    'assets/my-market/products/mango-one.jpg',
    'assets/my-market/products/mango-two.jpg',
    'assets/my-market/products/mango-three.jpg',
    'assets/my-market/products/mango-four.jpg',
    'assets/my-market/products/mango-two.jpg',
  ]
  const [selectedImg, setSelectedImg] = useState(Images[0])
  const classes = useStyles()

  const [imgArr, setImgArr] = useState(Images)

  const prevImg = () => {
    let i
    let arr = []
    for (i = 0; i < imgArr.length; i++) {
      let prevImage = i--
      arr.push(prevImage)
    }
    setImgArr({ arr })
  }
  const nextImg = (e) => {
    let i
    let arr = [imgArr]
    let nextImageList = [...imgArr]
    nextImageList.index = e.target.value
    // for (i = 0; i < imgArr.length; i++) {
    //   let nextImageList = ({...imgArr})
    //   arr.push(nextImageList);
    // }
    // setImgArr({ arr })
    console.log(nextImageList)
  }
  return (
    <>
      {/*#f1f3f6 #f7eee6 */}
      <div style={{ padding: '5px 50px' }}>
        <div
          className="row"
          style={{
            margin: 'auto',
            justifyContent: 'space-between',
            backgroundColor: 'white',
            padding: '10px 5px',
            borderRadius: '10px 10px',
          }}
        >
          <Grid
            lg={4}
            md={12}
            sm={12}
            xs={12}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                display: 'grid',
                justifyContent: 'space-between',
                height: '400px',
                alignItems: 'center',
              }}
            >
              <Swiper
                direction={'vertical'}
                navigation={true}
                slidesPerView={4}
                spaceBetween={5}
              >
                {Images.map((img, index) => (
                  <Grid lg={12} key={index}>
                    <SwiperSlide>
                      <img
                        style={{
                          width: '74px',
                          height: '74px',
                          padding: selectedImg === img ? '3px' : '',
                          borderRadius: '10px 10px',
                          border:
                            selectedImg === img ? '2px solid #ccb35e' : '',
                        }}
                        width="70"
                        src={`${process.env.PUBLIC_URL}/${img}`}
                        alt="fruits"
                        onMouseEnter={() => setSelectedImg(img)}
                      />
                    </SwiperSlide>
                  </Grid>
                ))}
              </Swiper>
            </div>

            {/* <div style={{ display: 'grid', justifyContent: 'space-between', height: '400px', alignItems: 'center' }}>
              <button onClick={()=>prevImg}>prev</button>
              <Swiper direction={'vertical'} navigation={true} slidesPerView={4} spaceBetween={5}>
                {Images.slice(0,4).map((img, index) => (
                  <Grid lg={12} key={index}>
                    <SwiperSlide>
                      <img
                        style={{
                          width: '74px',
                          height: '74px',
                          padding: selectedImg === img ? '3px' : '',
                          borderRadius: '10px 10px',
                          border: selectedImg === img ? '2px solid #ccb35e' : '',
                        }}
                        width='70'
                        src={`${process.env.PUBLIC_URL}/${img}`}
                        alt="fruits"
                        onMouseEnter={() => setSelectedImg(img)}
                      />
                    </SwiperSlide>
                  </Grid>
                ))}
              </Swiper>
              <button onClick={()=>nextImg()}>next</button>
            </div> */}
            <div style={{ height: '450px' }}>
              <img
                src={`${process.env.PUBLIC_URL}/${selectedImg}`}
                width="100%"
                alt="phone-icon"
                style={{ height: '100%', margin: 'auto' }}
              />
            </div>
          </Grid>
          <Grid lg={8} md={12} sm={12} xs={12} style={{ padding: '0px 10px' }}>
            <div
              className="row"
              style={{ justifyContent: 'space-between', margin: '0px' }}
            >
              <Grid lg={7} md={12} sm={12} xs={12}>
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
                      <h4 className="mb-0">Mango</h4>
                    </td>
                    <td>
                      <h5 className="mb-0">
                        &#8377; 275/{' '}
                        <span style={{ fontSize: '15px' }}>Kg</span>
                      </h5>
                    </td>
                  </tr>
                  <hr />
                  <tr>
                    <td style={{ width: '200px' }}>
                      <h6 className="mb-0 text-secondary">Place of Origin</h6>
                    </td>
                    <td>
                      <p className="mb-0">Vijayawada, Krishna Dist.</p>
                    </td>
                  </tr>
                  <hr />
                  <tr>
                    <td style={{ width: '200px' }}>
                      <h6 className="mb-0 text-secondary">
                        Quantity Available
                      </h6>
                    </td>
                    <td>
                      <p className="mb-0">1000</p>
                    </td>
                  </tr>
                  <hr />
                  <tr>
                    <td style={{ width: '200px' }}>
                      <h6 className="mb-0 text-secondary">Packing Size</h6>
                    </td>
                    <td>
                      <p className="mb-0">50 / kg</p>
                    </td>
                  </tr>
                  <hr />
                  <tr>
                    <td style={{ width: '200px' }}>
                      <h6 className="mb-0 text-secondary">
                        Minimum Order Quantity
                      </h6>
                    </td>
                    <td>
                      <p className="mb-0">100 kg</p>
                    </td>
                  </tr>
                  <hr />
                </table>
              </Grid>
              <Grid lg={4} md={12} sm={12} xs={12}>
                <Card>
                  <CardHeader
                    avatar={
                      <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        R
                      </Avatar>
                    }
                    title="Fruits Farm Producer LTD."
                    subheader="Vijayawada, Krishna Dist."
                    style={{ padding: '2px 5px' }}
                  />
                  <Grid style={{ textAlign: 'center' }}>
                    <Rating defaultValue={4} size="small" />
                    <CardContent>
                      <div>
                        <p style={{ fontSize: '14px' }}>
                          <img
                            src={`${process.env.PUBLIC_URL}/assets/my-market/icons/call.png`}
                            alt=""
                          />{' '}
                          +91 9966332211
                        </p>
                        <p style={{ fontSize: '14px' }}>
                          <img
                            src={`${process.env.PUBLIC_URL}/assets/my-market/icons/email.png`}
                            alt=""
                          />{' '}
                          fruitsfarmerproduce@gmail.com
                        </p>
                      </div>
                      <div
                        style={{ display: 'grid', justifyContent: 'center' }}
                      >
                        <button
                          className="btn btn-primary"
                          style={{
                            fontSize: '12px',
                            fontWeight: 'bold',
                            width: '100%',
                          }}
                        >
                          Seller Certificates
                        </button>
                        <hr />
                        <button
                          className="btn btn-danger"
                          style={{
                            fontSize: '12px',
                            fontWeight: 'bold',
                            width: '100%',
                          }}
                        >
                          Farmer Seller Details
                        </button>
                      </div>
                    </CardContent>
                  </Grid>
                </Card>
              </Grid>
            </div>
            <a href="#">View Details</a>
            <div
              className="row"
              style={{ margin: '5px 0px', justifyContent: 'space-between' }}
            >
              <Grid lg={12}>
                <form>
                  <h5 className="mb-0">Get Latest Price</h5>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <Grid lg={4}>
                      <TextField
                        fullWidth
                        variant="outlined"
                        name="quantity"
                        label="Quantity"
                        margin="normal"
                      />
                    </Grid>
                    <Grid lg={4}>
                      <TextField
                        select
                        fullWidth
                        variant="outlined"
                        name="units"
                        label="Units"
                        margin="normal"
                      >
                        <MenuItem value="kg">Kg</MenuItem>
                        <MenuItem value="dozen">Dozen</MenuItem>
                        <MenuItem value="ton">Ton</MenuItem>
                      </TextField>
                    </Grid>
                    <Grid lg={3}>
                      <button className="btn btn-warning">
                        Get Latest Price
                      </button>
                    </Grid>
                  </div>
                </form>
              </Grid>
            </div>
          </Grid>
        </div>
        <div
          className="row"
          style={{
            justifyContent: 'space-between',
            margin: '10px 0px',
            padding: '10px',
            backgroundColor: 'white',
            borderRadius: '10px 10px',
          }}
        >
          <Grid lg={5} md={5} sm={12} xs={12}>
            <h5>Product Details</h5>
            <hr />
            <h6>Product Description</h6>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
            <h6>Product Specifications</h6>
            <table
              style={{
                display: 'block',
                justifyContent: 'space-evenly',
                alignItems: 'center',
              }}
              className="productSpecificationsTable"
            >
              <tr>
                <td style={{ width: '200px', color: '#6c757d' }}>Crop</td>
                <td>Mango</td>
              </tr>
              <hr />
              <tr>
                <td style={{ width: '200px', color: '#6c757d' }}>
                  Quality Available
                </td>
                <td>A Grade</td>
              </tr>
              <hr />
              <tr>
                <td style={{ width: '200px', color: '#6c757d' }}>
                  Crop Measurements
                </td>
                <td>
                  30-40 m (98-131 ft) tall, with a crown radius of 10-15 m
                  (33-49 ft). The trees are long-lived, as some
                </td>
              </tr>
              <hr />
              <tr>
                <td style={{ width: '200px', color: '#6c757d' }}>
                  Glycemic index of mango
                </td>
                <td>Wholesale</td>
              </tr>
              <hr />
            </table>
          </Grid>
          <Grid lg={5}>
            <h5>Company Details</h5>
            <hr />
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words
            </p>
            <table
              style={{
                display: 'block',
                justifyContent: 'space-evenly',
                alignItems: 'center',
              }}
              className="productSpecificationsTable"
            >
              <tr>
                <td style={{ width: '200px', color: '#6c757d' }}>
                  Year of Establishment
                </td>
                <td>2018</td>
              </tr>
              <hr />
              <tr>
                <td style={{ width: '200px', color: '#6c757d' }}>
                  Legal Status of Firm
                </td>
                <td>Individual - Proprietor</td>
              </tr>
              <hr />
              <tr>
                <td style={{ width: '200px', color: '#6c757d' }}>
                  Nature of Business
                </td>
                <td>Wholesale</td>
              </tr>
              <hr />
              <tr>
                <td style={{ width: '200px', color: '#6c757d' }}>
                  Number of Employees
                </td>
                <td>Upto 20</td>
              </tr>
              <hr />
              <tr>
                <td style={{ width: '200px', color: '#6c757d' }}>
                  Annual Turnover
                </td>
                <td>Rs. 50 Lakh - 1 Crore</td>
              </tr>
              <hr />
            </table>
          </Grid>
        </div>
        <div
          style={{
            marginTop: '10px',
            padding: '5px',
            backgroundColor: 'white',
            borderRadius: '10px 10px',
          }}
        >
          <Grid lg={12}>
            <Grid
              container
              justifyContent="space-between"
              style={{ margin: '10px 0px' }}
            >
              <h4>Similar Products</h4>
              <button className="btn btn-warning">View All</button>
            </Grid>
            <Grid container justifyContent="space-around">
              {mostTradeProducts.map((item, index) => (
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
        </div>
      </div>
    </>
  )
}

export default MyMarketProductView
