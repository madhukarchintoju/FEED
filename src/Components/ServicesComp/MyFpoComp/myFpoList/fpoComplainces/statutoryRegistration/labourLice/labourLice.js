import React from 'react'
import { Grid, TextField, MenuItem } from '@material-ui/core'

export default function LabourLice() {
  return (
    <>
      <h4 className="text-center">Labour Licence</h4>
      <Grid className="m-1">
        <form>
          <Grid container spacing={1}>
            <Grid item lg={4} sm={12} xs={12}>
              <TextField
                fullWidth
                margin="normal"
                variant="outlined"
                label="First Name"
                placeholder="Enter First Name"
              />
            </Grid>
            <Grid item lg={4} sm={12} xs={12}>
              <TextField
                fullWidth
                margin="normal"
                variant="outlined"
                label="Middle Name"
                placeholder="Enter Middle Name"
              />
            </Grid>
            <Grid item lg={4} sm={12} xs={12}>
              <TextField
                fullWidth
                margin="normal"
                variant="outlined"
                label="Email Last Name"
                placeholder="Enter Last Name"
              />
            </Grid>
            <Grid item lg={4} sm={12} xs={12}>
              <TextField
                fullWidth
                margin="normal"
                variant="outlined"
                label="Mobile Number"
                placeholder="Enter Mobile Number"
              />
            </Grid>
            <Grid item lg={4} sm={12} xs={12}>
              <TextField
                fullWidth
                margin="normal"
                variant="outlined"
                label="Email ID"
                placeholder="Enter Email ID"
              />
            </Grid>
          </Grid>
          <h6 className="mt-3">Business Details</h6>
          <Grid container spacing={1}>
            <Grid item lg={4} md={4} sm={12} xs={12}>
              <TextField
                fullWidth
                margin="normal"
                variant="outlined"
                label="Business Name"
                placeholder="Enter Business Name"
              />
            </Grid>
            <Grid item lg={4} md={4} sm={12} xs={12}>
              <TextField
                select
                fullWidth
                margin="normal"
                variant="outlined"
                label="Business Type"
              >
                <MenuItem value="privatelimited">Private Limited</MenuItem>
                <MenuItem value="publiclimited">Public Limited</MenuItem>
              </TextField>
            </Grid>
            <Grid item lg={4} md={4} sm={12} xs={12}>
              <TextField
                fullWidth
                margin="normal"
                variant="outlined"
                label="Address"
                placeholder="Enter Address"
              />
            </Grid>
          </Grid>
          <Grid container spacing={1}>
            <Grid item lg={4} md={12}>
              <label>
                Upload Front and Inside office photos with Name board
              </label>
              <TextField
                type="file"
                fullWidth
                variant="outlined"
                name="dob"
                id="dateTime"
                label="Upload Files"
                defaultValue=""
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item lg={4} md={12}>
              <label>Certificate of Incorporation</label>
              <TextField
                type="file"
                fullWidth
                variant="outlined"
                name="dob"
                id="dateTime"
                label="Upload Files"
                defaultValue=""
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item lg={4} md={12}>
              <label>AOA / MOA of the company upload image</label>
              <TextField
                type="file"
                fullWidth
                variant="outlined"
                name="dob"
                id="dateTime"
                label="Upload Files"
                defaultValue=""
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item lg={4} md={12}>
              <label>Pan Card</label>
              <TextField
                type="file"
                fullWidth
                variant="outlined"
                name="dob"
                id="dateTime"
                label="Upload Files"
                defaultValue=""
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item lg={4} md={12}>
              <label>Address Proof of the company</label>
              <TextField
                type="file"
                fullWidth
                variant="outlined"
                label="Upload Files"
                defaultValue=""
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
          </Grid>
          <h6 className="mt-3">Partner Details</h6>
          <Grid container justifyContent="space-around">
            <Grid item lg={5} md={5} sm={12} xs={12}>
              <TextField
                fullWidth
                margin="normal"
                variant="outlined"
                label="Full Name"
                placeholder="Enter Full Name"
              />
            </Grid>
            <Grid item lg={5} md={5} sm={12} xs={12}>
              <TextField
                fullWidth
                margin="normal"
                variant="outlined"
                label="Mobile Number"
                placeholder="Enter Mobile Number"
              />
            </Grid>
            <Grid item lg={5} md={5} sm={12} xs={12}>
              <TextField
                fullWidth
                margin="normal"
                variant="outlined"
                label="Aadhar Number"
                placeholder="Enter Aadhar Number"
              />
              <TextField
                type="file"
                fullWidth
                margin="normal"
                variant="outlined"
                label="Upload Files"
                defaultValue=""
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item lg={5} md={5}>
              <TextField
                fullWidth
                margin="normal"
                variant="outlined"
                label="Pan card Number"
                placeholder="Enter Pan Number"
              />
              <TextField
                type="file"
                fullWidth
                margin="normal"
                variant="outlined"
                label="Upload Files"
                defaultValue=""
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
          </Grid>
          <h6 className="mt-3">Details of the Existing Employees</h6>
          <Grid container justifyContent="space-around">
            <Grid item lg={5} md={5} sm={12} xs={12}>
              <TextField
                fullWidth
                margin="normal"
                variant="outlined"
                label="Full Name"
                placeholder="Enter Full Name"
              />
            </Grid>
            <Grid item lg={5} md={5} sm={12} xs={12}>
              <TextField
                fullWidth
                margin="normal"
                variant="outlined"
                label="Mobile Number"
                placeholder="Enter Mobile Number"
              />
            </Grid>
            <Grid item lg={5} md={5} sm={12} xs={12}>
              <TextField
                fullWidth
                margin="normal"
                variant="outlined"
                label="Address"
                placeholder="Enter Address"
              />
            </Grid>
            <Grid item lg={5} md={5} sm={12} xs={12}>
              <TextField
                fullWidth
                select
                margin="normal"
                variant="outlined"
                label="State"
              >
                <MenuItem value="andhrapradesh">Andhra Pradesh</MenuItem>
                <MenuItem value="telangana">Telangana</MenuItem>
                <MenuItem value="tamilnadu">Tamil Nadu</MenuItem>
              </TextField>
            </Grid>
          </Grid>
          <button className="btn btn-warning">+ Add Member</button>
          <Grid container lg={12} justifyContent="center" className="mt-4">
            <button className="btn btn-primary">Submit</button>
          </Grid>
        </form>
      </Grid>
    </>
  )
}
