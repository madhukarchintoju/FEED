import React from 'react'
import { Grid, TextField, MenuItem } from '@material-ui/core'
export default function ShopsEstb() {
  return (
    <>
      <h4 className="text-center">Shops &amp; Establishments</h4>
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
            <Grid item lg={5}>
              <TextField
                fullWidth
                select
                margin="normal"
                variant="outlined"
                label="Identity Proof"
              >
                <MenuItem value="voterid">Voter ID</MenuItem>
                <MenuItem value="drivinglicense">Driving License</MenuItem>
                <MenuItem value="passport">Passport</MenuItem>
              </TextField>
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
          </Grid>
          <Grid container justifyContent="space-around" spacing={1}>
            <Grid item lg={5}>
              <label className="mt-3">
                Upload Shop Photo with Local Language Board
              </label>
              <TextField
                type="file"
                fullWidth
                variant="outlined"
                label="Shop Image"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item lg={5}>
              <label className="mt-3">Certificate of Incorporation</label>
              <TextField
                type="file"
                fullWidth
                variant="outlined"
                label="Upload File"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item lg={5}>
              <label className="mt-3">
                AOA / MOA of the company / LLP agreement of the company
              </label>
              <TextField
                type="file"
                fullWidth
                variant="outlined"
                label="Upload File"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item lg={5}>
              <label className="mt-3">PAN Card photo of Business / Owner</label>
              <TextField
                type="file"
                fullWidth
                variant="outlined"
                label="Upload File"
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
                label="Partner Name"
                placeholder="Partner Name"
              />
            </Grid>
            <Grid item lg={5}>
              <TextField
                fullWidth
                margin="normal"
                variant="outlined"
                label="Partner Mobile Number"
                placeholder="Enter Partner Mobile Number"
              />
            </Grid>
            <Grid item lg={5}>
              <TextField
                type="file"
                fullWidth
                margin="normal"
                variant="outlined"
                label="Parnter Identity Proof"
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
                label="Company Address Proof"
                placeholder="Enter Company Address Proof"
              />
            </Grid>
            <Grid item lg={5}>
              <TextField
                fullWidth
                select
                margin="normal"
                variant="outlined"
                label="Company Type Proof"
              >
                <MenuItem value="voterid">Voter ID</MenuItem>
                <MenuItem value="drivinglicense">Driving License</MenuItem>
                <MenuItem value="passport">Passport</MenuItem>
              </TextField>
              <TextField
                type="file"
                fullWidth
                margin="normal"
                variant="outlined"
                label="Company Type Proof"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
          </Grid>
          <h6 style={{ fontWeight: '600', marginTop: '10px' }}>
            Employee Details
          </h6>
          <Grid container justifyContent="space-around">
            <Grid item lg={5}>
              <TextField
                fullWidth
                margin="normal"
                variant="outlined"
                label="Full Name"
                placeholder="Enter Full Name"
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
                label="Email ID"
                placeholder="Enter Email ID"
              />
            </Grid>
            <Grid item lg={5}>
              <TextField
                fullWidth
                margin="normal"
                variant="outlined"
                label="Address"
                placeholder="Enter Address"
              />
            </Grid>
            <Grid item lg={5}>
              <TextField
                fullWidth
                select
                margin="normal"
                variant="outlined"
                label="Identity Proof"
              >
                <MenuItem value="voterid">Voter ID</MenuItem>
                <MenuItem value="drivinglicense">Driving License</MenuItem>
                <MenuItem value="passport">Passport</MenuItem>
              </TextField>
              <TextField
                fullWidth
                margin="normal"
                variant="outlined"
                label="Identity Proof Number"
                placeholder="Enter Identity Proof Number"
              />
            </Grid>
            <Grid item lg={5}>
              <TextField
                type="file"
                fullWidth
                margin="normal"
                variant="outlined"
                label="Passport size Photo"
                InputLabelProps={{
                  shrink: true,
                }}
              />
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
