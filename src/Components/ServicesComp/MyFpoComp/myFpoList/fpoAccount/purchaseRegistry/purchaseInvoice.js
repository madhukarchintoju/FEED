import React, { useState } from 'react'
import {
  TextField,
  Grid,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  FormControlLabel,
  MenuItem,
} from '@material-ui/core'
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined'
import Autocomplete from '@material-ui/lab/Autocomplete'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline'
const vendorList = [
  { title: 'Ramudu' },
  { title: 'Lakshman' },
  { title: 'Krishna' },
  { title: 'Arjun' },
  { title: 'Narayana' },
]
const taxList = [{ slab: 5 }, { slab: 12 }, { slab: 18 }, { slab: 28 }]

function PurchaseInvoice() {
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const [value, setValue] = React.useState(0)

  const [inputList, setInputList] = useState([
    {
      productCategory: '',
      productName: '',
      hsnCode: '',
      productCost: '',
      vendorName: '',
      address: '',
      invoiceDate: '',
      invoiceNumber: '',
      invoiceValue: '',
      taxPercent: '',
      igst: '',
      cgstsgst: '',
      discount: '',
      freightCharges: '',
      taxableValue: '',
      invoiceWords: '',
    },
  ])

  // handle input change
  const handleInputChange = (e, i) => {
    const { name, value } = e.target
    const list = [...inputList]
    list[i][name] = value
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
        productCategory: '',
        productName: '',
        hsnCode: '',
        productCost: '',
        vendorName: '',
        address: '',
        invoiceDate: '',
        invoiceNumber: '',
        invoiceValue: '',
        taxPercent: '',
        igst: '',
        cgstsgst: '',
        discount: '',
        freightCharges: '',
        taxableValue: '',
        invoiceWords: '',
      },
    ])
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(inputList)
  }

  return (
    <>
      <Grid container item lg={12}>
        <Grid item lg={12} className="d-flex justify-content-between">
          <Grid item lg={3}>
            <TextField
              fullWidth
              size="small"
              type="number"
              label="Invoice Number"
              variant="outlined"
              margin="normal"
              placeholder="Enter Invoice Number"
              // name="invoiceNumber"
              // value={setInputList.invoiceNumber}
              // onChange={(e) => { handleInputChange(e) }}
            />
          </Grid>
          <Grid item lg={3}>
            <TextField
              fullWidth
              type="date"
              size="small"
              variant="outlined"
              margin="normal"
              // name="invoiceDate"
              // label="Invoice Date"
              // value={setInputList.invoiceDate}
              // onChange={(e) => { handleInputChange(e) }}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
        </Grid>
        <Grid item lg={12} className="d-flex justify-content-between">
          <Grid item lg={5}>
            <Autocomplete
              fullWidth
              size="small"
              options={vendorList}
              getOptionLabel={(option) => option.title}
              renderInput={(params) => (
                <TextField
                  {...params}
                  margin="normal"
                  label="Vendor / Company List"
                  variant="outlined"
                  // name='vendorName'
                  // value={setInputList.vendorName}
                  // onChange={(e) => { handleInputChange(e) }}
                />
              )}
            />
          </Grid>
          <Grid item lg={5}>
            <TextField
              fullWidth
              size="small"
              margin="normal"
              label="Address"
              placeholder="Enter Address"
              multiline
              rows={3}
              variant="outlined"
              // name="address"
              // value={setInputList.address}
              // onChange={(e) => { handleInputChange(e) }}
            />
          </Grid>
        </Grid>
        {/* <Grid item lg={12} style={{ border: '1px solid grey' }}> */}
        <h5>Add Product Details</h5>
        <Grid
          style={{
            overflow: 'auto',
            border: '2px solid grey',
            borderRadius: '10px 10px',
            maxHeight: '400px',
            BoxShadow: '0px 0px 5px 0px rgba(0,0,0,0.2)',
            WebkitBoxShadow: '0px 0px 5px 0px rgba(0,0,0,0.2)',
            MozBoxShadow: '0px 0px 5px 0px rgba(0,0,0,0.2)',
          }}
        >
          <table className="table table-bordered purchaseTable" id="tab_logic">
            <thead
              style={{
                position: 'sticky',
                top: '0px',
                zIndex: '2',
                backgroundColor: '#f0f2f5',
              }}
            >
              <tr>
                <th>S.No </th>
                <th>Product Category</th>
                <th>Product Name</th>
                <th>HSN Code</th>
                <th>Product Cost</th>
                <th>Tax</th>
                <th>Tax Percentage</th>
                <th>IGST CGST+SGST</th>
                <th>Discount</th>
                <th>Freight Charges</th>
                <th>Total Invoice Value</th>
                <th>Total Invoice in Words</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {inputList.map((x, i) => {
                return (
                  <tr id="addr0" key={i}>
                    <td>{i + 1}</td>
                    <td>
                      <Autocomplete
                        style={{ width: 200 }}
                        size="small"
                        options={vendorList}
                        getOptionLabel={(option) => option.title}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            label="Product Category"
                            variant="outlined"
                            name="productCategory"
                            value={x.productCategory}
                            onChange={(e) => handleInputChange(e, i)}
                          />
                        )}
                      />
                    </td>
                    <td>
                      <Autocomplete
                        style={{ width: 200 }}
                        size="small"
                        options={vendorList}
                        getOptionLabel={(option) => option.title}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            label="Product Name"
                            variant="outlined"
                            name="productName"
                            value={x.productName}
                            onChange={(e) => handleInputChange(e, i)}
                          />
                        )}
                      />
                    </td>
                    <td>
                      <TextField
                        fullWidth
                        size="small"
                        type="number"
                        label="HSN Code"
                        variant="outlined"
                        placeholder="Enter HSN Code"
                        name="hsnCode"
                        value={x.hsnCode}
                        onChange={(e) => handleInputChange(e, i)}
                      />
                    </td>
                    <td>
                      <TextField
                        fullWidth
                        size="small"
                        type="number"
                        label="Product Cost"
                        variant="outlined"
                        placeholder="Enter Product Cost"
                        name="productCost"
                        value={x.productCost}
                        onChange={(e) => handleInputChange(e, i)}
                      />
                    </td>
                    <td>
                      <FormControl component="fieldset">
                        <RadioGroup aria-label="position" name="position">
                          <FormControlLabel
                            value="excluded"
                            control={<Radio color="primary" />}
                            label="Excluded"
                            labelPlacement="end"
                          />
                          <FormControlLabel
                            value="included"
                            control={<Radio color="primary" />}
                            label="Included"
                          />
                        </RadioGroup>
                      </FormControl>
                    </td>
                    <td>
                      <TextField
                        select
                        size="small"
                        label="Tax Percentage"
                        variant="outlined"
                        name="taxPercent"
                        value={x.taxPercent}
                        onChange={(e) => handleInputChange(e, i)}
                        style={{ width: 200 }}
                      >
                        <MenuItem value="5">5</MenuItem>
                        <MenuItem value="8">8</MenuItem>
                        <MenuItem value="12">12</MenuItem>
                        <MenuItem value="24">24</MenuItem>
                      </TextField>
                      {/* <FormControl component="fieldset" margin="normal">
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
                      </FormControl> */}
                    </td>
                    <td>
                      <Grid
                        container
                        item
                        lg={12}
                        justifyContent="space-between"
                      >
                        <TextField
                          lg={6}
                          item
                          variant="outlined"
                          size="small"
                          label="IGST"
                          name="igst"
                          value={x.igst}
                          onChange={(e) => handleInputChange(e, i)}
                        />
                        <TextField
                          lg={6}
                          item
                          size="small"
                          label="CGST + SGST"
                          variant="outlined"
                          margin="normal"
                          name="cgstsgst"
                          value={x.cgstsgst}
                          onChange={(e) => handleInputChange(e, i)}
                        />
                      </Grid>
                    </td>
                    <td>
                      <TextField
                        fullWidth
                        size="small"
                        type="number"
                        label="Discount"
                        variant="outlined"
                        placeholder="Enter Product Cost"
                        name="discount"
                        value={x.discount}
                        onChange={(e) => handleInputChange(e, i)}
                      />
                    </td>
                    <td>
                      <TextField
                        fullWidth
                        size="small"
                        type="number"
                        label="Freight charge"
                        variant="outlined"
                        placeholder="Enter Freight charge"
                        name="freightCharges"
                        value={x.freightCharges}
                        onChange={(e) => handleInputChange(e, i)}
                      />
                    </td>
                    <td>
                      <TextField
                        fullWidth
                        size="small"
                        type="number"
                        label="Total Invoice Value"
                        variant="outlined"
                        placeholder="Enter Total Invoice Value"
                        name="invoiceValue"
                        value={x.invoiceValue}
                        onChange={(e) => handleInputChange(e, i)}
                      />
                    </td>
                    <td>
                      <TextField
                        fullWidth
                        size="small"
                        label="Total Invoice Value in Words"
                        variant="outlined"
                        placeholder="Enter Total Invoice Value in Words"
                        name="invoiceWords"
                        value={x.invoiceWords}
                        onChange={(e) => handleInputChange(e, i)}
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
          container
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: '15px',
          }}
        >
          <button className="btn btn-secondary" onClick={handleAddClick}>
            <AddCircleOutlineIcon /> Another Field
          </button>
          <button
            className="btn btn-success text-center"
            type="submit"
            onClick={handleSubmit}
          >
            Save &amp; Print
          </button>
          {/* <button
              className="btn btn-danger"
              onClick={() => setNoOfRows(noOfRows - 1)}
            >
              Delete Last Row
            </button> */}
        </Grid>
        {/* </Grid> */}
      </Grid>
    </>
  )
}

export default PurchaseInvoice
