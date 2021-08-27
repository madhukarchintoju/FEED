import React from 'react'
import { Grid, TextField } from '@material-ui/core'
export default function IecCode() {
  return (
    <>
      <h4 className="text-center">IEC Code</h4>
      <Grid className="m-1">
        <form>
          <Grid container lg={12} justifyContent="space-around">
            <Grid lg={5} md={12} sm={12} xs={12}>
              <TextField
                fullWidth
                margin="normal"
                variant="outlined"
                label="Business Activity"
                placeholder="Enter Business Activity"
              />
            </Grid>
            <Grid lg={5} md={12} sm={12} xs={12}>
              <TextField
                fullWidth
                margin="normal"
                variant="outlined"
                label="Name of Entity"
                placeholder="Enter Entity Name"
              />
            </Grid>
          </Grid>
          <Grid container lg={12} justifyContent="space-around">
            <Grid item lg={5}>
              <TextField
                fullWidth
                margin="normal"
                variant="outlined"
                label="Type of Business"
                placeholder="Enter Type of Business"
              />
            </Grid>
            <Grid item lg={5}>
              <TextField
                fullWidth
                variant="outlined"
                margin="normal"
                name="dob"
                id="dateTime"
                label="Date of Birth"
                type="date"
                defaultValue=""
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item lg={5}>
              <TextField
                fullWidth
                margin="normal"
                variant="outlined"
                label="Mobile Number"
                placeholder="Enter Mobile Number"
              />
            </Grid>
            <Grid item lg={5}>
              <TextField
                fullWidth
                margin="normal"
                variant="outlined"
                label="Email"
                placeholder="Enter Email"
              />
            </Grid>
          </Grid>
          <Grid container justifyContent="space-around">
            <Grid lg={5}>
              <TextField
                fullWidth
                margin="normal"
                variant="outlined"
                label="PAN Number"
                placeholder="Enter PAN Number"
              />
            </Grid>
            <Grid lg={5}>
              <TextField
                type="file"
                fullWidth
                variant="outlined"
                margin="normal"
                label="Upload PAN Image"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
          </Grid>
          <Grid container item lg={12} spacing={1}>
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
                variant="outlined"
                margin="normal"
                label="Upload Aadhar Front"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item lg={4}>
              <TextField
                type="file"
                fullWidth
                variant="outlined"
                margin="normal"
                label="Upload Aadhar Back"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
          </Grid>
          <h6 style={{ fontWeight: '600', marginTop: '10px' }}>
            Bank Details :
          </h6>
          <Grid container justifyContent="space-evenly" spacing={1}>
            <Grid item lg={4}>
              <TextField
                fullWidth
                margin="normal"
                variant="outlined"
                label="Bank Name"
                placeholder="Enter Bank Name"
              />
            </Grid>
            <Grid item lg={4}>
              <TextField
                fullWidth
                margin="normal"
                variant="outlined"
                label="Bank A/C Number"
                placeholder="Enter Bank Name"
              />
            </Grid>
            <Grid item lg={4}>
              <TextField
                fullWidth
                margin="normal"
                variant="outlined"
                label="Bank A/C Type"
                placeholder="Enter Bank A/C Type"
              />
            </Grid>
            <Grid item lg={4}>
              <TextField
                fullWidth
                margin="normal"
                variant="outlined"
                label="IFSC Code"
                placeholder="Enter IFSC Code"
              />
            </Grid>
            <Grid item lg={4}>
              <TextField
                fullWidth
                margin="normal"
                variant="outlined"
                label="Bank Address"
                placeholder="Enter Bank Address"
              />
            </Grid>
            <Grid item lg={4}>
              <TextField
                fullWidth
                margin="normal"
                variant="outlined"
                label="Pincode"
                placeholder="Enter Pincode"
              />
            </Grid>
          </Grid>
          <h6 style={{ fontWeight: '600', marginTop: '10px' }}>
            Office Address :
          </h6>
          <Grid container justifyContent="space-between" spacing={1}>
            <Grid item lg={4}>
              <TextField
                fullWidth
                margin="normal"
                variant="outlined"
                label="Door No / Plot No"
                placeholder="Enter Door No / Plot No"
              />
            </Grid>
            <Grid item lg={4}>
              <TextField
                fullWidth
                margin="normal"
                variant="outlined"
                label="Street / Land Mark / Center"
                placeholder="Enter Street / Land Mark / Center"
              />
            </Grid>
            <Grid item lg={4}>
              <TextField
                fullWidth
                margin="normal"
                variant="outlined"
                label="Area"
                placeholder="Enter Area"
              />
            </Grid>
            <Grid item lg={4}>
              <TextField
                fullWidth
                margin="normal"
                variant="outlined"
                label="Village / City / Town"
                placeholder="Enter Village / City / Town"
              />
            </Grid>
            <Grid item lg={4}>
              <TextField
                fullWidth
                margin="normal"
                variant="outlined"
                label="District"
                placeholder="Enter District"
              />
            </Grid>
            <Grid item lg={4}>
              <TextField
                fullWidth
                margin="normal"
                variant="outlined"
                label="Pincode"
                placeholder="Enter Pincode"
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
