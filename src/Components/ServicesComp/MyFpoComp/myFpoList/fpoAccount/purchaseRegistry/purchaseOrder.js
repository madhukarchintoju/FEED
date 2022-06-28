import React from 'react'
import {
  TextField,
  Grid,
  InputAdornment,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  FormControlLabel,
} from '@material-ui/core'

function PurchaseOrder() {
  return (
    <>
      <form>
        <Grid container item lg={12} justifyContent="space-evenly">
          <Grid item lg={5}>
            <TextField
              fullWidth
              label="Order Number"
              variant="outlined"
              margin="normal"
              placeholder="Enter Order Number"
              name="companyName"
            />
            <TextField
              fullWidth
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
            <TextField
              fullWidth
              label="Company Name"
              variant="outlined"
              margin="normal"
              placeholder="Enter Name"
              name="companyName"
            />
            <TextField
              fullWidth
              variant="outlined"
              margin="normal"
              name="dueDate"
              id="dateTime"
              label="Due Date"
              type="date"
              defaultValue=""
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              fullWidth
              label="Product Name"
              variant="outlined"
              margin="normal"
              placeholder="Enter Product Name"
              name="productName"
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
            <TextField
              fullWidth
              variant="outlined"
              margin="normal"
              id="quantity"
              name="quantity"
              label="Rate"
            />
          </Grid>
          <Grid item lg={5}>
            <TextField
              fullWidth
              type="number"
              variant="outlined"
              margin="normal"
              id="quantity"
              name="quantity"
              label="Total Amount"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">₹</InputAdornment>
                ),
              }}
            />
            <TextField
              fullWidth
              variant="outlined"
              margin="normal"
              id="quantity"
              name="quantity"
              label="Order Amount in Words"
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

            <Grid container item lg={12} justifyContent="space-between">
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
        </Grid>
        <Grid container item lg={12} justifyContent="center">
          <button className="btn btn-primary">Submit</button>
        </Grid>
      </form>
    </>
  )
}

export default PurchaseOrder
