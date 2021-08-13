import React from 'react'
import PropTypes from 'prop-types'
import {
  Grid,
  makeStyles,
  TextField,
  Box,
  Typography,
  Tab,
  AppBar,
  Tabs,
} from '@material-ui/core'
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet'
import DataGrid from '../../datagrid/datagrid'
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
export default function MyTransactionDashboard() {
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  const useStyles = makeStyles((theme) => ({
    transactionHeading: {
      padding: '5px',
      backgroundColor: 'orange',
      textAlign: 'center',
    },
    transactionInfoWrap: {
      // display:'flex',
      justifyContent: 'space-between',
    },
  }))
  const classes = useStyles()
  return (
    <>
      <div>
        <Grid className={classes.transactionHeading}>
          <h5 className="mb-0">My Transactions</h5>
        </Grid>
        <Grid container className={classes.transactionInfoWrap}>
          <Grid>
            <h5>
              Order ID :<span className="text-danger">951753</span>
            </h5>
            <h5>
              Amount :<span className="text-danger">16540</span>
            </h5>
            <h5>
              Date :<span className="text-danger">22-2-2022</span>
            </h5>
          </Grid>
          <Grid className="text-center">
            <form>
              <TextField
                fullWidth
                margin="normal"
                variant="outlined"
                label="Add Amount"
                placeholder="Enter Amount Here"
              />
              <br />
              <button className="btn btn-success">ADD AMOUNT</button>
            </form>
          </Grid>
          <Grid>
            <h5>
              <AccountBalanceWalletIcon />
              Wallet Balance
            </h5>
            <h6>₹: 5000/-</h6>
          </Grid>
        </Grid>
        <Grid style={{ flexGrow: '1', width: '100%', marginTop: '8px' }}>
          <AppBar position="static" color="default">
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
              variant="scrollable"
              scrollButtons="on"
            >
              <Tab label="ALL" {...a11yProps(0)} />
              <Tab label="FPC" {...a11yProps(1)} />
              <Tab label="Business" {...a11yProps(2)} />
              <Tab label="Exports" {...a11yProps(3)} />
              <Tab label="Market" {...a11yProps(4)} />
              <Tab label="Products" {...a11yProps(5)} />
              <Tab label="Transactions" {...a11yProps(6)} />
            </Tabs>
          </AppBar>
          <TabPanel value={value} index={0}>
            <DataGrid />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <DataGrid />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <DataGrid />
          </TabPanel>
          <TabPanel value={value} index={3}>
            <DataGrid />
          </TabPanel>
          <TabPanel value={value} index={4}>
            <DataGrid />
          </TabPanel>
          <TabPanel value={value} index={5}>
            <DataGrid />
          </TabPanel>
          <TabPanel value={value} index={6}>
            <DataGrid />
          </TabPanel>
        </Grid>
      </div>
    </>
  )
}
