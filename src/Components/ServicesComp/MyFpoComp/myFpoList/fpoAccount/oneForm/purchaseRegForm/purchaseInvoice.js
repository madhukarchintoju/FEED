import React, { useState } from 'react'
import {
  MenuItem,
  TextField,
  FormControl,
  InputAdornment,
  Input,
  Radio,
  FormLabel,
  FormControlLabel,
  RadioGroup,
} from '@material-ui/core'

function PurchaseInvoice() {
  const [selected, setSelected] = useState('')
  const changeHandler = (e) => {
    setSelected(e.target.value)
  }
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div className="col-lg-4">
          <TextField
            fullWidth
            size="small"
            variant="outlined"
            margin="normal"
            name="dob"
            id="dateTime"
            label="Invoice Date"
            type="date"
            defaultValue=""
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>
        <div className="col-lg-4">
          <TextField
            fullWidth
            size="small"
            label="Invoice Number"
            variant="outlined"
            margin="normal"
            placeholder="Enter Invoice Number"
            name="invoicedate"
          />
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div className="col-lg-4">
          <TextField
            fullWidth
            size="small"
            label="Vendor Name"
            variant="outlined"
            margin="normal"
            placeholder="Enter Vendor Name"
            name="vendorname"
          />
        </div>
        <div className="col-lg-8">
          <TextField
            fullWidth
            size="small"
            label="Vendor Address"
            variant="outlined"
            margin="normal"
            placeholder="Enter Vendor Address"
            name="vendoraddress"
          />
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div className="col-lg-4">
          <TextField
            select
            fullWidth
            size="small"
            label="Product Category"
            variant="outlined"
            margin="normal"
            name="invoicedate"
          >
            <MenuItem value="fruits">Fruits</MenuItem>
            <MenuItem value="vegetables">Vegetable</MenuItem>
            <MenuItem value="spices">Spices</MenuItem>
          </TextField>
        </div>
        <div className="col-lg-4">
          <TextField
            fullWidth
            size="small"
            label="Product Name"
            variant="outlined"
            margin="normal"
            placeholder="Enter Product Name"
            name="productname"
          />
        </div>
        <div className="col-lg-4">
          <TextField
            fullWidth
            size="small"
            label="HSN Code"
            variant="outlined"
            margin="normal"
            placeholder="Enter HSN Code"
            name="hsncode"
          />
        </div>
      </div>
      <div
        className="fluid-container row m-0"
        style={{ justifyContent: 'space-between' }}
      >
        <div
          className="col-lg-4"
          style={{ display: 'flex', justifyContent: 'space-between' }}
        >
          <div className="col-lg-6">
            <TextField
              fullWidth
              variant="outlined"
              margin="normal"
              size="small"
              label="Quantity"
            />
          </div>
          <div className="col-lg-6">
            <TextField
              select
              fullWidth
              size="small"
              margin="normal"
              label="units"
              variant="outlined"
            >
              <MenuItem value="kg">kg</MenuItem>
              <MenuItem value="qun">Quintal</MenuItem>
              <MenuItem value="ton">Ton</MenuItem>
            </TextField>
          </div>
        </div>
        <div className="col-lg-4">
          <TextField
            fullWidth
            margin="normal"
            size="small"
            variant="outlined"
            label="Rate per unit"
            placeholder="Enter Rate per unit"
            id="outlined-start-adornment"
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">&#8377; / unit</InputAdornment>
              ),
            }}
          />
        </div>
        <div className="col-lg-4">
          <TextField
            fullWidth
            label="Quantity Cost"
            variant="outlined"
            margin="normal"
            size="small"
            placeholder="Enter Quantity Cost"
          />
        </div>
        <div className="col-lg-4">
          <TextField
            fullWidth
            margin="normal"
            size="small"
            variant="outlined"
            label="Discout Percentage"
            id="outlined-start-adornment"
            InputProps={{
              endAdornment: <InputAdornment position="start">%</InputAdornment>,
            }}
          />
        </div>
        <div className="col-lg-4">
          <TextField
            fullWidth
            label="Discout value"
            variant="outlined"
            margin="normal"
            size="small"
            placeholder="Enter Discount"
          />
        </div>
        <div className="col-lg-4">
          <h6>Tax</h6>
          <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
            <div>
              <input
                type="radio"
                name="taxinp"
                label="Excluded"
                value="excluded"
                id="excluded"
                checked={selected === 'excluded'}
                onChange={changeHandler}
                style={{
                  height: '20px',
                  width: '20px',
                  verticalAlign: 'middle',
                  margin: '0px 5px',
                }}
              />
              <label for="excluded">Excluded</label>
            </div>
            <div>
              <input
                type="radio"
                name="taxinp"
                label="Included"
                value="included"
                id="included"
                checked={selected === 'included'}
                onChange={changeHandler}
                style={{
                  height: '20px',
                  width: '20px',
                  verticalAlign: 'middle',
                  margin: '0px 5px',
                }}
              />
              <label for="included">Included</label>
            </div>
          </div>
        </div>
        {selected === 'included' ? (
          <div className="col-lg-4">
            <TextField
              select
              fullWidth
              label="Select Tax percentage"
              variant="outlined"
              margin="normal"
              size="small"
            >
              <MenuItem value="5">5</MenuItem>
              <MenuItem value="12">12</MenuItem>
              <MenuItem value="18">18</MenuItem>
              <MenuItem value="28">28</MenuItem>
            </TextField>
          </div>
        ) : (
          ''
        )}
        <div className="col-lg-4">
          <TextField
            fullWidth
            label="IGST"
            variant="outlined"
            margin="normal"
            size="small"
            placeholder="Enter IGST"
          />
        </div>
        <div className="col-lg-4">
          <TextField
            fullWidth
            label="CGST + SGST"
            variant="outlined"
            margin="normal"
            size="small"
            placeholder="Enter CGST + SGST"
          />
        </div>
        <div className="col-lg-4">
          <TextField
            fullWidth
            label="Amount"
            variant="outlined"
            margin="normal"
            size="small"
          />
        </div>
        <div className="col-lg-4">
          <TextField
            fullWidth
            label="Other Charges"
            variant="outlined"
            margin="normal"
            size="small"
            placeholder="Enter other charges if any"
          />
        </div>
        <div className="col-lg-4">
          <TextField
            fullWidth
            label="Net Payable Amount"
            variant="outlined"
            margin="normal"
            size="small"
          />
        </div>
      </div>
      <div>
        <button className="btn btn-primary mt-3 mb-3">Submit</button>
      </div>
    </>
  )
}

export default PurchaseInvoice
