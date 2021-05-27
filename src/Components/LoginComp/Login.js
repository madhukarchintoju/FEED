import React from 'react'
import './Login.css'

function Login() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 m-auto login-section">
            <form>
              <div className="form-group mb-4">
                <input
                  type="text"
                  className="form-control"
                  name="identity"
                  placeholder="Email Id / Membership Id"
                />
              </div>
              <div className="form-group mb-4">
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Password"
                />
              </div>
              <div className="form-group text-center">
                <button type="submit" className="loginbtn">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
