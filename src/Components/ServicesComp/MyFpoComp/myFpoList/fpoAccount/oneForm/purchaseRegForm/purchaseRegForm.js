import React from 'react'
import PropTypes from 'prop-types'
import {
  TextField,
  makeStyles,
  Grid,
  InputAdornment,
  Tabs,
  Tab,
  Box,
  Typography,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  FormControlLabel,
  AppBar,
} from '@material-ui/core'
import Autocomplete from '@material-ui/lab/Autocomplete'
import PurchaseOrder from './purchaseOrder'
import PurchaseInvoice from './purchaseInvoice'
const vendorList = [
  { title: 'Ramudu' },
  { title: 'Lakshman' },
  { title: 'Krishna' },
  { title: 'Arjun' },
  { title: 'Narayana' },
]
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
}))

export default function PurchaseRegForm() {
  const classes = useStyles()
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  return (
    <>
      <div className={classes.root}>
        <AppBar position="static" color="default" style={{ boxShadow: 'none' }}>
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
              <Tab label="Purchase Order" {...a11yProps(0)} />
              <Tab label="Purchase Invoice" {...a11yProps(1)} />
              <Tab label="Return/Debate Note" {...a11yProps(2)} />
            </Tabs>
          </Grid>
        </AppBar>
        <TabPanel value={value} index={0}>
          <PurchaseOrder />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <PurchaseInvoice />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <form>
            <Grid container item lg={12} justifyContent="space-evenly">
              <Grid item lg={5}>
                <TextField
                  fullWidth
                  type="number"
                  label="Debit Note Number"
                  variant="outlined"
                  margin="normal"
                  placeholder="Enter Debit Note Number"
                  name="invoiceNumber"
                />
                <TextField
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  name="dob"
                  id="dateTime"
                  label="Debit Note Date"
                  type="date"
                  defaultValue=""
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <TextField
                  fullWidth
                  type="number"
                  label="Original Invoice Number"
                  variant="outlined"
                  margin="normal"
                  placeholder="Enter Debit Note Number"
                  name="invoiceNumber"
                />
                <TextField
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  name="dob"
                  id="dateTime"
                  label="Original Invoice Date"
                  type="date"
                  defaultValue=""
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <Autocomplete
                  fullWidth
                  options={vendorList}
                  getOptionLabel={(option) => option.title}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Vendor / Company List"
                      variant="outlined"
                      margin="normal"
                    />
                  )}
                />
                <Autocomplete
                  fullWidth
                  options={vendorList}
                  getOptionLabel={(option) => option.title}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Product Name"
                      variant="outlined"
                      margin="normal"
                    />
                  )}
                />
                <Autocomplete
                  fullWidth
                  options={vendorList}
                  getOptionLabel={(option) => option.title}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Product Category"
                      variant="outlined"
                      margin="normal"
                    />
                  )}
                />
                <TextField
                  fullWidth
                  type="number"
                  label="HSN Code"
                  variant="outlined"
                  margin="normal"
                  placeholder="Enter HSN Code"
                  name="hsnCode"
                />
                <TextField
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  id="quantity"
                  name="quantity"
                  label="Quantity"
                  type="number"
                />
              </Grid>
              <Grid item lg={5}>
                <TextField
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  id="quantity"
                  name="quantity"
                  label="Rate"
                />
                <TextField
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  id="quantity"
                  name="quantity"
                  label="Taxable Value"
                />
                <FormControl component="fieldset">
                  <FormLabel component="legend">Tax</FormLabel>
                  <RadioGroup row aria-label="position" name="position">
                    <FormControlLabel
                      value="excluded"
                      control={<Radio color="primary" />}
                      label="Tax Excluded"
                      labelPlacement="end"
                    />
                    <FormControlLabel
                      value="included"
                      control={<Radio color="primary" />}
                      label="Tax Included"
                    />
                  </RadioGroup>
                </FormControl>
                <FormControl component="fieldset" margin="normal">
                  <FormLabel component="legend">Tax Percentage</FormLabel>
                  <RadioGroup row aria-label="position" name="position">
                    <FormControlLabel
                      value="5"
                      control={<Radio color="primary" />}
                      label="5"
                      labelPlacement="end"
                    />
                    <FormControlLabel
                      value="12"
                      control={<Radio color="primary" />}
                      label="12"
                    />
                    <FormControlLabel
                      value="18"
                      control={<Radio color="primary" />}
                      label="18"
                    />
                    <FormControlLabel
                      value="28"
                      control={<Radio color="primary" />}
                      label="28"
                    />
                  </RadioGroup>
                </FormControl>

                <Grid container lg={12} justifyContent="space-between">
                  <TextField
                    lg={6}
                    item
                    label="IGST"
                    variant="outlined"
                    margin="normal"
                    name="memberName"
                  />
                  <TextField
                    lg={6}
                    item
                    label="CGST + SGST"
                    variant="outlined"
                    margin="normal"
                    name="memberName"
                  />
                </Grid>
                <TextField
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  id="quantity"
                  name="quantity"
                  label="Total Value"
                />
                <TextField
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  id="quantity"
                  name="quantity"
                  label="Charges"
                />
                <TextField
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  id="quantity"
                  name="quantity"
                  label="Total Value in Words"
                />
                <TextField
                  fullWidth
                  label="Description"
                  placeholder="Enter Description"
                  multiline
                  rows={4}
                  variant="outlined"
                  name="description"
                />
              </Grid>
              <Grid container lg={12} justifyContent="center">
                <button className="btn btn-primary">Submit</button>
              </Grid>
            </Grid>
          </form>
        </TabPanel>
      </div>
    </>
  )
}
