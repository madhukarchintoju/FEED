import React, { useState, useEffect } from 'react'
import './myMarket.css'
import Header from './header'
import Categories from './categories'
import './single-product.css'
import Enquiry from './enquiry'
import Members from './members'
import ServicesNavbar from '../ServicesComp/ServicesNavbar/ServicesNavbar.js'
import ProductView from './product-view'
import Comments from './comments'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'react-router-dom'
import axios from 'axios'
import axiosInstance from '../../axios'
import swal from 'sweetalert'
const SingleProduct = () => {
  let { productId } = useParams()
  const [productData, setProductData] = useState({})
  const [categoriesArr, setCategoriesArr] = useState([])
  let jwttoken
  if (
    localStorage.getItem('token') !== null &&
    localStorage.getItem('token') !== ''
  ) {
    jwttoken = localStorage.getItem('token')
  }
  //Fetch all Categories
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const config = {
          headers: {
            Authorization: `Bearer ${jwttoken}`,
          },
        }
        let response = await axiosInstance.get('/categories/all', config)
        let APIResponse = response.data
        if (APIResponse.status === 1) {
          let categoriesData = APIResponse.data
          setCategoriesArr(categoriesData)
        } else if (APIResponse.status === 0) {
          swal('Error', `${APIResponse.message}`, 'error')
        }
      } catch (e) {
        console.log(e)
      }
    }
    if (jwttoken !== '') {
      fetchCategories()
    }
  }, [jwttoken])
  useEffect(() => {
    console.log(productId)
    const fetchProductInfo = async () => {
      const config = {
        headers: {
          Authorization: `Bearer ${jwttoken}`,
        },
      }
      let response = await axios.all([
        axiosInstance.get(`/products/${productId}`, config),
        axiosInstance.get(`/products/all`, config),
        axiosInstance.get(`/categories/all`, config),
      ])
      let productResponse = response[0].data
      let productInfo = productResponse.data
      if (productResponse.status === 1) {
        document.querySelector(
          '.product-name'
        ).innerText = `${productInfo.productName}`
        document.querySelector(
          '.product-title'
        ).innerText = `${productInfo.productName}`
        document.querySelector(
          '.single-product-price'
        ).innerText = `${productInfo.productSellingPrice}`
        setProductData(productInfo)
      } else {
        console.log(productResponse.message)
      }
      // let allProductsResponse=response[1];
      // let allCategoriesResponse=response[2];
    }
    if (productId !== '') {
      fetchProductInfo()
    }
  }, [productId, jwttoken])
  return (
    <>
      <ServicesNavbar></ServicesNavbar>
      <div className="container-fluid my-market">
        <Header categories={categoriesArr}></Header>
        <div className="row">
          <div className="col-lg-9 single-product-box">
            <Categories categories={categoriesArr}></Categories>
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-12">
                  <h6>
                    FEED &gt; Categories &gt;{' '}
                    <span className="category-name">Fruits</span> &gt;{' '}
                    <span className="product-name">Banana</span>
                  </h6>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-5">
                  <ProductView productInfo={productData}></ProductView>
                </div>
                <div className="col-lg-7 d-flex">
                  <div className="productInfo">
                    <h1 className="mb-3 product-title"></h1>
                    {/* <h2 className="mb-3">Best Offer</h2> */}
                    <h3 className="mb-3">
                      Rs. <span class="single-product-price"></span>/- Per Kg
                    </h3>
                    <div className="prod-quantity">
                      <h4>
                        Quantity&nbsp;
                        <input
                          type="number"
                          name="quantity"
                          id="prod-quan-inp"
                        />
                      </h4>
                    </div>
                    <hr />
                    <p>SELLER DETAILS</p>
                    <h5 className="company-title">Some title</h5>
                    <h6 class="company-location">New Delhi, India</h6>
                    <button type="button" className="add-to-list">
                      ADD TO LIST
                    </button>
                  </div>
                  <div className="rating-and-enquiry">
                    <form>
                      <div className="form-group">
                        <label for="">Email</label>
                        <input
                          type="email"
                          name="email"
                          className="form-control"
                        />
                      </div>
                      <div className="form-group">
                        <label for="">Phone No.</label>
                        <input
                          type="text"
                          name="phoneno"
                          className="form-control"
                        />
                      </div>
                      <div className="form-group">
                        <label for="">Write Description</label>
                        <textarea
                          name="email"
                          className="form-control"
                        ></textarea>
                      </div>
                      <div className="form-group text-center">
                        <button type="submit" className="enquiry-submit">
                          SEND ENQUIRY
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <h4 className="text-center mt-4">
                    Compare other seller products
                  </h4>
                </div>
              </div>
              <div className="row other-seller-products p-3">
                <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2 product-wrapper">
                  <div className="product">
                    <img
                      src={`${process.env.PUBLIC_URL}/assets/my-market/products/banana.png`}
                      alt="banana"
                    />
                    <h5>BANANA</h5>
                    <h6>
                      Rs.<span className="price-value">50</span>/- per{' '}
                      <span className="units">Kg</span>
                    </h6>
                    <div className="q-inp-box text-center">
                      Quantity:&nbsp;
                      <input
                        type="text"
                        name="quantity"
                        className="q-inp"
                        pattern="[1-9]+"
                        value="1"
                      />
                    </div>
                    <p className="text-center">
                      <b className="company-name">
                        Vinayaka Banana Growers FPO
                      </b>
                    </p>
                    <p>
                      <i class="fas fa-phone-alt"></i>&nbsp;
                      <span className="phone">+91 9999999999</span>
                    </p>
                    <div className="text-center">
                      <span className="contact-supplier">Contact Supplier</span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2 product-wrapper">
                  <div className="product">
                    <img
                      src={`${process.env.PUBLIC_URL}/assets/my-market/products/banana.png`}
                      alt="banana"
                    />
                    <h5>BANANA</h5>
                    <h6>
                      Rs.50/- per <span className="units">Kg</span>
                    </h6>
                    <div className="q-inp-box text-center">
                      Quantity:&nbsp;
                      <input
                        type="text"
                        name="quantity"
                        className="q-inp"
                        pattern="[1-9]+"
                        value="1"
                      />
                    </div>
                    <p className="text-center">
                      <b className="company-name">
                        Vinayaka Banana Growers FPO
                      </b>
                    </p>
                    <p>
                      <i class="fas fa-phone-alt"></i>&nbsp;
                      <span className="phone">+91 9999999999</span>
                    </p>
                    <div className="text-center">
                      <span className="contact-supplier">Contact Supplier</span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2 product-wrapper">
                  <div className="product">
                    <img
                      src={`${process.env.PUBLIC_URL}/assets/my-market/products/banana.png`}
                      alt="banana"
                    />
                    <h5>BANANA</h5>
                    <h6>
                      Rs.50/- per <span className="units">Kg</span>
                    </h6>
                    <div className="q-inp-box text-center">
                      Quantity:&nbsp;
                      <input
                        type="text"
                        name="quantity"
                        className="q-inp"
                        pattern="[1-9]+"
                        value="1"
                      />
                    </div>
                    <p className="text-center">
                      <b className="company-name">
                        Vinayaka Banana Growers FPO
                      </b>
                    </p>
                    <p>
                      <i class="fas fa-phone-alt"></i>&nbsp;
                      <span className="phone">+91 9999999999</span>
                    </p>
                    <div className="text-center">
                      <span className="contact-supplier">Contact Supplier</span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2 product-wrapper">
                  <div className="product">
                    <img
                      src={`${process.env.PUBLIC_URL}/assets/my-market/products/banana.png`}
                      alt="banana"
                    />
                    <h5>BANANA</h5>
                    <h6>
                      Rs.50/- per <span className="units">Kg</span>
                    </h6>
                    <div className="q-inp-box text-center">
                      Quantity:&nbsp;
                      <input
                        type="text"
                        name="quantity"
                        className="q-inp"
                        pattern="[1-9]+"
                        value="1"
                      />
                    </div>
                    <p className="text-center">
                      <b className="company-name">
                        Vinayaka Banana Growers FPO
                      </b>
                    </p>
                    <p>
                      <i class="fas fa-phone-alt"></i>&nbsp;
                      <span className="phone">+91 9999999999</span>
                    </p>
                    <div className="text-center">
                      <span className="contact-supplier">Contact Supplier</span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2 product-wrapper">
                  <div className="product">
                    <img
                      src={`${process.env.PUBLIC_URL}/assets/my-market/products/banana.png`}
                      alt="banana"
                    />
                    <h5>BANANA</h5>
                    <h6>
                      Rs.50/- per <span className="units">Kg</span>
                    </h6>
                    <div className="q-inp-box text-center">
                      Quantity:&nbsp;
                      <input
                        type="text"
                        name="quantity"
                        className="q-inp"
                        pattern="[1-9]+"
                        value="1"
                      />
                    </div>
                    <p className="text-center">
                      <b className="company-name">
                        Vinayaka Banana Growers FPO
                      </b>
                    </p>
                    <p>
                      <i class="fas fa-phone-alt"></i>&nbsp;
                      <span className="phone">+91 9999999999</span>
                    </p>
                    <div className="text-center">
                      <span className="contact-supplier">Contact Supplier</span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2 product-wrapper">
                  <div className="product">
                    <img
                      src={`${process.env.PUBLIC_URL}/assets/my-market/products/banana.png`}
                      alt="banana"
                    />
                    <h5>BANANA</h5>
                    <h6>
                      Rs.50/- per <span className="units">Kg</span>
                    </h6>
                    <div className="q-inp-box text-center">
                      Quantity:&nbsp;
                      <input
                        type="text"
                        name="quantity"
                        className="q-inp"
                        pattern="[1-9]+"
                        value="1"
                      />
                    </div>
                    <p className="text-center">
                      <b className="company-name">
                        Vinayaka Banana Growers FPO
                      </b>
                    </p>
                    <p>
                      <i class="fas fa-phone-alt"></i>&nbsp;
                      <span className="phone">+91 9999999999</span>
                    </p>
                    <div className="text-center">
                      <span className="contact-supplier">Contact Supplier</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <h4 className="text-center mt-4">Other Related Categories</h4>
                </div>
              </div>
              <div className="row related-categories p-3">
                <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2 product-wrapper">
                  <div className="product">
                    <img
                      src={`${process.env.PUBLIC_URL}/assets/my-market/products/banana.png`}
                      alt="banana"
                    />
                    <h5>BANANA</h5>
                    <h6>
                      Rs.50/- per <span className="units">Kg</span>
                    </h6>
                    <div className="q-inp-box text-center">
                      Quantity:&nbsp;
                      <input
                        type="text"
                        name="quantity"
                        className="q-inp"
                        pattern="[1-9]+"
                        value="1"
                      />
                    </div>
                    <p className="text-center">
                      <b className="company-name">
                        Vinayaka Banana Growers FPO
                      </b>
                    </p>
                    <p>
                      <i class="fas fa-phone-alt"></i>&nbsp;
                      <span className="phone">+91 9999999999</span>
                    </p>
                    <div className="text-center">
                      <span className="contact-supplier">Contact Supplier</span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2 product-wrapper">
                  <div className="product">
                    <img
                      src={`${process.env.PUBLIC_URL}/assets/my-market/products/banana.png`}
                      alt="banana"
                    />
                    <h5>BANANA</h5>
                    <h6>
                      Rs.50/- per <span className="units">Kg</span>
                    </h6>
                    <div className="q-inp-box text-center">
                      Quantity:&nbsp;
                      <input
                        type="text"
                        name="quantity"
                        className="q-inp"
                        pattern="[1-9]+"
                        value="1"
                      />
                    </div>
                    <p className="text-center">
                      <b className="company-name">
                        Vinayaka Banana Growers FPO
                      </b>
                    </p>
                    <p>
                      <i class="fas fa-phone-alt"></i>&nbsp;
                      <span className="phone">+91 9999999999</span>
                    </p>
                    <div className="text-center">
                      <span className="contact-supplier">Contact Supplier</span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2 product-wrapper">
                  <div className="product">
                    <img
                      src={`${process.env.PUBLIC_URL}/assets/my-market/products/banana.png`}
                      alt="banana"
                    />
                    <h5>BANANA</h5>
                    <h6>
                      Rs.50/- per <span className="units">Kg</span>
                    </h6>
                    <div className="q-inp-box text-center">
                      Quantity:&nbsp;
                      <input
                        type="text"
                        name="quantity"
                        className="q-inp"
                        pattern="[1-9]+"
                        value="1"
                      />
                    </div>
                    <p className="text-center">
                      <b className="company-name">
                        Vinayaka Banana Growers FPO
                      </b>
                    </p>
                    <p>
                      <i class="fas fa-phone-alt"></i>&nbsp;
                      <span className="phone">+91 9999999999</span>
                    </p>
                    <div className="text-center">
                      <span className="contact-supplier">Contact Supplier</span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2 product-wrapper">
                  <div className="product">
                    <img
                      src={`${process.env.PUBLIC_URL}/assets/my-market/products/banana.png`}
                      alt="banana"
                    />
                    <h5>BANANA</h5>
                    <h6>
                      Rs.50/- per <span className="units">Kg</span>
                    </h6>
                    <div className="q-inp-box text-center">
                      Quantity:&nbsp;
                      <input
                        type="text"
                        name="quantity"
                        className="q-inp"
                        pattern="[1-9]+"
                        value="1"
                      />
                    </div>
                    <p className="text-center">
                      <b className="company-name">
                        Vinayaka Banana Growers FPO
                      </b>
                    </p>
                    <p>
                      <i class="fas fa-phone-alt"></i>&nbsp;
                      <span className="phone">+91 9999999999</span>
                    </p>
                    <div className="text-center">
                      <span className="contact-supplier">Contact Supplier</span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2 product-wrapper">
                  <div className="product">
                    <img
                      src={`${process.env.PUBLIC_URL}/assets/my-market/products/banana.png`}
                      alt="banana"
                    />
                    <h5>BANANA</h5>
                    <h6>
                      Rs.50/- per <span className="units">Kg</span>
                    </h6>
                    <div className="q-inp-box text-center">
                      Quantity:&nbsp;
                      <input
                        type="text"
                        name="quantity"
                        className="q-inp"
                        pattern="[1-9]+"
                        value="1"
                      />
                    </div>
                    <p className="text-center">
                      <b className="company-name">
                        Vinayaka Banana Growers FPO
                      </b>
                    </p>
                    <p>
                      <i class="fas fa-phone-alt"></i>&nbsp;
                      <span className="phone">+91 9999999999</span>
                    </p>
                    <div className="text-center">
                      <span className="contact-supplier">Contact Supplier</span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2 product-wrapper">
                  <div className="product">
                    <img
                      src={`${process.env.PUBLIC_URL}/assets/my-market/products/banana.png`}
                      alt="banana"
                    />
                    <h5>BANANA</h5>
                    <h6>
                      Rs.50/- per <span className="units">Kg</span>
                    </h6>
                    <div className="q-inp-box text-center">
                      Quantity:&nbsp;
                      <input
                        type="text"
                        name="quantity"
                        className="q-inp"
                        pattern="[1-9]+"
                        value="1"
                      />
                    </div>
                    <p className="text-center">
                      <b className="company-name">
                        Vinayaka Banana Growers FPO
                      </b>
                    </p>
                    <p>
                      <i class="fas fa-phone-alt"></i>&nbsp;
                      <span className="phone">+91 9999999999</span>
                    </p>
                    <div className="text-center">
                      <span className="contact-supplier">Contact Supplier</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <Enquiry></Enquiry>
            <Members></Members>
            <Comments product={productId}></Comments>
          </div>
        </div>
      </div>
    </>
  )
}

export default SingleProduct
