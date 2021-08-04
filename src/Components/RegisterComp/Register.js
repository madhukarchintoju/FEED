import React, { useState } from 'react'
import './Register.css'
import { Formik, Form, useFormik } from 'formik'
import * as yup from 'yup'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/material.css'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import VpnKeyIcon from '@material-ui/icons/VpnKey'
import {
  Grid,
  makeStyles,
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
  InputLabel,
  Divider,
} from '@material-ui/core'
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
    surName: yup.string('Enter your SurName').required('SurName is required'),
    firstName: yup
      .string('Enter your First Name')
      .required('First Name is required'),
    lastName: yup.string('Enter Last Name').required('Last Name is required'),
    phone: yup
      .number('Enter Phone Number')
      .min(12)
      .max(12)
      .required('Phone Number is Required'),
    email: yup
      .string('Enter Email Address')
      .required('Email Address is required'),
    education: yup
      .string('Enter your Education')
      .required('Education is required'),
    // quantity: yup
    //   .number('Enter your hsnCode')
    //   .min(1, 'Quantity should be min 1')
    //   .max(2000)
    //   .required('Quantity is required'),
  })
  const formik = useFormik({
    initialValues: {
      surName: '',
      firstName: '',
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
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2))
    },
  })
  // const initialFieldValues = {
  //   surName: '',
  //   firstName: '',
  //   lastName: '',
  //   phone: '',
  //   email: '',
  //   education: '',
  //   password: '',
  //   confirmPassword: '',
  //   state: '',
  //   district: '',
  //   city: '',
  //   category: '',
  //   categoryName: '',
  //   designation: '',
  // }
  // const [fieldValues, SetFieldValues] = useState(initialFieldValues)
  // const handleFieldValues = (e) => {
  //   const { name, value } = e.target
  //   SetFieldValues({
  //     ...fieldValues,
  //     [name]: value,
  //   })
  // }
  const useStyles = makeStyles((theme) => ({}))
  const classes = useStyles()
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value })
  }
  const [values, setValues] = React.useState({
    password: '',
    showPassword: false,
  })
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword })
  }
  const handleMouseDownPassword = (event) => {
    event.preventDefault()
  }
  console.log(formik.values)
  return (
    <>
      <Grid>
        <Grid className="">
          <Grid className="regFormHeading">
            <h1>Welcome</h1>
            <h4>Register new account</h4>
          </Grid>
          <Formik>
            <Form onSubmit={formik.handleSubmit}>
              <Grid container lg={7} justify="space-between" className="m-auto">
                <h5>Personal Details</h5>
                <Grid container justifyContent="space-between">
                  <Grid lg={5}>
                    <TextField
                      fullWidth
                      label="Surname"
                      variant="outlined"
                      margin="normal"
                      placeholder="Enter Surname"
                      name="surName"
                      value={formik.values.surName}
                      onChange={formik.handleChange}
                    />
                    <TextField
                      fullWidth
                      name="firstName"
                      label="First Name"
                      variant="outlined"
                      margin="normal"
                      placeholder="Enter First Name"
                      value={formik.values.firstName}
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
                        onChange={formik.handleChange}
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
                        <MenuItem key={item.id} value={item.id}>
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
                        <MenuItem key={item.id} value={item.id}>
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
                        <MenuItem key={item.id} value={item.id}>
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
                        <MenuItem key={item} value={item.id}>
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
                        <MenuItem key={item.id} value={item.id}>
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
                <button className="btn btn-warning" type="submit">
                  Submit
                </button>
              </Grid>
            </Form>
          </Formik>
          <img
            src={`${process.env.PUBLIC_URL}/assets/registrationforms/regformimg.jpg`}
            width="100%"
            alt=""
          />
        </Grid>
      </Grid>
    </>
  )
}

export default Register
