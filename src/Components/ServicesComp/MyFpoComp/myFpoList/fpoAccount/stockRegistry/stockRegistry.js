import React from 'react'
import PropTypes from 'prop-types'
import {
  TextField,
  Button,
  makeStyles,
  Grid,
  InputAdornment,
  AppBar,
  Tabs,
  Tab,
  Box,
  Typography,
} from '@material-ui/core'
import DataGrid from '../../../../../datagrid/datagrid'
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
  tabCard: {
    margin: '0.5em',
    borderRadius: '0px 0px 20px 20px',
    boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)',
    webkitBoxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)',
    mozBoxShadow: '0px 0px 5px 0px rgba(0, 0, 0, 0.75)',
  },
}))

export default function StockRegistry() {
  const classes = useStyles()
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  return (
    <>
      <Grid container justifyContent="center">
        <h5>Stock Registry</h5>
      </Grid>
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
            centered
            aria-label="scrollable auto tabs example"
          >
            <Tab
              label="Purchase Stock Registry"
              {...a11yProps(0)}
              className={classes.tabCard}
            />
            <Tab
              label="Sales Stock Registry"
              {...a11yProps(1)}
              className={classes.tabCard}
            />
            <Tab
              label="Closing Stock Register"
              {...a11yProps(2)}
              className={classes.tabCard}
            />
          </Tabs>
        </Grid>

        {/* </AppBar> */}
        <TabPanel value={value} index={0}>
          <DataGrid></DataGrid>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <DataGrid></DataGrid>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <DataGrid></DataGrid>
        </TabPanel>
      </div>
    </>
  )
}
