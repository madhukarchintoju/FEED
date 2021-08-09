import React from 'react'
import { useFormik } from 'formik'
import {
  TextField,
  Button,
  makeStyles,
  Grid,
  InputAdornment,
} from '@material-ui/core'
import * as yup from 'yup'

export default function CreateVendor() {
  const useStyles = makeStyles((theme) => ({
    formRoot: {
      width: '95%',
      boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)',
      webkitBoxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)',
      mozBoxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)',
      marginTop: '1em',
      paddingBottom: '1em',
      '@media (max-width: 768px)': {
        marginTop: '0',
      },
      // border:'1px solid red'
    },
    form: {
      // padding: '2em',
      // '& div': {
      //   marginBottom: '0.4em',
      // },
      // '@media (max-width: 768px)': {
      //   padding: '1em',
      // },
    },
    title: {
      textAlign: 'center',
      backgroundColor: '#f8931d',
      padding: '0.2em',
    },
    cancelButton: {
      '@media (max-width: 768px)': {
        marginTop: '1em',
      },
    },
  }))
  const classes = useStyles()

  const validationSchema = yup.object({
    gstNum: yup
      .string('Enter your GST Number')
      .required('GST Number is required'),
    cmpName: yup
      .string('Enter your Company Name')
      .required('Company Name is required'),
    custName: yup
      .string('Enter Customer Name')
      .required('Customer Name is required'),
    emailId: yup.string('Enter Email Id').required('Email Id is Required'),
    address: yup.string('Enter Address').required('Address is required'),
    hsnCode: yup
      .string('Enter your HSN Code')
      .min(6, 'HSN Code should be of minimum 6 characters length')
      .required('HSN Code is required'),
    quantity: yup
      .number('Enter your hsnCode')
      .min(1, 'Quantity should be min 1')
      .max(2000)
      .required('Quantity is required'),
  })
  const formik = useFormik({
    initialValues: {
      gstNum: '',
      hsnCode: '',
      quantity: 1,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2))
    },
  })
  console.log(formik.values)
  return (
    <>
      <Grid container direction="column" justify="center" alignItems="center">
        <Grid item className={classes.formRoot}>
          <h5 className={classes.title}>Create Vendor</h5>
          <form onSubmit={formik.handleSubmit} className={classes.form}>
            <Grid container direction="row" justify="space-evenly" lg={12}>
              <Grid item lg={5}>
                <TextField
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  id="cmpName"
                  name="cmpName"
                  label="Company Name"
                  value={formik.values.cmpName}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.cmpName && Boolean(formik.errors.cmpName)
                  }
                  helperText={formik.touched.cmpName && formik.errors.cmpName}
                />
                <TextField
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  id="custName"
                  name="custName"
                  label="Vendor Name"
                  value={formik.values.custName}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.custName && Boolean(formik.errors.custName)
                  }
                  helperText={formik.touched.custName && formik.errors.custName}
                />
                <TextField
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  id="gstNum"
                  name="gstNum"
                  label="GST Number"
                  value={formik.values.gstNum}
                  onChange={formik.handleChange}
                  error={formik.touched.gstNum && Boolean(formik.errors.gstNum)}
                  helperText={formik.touched.gstNum && formik.errors.gstNum}
                />
                <TextField
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  id="custName"
                  name="custName"
                  label="Vendor Phone"
                  value={formik.values.custName}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.custName && Boolean(formik.errors.custName)
                  }
                  helperText={formik.touched.custName && formik.errors.custName}
                />
              </Grid>
              <Grid item lg={5}>
                <TextField
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  id="emailId"
                  name="emailId"
                  label="Email Id"
                  value={formik.values.emailId}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.emailId && Boolean(formik.errors.emailId)
                  }
                  helperText={formik.touched.emailId && formik.errors.emailId}
                />
                {/* <TextField
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  id="address"
                  name="address"
                  label="Address"
                  value={formik.values.address}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.address && Boolean(formik.errors.address)
                  }
                  helperText={formik.touched.address && formik.errors.address}
                /> */}
                <TextField
                  fullWidth
                  margin="normal"
                  id="address"
                  label="Address"
                  placeholder="Enter Address"
                  multiline
                  rows={4}
                  variant="outlined"
                  name="address"
                  value={formik.values.address}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.address && Boolean(formik.errors.address)
                  }
                  helperText={formik.touched.address && formik.errors.address}
                />
              </Grid>
            </Grid>
            <Grid
              container
              direction="row"
              justifyContent="space-evenly"
              alignItems="center"
              xs={11}
            >
              {/* <Button
                item
                color="primary"
                variant="contained"
                className={classes.cancelButton}
              >
                Cancel
              </Button> */}
              <Button item color="primary" variant="contained">
                Save
              </Button>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </>
  )
}
