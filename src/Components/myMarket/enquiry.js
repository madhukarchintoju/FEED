import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './products.css'
import swal from 'sweetalert'
import qs from 'qs'
import axiosInstance from '../../axios'
import { fetchProducts } from '../../redux/actions'
const Enquiry = () => {
  const [enquiry, setEnquiry] = useState(false)
  //const [productsList,setProductsList]=useState([]);
  let productsList = useSelector((state) => state.products)
  let jwttoken
  if (
    localStorage.getItem('token') !== null &&
    localStorage.getItem('token') !== ''
  ) {
    jwttoken = localStorage.getItem('token')
  }
  let dispatch = useDispatch()
  //Get all products
  useEffect(() => {
    dispatch(fetchProducts())
  }, [])
  //Submit Enquiry
  useEffect(() => {
    const handleEnquirySubmission = async () => {
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
          setEnquiry(false)
          swal('Good Job!', `${APIResponse.message}`, 'success')
        } else if (APIResponse.status === 0) {
          document.querySelector('.sendreqbtn').innerHTML = `Send Request`
          setEnquiry(false)
          swal('Error', `${APIResponse.message}`, 'error')
        }
      } catch (e) {
        console.log(e)
        swal('Error', `${e.message}`, 'error')
      }
    }
    if (enquiry === true) {
      handleEnquirySubmission()
    }
  }, [enquiry, jwttoken])
  return (
    <>
      <div className="product-form">
        <h5 className="text-center">BUYER REQUIREMENT</h5>
        <hr />
        <form
          onSubmit={(e) => {
            e.preventDefault()
            setEnquiry(true)
            document.querySelector('.sendreqbtn').innerText = `Sending...`
          }}
        >
          <div className="prod-inp form-group">
            <label for="">Product:</label>&nbsp;
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
                className="form-control orderValue"
                required
              />
            </div>
            <div className="col quan-col">
              <label for="">Quantity</label>
              <input
                type="text"
                name="quantity"
                className="form-control quantity"
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
              <select name="units" className="form-control units" required>
                <option value="">Units</option>
                <option value="KGS">KGS</option>
                <option value="GMS">GMS</option>
                <option value="LTR">LTR</option>
                <option value="BOX">BOX</option>
                <option value="PCS">PCS</option>
              </select>
            </div>
          </div>
          {/* <div className="form-group center">
                        <input type="checkbox" name="tandc" className="tandc" value="true" required/>&nbsp;<span className="chktext">I agree to Terms & Conditions</span>
                    </div> */}
          <div className="form-group text-center">
            <button type="submit" className="sendreqbtn">
              Send Request
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Enquiry
