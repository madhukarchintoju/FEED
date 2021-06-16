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
      boxShadow: '0px 2px 22px 4px rgba(0,0,0,0.2)',
      webkitBoxShadow: '0px 2px 22px 4px rgba(0,0,0,0.2)',
      mozBoxShadow: '0px 2px 22px 4px rgba(0,0,0,0.2)',
      marginTop: '2em',
      '@media (max-width: 768px)': {
        marginTop: '0',
      },
    },
    form: {
      // padding: '2em 6em 3em 6em',
      padding: '2em',
      '& div': {
        marginBottom: '0.4em',
      },
      '@media (max-width: 768px)': {
        padding: '1em',
      },
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
                  id="custName"
                  name="custName"
                  label="Customer Name"
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
                <TextField
                  fullWidth
                  id="address"
                  name="address"
                  label="Address"
                  value={formik.values.address}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.address && Boolean(formik.errors.address)
                  }
                  helperText={formik.touched.address && formik.errors.address}
                  // InputProps={{
                  //   endAdornment: (
                  //     <InputAdornment position="end">Kg</InputAdornment>
                  //   ),
                  // }}
                />
              </Grid>
            </Grid>
            <Grid
              container
              direction="row"
              justify="space-around"
              alignItems="center"
              xs={11}
            >
              <Button item color="primary" variant="contained">
                Save
              </Button>
              <Button item color="primary" variant="contained">
                Print
              </Button>
              <Button item color="primary" variant="contained">
                PDF
              </Button>
              <Button
                item
                color="primary"
                variant="contained"
                className={classes.cancelButton}
              >
                Cancel
              </Button>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </>
  )
}
