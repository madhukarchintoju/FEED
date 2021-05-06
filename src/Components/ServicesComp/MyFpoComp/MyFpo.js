import React from 'react';
import "./MyFpo.css"
import ServicesNavbar from '../ServicesNavbar/ServicesNavbar.js'

export default function MyFpo() {
 return (
  <>
   <ServicesNavbar/>
   {/* <h1>Welcome To My Fpo</h1> */}
   <div className="container-fluid">
    <div className="row">
     <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 mt-3">
        <div>
          <i class="fa fa-bars" aria-hidden="true" style={{fontSize:"26px"}}></i>
        </div>
        <div className="row">
          <div className="side-menu active">
            <div className="">
              <ul className="nav">
                <li className="nav-item"><a href="#" className="nav-link"><img src="assets/info-icon.png" alt=""/> ABOUT FPO</a></li>
                <li className="nav-item"><a href="#" className="nav-link"><img src="assets/user-icon.png" alt=""/> FPO ACCOUNT</a></li>
                <li className="nav-item"><a href="#" className="nav-link">FPO BUSINESS PLAN</a></li>
                <li className="nav-item"><a href="#" className="nav-link">FPO COMPLAINCES</a></li>
                <li className="nav-item"><a href="#" className="nav-link">FPO AGM & BOARD</a></li>
                <li className="nav-item"><a href="#" className="nav-link">FPO LOAN SCHEMES</a></li>
                <li className="nav-item"><a href="#" className="nav-link">FPO CONNECT</a></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2 fpo-about">
            <div className="text-center">
              <img src="assets/fpo-icon.jpg" width="100%" alt=""/>
            </div>
            <div className="text-center">
              <h1>MY FPO</h1>
            </div>
            <div className="text-center">
            <img src="assets/ant.png" width="100%" alt=""/>
            </div>
          </div>
          <div className="col-lg-8 brd">
          
          </div>
        </div>
     </div>
    </div>
   </div>
  </>
 )
}
