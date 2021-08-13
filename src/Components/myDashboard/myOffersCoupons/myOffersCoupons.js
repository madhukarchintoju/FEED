import React from 'react'
import PropTypes from 'prop-types'
import { Grid, makeStyles } from '@material-ui/core'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import LocalOfferIcon from '@material-ui/icons/LocalOffer'
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard'
import BookmarkIcon from '@material-ui/icons/Bookmark'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import DataGrid from '../../datagrid/datagrid'

function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
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
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  }
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  offersCouponsHeading: {
    padding: '5px',
    backgroundColor: 'orange',
    textAlign: 'center',
  },
  offersCouponsInfoWrap: {
    // display:'flex',
    justifyContent: 'space-between',
  },
}))

export default function MyOffersCoupons() {
  const classes = useStyles()
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  return (
    <>
      <div className={classes.root}>
        <Grid className={classes.offersCouponsHeading}>
          <h5 className="mb-0">My Offers &amp; Coupons</h5>
        </Grid>
        <AppBar position="static" color="inherit">
          <Grid container justifyContent="center">
            <Tabs
              value={value}
              onChange={handleChange}
              centered
              variant="scrollable"
              scrollButtons="on"
              indicatorColor="secondary"
              textColor="secondary"
            >
              <Tab label="Offers" icon={<LocalOfferIcon />} {...a11yProps(0)} />
              <Tab
                label="Coupons"
                icon={<CardGiftcardIcon />}
                {...a11yProps(1)}
              />
              <Tab label="Wishlist" icon={<BookmarkIcon />} {...a11yProps(2)} />
            </Tabs>
          </Grid>
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
      </div>
    </>
  )
}
