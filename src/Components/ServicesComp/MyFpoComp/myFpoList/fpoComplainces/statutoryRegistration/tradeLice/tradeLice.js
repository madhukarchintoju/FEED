import React from 'react'
import { Grid, TextField, MenuItem } from '@material-ui/core'
export default function TradeLice() {
  return (
    <>
      <h4 className="text-center">Trade Licence</h4>
      <Grid className="m-1">
        <form>
          <h6>Owner Personal Details</h6>
          <Grid container justifyContent="space-around" spacing={1}>
            <Grid item lg={4}>
              <TextField
                fullWidth
                margin="normal"
                variant="outlined"
                label="First Name"
                placeholder="Enter First Name"
              />
            </Grid>
            <Grid item lg={4}>
              <TextField
                fullWidth
                margin="normal"
                variant="outlined"
                label="Middle Name"
                placeholder="Enter Middle Name"
              />
            </Grid>
            <Grid item lg={4}>
              <TextField
                fullWidth
                margin="normal"
                variant="outlined"
                label="Email Last Name"
                placeholder="Enter Last Name"
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
                label="Fax Number"
                placeholder="Enter Fax Number"
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
            <Grid item lg={12}>
              <TextField
                fullWidth
                margin="normal"
                variant="outlined"
                label="SSSID Number"
                placeholder="Enter SSSID Number"
              />
            </Grid>
            <Grid item lg={4}>
              <TextField
                fullWidth
                margin="normal"
                variant="outlined"
                label="Father / Husband First Name"
                placeholder="Enter Father / Husband First Name"
              />
            </Grid>
            <Grid item lg={4}>
              <TextField
                fullWidth
                margin="normal"
                variant="outlined"
                label="Father / Husband Middle Name"
                placeholder="Enter Father / Husband Middle Name"
              />
            </Grid>
            <Grid item lg={4}>
              <TextField
                fullWidth
                margin="normal"
                variant="outlined"
                label="Father / Husband Last Name"
                placeholder="Enter Father / Husband Last Name"
              />
            </Grid>
          </Grid>
          <h6 className="mt-3">Address Details</h6>
          <Grid container justifyContent="space-around">
            <Grid item lg={5}>
              <TextField
                fullWidth
                margin="normal"
                variant="outlined"
                label="Door Number"
                placeholder="Enter Door Number"
              />
            </Grid>
            <Grid item lg={5}>
              <TextField
                fullWidth
                margin="normal"
                variant="outlined"
                label="Street"
                placeholder="Enter Street Name"
              />
            </Grid>
            <Grid item lg={5}>
              <TextField
                fullWidth
                margin="normal"
                variant="outlined"
                label="Area / City"
                placeholder="Enter Area / City"
              />
            </Grid>
            <Grid item lg={5}>
              <TextField
                fullWidth
                margin="normal"
                variant="outlined"
                label="District"
                placeholder="Enter District"
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
                <MenuItem value="andhrapradesh">Andhra Pradesh</MenuItem>
                <MenuItem value="telangana">Telangana</MenuItem>
                <MenuItem value="tamilnadu">Tamil Nadu</MenuItem>
              </TextField>
            </Grid>
            <Grid item lg={5}>
              <TextField
                fullWidth
                margin="normal"
                variant="outlined"
                label="Pincode"
                placeholder="Enter Pincode"
              />
            </Grid>
          </Grid>
          <h6 className="mt-3">Trade Licence Details</h6>
          <Grid container spacing={1}>
            <Grid item lg={4}>
              <TextField
                fullWidth
                margin="normal"
                variant="outlined"
                label="Trade Title (Name)"
                placeholder="Enter Trade Title (Name)"
              />
            </Grid>
            <Grid item lg={4}>
              <TextField
                fullWidth
                margin="normal"
                variant="outlined"
                label="Trade Number"
                placeholder="Enter Trade Number"
              />
            </Grid>
            <Grid item lg={4}>
              <TextField
                fullWidth
                margin="normal"
                variant="outlined"
                label="Trade Type"
                placeholder="Enter "
              />
            </Grid>
            <Grid item lg={4}>
              <TextField
                fullWidth
                margin="normal"
                variant="outlined"
                label="Trade Category Type"
                placeholder="Enter Trade Category Type"
              />
            </Grid>
            <Grid item lg={4}>
              <TextField
                fullWidth
                margin="normal"
                variant="outlined"
                label="Trade Sub - Category Type"
                placeholder="Enter Trade Sub - Category Type"
              />
            </Grid>
            <Grid item lg={4}>
              <TextField
                fullWidth
                margin="normal"
                variant="outlined"
                label="Capacity (HP)"
                placeholder="Enter Capacity (HP)"
              />
            </Grid>
            <Grid item lg={4}>
              <TextField
                fullWidth
                variant="outlined"
                margin="normal"
                name="dob"
                id="dateTime"
                label="Required from Date"
                type="date"
                defaultValue=""
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
                name="dob"
                id="dateTime"
                label="Required to Date"
                type="date"
                defaultValue=""
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
                label="Workers Number"
                placeholder="Enter Workers Number"
              />
            </Grid>
            <Grid item lg={4}>
              <TextField
                fullWidth
                select
                margin="normal"
                variant="outlined"
                label="Nature of Owernership"
              >
                <MenuItem value="gov">Gov</MenuItem>
                <MenuItem value="ubl">UBL</MenuItem>
                <MenuItem value="private">Private</MenuItem>
              </TextField>
            </Grid>
            <Grid item lg={4}>
              <TextField
                fullWidth
                margin="normal"
                variant="outlined"
                label="Pinth area of Vacant Land"
                placeholder="Enter Pinth area of Vacant Land"
              />
            </Grid>
            <Grid item lg={4}>
              <TextField
                fullWidth
                margin="normal"
                variant="outlined"
                label="Pinth area (sq.mts)"
                placeholder="Enter "
              />
            </Grid>
            <Grid item lg={4}>
              <TextField
                fullWidth
                margin="normal"
                variant="outlined"
                label="HSC Code"
                placeholder="Enter HSC Code"
              />
            </Grid>
            <Grid item lg={4}>
              <TextField
                fullWidth
                margin="normal"
                variant="outlined"
                label="Revenue ward Nubmer"
                placeholder="Enter Revenue ward Nubmer"
              />
            </Grid>
            <Grid item lg={4}>
              <TextField
                fullWidth
                select
                margin="normal"
                variant="outlined"
                label="Zone"
              >
                <MenuItem value="gov">Temporary</MenuItem>
                <MenuItem value="ubl">Permanent</MenuItem>
              </TextField>
            </Grid>
            <Grid item lg={4}>
              <TextField
                fullWidth
                margin="normal"
                variant="outlined"
                label="Election ward Member"
                placeholder="Enter Election ward Member"
              />
            </Grid>
            <Grid item lg={4} rin>
              <TextField
                fullWidth
                margin="normal"
                variant="outlined"
                label="Building permission Number"
                placeholder="Enter Election ward Member"
              />
            </Grid>
            <Grid item lg={4}>
              <TextField
                fullWidth
                margin="normal"
                variant="outlined"
                label="Assessment Number"
                placeholder="Enter Assessment Number"
              />
            </Grid>
            <Grid item lg={4}>
              <TextField
                fullWidth
                margin="normal"
                variant="outlined"
                label="Trade Address"
                placeholder="Enter Trade Address"
              />
            </Grid>
            <Grid item lg={4}>
              <TextField
                fullWidth
                margin="normal"
                variant="outlined"
                label="Street"
                placeholder="Enter Street"
              />
            </Grid>
            <Grid item lg={4}>
              <TextField
                fullWidth
                margin="normal"
                variant="outlined"
                label="Area"
                placeholder="Enter "
              />
            </Grid>
            <Grid item lg={4}>
              <TextField
                fullWidth
                margin="normal"
                variant="outlined"
                label="City"
                placeholder="Enter "
              />
            </Grid>
            <Grid item lg={4}>
              <TextField
                fullWidth
                margin="normal"
                variant="outlined"
                label="District"
                placeholder="Enter "
              />
            </Grid>
            <Grid item lg={4}>
              <TextField
                fullWidth
                select
                margin="normal"
                variant="outlined"
                label="State"
              >
                <MenuItem value="andhrapradesh">Andhra Pradesh</MenuItem>
                <MenuItem value="telangana">Telangana</MenuItem>
              </TextField>
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
            <Grid item lg={4}>
              <TextField
                fullWidth
                margin="normal"
                variant="outlined"
                label="Pan card Number"
                placeholder="Enter Pancard Number"
              />
            </Grid>
            <Grid item lg={4}>
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
                label="Aadhar card front"
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
                label="Aadhar card back"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item lg={4}>
              <label>Incorporation Certificate</label>
              <TextField
                type="file"
                fullWidth
                variant="outlined"
                label="upload file"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item lg={4}>
              <label>Incorporation Certificate</label>
              <TextField
                type="file"
                fullWidth
                variant="outlined"
                label="upload file"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item lg={4}>
              <label>Incorporation Certificate</label>
              <TextField
                type="file"
                fullWidth
                variant="outlined"
                label="upload file"
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
