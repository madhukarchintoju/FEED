import React from 'react'
import PropTypes from 'prop-types'
import {
  TextField,
  Button,
  makeStyles,
  Grid,
  InputAdornment,
  AppBar,
  Tabs,
  Tab,
  Box,
  Typography,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Select,
  MenuItem,
  FormGroup,
} from '@material-ui/core'
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

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  tabCard: {
    margin: '0.5em',
    borderRadius: '0px 0px 20px 20px',
    boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)',
    webkitBoxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)',
    mozBoxShadow: '0px 0px 5px 0px rgba(0, 0, 0, 0.75)',
  },
}))

export default function ShareCapitalRegistry() {
  const classes = useStyles()
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  return (
    <>
      <Grid container justifyContent="center">
        <h5>Share Capital Registry</h5>
      </Grid>
      <div className={classes.root}>
        {/* <AppBar position="static" color="default"> */}
        <Grid container justifyContent="center">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="scrollable"
            scrollButtons="auto"
            centered
            aria-label="scrollable auto tabs example"
          >
            <Tab
              label="Member Register"
              {...a11yProps(0)}
              className={classes.tabCard}
            />
            <Tab
              label="Share Capital Register"
              {...a11yProps(1)}
              className={classes.tabCard}
            />
            <Tab
              label="Share transfer Register"
              {...a11yProps(2)}
              className={classes.tabCard}
            />
          </Tabs>
        </Grid>

        {/* </AppBar> */}
        <TabPanel value={value} index={0}>
          <form>
            <Grid container item lg={12} justifyContent="space-evenly">
              <Grid item lg={5}>
                <TextField
                  fullWidth
                  type="number"
                  label="Membership Number"
                  variant="outlined"
                  margin="normal"
                  placeholder="Enter Membership Number"
                  name="membershipNumber"
                />
                <TextField
                  fullWidth
                  label="Member Name"
                  variant="outlined"
                  margin="normal"
                  placeholder="Enter Member Name"
                  name="memberName"
                />
                <TextField
                  fullWidth
                  label="Father / Mother / Spouse Name"
                  variant="outlined"
                  margin="normal"
                  placeholder="Enter Name"
                  name="memberName"
                />
                <TextField
                  fullWidth
                  label="Farmers Group Name"
                  variant="outlined"
                  margin="normal"
                  placeholder="Enter Farmers Group Name"
                  name="memberName"
                />
                <TextField
                  fullWidth
                  label="Village / Mandal"
                  variant="outlined"
                  margin="normal"
                  placeholder="Enter Name"
                  name="memberName"
                />
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
                <TextField
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  label="Education"
                  placeholder="Enter Education"
                  name="education"
                />
              </Grid>
              <Grid item lg={5}>
                <TextField
                  fullWidth
                  select
                  label="Select Reservation"
                  margin="normal"
                  variant="outlined"
                  name="selectedState"
                >
                  <MenuItem value="oc">OC</MenuItem>
                  <MenuItem value="bc">BC</MenuItem>
                  <MenuItem value="mn">MN</MenuItem>
                  <MenuItem value="sc">SC</MenuItem>
                  <MenuItem value="st">ST</MenuItem>
                </TextField>
                <TextField
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  label="Date of Becoming"
                  placeholder="Enter Date of Becoming"
                  name="education"
                />
                <TextField
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  label="Share alloted / Transfer"
                  placeholder="Enter Share alloted / Transfer"
                  name="education"
                />
                <TextField
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  label="Folio of Share allotted / Transfer"
                  placeholder="Enter Folio of Share allotted / Transfer"
                  name="education"
                />
                <TextField
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  label="Name of the Nominee"
                  placeholder="Enter Name of the Nominee"
                  name="education"
                />
                <TextField
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  label="Relationship with Nominee"
                  placeholder="Enter Relationship Nominee"
                  name="education"
                />
                <TextField
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  label="Nominee Number"
                  placeholder="Enter Nominee Number"
                  name="education"
                />
              </Grid>
            </Grid>
            <Grid container lg={12} justifyContent="center">
              <button className="btn btn-primary">Submit</button>
            </Grid>
          </form>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <form>
            <Grid container item lg={12} justifyContent="space-evenly">
              <Grid item lg={5}>
                <TextField
                  fullWidth
                  type="number"
                  label="Name of Shareholder"
                  variant="outlined"
                  margin="normal"
                  placeholder="Enter Name of Shareholder"
                  name="membershipNumber"
                />
                <TextField
                  fullWidth
                  label="Father / Mother / Spouse Name"
                  variant="outlined"
                  margin="normal"
                  placeholder="Enter Name"
                  name="memberName"
                />
                <TextField
                  fullWidth
                  label="Nominee Name"
                  variant="outlined"
                  margin="normal"
                  placeholder="Enter Nominee Name"
                  name="memberName"
                />
                <TextField
                  fullWidth
                  label="Nominee Relation"
                  variant="outlined"
                  margin="normal"
                  placeholder="Enter Nominee Relation"
                  name="memberName"
                />
                <TextField
                  fullWidth
                  label="Address"
                  placeholder="Enter Address"
                  multiline
                  rows={4}
                  variant="outlined"
                  name="address"
                />
                <TextField
                  fullWidth
                  label="Vocation / Livelihoods"
                  variant="outlined"
                  margin="normal"
                  placeholder="Enter Vocation / Livelihoods"
                  name="memberName"
                />
              </Grid>
              <Grid item lg={5}>
                <TextField
                  fullWidth
                  type="number"
                  label="Number of Shares"
                  variant="outlined"
                  margin="normal"
                  placeholder="Enter Number of Shares"
                  name="memberName"
                />
                <TextField
                  fullWidth
                  type="number"
                  label="Face value of Share"
                  variant="outlined"
                  margin="normal"
                  placeholder="Enter Face value of Share"
                  name="memberName"
                />
                <TextField
                  fullWidth
                  type="number"
                  label="Total Amount Paid"
                  variant="outlined"
                  margin="normal"
                  placeholder="Total Amount Paid (in numbers)"
                  name="memberName"
                />
                <TextField
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  name="dob"
                  id="dateTime"
                  label="Date of Purchase of Shares"
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
                  label="Share Certificate Number"
                  placeholder="Enter Share Certificate Number"
                  name="education"
                />
                <TextField
                  fullWidth
                  type="number"
                  variant="outlined"
                  margin="normal"
                  label="Distinctive Number"
                  placeholder="Enter Distinctive Number"
                  name="education"
                />
              </Grid>
            </Grid>
            <Grid container lg={12} justifyContent="center">
              <button className="btn btn-primary">Submit</button>
            </Grid>
          </form>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <form>
            <Grid container item lg={12} justifyContent="space-evenly">
              <Grid item lg={5}>
                <TextField
                  fullWidth
                  type="number"
                  label="Number of Transfer"
                  variant="outlined"
                  margin="normal"
                  placeholder="Enter Number of Transfer"
                  name="membershipNumber"
                />
                <TextField
                  fullWidth
                  type="number"
                  label="Folio Number"
                  variant="outlined"
                  margin="normal"
                  placeholder="Enter Folio"
                  name="memberName"
                />
                <TextField
                  fullWidth
                  label="Name of Transferor"
                  variant="outlined"
                  margin="normal"
                  placeholder="Enter Transferor Name"
                  name="memberName"
                />
                <TextField
                  fullWidth
                  label="Transferor Address"
                  placeholder="Enter Transferor Address"
                  multiline
                  rows={4}
                  variant="outlined"
                  name="address"
                />
                <TextField
                  fullWidth
                  type="number"
                  label="Number of Shares Transferred"
                  variant="outlined"
                  margin="normal"
                  placeholder="Enter Vocation / Livelihoods"
                  name="memberName"
                />
                <Grid container lg={12} justifyContent="space-between">
                  <TextField
                    lg={6}
                    item
                    type="number"
                    label="From"
                    variant="outlined"
                    margin="normal"
                    name="memberName"
                  />
                  <TextField
                    lg={6}
                    item
                    type="number"
                    label="To"
                    variant="outlined"
                    margin="normal"
                    name="memberName"
                  />
                </Grid>
                <TextField
                  fullWidth
                  type="number"
                  label="Certificate Number"
                  placeholder="Enter Certificate Number"
                  variant="outlined"
                  margin="normal"
                  name="memberName"
                />
                <TextField
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  id="quantity"
                  name="quantity"
                  label="Amount"
                  type="number"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">₹</InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item lg={5}>
                <TextField
                  fullWidth
                  label="Transferee Name"
                  placeholder="Enter Transferee Name"
                  variant="outlined"
                  margin="normal"
                  name="memberName"
                />
                <TextField
                  fullWidth
                  label="Transferee Address"
                  placeholder="Enter Transferor Address"
                  multiline
                  rows={4}
                  variant="outlined"
                  name="address"
                />
                <TextField
                  fullWidth
                  type="number"
                  label="New Certificate Number"
                  variant="outlined"
                  margin="normal"
                  placeholder="Enter New Certificate Number"
                  name="memberName"
                />
                <TextField
                  fullWidth
                  type="number"
                  label="Member Register Folio Number"
                  variant="outlined"
                  margin="normal"
                  placeholder="Enter Folio Number"
                  name="memberName"
                />
                <TextField
                  fullWidth
                  type="number"
                  label="Authorized Person Initials"
                  variant="outlined"
                  margin="normal"
                  placeholder="Enter Authorized Person Initials"
                  name="memberName"
                />
                <TextField
                  fullWidth
                  label="Remarks"
                  placeholder="Enter Remarks"
                  multiline
                  rows={4}
                  variant="outlined"
                  name="address"
                />
              </Grid>
            </Grid>
            <Grid container lg={12} justifyContent="center">
              <button className="btn btn-primary">Submit</button>
            </Grid>
          </form>
        </TabPanel>
      </div>
    </>
  )
}
