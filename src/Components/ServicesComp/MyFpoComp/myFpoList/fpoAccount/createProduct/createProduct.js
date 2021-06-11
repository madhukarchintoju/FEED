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

export default function CreateProduct() {
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
      padding: '2em 6em 3em 6em',
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
    productName: yup
      .string('Enter your product name')
      .required('Product name is required'),
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
      productName: '',
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
          <h5 className={classes.title}>Create Product</h5>
          <form onSubmit={formik.handleSubmit} className={classes.form}>
            <TextField
              fullWidth
              id="productName"
              name="productName"
              label="Product Name"
              value={formik.values.productName}
              onChange={formik.handleChange}
              error={
                formik.touched.productName && Boolean(formik.errors.productName)
              }
              helperText={
                formik.touched.productName && formik.errors.productName
              }
            />
            <TextField
              fullWidth
              id="hsnCode"
              name="hsnCode"
              label="HSN Code"
              value={formik.values.hsnCode}
              onChange={formik.handleChange}
              error={formik.touched.hsnCode && Boolean(formik.errors.hsnCode)}
              helperText={formik.touched.hsnCode && formik.errors.hsnCode}
            />
            <TextField
              fullWidth
              id="quantity"
              name="quantity"
              label="Quantity"
              type="number"
              value={formik.values.quantity}
              onChange={formik.handleChange}
              error={formik.touched.quantity && Boolean(formik.errors.quantity)}
              helperText={formik.touched.quantity && formik.errors.quantity}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">Kg</InputAdornment>
                ),
              }}
            />
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
