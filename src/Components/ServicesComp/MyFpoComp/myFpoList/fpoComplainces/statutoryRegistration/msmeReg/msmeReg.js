import React from 'react'
import { Grid, TextField } from '@material-ui/core'
export default function MsmeReg() {
  return (
    <>
      <h4 className="text-center">MSME Registration</h4>
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
          <Grid container justifyContent="space-between" spacing={1}>
            <Grid item lg={4}>
              <TextField
                fullWidth
                margin="normal"
                variant="outlined"
                label="PAN Number"
                placeholder="Enter PAN Number"
              />
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
            <Grid item lg={4}>
              <TextField
                fullWidth
                variant="outlined"
                margin="normal"
                label="Caste Certificate Number"
              />
              <TextField
                type="file"
                fullWidth
                variant="outlined"
                margin="normal"
                label="Upload Caste Certificate"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item lg={4}>
              <TextField
                fullWidth
                variant="outlined"
                margin="normal"
                label="Business Name"
                placeholder="Enter Business Name"
              />
            </Grid>
          </Grid>
          <Grid className="mt-3">
            <h6>Address :</h6>
            <Grid container lg={12} justifyContent="space-between">
              <Grid item lg={5}>
                <TextField
                  fullWidth
                  margin="normal"
                  multiline
                  rows={4}
                  variant="outlined"
                  label="Address of the plant / unit"
                  placeholder="Enter Address of the plant / unit"
                />
                <TextField
                  type="file"
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  label="Upload Office Address Proof"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item lg={5}>
                <TextField
                  fullWidth
                  multiline
                  margin="normal"
                  rows={4}
                  variant="outlined"
                  label="Address of the Office"
                  placeholder="Enter Office Address"
                />
                <TextField
                  type="file"
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  label="Upload Office Address Proof"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
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
                label="Branch"
                placeholder="Enter Branch"
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
          <Grid container justifyContent="space-between" className="mt-3">
            <Grid item lg={5}>
              <h6>
                Investment in plant, machinery &amp; equipment - details need to
                be enter and upload images
              </h6>
              <TextField
                fullWidth
                multiline
                rows={4}
                variant="outlined"
                label="Equipment Details"
                placeholder="Enter Description"
              />
            </Grid>
            <Grid item lg={5}>
              <p>ID Proof of Applicant</p>
              <TextField
                type="file"
                fullWidth
                variant="outlined"
                margin="normal"
                label="Upload ID Proof"
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
