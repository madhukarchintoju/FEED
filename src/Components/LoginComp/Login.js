import React, { useState } from 'react'
import './Login.css'
import {
  makeStyles,
  Grid,
  TextField,
  Radio,
  FormControlLabel,
  FormControl,
  FormLabel,
  RadioGroup,
  FormGroup,
  Checkbox,
  IconButton,
  OutlinedInput,
  InputLabel,
  InputAdornment,
} from '@material-ui/core'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import PersonIcon from '@material-ui/icons/Person'
import VpnKeyIcon from '@material-ui/icons/VpnKey'

function Login() {
  const [addclass, setaddclass] = useState('')
  const [values, setValues] = React.useState({
    password: '',
    showPassword: false,
  })
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value })
  }
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword })
  }
  const handleMouseDownPassword = (event) => {
    event.preventDefault()
  }
  return (
    <>
      {/* <div className="container-fluid">
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
                  Login btn
                </button>
              </div>
            </form>
          </div>
        </div>
      </div> */}
      {/* <div className={`lrContainer ${addclass}`} id="container">
        <Grid className="lrForm-container  sign-up-container">
          <form>
            <h1>Create Account</h1>
            <input type="text" placeholder="NAME" />
            <input type="email" placeholder="EMAIL" />
            <input type="password" placeholder="PASSWORD" />
            <button className='lrForm-reg-btn' type="submit">REGISTER</button>
            <h4 className='text-center'>Register</h4>
            <h6 className='mb-0'>Personal Details</h6>
            <Grid container justify='space-between'>
              <Grid lg={5}>
                <TextField
                  fullWidth
                  label="First Name"
                  variant="outlined"
                  margin='normal'
                  placeholder='Enter First Name'
                />
                <TextField
                  variant="outlined"
                  fullWidth
                  margin='normal'
                  id="dateTime"
                  label="Date of Birth"
                  type="date"
                  defaultValue=""
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <FormControl component="fieldset" margin='normal'>
                  <FormLabel component="legend">Gender</FormLabel>
                  <RadioGroup row aria-label="position" name="position">
                    <FormControlLabel
                      value="male"
                      control={<Radio color="primary" />}
                      label="Male"
                    labelPlacement="end"
                    />
                    <FormControlLabel
                      value="female"
                      control={<Radio color="primary" />}
                      label="Female"
                    />
                    <FormControlLabel
                      value="others"
                      control={<Radio color="primary" />}
                      label="Others"
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Grid lg={5}>
                <TextField
                  fullWidth
                  label="Last Name"
                  variant="outlined"
                  margin='normal'
                  placeholder='Enter Last Name'
                />
                <TextField
                  fullWidth
                  variant='outlined'
                  margin='normal'
                  label="Phone Number"
                  placeholder='Enter Phone Number'
                />
                <TextField
                  fullWidth
                  variant='outlined'
                  margin='normal'
                  label="Email"
                  placeholder='Enter Email'
                />
              </Grid>
            </Grid>
            <Grid>
              <h6>Membership Details</h6>
            </Grid>
          </form>
        </Grid>
        <Grid className="lrForm-container sign-in-container">
          <form>
            <h1>Login</h1>
            <TextField
              fullWidth
              variant='outlined'
              margin='normal'
              label="User Id"
              placeholder='Enter User Id'
            />
            <TextField
              fullWidth
              variant='outlined'
              margin='normal'
              label="Password"
              placeholder='Enter Password'
            />
            <button className='lrForm-lgn-btn' type="submit">LOGIN</button>
          </form>
        </Grid>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <button
                className="lrForm-gtl-btn"
                id="signIn"
                onClick={() => setaddclass("")}
              >
                GO TO LOGIN
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <button
                className="lrForm-gtr-btn"
                id="signUp"
                onClick={() => setaddclass("right-panel-active")}
              >
                GO TO REGISTER
              </button>
            </div>
          </div>
        </div>
      </div> */}
      <div className="lg-form-wrap">
        <Grid container lg={12} justify="space-between" alignItems="center">
          <Grid lg={5}>
            <img
              src={`${process.env.PUBLIC_URL}/assets/login/loginimg.png`}
              width="100%"
            />
          </Grid>
          <Grid lg={6}>
            <form>
              <h3>Log in to FEED</h3>
              <h6 className="text-muted">
                Welcome back! Please login to your account to continue
              </h6>
              <TextField
                fullWidth
                variant="outlined"
                margin="normal"
                label="User Id"
                placeholder="Enter User Id"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonIcon />
                    </InputAdornment>
                  ),
                }}
              />
              <FormControl variant="outlined" margin="normal" fullWidth>
                <InputLabel htmlFor="outlined-adornment-password">
                  Password
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={values.showPassword ? 'text' : 'password'}
                  value={values.password}
                  placeholder="Enter Password"
                  onChange={handleChange('password')}
                  startAdornment={
                    <InputAdornment position="start">
                      <VpnKeyIcon />
                    </InputAdornment>
                  }
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {values.showPassword ? (
                          <Visibility />
                        ) : (
                          <VisibilityOff />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                  labelWidth={70}
                />
              </FormControl>
              <Grid container justify="space-between" className="mb-2">
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox onChange={handleChange} name="gilad" />}
                    label="Remeber me"
                  />
                </FormGroup>
                <a href="">Forgot your Password?</a>
              </Grid>
              <Grid container justify="center">
                <button className="lrForm-lgn-btn" type="submit">
                  LOGIN
                </button>
              </Grid>

              <p className="text-center mt-3">
                Dont't have an account? <a href="">Register</a>
              </p>
            </form>
          </Grid>
        </Grid>
      </div>
    </>
  )
}

export default Login
