// import React from 'react';
// import { makeStyles, Grid, Button, Icon, Avatar, Tabs } from '@material-ui/core'
// import AppBar from '@material-ui/core/AppBar';
// import Tab from '@material-ui/core/Tab';

// export default function SalesRegister() {
//   const useStyles = makeStyles(theme => ({

//   }));
//   const classes = useStyles();
//   const [value, setValue] = React.useState('1');

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };
//   return (
//     <>
//       <Grid>
//         <AppBar position="static">
//           <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
//             <Tab label="Item One" value="1" />
//             <Tab label="Item Two" value="2" />
//             <Tab label="Item Three" value="3" />
//           </Tabs>
//         </AppBar>
//         <Grid value="1">Item One</Grid>
//         <Grid value="2">Item Two</Grid>
//         <Grid value="3">Item Three</Grid>
//       </Grid>
//     </>
//   )
// }

import React from 'react'
import { useFormik } from 'formik'
import PropTypes from 'prop-types'
import {
  makeStyles,
  Grid,
  Button,
  Icon,
  Avatar,
  TextField,
  Select,
  MenuItem,
  FormControl,
  TextareaAutosize,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormLabel,
} from '@material-ui/core'
// import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import InputAdornment from '@material-ui/core/InputAdornment'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import { red } from '@material-ui/core/colors'

function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
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
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  textField: {
    margin: '5px',
  },
  tabCard: {
    margin: '0.5em',
    borderRadius: '0px 0px 20px 20px',
    boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)',
    webkitBoxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)',
    mozBoxShadow: '0px 0px 5px 0px rgba(0, 0, 0, 0.75)',
  },
  MuiSelected: {
    backgroundColor: 'green !important',
  },
}))

export default function SalesRegister() {
  const classes = useStyles()
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <>
      <Grid className={classes.root}>
        {/* <Grid position="static"> */}
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
          centered
        >
          <Tab
            label="Quotation / Estimation"
            {...a11yProps(0)}
            className={classes.tabCard}
          />
          <Tab
            label="Sales Invoice / Bill"
            {...a11yProps(1)}
            className={classes.tabCard}
          />
          <Tab
            label="Sales Returns / Credit Note"
            {...a11yProps(2)}
            className={classes.tabCard}
          />
          <Tab
            label="Delivery Challan"
            {...a11yProps(3)}
            className={classes.tabCard}
          />
        </Tabs>
        {/* </Grid> */}
        <TabPanel value={value} index={0}>
          <form>
            <Grid container direction="row" justify="space-evenly">
              <Grid lg={5}>
                <TextField
                  fullWidth
                  id="quotationNum"
                  name="quotationNum"
                  label="Quotation Number"
                  variant="outlined"
                  className={classes.textField}
                />
                <TextField
                  fullWidth
                  id="customerDetails"
                  name="customerDetails"
                  label="Customer Details"
                  variant="outlined"
                  className={classes.textField}
                />
                <FormControl
                  variant="outlined"
                  className={classes.textField}
                  fullWidth
                >
                  <InputLabel id="demo-simple-select-helper-label">
                    Product Category
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    // value={age}
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>Fruits</MenuItem>
                    <MenuItem value={20}>Vegetables</MenuItem>
                    <MenuItem value={30}>Dairy</MenuItem>
                  </Select>
                </FormControl>
                <TextField
                  fullWidth
                  id="productName"
                  name="productName"
                  label="Product Name"
                  variant="outlined"
                  className={classes.textField}
                />
                <TextField
                  variant="outlined"
                  fullWidth
                  type="number"
                  id="quantity"
                  name="quantity"
                  label="Quantity"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">Units</InputAdornment>
                    ),
                  }}
                  className={classes.textField}
                />
                <TextField
                  fullWidth
                  id="tanDetails"
                  name="tanDetails"
                  label="Tan Details"
                  variant="outlined"
                  className={classes.textField}
                />
                <TextField
                  variant="outlined"
                  fullWidth
                  type="number"
                  id="value"
                  name="value"
                  label="Total Value"
                  className={classes.textField}
                />
              </Grid>
              <Grid lg={5}>
                <TextField
                  variant="outlined"
                  fullWidth
                  id="dateTime"
                  label="Date & Time"
                  type="date"
                  defaultValue=""
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <TextField
                  fullWidth
                  id="deliveryTo"
                  name="deliveryTo"
                  label="Delivery To"
                  variant="outlined"
                  className={classes.textField}
                />
                <TextField
                  fullWidth
                  id="deliveryAddress"
                  name="deliveryAddress"
                  label="Delivery Address"
                  variant="outlined"
                  className={classes.textField}
                />
                <TextField
                  variant="outlined"
                  fullWidth
                  id="validUpto"
                  label="valid Upto"
                  type="date"
                  defaultValue=""
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <TextField
                  fullWidth
                  id="shippingCharges"
                  name="shippingCharges"
                  label="Shipping Charges"
                  variant="outlined"
                  className={classes.textField}
                />
                <TextField
                  fullWidth
                  id="rate"
                  name="rate"
                  label="Rate"
                  variant="outlined"
                  className={classes.textField}
                />
                <TextField
                  fullWidth
                  id="total"
                  name="total"
                  label="Total"
                  variant="outlined"
                  className={classes.textField}
                />
              </Grid>
            </Grid>
          </form>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <form>
            <Grid container direction="row" justify="space-evenly">
              <Grid lg={5}>
                <TextField
                  fullWidth
                  id="invoiceNum"
                  name="invoiceNum"
                  label="Invoice Number"
                  variant="outlined"
                  className={classes.textField}
                />
                <TextField
                  fullWidth
                  id="companyName"
                  name="companyName"
                  label="Company Name"
                  variant="outlined"
                  className={classes.textField}
                />
                <FormControl
                  variant="outlined"
                  className={classes.textField}
                  fullWidth
                >
                  <InputLabel id="demo-simple-select-helper-label">
                    Product Category
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    // value={age}
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>Fruits</MenuItem>
                    <MenuItem value={20}>Vegetables</MenuItem>
                    <MenuItem value={30}>Dairy</MenuItem>
                  </Select>
                </FormControl>
                <TextField
                  variant="outlined"
                  fullWidth
                  type="number"
                  id="hsnCode"
                  name="hsnCode"
                  label="HSN Code"
                  className={classes.textField}
                />
                <TextField
                  variant="outlined"
                  fullWidth
                  type="number"
                  id="quantity"
                  name="quantity"
                  label="Quantity"
                  className={classes.textField}
                />
                <TextField
                  variant="outlined"
                  fullWidth
                  id="taxableValue"
                  name="taxableValue"
                  label="Taxable Value"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">Lt / Kg</InputAdornment>
                    ),
                  }}
                  className={classes.textField}
                />
                <TextField
                  fullWidth
                  id="discount"
                  name="discount"
                  label="Discount"
                  variant="outlined"
                  className={classes.textField}
                />
                <TextField
                  fullWidth
                  id="roundoff"
                  name="roundoff"
                  label="Round off"
                  variant="outlined"
                  className={classes.textField}
                />
              </Grid>
              <Grid lg={5}>
                <TextField
                  variant="outlined"
                  fullWidth
                  id="invoiceDate"
                  label="Invoice Date"
                  type="date"
                  defaultValue=""
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <TextField
                  fullWidth
                  id="openStockDisplay"
                  name="openStockDisplay"
                  label="Open Stock Display"
                  variant="outlined"
                  className={classes.textField}
                />
                <TextField
                  fullWidth
                  id="productName"
                  name="productName"
                  label="Product Name"
                  variant="outlined"
                  className={classes.textField}
                />
                <TextField
                  fullWidth
                  id="productCost"
                  name="productCost"
                  label="Product Cost"
                  variant="outlined"
                  className={classes.textField}
                />
                <FormControl
                  variant="outlined"
                  className={classes.textField}
                  fullWidth
                >
                  <InputLabel id="demo-simple-select-helper-label">
                    GST Rate
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    // value={age}
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>10</MenuItem>
                    <MenuItem value={20}>20</MenuItem>
                    <MenuItem value={30}>30</MenuItem>
                  </Select>
                </FormControl>
                <FormControl component="fieldset" className={classes.textField}>
                  <FormLabel component="legend">GST Type</FormLabel>
                  <RadioGroup row aria-label="position" name="position">
                    <FormControlLabel
                      value="igst"
                      control={<Radio color="primary" />}
                      label="IGST"
                      // labelPlacement="end"
                    />
                    <FormControlLabel
                      value="cgst"
                      control={<Radio color="primary" />}
                      label="CGST"
                    />
                    <FormControlLabel
                      value="sgst"
                      control={<Radio color="primary" />}
                      label="SGST"
                    />
                  </RadioGroup>
                </FormControl>
                <TextField
                  fullWidth
                  id="totalInvoiceValue"
                  name="totalInvoiceValue"
                  label="Total Invoice Value"
                  variant="outlined"
                  className={classes.textField}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <small>(including shipping charges)</small>
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  fullWidth
                  id="totalamountWords"
                  name="totalamountWords"
                  label="Total Amount Words"
                  variant="outlined"
                  className={classes.textField}
                />
              </Grid>
            </Grid>
          </form>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <form>
            <Grid container direction="row" justify="space-evenly">
              <Grid lg={5}>
                <TextField
                  fullWidth
                  id="creditNoteNumber"
                  name="creditNoteNumber"
                  label="Credit Note Number"
                  variant="outlined"
                  className={classes.textField}
                />
                <TextField
                  fullWidth
                  id="originalInvoiceNumber"
                  name="originalInvoiceNumber"
                  label="Original Invoice Number"
                  variant="outlined"
                  className={classes.textField}
                />
                <TextField
                  fullWidth
                  id="customerCompanyName"
                  name="customerCompanyName"
                  label="Customer / Company Name"
                  variant="outlined"
                  className={classes.textField}
                />
                <FormControl
                  variant="outlined"
                  className={classes.textField}
                  fullWidth
                >
                  <InputLabel id="demo-simple-select-helper-label">
                    Select Category
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    // value={age}
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>Fruits</MenuItem>
                    <MenuItem value={20}>Vegetables</MenuItem>
                    <MenuItem value={30}>Dairy</MenuItem>
                  </Select>
                </FormControl>
                <TextField
                  variant="outlined"
                  fullWidth
                  type="number"
                  id="hsnCode"
                  name="hsnCode"
                  label="HSN Code"
                  className={classes.textField}
                />
                <TextField
                  variant="outlined"
                  fullWidth
                  type="number"
                  id="rate"
                  name="rate"
                  label="Rate"
                  className={classes.textField}
                />
                <TextField
                  fullWidth
                  id="totalValue"
                  name="totalValue"
                  label="Total Value"
                  variant="outlined"
                  className={classes.textField}
                />
                <TextField
                  variant="outlined"
                  fullWidth
                  id="totalValueWords"
                  name="totalValueWords"
                  label="Total Value  In Words"
                  className={classes.textField}
                />
              </Grid>
              <Grid lg={5}>
                <TextField
                  variant="outlined"
                  fullWidth
                  id="creditnotedate"
                  name="creditnotedate"
                  label="Credit Note Date"
                  type="date"
                  defaultValue=""
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <TextField
                  variant="outlined"
                  fullWidth
                  id="originalInvoiceDate"
                  name="originalInvoiceDate"
                  label="Oiginal Invoice Date"
                  type="date"
                  defaultValue=""
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <TextField
                  fullWidth
                  id="productName"
                  name="productName"
                  label="Product Name"
                  variant="outlined"
                  className={classes.textField}
                />
                <FormControl
                  variant="outlined"
                  className={classes.textField}
                  fullWidth
                >
                  <InputLabel id="demo-simple-select-helper-label">
                    Select Product
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    // value={age}
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>Fruits</MenuItem>
                    <MenuItem value={20}>Vegetables</MenuItem>
                    <MenuItem value={30}>Dairy</MenuItem>
                  </Select>
                </FormControl>
                <TextField
                  fullWidth
                  id="quantity"
                  name="quantity"
                  label="Quantity"
                  variant="outlined"
                  className={classes.textField}
                />
                <TextField
                  fullWidth
                  id="taxableValue"
                  name="taxableValue"
                  label="Taxable Value"
                  variant="outlined"
                  className={classes.textField}
                />
                <TextField
                  fullWidth
                  id="charges"
                  name="charges"
                  label="Charges"
                  variant="outlined"
                  className={classes.textField}
                />
                <TextField
                  fullWidth
                  id="narrations"
                  name="narrations"
                  label="Narrations"
                  variant="outlined"
                  className={classes.textField}
                />
              </Grid>
            </Grid>
          </form>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <form>
            <Grid container direction="row" justify="space-evenly">
              <Grid lg={5}>
                <TextField
                  variant="outlined"
                  fullWidth
                  id="deliveryChallanDate"
                  name="deliveryChallanDate"
                  label="Delivery Challan Date"
                  type="date"
                  defaultValue=""
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <TextField
                  fullWidth
                  id="customer"
                  name="customer"
                  label="Customer"
                  variant="outlined"
                  className={classes.textField}
                />
                <TextField
                  fullWidth
                  id="quantity"
                  name="quantity"
                  label="Quantity"
                  variant="outlined"
                  className={classes.textField}
                />
                <TextField
                  variant="outlined"
                  fullWidth
                  type="number"
                  id="units"
                  name="units"
                  label="Units"
                  className={classes.textField}
                />
              </Grid>
              <Grid lg={5}>
                <TextField
                  fullWidth
                  id="challanType"
                  name="challanType"
                  label="Challan Type"
                  variant="outlined"
                  className={classes.textField}
                />
                <TextField
                  fullWidth
                  id="item"
                  name="item"
                  label="Item"
                  variant="outlined"
                  className={classes.textField}
                />
                <TextField
                  fullWidth
                  id="rate"
                  name="rate"
                  label="Rate"
                  variant="outlined"
                  className={classes.textField}
                />
                <FormControl
                  variant="outlined"
                  className={classes.textField}
                  fullWidth
                >
                  <InputLabel id="demo-simple-select-helper-label">
                    Select Product
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    // value={age}
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>Fruits</MenuItem>
                    <MenuItem value={20}>Vegetables</MenuItem>
                    <MenuItem value={30}>Dairy</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </form>
        </TabPanel>
      </Grid>
      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="center"
        xs={12}
      >
        <Button item color="primary" variant="contained">
          Save
        </Button>
        <Button item color="primary" variant="contained">
          Print
        </Button>
        <Button
          item
          color="primary"
          variant="contained"
          className={classes.cancelButton}
        >
          Cancel
        </Button>
      </Grid>
    </>
  )
}
