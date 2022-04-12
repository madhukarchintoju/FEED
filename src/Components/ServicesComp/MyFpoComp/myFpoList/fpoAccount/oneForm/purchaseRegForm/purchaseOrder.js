import { Grid, MenuItem, TextField } from '@material-ui/core'
import React from 'react'

function PurchaseOrder() {
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
            label="Order Date"
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
            label="Order Number"
            variant="outlined"
            margin="normal"
            placeholder="Enter Order Number"
            name="companyName"
          />
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div className="col-lg-4">
          <TextField
            fullWidth
            size="small"
            label="Seller / Person Name"
            variant="outlined"
            margin="normal"
            placeholder="Enter Seller / Person Name"
            name="sellername"
          />
        </div>
        <div className="col-lg-4">
          <TextField
            fullWidth
            size="small"
            label="Consignor Name"
            variant="outlined"
            margin="normal"
            placeholder="Consignor Name Name"
            name="consignorname"
          />
        </div>
        <div className="col-lg-4">
          <TextField
            fullWidth
            size="small"
            label="Place of Supply"
            variant="outlined"
            margin="normal"
            placeholder="Enter Place of Supply"
            name="supplyplacename"
          />
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div className="col-lg-4">
          <TextField
            select
            fullWidth
            size="small"
            label="Payment method"
            variant="outlined"
            margin="normal"
            placeholder="Select Payment method"
            name="paymentmethod"
          >
            <MenuItem value="banktransfer">Bank Transfer</MenuItem>
            <MenuItem value="dd">DD / Cheque</MenuItem>
            <MenuItem value="cash">Cash</MenuItem>
            <MenuItem value="upi">UPI</MenuItem>
          </TextField>
        </div>
        <div className="col-lg-4">
          <TextField
            fullWidth
            size="small"
            label="Estimated Due Days"
            variant="outlined"
            margin="normal"
            placeholder="Enter Estimated Due Days"
            name="estimatedduedays"
          />
        </div>
        <div className="col-lg-4">
          <TextField
            fullWidth
            size="small"
            variant="outlined"
            margin="normal"
            name="due"
            id="dateTime"
            label="Estimated Due Date"
            type="date"
            defaultValue=""
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
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
        <div className="col-lg-4">
          <TextField
            fullWidth
            size="small"
            label="Quantity"
            variant="outlined"
            margin="normal"
            placeholder="Enter Quantity"
            name="hsncode"
          />
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div className="col-lg-4">
          <TextField
            fullWidth
            size="small"
            label="Rate per unit"
            variant="outlined"
            margin="normal"
            placeholder="Enter Rate per unit"
            name="rate"
          />
        </div>
        <div className="col-lg-4">
          <TextField
            fullWidth
            size="small"
            label="Total Amount"
            variant="outlined"
            margin="normal"
            placeholder="Enter Total Amount"
            name="totalamt"
          />
        </div>
      </div>
      <div>
        <div className="col-lg-12">
          <TextField
            fullWidth
            margin="normal"
            id="outlined-multiline-static"
            label="Requirement Description / Narrations"
            multiline
            rows={4}
            // defaultValue="Default Value"
            variant="outlined"
          />
        </div>
      </div>
      <div>
        <button className="btn btn-primary mt-3 mb-3">Submit</button>
      </div>
    </>
  )
}

export default PurchaseOrder
