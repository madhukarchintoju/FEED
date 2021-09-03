import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './myMarket.css'
// import HOAuthComponent from '../../checkAuth';
import Categories from './categories'
import Header from './header'
import Members from './members'
import ServicesNavbar from '../ServicesComp/ServicesNavbar/ServicesNavbar.js'
import axiosInstance from '../../axios'
import swal from 'sweetalert'
import qs from 'qs'
import { fetchCategories, fetchProducts, fetchTags } from '../../redux/actions'
const MyMarket = ({ userData }) => {
  const [request, setRequest] = useState(false)
  let jwttoken
  if (
    localStorage.getItem('token') !== null &&
    localStorage.getItem('token') !== ''
  ) {
    jwttoken = localStorage.getItem('token')
  }
  //Fetch all Categories, Products and its Tags
  const categoryObj = useSelector((state) => state.categories)
  let categoriesArr = categoryObj.categories
  const productsObj = useSelector((state) => state.products)
  let productsList = productsObj.products
  const tagsObj = useSelector((state) => state.tags)
  let tags = tagsObj.tags
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchCategories())
    dispatch(fetchProducts())
    dispatch(fetchTags())
  }, [])
  //Submit Request
  useEffect(() => {
    const handleRequestSubmission = async () => {
      try {
        let productId = document.querySelector('.productId').value
        let orderValue = document.querySelector('.orderValue').value
        let quantity = document.querySelector('.quantity').value
        let units = document.querySelector('.units').value
        // let tandc=document.querySelector(".tandc").value;
        let serializedStr = qs.stringify({
          productId: productId,
          orderValue: orderValue,
          quantity: quantity,
          units: units,
        })
        const config = {
          headers: {
            Authorization: `Bearer ${jwttoken}`,
          },
        }
        let response = await axiosInstance.post(
          '/quote/send',
          serializedStr,
          config
        )
        let APIResponse = response.data
        if (APIResponse.status === 1) {
          document.querySelector('.sendreqbtn').innerHTML = `Send Request`
          document.querySelector('.product-form form').reset()
          setRequest(false)
          swal('Good Job!', `${APIResponse.message}`, 'success')
        } else if (APIResponse.status === 0) {
          document.querySelector('.sendreqbtn').innerHTML = `Send Request`
          setRequest(false)
          swal('Error', `${APIResponse.message}`, 'error')
        }
      } catch (e) {
        console.log(e)
        swal('Error', `${e.message}`, 'error')
      }
    }
    if (request === true) {
      handleRequestSubmission()
    }
  }, [request, jwttoken])
  return (
    <>
      <ServicesNavbar></ServicesNavbar>
      <div className="container-fluid my-market">
        <Header categories={categoriesArr}></Header>
        <div className="row">
          <div className="col-lg-9 market-products">
            <Categories categories={categoriesArr}></Categories>
            <div className="banner-row text-center mb-5">
              <img
                src={`${process.env.PUBLIC_URL}/assets/my-market/banner.png`}
                alt="banner"
              />
            </div>
            {tags.length > 0
              ? tags.map((tag, tagIndex, tagArr) => {
                  return (
                    <>
                      <h5
                        className="text-center text-uppercase mb-3"
                        key={tagIndex}
                      >
                        {tag.tagName}
                      </h5>
                      <div
                        className="tagged-products-wrapper mt-2"
                        key={`wrapper-${tagIndex}`}
                      >
                        {productsList.length > 0
                          ? productsList.map((prod, prodIndex, prodArr) => {
                              return (
                                <>
                                  {prod.product_tag === tag.tagId ? (
                                    <>
                                      <div className="prod" key={prodIndex}>
                                        <img
                                          src={`${prod.productImages[0]}`}
                                          alt={tag.tagName}
                                          key={prodIndex}
                                        />
                                      </div>
                                    </>
                                  ) : (
                                    ''
                                  )}
                                </>
                              )
                            })
                          : ''}
                      </div>
                    </>
                  )
                })
              : ''}
          </div>
          <div className="col-lg-3 market-members">
            <div className="product-form">
              <h5 className="text-center">One Request Multiple Quotes</h5>
              <hr />
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  setRequest(true)
                  document.querySelector('.sendreqbtn').innerText = `Sending...`
                }}
              >
                <div className="prod-inp form-group">
                  <label>Product:</label>&nbsp;
                  <input
                    list="productsList"
                    name="productId"
                    id="prod-inp"
                    className="productId"
                    required
                  />
                  <datalist id="productsList">
                    {productsList.length > 0
                      ? productsList.map((product, i) => {
                          return (
                            <>
                              <option value={`${product.productId}`} key={i}>
                                {product.productName}
                              </option>
                            </>
                          )
                        })
                      : ''}
                  </datalist>
                </div>
                <div className="form-row mb-3">
                  <div className="col">
                    <label for="">Order Value</label>
                    <input
                      type="text"
                      name="orderValue"
                      className="orderValue form-control"
                      required
                    />
                  </div>
                  <div className="col quan-col">
                    <label for="">Quantity</label>
                    <input
                      type="text"
                      name="quantity"
                      className="quantity form-control"
                      required
                    />
                  </div>
                  <div className="col units-col">
                    <label
                      for=""
                      style={{
                        visibility: 'hidden',
                      }}
                    >
                      Units
                    </label>
                    <select
                      name="units"
                      className="form-control units"
                      required
                    >
                      <option value="">Units</option>
                      <option value="KGS">KGS</option>
                      <option value="GMS">GMS</option>
                      <option value="LTR">LTR</option>
                      <option value="BOX">BOX</option>
                      <option value="PCS">PCS</option>
                    </select>
                  </div>
                </div>
                <div className="form-group text-center">
                  {/* <div className="col text-center">
                            <input type="checkbox" name="tandc" className="tandc" required/>&nbsp;<span className="chktext">I agree to Terms & Conditions</span>
                        </div> */}
                  {/* <div className="col text-center"> */}
                  <button type="submit" className="sendreqbtn">
                    Send Request
                  </button>
                  {/* </div> */}
                </div>
              </form>
            </div>
            <Members></Members>
          </div>
        </div>
      </div>
    </>
  )
}

export default MyMarket
