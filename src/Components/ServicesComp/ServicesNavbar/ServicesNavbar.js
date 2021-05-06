import React from 'react';
import './ServicesNavbar.css';
import { Avatar } from '@material-ui/core';
import { Link } from 'react-router-dom';

export default function ServicesNavbar() {
 return (
  <>
   <div className="container-fluid">
    <div className="row m-0 mt-3 p-1 bg-light">
     <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 d-lg-flex justify-content-around">
        <Link to='/myfpo'>
            <button className="btn btn-warning"><img src="assets/fpo-icon.jpg" width="30" style={{borderRadius:"50px 50px"}} alt=""/> MY FPO</button>
        </Link>
        <Link to='/myfarm'>
            <button className="btn farm-btn"><img src="assets/farm-icon.jpg" width="30" style={{borderRadius:"50px 50px"}} alt=""/> MY FARM</button>
        </Link>
        <Link to='/'>
            <button className="btn btn-primary"><img src="assets/product-icon.jpg" width="30" style={{borderRadius:"50px 50px"}} alt=""/> MY PRODUCTS</button>
        </Link>
        <Link to='/'>
            <button className="btn violet-btn"><img src="assets/my-business-icon.jpg" width="30" style={{borderRadius:"50px 50px"}} alt=""/> MY BUSINESS</button>
        </Link>
        <Link to='/'>
            <button className="btn btn-info"><img src="assets/52474.jpg" width="30" style={{borderRadius:"50px 50px"}} alt=""/> MY EXPORT</button>
        </Link>
        <Link to='/'>
            <button className="btn wheat-btn"><img src="assets/cart-icon.jpg" width="30" style={{borderRadius:"50px 50px"}} alt=""/> MY MARKET</button>
        </Link>
        <Link to='/'>
            <button className="btn merun-btn"><img src="assets/my-edu-icon.jpg" width="30" style={{borderRadius:"50px 50px"}} alt=""/> MY EDUCATION</button>
        </Link>
        <Link to='/'>
            <button className="btn btn-dark"><img src="assets/tools-icon.jpg" width="30" style={{borderRadius:"50px 50px"}} alt=""/> MY TOOLS</button>
        </Link>
      <div>
       <Avatar alt="Travis Howard" src="/assets/farmer-avatar.jpg" />
      </div>
     </div>
    </div>
   </div>
  </>
 )
}
