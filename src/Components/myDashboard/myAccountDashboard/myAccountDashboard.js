import React from 'react'
import { Grid, TextField } from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit'
export default function MyAccountDashboard() {
  return (
    <>
      <Grid>
        <Grid container justifyContent="center">
          <h5>My Account Details</h5>
        </Grid>
        <Grid container item lg={12}>
          {/* <form> */}
          <Grid container justifyContent="space-between" alignItems="center">
            <h5 className="mb-0">Personal Details</h5>
            <button className="btn btn-warning">
              Edit Details <EditIcon />
            </button>
          </Grid>
          <Grid container item lg={12} justifyContent="space-between">
            <Grid lg={5}>
              <TextField
                fullWidth
                variant="outlined"
                margin="normal"
                label="First Name"
                value="Dev"
              />
              <TextField
                fullWidth
                variant="outlined"
                margin="normal"
                label="Phone Number"
                value="9191919191"
              />
            </Grid>
            <Grid lg={5} justifyContent="space-between">
              <TextField
                fullWidth
                variant="outlined"
                margin="normal"
                label="Email"
                value="dev@gmail.com"
              />
              <TextField
                fullWidth
                variant="outlined"
                margin="normal"
                label="Password"
                value="*****9a"
              />
            </Grid>
            <Grid lg={12}>
              <TextField
                fullWidth
                id="outlined-multiline-static"
                label="Address"
                value="D.No: 5-5-55, Opposite Apple Showroom, Bandar Road, Vijayawada-500010"
                multiline
                rows={4}
                variant="outlined"
                name="address"
              />
            </Grid>
            <Grid
              container
              justifyContent="space-between"
              alignItems="center"
              className="mt-4"
            >
              <h5 className="mb-0">KYC Details</h5>
            </Grid>
            <Grid container lg={12} justifyContent="space-between">
              <Grid item lg={3} md={12} sm={12} xs={12}>
                <TextField
                  fullWidth
                  label="Aadhar Number"
                  margin="normal"
                  variant="outlined"
                  name="aadharnumber"
                  value="123443211234"
                ></TextField>
              </Grid>
              <Grid item lg={3} md={12} sm={12} xs={12}>
                <TextField
                  fullWidth
                  label="Bank Name"
                  margin="normal"
                  variant="outlined"
                  name="aadharnumber"
                  value="Axis Bank"
                ></TextField>
              </Grid>
              <Grid item lg={3} md={12} sm={12} xs={12}>
                <TextField
                  fullWidth
                  label="Pan Number"
                  margin="normal"
                  variant="outlined"
                  name="aadharnumber"
                  value="ASD789D455"
                ></TextField>
              </Grid>
              <Grid container lg={12} justifyContent="space-between">
                <Grid item lg={3} md={12} sm={12} xs={12}>
                  <TextField
                    fullWidth
                    label="Bank A/C Number"
                    margin="normal"
                    variant="outlined"
                    name="bankacnum"
                    value="123443211234"
                  ></TextField>
                </Grid>
                <Grid item lg={3} md={12} sm={12} xs={12}>
                  <TextField
                    fullWidth
                    label="Branch Name"
                    margin="normal"
                    variant="outlined"
                    name="branchname"
                    value="Vijayawada"
                  ></TextField>
                </Grid>
                <Grid item lg={3} md={12} sm={12} xs={12}>
                  <TextField
                    fullWidth
                    label="IFSC CODE"
                    margin="normal"
                    variant="outlined"
                    name="ifsccode"
                    value="AXI01236547"
                  ></TextField>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          {/* </form> */}
        </Grid>
      </Grid>
    </>
  )
}
