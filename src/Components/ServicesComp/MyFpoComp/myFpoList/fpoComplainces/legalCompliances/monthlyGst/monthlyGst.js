import './monthlyGst.css'
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {
  Grid,
  Button,
  Icon,
  Avatar,
  makeStyles,
  TextField,
} from '@material-ui/core'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined'

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

function MonthlyGst() {
  const classes = useStyles()
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const [value, setValue] = React.useState(0)

  const [inputList, setInputList] = useState([
    {
      vendorName: '',
      gstSupplier: '',
      invoiceNumber: '',
      invoiceType: '',
      invoiceDate: '',
      invoiceValue: '',
      supplyPlace: '',
      supplyAttractReverseCharges: '',
      rate: '',
      taxableValue: '',
      integratedTax: '',
      centralTax: '',
      stateTax: '',
      cess: '',
    },
  ])

  // handle input change
  const handleInputChange = (e, index) => {
    const { name, value } = e.target
    const list = [...inputList]
    list[index][name] = value
    setInputList(list)
  }

  // handle click event of the Remove button
  const handleRemoveClick = (index) => {
    const list = [...inputList]
    list.splice(index, 1)
    setInputList(list)
  }

  const handleAddClick = () => {
    setInputList([
      ...inputList,
      {
        vendorName: '',
        gstSupplier: '',
        invoiceNumber: '',
        invoiceType: '',
        invoiceDate: '',
        invoiceValue: '',
        supplyPlace: '',
        supplyAttractReverseCharges: '',
        rate: '',
        taxableValue: '',
        integratedTax: '',
        centralTax: '',
        stateTax: '',
        cess: '',
      },
    ])
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(inputList)
  }

  return (
    <>
      <div className={classes.root}>
        <Grid container justifyContent="center">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="scrollable"
            scrollButtons="auto"
          >
            <Tab label="Purchase GST" {...a11yProps(0)} />
            <Tab label="Sales GST" {...a11yProps(1)} />
          </Tabs>
        </Grid>
        <TabPanel value={value} index={0}>
          <Grid
            style={{
              overflow: 'auto',
              border: '2px solid grey',
              borderRadius: '6px 6px',
              height: '350px',
            }}
          >
            <table
              className="table table-bordered purchaseTable"
              id="tab_logic"
            >
              <thead>
                <tr
                  style={{
                    backgroundColor: '#ebebeb',
                    boxShadow: '0px 0px 5px 1px',
                  }}
                >
                  <th>S.No </th>
                  <th>Name of Vendor</th>
                  <th>GSTIN of supplier</th>
                  <th>Invoice number</th>
                  <th>Invoice type</th>
                  <th>Invoice Date</th>
                  <th>Invoice Value</th>
                  <th>Place of supply</th>
                  <th>Supply Attract Reverse Charge</th>
                  <th>Rate (%)</th>
                  <th>Taxable Value</th>
                  <th>Integrated Tax</th>
                  <th>Central Tax</th>
                  <th>State/UT tax</th>
                  <th>Cess</th>
                </tr>
              </thead>
              <tbody>
                {inputList.map((x, i) => {
                  return (
                    <tr id="addr0" key={i}>
                      <td>{i + 1}</td>
                      <td>
                        <TextField
                          size="small"
                          variant="outlined"
                          name="vendorName"
                          placeholder="Name of Vendor"
                          value={x.vendorName}
                          onChange={(e) => handleInputChange(e, i)}
                        />
                      </td>
                      <td>
                        <TextField
                          size="small"
                          variant="outlined"
                          name="gstSupplier"
                          value={x.gstSupplier}
                          onChange={(e) => handleInputChange(e, i)}
                          placeholder="GSTIN of supplier"
                        />
                      </td>
                      <td>
                        <TextField
                          size="small"
                          variant="outlined"
                          name="invoiceNumber"
                          value={x.invoiceNumber}
                          onChange={(e) => handleInputChange(e, i)}
                          placeholder="Invoice number"
                        />
                      </td>
                      <td>
                        <TextField
                          size="small"
                          variant="outlined"
                          name="invoiceType"
                          value={x.invoiceType}
                          onChange={(e) => handleInputChange(e, i)}
                          placeholder="Invoice type"
                        />
                      </td>
                      <td>
                        <TextField
                          type="date"
                          size="small"
                          name="invoiceDate"
                          value={x.invoiceDate}
                          onChange={(e) => handleInputChange(e, i)}
                          variant="outlined"
                          placeholder="Invoice Date"
                        />
                      </td>
                      <td>
                        <TextField
                          size="small"
                          name="invoiceValue"
                          value={x.invoiceValue}
                          onChange={(e) => handleInputChange(e, i)}
                          variant="outlined"
                          placeholder="Invoice Value"
                        />
                      </td>
                      <td>
                        <TextField
                          size="small"
                          variant="outlined"
                          name="supplyPlace"
                          value={x.supplyPlace}
                          onChange={(e) => handleInputChange(e, i)}
                          placeholder="Place of supply"
                        />
                      </td>
                      <td>
                        <TextField
                          size="small"
                          variant="outlined"
                          name="supplyAttractReverseCharges"
                          value={x.supplyAttractReverseCharges}
                          onChange={(e) => handleInputChange(e, i)}
                          placeholder="Supply Attract Reverse Charge"
                        />
                      </td>
                      <td>
                        <TextField
                          size="small"
                          variant="outlined"
                          name="rate"
                          value={x.rate}
                          onChange={(e) => handleInputChange(e, i)}
                          placeholder="Rate (%)"
                        />
                      </td>
                      <td>
                        <TextField
                          size="small"
                          variant="outlined"
                          name="taxableValue"
                          value={x.taxableValue}
                          onChange={(e) => handleInputChange(e, i)}
                          placeholder="Taxable Value"
                        />
                      </td>
                      <td>
                        <TextField
                          size="small"
                          variant="outlined"
                          name="integratedTax"
                          value={x.integratedTax}
                          onChange={(e) => handleInputChange(e, i)}
                          placeholder="Integrated Tax"
                        />
                      </td>
                      <td>
                        <TextField
                          size="small"
                          variant="outlined"
                          name="centralTax"
                          value={x.centralTax}
                          onChange={(e) => handleInputChange(e, i)}
                          placeholder="Central Tax"
                        />
                      </td>
                      <td>
                        <TextField
                          size="small"
                          variant="outlined"
                          name="stateTax"
                          value={x.stateTax}
                          onChange={(e) => handleInputChange(e, i)}
                          placeholder="State/UT tax"
                        />
                      </td>
                      <td>
                        <TextField
                          size="small"
                          variant="outlined"
                          name="cess"
                          value={x.cess}
                          onChange={(e) => handleInputChange(e, i)}
                          placeholder="Cess"
                        />
                      </td>
                      <td>
                        {inputList.length !== 1 && (
                          <button
                            className="btn btn-outline-danger btn-sm"
                            onClick={() => handleRemoveClick(i)}
                          >
                            <DeleteOutlinedIcon />
                          </button>
                        )}
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </Grid>
          <Grid
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginTop: '15px',
            }}
          >
            <button className="btn btn-primary" onClick={handleAddClick}>
              Add Another Field
            </button>
            <button
              className="btn btn-success text-center"
              type="submit"
              onClick={handleSubmit}
            >
              Submit
            </button>
            {/* <button
              className="btn btn-danger"
              onClick={() => setNoOfRows(noOfRows - 1)}
            >
              Delete Last Row
            </button> */}
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={1}>
          Sales GST
        </TabPanel>
      </div>
    </>
  )
}

export default MonthlyGst
