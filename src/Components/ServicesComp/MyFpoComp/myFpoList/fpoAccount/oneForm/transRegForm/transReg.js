import React from 'react'
import PropTypes from 'prop-types'
import {
  TextField,
  makeStyles,
  Grid,
  InputAdornment,
  Tabs,
  Tab,
  Box,
  Typography,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  FormControlLabel,
  AppBar,
} from '@material-ui/core'
import Autocomplete from '@material-ui/lab/Autocomplete'
import TransPayments from './transPayments'
import TransReceipts from './transReceipts'
// import PurchaseOrder from './purchaseOrder'
// import PurchaseInvoice from './purchaseInvoice'
const vendorList = [
  { title: 'Ramudu' },
  { title: 'Lakshman' },
  { title: 'Krishna' },
  { title: 'Arjun' },
  { title: 'Narayana' },
]
function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
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
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  }
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}))

export default function TransactionRegForm() {
  const classes = useStyles()
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  return (
    <>
      <div className={classes.root}>
        <AppBar position="static" color="default" style={{ boxShadow: 'none' }}>
          <Grid container justifyContent="center">
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
              variant="scrollable"
              scrollButtons="auto"
              centered
              aria-label="scrollable auto tabs example"
            >
              <Tab label="Payments" {...a11yProps(0)} />
              <Tab label="Receipts" {...a11yProps(1)} />
            </Tabs>
          </Grid>
        </AppBar>
        <TabPanel value={value} index={0}>
          <TransPayments />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <TransReceipts />
        </TabPanel>
      </div>
    </>
  )
}
