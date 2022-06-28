import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles, Grid, Tabs, Tab, Box, Typography } from '@material-ui/core'
import PurchaseOrder from './purchaseOrder'
import PurchaseInvoice from './purchaseInvoice'
import ReturnNote from './returnNote'
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
          <>{children}</>
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

export default function PurchaseRegistry() {
  const classes = useStyles()
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  return (
    <>
      <div className={classes.root}>
        {/* <AppBar position="static" color="default"> */}
        <Grid container justifyContent="center">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
          >
            <Tab label="Purchase Order" {...a11yProps(0)} />
            <Tab label="Purchase Invoice" {...a11yProps(1)} />
            <Tab label="Return/Debate Note" {...a11yProps(2)} />
          </Tabs>
        </Grid>

        {/* </AppBar> */}
        <TabPanel value={value} index={0}>
          <PurchaseOrder />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <PurchaseInvoice />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <ReturnNote />
        </TabPanel>
      </div>
    </>
  )
}
