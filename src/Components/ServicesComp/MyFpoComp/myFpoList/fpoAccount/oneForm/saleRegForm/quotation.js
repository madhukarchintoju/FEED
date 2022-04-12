import { TextField } from '@material-ui/core'
import React from 'react'

function Quotation() {
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div className="col-lg-4">
          <TextField
            fullWidth
            type="date"
            variant="outlined"
            margin="normal"
            size="small"
            label="Quotation Date"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>
        <div className="col-lg-4">
          <TextField
            fullWidth
            size="small"
            label="Quotation Number"
            variant="outlined"
            margin="normal"
            placeholder="Enter Quotation Number"
            name="quotation"
          />
        </div>
      </div>
      <div className="fluid-container row m-0">
        <div className="col-lg-4">
          <TextField
            fullWidth
            size="small"
            label="Customer Name"
            variant="outlined"
            margin="normal"
            placeholder="Enter Customer Name"
            name="quotation"
          />
        </div>
        <div className="col-lg-4">
          <TextField
            fullWidth
            size="small"
            label="Customer phone number"
            variant="outlined"
            margin="normal"
            placeholder="Enter Customer phone number"
            name="quotation"
          />
        </div>
        <div className="col-lg-4">
          <TextField
            fullWidth
            size="small"
            label="Product Name"
            variant="outlined"
            margin="normal"
            placeholder="Enter Product Name"
            name="quotation"
          />
        </div>
        <div className="col-lg-4">
          <TextField
            fullWidth
            size="small"
            label="Product Quantity"
            variant="outlined"
            margin="normal"
            placeholder="Enter Product Quantity"
            name="quotation"
          />
        </div>
        <div className="col-lg-4">
          <TextField
            fullWidth
            size="small"
            label="Rate per Quantity"
            variant="outlined"
            margin="normal"
            placeholder="Enter Rate per Quantity"
            name="quotation"
          />
        </div>
        <div className="col-lg-4">
          <TextField
            fullWidth
            size="small"
            label="Amount"
            variant="outlined"
            margin="normal"
            placeholder="Amount"
            name="amt"
          />
        </div>
      </div>
      <div>
        <button className="btn btn-primary mt-3 mb-3">Submit</button>
      </div>
    </>
  )
}

export default Quotation
