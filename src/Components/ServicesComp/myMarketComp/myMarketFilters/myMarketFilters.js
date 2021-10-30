import React from 'react'
import TreeView from '@material-ui/lab/TreeView'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import TreeItem from '@material-ui/lab/TreeItem'
import {
  Grid,
  makeStyles,
  withStyles,
  TextField,
  InputAdornment,
} from '@material-ui/core'
import Slider from '@material-ui/core/Slider'
import SearchIcon from '@material-ui/icons/Search'

const useStyles = makeStyles((theme) => ({
  filterHeading: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'Grey',
    color: 'white',
    padding: '5px',
    borderRadius: '10px 10px',
  },
}))

const PrettoSlider = withStyles({
  root: {
    color: '#52af77',
    height: 8,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    marginTop: -8,
    marginLeft: -12,
    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit',
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)',
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider)

function MyMarketFilters() {
  const classes = useStyles()
  return (
    <>
      <div style={{ margin: '10px' }}>
        <Grid>
          <Grid className={classes.filterHeading}>
            <h6 className="mb-0">Categories</h6>
          </Grid>
          <TreeView
            className={classes.root}
            defaultCollapseIcon={<ExpandMoreIcon />}
            defaultExpandIcon={<ChevronRightIcon />}
            multiSelect
          >
            <TreeItem nodeId="1" label="Fruits">
              <TreeItem nodeId="2" label="Calendar" />
              <TreeItem nodeId="3" label="Chrome" />
              <TreeItem nodeId="4" label="Webstorm" />
            </TreeItem>
            <TreeItem nodeId="5" label="Vegetables">
              <TreeItem nodeId="6" label="Calendar" />
              <TreeItem nodeId="7" label="Chrome" />
              <TreeItem nodeId="8" label="Webstorm" />
            </TreeItem>
            <TreeItem nodeId="9" label="Cereals">
              <TreeItem nodeId="10" label="Calendar" />
              <TreeItem nodeId="11" label="Chrome" />
              <TreeItem nodeId="12" label="Webstorm" />
            </TreeItem>
            <TreeItem nodeId="13" label="Oil Seeds">
              <TreeItem nodeId="14" label="Calendar" />
              <TreeItem nodeId="15" label="Chrome" />
              <TreeItem nodeId="16" label="Webstorm" />
            </TreeItem>
            <TreeItem nodeId="17" label="Forest Products">
              <TreeItem nodeId="18" label="Calendar" />
              <TreeItem nodeId="19" label="Chrome" />
              <TreeItem nodeId="20" label="Webstorm" />
            </TreeItem>
            <TreeItem nodeId="21" label="Aqua">
              <TreeItem nodeId="22" label="Calendar" />
              <TreeItem nodeId="23" label="Chrome" />
              <TreeItem nodeId="24" label="Webstorm" />
            </TreeItem>
          </TreeView>
        </Grid>
        <Grid>
          <Grid className={classes.filterHeading}>
            <h6 className="mb-0">Variants</h6>
          </Grid>
          <TextField
            variant="outlined"
            label="Search Items"
            size="small"
            margin="normal"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid>
          <Grid className={classes.filterHeading}>
            <h6 className="mb-0">Prices</h6>
          </Grid>
          <Grid style={{ padding: '5px' }}>
            <PrettoSlider
              valueLabelDisplay="auto"
              aria-label="pretto slider"
              defaultValue={20}
            />
          </Grid>
        </Grid>
        <Grid>
          <Grid className={classes.filterHeading}>
            <h6 className="mb-0">Quantity</h6>
          </Grid>
          <Grid>
            <TextField
              variant="outlined"
              fullWidth
              type="number"
              margin="normal"
              size="small"
              id="quantity"
              name="quantity"
              label="Quantity"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">Units</InputAdornment>
                ),
              }}
              className={classes.textField}
            />
          </Grid>
        </Grid>
        <Grid>
          <Grid className={classes.filterHeading}>
            <h6 className="mb-0">Rating &amp; Reviews</h6>
          </Grid>
        </Grid>
      </div>
    </>
  )
}

export default MyMarketFilters
