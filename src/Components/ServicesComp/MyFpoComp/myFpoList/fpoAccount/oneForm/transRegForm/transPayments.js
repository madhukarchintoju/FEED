import { TextField } from '@material-ui/core'
import React from 'react'

function TransPayments() {
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
            label="Transaction Date"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>
        <div className="col-lg-4">
          <TextField
            fullWidth
            size="small"
            label="Number"
            variant="outlined"
            margin="normal"
            placeholder="Enter Number"
            name="quotation"
          />
        </div>
      </div>
      <div className="fluid-container row m-0">
        <div className="col-lg-4">
          <TextField
            fullWidth
            size="small"
            label="From Account Name"
            variant="outlined"
            margin="normal"
            placeholder="Enter From Account Name"
            name="quotation"
          />
        </div>
        <div className="col-lg-4">
          <TextField
            fullWidth
            size="small"
            label="To Account Name"
            variant="outlined"
            margin="normal"
            placeholder="Enter To Account Name"
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
            placeholder="Enter Product Quantity"
            name="quotation"
          />
        </div>
        <div className="col-lg-4">
          <TextField
            fullWidth
            size="small"
            label="Purpose"
            multiline
            rows={4}
            variant="outlined"
            margin="normal"
            placeholder="Enter Purpose"
            name="quotation"
          />
        </div>
      </div>
      <div>
        <button className="btn btn-primary mt-3 mb-3">Submit</button>
      </div>
    </>
  )
}

export default TransPayments
