import React from 'react'
import './production.css'
import ServicesNavbar from '../ServicesNavbar/ServicesNavbar'
import PPForm from './form'
import PPMenu from './menu'
const Production = () => {
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
                src={`${process.env.PUBLIC_URL}/assets/product-profile/production-banner.png`}
                alt="title"
              />
            </div>
            <div className="table table-responsive production-table mt-3">
              <table>
                <thead>
                  <tr className="main-row">
                    <th rowspan="2">S.No</th>
                    <th rowspan="2">State Wise</th>
                    <th colspan="2">2016-17</th>
                    <th colspan="2">2017-18</th>
                    <th colspan="2">2018-19</th>
                  </tr>
                  <tr>
                    <th className="area-ha">Area in 000 Ha</th>
                    <th className="production-mt">Production in 000 MT</th>
                    <th className="area-ha">Area in 000 Ha</th>
                    <th className="production-mt">Production in 000 MT</th>
                    <th className="area-ha">Area in 000 Ha</th>
                    <th className="production-mt">Production in 000 MT</th>
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

export default Production
