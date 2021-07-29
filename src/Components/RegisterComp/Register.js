import React, { useState } from 'react'
import './Register.css'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
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
} from '@material-ui/core'
function Register() {
  const productSubCategoryList = [
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
  const initialFieldValues = {
    productCategory: '',
    productSubCategory: '',
    productName: '',
    productDescription: '',
    quantity: '',
    units: '',
    offerPrices: '',
    gst: '',
  }
  const [fieldValues, SetFieldValues] = useState(initialFieldValues)
  const handleFieldValues = (e) => {
    const { name, value } = e.target
    SetFieldValues({
      ...fieldValues,
      [name]: value,
    })
  }
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
  return (
    <>
      <Grid>
        <Grid className="">
          <form>
            <Grid className="regFormHeading">
              <h1>Welcome</h1>
              <h4>Register new account</h4>
            </Grid>
            <Grid
              container
              lg={7}
              justify="space-between"
              className="m-auto formDetailsWrap"
            >
              {/* <h5>Personal Details</h5> */}
              <Grid lg={5}>
                <TextField
                  fullWidth
                  // className='col'
                  label="Surname"
                  variant="outlined"
                  margin="normal"
                  placeholder="Enter Surname"
                />
                <TextField
                  fullWidth
                  // className='col'
                  label="First Name"
                  variant="outlined"
                  margin="normal"
                  placeholder="Enter First Name"
                />
                <TextField
                  fullWidth
                  // className='col'
                  label="Last Name"
                  variant="outlined"
                  margin="normal"
                  placeholder="Enter last Name"
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
              <Grid container lg={5}>
                <Grid style={{ marginTop: '16px', marginBottom: '25px' }}>
                  <PhoneInput
                    country={'in'}
                    // value={this.state.phone}
                    // onChange={phone => this.setState({ phone })}
                  />
                </Grid>
                <TextField
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  id="dateTime"
                  label="Date of Birth"
                  type="date"
                  defaultValue=""
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <TextField
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  label="Email"
                  placeholder="Enter Email"
                />
                <TextField
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  label="Education"
                  placeholder="Enter Education"
                />
              </Grid>
              <Grid container justify="space-evenly">
                <FormControl variant="outlined" margin="normal">
                  {/* <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel> */}
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
                    // labelWidth={70}
                  />
                </FormControl>
                <FormControl variant="outlined" margin="normal">
                  {/* <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel> */}
                  <OutlinedInput
                    id="outlined-adornment-password"
                    type={values.showPassword ? 'text' : 'password'}
                    value={values.password}
                    placeholder="Confirm Password"
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
                    // labelWidth={70}
                  />
                </FormControl>
              </Grid>
              <Grid></Grid>
              <h5>Membership Details</h5>
              <Grid container justify="space-between">
                <TextField
                  style={{ width: '30%' }}
                  select
                  label="State"
                  margin="normal"
                  variant="outlined"
                  name="productSubCategory"
                  value={fieldValues.productSubCategory}
                  onChange={handleFieldValues}
                >
                  {productSubCategoryList.map((item) => (
                    <MenuItem key={item.id} value={item.id}>
                      {item.name}
                    </MenuItem>
                  ))}
                </TextField>
                <TextField
                  style={{ width: '30%' }}
                  select
                  label="District"
                  margin="normal"
                  variant="outlined"
                  name="productSubCategory"
                  value={fieldValues.productSubCategory}
                  onChange={handleFieldValues}
                >
                  {productSubCategoryList.map((item) => (
                    <MenuItem key={item.id} value={item.id}>
                      {item.name}
                    </MenuItem>
                  ))}
                </TextField>
                <TextField
                  style={{ width: '30%' }}
                  variant="outlined"
                  margin="normal"
                  label="City/Village"
                  placeholder="Enter City/Village"
                />
              </Grid>
              <Grid container justify="space-between">
                <TextField
                  style={{ width: '30%' }}
                  select
                  label="Select Category"
                  margin="normal"
                  variant="outlined"
                  name="productSubCategory"
                  value={fieldValues.productSubCategory}
                  onChange={handleFieldValues}
                >
                  {productSubCategoryList.map((item) => (
                    <MenuItem key={item.id} value={item.id}>
                      {item.name}
                    </MenuItem>
                  ))}
                </TextField>
                <TextField
                  style={{ width: '30%' }}
                  select
                  label="Select FPC Name"
                  margin="normal"
                  variant="outlined"
                  name="productSubCategory"
                  value={fieldValues.productSubCategory}
                  onChange={handleFieldValues}
                >
                  {productSubCategoryList.map((item) => (
                    <MenuItem key={item.id} value={item.id}>
                      {item.name}
                    </MenuItem>
                  ))}
                </TextField>
                <TextField
                  style={{ width: '30%' }}
                  select
                  label="Designation"
                  margin="normal"
                  variant="outlined"
                  name="productSubCategory"
                  value={fieldValues.productSubCategory}
                  onChange={handleFieldValues}
                >
                  {productSubCategoryList.map((item) => (
                    <MenuItem key={item.id} value={item.id}>
                      {item.name}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid container>
                <TextField
                  id="outlined-multiline-static"
                  label="Address"
                  placeholder="Enter Address"
                  multiline
                  rows={4}
                  variant="outlined"
                />
              </Grid>
              <Grid container justify="space-between" className="mb-2">
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox onChange={handleChange} name="gilad" />}
                    label="I agree to the Terms of Service and Privacy"
                  />
                  <a>agree</a>
                </FormGroup>
              </Grid>
            </Grid>
            <Grid container justify="center">
              <button className="btn btn-warning">Submit</button>
            </Grid>
          </form>
          <img
            src={`${process.env.PUBLIC_URL}/assets/registrationforms/regformimg.jpg`}
            width="100%"
          />
        </Grid>
      </Grid>
    </>
  )
}

export default Register
