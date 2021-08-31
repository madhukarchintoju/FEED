import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import './Login.css'
import { useHistory } from 'react-router-dom'
import {
  Grid,
  TextField,
  FormControlLabel,
  FormControl,
  FormGroup,
  Checkbox,
  IconButton,
  OutlinedInput,
  InputLabel,
  InputAdornment,
  Snackbar,
} from '@material-ui/core'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import PersonIcon from '@material-ui/icons/Person'
import VpnKeyIcon from '@material-ui/icons/VpnKey'
import { Link } from 'react-router-dom'
import MuiAlert from '@material-ui/lab/Alert'
import { connect } from 'react-redux'
import { loginSuccess, tokenStored } from '../../redux/action'

import { loginFpcMember } from '../apiServices/apiServices'

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />
}

function Login(props) {
  const history = useHistory()
  const [values, setValues] = useState({
    password: '',
    showPassword: false,
  })
  const [snack, setSnack] = useState(false)
  const [error, setError] = useState('')

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword })
  }
  const handleMouseDownPassword = (event) => {
    event.preventDefault()
  }

  const validationSchema = yup.object({
    email: yup
      .string('Enter Email Address')
      .email('Enter a valid email')
      .required('Email Address is required'),
    password: yup.string('Enter Password').required('Password is required'),
  })

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      const data = {
        email: values.email,
        password: values.password,
      }
      const response = await loginFpcMember(data)
      if (!!response.data.data && !!response.data.otherdata) {
        props.loginSuccess(response.data.data)
        props.tokenStored(response.data.otherdata.access.token)
        history.push('/mydashboard')
      } else {
        setSnack(true)
        setError(response.data.message)
      }
    },
  })

  return (
    <div className="lg-form-wrap">
      <Grid container lg={12} justify="space-between" alignItems="center">
        <Grid lg={5}>
          <img
            alt=""
            src={`${process.env.PUBLIC_URL}/assets/login/loginimg.png`}
            width="100%"
          />
        </Grid>
        <Grid lg={6}>
          <form onSubmit={formik.handleSubmit}>
            <h3>Log in to FEED</h3>
            <h6 className="text-muted">
              Welcome back! Please login to your account to continue
            </h6>
            <TextField
              fullWidth
              variant="outlined"
              margin="normal"
              label="Email"
              name="email"
              placeholder="Enter Email Id"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
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
                placeholder="Enter Password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
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
                      {values.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
                labelWidth={70}
              />
            </FormControl>
            <Grid container justify="space-between" className="mb-2">
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox name="gilad" />}
                  label="Remeber me"
                />
              </FormGroup>
              <Link to="/login">Forgot your Password?</Link>
            </Grid>
            <Grid container justify="center">
              <button className="lrForm-lgn-btn" type="submit">
                LOGIN
              </button>
            </Grid>

            <p className="text-center mt-3">
              Don't have an account? <Link to="/register">Register</Link>
            </p>
          </form>
        </Grid>
      </Grid>
      <Snackbar
        open={snack}
        autoHideDuration={6000}
        onClose={() => setSnack(false)}
      >
        <Alert onClose={() => setSnack(false)} severity="info">
          {error}
        </Alert>
      </Snackbar>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    loginSuccess: (data) => dispatch(loginSuccess(data)),
    tokenStored: (token) => dispatch(tokenStored(token)),
  }
}

export default connect(null, mapDispatchToProps)(Login)
