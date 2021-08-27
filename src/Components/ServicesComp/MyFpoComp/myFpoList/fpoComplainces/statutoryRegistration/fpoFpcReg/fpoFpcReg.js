import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {
  Grid,
  Paper,
  Tabs,
  Tab,
  Box,
  Typography,
  TextField,
  makeStyles,
} from '@material-ui/core'
function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
}

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    'aria-controls': `nav-tabpanel-${index}`,
  }
}
function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault()
      }}
      {...props}
    />
  )
}

export default function FpoFpcReg(e) {
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  const useStyles = makeStyles((theme) => ({}))
  const classes = useStyles()
  return (
    <>
      <div>
        <h4 className="text-center">FPO - FPC Registrations</h4>
        <Tabs
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"
        >
          <LinkTab label="FPO Registration" {...a11yProps(0)} />
          <LinkTab label="FPC Registration" {...a11yProps(1)} />
        </Tabs>
        <TabPanel value={value} index={0}>
          <form>
            <Grid container item lg={12} justifyContent="space-evenly">
              <Grid item lg={5} md={12} sm={12} xs={12}>
                <TextField
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  label="Mobile Number"
                  placeholder="Enter Mobile Number"
                />
              </Grid>
              <Grid item lg={5} md={12} sm={12} xs={12}>
                <TextField
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  label="Email (optional)"
                  placeholder="Enter Email"
                />
              </Grid>
            </Grid>
            <h6 style={{ fontWeight: '600', marginTop: '10px' }}>
              Bank Details :
            </h6>
            <Grid container justifyContent="space-evenly" spacing={1}>
              <Grid item lg={4} md={12} sm={12} xs={12}>
                <TextField
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  label="Bank Name"
                  placeholder="Enter Bank Name"
                />
              </Grid>
              <Grid item lg={4} md={12} sm={12} xs={12}>
                <TextField
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  label="Bank A/C Number"
                  placeholder="Enter Bank Name"
                />
              </Grid>
              <Grid item lg={4} md={12} sm={12} xs={12}>
                <TextField
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  label="Branch"
                  placeholder="Enter Branch"
                />
              </Grid>
              <Grid item lg={4} md={12} sm={12} xs={12}>
                <TextField
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  label="Bank Address"
                  placeholder="Enter Bank Address"
                />
              </Grid>
              <Grid item lg={4} md={12} sm={12} xs={12}>
                <TextField
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  label="IFSC Code"
                  placeholder="Enter IFSC Code"
                />
              </Grid>
              <Grid item lg={4} md={12} sm={12} xs={12}>
                <TextField
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  label="Pincode"
                  placeholder="Enter Pincode"
                />
              </Grid>
            </Grid>
            <h6 style={{ fontWeight: '600', marginTop: '10px' }}>
              Member Details :
            </h6>
            <Grid container item lg={12} spacing={1}>
              <Grid item lg={4} md={12} sm={12} xs={12}>
                <TextField
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  label="Member Name"
                  placeholder="Enter Member Name"
                />
              </Grid>
              <Grid item lg={4} md={12} sm={12} xs={12}>
                <TextField
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  label="Member Mobile"
                  placeholder="Enter Member Name"
                />
              </Grid>
              <Grid item lg={4} md={12} sm={12} xs={12}>
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
                />
              </Grid>
              <Grid item lg={4} md={12} sm={12} xs={12}>
                <TextField
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  label="Aadhar Number"
                  placeholder="Enter Aadhar Number"
                />
              </Grid>
              <Grid item lg={4} md={12} sm={12} xs={12}>
                <TextField
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  label="PAN Number"
                  placeholder="Enter PAN Number"
                />
              </Grid>
              <Grid item lg={4} md={12} sm={12} xs={12}>
                <TextField
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  label="Voter Id"
                  placeholder="Enter Voter Id"
                />
              </Grid>
              <Grid item lg={4} md={12} sm={12} xs={12}>
                <TextField
                  fullWidth
                  type="file"
                  variant="outlined"
                  margin="normal"
                  label="Upload Proofs"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
            </Grid>
            <h6 style={{ fontWeight: '600', marginTop: '10px' }}>
              Address and proofs
            </h6>
            <Grid
              container
              item
              lg={12}
              justifyContent="space-evenly"
              spacing={1}
            >
              <Grid item lg={5} md={12} sm={12} xs={12}>
                <TextField
                  fullWidth
                  label="Address"
                  placeholder="Enter Address"
                  multiline
                  rows={4}
                  variant="outlined"
                  name="address"
                />
              </Grid>
              <Grid item lg={5} md={12} sm={12} xs={12}>
                <TextField
                  fullWidth
                  label="Comments / Suggestions"
                  placeholder="Enter Comments / Suggestions"
                  multiline
                  rows={4}
                  variant="outlined"
                  name="address"
                />
              </Grid>
              <Grid
                item
                lg={12}
                md={12}
                sm={12}
                xs={12}
                className="text-center"
              >
                <TextField
                  type="file"
                  variant="outlined"
                  margin="normal"
                  label="Upload Proofs"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
            </Grid>
            <Grid container justifyContent="center">
              <button className="btn btn-success">Submit</button>
            </Grid>
          </form>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <form>
            <Grid container item lg={12} justifyContent="space-evenly">
              <Grid item lg={5} md={12} sm={12} xs={12}>
                <TextField
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  label="Mobile Number"
                  placeholder="Enter Mobile Number"
                />
              </Grid>
              <Grid item lg={5} md={12} sm={12} xs={12}>
                <TextField
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  label="Email"
                  placeholder="Enter Email (optional)"
                />
              </Grid>
            </Grid>
            <Grid container justifyContent="space-evenly">
              <Grid item lg={5} md={12} sm={12} xs={12}>
                <TextField
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  label="PAN Number"
                  placeholder="Enter PAN Number"
                />
              </Grid>
              <Grid item lg={5} md={12} sm={12} xs={12}>
                <TextField
                  type="file"
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  label="Upload PAN Image"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
            </Grid>
            <Grid container item lg={12} spacing={1}>
              <Grid item lg={4} md={12} sm={12} xs={12}>
                <TextField
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  label="Aadhar Number"
                  placeholder="Enter Aadhar Number"
                />
              </Grid>
              <Grid item lg={4} md={12} sm={12} xs={12}>
                <TextField
                  type="file"
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  label="Upload Aadhar Front"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item lg={4} md={12} sm={12} xs={12}>
                <TextField
                  type="file"
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  label="Upload Aadhar Back"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
            </Grid>
            <h6 style={{ fontWeight: '600', marginTop: '10px' }}>
              Bank Details :
            </h6>
            <Grid container justifyContent="space-evenly" spacing={1}>
              <Grid item lg={4} md={12} sm={12} xs={12}>
                <TextField
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  label="Bank Name"
                  placeholder="Enter Bank Name"
                />
              </Grid>
              <Grid item lg={4} md={12} sm={12} xs={12}>
                <TextField
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  label="Bank A/C Number"
                  placeholder="Enter Bank Name"
                />
              </Grid>
              <Grid item lg={4} md={12} sm={12} xs={12}>
                <TextField
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  label="Branch"
                  placeholder="Enter Branch"
                />
              </Grid>
              <Grid item lg={4} md={12} sm={12} xs={12}>
                <TextField
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  label="Bank Address"
                  placeholder="Enter Bank Address"
                />
              </Grid>
              <Grid item lg={4} md={12} sm={12} xs={12}>
                <TextField
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  label="IFSC Code"
                  placeholder="Enter IFSC Code"
                />
              </Grid>
              <Grid item lg={4} md={12} sm={12} xs={12}>
                <TextField
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  label="Pincode"
                  placeholder="Enter Pincode"
                />
              </Grid>
            </Grid>
            <Grid container item lg={12} justifyContent="space-evenly">
              <Grid item lg={5} md={12} sm={12} xs={12}>
                <TextField
                  type="file"
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  label="Upload Address Proof"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item lg={5} md={12} sm={12} xs={12}>
                <TextField
                  type="file"
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  label="Digital Signature"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
            </Grid>
            <Grid container item lg={12} justifyContent="space-evenly">
              <Grid item lg={5} md={12} sm={12} xs={12}>
                <TextField
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  label="Direct Identification Number"
                  placeholder="Enter Direct Identification Number"
                />
              </Grid>
              <Grid item lg={5} md={12} sm={12} xs={12}>
                <TextField
                  type="file"
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  label="Direct Identification Number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
            </Grid>
            <h6 style={{ fontWeight: '600', marginTop: '10px' }}>
              Certificates
            </h6>
            <Grid container spacing={1}>
              <Grid item lg={3} md={12} sm={12} xs={12}>
                <TextField
                  fullWidth
                  type="file"
                  margin="normal"
                  variant="outlined"
                  label="Memorandum of Articles of Association"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item lg={3} md={12} sm={12} xs={12}>
                <TextField
                  fullWidth
                  type="file"
                  margin="normal"
                  variant="outlined"
                  label="Certificate of Incorporation"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item lg={3} md={12} sm={12} xs={12}>
                <TextField
                  fullWidth
                  type="file"
                  margin="normal"
                  variant="outlined"
                  label="NOC of Landlord"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item lg={3} md={12} sm={12} xs={12}>
                <TextField
                  fullWidth
                  type="file"
                  margin="normal"
                  variant="outlined"
                  label="Registered office electricity bill"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
            </Grid>
            <Grid container justifyContent="center">
              <button className="btn btn-success">Submit</button>
            </Grid>
          </form>
        </TabPanel>
      </div>
    </>
  )
}
