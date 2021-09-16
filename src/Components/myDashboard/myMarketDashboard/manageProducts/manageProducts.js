import React, { useState, useEffect } from 'react'
import './manageProducts.css'
import Paper from '@material-ui/core/Paper'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import AddIcon from '@material-ui/icons/Add'
import VisibilityIcon from '@material-ui/icons/Visibility'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'
import { DropzoneArea } from 'material-ui-dropzone'
import {
  Grid,
  makeStyles,
  Box,
  Typography,
  TextField,
  FormControl,
  MenuItem,
  InputLabel,
  Select,
  TextareaAutosize,
  Divider,
  InputAdornment,
} from '@material-ui/core'
import PropTypes from 'prop-types'

function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}
const initialFieldValues = {
  productCategory: '',
  productSubCategory: '',
  productName: '',
  productDescription: '',
  quantity: '',
  units: '',
  offerPrices: '',
  gst: '',
}
export default function ManageProducts() {
  const [productFiles, setProductFiles] = useState()
  useEffect(() => {
    console.log(productFiles)
  })

  const onDropzoneAreaChange = (productFiles) => {
    setProductFiles(productFiles)
    console.log(productFiles)
    //console.log("Files:", files);
  }

  const useStyles = makeStyles((theme) => ({
    dMarketInpField: {
      marginTop: '5px',
    },
    dMarketSelField: {
      width: '40%',
    },
  }))
  const classes = useStyles()

  const [value, setValue] = React.useState(0)
  const handleChange = (event, newValue) => {
    setValue(newValue)
    setUnits(event.target.value)
  }
  const [units, setUnits] = React.useState([])
  const handleUnitsChange = (e) => {
    setUnits(e.target.value)
  }
  const productCategoryList = [
    {
      id: '1',
      name: 'Fruits',
    },
    {
      id: '2',
      name: 'Vegetables',
    },
    {
      id: '3',
      name: 'Spices',
    },
    {
      id: '4',
      name: 'Cereals',
    },
    {
      id: '5',
      name: 'Oil Seeds',
    },
    {
      id: '6',
      name: 'Forest Products',
    },
    {
      id: '7',
      name: 'Animal Husb',
    },
    {
      id: '8',
      name: 'Poultry',
    },
    {
      id: '9',
      name: 'Aqua',
    },
    {
      id: '10',
      name: 'Dairy',
    },
    {
      id: '11',
      name: 'Plants',
    },
    {
      id: '12',
      name: 'Flowers',
    },
    {
      id: '13',
      name: 'Plantation Crop',
    },
    {
      id: '14',
      name: 'Fabric',
    },
    {
      id: '15',
      name: 'Others',
    },
  ]

  const productSubCategoryList = [
    {
      id: '1',
      name: 'Mango',
    },
    {
      id: '2',
      name: 'Tomato',
    },
    {
      id: '3',
      name: 'cinnamon',
    },
    {
      id: '4',
      name: 'Wheat',
    },
    {
      id: '5',
      name: 'Peanuts',
    },
    {
      id: '6',
      name: 'Sandal Wood',
    },
    {
      id: '7',
      name: 'Honey',
    },
    {
      id: '8',
      name: 'Eggs',
    },
    {
      id: '9',
      name: 'Small Fish',
    },
    {
      id: '10',
      name: 'Panner',
    },
    {
      id: '11',
      name: 'Plant Seeds',
    },
    {
      id: '12',
      name: 'Rose Flowers',
    },
    {
      id: '13',
      name: 'Rose Plantation Crop',
    },
    {
      id: '14',
      name: 'Linen',
    },
    {
      id: '15',
      name: 'Others',
    },
  ]
  const quantityUnits = [
    {
      id: '1',
      name: 'Kg',
    },
    {
      id: '2',
      name: 'Grams',
    },
    {
      id: '3',
      name: 'Litre',
    },
    {
      id: '4',
      name: 'milli liter',
    },
    {
      id: '5',
      name: 'milligrams',
    },
  ]

  const [fieldValues, SetFieldValues] = useState(initialFieldValues)
  const handleFieldValues = (e) => {
    const { name, value } = e.target
    SetFieldValues({
      ...fieldValues,
      [name]: value,
    })
  }
  const [selectedImages, SetSelectedImages] = useState([])
  const imageHandlerChange = (e) => {
    if (e.target.files) {
      const fileArray = Array.from(e.target.files).map((file) =>
        URL.createObjectURL(file)
      )
      console.log(fileArray)
      SetSelectedImages((prevImages) => prevImages.concat(fileArray))
      Array.from(e.target.files).map((file) => URL.revokeObjectURL(file))
    }
  }
  const renderPhotos = (source) => {
    return source.map((photo) => {
      return <img src={photo} key={photo} width="150" height="150" />
    })
  }

  return (
    <div>
      <Paper square className={classes.root}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="fullWidth"
          indicatorColor="secondary"
          textColor="secondary"
          aria-label="icon label tabs example"
        >
          <Tab icon={<AddIcon />} {...a11yProps(0)} label="Create Products" />
          <Tab
            icon={<VisibilityIcon />}
            {...a11yProps(1)}
            label="View Products"
          />
          <Tab icon={<EditIcon />} {...a11yProps(2)} label="Update Products" />
          <Tab
            icon={<DeleteIcon />}
            {...a11yProps(3)}
            label="Delete Products"
          />
        </Tabs>
        <TabPanel value={value} index={0}>
          <form>
            <Grid container justify="space-between">
              <Grid lg={6}>
                <TextField
                  select
                  fullWidth
                  label="Product Category"
                  margin="normal"
                  variant="outlined"
                  name="productCategory"
                  value={fieldValues.productCategory}
                  onChange={handleFieldValues}
                >
                  {productCategoryList.map((item) => (
                    <MenuItem key={item.id} value={item.id}>
                      {item.name}
                    </MenuItem>
                  ))}
                </TextField>
                <TextField
                  select
                  fullWidth
                  label="Product Sub Category"
                  margin="normal"
                  variant="outlined"
                  name="productSubCategory"
                  value={fieldValues.productSubCategory}
                  onChange={handleFieldValues}
                >
                  {productSubCategoryList.map((item) => (
                    <MenuItem key={item.id} value={item.id}>
                      {item.name}
                    </MenuItem>
                  ))}
                </TextField>
                <TextField
                  fullWidth
                  id=""
                  name="productName"
                  label="Product Name"
                  variant="outlined"
                  margin="normal"
                />
                <TextField
                  fullWidth
                  variant="outlined"
                  aria-label="minimum height"
                  margin="normal"
                  multiline
                  rows={5}
                  placeholder="Product Description"
                />
                <Grid container justify="space-between">
                  <TextField
                    id=""
                    label="Quantity"
                    margin="normal"
                    variant="outlined"
                  />
                  <TextField
                    select
                    defaultValue=""
                    // id=""
                    label="Units"
                    margin="normal"
                    variant="outlined"
                    value={units}
                    onChange={handleUnitsChange}
                    className={classes.dMarketSelField}
                  >
                    {quantityUnits.map((item) => (
                      <MenuItem key={item.id} value={item.id}>
                        {item.name}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid container justify="space-between">
                  <TextField
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">₹</InputAdornment>
                      ),
                    }}
                    id=""
                    label="Price per Quantity"
                    margin="normal"
                    variant="outlined"
                  />
                  <TextField
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">₹</InputAdornment>
                      ),
                    }}
                    id=""
                    label="Offer Price"
                    margin="normal"
                    variant="outlined"
                  />
                </Grid>
                <TextField
                  fullWidth
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="End">%</InputAdornment>
                    ),
                  }}
                  id=""
                  label="Gst"
                  margin="normal"
                  variant="outlined"
                />
              </Grid>
              <Grid lg={5}>
                {/* <Grid>
                  <input type="file" className="btn btn-primary" onChange={imageHandlerChange} />
                  {renderPhotos(selectedImages)}
                </Grid> */}
                {/* <Grid> */}
                <DropzoneArea
                  acceptedFiles={['image/*', 'video/*', 'application/*']}
                  filesLimit={10}
                  showFileNames
                  dropzoneText="Drag or upload an image here or click"
                  style={{ margin: '0px' }}
                  onChange={onDropzoneAreaChange}
                />
                {/* <DropzoneArea
                  acceptedFiles={["image/*"]}
                  filesLimit={10}
                  maxFileSize={1048576} //1 MB
                  showFileNames={true}
                  dropzoneText={"Drag and drop an image here or click"}
                  onChange={onDropzoneAreaChange}
                  style={{ margin: '0px' }}
                /> */}
                {/* </Grid> */}
              </Grid>
            </Grid>
            <Grid container lg={12} justify="center">
              <button className="btn btn-danger mr-2">Cancel</button>
              <button className="btn btn-success ml-2">Submit</button>
            </Grid>
          </form>
          <Grid container lg={10} justify="space-around"></Grid>
        </TabPanel>
        <TabPanel value={value} index={1}>
          View Products
        </TabPanel>
        <TabPanel value={value} index={2}>
          Update Products
        </TabPanel>
        <TabPanel value={value} index={3}>
          Delete Products
        </TabPanel>
      </Paper>
    </div>
  )
}
