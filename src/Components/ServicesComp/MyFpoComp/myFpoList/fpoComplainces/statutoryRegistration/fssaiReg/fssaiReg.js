import React from 'react'
import { Grid, TextField } from '@material-ui/core'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import { MenuItem } from '@material-ui/core'

function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
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
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  }
}

export default function FssaiReg() {
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  return (
    <>
      <Grid container justifyContent="center">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="Registration" {...a11yProps(0)} />
          <Tab label="State" {...a11yProps(1)} />
          <Tab label="Central" {...a11yProps(2)} />
        </Tabs>
      </Grid>

      <TabPanel value={value} index={0}>
        <form>
          <Grid container justifyContent="space-around" spacing={1}>
            <Grid item lg={4}>
              <TextField
                fullWidth
                margin="normal"
                variant="outlined"
                label="Name of the Applicant"
                placeholder="Enter Name of the Applicant"
              />
            </Grid>
            <Grid item lg={4}>
              <TextField
                fullWidth
                margin="normal"
                variant="outlined"
                label="Mobile Number"
                placeholder="Enter Mobile Number"
              />
            </Grid>
            <Grid item lg={4}>
              <TextField
                fullWidth
                margin="normal"
                variant="outlined"
                label="Email ID"
                placeholder="Enter Email ID"
              />
            </Grid>
            <Grid item lg={4}>
              <TextField
                fullWidth
                select
                margin="normal"
                variant="outlined"
                label="Identity Proof"
              >
                <MenuItem value="voterid">Voter ID</MenuItem>
                <MenuItem value="drivinglicense">Driving License</MenuItem>
                <MenuItem value="passport">Passport</MenuItem>
              </TextField>
              <TextField
                type="file"
                fullWidth
                variant="outlined"
                margin="normal"
                label="Upload Identity Proof"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item lg={4}>
              <TextField
                fullWidth
                margin="normal"
                variant="outlined"
                label="List of Products Planned"
                placeholder="Enter List of Products Planned"
              />
            </Grid>
            <Grid item lg={4}>
              <TextField
                type="file"
                fullWidth
                margin="normal"
                variant="outlined"
                label="Proof of premises like Rental Agreement"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item lg={4}>
              <p>
                Partnership Deed / Certificate of Incorporation / Articles of
                Association / Memorandum of Association
              </p>
              <TextField
                type="file"
                fullWidth
                margin="normal"
                variant="outlined"
                label="Proof of premises like Rental Agreement"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item lg={4}>
              <TextField
                fullWidth
                margin="normal"
                variant="outlined"
                label="Import - Export Code"
                placeholder="Enter Import - Export Code"
              />
            </Grid>
          </Grid>
          <Grid container spacing={1}>
            <Grid item lg={4}>
              <TextField
                fullWidth
                margin="normal"
                variant="outlined"
                label="Name of Business / Company"
                placeholder="Enter Import - Export Code"
              />
            </Grid>
            <Grid item lg={4}>
              <TextField
                fullWidth
                margin="normal"
                variant="outlined"
                label="Name of the Authorised Person"
                placeholder="Enter Name of the Authorised Person"
              />
            </Grid>
            <Grid item lg={4}>
              <TextField
                fullWidth
                select
                margin="normal"
                variant="outlined"
                label="Identity Proof"
              >
                <MenuItem value="voterid">Voter ID</MenuItem>
                <MenuItem value="drivinglicense">Driving License</MenuItem>
                <MenuItem value="passport">Passport</MenuItem>
              </TextField>
            </Grid>
            <Grid item lg={4}>
              <TextField
                fullWidth
                margin="normal"
                multiline
                rows={4}
                variant="outlined"
                label="Address of the plant / unit"
                placeholder="Enter Address of the plant / unit"
              />
            </Grid>
            <Grid item lg={4}>
              <TextField
                fullWidth
                margin="normal"
                multiline
                rows={4}
                variant="outlined"
                label="Food Product Details"
                placeholder="Enter Food Product Details"
              />
            </Grid>
            <Grid item lg={4}>
              <TextField
                fullWidth
                margin="normal"
                multiline
                rows={4}
                variant="outlined"
                label="Business Activity"
                placeholder="Enter Business Activity"
              />
            </Grid>
            <Grid item lg={4}>
              <TextField
                fullWidth
                margin="normal"
                variant="outlined"
                label="Expected Turnover"
                placeholder="Enter Expected Turnover"
              />
            </Grid>
          </Grid>
          <h6 style={{ fontWeight: '600', marginTop: '10px' }}>Address</h6>
          <Grid container spacing={1}>
            <Grid item lg={4}>
              <TextField
                fullWidth
                margin="normal"
                variant="outlined"
                label="Flat No / Door No :"
                placeholder="Enter Flat No / Door No"
              />
            </Grid>
            <Grid item lg={4}>
              <TextField
                fullWidth
                margin="normal"
                variant="outlined"
                label="Street"
                placeholder="Enter Street"
              />
            </Grid>
            <Grid item lg={4}>
              <TextField
                fullWidth
                select
                margin="normal"
                variant="outlined"
                label="Select State"
              >
                <MenuItem value="andhrapradesh">Andhra Pradesh</MenuItem>
                <MenuItem value="telangana">Telangana</MenuItem>
                <MenuItem value="tamilnadu">Tamil Nadu</MenuItem>
              </TextField>
            </Grid>
            <Grid item lg={4}>
              <TextField
                fullWidth
                margin="normal"
                variant="outlined"
                label="City"
                placeholder="Enter City"
              />
            </Grid>
            <Grid item lg={4}>
              <TextField
                fullWidth
                margin="normal"
                variant="outlined"
                label="Pincode"
                placeholder="Enter Pincode"
              />
            </Grid>
          </Grid>
          <Grid container lg={12} justifyContent="center" className="mt-4">
            <button className="btn btn-primary">Submit</button>
          </Grid>
        </form>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <form>
          <Grid container justifyContent="space-around" spacing={1}>
            <Grid item lg={4}>
              <TextField
                fullWidth
                margin="normal"
                variant="outlined"
                label="Name of the Applicant"
                placeholder="Enter Name of the Applicant"
              />
            </Grid>
            <Grid item lg={4}>
              <TextField
                fullWidth
                margin="normal"
                variant="outlined"
                label="Mobile Number"
                placeholder="Enter Mobile Number"
              />
            </Grid>
            <Grid item lg={4}>
              <TextField
                fullWidth
                margin="normal"
                variant="outlined"
                label="Email ID"
                placeholder="Enter Email ID"
              />
            </Grid>
            <Grid item lg={4}>
              <TextField
                fullWidth
                select
                margin="normal"
                variant="outlined"
                label="Identity Proof"
              >
                <MenuItem value="voterid">Voter ID</MenuItem>
                <MenuItem value="drivinglicense">Driving License</MenuItem>
                <MenuItem value="passport">Passport</MenuItem>
              </TextField>
              <TextField
                type="file"
                fullWidth
                variant="outlined"
                margin="normal"
                label="Upload Identity Proof"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item lg={4}>
              <TextField
                fullWidth
                margin="normal"
                variant="outlined"
                label="List of Products Planned"
                placeholder="Enter List of Products Planned"
              />
            </Grid>
            <Grid item lg={4}>
              <TextField
                type="file"
                fullWidth
                margin="normal"
                variant="outlined"
                label="Proof of premises like Rental Agreement"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item lg={4}>
              <p>
                Partnership Deed / Certificate of Incorporation / Articles of
                Association / Memorandum of Association
              </p>
              <TextField
                type="file"
                fullWidth
                margin="normal"
                variant="outlined"
                label="Proof of premises like Rental Agreement"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item lg={4}>
              <TextField
                fullWidth
                margin="normal"
                variant="outlined"
                label="Import - Export Code"
                placeholder="Enter Import - Export Code"
              />
            </Grid>
          </Grid>
          <Grid container spacing={1}>
            <Grid item lg={4}>
              <TextField
                fullWidth
                margin="normal"
                variant="outlined"
                label="Name of Business / Company"
                placeholder="Enter Import - Export Code"
              />
            </Grid>
            <Grid item lg={4}>
              <TextField
                fullWidth
                margin="normal"
                variant="outlined"
                label="Name of the Authorised Person"
                placeholder="Enter Name of the Authorised Person"
              />
            </Grid>
            <Grid item lg={4}>
              <TextField
                fullWidth
                select
                margin="normal"
                variant="outlined"
                label="Identity Proof"
              >
                <MenuItem value="voterid">Voter ID</MenuItem>
                <MenuItem value="drivinglicense">Driving License</MenuItem>
                <MenuItem value="passport">Passport</MenuItem>
              </TextField>
            </Grid>
            <Grid item lg={4}>
              <TextField
                fullWidth
                margin="normal"
                multiline
                rows={4}
                variant="outlined"
                label="Address of the plant / unit"
                placeholder="Enter Address of the plant / unit"
              />
            </Grid>
            <Grid item lg={4}>
              <TextField
                fullWidth
                margin="normal"
                multiline
                rows={4}
                variant="outlined"
                label="Food Product Details"
                placeholder="Enter Food Product Details"
              />
            </Grid>
            <Grid item lg={4}>
              <TextField
                fullWidth
                margin="normal"
                multiline
                rows={4}
                variant="outlined"
                label="Business Activity"
                placeholder="Enter Business Activity"
              />
            </Grid>
            <Grid item lg={4}>
              <TextField
                fullWidth
                margin="normal"
                variant="outlined"
                label="Expected Turnover"
                placeholder="Enter Expected Turnover"
              />
            </Grid>
          </Grid>
          <h6 style={{ fontWeight: '600', marginTop: '10px' }}>Address</h6>
          <Grid container spacing={1}>
            <Grid item lg={4}>
              <TextField
                fullWidth
                margin="normal"
                variant="outlined"
                label="Flat No / Door No :"
                placeholder="Enter Flat No / Door No"
              />
            </Grid>
            <Grid item lg={4}>
              <TextField
                fullWidth
                margin="normal"
                variant="outlined"
                label="Street"
                placeholder="Enter Street"
              />
            </Grid>
            <Grid item lg={4}>
              <TextField
                fullWidth
                select
                margin="normal"
                variant="outlined"
                label="Select State"
              >
                <MenuItem value="andhrapradesh">Andhra Pradesh</MenuItem>
                <MenuItem value="telangana">Telangana</MenuItem>
                <MenuItem value="tamilnadu">Tamil Nadu</MenuItem>
              </TextField>
            </Grid>
            <Grid item lg={4}>
              <TextField
                fullWidth
                margin="normal"
                variant="outlined"
                label="City"
                placeholder="Enter City"
              />
            </Grid>
            <Grid item lg={4}>
              <TextField
                fullWidth
                margin="normal"
                variant="outlined"
                label="Pincode"
                placeholder="Enter Pincode"
              />
            </Grid>
          </Grid>
          <Grid container lg={12} justifyContent="center" className="mt-4">
            <button className="btn btn-primary">Submit</button>
          </Grid>
        </form>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <form>
          <Grid container justifyContent="space-around" spacing={1}>
            <Grid item lg={4}>
              <TextField
                fullWidth
                margin="normal"
                variant="outlined"
                label="Name of the Applicant"
                placeholder="Enter Name of the Applicant"
              />
            </Grid>
            <Grid item lg={4}>
              <TextField
                fullWidth
                margin="normal"
                variant="outlined"
                label="Mobile Number"
                placeholder="Enter Mobile Number"
              />
            </Grid>
            <Grid item lg={4}>
              <TextField
                fullWidth
                margin="normal"
                variant="outlined"
                label="Email ID"
                placeholder="Enter Email ID"
              />
            </Grid>
            <Grid item lg={4}>
              <TextField
                fullWidth
                select
                margin="normal"
                variant="outlined"
                label="Identity Proof"
              >
                <MenuItem value="voterid">Voter ID</MenuItem>
                <MenuItem value="drivinglicense">Driving License</MenuItem>
                <MenuItem value="passport">Passport</MenuItem>
              </TextField>
              <TextField
                type="file"
                fullWidth
                variant="outlined"
                margin="normal"
                label="Upload Identity Proof"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item lg={4}>
              <TextField
                fullWidth
                margin="normal"
                variant="outlined"
                label="List of Products Planned"
                placeholder="Enter List of Products Planned"
              />
            </Grid>
            <Grid item lg={4}>
              <TextField
                type="file"
                fullWidth
                margin="normal"
                variant="outlined"
                label="Proof of premises like Rental Agreement"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item lg={4}>
              <p>
                Partnership Deed / Certificate of Incorporation / Articles of
                Association / Memorandum of Association
              </p>
              <TextField
                type="file"
                fullWidth
                margin="normal"
                variant="outlined"
                label="Proof of premises like Rental Agreement"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item lg={4}>
              <TextField
                fullWidth
                margin="normal"
                variant="outlined"
                label="Import - Export Code"
                placeholder="Enter Import - Export Code"
              />
            </Grid>
          </Grid>
          <Grid container spacing={1}>
            <Grid item lg={4}>
              <TextField
                fullWidth
                margin="normal"
                variant="outlined"
                label="Name of Business / Company"
                placeholder="Enter Import - Export Code"
              />
            </Grid>
            <Grid item lg={4}>
              <TextField
                fullWidth
                margin="normal"
                variant="outlined"
                label="Name of the Authorised Person"
                placeholder="Enter Name of the Authorised Person"
              />
            </Grid>
            <Grid item lg={4}>
              <TextField
                fullWidth
                select
                margin="normal"
                variant="outlined"
                label="Identity Proof"
              >
                <MenuItem value="voterid">Voter ID</MenuItem>
                <MenuItem value="drivinglicense">Driving License</MenuItem>
                <MenuItem value="passport">Passport</MenuItem>
              </TextField>
            </Grid>
            <Grid item lg={4}>
              <TextField
                fullWidth
                margin="normal"
                multiline
                rows={4}
                variant="outlined"
                label="Address of the plant / unit"
                placeholder="Enter Address of the plant / unit"
              />
            </Grid>
            <Grid item lg={4}>
              <TextField
                fullWidth
                margin="normal"
                multiline
                rows={4}
                variant="outlined"
                label="Food Product Details"
                placeholder="Enter Food Product Details"
              />
            </Grid>
            <Grid item lg={4}>
              <TextField
                fullWidth
                margin="normal"
                multiline
                rows={4}
                variant="outlined"
                label="Business Activity"
                placeholder="Enter Business Activity"
              />
            </Grid>
            <Grid item lg={4}>
              <TextField
                fullWidth
                margin="normal"
                variant="outlined"
                label="Expected Turnover"
                placeholder="Enter Expected Turnover"
              />
            </Grid>
          </Grid>
          <h6 style={{ fontWeight: '600', marginTop: '10px' }}>Address</h6>
          <Grid container spacing={1}>
            <Grid item lg={4}>
              <TextField
                fullWidth
                margin="normal"
                variant="outlined"
                label="Flat No / Door No :"
                placeholder="Enter Flat No / Door No"
              />
            </Grid>
            <Grid item lg={4}>
              <TextField
                fullWidth
                margin="normal"
                variant="outlined"
                label="Street"
                placeholder="Enter Street"
              />
            </Grid>
            <Grid item lg={4}>
              <TextField
                fullWidth
                select
                margin="normal"
                variant="outlined"
                label="Select State"
              >
                <MenuItem value="andhrapradesh">Andhra Pradesh</MenuItem>
                <MenuItem value="telangana">Telangana</MenuItem>
                <MenuItem value="tamilnadu">Tamil Nadu</MenuItem>
              </TextField>
            </Grid>
            <Grid item lg={4}>
              <TextField
                fullWidth
                margin="normal"
                variant="outlined"
                label="City"
                placeholder="Enter City"
              />
            </Grid>
            <Grid item lg={4}>
              <TextField
                fullWidth
                margin="normal"
                variant="outlined"
                label="Pincode"
                placeholder="Enter Pincode"
              />
            </Grid>
          </Grid>
          <Grid container lg={12} justifyContent="center" className="mt-4">
            <button className="btn btn-primary">Submit</button>
          </Grid>
        </form>
      </TabPanel>
    </>
  )
}
