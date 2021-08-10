import React from 'react'
import './biproducts.css'
import ServicesNavbar from '../ServicesNavbar/ServicesNavbar'
import PPForm from './form'
import PPMenu from './menu'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
const BIProducts = () => {
  return (
    <>
      <ServicesNavbar></ServicesNavbar>
      <PPForm></PPForm>
      <div className="container-fluid">
        <div className="row">
          <PPMenu></PPMenu>
          <div className="col-lg-10 production-content p-5">
            <div className="production-title text-center">
              <img
                src={`${process.env.PUBLIC_URL}/assets/product-profile/biproducts-banner.png`}
                alt="title"
              />
            </div>
            <div className="biprods-text-wrapper ml-auto mr-auto mt-5 mb-5">
              <p className="biprods-text-content">
                Agriculture in India is the primary source of income for about
                58 % of the population. Indian agriculture commodities’
                contribution to the world food trade is increasing year by year.
                Nowadays, Indian farmers are getting all the opportunities and
                government schemes for fulfilling their dreams. For that farmers
                get benefits and they produce advanced
              </p>
              <p className="more-info text-right">
                more info&nbsp;
                <i class="fa fa-angle-double-right" aria-hidden="true"></i>
              </p>
            </div>
            <div className="table table-responsive biproducts-table mt-3">
              <table>
                <thead>
                  <tr className="biprods-row">
                    <th>S.No</th>
                    <th>HS Code</th>
                    <th>Product Description</th>
                    <th>Exports</th>
                    <th>Imports</th>
                  </tr>
                </thead>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BIProducts
