import React from 'react'
import './form.css'
const PPForm = () => {
  return (
    <div className="container-fluid ppform-row">
      <div className="row">
        <div className="col-lg-12">
          <form id="ppform">
            <div className="form-row">
              <div className="col-5 d-flex justify-content-center align-items-center">
                <label>Product Name&nbsp;:</label>&nbsp;&nbsp;
                <input type="text" id="product-name" />
              </div>
              <div className="col-5 d-flex justify-content-center align-items-center">
                <label>HS Code&nbsp;:</label>&nbsp;&nbsp;
                <input type="text" id="hs-code" />
              </div>
              <div className="col-2 d-flex justify-content-center align-items-center">
                <button type="submit" className="ppform-submit-btn">
                  SUBMIT
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default PPForm
