import React from 'react'
import {
  Grid,
  TextField,
  FormControlLabel,
  Radio,
  RadioGroup,
  FormControl,
  MenuItem,
} from '@material-ui/core'
export default function CompanyReg() {
  return (
    <>
      <Grid>
        <h4 className="text-center">Company Registration</h4>
      </Grid>
      <Grid className="m-1">
        <form>
          <Grid>
            <FormControl component="fieldset">
              <h6>Select Company Registration Type</h6>
              <RadioGroup row aria-label="position" name="position">
                <Grid item lg={4}>
                  <FormControlLabel
                    value="PrivateLimitedCompany"
                    variant="outlined"
                    control={<Radio color="primary" />}
                    label="Private Limited Company"
                    labelPlacement="end"
                  />
                </Grid>
                <Grid item lg={4}>
                  <FormControlLabel
                    value="PublicLimitedCompany"
                    control={<Radio color="primary" />}
                    label="Public Limited Company"
                  />
                </Grid>
                <Grid item lg={4}>
                  <FormControlLabel
                    value="LimitedLiabilityPartnerRegd"
                    control={<Radio color="primary" />}
                    label="Limited Liability Partner Regd"
                  />
                </Grid>
                <Grid item lg={4}>
                  <FormControlLabel
                    value="RegisteredPartnershipFirmotherPartnerDetails"
                    control={<Radio color="primary" />}
                    label="Registered Partnership Firm + other Partner Details"
                  />
                </Grid>
                <Grid item lg={4}>
                  <FormControlLabel
                    value="ProprietorshipFirmRegistration"
                    control={<Radio color="primary" />}
                    label="Proprietorship Firm Registration"
                  />
                </Grid>
                <Grid item lg={4}>
                  <FormControlLabel
                    value="TrustRegistration"
                    control={<Radio color="primary" />}
                    label="Trust Registration"
                  />
                </Grid>
                <Grid item lg={4}>
                  <FormControlLabel
                    value="SocietyRegistration"
                    control={<Radio color="primary" />}
                    label="Society Registration"
                  />
                </Grid>
                <Grid item lg={4}>
                  <FormControlLabel
                    value="Section-25Registration"
                    control={<Radio color="primary" />}
                    label="Section-25 Registration"
                  />
                </Grid>
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid>
            <h6 style={{ padding: '5px', backgroundColor: '#ebebeb' }}>
              Required Documents
            </h6>
            <Grid container justifyContent="space-evenly" spacing={1}>
              <Grid item lg={4} md={12} sm={12} xs={12}>
                <TextField
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  label="PAN card details / Passport"
                />
                <TextField
                  type="file"
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  label="PAN card / Passport"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item lg={4} md={12} sm={12} xs={12}>
                <TextField
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  label="Identity Proof"
                />
                <TextField
                  type="file"
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  label="Identity Proof"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item lg={4} md={12} sm={12} xs={12}>
                <TextField
                  fullWidth
                  select
                  variant="outlined"
                  margin="normal"
                  label="Director's Address Proof"
                >
                  <MenuItem value="electricitybill">Electricity Bill</MenuItem>
                  <MenuItem value="waterbill">Water Bill</MenuItem>
                  <MenuItem value="housetax">House Tax</MenuItem>
                </TextField>
                <TextField
                  type="file"
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  label="Director's Address Proof"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
            </Grid>
            <Grid
              container
              justifyContent="space-evenly"
              spacing={1}
              className="mt-3"
            >
              <Grid item lg={4} md={12} sm={12} xs={12}>
                <TextField
                  fullWidth
                  select
                  variant="outlined"
                  margin="normal"
                  label="Business Address Proof"
                  helperText="Latest Electricity Bill of Office"
                >
                  <MenuItem value="electricitybill">Electricity Bill</MenuItem>
                  <MenuItem value="waterbill">Water Bill</MenuItem>
                  <MenuItem value="housetax">House Tax</MenuItem>
                </TextField>
                <TextField
                  type="file"
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  label="Business Address Proof"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item lg={4} md={12} sm={12} xs={12}>
                <TextField
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  label="NOC from owner"
                  helperText="NOC to be obtained from owner"
                />
                <TextField
                  type="file"
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  label="NOC from owner"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item lg={4} md={12} sm={12} xs={12}>
                <TextField
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  label="Rental  Agreement"
                  helperText="Office Rental Agreement if any"
                />
                <TextField
                  type="file"
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  label="Rental  Agreement"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
            </Grid>
            <Grid container className="mt-3">
              <Grid item lg={4} md={12} sm={12} xs={12}>
                <TextField
                  type="file"
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  label="Upload Passport size Photograph"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
            </Grid>
            <Grid item lg={4} md={12} sm={12} xs={12} className="mt-3">
              <label>
                <span style={{ fontWeight: '600' }}>NOTE :</span> In case of NRI
                or Foreign National, documents of director(s) must be Notarized
                or Apostilled
              </label>
              <TextField
                type="file"
                fullWidth
                variant="outlined"
                // margin="normal"
                label="Documents"
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
