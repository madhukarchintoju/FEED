import React from 'react'
import { Grid, TextField } from '@material-ui/core'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'

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

export default function PanReg() {
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  return (
    <>
      <h4 className="text-center">PAN Registration</h4>
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
          <Tab label="Individual" {...a11yProps(0)} />
          <Tab label="Business" {...a11yProps(1)} />
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
          </Grid>
          <Grid container justifyContent="space-around">
            <Grid item lg={5}>
              <TextField
                type="file"
                fullWidth
                variant="outlined"
                margin="normal"
                label="Passport Size Photo"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item lg={5}>
              <TextField
                type="file"
                fullWidth
                variant="outlined"
                margin="normal"
                label="Upload 10th certificate / Aadhar /E-aadhar"
                InputLabelProps={{
                  shrink: true,
                }}
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
          </Grid>
          <Grid container justifyContent="space-around" spacing={1}>
            <Grid item lg={4}>
              <TextField
                fullWidth
                margin="normal"
                variant="outlined"
                label="Name of the Authorised Person Details"
                placeholder="Enter Name of the Authorised Person Details"
              />
            </Grid>
            <Grid item lg={4}>
              <TextField
                type="file"
                fullWidth
                variant="outlined"
                margin="normal"
                label="Date of Birth of Company - upload (Legal Document)"
                InputLabelProps={{
                  shrink: true,
                }}
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
