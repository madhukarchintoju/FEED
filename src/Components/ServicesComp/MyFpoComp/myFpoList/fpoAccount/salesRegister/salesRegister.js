import React from 'react'
import { useFormik } from 'formik'
import PropTypes from 'prop-types'
import {
  AppBar,
  makeStyles,
  Grid,
  Button,
  TextField,
  Select,
  MenuItem,
  FormControl,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormLabel,
} from '@material-ui/core'
// import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel'
import InputAdornment from '@material-ui/core/InputAdornment'
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
        <AppBar position="static" color="default" style={{ boxShadow: 'none' }}>
          {/* <Grid position="static"> */}
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="simple tabs example"
            centered
          >
            <Tab label="Quotation / Estimation" {...a11yProps(0)} />
            <Tab label="Sales Invoice / Bill" {...a11yProps(1)} />
            <Tab label="Sales Returns / Credit Note" {...a11yProps(2)} />
            <Tab label="Delivery Challan" {...a11yProps(3)} />
          </Tabs>
        </AppBar>
      </Grid>
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
                fullWidth
                id="productName"
                name="productName"
                label="Product Name"
                variant="outlined"
                className={classes.textField}
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
            </Grid>
            <Grid lg={5}>
              <TextField
                variant="outlined"
                fullWidth
                type="number"
                id="value"
                name="value"
                label="Total Value"
                className={classes.textField}
              />
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
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">Units</InputAdornment>
                  ),
                }}
                className={classes.textField}
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
                type="number"
                id="quantity"
                name="quantity"
                label="Rate"
                className={classes.textField}
              />
              <TextField
                variant="outlined"
                fullWidth
                id="taxableValue"
                name="taxableValue"
                label="Taxable Value"
                className={classes.textField}
              />
            </Grid>
            <Grid lg={5}>
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
                fullWidth
                id="originalInvoiceNumber"
                name="originalInvoiceNumber"
                label="Original Invoice Number"
                variant="outlined"
                className={classes.textField}
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
                id="rate"
                name="rate"
                label="Rate"
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
            </Grid>
            <Grid lg={5}>
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
                id="totalValue"
                name="totalValue"
                label="Total Value"
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
                variant="outlined"
                fullWidth
                id="totalValueWords"
                name="totalValueWords"
                label="Total Value  In Words"
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
      {/* </Grid > */}
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
