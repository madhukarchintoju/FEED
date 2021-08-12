import React, { useState } from 'react'
import './Register.css'
import { useFormik } from 'formik'
import * as yup from 'yup'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/material.css'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import VpnKeyIcon from '@material-ui/icons/VpnKey'
import { Link } from 'react-router-dom'
import {
  Grid,
  RadioGroup,
  TextField,
  Radio,
  FormLabel,
  FormControl,
  Checkbox,
  FormGroup,
  FormControlLabel,
  MenuItem,
  OutlinedInput,
  InputAdornment,
  IconButton,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Snackbar,
} from '@material-ui/core'

import { registerFpcMember } from '../apiServices/apiServices'
import MuiAlert from '@material-ui/lab/Alert'

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />
}

function Register() {
  const stateList = [
    {
      id: '1',
      name: 'Andhra Pradesh',
    },
    {
      id: '2',
      name: 'Telangana',
    },
    {
      id: '3',
      name: 'Tamil nadu',
    },
    {
      id: '4',
      name: 'Kerala',
    },
    {
      id: '5',
      name: 'Karnataka',
    },
  ]

  const districtList = [
    {
      id: '1',
      name: 'Krishna',
    },
    {
      id: '2',
      name: 'Guntur',
    },
    {
      id: '3',
      name: 'West Godavari',
    },
    {
      id: '4',
      name: 'East Godavari',
    },
    {
      id: '5',
      name: 'Vizag',
    },
  ]

  const categoryList = [
    {
      id: '1',
      name: 'FPC',
    },
    {
      id: '2',
      name: 'FARM',
    },
    {
      id: '3',
      name: 'MSME',
    },
    {
      id: '4',
      name: 'EXPORTS',
    },
    {
      id: '5',
      name: 'STUDENT',
    },
  ]

  const fpcList = [
    {
      id: '1',
      name: 'apple fpc',
    },
    {
      id: '2',
      name: 'banana fpc',
    },
    {
      id: '3',
      name: 'papaya fpc',
    },
  ]
  const designationList = [
    {
      id: '1',
      name: 'member',
    },
    {
      id: '2',
      name: 'employee',
    },
  ]
  const validationSchema = yup.object({
    firstName: yup
      .string('Enter your First Name')
      .required('First Name is required'),
    lastName: yup.string('Enter Last Name').required('Last Name is required'),
    email: yup
      .string('Enter Email Address')
      .email('Enter a valid email')
      .required('Email Address is required'),
    password: yup
      .string('Enter Password')
      .min(8, 'Password should be of minimum 8 characters length')
      .required('Password is required'),
  })

  const [open, setOpen] = useState(false)
  const [snack, setSnack] = useState(false)
  const [error, setError] = useState('')

  const formik = useFormik({
    initialValues: {
      firstName: '',
      middleName: '',
      lastName: '',
      phone: '',
      email: '',
      dob: '',
      education: '',
      password: '',
      confirmPassword: '',
      selectedState: '',
      district: '',
      city: '',
      selectedCategory: '',
      selectedFpcName: '',
      categoryName: '',
      designation: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      const data = {
        name: values.firstName,
        email: values.email,
        mobileNo: values.phone,
        password: values.password,
      }
      const response = await registerFpcMember(data)
      if (!!response.data.data) {
        setOpen(true)
      } else {
        setSnack(true)
        setError(response.data.message)
      }
    },
  })

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value })
  }
  const [values, setValues] = useState({
    password: '',
    showPassword: false,
  })

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword })
  }
  const handleMouseDownPassword = (event) => {
    event.preventDefault()
  }
  return (
    <>
      <div className="regFormHeading">
        <h1>Welcome</h1>
        <h4>Register new account</h4>
      </div>
      <form onSubmit={formik.handleSubmit}>
        <Grid container lg={7} justify="space-between" className="m-auto">
          <h5>Personal Details</h5>
          <Grid container justifyContent="space-between">
            <Grid lg={5}>
              <TextField
                fullWidth
                name="firstName"
                label="First Name"
                variant="outlined"
                margin="normal"
                placeholder="Enter First Name"
                value={formik.values.firstName}
                onChange={formik.handleChange}
                error={
                  formik.touched.firstName && Boolean(formik.errors.firstName)
                }
                helperText={formik.touched.firstName && formik.errors.firstName}
              />
              <TextField
                fullWidth
                label="Middle Name"
                variant="outlined"
                margin="normal"
                placeholder="Enter Middle Name"
                name="middleName"
                value={formik.values.middleName}
                onChange={formik.handleChange}
              />
              <TextField
                fullWidth
                name="lastName"
                label="Last Name"
                variant="outlined"
                margin="normal"
                placeholder="Enter last Name"
                value={formik.values.lastName}
                onChange={formik.handleChange}
                error={
                  formik.touched.lastName && Boolean(formik.errors.lastName)
                }
                helperText={formik.touched.lastName && formik.errors.lastName}
              />
              <FormControl component="fieldset">
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
            <Grid item lg={5}>
              <Grid style={{ marginTop: '16px', marginBottom: '5px' }}>
                <PhoneInput
                  country={'in'}
                  value={formik.values.phone}
                  onChange={(e) => formik.setFieldValue('phone', e)}
                  inputProps={{
                    name: 'phone',
                    required: true,
                    autoFocus: true,
                  }}
                />
              </Grid>
              <TextField
                fullWidth
                variant="outlined"
                margin="normal"
                name="dob"
                id="dateTime"
                label="Date of Birth"
                type="date"
                defaultValue=""
                InputLabelProps={{
                  shrink: true,
                }}
                value={formik.values.dob}
                onChange={formik.handleChange}
              />
              <TextField
                fullWidth
                name="email"
                variant="outlined"
                margin="normal"
                label="Email"
                placeholder="Enter Email"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
              <TextField
                fullWidth
                variant="outlined"
                margin="normal"
                label="Education"
                placeholder="Enter Education"
                name="education"
                value={formik.values.education}
                onChange={formik.handleChange}
              />
            </Grid>
          </Grid>
          <Grid container justify="space-evenly">
            <FormControl variant="outlined" margin="normal">
              <OutlinedInput
                id="outlined-adornment-password"
                type={values.showPassword ? 'text' : 'password'}
                name="password"
                value={formik.values.password}
                placeholder="Enter Password"
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
              />
            </FormControl>
            <FormControl variant="outlined" margin="normal">
              <OutlinedInput
                id="outlined-adornment-password"
                type={values.showPassword ? 'text' : 'password'}
                name="confirmpassword"
                value={formik.values.password}
                placeholder="Confirm Password"
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
              />
            </FormControl>
          </Grid>
          <h5>Membership Details</h5>
          <Grid container justify="space-between">
            <Grid item lg={3} md={12} sm={12} xs={12}>
              <TextField
                fullWidth
                select
                label="State"
                margin="normal"
                variant="outlined"
                name="selectedState"
                value={formik.values.selectedState}
                onChange={formik.handleChange}
              >
                {stateList.map((item) => (
                  <MenuItem key={item.name} value={item.name}>
                    {item.name}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item lg={3} md={12} sm={12} xs={12}>
              <TextField
                fullWidth
                select
                label="District"
                margin="normal"
                variant="outlined"
                name="district"
                value={formik.values.district}
                onChange={formik.handleChange}
              >
                {districtList.map((item) => (
                  <MenuItem key={item.name} value={item.name}>
                    {item.name}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item lg={3} md={12} sm={12} xs={12}>
              <TextField
                fullWidth
                variant="outlined"
                margin="normal"
                label="City/Village"
                placeholder="Enter City/Village"
                name="city"
                value={formik.values.city}
                onChange={formik.handleChange}
              />
            </Grid>
          </Grid>
          <Grid container justify="space-between">
            <Grid item lg={3} md={12} sm={12} xs={12}>
              <TextField
                fullWidth
                select
                label="Select Category"
                margin="normal"
                variant="outlined"
                name="selectedCategory"
                value={formik.values.selectedCategory}
                onChange={formik.handleChange}
              >
                {categoryList.map((item) => (
                  <MenuItem key={item.name} value={item.name}>
                    {item.name}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item lg={3} md={12} sm={12} xs={12}>
              <TextField
                fullWidth
                select
                label="Select FPC Name"
                margin="normal"
                variant="outlined"
                name="selectedFpcName"
                value={formik.values.selectedFpcName}
                onChange={formik.handleChange}
              >
                {fpcList.map((item) => (
                  <MenuItem key={item.name} value={item.name}>
                    {item.name}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item lg={3} md={12} sm={12} xs={12}>
              <TextField
                fullWidth
                select
                label="Designation"
                margin="normal"
                variant="outlined"
                name="designation"
                value={formik.values.designation}
                onChange={formik.handleChange}
              >
                {designationList.map((item) => (
                  <MenuItem key={item.name} value={item.name}>
                    {item.name}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
          </Grid>
          <Grid item lg={12}>
            <TextField
              fullWidth
              id="outlined-multiline-static"
              label="Address"
              placeholder="Enter Address"
              multiline
              rows={4}
              variant="outlined"
              name="address"
              value={formik.values.address}
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid container justify="space-between" className="mb-2">
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    onChange={handleChange}
                    value={formik.values.termspolicy}
                    name="termspolicy"
                  />
                }
                label="I agree to the Terms of Service and Privacy"
              />
            </FormGroup>
          </Grid>
        </Grid>
        <Grid container justify="center">
          <Button className="btn btn-warning" type="submit">
            Submit
          </Button>
        </Grid>
      </form>
      <img
        src={`${process.env.PUBLIC_URL}/assets/registrationforms/regformimg.jpg`}
        width="100%"
        alt=""
      />

      <Snackbar
        open={snack}
        autoHideDuration={6000}
        onClose={() => setSnack(false)}
      >
        <Alert onClose={() => setSnack(false)} severity="error">
          {error}
        </Alert>
      </Snackbar>

      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{'Feed'}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Registered successfully. Please click on login
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Link to="/login">
            <Button>
              <p>Login</p>
            </Button>
          </Link>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default Register
