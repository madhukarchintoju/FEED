import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import './myMarket.css'
import './products.css'
import ServicesNavbar from '../ServicesComp/ServicesNavbar/ServicesNavbar'
import Header from './header'
import Categories from './categories'
import Enquiry from './enquiry'
import Members from './members'
import FilterMenu from './filtermenu'
import { useParams, Link } from 'react-router-dom'
import { fetchCategories, fetchProducts } from '../../redux/actions'
const Products = () => {
  let { categoryId } = useParams()
  const [productsArr, setProductsArr] = useState([])
  const categoryObj = useSelector((state) => state.categories)
  let categories = categoryObj.categories
  const productsObj = useSelector((state) => state.products)
  let products = productsObj.products
  const dispatch = useDispatch()
  const [visible, setVisible] = useState(4)
  //Fetch a single Category and its products
  useEffect(() => {
    dispatch(fetchProducts())
    dispatch(fetchCategories())
  }, [])
  useEffect(() => {
    categories.forEach((catg) => {
      if (catg.categoryId === categoryId) {
        document.querySelector(
          '.category-name'
        ).innerText = `${catg.categoryName}`
      }
    })
  }, [categories, categoryId])
  useEffect(() => {
    let categorisedProducts = products.filter((product) => {
      return product.categoryId === categoryId
    })
    setProductsArr(categorisedProducts)
  }, [products, categoryId])
  const viewMore = () => {
    setVisible((prevValue) => {
      prevValue = prevValue + 4
    })
  }
  useEffect(() => {
    console.log('Hello', visible)
  }, [visible])
  return (
    <>
      <ServicesNavbar></ServicesNavbar>
      <div className="container-fluid my-market">
        <Header></Header>
        <div className="row">
          <FilterMenu
            categoryId={categoryId}
            setProductsArr={setProductsArr}
          ></FilterMenu>
          <div className="col-lg-7 market-products">
            <Categories></Categories>
            <div className="container-fluid products">
              <div className="row">
                <div className="col-lg-12">
                  <h6>
                    FEED &gt; Categories &gt;{' '}
                    <span className="category-name"></span>
                  </h6>
                </div>
              </div>
              <div className="row products-row">
                {productsArr.length > 0 ? (
                  productsArr.slice(0, visible).map((product, i, arr) => {
                    return (
                      <>
                        {product.moveToMarket === true ? (
                          <>
                            <div
                              className="col-lg-3 col-md-3 col-sm-3 col-xs-3 product-wrapper"
                              key={i}
                            >
                              <div className="product">
                                <img
                                  src={`${product.productImages[0]}`}
                                  alt={product.productName}
                                />
                                <h5>
                                  <Link
                                    style={{
                                      textDecoration: 'none',
                                      color: 'black',
                                    }}
                                    to={`/mymarket/product/${product.productId}`}
                                  >
                                    {product.productName}
                                  </Link>
                                </h5>
                                <h6>
                                  Rs.
                                  <span className="price-value">
                                    {product.productSellingPrice}
                                  </span>
                                  /- per{' '}
                                  <span className="units">
                                    {product.productUnits}
                                  </span>
                                </h6>
                                {/* <div className="q-inp-box text-center">
                                                                    Quantity:&nbsp;<input type="text" name="quantity" className="q-inp" pattern="[1-9]+" value="1"/>
                                                                </div> */}
                                {/* {product.userInfo.fpoName} */}
                                <p className="text-center">
                                  <b className="company-name">
                                    Vinayaka Enterprises
                                  </b>
                                </p>
                                {/* {product.userInfo.mobileNo} */}
                                <p>
                                  <i class="fas fa-phone-alt"></i>&nbsp;
                                  <span className="phone">+919999999999</span>
                                </p>
                                <div className="text-center">
                                  {/* ${product.userInfo.mobileNo} */}
                                  <button className="contact-supplier">
                                    <span>Contact Supplier</span>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </>
                        ) : (
                          ''
                        )}
                      </>
                    )
                  })
                ) : (
                  <h5 className="text-center mt-5 w-100">
                    Products are not there in this Category
                  </h5>
                )}
                {/* <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 product-wrapper">
                                    <div className="product">
                                        <img src={`${process.env.PUBLIC_URL}/assets/my-market/products/banana.png`} alt="banana"/>
                                        <h5>BANANA</h5>
                                        <h6>Rs.<span className="price-value">50</span>/- per <span className="units">Kg</span></h6>
                                        <div className="q-inp-box text-center">
                                            Quantity:&nbsp;<input type="text" name="quantity" className="q-inp" pattern="[1-9]+" value="1"/>
                                        </div>
                                        <p className="text-center"><b className="company-name">Vinayaka Banana Growers FPO</b></p>
                                        <p><FontAwesomeIcon icon={faPhoneAlt}></FontAwesomeIcon>&nbsp;<span className="phone">+91 9999999999</span></p>
                                        <div className="text-center">
                                            <span className="contact-supplier">Contact Supplier</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 product-wrapper">
                                    <div className="product">
                                        <img src={`${process.env.PUBLIC_URL}/assets/my-market/products/apple.png`} alt="apple"/>
                                        <h5>APPLE</h5>
                                        <h6>Rs.50/- per <span className="units">Kg</span></h6>
                                        <div className="q-inp-box text-center">
                                            Quantity:&nbsp;<input type="text" name="quantity" className="q-inp" pattern="[1-9]+" value="1"/>
                                        </div>
                                        <p className="text-center"><b className="company-name">Vinayaka Enterprises</b></p>
                                        <p><FontAwesomeIcon icon={faPhoneAlt}></FontAwesomeIcon>&nbsp;<span className="phone">+91 9999999999</span></p>
                                        <div className="text-center">
                                            <span className="contact-supplier">Contact Supplier</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 product-wrapper">
                                    <div className="product">
                                        <img src={`${process.env.PUBLIC_URL}/assets/my-market/products/pineapple.png`} alt="pineapple"/>
                                        <h5>PINE APPLE</h5>
                                        <h6>Rs.50/- per <span className="units">Kg</span></h6>
                                        <div className="q-inp-box text-center">
                                            Quantity:&nbsp;<input type="text" name="quantity" className="q-inp" pattern="[1-9]+" value="1"/>
                                        </div>
                                        <p className="text-center"><b className="company-name">Vinayaka Enterprises</b></p>
                                        <p><FontAwesomeIcon icon={faPhoneAlt}></FontAwesomeIcon>&nbsp;<span className="phone">+91 9999999999</span></p>
                                        <div className="text-center">
                                            <span className="contact-supplier">Contact Supplier</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 product-wrapper">
                                    <div className="product">
                                        <img src={`${process.env.PUBLIC_URL}/assets/my-market/products/lemon.png`} alt="lemon"/>
                                        <h5>LEMON</h5>
                                        <h6>Rs.50/- per <span className="units">Kg</span></h6>
                                        <div className="q-inp-box text-center">
                                            Quantity:&nbsp;<input type="text" name="quantity" className="q-inp" pattern="[1-9]+" value="1"/>
                                        </div>
                                        <p className="text-center"><b className="company-name">Vinayaka Enterprises</b></p>
                                        <p><FontAwesomeIcon icon={faPhoneAlt}></FontAwesomeIcon>&nbsp;<span className="phone">+91 9999999999</span></p>
                                        <div className="text-center">
                                            <span className="contact-supplier">Contact Supplier</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 product-wrapper">
                                    <div className="product">
                                        <img src={`${process.env.PUBLIC_URL}/assets/my-market/products/mango.png`} alt="mango"/>
                                        <h5>MANGO</h5>
                                        <h6>Rs.50/- per <span className="units">Kg</span></h6>
                                        <div className="q-inp-box text-center">
                                            Quantity:&nbsp;<input type="text" name="quantity" className="q-inp" pattern="[1-9]+" value="1"/>
                                        </div>
                                        <p className="text-center"><b className="company-name">Vinayaka Enterprises</b></p>
                                        <p><FontAwesomeIcon icon={faPhoneAlt}></FontAwesomeIcon>&nbsp;<span className="phone">+91 9999999999</span></p>
                                        <div className="text-center">
                                            <span className="contact-supplier">Contact Supplier</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 product-wrapper">
                                    <div className="product">
                                        <img src={`${process.env.PUBLIC_URL}/assets/my-market/products/fig.png`} alt="fig"/>
                                        <h5>FIG</h5>
                                        <h6>Rs.50/- per <span className="units">Kg</span></h6>
                                        <div className="q-inp-box text-center">
                                            Quantity:&nbsp;<input type="text" name="quantity" className="q-inp" pattern="[1-9]+" value="1"/>
                                        </div>
                                        <p className="text-center"><b className="company-name">Vinayaka Enterprises</b></p>
                                        <p><FontAwesomeIcon icon={faPhoneAlt}></FontAwesomeIcon>&nbsp;<span className="phone">+91 9999999999</span></p>
                                        <div className="text-center">
                                            <span className="contact-supplier">Contact Supplier</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 product-wrapper">
                                    <div className="product">
                                        <img src={`${process.env.PUBLIC_URL}/assets/my-market/products/walnut.png`} alt="walnut"/>
                                        <h5>WALNUT</h5>
                                        <h6>Rs.50/- per <span className="units">Kg</span></h6>
                                        <div className="q-inp-box text-center">
                                            Quantity:&nbsp;<input type="text" name="quantity" className="q-inp" pattern="[1-9]+" value="1"/>
                                        </div>
                                        <p className="text-center"><b className="company-name">Vinayaka Enterprises</b></p>
                                        <p><FontAwesomeIcon icon={faPhoneAlt}></FontAwesomeIcon>&nbsp;<span className="phone">+91 9999999999</span></p>
                                        <div className="text-center">
                                            <span className="contact-supplier">Contact Supplier</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 product-wrapper">
                                    <div className="product">
                                        <img src={`${process.env.PUBLIC_URL}/assets/my-market/products/papaya.png`} alt="papaya"/>
                                        <h5>PAPAYA</h5>
                                        <h6>Rs.50/- per <span className="units">Kg</span></h6>
                                        <div className="q-inp-box text-center">
                                            Quantity:&nbsp;<input type="text" name="quantity" className="q-inp" pattern="[1-9]+" value="1"/>
                                        </div>
                                        <p className="text-center"><b className="company-name">Vinayaka Enterprises</b></p>
                                        <p><FontAwesomeIcon icon={faPhoneAlt}></FontAwesomeIcon>&nbsp;<span className="phone">+91 9999999999</span></p>
                                        <div className="text-center">
                                            <span className="contact-supplier">Contact Supplier</span>
                                        </div>
                                    </div>
                                </div> */}
              </div>
              <div className="row">
                <div className="col-lg-12">
                  {productsArr.length > 4 && productsArr.length !== visible ? (
                    <h5 className="text-center see-more" onClick={viewMore}>
                      See More...
                    </h5>
                  ) : (
                    ''
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <Enquiry></Enquiry>
            <Members></Members>
          </div>
        </div>
      </div>
    </>
  )
}

export default Products
