import React from 'react'
import { Grid, TextField } from '@material-ui/core'
export default function IsoReg() {
  return (
    <>
      <h4 className="text-center">
        ISO (International Organization for Standardization)
      </h4>
      <Grid className="m-1">
        <form>
          <Grid container justifyContent="space-around" spacing={1}>
            <Grid item lg={4}>
              <TextField
                fullWidth
                margin="normal"
                variant="outlined"
                label="Name of the Applicant"
                placeholder="Enter Name of the Applicant"
              />
            </Grid>
            <Grid item lg={4}>
              <TextField
                fullWidth
                margin="normal"
                variant="outlined"
                label="Mobile Number"
                placeholder="Enter Mobile Number"
              />
            </Grid>
            <Grid item lg={4}>
              <TextField
                fullWidth
                margin="normal"
                variant="outlined"
                label="Email ID"
                placeholder="Enter Email ID"
              />
            </Grid>
          </Grid>
          <h6 style={{ fontWeight: '600', marginTop: '10px' }}>
            Business Details
          </h6>
          <Grid container justifyContent="space-between" spacing={1}>
            <Grid item lg={5}>
              <TextField
                fullWidth
                margin="normal"
                variant="outlined"
                label="Business Name"
                placeholder="Enter Business Name"
              />
            </Grid>
            <Grid item lg={5}>
              <TextField
                fullWidth
                margin="normal"
                variant="outlined"
                label="Business Type"
                placeholder="Enter Business Type"
              />
            </Grid>
            <Grid item lg={5}>
              <TextField
                fullWidth
                margin="normal"
                variant="outlined"
                label="PAN Number"
                placeholder="Enter PAN Number"
              />
            </Grid>
            <Grid item lg={5}>
              <TextField
                type="file"
                fullWidth
                margin="normal"
                variant="outlined"
                label="PAN Card"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item lg={4}>
              <TextField
                fullWidth
                margin="normal"
                variant="outlined"
                label="Aadhar Number"
                placeholder="Enter Aadhar Number"
              />
            </Grid>
            <Grid item lg={4}>
              <TextField
                type="file"
                fullWidth
                margin="normal"
                variant="outlined"
                label="Aadhar Front"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item lg={4}>
              <TextField
                type="file"
                fullWidth
                margin="normal"
                variant="outlined"
                label="Aadhar Back"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item lg={5}>
              <TextField
                type="file"
                fullWidth
                margin="normal"
                variant="outlined"
                label="Passport Size Photo"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item lg={5}>
              <TextField
                type="file"
                fullWidth
                margin="normal"
                variant="outlined"
                label="Electricity Bill"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item lg={4}>
              <TextField
                type="file"
                fullWidth
                margin="normal"
                variant="outlined"
                label="Sale Deed"
                helperText="Copy of sale deed in case of owned property"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item lg={4}>
              <TextField
                type="file"
                fullWidth
                margin="normal"
                variant="outlined"
                label="Rent Agreement"
                helperText="Rent Agreement in case if the property is rented"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item lg={4}>
              <TextField
                type="file"
                fullWidth
                margin="normal"
                variant="outlined"
                label="Certificate of incorporation and MOA &amp; AOA"
                helperText="For an organization, certificate of incorporation and MOA &amp; AOA is also required"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
          </Grid>
          <Grid container lg={12} justifyContent="center" className="mt-4">
            <button className="btn btn-primary">Submit</button>
          </Grid>
        </form>
      </Grid>
    </>
  )
}
