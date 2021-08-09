import React from 'react'
import { useFormik } from 'formik'
import {
  TextField,
  Button,
  makeStyles,
  Grid,
  InputAdornment,
  MenuItem,
  FormControl,
  InputLabel,
  OutlinedInput,
} from '@material-ui/core'
import * as yup from 'yup'

export default function CreateProduct() {
  const useStyles = makeStyles((theme) => ({
    formRoot: {
      margin: 'auto',
      boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)',
      webkitBoxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)',
      mozBoxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)',
      marginTop: '2em',
      paddingBottom: '1em',
      '@media (max-width: 768px)': {
        marginTop: '0',
      },
    },
    form: {
      // padding: '2em 6em 3em 6em',
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
  const productCategoryList = [
    {
      id: 1,
      name: 'Fruits',
    },
    {
      id: 2,
      name: 'Vegetables',
    },
    {
      id: 3,
      name: 'Spices',
    },
    {
      id: 4,
      name: 'Cereals',
    },
    {
      id: 5,
      name: 'Oil Seeds',
    },
    {
      id: 6,
      name: 'Forest Products',
    },
    {
      id: 7,
      name: 'Animal Husbandry',
    },
    {
      id: 8,
      name: 'Poultry',
    },
    {
      id: 9,
      name: 'Aqua',
    },
    {
      id: 10,
      name: 'Dairy',
    },
    {
      id: 11,
      name: 'Plants',
    },
    {
      id: 12,
      name: 'Flowers',
    },
    {
      id: 13,
      name: 'Plantation Crop',
    },
    {
      id: 14,
      name: 'Fabric',
    },
    {
      id: 15,
      name: 'Others',
    },
  ]
  return (
    <>
      <Grid container direction="column">
        <Grid item lg={10} className={classes.formRoot}>
          <h5 className={classes.title}>Create Product</h5>
          <form onSubmit={formik.handleSubmit} className={classes.form}>
            <Grid container direction="row" lg={8} className="m-auto">
              <TextField
                fullWidth
                variant="outlined"
                margin="normal"
                id="productName"
                name="productName"
                label="Product Name"
                value={formik.values.productName}
                onChange={formik.handleChange}
                error={
                  formik.touched.productName &&
                  Boolean(formik.errors.productName)
                }
                helperText={
                  formik.touched.productName && formik.errors.productName
                }
              />
              <TextField
                select
                fullWidth
                margin="normal"
                variant="outlined"
                id="hsnCode"
                name="hsnCode"
                label="Product Category"
                value={formik.values.hsnCode}
                onChange={formik.handleChange}
                error={formik.touched.hsnCode && Boolean(formik.errors.hsnCode)}
                helperText={formik.touched.hsnCode && formik.errors.hsnCode}
              >
                {productCategoryList.map((item) => (
                  <MenuItem key={item.id} value={item.id}>
                    {item.name}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                fullWidth
                variant="outlined"
                margin="normal"
                id="quantity"
                name="quantity"
                label="HSN CODE"
                type="number"
                error={
                  formik.touched.quantity && Boolean(formik.errors.quantity)
                }
                helperText={formik.touched.quantity && formik.errors.quantity}
              />
              <TextField
                fullWidth
                variant="outlined"
                margin="normal"
                id="quantity"
                name="quantity"
                label="Amount"
                type="number"
                error={
                  formik.touched.quantity && Boolean(formik.errors.quantity)
                }
                helperText={formik.touched.quantity && formik.errors.quantity}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">₹</InputAdornment>
                  ),
                }}
              />
              <Grid
                container
                direction="row"
                justify="space-around"
                alignItems="center"
                xs={11}
                className="mt-3"
              >
                <Button
                  item
                  color="primary"
                  variant="contained"
                  className={classes.cancelButton}
                >
                  Cancel
                </Button>
                <Button item color="primary" variant="contained">
                  Save
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </>
  )
}
